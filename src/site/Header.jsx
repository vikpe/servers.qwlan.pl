import SiteNavigation from "#/site/Navigation";
import { FeaturedStreams } from "#/Streams";

export const SiteHeader = () => (
  <div className="mt-2">
    <div className="lg:flex items-center">
      <div className="flex items-center lg:space-x-4 my-2">
        <a href="/" className="lg:mr-4">
          <img
            src="/assets/img/flag_of_poland.svg"
            width="96"
            alt="QWLAN.PL"
            className="w-[48px] sm:w-[96px] sm:h-[60px] mr-2"
          />
        </a>
        <div className="lg:hidden grow">
          <SiteNavigation />
        </div>
      </div>
      <FeaturedStreams />
    </div>
    <div className="hidden lg:flex mt-1">
      <SiteNavigation />
    </div>
  </div>
);
