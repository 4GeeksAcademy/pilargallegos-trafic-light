import { useState } from "react";
import { Light } from "./Light";
import { Button } from "./Button";

export function TrafficLight() {
    const [activeColor, setActiveColor] = useState("null");
    const [colors, setColors] = useState(["red", "yellow", "green"]);
    const buttonText = colors.includes("purple") ? "Delete purple" : "Add purple";


    const changeColor = () => {
        const currentIndex = colors.indexOf(activeColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setActiveColor(colors[nextIndex]);
    };
    const togglePurple = () => {
        const isPurplePresent = colors.includes("purple");
        alert(isPurplePresent ? "New color deleted!" : "New color added!"); setColors(prevColors => isPurplePresent ? prevColors.filter(color => color !== "purple") : [...prevColors, "purple"]);
    };
    return (
        <>
            <container style={{
                backgroundColor: "black", width: "150px", padding: "10px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center",
                margintop: "auto", margin: "10px"

            }}>

                {colors.map((color) => (
                    <Light
                        key={color}
                        color={color}
                        isActive={activeColor === color}
                        onClick={() => setActiveColor(color)}
                    />
                ))}
            </container>
            <Button onClick={changeColor}>Change color</Button>
            <Button onClick={togglePurple}>{buttonText}</Button>
        </>

    );
}