import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { CardStackDemo } from "../Cardstack/Cardstack";

const DirectionAwareHoverDemo = () => {
  const images = [
    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
