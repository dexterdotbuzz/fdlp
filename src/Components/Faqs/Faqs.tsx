import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How quickly can I receive a 2D floor plan design?",
    answer:
      "You'll receive a customized 2D floor plan within 48-72 hours after uploading your CAD file (DWG format) and sharing your design preferences..",
  },
  {
    question: "What are credits used for?",
    answer:
      "Credits are required for services that involve human work, including 2D floor plan design, 3D design rendering, and home decor packages. These services provide you with the best possible materials to bypass hiring an interior designer on your end.",
  },
  {
    question: "Do I really not need to hire an interior designer?",
    answer:
      "With our AI-powered services and collaboration with world-class designers, you can achieve your design vision without hiring an interior designer. Our technology and team can help you create and refine your dream space.",
  },
  {
    question: "What happens when I run out of credits?",
    answer:
      "You can purchase more credits for $24.90 per credit, or you can wait until the start of the next month when your credits will be replenished.",
  },
  {
    question: "Do you handle construction work?",
    answer:
      "No, we do not handle construction work. However, we provide you with all the materials and designs you need to work with a construction company and complete your project without incurring high design fees.",
  },
  // More questions...
];

const FAQ: React.FC = () => {
  return (
    <div className="bg-[#fffefd] mt-4 p-5 body-text">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
