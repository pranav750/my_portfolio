const PROJECTS = [
  {
    id: "1",
    title: "CollegeERP",
    description:
      "It is a college database management system. This web application allows us to make CRUD operations on Admins, Students, Teachers and Subjects. Teachers have the access to give marks and attendance to Students. Admins have the responsibility of handling all the information on the application.",
    image: "/college-erp.png",
    technologies: [
      "React",
      "Redux",
      "Material UI",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    links: [
      {
        name: "Github",
        value: "https://github.com/pranav750/CollegeERP",
      },
      {
        name: "Live Hosted",
        value: "https://college-erp.netlify.app",
      },
    ],
  },
  {
    id: "2",
    title: "SpyDark",
    description:
      "Spydark is a web crawler which can be used to crawl both surface web as well as dark web using breadth first search and multi threading algorithm. It has a feature of crawling a URL and keyword. Along with this, it provides various other features like getting link information, finding link similarities, flagging links, generating word cloud and generating link tree.",
    image: "/spydark.png",
    technologies: ["React", "Redux", "Material UI", "Django", "MongoDB"],
    links: [
      {
        name: "Demo",
        value: "",
      },
    ],
  },
  {
    id: "3",
    title: "Client CA",
    description:
      "It's an e-commerce website where people can buy courses. I worked as a backend developer on this project where I developed the order and products controller.",
    image: "/ca.png",
    technologies: ["TypeScript", "NodeJS", "MongoDB"],
    links: [
      {
        name: "Live Hosted",
        value: "",
      },
    ],
  },
];

export default PROJECTS;
