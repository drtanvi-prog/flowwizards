import { motion } from 'framer-motion'
import team1 from '@assets/teams/team1.jpeg'
import team2 from '@assets/teams/team2.jpeg'
import team3 from '@assets/teams/team3.jpeg'
import team4 from '@assets/teams/team4.jpeg'
import team5 from '@assets/teams/team5.jpeg'
import team6 from '@assets/teams/team6.jpeg'
import team7 from '@assets/teams/team7.png'
import team8 from '@assets/teams/team8.png'
import team9 from '@assets/teams/team9.png'
import team10 from '@assets/teams/team10.png'
import team11 from '@assets/teams/team11.png'
import team12 from '@assets/teams/team12.png'

const TEAM = [
   { img: team1, name: 'Dr. Tanvi Sachar', role: 'CEO' },
   { img: team2, name: 'Gloria Chinelo', role: 'Integration Expert' },
   { img: team3, name: 'Kayla Whited', role: 'Marketing' },
   { img: team4, name: 'Ada Okoro', role: 'Implementation' },
   { img: team5, name: 'Rizwan Ali', role: 'Automation' },
   { img: team6, name: 'Michael Marcellus', role: 'Sales' },
   { img: team7, name: 'Payal Palsana', role: 'Implementation & Architect' },
   { img: team8, name: 'Ashish Palsana', role: 'Implementation & Architect' },
   { img: team9, name: 'Bilal Khan', role: 'Implementation' },
   { img: team10, name: 'Oyedokun Bibitayo Oyefunke', role: 'Implementation' },
   { img: team11, name: 'Murtaza Ali Kazmi', role: 'Content & Marketing' },
   { img: team12, name: 'Amarachi Ene', role: 'Implementation' },
]

const TeamSection = () => (
   <section className="bg-[#FAFAFA] py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-16">

         {/* Header */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8 sm:mb-12"
         >
            <p className="text-sm sm:text-[0.95rem] font-semibold text-[#1A1A1A] leading-relaxed mb-3">
               Some call us Software <span style={{ color: '#F07020' }}>Magicians.</span><br />
               Other call us Automation <span style={{ color: '#F07020' }}>Wizards.</span>
            </p>
            <h2
               className="font-extrabold text-[#1A1A1A] leading-tight tracking-tight"
               style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
            >
               Here are our alter egos:
            </h2>
         </motion.div>

         {/* Grid */}
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {TEAM.map((member, i) => (
               <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col"
               >
                  {/* Photo card */}
                  <div
                     className="rounded-xl overflow-hidden border-2"
                     style={{
                        borderColor: '#F07020',
                        background: '#FEF6F5',
                        aspectRatio: '3 / 4',
                     }}
                  >
                     <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                     />
                  </div>

                  {/* Name & role below card */}
                  <div className="mt-2 px-0.5">
                     <p className="font-bold text-[#1A1A1A] text-[0.72rem] sm:text-[0.82rem] leading-snug">
                        {member.name}
                     </p>
                     <p className="text-[0.65rem] sm:text-[0.75rem] text-[#666] mt-0.5">
                        {member.role}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>

      </div>
   </section>
)

export default TeamSection
