import { DirectionAwareHover } from "../ui/direction-aware-hover";
// import vedio1 from "../../assets/cream style.mp4"; 
import { CardStackDemo } from "../Cardstack/Cardstack";
// import vedio2 from "../../assets/fd-case3 (1).mp4"
// import vedio3 from "../../assets/fd-case2 (1).mp4"
const DirectionAwareHoverDemo = () => {
  const images = [
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715052158/SCR-20240402-qdaq_nqwv6a.jpg",
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715052230/SCR-20240402-qjdq_teltfq.jpg",
    "https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715053159/SCR-20240507-kodp_u6owdk.jpg",
  ];

  const videos = [
    'https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4', 
    'https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4',
    'https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4'
  ];
  const customTexts = [
    "the interior design ",
    "buiding design",
    "Custom design",
  ];

  // Calculate the maximum height of the cards
  // const maxCardHeight = Math.max(
  //   ...Array.from(document.querySelectorAll(".direction-aware-hover")).map(
  //     (card) => card.getBoundingClientRect().height
  //   )
  // );

  return (
    <>
   <p className="bg-[#e2e0dc] flex flex-col   items-center justify-center p-4 h-full">
  <h1 className="font-semibold text-4xl font-serif text-black mb-4">Explore Our Latest Projects.</h1>
  <h2 className="font-medium text-4xl font-serif text-slate-700 mb-10 text-center">
    Discover groundbreaking AI solutions that are transforming 
    industries and driving progress. <br/>
    Step into the future with our cutting-edge projects.
  </h2>
</p>

  
    <div className="h-[100%]     bg-[#e2e0dc] mb-4 flex items-center align-middle justify-center">
    
      <div className="grid   grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-2 gap-6 max-w-screen-lg">
        {images.map((imageUrl, index) => (
          <DirectionAwareHover
            key={index}
            imageUrl={imageUrl}
            videoUrl={videos[index]}
           
            
          
          >
            <p className="font-bold  relative top-[-8rem] text-lg">{customTexts[index]}</p>
          </DirectionAwareHover>
        ))}
        <div className="bg-transparent relative top-[-2rem] bottom-[1rem]  " >
          <CardStackDemo />
        </div>
      </div>
    </div>
    </>
  );
};

export default DirectionAwareHoverDemo;
