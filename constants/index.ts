// constants/details.js
import react from "@/public/react.png";
import node from "@/public/node.png"
import css from "@/public/css.png"
import git from "@/public/git.png"
import html from "@/public/html.png"
import java from "@/public/java.png"
import js from "@/public/js.png"
import mongo from "@/public/mongodb.ico"
import tailwind from "@/public/tailwind.png"
import web from "@/public/web.png"
import backend from "@/public/backend.png"
import ff from "@/public/favicon.ico"
import code from "@/public/code.png"
import text1 from"@/public/text.png"
import crowdImage from "@/public/crowd.png"
import port from "@/public/port.png"
import sahil from "@/public/sahil.png"
import rohan from "@/public/rohan.png"
import lisa from "@/public/lisa.jpg"
import web3 from "@/public/web3.png"
import amd from "@/public/amd.png"
import solid from "@/public/solid.png"
export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Next.Js Developer",
    icon:ff,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mongo developer",
    icon: mongo,
  },
];
export const experiences = [
  {
    title: "java Programmer",
    company_name: "CodSoft",
    iconBg: "#383E56",
    icon: code,
  date: "September 2023 - October 2021",
    points: [
      "Developing and maintaining web applications using Java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to the development of Java applications with a focus on user interface.",
      "Collaborated with the Codsoft team to deliver high-quality software solutions..",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancing",
    iconBg: "#383E56",
    icon: web,
    date: "july 2023 - Sept 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: react,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name:"web3",
    icon :web3
  },
  {
    name:"solidity",
    icon :solid
  },
  {
    name:"amd",
    icon:amd
  },

];
export const projects = [
  {
    name: "Text Editor",
    description:
      "Designed a Java text editor with a user-friendly interface using AWT and Swing. Demonstrated versatile software skills, emphasizing troubleshooting and UI expertise. Implemented productivity features like search and replace. Committed to creating impactful solutions.",
    tags: [
      {
        name: "Java",
        color: "text-red-300",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "Awt",
        color: "pink-text-gradient",
      },
    ],
    image: text1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crowdfunding dApp (Based on BlockChain)",
    description:
      "I developed a blockchain-based crowdfunding dApp using Solidity and React. Smart contracts were implemented for fundraising, optimizing the web app with Vite. The user-friendly interface was crafted using Tailwind CSS. The dApp enables seamless creation and donation for fundraising campaigns.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name:"Web3"
      }
    ],
    image: crowdImage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "Created a dynamic portfolio website using Next.js, Tailwind CSS, and ReactThree, incorporating captivating 3D models. This immersive platform not only showcases my skills but also offers a unique and visually stunning experience. Explore my work in an interactive environment that seamlessly blends technology and creativity, highlighting the intersection of innovation and web development.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/",
  },
];
 export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but RD proved me wrong.",
    name: "Sahil",
    designation: "CFO",
    company: "Acme Co",
    image: sahil,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like RD does.",
    name: "Rohan Choudhary",
    designation: "Ceo",
    company: "nexan",
    image: rohan,
  },
  {
    testimonial:
      "After Rahul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: lisa,
  },
];
export const routes = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];