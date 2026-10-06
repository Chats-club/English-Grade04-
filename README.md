# Global Success · Grade 4 (React + Vite)

Interactive practice app based on the Global Success Grade 4 curriculum (MOET).
All 20 units are built, each with 10 periods (Lessons 1–5) — 200 playable
periods in total.

It's a fully static frontend: no backend, no database. Lesson content lives
in JS modules bundled at build time, and audio is pre-generated `.mp3` files
in `public/audio/`.

## Structure

The curriculum's real hierarchy is **Unit → Lesson → Period**, and a single
Lesson can span multiple Periods (e.g. Lesson 1 covers Periods 1–2, Lesson 2
starts at Period 3). Periods are the actual teachable/playable sessions, so
they're the addressable unit in the app — not Lessons.

```
src/
  main.jsx, App.jsx        Entry point + routes (react-router-dom)
  index.css                Tailwind + fonts + global styles

  pages/
    HomePage.jsx             "/"                         lists all units
    UnitPage.jsx             "/units/:unitId"            lists a unit's periods
    LessonPage.jsx           "/units/:unitId/:lessonId"  renders LessonPlayer
                              (route param is a period id, e.g. "period2")

  components/
    LessonPlayer.jsx         Builds the step sequence from a period's content;
                              owns progress/score/stamp state
    UnitCard.jsx, LessonCard.jsx
    ui/                       PrimaryButton, SectionLabel, ProgressTrail,
                              StampOverlay, AudioButton, ClockFace
    steps/                    One component per exercise type (see below)

  data/
    units.js                 Index of units → periods
                              (id, lessonLabel, title, topic, contentKey)
    content/
      unitX-lessonY-periodZ.js  One content module per period
      index.js                  Auto-registers every file in this folder,
                                keyed by filename (= contentKey)

  lib/
    slugify.js               text → audio filename (shared with the script)
    conversationAudio.js     builds the spoken text for dialogue items
    usePlayAudio.js          fire-and-forget audio playback hook

scripts/
  generate-audio.js          Build-time ElevenLabs TTS → public/audio/*.mp3
```

## Exercise types (step components)

`LessonPlayer`'s `buildSteps()` includes each exercise type only if the
matching content field is present — a content file can mix and match
whichever fields it needs and skip the rest.

| Step                              | Component               | Content field(s)                              |
|-----------------------------------|-------------------------|-----------------------------------------------|
| Phonics flashcards                | `VocabStep`             | `phonicsDrill`                                |
| Vocab flashcards + matching       | `VocabStep`, `MatchStep`| `vocab` + `matchRightOrder`                   |
| Listen & choose picture           | `ListenNumberStep`      | `listenNumber` + `characters`                 |
| Fill in the blank (dialogue)      | `FillConvStep`          | `conversations`                               |
| Fill in the blank (picture-cued)  | `FillPictureStep`       | `pictureCued` + `optionsPool`                 |
| Board game                        | `BoardGameStep`         | `boardGame`                                   |
| Crossword                         | `CrosswordStep`         | `crossword`                                   |
| Spin the wheel — true/false       | `WheelJudgeStep`        | `wheelJudge`                                  |
| Spin the wheel — icons            | `WheelJudgeIconStep`    | `wheelJudgeIcon`                              |
| Pick a card & translate           | `CardPickTranslateStep` | `cardPick`                                    |
| Make a sentence with mixed words  | `SentenceScrambleStep`  | `sentenceScramble`                            |
| Read and match                    | `ReadMatchStep`         | `readMatch`                                   |
| Listen and tick                   | `ListenTickStep`        | `listenTick`                                  |
| Find the clock                    | `ClockFinderStep`       | `clockFinder`                                 |
| Lesson complete                   | `CompleteStep`          | (always last)                                 |

## Adding a new period

1. Create `src/data/content/unitX-lessonY-periodZ.js` exporting whichever
   of the fields above the period needs. The filename (without `.js`) is
   its `contentKey` — `src/data/content/index.js` and
   `scripts/generate-audio.js` both pick it up automatically.
2. Add the period's metadata (id, lessonLabel, title, topic, contentKey) to
   the right unit in `src/data/units.js`.
3. Run `npm run generate-audio` to create audio for any new phrases.

No routing or component changes needed. A period listed in `units.js`
without a matching content file automatically shows "Coming soon".

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Audio (ElevenLabs)

Audio is pre-generated as static `.mp3` files, not called live from the
browser — this keeps your API key out of client-side code entirely.

1. Get an API key at https://elevenlabs.io/app/settings/api-keys
2. `cp .env.example .env` and paste your key in (optionally set
   `ELEVENLABS_VOICE_ID` to use a different voice)
3. `npm run generate-audio` — generates one `.mp3` per phrase into
   `public/audio/`, skipping any that already exist

The script loads every module in `src/data/content/` and collects the
phrases to speak in `collectTexts()`. If you add a new exercise type with
spoken text, add its field there.

Filenames are `slugify(text) + ".mp3"` (see `src/lib/slugify.js`) — the
`AudioButton` component and the generation script both use this function,
so as long as you pass the exact same text string to `<AudioButton text="...">`
that `collectTexts()` collects, it'll find the right file.

If a file hasn't been generated yet, the button shows a muted icon instead
of throwing an error.

## Known gaps

- Flags/avatars are emoji, not real illustrated assets — swap in `src/data/content/*`.
- Progress and score aren't saved; refreshing a lesson starts it over.
- Unit 1 Period 2's Activity 5 sentences are reconstructed to match the
  teacher's guide's answer key (the guide only lists picture cues + key, not
  the printed Student's Book sentences) — swap in the real wording if you
  have the Student's Book text.

## Board game (Unit 1 Period 2 fun corner)

`BoardGameStep` reconstructs the physical board-game handout as a playable
mini-game: roll a die, move a token along a traced path, and answer a
3-option sentence check ("I'm X. I'm from Y.") whenever you land on a
character tile. Special tiles (move forward/back, lose a turn, go back to
start) apply automatically.

The handout's path snakes around the board in a way that's ambiguous from
the image alone — `data/content/unit1-lesson1-period2.js`'s `boardGame.path`
traces a linear best-guess route through the bordered tiles (skipping
decorative art). If you have the actual intended tile order, edit that
array directly — the component just walks whatever path it's given.
