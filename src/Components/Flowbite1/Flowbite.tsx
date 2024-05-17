import { Button } from "../ui/moving-border";

const Flowbitesection1 = () => {
  return (
    <section className="bg-[#b5aa9d] dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        {/* Image on the left for mobile */}
        <img
          className="w-full dark:hidden"
          src="https://res.cloudinary.com/dzo4lqjb2/image/upload/v1709710873/Websites/Group_1000004007_bee1kd.webp"
          alt="dashboard image"
        />
        {/* Image on the right for desktop */}
        <img
          className="w-full hidden dark:block md:order-2"
          src="https://res.cloudinary.com/dzo4lqjb2/image/upload/v1709710873/Websites/Group_1000004007_bee1kd.webp"
          alt="dashboard image"
        />
        <div className="md:order-1 mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#000000] dark:text-white">Custom Floor Plans by Top Designers & AI!</h2>
          <p className="mb-6 font-light text-[#000000] md:text-lg dark:text-gray-400">Your perfect home layout is just $249 away — let our top designers + AI guide you through a custom floor plan experience like no other</p>
          <a href="https://app.feeldesign.ai" >

          <Button
            borderRadius="1.75rem"
            className="bg-[#D1CFC8] font-silk-serif font-bold text-stone-800 dark:text-stone-600 border-neutral-200 dark:border-transparent"
            >
            Get Started
          </Button>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Flowbitesection1;
