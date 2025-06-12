import React from "react";
import ChromaGrid from "../blocks/Components/ChromaGrid/ChromaGrid";
import reactNotes from "../assets/react-notes.png";
import ecomm from "../assets/e-comm.png";

const items = [
  {
    image: reactNotes,
    title: "React Notes Project",
    url: "https://sandipan3.github.io/react-notes/",
  },
  {
    image: ecomm,
    title: "E-commerce using Redux Project",
    url: "https://github.com/Sandipan3/E-commerce",
  },
];

const Projects = () => {
  return (
    <div className="flex justify-center items-center  sm:h-[600px] sm:relative">
      <ChromaGrid
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        items={items}
      />
    </div>
  );
};

export default Projects;
