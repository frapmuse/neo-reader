# Adding illustrations to the Library app (for ChatGPT / Codex)

This repo is a private reading app. The story text is encrypted, so you cannot read chapters here.
The author will paste the chapter text (or a scene) to you. Your job: make one picture for a scene
and add it to the app. You only ever touch the `illustrations/` folder.

## Steps
1. Read the chapter text the author gave you. Pick one strong scene from the MIDDLE or END
   (never the opening lines: a picture at the top spoils the chapter).
2. Copy ONE sentence from the chapter, exactly as written, that comes right before where the
   picture should appear. The picture is shown directly after the paragraph containing it.
3. Make the image: landscape 16:9, cinematic painterly digital illustration, Chinese historical
   fantasy web-novel art, high detail, no text, no letters, no watermark.
4. Save it as WebP or JPG, about 1400 px wide, under 400 KB, in `illustrations/`.
   Name: `<book>-<chapter>-<short-name>.webp`, for example `neo-012-mulberry-ford.webp`.
5. Add one entry to `illustrations/illustrations.json` (it is a JSON list; keep it valid):

```json
{
  "book": "neo",
  "chapter": "12",
  "after": "The exact sentence from the chapter.",
  "image": "illustrations/neo-012-mulberry-ford.webp",
  "caption": "One short line under the picture."
}
```

- `book`: `neo` = New Earth Online: Wrong Server Lord · `sah` = The Spear and the Halberd
- `chapter`: the chapter number (`"12"`), or `"prologue"`
- `after`: exact sentence (case and curly quotes do not matter). If it is not found, the picture
  goes at the end of the chapter.
- `image`: must start with `illustrations/`
- `caption`: optional, one line, no spoilers beyond the scene shown

6. Commit to `main` (or open a pull request) with a message like
   `Add illustration: NEO Ch12 Mulberry Ford`. The app shows it within about a minute.

## Do not
- Do not edit or delete anything outside `illustrations/` (index.html, data/, sw.js, img/ are built
  automatically and will be overwritten).
- Do not put story text, passwords or private notes in this repo. Pictures in this folder are
  public to anyone who finds the link.

## Character looks (keep consistent)
- Ye Feng (NEO main character, his later look; in early chapters his clothes and gear are plain): Malay man, mid-30s, short neat beard, LONG black hair with the top
  half tied in a small knot at the back with a dark band, rest loose past the shoulders (no topknot);
  black lamellar armour, dark indigo robe, blue sash, silver crescent-over-waves emblem;
  straight sword with a crescent guard and a faint moon-blue wave pattern on the blade.
- See `img/` for the cover and the Ye Feng icon as style references.
