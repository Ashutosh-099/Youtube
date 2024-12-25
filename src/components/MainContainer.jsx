import NavigationPanel from "./NavigationPanel";
import { navigationOptions, tags } from "../utils/constants";
import { useSelector } from "react-redux";
import Tags from "./Tags";
import VideoContainer from "./VideoContainer";
import { useGetVideos } from "../utils/useGetVideos";

const MainContainer = () => {
  const showNav = useSelector((store) => store.app.showNavPanel);
  useGetVideos();

  return (
    <main className="main-container grid grid-flow-col h-custom">
      {showNav && (
        <nav className="nav-container px-1 col-span-1 min-w-52 overflow-y-auto custom-scrollbar">
          <NavigationPanel options={navigationOptions} />
        </nav>
      )}
      <section className="video ml-6 col-span-11 overflow-y-auto custom-scrollbar">
        <Tags tags={tags} />
        <VideoContainer />
      </section>
    </main>
  );
};

export default MainContainer;
