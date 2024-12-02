import React from "react";

export function Button ({onClick, children}){
    return (
        <button onClick={onClick} style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "grey",
            color: "white",
            border: "none",
          }}>
            {children}
          </button>
    )

}