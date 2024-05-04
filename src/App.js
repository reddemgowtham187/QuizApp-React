import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./content";
import React from "react";

// import { Q1 } from "./Q1";
// import { List } from "./List";

// import { Q2 } from "./Q2";
// import { Q3 } from "./Q3";
// import { Q4 } from "./Q4";
// import { Submit } from "./Submit";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>

    // <div id="d1">
    //   <form id="f1">
    //     <center>
    //       <Header />
    //       <Q1 />
    //       <List />
    //       <Q2 />
    //       <Q3 />
    //       <Q4 />

    //       <Submit />
    //       <Footer />
    //     </center>
    //   </form>
    // </div>
  );
}

export default App;
