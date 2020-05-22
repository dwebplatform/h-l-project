import React, { useState, useRef, useEffect } from "react";
import { useSprings, animated } from "react-spring";

import _ from 'lodash';
import swap from "lodash-move";
import ReactDOM from "react-dom";


import "./styles.css";

const TWO_PI = Math.PI * 2;

const DefaultsCircles = [
  "teal",
  "yellow",
  "blue",
  "orange",
  "purple",
  "skyblue",
  "#c0c0c0",
  "#eee",
  "#fff"
];
const circlesWithCoords = [
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  },
  {
    color: DefaultsCircles[Math.floor( Math.random()*DefaultsCircles.length-1)],
    x: 0,
    y: 0
  }
];
circlesWithCoords.forEach((item, i) => {
  item.x = 150 * Math.sin(((i + 1) * TWO_PI) / circlesWithCoords.length);
  item.y = -150 * Math.cos(((i + 1) * TWO_PI) / circlesWithCoords.length);
});
 
function App() {
  
  const [circles, setCircles] = useState(circlesWithCoords);

  const [{ x, y }, setXY] = useState({ x: 0, y: 0 });

  const cirlcesRef = useRef(circles);

  useEffect(() => {
    let newOrderCircles = [...cirlcesRef.current];
    newOrderCircles =  _.shuffle(newOrderCircles)
    cirlcesRef.current = newOrderCircles;
    setCircles(s => {
      return [...newOrderCircles];
    });
  }, []);

  const handleMouseMove = e => {
    setXY({
      x: Math.floor((e.clientX / window.innerWidth) * 255),
      y: Math.floor((e.clientY / window.innerHeight) * 255)
    });
  };
  const [time, setTime] = useState(0);
  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="circle-container">
        {circles.map((item, i) => {
          return (
            <div
              className="circle"
              key={i}
              style={{
                background: `${item.color}`,
                top: `${item.x}px`,
                left: `${item.y}px`
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
