import PremiumQuoteStack from './PremiumQuoteStack'

const brands = [
   { name: 'Cash App', img: '/src/assets/trusted-platform/cash-app.jpg' },
   { name: 'sodexo', img: '/src/assets/trusted-platform/sodexo.jpg' },
   { name: 'FULL FOCUS', img: '/src/assets/trusted-platform/full-focus.jpg' },
   { name: 'iHeart MEDIA', img: '/src/assets/trusted-platform/iheart-media.jpg' },
   { name: 'Discovery', img: '/src/assets/trusted-platform/discovery.jpg' },
]

const TrustedSection = () => (
   <section className="w-full flex flex-col items-center bg-white">

      <div className="w-full flex flex-col items-center py-12 px-8 xl:px-16">
         <p className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-[#1E1E1E] tracking-widest mb-8">
            Trusted by big and small
         </p>

         {/* Desktop: single row | Mobile: 2-col grid */}
         <div className="hidden md:flex flex-wrap justify-center items-center gap-x-14 gap-y-6 w-full max-w-8xl">
            {brands.map((brand) =>
               <img
                  key={brand.name}
                  src={brand.img}
                  alt={brand.name}
                  className="object-contain grayscale opacity-70 select-none"
                  loading="lazy"
               />
            )}
         </div>

         <div className="grid grid-cols-2 gap-x-8 gap-y-7 w-full max-w-sm md:hidden">
            {brands.map((brand) =>
               <img
                  key={brand.name}
                  src={brand.img}
                  alt={brand.name}
                  className="object-contain grayscale opacity-70 select-none"
                  loading="lazy"
               />
            )}
         </div>
      </div>

      {/* Two-column section */}
      <div className="w-full max-w-360 mx-auto flex flex-col md:flex-row items-start px-8 xl:px-16 py-16 md:py-28">

         <div className="w-full md:w-[55%] shrink-0 min-w-0">
            <h3
               className="text-[1.6rem] sm:text-[1.9rem] md:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.2rem] font-bold text-[#1A1A1A] leading-[1.15] m-0"
               style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800 }}
            >
               You know automation is no longer a nice-to-have
            </h3>
         </div>

         {/* Right*/}
         <div className="w-full md:flex-1 flex md:justify-end mt-8 md:mt-0">
            <div className="w-full max-w-xs">
               <p className="text-[15px] text-[#4A4A4A] leading-relaxed mb-5">
                  If only you knew where to start. Worse still, all the apps that promised to streamline your business only make things more complicated.
               </p>
               <p className="text-[15px] text-[#4A4A4A] leading-relaxed m-0">
                  The days of siloed processes, lost hours, and less-than-perfect customer experiences are over.
               </p>
            </div>
         </div>
      </div>

      <PremiumQuoteStack />

   </section>
);

export default TrustedSection;

