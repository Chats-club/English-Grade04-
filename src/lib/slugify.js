// Shared between the app and scripts/generate-audio.js — the audio filename
// for a given phrase is always slugify(phrase) + ".mp3", so both sides must
// use this exact function to agree on filenames.
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
