import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { fadeIn, textVariant } from "@/utils/motion";
import { heroTexts } from "@/constants";

function Hero({ loading, isMobile }) {
  return (
    <section
      className={`relative w-full h-[100svh] md:max-h-[800px] max-h-[600px] mx-auto flex flex-col`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex flex-row items-center justify-between gap-10`}
      >
        {/* Left side - Text content - now takes full width on mobile */}
        <div className="flex flex-row items-start gap-5 flex-1 md:flex-1 w-full md:w-auto">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView={!loading && "show"}
            viewport={{ once: true, amount: 0.25 }}
            className="w-full"
          >
            <h1 className={`heroHeadText`}>
              Hi, I&apos;m{" "}
              <span className="dark:text-five text-primary">Snigdha</span>
            </h1>
            <p className={`heroSubText mt-2 tracking-wide text-red-400`}>
              <TypeAnimation
                sequence={heroTexts}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </p>
            
            {/* Horizontal line of text */}
            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.5)}
              initial="hidden"
              whileInView={!loading && "show"}
              viewport={{ once: true, amount: 0.25 }}
              className="mt-8"
            >
              <div className="flex flex-row flex-nowrap gap-4 md:gap-6 items-center justify-start">
               
                <span className="text-red-700 text-sm md:text-base font-medium whitespace-nowrap">
                   <span className="text-red-400 text-sm md:text-base">✔</span> Connect People
                </span>
               
                <span className="text-red-700 text-sm md:text-base font-medium whitespace-nowrap">
                   <span className="text-red-400 text-sm md:text-base">✔</span> Hire Talent
                </span>
                
                <span className="text-red-700 text-sm md:text-base font-medium whitespace-nowrap">
                  <span className="text-red-400 text-sm md:text-base">✔</span>  Build Culture
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Image - Hidden on mobile, visible on md screens and up */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.8)}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.25 }}
          className="hidden md:flex flex-1 justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl bg-transparent">
            <Image
              src="/document/bgi.png"
              alt="Profile"
              fill
              className="object-contain rounded-full "
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 left-1/2 justify-center items-center z-20 hidden md:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;