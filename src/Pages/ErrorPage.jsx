import React from "react";
import FuzzyText from "../blocks/TextAnimations/FuzzyText/FuzzyText";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
    </div>
  );
};

export default ErrorPage;
