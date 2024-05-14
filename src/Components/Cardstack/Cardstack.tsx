
import { CardStack } from "../ui/card-stack";
import { cn } from "../../utils/cn";
export function CardStackDemo() {
  return (
    <div className="h-[21rem] direction-card flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-transparent text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sarah Williams",
    designation: "Los Angeles, CA",
    content: (
      <p>
        Feel Design is a game-changer <Highlight>Bypassed</Highlight> the designer so I could go straight to construction. 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Sophia Martinez,",
    designation: "Miami, FL",
    content: (
      <p>
        No need for an interior designer {" "}
        <Highlight>Feel Design did it all for me!</Highlight> From concept to reality, Feel Design streamlined my home makeover process.
      </p>
    ),
  },
  {
    id: 2,
    name: "Olivia Jones",
    designation: "Denver, CO",
    content: (
      <p>
        Saved big on design fees
        <Highlight>Goodbye, interior designer costs!</Highlight> Feel Design truly exceeded my expectations.
        <Highlight>Renovating</Highlight> a home can be daunting, but Feel Design made it a breeze.
      </p>
    ),
  },
];
