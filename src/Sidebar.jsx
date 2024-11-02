import { MarkdownContent } from "@qwhub/MarkdownContent";

export function Sidebar() {
  return (
    <div className="my-6">
      <MarkdownContent
        sourceUrl={
          "https://raw.githubusercontent.com/vikpe/servers.qwlan.pl/main/info.md"
        }
      />
    </div>
  );
}
