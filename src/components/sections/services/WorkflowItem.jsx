import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const WorkflowItem = ({ workflow, index, variant = 'light' }) => {
  const isDark = variant === 'dark'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.06, ease }}
      className="py-4"
      style={{ borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb'}` }}
    >
      <p
        className="text-[13px] sm:text-[14px] font-bold leading-snug m-0 mb-1.5"
        style={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#1A1A1A' }}
      >
        {workflow.title}
      </p>
      <p
        className="text-[12px] sm:text-[13px] leading-relaxed m-0"
        style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#4A4A4A' }}
      >
        {workflow.desc}
      </p>
    </motion.div>
  )
}

export default WorkflowItem
