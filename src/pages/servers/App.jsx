import React from "react";
import { SiteFooter } from "#/site/Footer";
import { SiteHeader } from "#/site/Header";
import Servers, { ServerPoller } from "#/servers/Servers";
import { Sidebar } from "#/Sidebar";

export const App = () => {
  return (
    <>
      <SiteHeader />
      <div className="2xl:flex 2xl:gap-x-8">
        <div className="grow">
          <Servers />
        </div>

        <div className="2xl:w-80">
          <Sidebar />
        </div>
      </div>

      <SiteFooter />
      <ServerPoller />
    </>
  );
};

export default App;
