import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LearnSection = () => {
  const svgRef = useRef();
  const [selectedAlgo, setSelectedAlgo] = useState("Selection-Sort");
  const [currentStep, setCurrentStep] = useState(0);

  const algorithms = [
    "8Queen",
    "Hamilton",
    "TSP",
    "Rabin-Karp",
    "Floyd-Warshall",
    "Bubble-Sort",
    "Selection-Sort",
    "Merge-Sort",
    "Quick-Sort",
    "Linear-Search",
    "Binary-Search",
  ];

  const algoSteps = {
    "8Queen": {
      steps: [
        "Place the first queen in the first column.",
        "Move to the next column and place a queen where it is safe.",
        "Backtrack if no safe place.",
        "All queens placed safely!",
      ],
      data: [
        [[0,0]],
        [[0,0],[1,4]],
        [[0,0],[1,4],[2,7]],
        [[0,0],[1,4],[2,7],[3,5],[4,2],[5,6],[6,1],[7,3]],
      ],
    },
    "Bubble-Sort": {
      steps: ["Compare adjacent elements", "Swap if needed", "Move to next pair", "Repeat until sorted"],
      data: [
        [5,3,8,2,4],
        [3,5,8,2,4],
        [3,5,2,8,4],
        [3,5,2,4,8],
        [3,2,5,4,8],
        [2,3,4,5,8],
      ],
    },
    "Selection-Sort": {
      steps: ["Find smallest element", "Swap with first unsorted", "Move boundary right", "Repeat"],
      data: [
        [64,25,12,22,11],
        [11,25,12,22,64],
        [11,12,25,22,64],
        [11,12,22,25,64],
      ],
    },
    "Merge-Sort": {
      steps: ["Divide array into halves", "Sort left half", "Sort right half", "Merge halves"],
      data: [
        [38,27,43,3,9,82,10],
        [27,38,43,3,9,82,10],
        [27,38,43,3,9,10,82],
        [3,9,10,27,38,43,82],
      ],
    },
    "Quick-Sort": {
      steps: ["Choose pivot", "Partition elements", "Sort partitions", "Combine results"],
      data: [
        [10,7,8,9,1,5],
        [1,5,7,8,9,10],
        [1,5,7,8,9,10],
        [1,5,7,8,9,10],
      ],
    },
    "Linear-Search": {
      steps: ["Check first element", "Check second element", "Check third element", "Found / End"],
      data: [5,3,8,2,4],
      highlight: [0,1,2,3],
    },
    "Binary-Search": {
      steps: ["Check middle element", "Go left or right", "Repeat", "Found / End"],
      data: [1,3,5,7,9,11,13],
      highlight: [3,1,5,6],
    },
    "Hamilton": {
      steps: ["Start from a vertex", "Visit unvisited adjacent vertex", "Mark visited and continue", "Check cycle exists"],
      data: [
        [[0,0],[1,1],[2,0],[3,1]],
        [[0,0],[1,1],[2,0],[3,1]],
        [[0,0],[1,1],[2,0],[3,1]],
        [[0,0],[1,1],[2,0],[3,1]],
      ],
    },
    "TSP": {
      steps: ["Start city", "Visit nearest unvisited city", "Repeat", "Return to start"],
      data: [
        [[0,0],[2,3],[5,5],[1,6]],
        [[0,0],[2,3],[5,5],[1,6]],
        [[0,0],[2,3],[5,5],[1,6]],
        [[0,0],[2,3],[5,5],[1,6]],
      ],
    },
    "Rabin-Karp": {
      steps: ["Compute pattern hash", "Slide pattern", "Compare hash", "Check characters"],
      data: ["a","b","c","d","e"],
      highlight: [
        [0,1,2],
        [1,2,3],
        [2,3,4],
        [3,4],
      ],
    },
    "Floyd-Warshall": {
      steps: ["Initialize matrix", "Update shortest paths", "Repeat for each vertex", "Final paths"],
      data: [
        [[0,1,Infinity],[Infinity,0,1],[1,Infinity,0]],
        [[0,1,2],[2,0,1],[1,2,0]],
        [[0,1,2],[2,0,1],[1,2,0]],
        [[0,1,2],[2,0,1],[1,2,0]],
      ],
    },
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    const size = 400;
    const algo = algoSteps[selectedAlgo];
    if (!algo) return;

    // 8Queen visualization
    if (selectedAlgo === "8Queen") {
      const n = 8;
      const cell = size / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
          svg.append("rect")
            .attr("x", j*cell)
            .attr("y", i*cell)
            .attr("width", cell)
            .attr("height", cell)
            .attr("fill", (i+j)%2===0 ? "#f0d9b5" : "#b58863");

      const queens = algo.data[currentStep] || [];
      svg.selectAll("circle")
        .data(queens)
        .enter()
        .append("circle")
        .attr("cx", d => d[1]*cell + cell/2)
        .attr("cy", d => d[0]*cell + cell/2)
        .attr("r", cell/3)
        .attr("fill", "red");
    }

    // Sorting
    if (selectedAlgo.includes("Sort")) {
      const array = algo.data[currentStep] || [];
      const barWidth = size / array.length;
      svg.selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr("x",(d,i)=>i*barWidth)
        .attr("y", d=>size - d*5)
        .attr("width", barWidth-5)
        .attr("height", d=>d*5)
        .attr("fill","#4f46e5");
    }

    // Linear / Binary Search
    if (selectedAlgo === "Linear-Search" || selectedAlgo === "Binary-Search") {
      const array = algo.data;
      const barWidth = size / array.length;
      const highlightIndex = algo.highlight ? algo.highlight[currentStep] : -1;
      svg.selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr("x",(d,i)=>i*barWidth)
        .attr("y", d=>size - d*5)
        .attr("width", barWidth-5)
        .attr("height", d=>d*5)
        .attr("fill",(d,i)=>i===highlightIndex?"red":"#4f46e5");
    }

    // Rabin-Karp
    if (selectedAlgo === "Rabin-Karp") {
      const array = algo.data;
      const barWidth = size / array.length;
      const windowIndices = algo.highlight[currentStep] || [];
      svg.selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr("x",(d,i)=>i*barWidth)
        .attr("y", size-50)
        .attr("width", barWidth-5)
        .attr("height",50)
        .attr("fill",(d,i)=>windowIndices.includes(i)?"red":"#4f46e5");
      svg.selectAll("text")
        .data(array)
        .enter()
        .append("text")
        .attr("x",(d,i)=>i*barWidth+barWidth/4)
        .attr("y", size-55)
        .text(d=>d)
        .attr("fill","black")
        .attr("font-size","14px");
    }

    // Hamilton / TSP graphs
    if (selectedAlgo === "Hamilton" || selectedAlgo === "TSP") {
      const points = algo.data[currentStep] || [];
      svg.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", d => d[0]*50 + 50)
        .attr("cy", d => d[1]*50 + 50)
        .attr("r", 10)
        .attr("fill", "blue");
      for (let i=0;i<points.length-1;i++) {
        svg.append("line")
          .attr("x1", points[i][0]*50 + 50)
          .attr("y1", points[i][1]*50 + 50)
          .attr("x2", points[i+1][0]*50 + 50)
          .attr("y2", points[i+1][1]*50 + 50)
          .attr("stroke", "black")
          .attr("stroke-width", 2);
      }
    }

    // Floyd-Warshall
    if (selectedAlgo === "Floyd-Warshall") {
      const matrix = algo.data[currentStep] || [];
      const cellSize = size / matrix.length;
      const flatValues = matrix.flat().map(v => isFinite(v)?v:10);
      const color = d3.scaleLinear()
        .domain([0,d3.max(flatValues)])
        .range(["#f0f0f0","#4f46e5"]);
      for (let i=0;i<matrix.length;i++)
        for (let j=0;j<matrix[i].length;j++)
          svg.append("rect")
            .attr("x", j*cellSize)
            .attr("y", i*cellSize)
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("fill", color(isFinite(matrix[i][j])?matrix[i][j]:10))
            .attr("stroke","black");
    }

  }, [selectedAlgo,currentStep]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Algorithm Visualizer</h2>
      <div className="flex space-x-2 mb-4 flex-wrap">
        {algorithms.map((algo,i)=>(
          <button
            key={i}
            onClick={()=>{setSelectedAlgo(algo); setCurrentStep(0)}}
            className={`px-3 py-1 rounded ${selectedAlgo===algo?"bg-blue-500 text-white":"bg-gray-300"}`}
          >
            {algo}
          </button>
        ))}
      </div>
      <svg ref={svgRef} width={400} height={400}></svg>
      <div className="flex space-x-4 mt-2">
        <button onClick={()=>setCurrentStep(Math.max(0,currentStep-1))} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
        <button onClick={()=>setCurrentStep(Math.min((algoSteps[selectedAlgo]?.steps.length ||1)-1,currentStep+1))} className="px-4 py-2 bg-green-500 text-white rounded">Next</button>
      </div>
      <div className="mt-4 bg-gray-100 p-4 w-[400px] text-center rounded">
        <p>{algoSteps[selectedAlgo]?.steps[currentStep]}</p>
      </div>
    </div>
  );
};

export default LearnSection;
