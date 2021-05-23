import React from "react";
import * as d3 from "d3";

import data from "../src/data";

const Graph = () => {
  const base = d3.select("body").append("main");
  base
    .selectAll("html")
    .data([1, 2, 3, 4, 5])
    .enter()
    .append("div")
    .text((t) => t);

  // text.selectAll("div").data(data).enter().append(text);
  return <body>wfioewjiojewoj</body>;
};

export default Graph;
