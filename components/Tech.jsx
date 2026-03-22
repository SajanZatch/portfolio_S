import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "@/utils/motion";

// Define your skill categories with text items only
const skillCategories = [
  {
    title: "Languages",
    skills: ["English", "Hindi", "Odia"]
  },
  {
    title: "ATS",
    skills: ["Jobdiva"]
  },
  {
    title: "Sourcing",
    skills: ["Naukri", "Indeed", "LinkedIn", "Monster"]
  },
  {
    title: "AI Tools",
    skills: ["Chat GPT", "Grammarly", "Copilot"]
  },
  {
    title: "HR Analytics",
    skills: [ "HROne", "OTL"]
  },
  {
    title: "Other Tools",
    skills: ["Microsoft 365", "Power Bi"]
  },
   {
    title: "HR Specializations",
    skills: ["Recruitment", "Onboarding & joining formalities", "Employee Engagement", "HR Operations", "Talent Acquisition"]
  },
];

function Tech() {
  // Create the left side category names
  const categoryNames = skillCategories.map((category, index) => (
    <h3 className="h-[50px] md:flex items-center hidden text-gray-500 font-medium" key={index}>
      {category.title}
    </h3>
  ));

  // Create the right side with skills
  const skillsList = skillCategories.map((category, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden text-primary font-semibold text-lg mb-2">
        {category.title}
      </h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-3"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="bg-gray-200/50 hover:bg-primary/20 rounded-lg px-4 py-2 transition-all duration-300 border border-gray-700 hover:border-primary cursor-default"
          >
            <span className="text-orange-500 text-sm font-medium">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  ));

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have learnt so far</p>
        <h2 className={"sectionHeadText"}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[80%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
      >
        {/* Left side - Category Names */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {categoryNames}
        </motion.div>
        
        {/* Divider */}
        <div className="w-[2px] h-[500px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
        
        {/* Right side - Skills */}
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {skillsList}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");