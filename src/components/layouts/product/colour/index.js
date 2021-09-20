import React, { useState } from "react";
import styles from "./Colour.module.css";

export default function Colour({ props: defaultItem }) {
  const [activeColour, setActiveColour] = useState("red");
  const colours = defaultItem[0].attributes[0].options;
  return (
    <div className={styles.colourContainer}>
      {colours.map((colour, index) => {
        return colour.toLowerCase() === activeColour ? (
          <div
            key={colour}
            style={{ background: `${colour}` }}
            className={`${styles.active} ${styles.colour}`}
          ></div>
        ) : (
          <div
            key={colour}
            style={{ background: `${colour}` }}
            className={styles.colour}
          ></div>
        );
      })}
      <span style={{ color: "var(--secondary-colour)" }}>
        colour: <span style={{ color: "black" }}>{activeColour}</span>
      </span>
    </div>
  );
}
