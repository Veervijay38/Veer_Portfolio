import React from "react";
import Lottie from "react-lottie";

const LottieControl = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions}  />
    </div>
  );
};

export default LottieControl;
