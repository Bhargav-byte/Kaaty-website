import React from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BedDouble,
  Bell,
  Bike,
  BookOpen,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  ChevronUp,
  Circle,
  Cloud,
  Code,
  Coffee,
  Cpu,
  CreditCard,
  Croissant,
  Database,
  Dot,
  Drumstick,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Hand,
  Headphones,
  IceCreamCone,
  Image,
  Landmark,
  Languages,
  Layers,
  LayoutDashboard,
  Library,
  LifeBuoy,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Minus,
  Monitor,
  Network,
  Newspaper,
  Package,
  Palette,
  Percent,
  Phone,
  PhoneCall,
  Pizza,
  Play,
  Plus,
  Printer,
  QrCode,
  RefreshCw,
  Rocket,
  Route,
  Scale,
  ScanLine,
  School,
  Scroll,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Smile,
  Store,
  Text,
  Timer,
  TrendingUp,
  Tv,
  User,
  Users,
  Utensils,
  UtensilsCrossed,
  Wallet,
  Wheat,
  WifiOff,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type IconProps = {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
}

const BRAND_ICONS: Record<string, React.ReactNode> = {
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  twitter: (
    <path
      fill="currentColor"
      stroke="none"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  ),
  'brand-x': (
    <path
      fill="currentColor"
      stroke="none"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
}

const LUCIDE_ICON_MAP: Record<string, LucideIcon> = {
  phone: Phone,
  monitor: Monitor,
  zap: Zap,
  'wifi-off': WifiOff,
  printer: Printer,
  'shield-check': ShieldCheck,
  'refresh-cw': RefreshCw,
  layers: Layers,
  'chef-hat': ChefHat,
  route: Route,
  timer: Timer,
  hand: Hand,
  bell: Bell,
  smartphone: Smartphone,
  'map-pin': MapPin,
  wallet: Wallet,
  palette: Palette,
  percent: Percent,
  'layout-dashboard': LayoutDashboard,
  'trending-up': TrendingUp,
  'file-text': FileText,
  lock: Lock,
  store: Store,
  package: Package,
  tv: Tv,
  eye: Eye,
  megaphone: Megaphone,
  'qr-code': QrCode,
  users: Users,
  'utensils-crossed': UtensilsCrossed,
  'scan-line': ScanLine,
  'credit-card': CreditCard,
  check: Check,
  languages: Languages,
  smile: Smile,
  'graduation-cap': GraduationCap,
  coffee: Coffee,
  cloud: Cloud,
  'bed-double': BedDouble,
  croissant: Croissant,
  'ice-cream-cone': IceCreamCone,
  bike: Bike,
  utensils: Utensils,
  network: Network,
  'shopping-bag': ShoppingBag,
  'book-open': BookOpen,
  award: Award,
  newspaper: Newspaper,
  scroll: Scroll,
  'chevron-down': ChevronDown,
  'arrow-right': ArrowRight,
  menu: Menu,
  x: X,
  minus: Minus,
  plus: Plus,
  dot: Dot,
  circle: Circle,
  play: Play,
  'check-circle-2': CheckCircle2,
  'building-2': Building2,
  landmark: Landmark,
  library: Library,
  code: Code,
  cpu: Cpu,
  image: Image,
  globe: Globe,
  database: Database,
  scale: Scale,
  'chevron-up': ChevronUp,
  mail: Mail,
  pizza: Pizza,
  wheat: Wheat,
  user: User,
  text: Text,
  search: Search,
  'phone-call': PhoneCall,
  calendar: Calendar,
  rocket: Rocket,
  drumstick: Drumstick,
  school: School,
  headphones: Headphones,
  'life-buoy': LifeBuoy,
  'arrow-left': ArrowLeft,
}

export function Icon({ name, size = 24, strokeWidth = 2, className = '', style }: IconProps) {
  if (name === 'whatsapp') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className={className}
        style={style}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    )
  }

  if (BRAND_ICONS[name]) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={style}
      >
        {BRAND_ICONS[name]}
      </svg>
    )
  }

  const Comp = LUCIDE_ICON_MAP[name]
  if (!Comp) return null

  return (
    <Comp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
      aria-hidden="true"
    />
  )
}
