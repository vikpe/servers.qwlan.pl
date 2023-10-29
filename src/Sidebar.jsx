import { Heading } from "./Common";
import { MarkdownContent } from "#/MarkdownContent";

export function Sidebar() {
  return (
    <div className="my-6">
      <Heading text="INFO" icon="event" />
      <MarkdownContent
        sourceUrl={
          "https://raw.githubusercontent.com/vikpe/servers.qwlan.pl/main/info.md"
        }
      />
    </div>
  );
}
