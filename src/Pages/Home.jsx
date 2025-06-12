import TechStack from "../Pages/TechStack";
import Projects from "../Pages/Projects";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import InfiniteMenu from "../blocks/Components/InfiniteMenu/InfiniteMenu";
import html from "../assets/html.jpg";
import css from "../assets/CSS.webp";
import tailwind from "../assets/tailwind.png";
import javaScript from "../assets/JavaScript.jpg";
import react from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import node from "../assets/node.jpg";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";
import github from "../assets/github.png";

const items = [
  {
    image: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image: javaScript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    image: react,
    link: "https://react.dev/",
  },
  {
    image: redux,
    link: "https://redux.js.org/",
  },
  {
    image: node,
    link: "https://nodejs.org/",
  },
  {
    image: express,
    link: "https://expressjs.com/",
  },
  {
    image: git,
    link: "https://git-scm.com/",
  },
  {
    image: github,
    link: "https://github.com/",
  },
  {
    image: mongo,
    link: "https://www.mongodb.com/",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-2 sm:gap-6">
      <About />
      <TechStack />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <div className="flex justify-center items-center  sm:h-[600px] sm:relative sm:min-h-screen mt-4 sm:mt-0">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default Home;
