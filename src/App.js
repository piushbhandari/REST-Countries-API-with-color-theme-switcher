import React from "react";
import Countries from "./components/Countries";
import Formbox from "./components/Formbox";
import { useGlobalContext } from "./utils/context";

const App = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
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
