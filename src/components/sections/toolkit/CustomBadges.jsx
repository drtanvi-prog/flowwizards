import s1 from '../../../assets/software/s1.webp';
import s2 from '../../../assets/software/s2.svg';
import s3 from '../../../assets/software/s3.webp';
import s4 from '../../../assets/software/s4.png';
import s5 from '../../../assets/software/s5.webp';
import s6 from '../../../assets/software/s6.webp';
import s7 from '../../../assets/software/s7.webp';
import s8 from '../../../assets/software/s8.png';
import s9 from '../../../assets/software/s9.webp';
import s10 from '../../../assets/software/s10.webp';
import s11 from '../../../assets/software/s11.webp';
import s12 from '../../../assets/software/s12.webp';
import s13 from '../../../assets/software/s13.webp';
import s14 from '../../../assets/software/s14.webp';
import s15 from '../../../assets/software/s15.webp';
import s16 from '../../../assets/software/s16.webp';
import s17 from '../../../assets/software/s17.webp';
import s18 from '../../../assets/software/s18.webp';
import s19 from '../../../assets/software/s19.webp';
import s20 from '../../../assets/software/s20.webp';
import s21 from '../../../assets/software/s21.webp';
import s22 from '../../../assets/software/s22.webp';
import s23 from '../../../assets/software/s23.webp';
import s24 from '../../../assets/software/s24.webp';

const Img = ({ src, alt, height }) => (
   <img
      src={src}
      alt={alt}
      draggable={false}
      style={{ height, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
   />
);

export const Custom1Badge = () => <Img src={s10} alt="Custom1" height={60} />;
export const Custom2Badge = () => <Img src={s11} alt="Custom2" height={60} />;
export const Custom3Badge = () => <Img src={s12} alt="Custom3" height={60} />;
export const Custom4Badge = () => <Img src={s13} alt="Custom4" height={60} />;
export const Custom5Badge = () => <Img src={s14} alt="Custom5" height={60} />;
export const Custom6Badge = () => <Img src={s15} alt="Custom6" height={60} />;
export const Custom7Badge = () => <Img src={s16} alt="Custom7" height={60} />;
export const Custom8Badge = () => <Img src={s17} alt="Custom8" height={60} />;
export const Custom9Badge = () => <Img src={s18} alt="Custom9" height={60} />;
export const Custom10Badge = () => <Img src={s19} alt="Custom10" height={60} />;
export const Custom11Badge = () => <Img src={s20} alt="Custom11" height={60} />;
export const Custom12Badge = () => <Img src={s21} alt="Custom12" height={60} />;
export const Custom13Badge = () => <Img src={s22} alt="Custom13" height={60} />;
export const Custom14Badge = () => <Img src={s23} alt="Custom14" height={60} />;
export const Custom15Badge = () => <Img src={s24} alt="Custom15" height={60} />;

export const CUSTOM_BADGE_MAP = {
   custom1: Custom1Badge,
   custom2: Custom2Badge,
   custom3: Custom3Badge,
   custom4: Custom4Badge,
   custom5: Custom5Badge,
   custom6: Custom6Badge,
   custom7: Custom7Badge,
   custom8: Custom8Badge,
   custom9: Custom9Badge,
   custom10: Custom10Badge,
   custom11: Custom11Badge,
   custom12: Custom12Badge,
   custom13: Custom13Badge,
   custom14: Custom14Badge,
   custom15: Custom15Badge,
};
