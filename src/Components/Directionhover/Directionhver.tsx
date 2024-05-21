import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { CardStackDemo } from "../Cardstack/Cardstack";

const DirectionAwareHoverDemo = () => {
  const images = [
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715052158/Websites/SCR-20240402-qdaq_nqwv6a.jpg",
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715052230/Websites/SCR-20240402-qjdq_teltfq.jpg",
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715053159/Websites/SCR-20240507-kodp_u6owdk.jpg",
  ];
  const videos = [
    "https://res.cloudinary.com/dzo4lqjb2/video/upload/v1715756062/Websites/cream_style_xzp4w7.mp4",
    "https://res.cloudinary.com/dzo4lqjb2/video/upload/v1715756057/Websites/fd-case3_1_wfedcz.mp4",
    "https://res.cloudinary.com/dzo4lqjb2/video/upload/v1715756063/Websites/fd-case2_1_ntuby2.mp4",
  ];
  const customTexts = [
    "Asheville, North Carolina",
    "Savannah, Georgia",
    "Portland, Oregon",
  ];

  return (
    <>
      <div className="bg-[#e2e0dc] flex  flex-col items-center p-4 ">
        <h1 className="font-semibold text-4xl font-silk-serif text-black">
          Explore Our Latest Projects.
        </h1>
        <br />

      </div>

      <div className="h-[100%]     bg-[#e2e0dc] mb-4 flex items-center align-middle justify-center">
        <div className="grid    grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-2 gap-6 max-w-screen-lg">
          {images.map((imageUrl, index) => (
            <DirectionAwareHover
              key={index}
              imageUrl={imageUrl}
              videoUrl={videos[index]}
              className="object-contain min-w-full min-h-full"
            >
              <p className="font-medium font-silk-serif text-balance text-center whitespace-nowrap left-[3rem] relative top-[-5rem]">
                {customTexts[index]}
              </p>
            </DirectionAwareHover>
          ))}
          <div className="bg-transparent relative top-[-2rem] bottom-[1rem]  ">
            <CardStackDemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionAwareHoverDemo;
