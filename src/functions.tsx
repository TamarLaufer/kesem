export function renderTextWithBreaks(
  text: string,
  Wrapper: React.ElementType = "p",
  className?: string
) {
  return text.split("\n").map((line, index) => {
    const highlightRegex = /\[\[HIGHLIGHT\]\](.*?)\[\[\/HIGHLIGHT\]\]/;
    const match = line.match(highlightRegex);

    if (match) {
      const content = match[1];
      return (
        <Wrapper key={index} className={className}>
          <span className="highlight-line">{content}</span>
        </Wrapper>
      );
    }

    return (
      <Wrapper key={index} className={className}>
        {line}
      </Wrapper>
    );
  });
}
