import React from "react";
import { icons } from "./data";

export default function Skills() {
    return (
        <>
            <div className="title">Skills</div>
            <div className="skills">
                <div className="skills-container">
                    {icons.map((icon, index) => (
                        <div className="icon" key={index}>
                            {React.cloneElement(icon.svg, { className: "skills-svg" })}
                            <div className="icon-name">{icon.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}