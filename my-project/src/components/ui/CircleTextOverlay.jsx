import React from "react";

let testText = "Consectetur eros ultricies hendrerit.us, eget venen";
const CircleTextOverlay = ({ headingText, paraText = testText }) => {
  return (
    <div className="relative">
      <div className="w-40 h-40 bg-transparent border-4 border-cream rounded-full"></div>
      <h1 className="p-1 bg-lightNavy z-2 absolute top-20 left-20 transform -translate-x-1/2 -translate-y-1/2 text-cream text-[65px] font-bold">
        {headingText}
      </h1>
      <p className="bg-lightNavy relative -mt-5 mr-11 ml-2 text-center text-cream text-xs max-w-40 break-normal">
        {paraText}
      </p>
    </div>
  );
};

export default CircleTextOverlay;
