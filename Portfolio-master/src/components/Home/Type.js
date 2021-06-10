import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Data Science Enthusiast",
          "Full Stack Developer",
          "Mentor",
        ],
        autoStart: true,
        loop: true,
        showCursor: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
