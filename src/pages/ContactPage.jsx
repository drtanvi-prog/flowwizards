import { useState } from 'react'
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import Button from '@/components/ui/Button'
import anim1 from '@assets/lottie/anim1.lottie'

const EMAILJS_SERVICE_ID = 'service_ug95hbq'
const EMAILJS_TEMPLATE_ID = 'template_q9223eg'
const EMAILJS_PUBLIC_KEY = 'u17zUoznY9XMTgTsa'

const inputCls =
   'w-full px-4 py-3.5 rounded-xl border-2 border-[#D0D0D0] bg-white text-[#1A1A1A] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#F07020] transition-colors duration-200'

const ContactPage = () => {
   const [form, setForm] = useState({ name: '', email: '', issue: '', loom: '' })
   const [sent, setSent] = useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')

   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

   const handleSubmit = async e => {
      e.preventDefault()
      setLoading(true)
      setError('')
      try {
         await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            { name: form.name, email: form.email, issue: form.issue, loom: form.loom },
            EMAILJS_PUBLIC_KEY
         )
         setSent(true)
      } catch {
         setError('Something went wrong. Please try again or email us directly.')
      } finally {
         setLoading(false)
      }
   }

   return (
      <>
         <ServicePageHero
            badge="Get In Touch"
            heading={<>Got a process that needs <SHWord>fixing?</SHWord></>}
            body="Tell us what's slowing you down. We'll take a look, ask the right questions, and come back with a clear path forward - no fluff, no hard sell."
         />

         <section className="bg-[#FEF6F5] pb-14 sm:pb-16 lg:pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                  {/* Lottie — desktop only */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.65, delay: 0.1 }}
                     className="hidden lg:flex items-center"
                  >
                     <DotLottieReact
                        src={anim1}
                        loop
                        autoplay
                        style={{ width: '340px', height: '340px', flexShrink: 0 }}
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
                              <h3 className="font-extrabold text-xl text-[#1A1A1A]">We've got your message.</h3>
                              <p className="text-[#444] text-sm leading-relaxed max-w-xs">
                                 Someone from our team will review it and follow up within one business day.
                              </p>
                           </div>
                        ) : (
                           <>
                              <p className="text-[0.85rem] text-[#333] font-medium mb-6 leading-relaxed">
                                 Drop us a message with what you're working on. We respond to every inquiry personally - usually within one business day.
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
                                    placeholder="What are you working on or trying to solve?"
                                    rows={4}
                                    className={`${inputCls} resize-none`}
                                 />
                                 <input
                                    name="loom"
                                    value={form.loom}
                                    onChange={handleChange}
                                    placeholder="Link to any relevant doc, tool, or resource (optional)"
                                    className={inputCls}
                                 />
                                 {error && (
                                    <p className="text-red-500 text-xs text-center">{error}</p>
                                 )}
                                 <Button
                                    type="submit"
                                    variant="secondary"
                                    size="md"
                                    className="mt-1 w-full py-3.5!"
                                    disabled={loading}
                                 >
                                    {loading ? 'Sending...' : 'Send message'}
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
