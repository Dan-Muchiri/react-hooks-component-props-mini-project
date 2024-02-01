import React from "react";

function About({ blogImage, aboutText }) {
  const imageUrl = blogImage || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
