import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Chip from '../../ui/Chip'
import { tools as defaultTools } from '../../../data/toolkitData'
import { FloatingTooltip, TOOLTIP_W, MOBILE_TOOLTIP_W, TOOLTIP_GAP } from './FloatingTooltip'
import { BADGE_MAP } from './PartnerBadges'
import { CELLS, MOBILE_CELLS } from './gridConfig'

const DefaultHeading = () => (
  <>
    Your automation toolkit,<br />
    <span style={{ color: '#ff4f00' }}>unlocked</span>
  </>
)

const ToolkitSection = ({
  badge = 'Software we work with',
  heading = <DefaultHeading />,
  subText = "As certified partners with the world's leading automation platforms, we have the expertise to supercharge your tech stack. Hover a logo to discover how we can help.",
  descriptionContent = null,
  toolsList = defaultTools,
  badgeMap = BADGE_MAP,
  cells = CELLS,
  mobileCells = MOBILE_CELLS,
  desktopCols = 9,
  mobileCols = 3,
  disableHover = false,
}) => {
  const [hoveredId, setHoveredId] = useState(null)
  const [tooltipPos, setTooltipPos] = useState(null)
  const wrapperRef = useRef(null)
  const activeTool = toolsList.find(t => t.id === hoveredId)

  const [mobileActiveId, setMobileActiveId] = useState(null)
  const [mobileTooltipPos, setMobileTooltipPos] = useState(null)
  const mobileWrapperRef = useRef(null)
  const mobileActiveTool = toolsList.find(t => t.id === mobileActiveId)

  const handleCellEnter = (id, e) => {
    if (disableHover) return;
    setHoveredId(id)
    if (id === 'hubspot') return
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const wRect = wrapper.getBoundingClientRect()
    const cRect = e.currentTarget.getBoundingClientRect()
    const cellLeft = cRect.left - wRect.left
    const cellRight = cRect.right - wRect.left
    const cellMidY = cRect.top - wRect.top + cRect.height / 2
    const left = cellRight + TOOLTIP_GAP + TOOLTIP_W <= wRect.width
      ? cellRight + TOOLTIP_GAP
      : Math.max(0, cellLeft - TOOLTIP_GAP - TOOLTIP_W)
    setTooltipPos({ left, top: cellMidY })
  }

  const handleCellLeave = () => { if (disableHover) return; setHoveredId(null); setTooltipPos(null) }

  const handleMobileCellTap = (id, e) => {
    if (disableHover) return;
    e.stopPropagation()
    if (mobileActiveId === id) { setMobileActiveId(null); setMobileTooltipPos(null); return }
    setMobileActiveId(id)
    const wrapper = mobileWrapperRef.current
    if (!wrapper) return
    const wRect = wrapper.getBoundingClientRect()
    const cRect = e.currentTarget.getBoundingClientRect()
    const cellLeft = cRect.left - wRect.left
    const cellRight = cRect.right - wRect.left
    const cellMidY = cRect.top - wRect.top + cRect.height / 2
    let left
    if (cellRight + TOOLTIP_GAP + MOBILE_TOOLTIP_W <= wRect.width) left = cellRight + TOOLTIP_GAP
    else if (cellLeft - TOOLTIP_GAP - MOBILE_TOOLTIP_W >= 0) left = cellLeft - TOOLTIP_GAP - MOBILE_TOOLTIP_W
    else left = Math.max(0, Math.min(cellLeft, wRect.width - MOBILE_TOOLTIP_W))
    setMobileTooltipPos({ left, top: cellMidY, width: MOBILE_TOOLTIP_W })
  }

  const closeMobileTooltip = () => { setMobileActiveId(null); setMobileTooltipPos(null) }

  return (
    <section className="w-full pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white">
      <div className="max-w-360 mx-auto px-8 xl:px-16">

        {/* Chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <Chip className="border border-[#ff4f00]">{badge}</Chip>
        </motion.div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div className="flex-1 min-w-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-[3rem] font-extrabold text-[#1A1A1A] leading-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              {heading}
            </motion.h2>

            {descriptionContent && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6"
              >
                {descriptionContent}
              </motion.div>
            )}
          </div>

          {subText && (
            <motion.p
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[14px] text-[#777] max-w-sm leading-relaxed lg:text-right shrink-0"
            >
              {subText}
            </motion.p>
          )}
        </div>

        {/* ── Desktop grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block"
        >
          <div ref={wrapperRef} style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${desktopCols}, 1fr)`,
                gap: '1px',
                background: '#1A1A1A',
                border: '1px solid #1A1A1A',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {cells.map((cell, i) => {
                if (cell.type === 'empty') {
                  return <div key={i} style={{ background: '#FFFFFF', minHeight: '110px' }} />
                }
                const tool = toolsList.find(t => t.id === cell.id)
                const Badge = badgeMap[cell.id]
                const isHov = hoveredId === cell.id
                return (
                  <motion.div
                    key={cell.id}
                    style={{
                      gridColumn: `span ${cell.colSpan}`,
                      background: '#FFF5F0',
                      minHeight: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px 16px',
                      cursor: 'pointer',
                      transition: 'background 0.25s',
                      position: 'relative',
                    }}
                    onMouseEnter={disableHover ? undefined : (e) => handleCellEnter(cell.id, e)}
                    onMouseLeave={disableHover ? undefined : handleCellLeave}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isHov && !disableHover && (
                      <motion.div
                        layoutId="activeBar"
                        style={{
                          position: 'absolute', bottom: 0, left: 0, right: 0,
                          height: 3, background: tool?.accentColor,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    {Badge && <Badge />}
                  </motion.div>
                )
              })}
            </div>

            <AnimatePresence>
              {!disableHover && activeTool && tooltipPos && (
                <FloatingTooltip key={activeTool.id} tool={activeTool} pos={tooltipPos} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Mobile grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:hidden"
        >
          <div
            ref={mobileWrapperRef}
            style={{ position: 'relative' }}
            onClick={closeMobileTooltip}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${mobileCols}, 1fr)`,
                gap: '1px',
                background: '#1A1A1A',
                border: '1px solid #1A1A1A',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {mobileCells.map((cell, i) => {
                if (cell.type === 'empty') {
                  return <div key={i} style={{ background: '#FFFFFF', minHeight: '130px' }} />
                }
                const tool = toolsList.find(t => t.id === cell.id)
                const Badge = badgeMap[cell.id]
                const isActive = mobileActiveId === cell.id
                return (
                  <div
                    key={cell.id}
                    style={{
                      gridColumn: `span ${cell.colSpan}`,
                      background: '#FFF5F0',
                      minHeight: '130px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px 14px',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      position: 'relative',
                    }}
                    onClick={disableHover ? undefined : (e) => handleMobileCellTap(cell.id, e)}
                  >
                    {isActive && (
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: 3, background: tool?.accentColor,
                      }} />
                    )}
                    {Badge && <Badge />}
                  </div>
                )
              })}
            </div>

            <AnimatePresence>
              {!disableHover && mobileActiveTool && mobileTooltipPos && (
                <FloatingTooltip key={mobileActiveTool.id} tool={mobileActiveTool} pos={mobileTooltipPos} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default ToolkitSection
