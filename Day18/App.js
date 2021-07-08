import React from 'react';
import './App.css';
// import Heading from "./components/heading";
// import Clrbox from "./components/clrbox";
import Card from "./components/card.js";
import Card2 from "./components/card2.js";

var arr = [0,1,2,3,4,5,6,7];


function App() {
  return (
    <>
      <div className="main">
        <div className="box">
          {
            arr.map(i => (
              i%2===0 ?
              <Card /> : <Card2 />
            ))
          }
          {/* <Card /> */}

        </div>
        {/* <Heading />
        <Clrbox /> */}

      </div>
    </>
  );
}

export default App;
