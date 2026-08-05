import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import anim1 from "../../assets/lottie/anim4.lottie";
import anim2 from "../../assets/lottie/anim2.lottie";

const SoftwareSetupSection = () => (
   <section className="w-full py-16 pt-8 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
         <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center mb-8 md:mb-16 text-gray-900 leading-tight">
            <span className="block">You know your shiny new software is gonna make business much easier.</span>
            <span className="block text-primary font-bold mt-2" style={{ color: '#FF8800' }}>Now all you need to do is set it up properly.</span>
         </h2>

         <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
            {/* Software Setup Card */}
            <div className="flex-1 min-w-0 max-w-full md:max-w-[420px] w-full bg-orange-50 border-2 border-orange-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md mx-auto">
               <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                     Software Setup
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg mb-6">
                     Maybe you don’t know the first thing about setting up and automating
                     software. But that’s okay. Because we know everything. We’ll get it
                     set up, fully integrated, and running seamlessly - the first time.
                     So rather than wasting your time, it can quietly and powerfully
                     support your business in what really moves the needle.
                  </p>
                  <a
                     href="#"
                     className="font-semibold text-orange-600 hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                     Set up my software <span aria-hidden>→</span>
                  </a>
               </div>
               <div className="flex justify-end w-full mt-6">
                  <div className="w-full max-w-[320px]">
                     <DotLottieReact
                        src={anim1}
                        autoplay
                        loop
                        style={{ width: '100%', height: '100%' }}
                     />
                  </div>
               </div>
            </div>
            {/* Software Optimization Card */}
            <div className="flex-1 min-w-0 max-w-full md:max-w-[420px] w-full bg-lime-50 border-2 border-lime-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md mx-auto">
               <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">Software Optimization</h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
                     We make sure your software does what it’s supposed to: streamline your work, not add to it. At Flow Wizards, we fine-tune your tools to fit your processes, automate what can be automated, and eliminate inefficiencies so you get the most out of your systems.
                  </p>
                  <a href="#" className="font-semibold text-lime-700 hover:underline inline-flex items-center gap-1 transition-colors">
                     Optimize my software <span aria-hidden>→</span>
                  </a>
               </div>
               <div className="flex justify-end w-full mt-6">
                  <div className="w-full max-w-[320px]">
                     <DotLottieReact
                        src={anim2}
                        autoplay
                        loop
                        style={{ width: '100%', height: '100%' }}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
);

export default SoftwareSetupSection;
