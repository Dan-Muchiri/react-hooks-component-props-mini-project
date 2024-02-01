import React from "react";

function Article({ title, date, preview, minutes }) {
  const formattedDate = date || "January 1, 1970";

    const numCoffeeEmojis = Math.ceil(minutes / 5);
    const coffeeEmojis = Array(numCoffeeEmojis).fill("☕️");

    const numBentoEmojis = Math.ceil(minutes / 10);
    const bentoEmojis = Array(numBentoEmojis).fill("🍱");

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>

      <p>
        {minutes < 30 ? coffeeEmojis.join(" ") : bentoEmojis.join(" ")}
        {" "}
        {minutes} min read
      </p>
    </article>
  );
}

export default Article;
