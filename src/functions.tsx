export function renderTextWithBreaks(
  text: string,
  Element: React.ElementType = "p"
) {
  return text
    .split("\n")
    .map((line, idx) =>
      line === "" ? <br key={idx} /> : <Element key={idx}>{line}</Element>
    );
}
