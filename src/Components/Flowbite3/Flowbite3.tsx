import { Button } from "../ui/moving-border";

const Flowbitesection1 = () => {
  return (
    <section className="bg-[#4d453e] dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        {/* Image on the left for mobile */}
        <img
          className="w-full dark:hidden"
          src="https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715071589/Websites/do-your-interior-design-shopping-list_ck5znt.webp"
          alt="dashboard image"
        />
        {/* Image on the right for desktop */}
        <img
          className="w-full hidden dark:block md:order-2"
          src="https://res.cloudinary.com/dzo4lqjb2/image/upload/v1715071589/Websites/do-your-interior-design-shopping-list_ck5znt.webp"
          alt="dashboard image"
        />
        <div className="md:order-1 mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#000000] dark:text-white">Shop the Look: Curated Home Décor Just a Click Away!</h2>
          <p className="mb-6 font-light text-[#000000] md:text-lg dark:text-gray-400">Revamp your home effortlessly—shop your favorite looks and bring your vision to life with a single click!</p>
          <Button
            borderRadius="1.75rem"
            className="bg-[#D1CFC8] font-bold font-silk-serif text-stone-800 dark:text-stone-600 border-neutral-200 dark:border-transparent"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Flowbitesection1;
