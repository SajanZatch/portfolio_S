import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="mt-14 flex flex-wrap gap-10 justify-centerr"
      id="about"
    >
      <div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center"
      >
        {/* <p className={"sectionSubText text-gray-300 ml-20"}>Introduction</p> */}
        <h2 className={"sectionHeadText text-white hidden"}>Welcome</h2>
      </div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[23px] w-full leading-[30px] flex flex-col justify-between gap-6 text-center"
      >
        <div className="text-center">
        
        <h2 className={"sectionHeadText text-white"}>Welcome.</h2>
        <br>
          
        </br>
        <br></br>
        <br>
          
        </br>
          This portfolio presents my journey and experiences in human resources. My work so far has involved recruitment, HR operations, onboarding, and employee engagement across construction and U.S. staffing environments. I’ve worked closely with hiring teams, supported structured hiring processes, and handled various aspects of employee coordination and HR administration.
          <br></br>
                <br>
  
                </br>
                  Along the way, I’ve had the opportunity to interact with professionals from different backgrounds and work settings, gaining insight into how workplaces operate and how people contribute to organizational culture. This space brings together my professional experiences, projects, and interactions that have shaped my understanding of people and work.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>
        <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full mt-6 md:mt-8 -mx-4 md:mx-0 px-4 md:px-0"
          >
          </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
