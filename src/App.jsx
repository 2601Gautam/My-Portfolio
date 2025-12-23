import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import project1 from './assets/project-1.png'
import project2 from './assets/project-2.png'
import project3 from './assets/project-3.png'
import Leetcode from './assets/Leetcode.png'
import CodeForces from './assets/CodeForces.png'
import GFG from './assets/GFG.png'
import { Mail ,Linkedin,Instagram} from 'lucide-react';
import "animate.css/animate.compat.css"
function App() {
  const skillDetails = [
    [
      {
        val : "C++",
        perentage : "90",
        color : "orange"
      },
      {
        val : "HTML",
        perentage : "80",
        color : "orange"
      },
      {
        val : "CSS",
        perentage : "85",
        color : "orange"
      },
      {
        val : "JavaScript",
        perentage : "50",
        color : "orange"
      },
      {
        val : "Python",
        perentage : "30",
        color : "orange"
      }
    ],
    [
      {
        val : "ReactJS",
        perentage : "80",
        color : "blue"
      },
      {
        val : "TailwindCSS",
        perentage : "85",
        color : "blue"
      },
      {
        val : "ExpressJS",
        perentage : "50",
        color : "blue"
      },
      {
        val : "NodeJS",
        perentage : "40",
        color : "blue"
      }
    ],
    [
      {
        val : "PostgreSQL",
        perentage : "50",
        color : "green"
      },
      {
        val : "MongoDB",
        perentage : "0",
        color : "green"
      }
    ],
    [
      {
        val : "DSA",
        perentage : "90",
        color : "purple"
      },
      {
        val : "OOPS",
        perentage : "60",
        color : "purple"
      },
      {
        val : "CSP",
        perentage : "50",
        color : "purple"
      },
      {
        val : "DBMS",
        perentage : "50",
        color : "purple"
      },
      {
        val : "CN",
        perentage : "65",
        color : "purple"
      },
      {
        val : "SE",
        perentage : "70",
        color : "purple"
      }
    ]
  ]

  const QualitiesVal = [
    {
      title : "Education",
      Des : "Currently pursuing B.Tech in Information and Communication Technology (ICT) at DA-IICT as a third-year undergraduate student"
    },
    {
      title : "Goals",
      Des : "My goal is to continuously improve my skills in coding, problem solving, and software development, and to work on challenging projects that create meaningful and impactful solutions."
    },{
      title : "Interest" ,
      Des : "I am interested in problem solving, web development, and competitive programming. Outside of tech, I enjoy traveling, playing sports, and exploring new things."
    }
  ]

  const projectDetails = [
    {
      title: "Insight Stox",
      description: "InsightStox is a web-based stock portfolio analyzer that helps users track, manage, and analyze investments using real-time market data and AI-driven insights.",
      img: project1,
      techStack: ["MERN", "PostgreSQL", "LangGraph"],
      githubLink: "https://github.com/2601Gautam/InsightStox---Portfolio-analyzer-tracker-and-console",
      liveDemoLink: "https://insight-stox-portfolio-analyzer-tra-nine.vercel.app",
      details: "Developed as an 11-member group project, the platform focuses on delivering a complete investment analysis solution. I contributed by building the frontend interface of some pages and implemented an end-to-end AI chatbot using LangGraph to assist users with stock-related queries and insights, website provides features such as watchlists, stock comparison, and performance visualization. "
    },
    {
      title: "Invest Hub",
      description: "INVESTHUB is a Database Management System (DBMS) designed to efficiently store, manage, and analyze stock market data, enabling structured and data-driven financial insights.",
      img: project2,
      techStack: ["PostgreSQL", "ER Diagrams", "Relational Design"],
      githubLink: "https://github.com/2601Gautam/Invest-Hub",
      liveDemoLink: "null",
      details: "Designed a comprehensive DBMS to manage stocks, users, brokers, IPOs, mutual funds, and institutional investors. Created a well-structured ER diagram and implemented a normalized relational schema with clearly defined primary and foreign key relationships to ensure data integrity across transactions and holdings. Implemented SQL scripts for data insertion, querying, and reporting, and developed analytical queries using joins, subqueries, views, and aggregate functions to generate insights such as portfolio summaries, IPO participation statistics, mutual fund holdings, and institutional investment trends."
    },
    {
      title: "Blog Application",
      description: "Built a blog application as a learning project to understand full-stack web development, enabling users to create, edit, delete, and view blog posts with a responsive interface.",
      img: project3,
      techStack: ["Node.js", "Express.js", "jQuery", "HTML", "CSS", "EJS"],
      githubLink: "https://github.com/2601Gautam/Blog-application",
      liveDemoLink: "https://blog-application-black-five.vercel.app/",
      details: "Built a blog application as a learning project to understand full-stack web development concepts. The platform allows users to create, edit, delete, and view blog posts, including posts shared by others. Implemented server-side logic using Node.js and Express, dynamic page rendering with EJS, and styled the interface using CSS. The application was designed to be responsive and mobile-friendly, helping strengthen practical understanding of web development workflows.."
    }
  ]

  const experienceDet = [
      {
        title : "JEEVANTIRTH – School of Life-lovers! ",
        Subtitle : "Rural Internship",
        location : "Ahmedabad, Gujarat",
        date : "Dec 2024",
        desc : "Volunteered with a six-member team at Jeevantirth NGO, Ahmedabad , where we spent meaningful time with children through interactive and academic activities, helping them feel encouraged and confident in their abilities."
      }
    ]

    
  const achievements = [
    {
      title: "Leetcode",
      subTitle: "350+ Problems Solved",
      rating: "Max 1555 Rating • Top 30.71%",
      img: Leetcode,
      link: "https://leetcode.com/u/Gautam_2k27/"
    },
    {
      title: "CodeForces",
      subTitle: "180+ Problems Solved",
      rating: "Max : 1050 Rating",
      img: CodeForces,
      link: "https://codeforces.com/profile/Gautam_modi"
    },
    {
      title: " GFG - GeekforGeeks",
      subTitle : "200+ Problems Solved",
      rating : "672 pointes",
      img : GFG,
      link : "https://www.geeksforgeeks.org/profile/mg932y49v",
    },
    {
      title : "Coding Ninjas",
      subTitle : "190+ Problems Solved",
      rating : "1643 points",
      img : "https://files.codingninjas.in/new-cn-logos-1-1711622387.svg",
      link : "https://www.naukri.com/code360/profile/MODIGAUTAM"
    }
  ];
  
   const Contacts = [
    {
      method: "Email",
      icon: Mail,
      link: "mailto:mg9328546@gmail.com"
    },{
      method: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/gautam-modi-4b36b0301/"
    },
    {
      method: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/gautam15_07/?next=%2F"
    }
  ]
  
  return (
    <>
      <Home skillDetails={skillDetails} QualitiesVal={QualitiesVal} projectDetails={projectDetails} experienceDet={experienceDet} achievements={achievements} Contacts={Contacts} />
    </>
  )
}

export default App
