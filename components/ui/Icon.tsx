import type { IconType } from "react-icons";
import {
  PiCalculator,
  PiFunction,
  PiPercent,
  PiArrowsLeftRight,
  PiDivide,
  PiScales,
  PiBookOpen,
  PiLightbulb,
  PiCompass,
  PiTarget,
  PiSparkle,
  PiCaretDown,
  PiCaretRight,
  PiX,
  PiListBold,
  PiCheckCircle,
  PiArrowUpRight,
  PiArrowRight,
  PiEnvelope,
  PiMapPin,
  PiPhone,
  PiShieldCheck,
  PiChartLineUp,
  PiCoins,
  PiRuler,
  PiCube,
  PiInfinity,
  PiPencilSimpleLine,
  PiXCircle,
  PiArrowCounterClockwise,
  PiTrophy,
  PiWarning,
} from "react-icons/pi";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

const icons: Record<string, IconType> = {
  calculator: PiCalculator,
  function: PiFunction,
  percent: PiPercent,
  swap: PiArrowsLeftRight,
  divide: PiDivide,
  scales: PiScales,
  book: PiBookOpen,
  bulb: PiLightbulb,
  compass: PiCompass,
  target: PiTarget,
  sparkle: PiSparkle,
  caretDown: PiCaretDown,
  caretRight: PiCaretRight,
  close: PiX,
  menu: PiListBold,
  check: PiCheckCircle,
  arrowUpRight: PiArrowUpRight,
  arrowRight: PiArrowRight,
  mail: PiEnvelope,
  pin: PiMapPin,
  phone: PiPhone,
  shield: PiShieldCheck,
  chart: PiChartLineUp,
  coins: PiCoins,
  ruler: PiRuler,
  cube: PiCube,
  infinity: PiInfinity,
  practice: PiPencilSimpleLine,
  wrong: PiXCircle,
  retry: PiArrowCounterClockwise,
  trophy: PiTrophy,
  warning: PiWarning,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = icons[name] ?? PiCalculator;
  return <Component className={className} aria-hidden="true" />;
}
