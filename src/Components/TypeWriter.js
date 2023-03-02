import React from "react";
import Typewriter from "typewriter-effect";

function TypeWritercomponet() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "React Native Developer",
          "ReactJs Developer",
          "NodeJs Developer",
          "MERN Stack Developer",
          "Self Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default TypeWritercomponet;
