import { HorizontalSeparator } from "@qwhub/site/Common";

export const SiteFooter = () => {
  return (
    <div id="app-footer" className="text-sm">
      <HorizontalSeparator />

      <div className="footer pt-1 text-slate-400 leading-loose mb-3 space-x-1 app-links flex items-center justify-center">
        <img
          src="/assets/img/flag_of_poland.svg"
          width="20"
          className="inline-block mr-0.5"
        />
        <a href="/">QWLAN.PL</a> <span>-</span>{" "}
        <span>Polish QuakeWorld LAN Party 2024</span>
      </div>
    </div>
  );
};
