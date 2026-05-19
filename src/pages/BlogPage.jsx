import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import { BLOG_POSTS } from '@/data/blogPostsData'

const BlogCard = ({ post, index }) => {
   const Icon = post.icon
   return (
      <motion.div
         initial={{ opacity: 0, y: 28 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
         className="h-full"
      >
         <Link
            to={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl sm:rounded-[20px] border-[2.5px] border-[#1A1A1A] overflow-hidden no-underline bg-white
               shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[6px_6px_0px_#1A1A1A]
               hover:-translate-y-0.5 hover:-translate-x-0.5
               transition-all duration-200 ease-out h-full"
         >
            <div className="flex items-center justify-center bg-[#FFF5F0] py-8 sm:py-10 px-6">
               <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-[#FFE8D6] transition-transform duration-200 group-hover:scale-110">
                  <Icon size={28} className="sm:hidden" color="#F07020" strokeWidth={1.6} />
                  <Icon size={32} className="hidden sm:block" color="#F07020" strokeWidth={1.6} />
               </div>
            </div>

            <div className="flex flex-col flex-1 px-4 py-4 sm:px-5 sm:py-5 border-t-2 border-[#1A1A1A]">
               <h3
                  className="font-bold text-[#1A1A1A] leading-snug text-[0.88rem] sm:text-[0.95rem] flex-1 mb-4"
                  style={{ textDecoration: 'underline', textDecorationColor: 'rgba(26,26,26,0.25)', textUnderlineOffset: '3px' }}
               >
                  {post.title}
               </h3>
               <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A] group-hover:text-[#ff4f00] transition-colors duration-200">
                  Read article
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
               </div>
            </div>
         </Link>
      </motion.div>
   )
}

const BlogGrid = () => (
   <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-8">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {BLOG_POSTS.map((post, i) => (
               <BlogCard key={post.id} post={post} index={i} />
            ))}
         </div>
      </div>
   </section>
)

const BlogPage = () => (
   <>
      <ServicePageHero
         badge="Blog"
         heading={<>
            Knowledge is <SHWord>power&nbsp;-</SHWord>
            <br className="hidden sm:block" />
            {' '}once you <SHWord>automate</SHWord> it
            <br className="hidden sm:block" />
            {' '}of course
         </>}
         body="Stay ahead of the curve with expert tips and strategies on automating your business."
      />
      <BlogGrid />
   </>
)

export default BlogPage
