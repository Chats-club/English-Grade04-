// Shared between FillConvStep (the app) and scripts/generate-audio.js —
// builds the full spoken sentence for a conversation/fill-in-the-blank
// item by substituting its answer into any "" blanks. Using one shared
// function guarantees the app and the audio-generation script always agree
// on exactly what text becomes which audio file.
export function buildConversationAudioText(item) {
return item.lines
.map((line) => (line.text.includes("") ? line.text.replace("___", item.answer) : line.text))
.join(" ");
}