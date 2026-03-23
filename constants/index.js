import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "HR Executive",
    company_name: "Chevrox Construction Pvt. Ltd.",
    icon: "/assets/company/chevrox.png",
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Managing end-to-end recruitment aligned with project-based manpower requirements, including sourcing, screening, and offer rollout.",
      "Designed and implemented a structured digital screening system, reducing screening time by ~70% and improving candidate evaluation and tracking accuracy.",
      "Handling onboarding, HR operations, employee engagement, and maintaining structured records, compliance, and team coordination.",
      
    ],
  },
  {
    title: "Recruitment Associate",
    company_name: "Integrated Resources Inc. (IRI)",
    icon: "/assets/company/iri.jpg",
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Apr 2024",
    points: [
      "Managed U.S.-based hiring across Life Sciences and IT domains, handling diverse role requirements and client expectations.",
      "Sourced and screened candidates using ATS (JobDiva) and Boolean search, ensuring quality talent alignment.",
      "Coordinated interviews, maintained candidate communication, and supported offer negotiations and relationship management.",
    ],
  },
  {
    title: "MBA – Human Resource Management",
    company_name: "Amity University",
    icon: "/assets/company/amity.png",
    iconBg: "#E6DEDD",
    date: "2024 – 2026",
    points: [
      "Developed strong understanding of HR practices including recruitment strategy, people analytics, and organizational behavior through academic learning and real-world case studies.",
      "Worked on “Use of Data Analytics in Improving Recruitment Decisions”, focusing on metrics like time-to-hire, cost-per-hire, and recruitment funnel optimization.",
      "Completed a major research project on “AI-Powered HR Processes and Their Organizational Impact”, exploring how AI enhances efficiency, decision-making, and modern HR functions.",
    ],
  },
  {
    title: "M.Sc. – Biotechnology",
    company_name: "MITS School of Biotechnology",
    icon: "/assets/company/mits.jpg",
    iconBg: "#E6DEDD",
    date: "2021 – 2023",
    points: [
      "Built strong analytical and research-oriented mindset through hands-on laboratory work, experimentation, and scientific documentation.",
      "Completed dissertation on “Synthetic Seed Production of Bacopa monnieri”, focusing on in-vitro propagation and optimization of growth conditions for plant regeneration.",
    ],
  },
  {
    title: "B.Sc. – Biotechnology",
    company_name: "NIIS Institute of Engineering & Technology ",
    icon: "/assets/company/niis.jpg",
    iconBg: "#E6DEDD",
    date: "2018 – 2021",
    points: [
      "Built foundational knowledge in biotechnology, covering core concepts of plant science, genetics, and laboratory techniques.",
      "Completed a project on “Seed Germination and Growth under Salinity Stress in Tossa Jute”, analyzing plant response, growth patterns, and environmental impact on yield.",
     
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Recruitment Funnel Optimization System",
    description:
      "A structured recruitment tracking system that manages and monitors candidate progression across different hiring stages, ensuring clear visibility of the entire recruitment funnel.",
    tags: [
      {
        name: "Excel ",
        color: "blue-text-gradient",
      },
      {
        name: "Google Sheets ",
        color: "green-text-gradient",
      },
      {
        name: "Google Forms",
        color: "yellow-text-gradient",
      },
      
    ],
    image:
     "/document/project1.jpeg",
      howItWorks: [
      "Designed candidate tracking from sourcing to offer stage",
      "Created a structured screening and evaluation system",
      "Implemented automated data collection and filtering for efficient candidate management.",
      "Organized data for real-time hiring visibility.",
    ],
    impact: [
      "Reduced screening time by ~70%",
      "Improved accuracy and decision-making",
      "Enhanced hiring efficiency across roles.",
    ],
  },
  {
    name: "HR Payroll & Attendance Management System",
    description:
      "A structured Excel-based HR system designed to manage employee attendance, salary processing, and payroll records in a centralized and organized manner.",
    tags: [
      {
        name: "Excel ",
        color: "blue-text-gradient",
      },
      {
        name: "Payroll Formulas ",
        color: "green-text-gradient",
      },
      {
        name: "Attendance Tracking System",
        color: "yellow-text-gradient",
      },
    ],
    image: "/document/project2.jpeg",
     howItWorks: [
      "Maintains employee master data and attendance records in a structured format",
      "Automates salary calculation, including earnings, deductions, and net pay",
      "Generates organized salary summaries and reports for efficient payroll tracking",
    ],
    impact: [
      "Simplified payroll and attendance management for small teams",
      "Reduced manual errors in salary calculation",
      "Improved visibility and control over employee records",
    ],
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  // {
  //   name: "Facility Management System",
  //   description:
  //     "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
  //   tags: [
  //     {
  //       name: "typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "tanstack/react-query",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/facility-manager.png",
  //   source_code_link:
  //     "https://github.com/Shivam-Sharma-1/Facility-Management-System",
  //   deployed_link:
  //     "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  // },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/snigdha-rani-das-374054220/",
  },
 
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/hyejin__snigdha/",
  },
];

const heroTexts = [
  "STRATEGIC PLANNER",
  500,
  "ENTHUSIASTIC",
  500,
  "CURIOUS",
  500,
  "PROACTIVE",
  500,
  "ADAPTABLE",
  500,
  "PEOPLE-CENTRIC",
  500,
  "OBSERVANT",
  500,
  "REFLECTIVE",
  500,
  "SELF-DRIVEN",
  500,
  "ADVENTUROUS",
  500,
  "EXPLORER",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
