import React from "react";
import Countries from "./components/Countries";
import Formbox from "./components/Formbox";
import Nav from "./components/Nav";
import { useGlobalContext } from "./utils/context";

const App = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
      <Nav />
      {isLoading ? (
        "Looooooooooading"
      ) : (
        <main>
          <div className="main-cont">
            <Formbox />
            <Countries />
          </div>
        </main>
      )}
    </>
  );
};

export default App;
