
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useGetCountryInfo } from "./utils/useGetCountryInfo";

function App() {
  useGetCountryInfo();

  return (
    <div className="parent-container h-screen overflow-hidden">
      <Header />
      <Outlet />
    </div>
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