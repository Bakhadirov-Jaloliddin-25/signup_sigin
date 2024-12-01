import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center w-full h-full bg-[#0f172a]">
      <div className="loader font-mono font-bold text-4xl text-white">
        <style>{`
          /* HTML: <div class="loader"></div> */
          .loader {
            width: fit-content;
            font-weight: bold;
            font-family: sans-serif;
            font-size: 30px;
            padding-bottom: 8px;
            background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
            animation: l2 2s linear infinite;
          }
          .loader:before {
            content:"Loading..."
          }
          @keyframes l2 {to{background-size: 100% 3px}}
        `}</style>
      </div>
    </div>
  );
};

export default Loader;
