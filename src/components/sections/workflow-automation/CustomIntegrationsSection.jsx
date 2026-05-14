import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const CustomWorkflowSection = () => {
   const leftRef = useRef(null);
   const rightRef = useRef(null);
   const containerRef = useRef(null);

   const [path, setPath] = useState("");
   const [dots, setDots] = useState({
      start: null,
      end: null,
   });

   useEffect(() => {
      const calculate = () => {
         // Run connector only for desktop/tablet
         if (window.innerWidth < 768) {
            setPath("");
            return;
         }

         if (!leftRef.current || !rightRef.current || !containerRef.current)
            return;

         const container = containerRef.current.getBoundingClientRect();
         const left = leftRef.current.getBoundingClientRect();
         const right = rightRef.current.getBoundingClientRect();

         // Start point
         const startX = left.right - container.left;
         const startY = left.top + left.height * 0.28 - container.top;

         // End point
         const endX = right.left - container.left;
         const endY = right.top + right.height * 0.72 - container.top;

         const r = 22;
         const midX = startX + (endX - startX) / 2;

         const d = `
            M ${startX} ${startY}
            H ${midX - r}
            Q ${midX} ${startY} ${midX} ${startY + r}
            V ${endY - r}
            Q ${midX} ${endY} ${midX + r} ${endY}
            H ${endX}
         `;

         setPath(d.replace(/\s+/g, " ").trim());

         setDots({
            start: { x: startX, y: startY },
            end: { x: endX, y: endY },
         });
      };

      calculate();

      window.addEventListener("resize", calculate);

      return () => {
         window.removeEventListener("resize", calculate);
      };
   }, []);

   return (
      <section className="overflow-hidden py-8 md:py-24">
         <div className="mx-auto max-w-[1150px] px-5 md:px-6">

            {/* HEADING */}
            <h2
               className="
                  text-xl font-bold text-[#111]
                  sm:text-4xl
                  md:text-5xl
                  leading-tight
               "
            >
               Custom Workflow
               <br />
               Automation Integrations
            </h2>

            {/* CONTENT */}
            <div
               ref={containerRef}
               className="
                  relative mt-14
                  flex flex-col gap-8
                  md:mt-20
                  md:flex-row
                  md:items-start
                  md:justify-between
               "
            >
               {/* LEFT CARD */}
               <div
                  ref={leftRef}
                  className="
                     relative z-20
                     w-full
                     rounded-[18px]
                     border-[3px] border-[#ff642d]
                     bg-[#f3e7e2]
                     px-6 py-8
                     sm:px-8 sm:py-10
                     md:w-[380px]
                  "
               >
                  <h3
                     className="
                        max-w-[260px]
                        text-[18px]
                        md:text-[22px]
                        font-black
                        leading-snug
                        text-[#111]
                     "
                  >
                     When off-the-shelf integrations aren’t enough
                  </h3>

                  <div className="mt-8 flex items-start gap-4">
                     <div
                        className="
                           mt-[4px]
                           flex h-5 w-5 shrink-0
                           items-center justify-center
                           rounded-full
                           border border-[#ff642d]
                        "
                     >
                        <X size={11} className="text-[#ff642d]" />
                     </div>

                     <p
                        className="
                           max-w-[260px]
                           text-[12px]
                              md:text-[14px]
                           leading-[1.8]
                           text-[#111]
                        "
                     >
                        We work with custom APIs and internal systems to automate
                        complex, business-specific workflows.
                     </p>
                  </div>
               </div>

               {/* SVG CONNECTOR - DESKTOP ONLY */}
               {path && dots.start && dots.end && (
                  <div className="hidden md:block">
                     <svg
                        className="pointer-events-none absolute inset-0 z-10"
                        style={{
                           width: "100%",
                           height: "100%",
                           overflow: "visible",
                        }}
                     >
                        {/* LINE */}
                        <path
                           d={path}
                           stroke="#1A1A1A"
                           strokeWidth="4"
                           fill="none"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>

                     {/* START DOT */}
                     <svg
                        className="pointer-events-none absolute z-30"
                        style={{
                           left: dots.start.x - 7,
                           top: dots.start.y - 7,
                           width: 14,
                           height: 14,
                        }}
                     >
                        <circle
                           cx={7}
                           cy={7}
                           r={7}
                           fill="#f3f3f3"
                           stroke="#1A1A1A"
                           strokeWidth="4"
                        />
                     </svg>

                     {/* END DOT */}
                     <svg
                        className="pointer-events-none absolute z-30"
                        style={{
                           left: dots.end.x - 7,
                           top: dots.end.y - 7,
                           width: 14,
                           height: 14,
                        }}
                     >
                        <circle
                           cx={7}
                           cy={7}
                           r={7}
                           fill="#f3f3f3"
                           stroke="#1A1A1A"
                           strokeWidth="4"
                        />
                     </svg>
                  </div>
               )}

               {/* RIGHT CARD */}
               <div
                  ref={rightRef}
                  className="
                     group relative z-20
                     w-full overflow-hidden
                     rounded-[18px]
                     border border-[#d84f1c]
                     bg-gradient-to-br
                     from-[#ff6b2d]
                     to-[#ff5a1f]
                     px-6 py-8
                     shadow-[0_12px_45px_rgba(255,100,45,0.28)]
                     transition-all duration-300
                     sm:px-8 sm:py-10
                     md:mt-4
                     md:w-[385px]
                     md:px-10
                     md:py-12
                  "
               >
                  {/* GLOW */}
                  <div
                     className="
                        absolute -bottom-20 -right-20
                        h-48 w-48
                        rounded-full
                        bg-white/10
                        blur-3xl
                     "
                  />

                  <h3
                     className="
                          text-[18px]
                        md:text-[22px]
                        font-black
                        text-white
                     "
                  >
                     Our approach is simple
                  </h3>

                  <p
                     className="
                        mt-6
                        max-w-[270px]
                        text-[12px]
                        md:text-[14px]
                        leading-[1.9]
                        text-white/95
                        md:mt-8
                     "
                  >
                     Design workflows around how your business operates,
                     not around forcing you into a specific platform.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CustomWorkflowSection;