import NavigationPanel from "./NavigationPanel";
import { navigationOptions, tags } from "../utils/constants";
import { useSelector } from "react-redux";
import Tags from "./Tags";

const MainContainer = () => {
  const showNav = useSelector((store) => store.app.showNavPanel);
  return (
    <section className="main-container grid grid-flow-col">
      {showNav && (
        <nav className="nav-container px-1 col-span-1 min-w-44">
          <NavigationPanel options={navigationOptions} />
        </nav>
      )}
      <section className="video ml-6 col-span-11">
        <Tags tags={tags} />
      </section>
    </section>
  );
};

export default MainContainer;
