import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { MovingBorderDemo } from "../Button/Movingbutton";
import { useState, useEffect, useRef } from "react";
import PricingTable from "../Pricingtable/Pricingtable";
import DirectionAwareHoverDemo from "../Directionhover/Directionhver";
import Imagecarsol from "../Imagecarsol/Imagecarsol";
import Flowbitesection1 from "../Flowbite1/Flowbite";
import Flowbite2 from "../Flowbite2/Flowbite2";
import FlowbiteSection3 from "../Flowbite3/Flowbite3";
import DesignRetailSection from "../Contactus/Contactus";
import Buttonmobile from "./Buttonmobile";

export function LampDemo() {
  const [showButton, setShowButton] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = videoSectionRef.current;
      if (!videoSection) return;

      const videoSectionBounds = videoSection.getBoundingClientRect();
      if (window.scrollY > videoSectionBounds.bottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <LampContainer>
       
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-[#3F3E3D] to-[#3F3E3D] font-silk-serif pb-5 bg-clip-text text-center text-4xl font-medium tracking-tight  text-transparent md:text-7xl"
        >
          When Award-Winning Designers Meet AI <br />  Projects Come Alive Worldwide
        </motion.h1>
        <div ref={videoSectionRef} className="mt-12 dark relative text-center p-7">
          
          <div className="relative overflow-hidden">
          <video
  className="w-[40rem] h-auto rounded-[8px]"
  loop
  muted
  autoPlay
  playsInline
  preload="auto"
>
  <source src="https://res.cloudinary.com/dzo4lqjb2/video/upload/v1709629255/Websites/frpujesvaor5oetcwhcn.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
          </div>
          <MovingBorderDemo />
        </div>
      </LampContainer>

    
      {showButton && (
 <Buttonmobile/>
)}

      <section>
        <DirectionAwareHoverDemo/>
        <div className=" bg-[#ffffff]">

        <Imagecarsol/>
        </div>
        <Flowbitesection1/>
        <Flowbite2/>
        <FlowbiteSection3/>
        <div className="bg-[#e2e0db]">

        <DesignRetailSection/>
        </div>
     
   
    

      <PricingTable />
      </section>
    </>
  );
}
