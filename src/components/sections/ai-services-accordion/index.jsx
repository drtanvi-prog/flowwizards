import { useState } from 'react'
import DesktopAccordion from './DesktopAccordion'
import MobileAccordion from './MobileAccordion'
import { ITEMS } from '../../../data/aiServicesAccordionData'

const AIServicesAccordion = () => {
  const [activeId, setActiveId] = useState(ITEMS[0].id)

  return (
    <>
      <DesktopAccordion activeId={activeId} setActiveId={setActiveId} />
      <MobileAccordion activeId={activeId} setActiveId={setActiveId} />
    </>
  )
}

export default AIServicesAccordion