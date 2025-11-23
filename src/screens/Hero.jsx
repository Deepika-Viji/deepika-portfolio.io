import Lottie from "lottie-react";
import React from "react";
import animation from "../assets/LottieAnimation.json"

const Hero = () => {
    return (
        <section className="w-full px-6 md:px-20 pt-10 pb-0 md:pb-10 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Text Container */}
            <div className="max-w-3xl">
                {/* Welcome Text */}
                <p className="text-white/70 tracking-widest text-sm md:text-base mb-4">
                    HELLO THERE,
                </p>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    I’m <span className="ml-2">Deepika</span>
                </h1>

                {/* Full Stack Developer */}
                <h2 className="text-4xl md:text-6xl font-bold text-[#FF005C] leading-tight mt-2">
                    Product Engineer
                </h2>

                {/* UI/UX Designer */}
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    & Full Stack Developer
                </h2>
            </div>

            <div className="w-full max-w-lg mt-16 md:mt-0">
                <Lottie animationData={animation} loop={true} />
            </div>

        </section>
    );
};

export default Hero;
