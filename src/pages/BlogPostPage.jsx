import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blogPostsData'

const fadeUp = (delay = 0) => ({
   initial: { opacity: 0, y: 24 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const BlogPostPage = () => {
   const { slug } = useParams()
   const post = BLOG_POSTS.find(p => p.slug === slug)

   if (!post) {
      return (
         <section className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6">
            <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-4">Post not found</h1>
            <Link to="/blog" className="text-[#ff4f00] font-semibold hover:underline flex items-center gap-2">
               <ArrowLeft size={16} /> Back to Blog
            </Link>
         </section>
      )
   }

   const Icon = post.icon

   return (
      <>
         <section className="bg-white py-8 sm:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-6 xl:px-0">

               <motion.div {...fadeUp(0)} className="mb-6 sm:mb-8">
                  <Link
                     to="/blog"
                     className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#ff4f00] transition-colors no-underline group"
                  >
                     <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
                     Back to Blog
                  </Link>
               </motion.div>

               <motion.h1
                  {...fadeUp(0.06)}
                  className="font-extrabold text-[#1A1A1A] tracking-tight leading-[1.2] text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] mb-6 sm:mb-8"
               >
                  {post.title}
               </motion.h1>

               <motion.div
                  {...fadeUp(0.12)}
                  className="w-full rounded-2xl border-2 border-[#F5A0A0] bg-[#FFF5F5] flex items-center justify-center mb-6 sm:mb-8"
                  style={{ minHeight: 'clamp(160px, 30vw, 280px)' }}
               >
                  <div className="flex flex-col items-center gap-3 py-8 sm:py-12">
                     <Icon size={48} className="sm:hidden" color="#D93535" strokeWidth={1.2} />
                     <Icon size={64} className="hidden sm:block" color="#D93535" strokeWidth={1.2} />
                  </div>
               </motion.div>

               {/* Meta row */}
               <motion.div {...fadeUp(0.16)} className="flex flex-wrap items-center gap-2 sm:gap-4 mb-5 sm:mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#FFE8D6] text-[#F07020]">
                     {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs sm:text-sm text-[#666]">
                     <Calendar size={12} className="text-[#999]" />
                     {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs sm:text-sm text-[#666]">
                     <Clock size={12} className="text-[#999]" />
                     {post.readTime}
                  </span>
               </motion.div>

               {/* Excerpt */}
               <motion.p
                  {...fadeUp(0.2)}
                  className="text-[#4A4A4A] leading-relaxed text-[0.95rem] sm:text-base lg:text-lg mb-8 sm:mb-12"
               >
                  {post.excerpt}
               </motion.p>

               {/* Article sections */}
               <div className="space-y-8 sm:space-y-12">
                  {post.content.map((section, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                     >
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1A1A1A] mb-3 sm:mb-4 leading-snug">
                           {section.heading}
                        </h2>
                        <div className="space-y-3 sm:space-y-4">
                           {section.paragraphs.map((para, j) => (
                              <p key={j} className="text-[#444] leading-relaxed text-sm sm:text-[0.95rem] lg:text-base">
                                 {para}
                              </p>
                           ))}
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Bottom nav */}
               <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t-2 border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <Link
                     to="/blog"
                     className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#ff4f00] transition-colors no-underline group"
                  >
                     <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
                     Back to all articles
                  </Link>
                  <span className="text-xs text-[#999] flex items-center gap-1.5">
                     <Clock size={12} /> {post.readTime}
                  </span>
               </div>
            </div>
         </section>

         {/* Related posts */}
         <RelatedPosts current={post} />
      </>
   )
}

const RelatedPosts = ({ current }) => {
   const related = BLOG_POSTS.filter(p => p.id !== current.id).slice(0, 3)
   return (
      <section className="bg-[#FEF6F5] py-10 sm:py-12 md:py-16">
         <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-6 xl:px-0">
            <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A1A] mb-5 sm:mb-6 tracking-tight">More articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
               {related.map(post => {
                  const Icon = post.icon
                  return (
                     <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-xl border-[2px] border-[#1A1A1A] overflow-hidden no-underline bg-white
                           shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_#1A1A1A]
                           hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-200"
                     >
                        <div className="flex items-center justify-center bg-[#FFF5F0] py-5">
                           <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FFE8D6]">
                              <Icon size={20} color="#F07020" strokeWidth={1.6} />
                           </div>
                        </div>
                        <div className="px-4 py-4 border-t-2 border-[#1A1A1A]">
                           <p className="text-xs font-bold text-[#1A1A1A] leading-snug line-clamp-3 group-hover:text-[#F07020] transition-colors">
                              {post.title}
                           </p>
                           <p className="text-[10px] text-[#999] mt-2">{post.readTime}</p>
                        </div>
                     </Link>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default BlogPostPage
