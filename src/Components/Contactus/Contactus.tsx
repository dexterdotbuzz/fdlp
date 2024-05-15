import React, { useState } from "react";
import img from "../../assets/interiordeg.jpg";
import img2 from "../../assets/furniture.jpg";
import { Button } from "../ui/moving-border";

const DesignRetailSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    "Interior Designers"
  );

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold mb-4 font-silk-serif">
          Not just AI, we make your project live remotely
        </h1>
        <p className="text-lg mb-8 font-silk-serif">
          Get AI + World Class Designers work for your project
        </p>
        <div className="mb-8">
          <button
            className={`mr-4 py-2 px-6 rounded-lg font-silk-serif ${
              selectedOption === "Interior Designers"
                ? "bg-brown border bg-[#806B5A] w-[12rem] text-white font-semibold"
                : ""
            }`}
            onClick={() => handleButtonClick("Interior Designers")}
          >
            AI designer
          </button>
          <button
            className={`py-2 px-4 rounded-lg font-silk-serif ${
              selectedOption === "Furniture Vendors"
                ? "bg-brown border font-semibold bg-[#806B5A] text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Furniture Vendors")}
          >
            World Class Designers
          </button>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src={selectedOption === "Interior Designers" ? img : img2}
              alt="Illustration"
              className="w-full object-contain h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 body-text">
            <div className="text-black font-semibold p-2">
              {selectedOption === "Furniture Vendors" ? (
                <div className="text-left">
                  <p className="text-[#91969B] p-3">
                    <span className="font-semibold text-black">2D Floor Plan Design:</span>{" "}
                    Upload your CAD file (DWG) and share your design dreams. We'll
                    deliver a customized 2D floor plan for you in just 48-72 hours!
                  </p>
                  <p className="text-[#91969B] p-3">
                    <span className="font-semibold text-black">Floor Plan to 3D VR:</span>{" "}
                    Convert your CAD file to a personalized 3D rendering! Describe your
                    preferred style and receive your VR-compatible design in 48-72 hours.
                  </p>
                  <p className="text-[#91969B] p-3">
                    <span className="font-semibold text-black">Home Décor Package:</span>{" "}
                    Upload your floor plan and share your style and budget preferences. Choose furniture from the US or abroad and
                    receive a mood board with a clickable shopping list in 48-72 hours!
                  </p>
                </div>
              ) : (
                <div className="text-left">
                  <p className="text-[#91969B] p-3">
                    <span className="font-semibold text-black">AI Style Matcher:</span>{" "}
                    Describe your dream style or upload images of designs you love. Our AI instantly analyzes them
                    and suggests similar projects from around the world to match your vision!
                  </p>
                  <p className="text-[#91969B] p-3">
                    <span className="font-semibold text-black">Transform Existing Spaces with Ease:</span>{" "}
                    Upload a photo of your space and select a style from our curated presets.
                    Our AI will instantly redesign your space with your chosen aesthetic
                  </p>
                  <p className="text-[#91969B] p-3">
                    <span className="font-semibold text-black">See It Before You Build It: </span>{" "}
                    Use a reference project image to visualize your space transformed with a similar, stunning style!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Button
        borderRadius="1.75rem"
        className="  bg-[#806B5A] font-bold text-stone-100 dark:text-stone-600 border-neutral-200 dark:border-transparent"
      >
        Get Started
      </Button>
      </div>
    </div>
  );
};

export default DesignRetailSection;