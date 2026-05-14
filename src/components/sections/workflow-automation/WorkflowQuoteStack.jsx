import React from 'react';
import QuoteCard from '../quotes/QuoteCard';

const QUOTES = [
   {
      text: 'The team is knowledgeable, responsive, and truly understands how to optimize business processes. We appreciate their efficiency and the impact they’ve had on our operations. Highly recommended!',
      author: 'M. Schwimmer, Intelimed Cardiac Diagnostics',
      quoteColor: '#7A8500',
      border: '#7A8500',
      bg: '#FAFCEB',
   },
   {
      text: 'The team at Flow Wizards is incredibly knowledgeable and professional. Their expertise in streamlining business processes and automating workflows is truly impressive.',
      author: 'I. Kahan Nexus Assets Global',
      quoteColor: '#F46A1A',
      border: '#F46A1A',
      bg: '#FFF4EF',
   },
   {
      text: 'World class automation work.',
      author: 'T. Sweetman Chick-fil-A',
      quoteColor: '#F6A700',
      border: '#F6A700',
      bg: '#FFF8E6',
   },
];

const WorkflowQuoteStack = () => (
   <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
         <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10 text-[#181818]" style={{ letterSpacing: '-0.02em' }}>
            Hear it from our clients
         </h2>
         {QUOTES.map((q, i) => (
            <QuoteCard key={i} q={q} i={i} />
         ))}
      </div>
   </section>
);

export default WorkflowQuoteStack;
