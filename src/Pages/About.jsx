import profileImage from "../assets/SandipanJha_12023002022006_Passport.png";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";
import ScrambledText from "../blocks/TextAnimations/ScrambledText/ScrambledText";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="wrapper flex flex-col justify-evenly items-center gap-8 p-6 ">
      <div className="image">
        <TiltedCard
          imageSrc={profileImage}
          altText="Sandipan Jha"
          captionText="Sandipan Jha"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>

      <ScrambledText
        className="scrambled-text-demo text-black sm:max-w-2xl"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        I am Sandipan Jha, a 3rd-year B.Tech student at the University of
        Engineering and Management, Kolkata, majoring in Computer Science and
        Technology with a minor in Cybersecurity. Passionate about web
        development, I specialize in building responsive and user-friendly
        applications. My skill set includes HTML, CSS, JavaScript, React, Redux
        , Node, Express Git and GitHub. I’m constantly exploring new
        technologies to enhance my expertise. Driven by curiosity and a
        commitment to growth, I aim to contribute to innovative projects and
        solve real-world problems through technology.
      </ScrambledText>
    </div>
  );
};

export default About;
