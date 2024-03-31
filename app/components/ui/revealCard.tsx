"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

  export function RevealCard({title, icon, colors, bgcolor}: {title: string, icon: any, colors: Array<number>, bgcolor: string}) {
  return (
    <>
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card
          title={(
            <>

              {title}
            </>
          )}

          icon={icon}>
          <CanvasRevealEffect
          colors={[colors]}
            animationSpeed={1.1}
            containerClassName={bgcolor}
          />
        </Card>


      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: any;
  icon: any;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded-xl border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[10rem]"
    >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 rounded-md">
        {
          hovered ? <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2> : <h2 className="text-center group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
            {icon}
          </h2>
        }



      </div>
    </div>
  );
};

// const AceternityIcon = () => {
//   return (

//     <i className="devicon-tailwindcss-plain-wordmark colored"></i>


//   );
// };

// export const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };
