
import { Button } from "../ui/moving-border";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Design ",
    },
    {
      text: "your ",
    },
    {
      text: "first ",
    },
    {
      text: "dream home",
    },
    {
      text: "now .",
      className: "text-[#999999] dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-[#4d453e] ">
      <p className="text-[#000000] dark:text-neutral-200 text-xs sm:text-base  ">
      AI + World Class Designers = Dream Home
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button> */}
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
       <div className="mt-5">
        <a href="https://app.feeldesign.ai" target="blank">

      <Button
        borderRadius="1.75rem"
        className="  bg-[#D1CFC8] font-bold border-white  text-stone-600  "
      >
         Get Started
      </Button>
        </a>





    </div>

      </div>
    </div>
  );
}
