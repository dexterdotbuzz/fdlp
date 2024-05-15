import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

const HoverText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("text-white absolute bottom-4 left-4 z-40", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const DirectionAwareHover = ({
  imageUrl,
  videoUrl,
  children,
  childrenClassName,
  imageClassName,
  className,

}: {
  imageUrl: string;
  videoUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;

}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVideoClick = () => {
    setShowVideo(!showVideo); // Toggle video visibility on click
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={cn(
          "md:h-72 w-60 h-full  md:w-96 bg-transparent  mb-5 direction-aware-hover rounded-3xl overflow-hidden group/card relative",
         
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/50"
              onClick={handleVideoClick}
            >
              <video
                className="max-w-96 max-h-52 md:max-w-screen-lg md:max-h-screen sm:max-h-screen  sm:max-w-screen-lg "
                controls
                autoPlay
                loop
                muted
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className="relative  "
            // Set the height dynamically
            // whileHover={{ scale: 1.1, transition: { delay: 0.1 } }}
            exit={{ opacity: 1 }}
            
            onClick={handleVideoClick} // Show/hide video on click
          >
            <motion.div className="group-hover/card:block hidden absolute inset-0 w-full direction-aware-hover rounded-3xl h-full  bg-black/40 z-10 transition duration-500" />
            <motion.div
              variants={variants}
              whileHover={{ backgroundColor: "#d1d5db" }} 
              className=" h-full rounded-3xl w-full relative bg-[#e2e0dc] "
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <img
                alt="image"
                className={cn(
                  " h-[100%] w-full object-cover sm:border-none direction-aware-hover rounded-3xl",
                  imageClassName
                )}
                src={imageUrl}
              />
            </motion.div>
          </motion.div>

          {isHovered && (
            <motion.div
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "text-white absolute bottom-4  left-4 z-40",
                childrenClassName
              )}
            >
              <HoverText>{children}</HoverText>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};
