import { Provider } from "react-redux";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import appStore from "./store/store";

function App() {
  return (
    <Provider store={appStore}>
      <div className="parent-container">
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;


/*
* Header
* Main
  * Navigation
  * Video Section
  *   - Tags
  *   - Video Grid
 */