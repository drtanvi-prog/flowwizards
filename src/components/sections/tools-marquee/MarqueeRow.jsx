import LogoCard from "./LogoCard"
import { motion } from 'framer-motion'

const MarqueeRow = ({
   items,
   direction = 'left',
   duration = 35,
}) => {
   return (
      <div className="overflow-hidden">
         <motion.div
            className="flex w-max gap-0"
            animate={{
               x:
                  direction === 'left'
                     ? ['0%', '-50%']
                     : ['-50%', '0%'],
            }}
            transition={{
               duration,
               repeat: Infinity,
               ease: 'linear',
            }}
            whileHover={{
               animationPlayState: 'paused',
            }}
            style={{
               willChange: 'transform',
            }}
         >
            {items.map((logo, index) => (
               <LogoCard
                  key={`${direction}-${index}`}
                  logo={logo}
               />
            ))}
         </motion.div>
      </div>
   )
}

export default MarqueeRow