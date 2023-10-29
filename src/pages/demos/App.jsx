import React from "react";
import { SiteHeader } from "#/site/Header";
import { SiteFooter } from "#/site/Footer";
import { RecentDemos } from "#/pages/demos/RecentDemos";
import { ServerPoller } from "#/servers/Servers";

export const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <SiteHeader />

      <div className="my-6 grow">
        <RecentDemos />
      </div>

      <SiteFooter />
      <ServerPoller />
    </div>
  );
};

export default App;
