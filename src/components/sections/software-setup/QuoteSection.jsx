import React from 'react';
import { motion } from 'framer-motion';
import QuoteCard from '../quotes/QuoteCard';

const quote = {
   text: '“I highly recommend Flow Wizards to anyone”',
   author: '“I recently reached out to Flow Wizards for help setting up a software CRM to manage our construction company, and I couldn’t be more impressed with the service we received.“\n\nM.W. EnerTac Solutions',
   quoteColor: '#7A8500',
   border: '#7A8500',
   bg: '#FAFCEB',
};

const QuoteSection = () => (
   <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
         <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#181818]"
            style={{ letterSpacing: '-0.02em' }}
         >
            What our clients say
         </motion.h2>
         <QuoteCard q={quote} i={0} />
      </div>
   </section>
);

export default QuoteSection;
