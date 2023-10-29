import Markdown from "react-markdown";
import { useEffect, useState } from "react";

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
    <div className="prose dark:prose-invert text-slate-400 prose-headings:text-slate-300">
      <Markdown>{mdInfo}</Markdown>
    </div>
  );
}
