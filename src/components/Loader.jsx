import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#1f2937]">
      <div className="loader font-mono font-bold text-4xl">
        <style>{`
          .loader {
            width: fit-content;
            background: linear-gradient(90deg, #000 50%, #0000 0) right / 200%
              100%;
            animation: l21 2s infinite linear;
          }

          .loader::before {
            content: "Loading...";
            color: #0000;
            padding: 0 5px;
            background: inherit;
            background-image: linear-gradient(90deg, #fff 50%, #000 0);
            -webkit-background-clip: text;
            background-clip: text;
          }

          @keyframes l21 {
            100% {
              background-position: left;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;
