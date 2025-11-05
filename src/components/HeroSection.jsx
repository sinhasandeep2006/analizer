import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.7.1/dist/dotlottie-wc.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-700 rounded-2xl p-6 sm:p-10 mx-auto max-w-6xl mt-10 shadow-md bg-white">
      {/* left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
        <div className="text-[#414141] space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="w-8 md:w-10 h-[2px] bg-[#414141]"></p>
            <p className="font-semibold text-sm md:text-base tracking-wide">
              OUR BEST ALGOS
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-snug">
            Learn, Build & Innovate
          </h1>

          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="font-semibold text-sm md:text-base uppercase">
              Start Learning
            </p>
            <p className="w-6 md:w-8 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* right side - Lottie animation */}
      <div className="w-full sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0">
        <dotlottie-wc
          src="https://lottie.host/c7e45599-c8f5-4027-a106-16354eddd1c8/snzgHYp2ls.lottie"
          speed="1"
          style={{
            width: "350px",
            height: "350px",
            maxWidth: "90%",
          }}
          mode="forward"
          loop
          autoplay
        ></dotlottie-wc>
      </div>
    </div>
  );
};

export default HeroSection;
