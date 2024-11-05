import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export function MarkdownContent({ sourceUrl }) {
  const [mdInfo, setMdInfo] = useState("");

  useEffect(() => {
    fetch(sourceUrl)
      .then((response) => response.text())
      .then((text) => setMdInfo(text));
  }, []);

  if (!mdInfo) {
    return null;
  }

  return (
    <div className="dark prose dark:prose-invert text-slate-400 prose-headings:text-slate-300 text-sm">
      <Markdown>{mdInfo}</Markdown>
    </div>
  );
}
