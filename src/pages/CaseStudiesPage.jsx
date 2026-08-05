import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero';
import C1 from '@assets/case-studies/C1.webp';
import C2 from '@assets/case-studies/C2.webp';
import C3 from '@assets/case-studies/C3.webp';
import C4 from '@assets/case-studies/C4.webp';

const CASE_STUDIES = [
   {
      image: C1,
      title: 'How A Global SaaS Company Turned Its Cumbersome Sales Process Into A Lead-Qualifier On Steroids',
      subtitle: 'boku',
   },
   {
      image: C2,
      title: 'How Automation Enabled A Luxury Travel Company To Offer A More Personalized Client Experience',
      subtitle: 'Jacada',
   },
   {
      image: C3,
      title: 'How one CEO Turned His Email List Into A Successful Podcast-And Saved 150+ Hours',
      subtitle: 'ptex group',
   },
   {
      image: C4,
      title: 'How a Small Team Reached 146% Sales Growth with Airtable Automation + AI',
      subtitle: 'Guide Me Japan',
   },
];

const CaseStudiesPage = () => {
   return (
      <>
         <ServicePageHero
            badge="Case Studies"
            heading={<>
               Real Automation <SHWord style={{ background: '#F43F5E', color: '#fff', borderRadius: '0.5em', padding: '0 0.3em' }}>Results</SHWord>
            </>}
            body="See how we've transformed workflows, eliminated bottlenecks, and delivered measurable outcomes for businesses just like yours"
         />
         <section className="bg-white py-10 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-8">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {CASE_STUDIES.map((cs, idx) => {
                     const shapes = [
                        { card: '40px 12px 40px 12px', cardMd: '60px 16px 60px 16px', accent: '40px 4px 40px 4px' },
                        { card: '12px 40px 12px 40px', cardMd: '16px 60px 16px 60px', accent: '4px 40px 4px 40px' },
                        { card: '40px 12px 40px 12px', cardMd: '60px 16px 60px 16px', accent: '40px 4px 40px 4px' },
                        { card: '12px 40px 12px 40px', cardMd: '16px 60px 16px 60px', accent: '4px 40px 4px 40px' },
                     ]
                     const shape = shapes[idx % shapes.length]
                     return (
                        <div
                           key={idx}
                           className="bg-white border-2 border-[#1A1A1A] flex flex-col cursor-pointer group hover:border-[#ff4f00] hover:shadow-xl transition-all duration-300 overflow-hidden min-h-72 md:min-h-90"
                           style={{ borderRadius: shape.card }}
                        >
                           {/* orange accent bar */}
                           <div
                              className="h-1.5 bg-[#ff4f00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ borderRadius: shape.accent }}
                           />

                           <div className="flex-1 flex items-center justify-center px-5 py-5 md:px-8 md:py-8">
                              <img
                                 src={cs.image}
                                 alt={cs.subtitle}
                                 className="max-h-12 md:max-h-16 w-full object-contain"
                              />
                           </div>

                           <div className="mx-4 md:mx-6 h-px bg-gray-100" />

                           <div className="px-5 py-4 md:px-7 md:py-6">
                              <p className="text-[#1A1A1A] group-hover:text-[#ff4f00] font-medium text-sm md:text-base leading-snug transition-colors duration-300">
                                 {cs.title}
                              </p>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </section>
      </>
   );
};

export default CaseStudiesPage;
