import React from "react";
import styles from "./Star.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating({ rating }) {
  const filled = Array.from(Array(Math.round(rating)));
  const unfilled = Array.from(Array(5 - Math.round(rating)));
  return (
    <div className={styles.starContainer}>
      {filled.map((fill, index) => {
        return (
          <FontAwesomeIcon
            key={index}
            size={"xs"}
            color="#fac300"
            icon={faStar}
          />
        );
      })}
      {unfilled.map((unfilled, index) => {
        return (
          <FontAwesomeIcon
            key={index * 2}
            size={"xs"}
            color="grey"
            icon={faStar}
          />
        );
      })}
    </div>
  );
}
