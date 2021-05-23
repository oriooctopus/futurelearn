import { useD3 } from "./hooks/useD3";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import data from "./data.ts";

const dataset = [100, 200, 300, 400, 500];

const WIDTH = 840;
const HEIGHT = 630;

function BarChart({ data }) {
  const ref = useRef(null);
  useEffect(() => {
    let size = 500;
    let svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", 30)
      .attr("x", "50")
      .attr("y", "100")
      .attr("height", 34)
      .attr("viewBox", "0 0 30 34");
    let rect_width = 95;

    const container = d3.select(ref.current).append("div");

    container
      .selectAll("svg")
      .data(dataset)
      .enter()
      .append("svg")
      .attr("width", 30)
      .attr("x", "50")
      .attr("y", "100")
      .attr("height", 34)
      .attr("viewBox", "0 0 30 34")
      .append("path")
      .attr(
        "d",
        "M0.506348 24.9083V8.95184L14.8387 0.958791L29.1711 8.95184V24.9083L14.8387 32.9014L0.506348 24.9083Z"
      )
      .attr("stroke", "#FF0000");
  }, []);

  return <div ref={ref}></div>;
}

export default BarChart;
