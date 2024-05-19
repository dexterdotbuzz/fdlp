import React, { useState } from "react";
import images from "./Images";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ImageCarousel: React.FC = () => {
  const [selectedMainImageIndex, setSelectedMainImageIndex] = useState<number | null>(0);
const [selectedMainBelowCardIndex, setSelectedMainBelowCardIndex] = useState<number | null>(null);


  const handlesideCardClick = (index: number) => {
    setSelectedMainImageIndex(index);
    
    
  };

  const handlebelowCardClick = (index: number) => {
   
    setSelectedMainBelowCardIndex(index);
  };

  return (
  
    <div className="relative  flex flex-col body-text md:flex-row justify-center h-full items-center mx-12 p-[1rem]">
      {/* Main image */}
      <div className="relative  md:w-1/2 mb-8 md:mb-0 flex flex-col justify-end items-end">
        <ReactCompareSlider
                   itemOne={
                    <>
                      <ReactCompareSliderImage
                        src={
                          selectedMainBelowCardIndex !== null &&
                          images.belowBefore[selectedMainBelowCardIndex]
                            ? images.belowBefore[selectedMainBelowCardIndex].src
                            : images.before.src // Default to the original image if no card below is selected
                        }
                        alt="Before Image"
                        title={
                          selectedMainBelowCardIndex !== null &&
                          images.belowBefore[selectedMainBelowCardIndex]
                            ? images.belowBefore[selectedMainBelowCardIndex].title
                            : images.before.title // Default title
                        }
                      />
                      {images.before.title && (
                        <p className="text-xs text-white font-serif mt-1 md:left-[2rem] lg:left-[15rem] absolute max-lg:left-[17rem] right-0 md:right-[2rem]">
                          {images.before.title}
                        </p>
                      )}
                    </>
                  }
        
          itemTwo={
            <>
              <ReactCompareSliderImage
                src={
                  selectedMainImageIndex !== null &&
                  images.otherImages[selectedMainImageIndex]
                    ? images.otherImages[selectedMainImageIndex].before.src
                    : selectedMainBelowCardIndex !== null &&
                      images.otherImages[selectedMainBelowCardIndex as number]
                    ? images.otherImages[selectedMainBelowCardIndex as number]
                        .before.src
                    : "" // Placeholder or default src value
                }
                alt="After Image"
                title={
                  selectedMainImageIndex !== null &&
                  images.otherImages[selectedMainImageIndex]
                    ? images.otherImages[selectedMainImageIndex].before.title
                    : selectedMainBelowCardIndex !== null &&
                      images.otherImages[selectedMainBelowCardIndex as number]
                    ? images.otherImages[selectedMainBelowCardIndex as number]
                        .before.title
                    : "" // Placeholder or default title
                }
              />

              {selectedMainImageIndex !== null &&
                images.otherImages[selectedMainImageIndex] && (
                  <p
                    className="text-xs text-white font-serif absolute left-0 bottom-0 top-0 right-0 mt-1 mb-1 ml-1 md:left-[1rem] sm:left-[5rem] md:right-0 lg:left-[25rem] lg:right-[auto] lg:inset-x-0"
                    style={{ left: "20rem" }}
                  >
                    {images.otherImages[selectedMainImageIndex].after.title}
                  </p>
                )}
            </>
          }
        />
      </div>

      {/* Three cards below the main image */}
      <div className="md:flex flex-col main-index-card-sm justify-start items-center w-full md:w-auto md:absolute left-0 md:left-[3rem] xl:left-[10rem]  bottom-0 md:bottom-7">
        <div className="grid grid-cols-3 gap-4">
          {images.belowBefore.map((image, index) => (
            <div
              key={index}
              onClick={() => handlebelowCardClick(index)}
              className={`cursor-pointer ${
                selectedMainBelowCardIndex === index ? "border-white" : ""
              }`}
            >
              <img
                src={image.src}
                alt={`Three Cards ${index }`}
                className={`min-w-full border h-full sm:w-[6rem] sm:h-[6rem] picbelow items-start object-cover ${
                  selectedMainBelowCardIndex === index
                    ? "border-blue-100 border-2"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Four side small cards with images */}
      <div className="w-full md:w-2/3 p-4 overflow-x-hidden px-[2rem] directionimgcarl    "
    
      >
        <div className=" md:block       ">
          <h2
            className="text-3xl md:text-2xl text-black font-bold mb-4"
            style={{ fontStyle: "italic" }}
          >
            AI Was Just a Dream. Now, It's Reality.
          </h2>
          <p className="text-gray-600 mb-4 ">
          Decoding the Global Design Ecosystem:   When Award-Winning Designers Meet AI, Projects Come Alive Worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 max-w-screen-xl mx-auto">
          {images.otherImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handlesideCardClick(index)}
              className={`relative cursor-pointer object-cover bg-white rounded-lg shadow-sm ${
                selectedMainImageIndex === index ? "border" : ""
              } ${selectedMainImageIndex !== index ? "opacity-50" : ""}`}
              
            
            >
              <img
                src={image.before.src}
                alt={`Small Card ${index}`}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              {selectedMainImageIndex === index && (
                <div className="absolute  inset-0 flex justify-center items-center">
                  <RiCheckboxCircleFill className="text-[#4d453e] relative bottom-3  text-2xl" />
                </div>
              )}
              <p className="bg-white text-center text-sm font-medium py-2">
                {image.before.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
    
  );
};

export default ImageCarousel;
