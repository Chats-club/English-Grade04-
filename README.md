# Global Success · Grade 4 (React + Vite)

Interactive practice app based on the Global Success Grade 4 curriculum (MOET).
Currently built: Unit 1 "My Friends", Lesson 1 (Periods 1 & 2).

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
    HomePage.jsx             "/"                      lists all units
    UnitPage.jsx              "/units/:unitId"         lists a unit's periods
    LessonPage.jsx            "/units/:unitId/:lessonId"  renders LessonPlayer
                               (route param is a period id, e.g. "period2")

  components/
    LessonPlayer.jsx         Builds the step sequence from a period's content;
                              owns progress/score/stamp state
    UnitCard.jsx, LessonCard.jsx
    ui/                       PrimaryButton, SectionLabel, ProgressTrail, StampOverlay
    steps/                    VocabStep, MatchStep, ListenNumberStep,
                               FillConvStep, FillPictureStep, CompleteStep

  data/
    units.js                 Index of units → periods
                              (id, lessonLabel, title, topic, contentKey)
    content/
      unit1-lesson1.js          Period 1 content
      unit1-lesson1-period2.js  Period 2 content
      index.js                  Registry mapping contentKey → content module
```

## Exercise types (step components)

| Step type      | Component            | Content field         |
|-----------------|-----------------------|------------------------|
| Vocab flashcards | `VocabStep`           | `content.vocab`        |
| Flag matching     | `MatchStep`            | `content.vocab` + `content.matchRightOrder` |
| Listen & choose picture | `ListenNumberStep` | `content.listenNumber` + `content.characters` |
| Fill in the blank (dialogue) | `FillConvStep` | `content.conversations` |
| Fill in the blank (picture-cued) | `FillPictureStep` | `content.pictureCued` + `content.optionsPool` |

`LessonPlayer`'s `buildSteps()` includes each exercise type only if the
matching content field is present — a content file can mix and match
whichever fields it needs and skip the rest.

## Adding a new period

1. Create `src/data/content/unitX-lessonY-periodZ.js` exporting whichever
   of the fields above the period needs.
2. Register it in `src/data/content/index.js`.
3. Add the period's metadata (id, lessonLabel, title, topic, contentKey) to
   the right unit in `src/data/units.js`.

No routing or component changes needed. A period listed in `units.js`
without matching content automatically shows "Coming soon".

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Known gaps

- Flags/avatars are emoji, not real illustrated assets — swap in `src/data/content/*`.
- No real audio; "listen" exercises show the transcript text with a speaker icon.
- Activity 5 sentences for Period 2 are reconstructed to match the teacher's
  guide's answer key (the guide only lists picture cues + key, not the
  printed Student's Book sentences) — swap in the real wording if you have
  the Student's Book text.

## Adding real audio (ElevenLabs)

Audio is pre-generated as static `.mp3` files, not called live from the
browser — this keeps your API key out of client-side code entirely.

1. Get an API key at https://elevenlabs.io/app/settings/api-keys
2. `cp .env.example .env` and paste your key in
3. `npm run generate-audio` — generates one `.mp3` per phrase into
   `public/audio/`, skipping any that already exist
4. `npm run dev` — the speaker icons in the vocab flashcards and the
   "Listen and choose" exercise now play real audio

To add audio for a new phrase, first make sure the text is collected in
`scripts/generate-audio.js`'s `collectTexts()` function (add a new content
module's fields there as you build more lessons), then re-run
`npm run generate-audio` — it only generates what's missing.

Filenames are `slugify(text) + ".mp3"` (see `src/lib/slugify.js`) — the
`AudioButton` component and the generation script both use this function,
so as long as you pass the exact same text string to `<AudioButton text="...">`
that you added to `collectTexts()`, it'll find the right file.

If a file hasn't been generated yet, the button shows a muted icon instead
of throwing an error.

## Board game (Period 2 fun corner)

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
# English-Grade04-
