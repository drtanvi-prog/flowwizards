import { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from 'react-countup'

const CountUp = ({ end, duration = 1.8, formattingFn }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { start } = useCountUp({ ref, start: 0, end, duration, formattingFn, startOnMount: false })

  useEffect(() => {
    if (isInView) start()
  }, [isInView]) // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref} />
}

export default CountUp
