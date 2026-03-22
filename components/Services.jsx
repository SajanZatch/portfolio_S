import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import truncateText from "@/utils/truncate";
import okeke from "./../public/assets/icons/okeke.jpeg";
import polina from "./../public/assets/icons/polina.jpeg";
import linkedin from "./../public/assets/icons/linkedin.png";

// Custom Project Card Component with dynamic icon and formatted text
function CustomProjectCard({
  index,
  name,
  description,
  tags,
  profileLink,
  projectLink,
  projectIcon,
}) {
  const CHAR_LIMIT = 280;

  // Function to format the name into separate lines
  const formatName = (fullName) => {
    // Check if the name contains " - "
    if (fullName.includes(" - ")) {
      const [personName, roleAndOrg] = fullName.split(" - ");
      
      // Check if roleAndOrg contains ", "
      if (roleAndOrg.includes(", ")) {
        const [role, organization] = roleAndOrg.split(", ");
        return { personName, role, organization };
      }
      
      return { personName, role: roleAndOrg, organization: null };
    }
    
    return { personName: fullName, role: null, organization: null };
  };

  const { personName, role, organization } = formatName(name);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Make the entire card clickable for YouTube link */}
      <div onClick={() => window.open(projectLink, "_blank")} className="cursor-pointer">
        <Tilt
          tiltMaxAngleX="10"
          tiltMaxAngleY="10"
          className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[570px] w-full h-fit min-h-[590px] shadow-sm shadow-primary hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative w-full h-[230px]">
            <div className="w-full h-full object-cover rounded-2xl relative">
              <Image
                src={projectIcon}
                alt={personName}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="object-cover rounded-2xl"
              />
            </div>
            {/* LinkedIn Profile Icon Button - opens LinkedIn */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the card click from triggering
                  window.open(profileLink, "_blank");
                }}
                className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 overflow-hidden"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            {/* Name on first line */}
            <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[22px] md:text-[24px]">
              {personName}
            </h3>
            
            {/* Role on second line (if exists) */}
            {role && (
              <p className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] md:text-[18px] font-semibold mt-2">
                {role}
              </p>
            )}
            
            {/* Organization on third line (if exists) */}
           {organization && (
  <p className="mt-2">
    <span className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px] md:text-[16px] font-bold bg-primary/20 px-2 py-1 rounded-md inline-block">
      {organization}
    </span>
  </p>
)}
            
            {/* Description */}
            <p className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
              {truncateText(description, CHAR_LIMIT)}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags && tags.map((tag) => (
              <p
                key={`${personName}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
}

function Services() {
  // Define your two custom projects with different icons and links
  const customProjects = [
    {
      id: 1,
      name: "Okeke Chibuzor - Head People & Admin, Crestsage Limited",
      description: "Adihuba Chibuzor Okeke is a strategic HR and administrative professional with over 9 years of experience across multiple industries, including real estate, banking, and consulting. She is known for her strong focus on people operations and building effective workplace practices.",
      tags: [
        { name: "HR Leadership", color: "blue-text-gradient" },
        { name: "People Operations", color: "green-text-gradient" },
        { name: "Strategic HR", color: "pink-text-gradient" },
      ],
      profileLink: "https://www.linkedin.com/in/adihuba-chibuzor-okeke-acipm-hrpl-fcihrm-69a06711a/",
      projectLink: "https://www.youtube.com/watch?v=-A77oYl5uVQ",
      projectIcon: okeke,
    },
    {
      id: 2,
      name: "Polina Karelina - HR Director, Nestle (Ukraine & Moldova)",
      description: "Polina is a seasoned HR leader with 20+ years of global experience, leading large-scale people operations and driving strategic,inclusive workplace initiatives.She brings expertise in talent development, organizational transformation,change management and people-centric approach.",
      tags: [
        { name: "HR Strategy", color: "blue-text-gradient" },
        { name: "Talent Development", color: "green-text-gradient" },
        { name: "Change Management", color: "pink-text-gradient" },
        { name: "People Operations", color: "orange-text-gradient" },
      ],
      profileLink: "https://www.linkedin.com/in/polinkagera2008/",
      projectLink: "https://www.youtube.com/watch?v=yGcI4jmfEnY",
      projectIcon: polina,
    },
  ];

  return (
    <>
      {/* Image Section */}
<div className="mt-14 flex flex-wrap gap-10 justify-center">
  <motion.div
    variants={fadeIn("", "", 0.1, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="w-full mt-6 md:mt-8 -mx-4 md:mx-0 px-4 md:px-0"
  >
    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-lg md:rounded-xl translate-x-[-20px] md:translate-x-[-40px]">
      <Image
        src="/document/people.png" 
        alt="About section image"
        fill
        className="object-cover"
        priority
      />
    </div>
    
    {/* Text Section - Made to display in a single line */}
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="object-cover"
      
    >
     <div className="px-4">
  <div className="relative mt-4 dark:text-ctnSecondaryDark text-orange-600 text-[18px] md:text-[20px] lg:text-[23px] w-full leading-[28px] md:leading-[30px] text-center break-words">
    <span>
      PEOPLE is a LinkedIn-based global initiative that captures real journeys, experiences, and insights from HR professionals across countries. It highlights the human side of HR while fostering a collaborative space for shared learning, cultural understanding, and professional growth.
    </span>
  </div>
</div>
    </motion.div>
  </motion.div>
</div>

      {/* Custom Projects Section with two different projects */}
      <div className="mt-20 w-full">
        <div className="flex justify-center flex-wrap gap-7">
          {customProjects.map((project, index) => (
            <CustomProjectCard
              key={`project-${project.id}`}
              index={index}
              name={project.name}
              description={project.description}
              tags={project.tags}
              profileLink={project.profileLink}
              projectLink={project.projectLink}
              projectIcon={project.projectIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;