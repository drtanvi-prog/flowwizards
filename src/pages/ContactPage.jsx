import { useState } from 'react'
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { CheckCircle2 } from 'lucide-react'
import ServicePageHero from '@/components/sections/service-page-hero/ServicePageHero'
import Button from '@/components/ui/Button'
import anim1 from '@assets/lottie/anim1.lottie'

const inputCls =
   'w-full px-4 py-3.5 rounded-xl border-2 border-[#D0D0D0] bg-white text-[#1A1A1A] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#F07020] transition-colors duration-200'

const ContactPage = () => {
   const [form, setForm] = useState({ name: '', email: '', issue: '', loom: '' })
   const [sent, setSent] = useState(false)

   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
   const handleSubmit = e => {
      e.preventDefault()
      setSent(true)
   }

   return (
      <>
         <ServicePageHero
            badge="Contact Us"
            heading={<>
               Wondering if we can{' '}
               <span
                  className="inline-block text-white px-3 sm:px-5 py-1 sm:py-2 mx-0.5 rounded-md sm:rounded-xl align-middle"
                  style={{ background: '#F07020' }}
               >
                  help?
               </span>
            </>}
            body="You can spend the next 3 days wondering, or you could have your automation problems long gone by then. Just get in touch to find out."
         />

         <section className="bg-[#FEF6F5] pb-14 sm:pb-16 lg:pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                  {/* Lottie — desktop only */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.65, delay: 0.1 }}
                     className="hidden lg:flex items-center justify-center"
                  >
                     <DotLottieReact
                        src={anim1}
                        loop
                        autoplay
                        style={{ width: '100%', height: '420px' }}
                     />
                  </motion.div>

                  {/* Form card */}
                  <motion.div
                     initial={{ opacity: 0, y: 28 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.65, delay: 0.18 }}
                  >
                     <div
                        className="bg-white rounded-2xl border-2 border-[#F07020] p-6 sm:p-8"
                        style={{ boxShadow: '6px 6px 0 #F07020' }}
                     >
                        {sent ? (
                           <div className="flex flex-col items-center text-center py-10 gap-4">
                              <CheckCircle2 size={52} color="#22C55E" strokeWidth={1.5} />
                              <h3 className="font-extrabold text-xl text-[#1A1A1A]">Message sent!</h3>
                              <p className="text-[#444] text-sm leading-relaxed max-w-xs">
                                 We read every message personally and will get back to you within 24 hours.
                              </p>
                           </div>
                        ) : (
                           <>
                              <p className="text-[0.85rem] text-[#333] font-medium mb-6 leading-relaxed">
                                 Attach a 4-minute Loom video walking us through your issue, and
                                 we'll let you know if we can take care of it — at no cost or commitment.
                              </p>

                              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                                 <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className={inputCls}
                                 />
                                 <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email"
                                    className={inputCls}
                                 />
                                 <textarea
                                    name="issue"
                                    value={form.issue}
                                    onChange={handleChange}
                                    required
                                    placeholder="Describe the issue you're facing"
                                    rows={4}
                                    className={`${inputCls} resize-none`}
                                 />
                                 <input
                                    name="loom"
                                    value={form.loom}
                                    onChange={handleChange}
                                    placeholder="Paste your Loom video link here (optional)"
                                    className={inputCls}
                                 />
                                 <Button
                                    type="submit"
                                    variant="secondary"
                                    size="md"
                                    className="mt-1 w-full py-3.5!"
                                 >
                                    Get in touch
                                 </Button>
                              </form>
                           </>
                        )}
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>
      </>
   )
}

export default ContactPage
