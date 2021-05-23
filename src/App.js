import React from "react";
import data from "./data";
import "./App.css";
import Editor from './Editor';

const Hexagon = ({ x, y }) => (
  <svg
    width="30"
    height="34"
    viewBox="0 0 30 34"
  // styles={{
  //   top: y,
  //   left: x,
  // }}
  >
    <path
      d="M0.506348 24.9083V8.95184L14.8387 0.958791L29.1711 8.95184V24.9083L14.8387 32.9014L0.506348 24.9083Z"
      stroke="#FF000"
    />
  </svg>
);

function App() {
  console.log("data", data);
  return (
    <div className="App">
      <Editor />wd
      {data[0].title}
      {data[0].lessons.map((lesson, index) => {
        // let x;
        // let y;

        // if (index > 2) {

        // }

        return <Hexagon />;
      })}
    </div>
  );
}

export default App;
