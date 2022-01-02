import React from "react";
import { useMediaQuery } from "react-responsive";
import UPSCPage from "./components/Home/desktop";
import UPSCMobile from "./components/Home/mobile";
import "./App.css";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (isMobile) {
    return <UPSCMobile />;
  } else {
    return <UPSCPage />;
  }
}

export default App;
