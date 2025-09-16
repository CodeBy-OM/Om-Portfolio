// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import codecLogo from './assets/company_logo/codec_logo.png';
import codtechLogo from './assets/company_logo/codtech_logo.jpeg';

// Education Section Logo's
import akgecLogo from './assets/education_logo/akgec_logo.png';
import rizviLogo from './assets/education_logo/rizvi_logo.jpeg';

// Project Section Logo's
import MovieLogo from './assets/work_logo/Movie.png';
import BasicPortfolioLogo from './assets/work_logo/BasicPortfolio.png';
import LearningLogo from './assets/work_logo/Learning.png';
import TodoLogo from './assets/work_logo/Todo.png';
import chatLogo from './assets/work_logo/chat.png';
import QuizAppLogo from './assets/work_logo/QuizApp.png';
import SocialMediaLogo from './assets/work_logo/SocialMedia.png';
import PortfolioWebsiteLogo from './assets/work_logo/PortfolioWebsite.png'
import WeatherAppLogo from './assets/work_logo/WeatherApp.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Html', logo: htmlLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codecLogo,
      role: "Web Developer",
      company: "Codec Technologies",
      date: "June 2025 - August 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: codtechLogo,
      role: "Frontend Developer",
      company: "CodTech IT Solutions Pvt Ltd",
      date: "June 2025 - July 2025",
      desc: "Contributed to innovative projects as a Frontend Developer, leading development using technologies such as HTML, CSS, JavaScript and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: akgecLogo,
      school: "AKGEC, Ghaziabad",
      date: "Sept 2022 - Jul 2026",
      grade: "76.2%",
      desc: "I currently pursuing my Bachelor's degree in Computer Science from AKGEC College, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - CS (Computer Science)",
    },
    {
      id: 1,
      img: rizviLogo,
      school: "Dr. Rizvi Learner's Academy, Jaunpur",
      date: "Apr 2020 - March 2021",
      grade: "75.6%",
      desc: "I completed my class 12 education from Dr. Rizvi Learner's Academy, Jaunpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: rizviLogo,
      school:"Dr. Rizvi Learner's Academy, Jaunpur",
      date: "Apr 2018 - March 2019",
      grade: "77.7%",
      desc: "I completed my class 10 education from Dr. Rizvi Learner's Academy, under the CBSE board, where I studied core subjects including English, Mathematics, Science, and Social Science.",
      degree: "CBSE(X), Secondary Education",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Movie Maniac Website",
      description:
        "A React-based movie explorer that lets you search and browse films via a public movie API. View posters, ratings, and detailed info in a fast, responsive UI.",
      image: MovieLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/CodeBy-OM/MovieManiac",
    },
    {
      id: 1,
      title: "Real Now Chat App",
      description:
         "A full-stack chat application with secure authentication and persistent conversations. Real-time messaging and a responsive Tailwind UI deliver a smooth experience.",
      image: chatLogo,
      tags: ["React JS","tailwindcss" ,"Node.js", "express.js","mongodb","Validation"],
      github: "https://github.com/CodeBy-OM/Real-Chat-Now-App",
    },
      {
      id: 2,
      title: "Social Media Dashboard",
      description:
          "A social scope dashboard that aggregates social metrics and content via APIs. Interactive widgets and filters surface insights on users, posts, and engagement.",
      image: SocialMediaLogo,
      tags: ["React JS","tailwindcss","Node.js","javascript","Api"],
      github: "https://github.com/CodeBy-OM/Social-Media-Dashboard",
    },
      {
      id: 3,
      title: "Weather App",
      description:
          "A weather app built with React that shows current conditions and a 5-day forecast using the OpenWeatherMap API. Features responsive layout, location search, and smooth navigation.",
      image: WeatherAppLogo,
      tags: ["React JS", "OpenWeatherMap API", "CSS", "Fetch API"],
      github: "https://github.com/CodeBy-OM/Weather_app",
    },
      {
      id: 4,
      title: "My Portfolio Website",
      description:
        "A personal portfolio built with React to showcase projects, skills, and contact info. Smooth navigation and fully responsive layouts across devices.", 
      image: PortfolioWebsiteLogo,
      tags: ["React JS", "HTML", "CSS"],
      github: "https://github.com/CodeBy-OM/Om-Portfolio",
    },
    {
      id: 5,
      title: "E-Learning Website",
      description:
        "An E-learning site with structured course pages, lessons, and basic quizzes. Built with vanilla HTML/CSS/JS for clean design and quick loads.",
      image: LearningLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/CodeBy-OM/E-Learning-Platform",
    },
    {
      id: 6,
      title: "To Do List App",
      description:
         "A lightweight To-do List app to add, complete, and remove tasks with an intuitive interface. Focused on everyday productivity with a clean, minimal UI.",
         image: TodoLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
    },
    {
      id: 7,
      title: "Interactive Quiz App",
      description:
         "A browser-based quiz app with multiple-choice questions, instant feedback, and score tracking. Responsive design and smooth transitions keep users engaged.",
      image: QuizAppLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/CodeBy-OM/Interactive-quiz-app",
    },
    {
      id: 8,
      title: "Basic Interactive Portfolio",
      description:
        "A basic React portfolio to show projects, skills, and contact info, fully responsive",
      image: BasicPortfolioLogo,
      tags: ["React JS", "HTML", "CSS"],
      github: "https://github.com/CodeBy-OM/Portfolio-Website",
    }
  ];  