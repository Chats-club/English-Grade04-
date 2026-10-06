// Registry of built lesson content, keyed by `contentKey` (see data/units.js).
// Every file in this folder is picked up automatically: a file named
// `unit1-lesson1-period1.js` is registered as contentKey "unit1-lesson1-period1".
// A period listed in data/units.js with no matching file will show as "Coming soon".

const modules = import.meta.glob(["./*.js", "!./index.js"], { eager: true });

const CONTENT = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.replace(/^\.\/(.*)\.js$/, "$1"), mod])
);

export function getContent(contentKey) {
  return CONTENT[contentKey] || null;
}
