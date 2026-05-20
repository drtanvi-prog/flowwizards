import s1 from '../../../assets/software/s1.webp'
import s2 from '../../../assets/software/s2.svg'
import s3 from '../../../assets/software/s3.webp'
import s4 from '../../../assets/software/s4.png'
import s5 from '../../../assets/software/s5.webp'
import s6 from '../../../assets/software/s6.webp'
import s7 from '../../../assets/software/s7.webp'
import s8 from '../../../assets/software/s8.png'
import s9 from '../../../assets/software/s9.webp'
import s10 from '../../../assets/software/Gumloop.svg'
import s11 from '../../../assets/software/monday.svg'

const Img = ({ src, alt, height }) => (
  <img
    src={src}
    alt={alt}
    draggable={false}
    style={{ height, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
  />
)

export const ZapierBadge = () => <Img src={s1} alt="Zapier Premier Expert" height={72} />
export const HubSpotBadge = () => <Img src={s2} alt="HubSpot" height={44} />
export const TypeformBadge = () => <Img src={s3} alt="Typeform" height={68} />
export const JotformBadge = () => <Img src={s4} alt="Jotform" height={36} />
export const ActiveCampaignBadge = () => <Img src={s5} alt="ActiveCampaign Partner" height={68} />
export const PipedriveBadge = () => <Img src={s6} alt="Pipedrive Premier Partner" height={36} />
export const KeapBadge = () => <Img src={s7} alt="Keap Certified Partner" height={44} />
export const AirtableBadge = () => <Img src={s8} alt="Airtable Services Partner" height={36} />
export const MakeBadge = () => <Img src={s9} alt="Make Partner" height={36} />
export const MondayBadge = () => <Img src={s10} alt="Monday Partner" height={36} />
export const GumloopBadge = () => <Img src={s11} alt="Gumloop Partner" height={36} />



export const BADGE_MAP = {
  zapier: ZapierBadge,
  hubspot: HubSpotBadge,
  typeform: TypeformBadge,
  jotform: JotformBadge,
  activecampaign: ActiveCampaignBadge,
  pipedrive: PipedriveBadge,
  keap: KeapBadge,
  airtable: AirtableBadge,
  make: MakeBadge,
  monday: MondayBadge,
  gumloop: GumloopBadge,
}

