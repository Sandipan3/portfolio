import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import Dock from "../blocks/Components/Dock/Dock";

const Footer = () => {
  const items = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/Sandipan3", "_blank"),
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/sandipan-jha-2a8449236/",
          "_blank"
        ),
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      onClick: () =>
        (window.location.href = "mailto:sandipanjha7872@gmail.com"),
    },
  ];

  return (
    <div className=" rounded-xl flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full flex justify-center mb-4 relative">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>

      <p className="text-sm text-black mt-2 text-center">
        © 2025 Sandipan Jha. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
