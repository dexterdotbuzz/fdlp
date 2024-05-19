import { Button } from "../ui/moving-border";

const Flowbite2 = () => {
  return (
    <section className="bg-[#63594f] dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      {/* Video for desktop */}
      <video
        className="hidden md:block w-full md:order-2"
        loop
        muted
        autoPlay
      >
        <source src="https://res.cloudinary.com/dzo4lqjb2/video/upload/v1715575406/Websites/id_full_video_qpsler_mo9jsx.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Image for mobile */}
      <video
        className="w-full md:hidden"
        loop
        muted
        autoPlay

        
      >
                             <source src="https://res.cloudinary.com/dzo4lqjb2/video/upload/v1715575406/Websites/id_full_video_qpsler_mo9jsx.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="md:order-1 mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#000000] dark:text-white"> Step Inside Your Dream Home</h2>
        <p className="mb-6 font-light text-[#000000] md:text-lg dark:text-gray-400">Convert Floor Plans to Stunning 3D VR! Bring your floor plans to life and visualize your space in stunning detail</p>
        <a href="https://app.feeldesign.ai" >

        <Button
          borderRadius="1.75rem"
          className="bg-[#D1CFC8] font-bold text-stone-800 dark:text-stone-600 border-neutral-200 font-silk-serif dark:border-transparent"
        >
          Get Started
        </Button>
        </a>
      </div>
    </div>
  </section>
  
  );
}

export default Flowbite2;
