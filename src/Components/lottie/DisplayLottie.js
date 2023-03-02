import React from "react";
import Lottie from "lottie-react";
import codinglottie from "./coding.json";

const DisplayLottie = ({ animationPath }) => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "play",
        frames: [0],
      },
    ],
  };
  return (
    <div onClick={() => null}>
      <Lottie
        interactivity={interactivity}
        animationData={codinglottie}
        loop={true}
        autoPlay={true}
      />
    </div>
  );
};

export default DisplayLottie;
