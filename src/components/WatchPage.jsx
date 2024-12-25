import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationPanel from "./NavigationPanel";
import { navigationOptions } from "../utils/constants";
import WatchVideo from "./WatchVideo";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const showNav = useSelector((store) => store.app.showNavPanel);
  const [searchParams] = useSearchParams();

  return (
    <main className="main-container grid grid-flow-col h-custom">
      {showNav && (
        <nav className="nav-container max-w-52 col-span-1 px-1 overflow-y-auto custom-scrollbar">
          <NavigationPanel options={navigationOptions} />
        </nav>
      )}
      <section className="video overflow-y-auto col-span-12 flex flex-col gap-4">
        <WatchVideo videoId={searchParams.get("v")} />
        <div className="flex justify-evenly mx-4 my-1 gap-2">
          <CommentSection />
          <LiveChat />
        </div>
      </section>
    </main>
  );
};

export default WatchPage;
