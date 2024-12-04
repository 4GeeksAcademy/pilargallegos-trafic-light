import React from "react";

export function Light({ color, isActive, onClick }) {
    return (
        <div 
            style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: color,
                opacity: isActive ? color : "grey", 
                margin: "10px",
                cursor: "pointer",
                border: isActive ? "5px solid white" : "none",
            }} 
            onClick={onClick} 
        />
    );
}