import { HorizontalSeparator } from "#/site/Common";

export const SiteFooter = () => {
  return (
    <div id="app-footer" className="text-sm text-center pb-4 text-slate-400">
      <div className="my-4">
        <HorizontalSeparator />
      </div>
      <img
        src="/assets/img/flag_of_poland.svg"
        width="24"
        className="inline-block mr-1"
      />{" "}
      QWLAN.pl - Polish QuakeWorld LAN Party
    </div>
  );
};
