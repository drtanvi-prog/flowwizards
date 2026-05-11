import { useState } from 'react'
import DesktopAccordion from './DesktopAccordion'
import MobileAccordion from './MobileAccordion'

const AIServicesAccordion = () => {
  const [activeId, setActiveId] = useState(0)

  return (
    <>
      <DesktopAccordion activeId={activeId} setActiveId={setActiveId} />
      <MobileAccordion activeId={activeId} setActiveId={setActiveId} />
    </>
  )
}

export default AIServicesAccordion
