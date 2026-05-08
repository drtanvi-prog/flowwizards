import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const ExampleItem = ({ text, index, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.32, delay: index * 0.055, ease }}
    className="flex items-start gap-3 py-3"
    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
  >
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
      style={{ background: `${color}22` }}
    >
      <CheckCircle2 size={11} color={color} strokeWidth={2.5} />
    </div>
    <p className="text-[13px] leading-snug" style={{ color: 'rgba(255,255,255,0.62)' }}>{text}</p>
  </motion.div>
)

export default ExampleItem
