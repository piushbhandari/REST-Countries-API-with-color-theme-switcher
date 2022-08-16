import React from "react";
import Formbox from "./components/Formbox";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="main-cont">
          <Formbox />
        </div>
      </main>
    </>
  );
};

export default App;
