import React from "react";
import { CardProps } from "../interfaces";
import "./Card.css";

const Card = React.memo(function Card({
  id,
  title,
  dateString,
  selected,
  handleClick,
}: CardProps) {
  console.log(`${id} Card`);
  return (
    <article
      className={`Card ${selected ? "selected" : null}`}
      onClick={() => handleClick(id)}
    >
      {selected ? (
        <span role="img" aria-label="item selected" className="icon-selected">
          ◼️
        </span>
      ) : (
        <span role="img" aria-label="item" className="icon-not-selected">
          ◻️
        </span>
      )}
      {dateString} - {title}
    </article>
  );
});

export default Card;
