import React from "react";
import { TrafficLight } from "./components/TrafficLight";

export default function App() {
  return (
    <div
    style={{
      height: "100vh", 
      display: "flex",
      flexDirection:"column",
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      
    }}
  >
      <TrafficLight />
    </div>
  );
}