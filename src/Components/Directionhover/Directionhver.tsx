import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { CardStackDemo } from "../Cardstack/Cardstack";

const DirectionAwareHoverDemo = () => {
  const images = [
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715052158/Websites/SCR-20240402-qdaq_nqwv6a.jpg",
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715052230/Websites/SCR-20240402-qjdq_teltfq.jpg",
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715053159/Websites/SCR-20240507-kodp_u6owdk.jpg",
  ];
  const videos = [
    "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
  ];
  const customTexts = [
    "the interior design ",
    "buiding design building",
    "Custom design home",
  ];

  return (
    <>
      <div className="bg-[#e2e0dc] flex  flex-col items-center p-4 ">
        <h1 className="font-semibold text-2xl font-silk-serif text-black">
          Explore Our Latest Projects.
        </h1>
        <br />
        <h2 className="font-medium font-silk-serif text-slate-700">
          Discover groundbreaking AI solutions that are transforming industries
          and driving progress. Step into the future with our cutting-edge
          projects.
        </h2>
      </div>

      <div className="h-[100%]     bg-[#e2e0dc] mb-4 flex items-center align-middle justify-center">
        <div className="grid   grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-2 gap-6 max-w-screen-lg">
          {images.map((imageUrl, index) => (
            <DirectionAwareHover
              key={index}
              imageUrl={imageUrl}
              videoUrl={videos[index]}
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
