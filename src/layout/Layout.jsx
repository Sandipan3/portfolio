import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import { Outlet } from "react-router-dom";
import DotGrid from "../blocks/Backgrounds/DotGrid/DotGrid";
import Particles from "../blocks/Backgrounds/Particles/Particles";
import GlitchText from "../blocks/TextAnimations/GlitchText/GlitchText";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = window.innerWidth <= 640;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col justify-between relative h-screen ">
      {isLoading ? (
        <>
          <GlitchText
            speed={1.5}
            enableShadows={true}
            enableOnHover={false}
            className="flex items-center justify-center h-full"
          >
            Sandipan Jha
          </GlitchText>
          <div className="absolute inset-0 -z-10">
            <DotGrid
              dotSize={10}
              gap={15}
              baseColor="#FFFFFF"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </>
      ) : (
        <>
          <div className=" inset-0 fixed">
            {isMobile ? (
              <Particles
                particleColors={["FFFFFF", "#FFFFFA"]}
                particleCount={10000}
                particleSpread={100}
                speed={0.1}
                particleBaseSize={500}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
              />
            ) : (
              <Particles
                particleColors={["FFFFFF", "#FFFFFA"]}
                particleCount={20000}
                particleSpread={100}
                speed={0.1}
                particleBaseSize={1000}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
              />
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Navbar />
              <Header />
            </div>
            <main className="flex flex-col justify-center items-center gap-4">
              <AnimatePresence mode="wait">
                <Outlet />
              </AnimatePresence>
            </main>
            <Footer />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Layout;
