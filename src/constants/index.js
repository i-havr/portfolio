import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  goit,
  starbucks,
  sodruzhestvo,
  university,
  carrent,
  jobit,
  tripguide,
  threejs,
  rest,
  styledComponents,
  goosetrack,
  petly,
  phonebook,
  filmoteka,
  icecream,
  webstudio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
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
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "rest",
    icon: rest,
  },
  {
    name: "styledComponents",
    icon: styledComponents,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "The Master of Finance (obtained degree)",
    company_name: "National University of State Tax Service of Ukraine (Irpin)",
    icon: university,
    iconBg: "#383E56",
    date: "2006 - 2009",
    points: [],
  },
  {
    title: "Export Manager",
    company_name: "Sodruzhestvo LLC GC (Kherson)",
    icon: sodruzhestvo,
    iconBg: "#383E56",
    date: "Jul 2014 - Feb 2022",
    points: [
      "Implemented a system of electronic declaration of goods at the enterprise.",
      "Increased annual export volume by an average of 10%.",
      "Helped to implement the system TeamWork (project and team management software).",
      "Participated in the ISO certification of the enterprise.",
    ],
  },
  {
    title: "Fullstack Developer (completed course)",
    company_name: "IT Academy GoIT (Kyiv)",
    icon: goit,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developed web applications using React.js, Node.js and other related technologies.",
      "Collaborated with team members during team projects to create high-quality products.",
      "Participated in one of the projects as a team leader.",
      "Participated in code reviews.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Goose Track",
    description:
      "A calendar application for planning affairs and events. Frontend and backend have been completed. Implemented authorization and authentication. Added validation of forms and user data, as well as the ability to change the avatar. Responsive design, theming and language change performed. Team project. Role: developer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: goosetrack,
    project_link: "https://goose-track-inteam.netlify.app/",
    source_code_link:
      "https://github.com/AfanasevKirillGitHub/goose_track_frontend",
  },
  {
    name: "Petly",
    description:
      "Web application that allows users to search, sell and buy pets. Added personal account. The ability to add ads about animals, add ads to favorites, filter ads by category has been implemented. Team project. Role: developer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: petly,
    project_link: "https://afanasevkirillgithub.github.io/petly_frontend/",
    source_code_link: "https://github.com/AfanasevKirillGitHub/petly_frontend",
  },
  {
    name: "Phonebook",
    description: `Application for adding, editing, deleting and searching contacts. Added user registration and authorization. Applied adaptive layout with the principle "Mobile first". Solo project.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled_components",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: phonebook,
    project_link: "https://i-havr.github.io/goit-react-hw-08-phonebook",
    source_code_link: "https://github.com/i-havr/goit-react-hw-08-phonebook",
  },
  {
    name: "Filmoteka",
    description:
      "Website for finding information about movies. Application with a responsive layout. Added personal account. The ability to add films to list of favorites or watched has been implemented. Role: Developer.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: filmoteka,
    project_link: "https://i-havr.github.io/filmoteka/index.html",
    source_code_link: "https://github.com/i-havr/filmoteka",
  },
  {
    name: "IceCream",
    description:
      "Ice cream company website with responsive layout, burger menu, modal window and attractive design. Role: Team lead.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: icecream,
    project_link: "https://i-havr.github.io/icecream-team-project/",
    source_code_link: "https://github.com/i-havr/icecream-team-project",
  },
  {
    name: "WebStudio",
    description:
      "My first solo project :) Landing page for Web-Studio with responsive layout and a presentable design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: webstudio,
    project_link: "https://i-havr.github.io/goit-markup-hw-08/",
    source_code_link: "https://github.com/i-havr/goit-markup-hw-08",
  },
];

export { services, technologies, experiences, testimonials, projects };
