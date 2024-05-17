import React, { useState } from "react";

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  cardBgClass: string;
  buttonClass: string;
  features: string[];
  unavailableFeatures: string[];
}

const PricingTable: React.FC = () => {
  const [selectedPlanType, setSelectedPlanType] = useState<"monthly" | "annual">("monthly");

  const pricingPlans: PricingPlan[] = [
    {
      name: "Design Starter",
      monthlyPrice: "USD$10",
      annualPrice: "USD$99",
      description:
        "Perfect for individuals with a vision or interior designers looking for AI-powered inspiration. Discover new design possibilities from around the world and collaborate with your own interior designer to turn your vision into reality.",
      cardBgClass: "bg-black/20 backdrop-blur-3xl",
      buttonClass: "text-white bg-white/10 hover:bg-white/5 ",
      features: ["AI Style Matcher", "100 AI Designs / month", "Mirror a famous designer's project style", "Chat with AI interior designer"],
      unavailableFeatures: ["Human interior designer", "2D Floor Plan Design", "3D Design Rendering", "Home Decor Package"],
    },
    {
      name: "Bypass Interior Designer",
      monthlyPrice: "249",
      annualPrice: "2,499",
      description:
        "Our Bypass Interior Designer Plan allows you to skip the middleman and connect directly with our designers globally. Plus, our AI technology ensures seamless collaboration between you and our team, bringing your design dreams to life efficiently and within budget.",
      cardBgClass: "bg-black/50 backdrop-blur-3xl",
      buttonClass: "text-black bg-white hover:bg-white/5 hover:text-white ",
      features: ["10 Credits / month" , "AI Style Matcher", "Unlimited AI Designs", "Mirror a famous designer's project style", "Chat with AI interior designer", "Human interior designer",  "2D Floor Plan Design (2-5 credits)", "3D Design Rendering (2-8 credits)", "Curated Home Decor with clickable shopping list (3-5 credits)"],
      unavailableFeatures: [],
    },
    {
      name: "For Agencies",
      monthlyPrice: "Contact us",
      annualPrice: "Contact us",
      description:
        "Perfect for Busy Design Agencies, Let us take care of your interior design challenges with our comprehensive plan, so you can grow your business while we manage the heavy lifting.",
      cardBgClass: "bg-black/20 backdrop-blur-3xl",
      buttonClass: "text-white bg-white/10 hover:bg-white/5 ",
      features: [
        "API Calls",
        "Top Interior Designers On Demand",
        "Customized AI Product",
        "White Labeling",
      ],
      unavailableFeatures: [],
    },
  ];

  const handlePlanTypeChange = (type: "monthly" | "annual") => {
    setSelectedPlanType(type);
  };

  return (
    <section className="relative body-text pb-14 p-10 flex flex-col overflow-hidden items-center justify-center bg-[#a19687]">
      <div className="max-w-7xl w-full overflow-y-auto">
        <div className="md:max-w-sm mx-auto">
          <div className="inline-flex w-full border rounded-full mt-6 overflow-hidden border-white/20 p-0.5 z-0">
            <button
              className={`font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs ${selectedPlanType === "monthly" ? "bg-black/50 text-white" : "border-white text-white"}`}
              type="button"
              onClick={() => handlePlanTypeChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={`font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs ${selectedPlanType === "annual" ? "bg-black/50 text-white" : "border-white text-white"}`}
              type="button"
              onClick={() => handlePlanTypeChange("annual")}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-12 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 shadow-2xl  rounded-3xl ${plan.cardBgClass} backdrop-blur-3xl shadow-gray-900/50`}
            >
              {selectedPlanType === "monthly" ? (
                <>
                  <div>
                    <div className="flex flex-col justify-between gap-3">
                      <p className="text-xl font-medium tracking-tight text-white">
                        {plan.name}
                      </p>
                      <p className="text-white">
                        <span className="text-2xl tracking-tight">
                          {plan.monthlyPrice}
                        </span>
                        <span className="text-base font-medium">/ month</span>
                      </p>
                    </div>
                    <p className="mt-8 text-sm text-white/80">{plan.description}</p>
                    <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="inline-flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-check"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2 4-4" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {plan.unavailableFeatures.map((feature, i) => (
                        <li key={i} className="inline-flex items-center gap-2 opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-x"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex mt-6">
                    <a
                     href="https://app.feeldesign.ai" target="blank"
                      title={plan.name}
                      aria-label="get started"
                      className={`flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl ${plan.buttonClass}`}
                    >
                      Get started
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="flex flex-col justify-between gap-3">
                      <p className="text-xl font-medium tracking-tight text-white">
                        {plan.name}
                      </p>
                      <p className="text-white">
                        <span className="text-2xl tracking-tight">
                          {plan.annualPrice}
                        </span>
                        <span className="text-base font-medium">/ year</span>
                      </p>
                    </div>
                    <p className="mt-8 text-sm text-white/80">{plan.description}</p>
                    <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="inline-flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-check"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2 4-4" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {plan.unavailableFeatures.map((feature, i) => (
                        <li key={i} className="inline-flex items-center gap-2 opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-x"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex mt-6">
                    <a
                      href="https://app.feeldesign.ai" target="blank"
                      title={plan.name}
                      aria-label="get started"
                      className={`flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl ${plan.buttonClass}`}
                    >
                      Get started
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
