import { FaReact, FaNode, FaCss3Alt, FaHtml5, FaJava } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMysql, SiMongodb, SiFirebase, SiC, SiDotnet } from 'react-icons/si';

import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.jpg';

export const Skills = [
    {
        id: 0,
        tech: 'HTML',
        icon: <FaHtml5 />
    },
    {
        id: 1,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 2,
        tech: 'JavaScript',
        icon: <SiJavascript />
    },
    {
        id: 3,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 4,
        tech: 'Node JS',
        icon: <FaNode />
    },
    {
        id: 5,
        tech: 'C++',
        icon: <SiCplusplus />
    },
    {
        id: 6,
        tech: 'C',
        icon: <SiC />
    },
    {
        id: 7,
        tech: 'Java',
        icon: <FaJava />
    },
    {
        id: 8,
        tech: 'VB.Net',
        icon: <SiDotnet />
    },
    {
        id: 9,
        tech: 'SQL',
        icon: <SiMysql />
    },
    {
        id: 10,
        tech: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        id: 11,
        tech: 'Firebase',
        icon: <SiFirebase />
    },
];


export const projectDetails = [
    {
        id: 0,
        project_name: 'Art Asta',
        project_description: 'Led the development of a web application designed to connect artists and art enthusiasts through a dynamic auction platform. The application enabled artists to showcase their portfolios and auction their artwork, fostering engagement through a competitive bidding process. Additionally, implemented features allowing art enthusiasts to post "art on demand" requests with image references, streamlining communication for custom projects and pricing discussions.',
        tech: ['HTML', 'CSS', 'Javascript','Firebase'],   
        project_img: Project1,
        project_url: 'https://artasta.netlify.app/',
        reverse: false,
    },
    { 
        id: 1,
        project_name: 'Kisan',
        project_description: 'Kisan is built to empower Indian farmers by providing tailored crop recommendations, real-time market insights, weather forecasts, and resources for sustainable farming practices. To enhance accessibility, the platform features multilingual support, ensuring usability for farmers across different regions. Additionally, Kisan incorporates an AI-powered chatbot for instant assistance, offering a holistic solution for informed agricultural decision-making.',
        tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'OpenAI'],    
        project_img: Project2,
        project_url: 'http://kisanai.ca/landing',
        reverse: true,
    }
];

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'My Education',
        href: 'Education'
    },
    {
        id: 4,
        name: 'Contact Me',
        href: 'Contact'
    }
];


export const educationData = [
    {
        id: 0,
        degree: 'Post-Degree Diploma in Mobile & Web App Development',
        institution: 'Langara College, Vancouver, British Columbia',
        duration: 'January 2024 - August 2025'
    },
    {
        id: 1,
        degree: 'Masters of Computer Applications',
        institution: 'Indira Gandhi National Open University, Delhi, India',
        duration: 'November 2021 - July 2023'
    },
    {
        id: 2,
        degree: 'Bachelors of Computer Applications',
        institution: 'Jagan Institute of Management Studies, Delhi, India',
        duration: 'August 2018 - June 2021'
    }
];
