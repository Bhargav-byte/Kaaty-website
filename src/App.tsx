import React from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'
import * as LucideIcons from 'lucide-react'

type IconProps = {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
}

function toPascal(s: string) {
  return String(s)
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

function Icon({ name, size = 24, strokeWidth = 2, className = '', style }: IconProps) {
  const iconName = toPascal(name)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>
  const LucideIcon = icons[iconName]
  if (!LucideIcon) return null
  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
      aria-hidden="true"
    />
  )
}

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghostLight' | 'soft'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  className?: string
  as?: 'button' | 'a'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

type EyebrowProps = {
  children: React.ReactNode
  className?: string
}

type SectionHeadProps = {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  sub?: React.ReactNode
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

type ItemLinkProps = {
  href: string
  icon: string
  name: string
  desc?: string
}

type StatusDotProps = { color: string }
type MockKind = 'pos' | 'kds' | 'phone' | 'business' | 'vendor' | 'qr' | 'kiosk'

type FeatureRow = {
  title: string
  mock: MockKind
  desc: string
  points: string[]
}

type FaqItem = { q: string; a: string }
type BenefitItem = { icon: string; label: string }
type LogoItem = { name: string; icon: string }
type LogoBandProps = { heading?: string; logos: LogoItem[] }
type SubHeroProps = {
  eyebrow: string
  title: React.ReactNode
  sub: string
  cta?: string
  visual?: MockKind
}
type FeatureRowsProps = { rows: FeatureRow[] }
type AccordionProps = { items: FaqItem[]; heading?: string }
type BenefitStripProps = { benefits: BenefitItem[]; heading?: string }
type MiniValueGridProps = {
  heading?: string
  items?: Array<{ icon: string; title: string; desc: string }>
}
type HeroVisualProps = { kind?: MockKind }

/* ============================================================
   Kaaty — Shared primitives
   ============================================================ */

function Container({ className = '', children }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 ${className}`}
    >
      {children}
    </div>
  )
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  as = 'button',
  type = 'button',
  href,
  onClick,
}: ButtonProps) {
  const sizes = {
    sm: 'h-9 px-4 text-[13px]',
    md: 'h-11 px-5 text-[14px]',
    lg: 'h-[52px] px-7 text-[15px]',
  }
  const variants = {
    primary:
      'bg-kaaty-500 text-white shadow-[0_8px_22px_-8px_rgba(255,107,0,.7)] hover:bg-kaaty-600 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(255,107,0,.65)]',
    dark: 'bg-navy text-white hover:bg-navy-800 hover:-translate-y-0.5',
    outline:
      'bg-white text-navy ring-1 ring-inset ring-navy-200 hover:ring-navy-300 hover:bg-navy-50 hover:-translate-y-0.5',
    ghostLight:
      'bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/20 hover:-translate-y-0.5 backdrop-blur',
    soft: 'bg-kaaty-50 text-kaaty-700 hover:bg-kaaty-100',
  }
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-display tracking-tight transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          size={size === 'lg' ? 18 : 16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  )
  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}

function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />
      {children}
    </span>
  )
}

function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadProps) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-3xl flex-col gap-6 ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-extrabold leading-[1.12] tracking-[-.025em] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed ${
            light ? 'text-navy-300' : 'text-navy-500'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}

/* ============================================================
   Kaaty — Content data: Products, Solutions, Integrations
   ============================================================ */

const SHARED_BENEFIT_FAQS = [
  {
    q: 'Can I start with just this and add more later?',
    a: 'Yes. Every Kaaty module works standalone and snaps into the rest of the platform whenever you are ready — no migration, no re-training.',
  },
  {
    q: 'Does it work with my existing hardware?',
    a: 'Kaaty runs on any Android or desktop device and integrates natively with Pine Labs smart terminals, thermal and kitchen printers, and barcode scanners.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most outlets go live the same week. We handle menu setup, data import and staff training so there is zero downtime.',
  },
]

const PRODUCTS = {
  pos: {
    name: 'Kaaty POS',
    icon: 'monitor',
    group: 'Restaurant Operations',
    visual: 'pos',
    title: 'Billing built for peak-hour speed',
    sub: 'Run frictionless checkouts, split tabs, and capture every cash and UPI sale instantly — online and offline.',
    features: [
      {
        title: 'Express counter billing',
        mock: 'pos',
        desc: 'A layout tuned so billers move at full speed during the rush.',
        points: [
          'Favourites, combos and modifiers one tap away.',
          'Auto-printed itemised KOTs and token slips.',
        ],
      },
      {
        title: 'Offline-first reliability',
        mock: 'business',
        desc: 'Keep selling even when the internet drops — nothing is ever lost.',
        points: [
          'Works fully offline and syncs when back online.',
          'Unbroken logs across pre-orders and walk-ups.',
        ],
      },
      {
        title: 'Anti-fraud UPI confirmation',
        mock: 'pos',
        desc: 'End fake-screenshot scams with real-time payment verification.',
        points: [
          'Live UPI ledger confirmation at the counter.',
          'Nothing marked paid until the money lands.',
        ],
      },
      {
        title: 'Live inventory sync',
        mock: 'kds',
        desc: 'Stock updates the moment an item sells, across every screen.',
        points: [
          'Auto-deduct ingredients per recipe.',
          'Low-stock alerts right on the billing screen.',
        ],
      },
    ],
    benefits: [
      { icon: 'zap', label: 'Sub-second billing' },
      { icon: 'wifi-off', label: 'Offline ready' },
      { icon: 'printer', label: 'Pine Labs & printers' },
      { icon: 'shield-check', label: 'Fraud-proof UPI' },
      { icon: 'refresh-cw', label: 'Real-time sync' },
      { icon: 'layers', label: 'Multi-outlet ready' },
    ],
  },
  kds: {
    name: 'Kaaty KDS',
    icon: 'chef-hat',
    group: 'Restaurant Operations',
    visual: 'kds',
    title: 'Kitchen management without the chaos',
    sub: 'Route every item to the right station, track prep in real time, and clear the rush with a visual, icon-driven display.',
    features: [
      {
        title: 'Smart station routing',
        mock: 'kds',
        desc: 'Each item lands at exactly the station that cooks it.',
        points: [
          'Route by category, course or kitchen.',
          'Balance load across stations automatically.',
        ],
      },
      {
        title: 'Single-tap milestones',
        mock: 'pos',
        desc: 'Move tickets from Preparing to Ready in one tap.',
        points: [
          'Colour-coded states everyone understands.',
          'Auto-notify the counter and customer.',
        ],
      },
      {
        title: 'Cross-channel queue',
        mock: 'kds',
        desc: 'Dine-in, online and QR orders in one unified queue.',
        points: ['No missed tickets across channels.', 'Priority and prep-time aware ordering.'],
      },
      {
        title: 'Bump, recall & timers',
        mock: 'business',
        desc: 'Keep service tight with live prep timers and recall.',
        points: ['Per-ticket timers flag slow orders.', 'Instant recall of bumped tickets.'],
      },
    ],
    benefits: [
      { icon: 'route', label: 'Station routing' },
      { icon: 'timer', label: 'Live prep timers' },
      { icon: 'layers', label: 'All channels in one' },
      { icon: 'hand', label: 'Single-tap control' },
      { icon: 'bell', label: 'Auto notifications' },
      { icon: 'monitor', label: 'Any screen size' },
    ],
  },
  'mobile-app': {
    name: 'Kaaty Mobile App',
    icon: 'smartphone',
    group: 'Customer Experience',
    visual: 'phone',
    title: 'Let customers order before they arrive',
    sub: 'A branded native ordering app with live tracking and push notifications that eliminate customer lines entirely.',
    features: [
      {
        title: 'Your own branded app',
        mock: 'phone',
        desc: 'A customer ordering channel that puts your brand front and centre.',
        points: ['Responsive digital menus with images.', 'Commission-free, direct-to-you orders.'],
      },
      {
        title: 'Real-time order tracking',
        mock: 'phone',
        desc: 'Keep customers informed at every stage automatically.',
        points: ['Placed → Preparing → Ready updates.', 'Accurate, live pickup countdowns.'],
      },
      {
        title: 'Push notifications',
        mock: 'phone',
        desc: 'Ping customers the exact second an order is ready.',
        points: ['Order-ready and offer notifications.', 'Win-back nudges for lapsed customers.'],
      },
      {
        title: 'Secure digital payments',
        mock: 'business',
        desc: 'Direct integration with modern payment rails.',
        points: ['UPI, cards and wallets supported.', 'Pre-paid wallet for quick checkout.'],
      },
    ],
    benefits: [
      { icon: 'smartphone', label: 'Native iOS & Android' },
      { icon: 'bell', label: 'Push notifications' },
      { icon: 'map-pin', label: 'Live tracking' },
      { icon: 'wallet', label: 'Pre-paid wallet' },
      { icon: 'palette', label: 'Fully branded' },
      { icon: 'percent', label: 'Zero commission' },
    ],
  },
  business: {
    name: 'Kaaty Business App',
    icon: 'layout-dashboard',
    group: 'Business Management',
    visual: 'business',
    title: 'Complete control, from anywhere',
    sub: 'The owner command centre — live sales, margins, multi-outlet analytics and vendor settlements in your pocket.',
    features: [
      {
        title: 'Live sales velocity',
        mock: 'business',
        desc: 'See exactly how every outlet is performing, right now.',
        points: ['Real-time revenue and order trends.', 'Margin and product performance views.'],
      },
      {
        title: 'Multi-outlet aggregation',
        mock: 'business',
        desc: 'Every branch rolled up into one clean dashboard.',
        points: ['Compare outlets side by side.', 'Role-based access for managers.'],
      },
      {
        title: 'Automated settlements',
        mock: 'pos',
        desc: 'Vendor splits and payouts reconciled for you.',
        points: ['Commission and rent handled per vendor.', 'Transparent, dispute-free payouts.'],
      },
      {
        title: 'Reports on the go',
        mock: 'phone',
        desc: 'Pull any statement from your phone, anytime.',
        points: ['80+ exportable reports.', 'Daily summaries pushed to you.'],
      },
    ],
    benefits: [
      { icon: 'trending-up', label: 'Live analytics' },
      { icon: 'layers', label: 'Multi-outlet' },
      { icon: 'wallet', label: 'Auto settlements' },
      { icon: 'file-text', label: '80+ reports' },
      { icon: 'smartphone', label: 'On the go' },
      { icon: 'lock', label: 'Role-based access' },
    ],
  },
  vendor: {
    name: 'Kaaty Vendor App',
    icon: 'store',
    group: 'Business Management',
    visual: 'pos',
    title: 'A full POS in every vendor pocket',
    sub: 'A lightweight mobile checkout for small stalls and counters — no expensive hardware, no complex setup.',
    features: [
      {
        title: 'Hardware-free billing',
        mock: 'pos',
        desc: 'A complete digital checkout on any phone or tablet.',
        points: ['No desktop terminal required.', 'Bluetooth printer support built in.'],
      },
      {
        title: 'Mobile checkout anywhere',
        mock: 'phone',
        desc: 'Bill customers from wherever the queue forms.',
        points: ['Android and iOS supported.', 'UPI and card payments on device.'],
      },
      {
        title: 'Lightweight inventory',
        mock: 'business',
        desc: 'Track ingredient depletion without the overhead.',
        points: ['Simple stock counts and alerts.', 'Mark items out of stock instantly.'],
      },
      {
        title: 'Code-free onboarding',
        mock: 'kds',
        desc: 'Launch a new stall in minutes, not days.',
        points: ['Guided, no-code setup.', 'Clone menus from existing stalls.'],
      },
    ],
    benefits: [
      { icon: 'smartphone', label: 'No hardware needed' },
      { icon: 'zap', label: 'Minutes to launch' },
      { icon: 'printer', label: 'Bluetooth printing' },
      { icon: 'package', label: 'Lite inventory' },
      { icon: 'store', label: 'Per-stall ledger' },
      { icon: 'refresh-cw', label: 'Synced to owner' },
    ],
  },
  'token-board': {
    name: 'Kaaty Token Board',
    icon: 'tv',
    group: 'Restaurant Operations',
    visual: 'kds',
    title: 'Clear the crowd with live token displays',
    sub: 'Dual-state TV notification boards synced to your kitchen — guests always know when their order is up.',
    features: [
      {
        title: 'Dual-state display',
        mock: 'kds',
        desc: 'Preparing and Ready columns guests read at a glance.',
        points: [
          'Big, legible tokens from across the room.',
          'Auto-advance as the kitchen bumps tickets.',
        ],
      },
      {
        title: 'Kitchen-synced in real time',
        mock: 'kds',
        desc: 'The board reflects exactly what the KDS shows.',
        points: ['Zero manual updates.', 'Instant move from preparing to ready.'],
      },
      {
        title: 'Multi-screen support',
        mock: 'business',
        desc: 'Run boards across counters, halls and pickup points.',
        points: ['Independent screens per zone.', 'Central control of all displays.'],
      },
      {
        title: 'On-brand displays',
        mock: 'phone',
        desc: 'Your logo, colours and promos between updates.',
        points: ['Custom branding and theming.', 'Rotate offers and announcements.'],
      },
    ],
    benefits: [
      { icon: 'tv', label: 'TV-ready' },
      { icon: 'refresh-cw', label: 'Kitchen-synced' },
      { icon: 'eye', label: 'Highly legible' },
      { icon: 'layers', label: 'Multi-screen' },
      { icon: 'palette', label: 'Branded' },
      { icon: 'megaphone', label: 'Promo slots' },
    ],
  },
  'qr-ordering': {
    name: 'QR Ordering',
    icon: 'qr-code',
    group: 'Customer Experience',
    visual: 'qr',
    title: 'Scan. Order. Enjoy.',
    sub: 'Let guests order from their table with a simple scan — fewer lines, faster turns, and higher ticket values.',
    features: [
      {
        title: 'Scan-to-order in seconds',
        mock: 'qr',
        desc: 'Guests browse, order and pay from their own phone.',
        points: ['No app download required.', 'Orders flow straight to the kitchen.'],
      },
      {
        title: 'No more lines',
        mock: 'kds',
        desc: 'Eliminate counter crowding at the busiest times.',
        points: ['Self-service from tables and benches.', 'Staff freed up to serve.'],
      },
      {
        title: 'Smart upsell',
        mock: 'qr',
        desc: 'Automated recommendations lift average order value.',
        points: ['Add-on and combo prompts.', 'Most-loved item suggestions.'],
      },
      {
        title: 'Live table management',
        mock: 'business',
        desc: 'See every table orders and status in real time.',
        points: ['Table-wise order history.', 'Merge, move and split with ease.'],
      },
    ],
    benefits: [
      { icon: 'qr-code', label: 'No app needed' },
      { icon: 'trending-up', label: '+ ticket value' },
      { icon: 'users', label: 'Less crowding' },
      { icon: 'utensils-crossed', label: 'Table-aware' },
      { icon: 'zap', label: 'Instant to kitchen' },
      { icon: 'wallet', label: 'Pay at table' },
    ],
  },
  kiosk: {
    name: 'Self Ordering Kiosk',
    icon: 'scan-line',
    group: 'Customer Experience',
    visual: 'kiosk',
    title: 'Cut queue time by up to 80%',
    sub: 'Interactive self-service terminals that speed up throughput and boost ticket sizes during high-volume periods.',
    features: [
      {
        title: 'Self-service terminals',
        mock: 'kiosk',
        desc: 'Guests order themselves on a fast, friendly touchscreen.',
        points: ['Visual, image-rich menus.', 'Accessible, multi-language ready.'],
      },
      {
        title: 'Automated cross-sell',
        mock: 'kiosk',
        desc: 'Smart prompts grow every order — without staff effort.',
        points: ['Combo and add-on suggestions.', 'Proven uplift in average ticket.'],
      },
      {
        title: 'Integrated payments',
        mock: 'pos',
        desc: 'Card and digital payments via attached hardware.',
        points: ['Tap, card and UPI on the kiosk.', 'Instant printed or digital receipts.'],
      },
      {
        title: 'Error-free orders',
        mock: 'kds',
        desc: 'Exactly what the guest selected reaches the kitchen.',
        points: ['No mishears at the counter.', 'Faster, more accurate service.'],
      },
    ],
    benefits: [
      { icon: 'scan-line', label: 'Line-busting' },
      { icon: 'trending-up', label: 'Bigger tickets' },
      { icon: 'credit-card', label: 'Pay on kiosk' },
      { icon: 'check', label: 'Order accuracy' },
      { icon: 'languages', label: 'Multi-language' },
      { icon: 'smile', label: 'Better experience' },
    ],
  },
}
// PRODUCT_GROUPS reserved for future nav restructure

const SOLUTIONS = {
  'college-canteens': {
    name: 'College Canteens',
    icon: 'graduation-cap',
    visual: 'qr',
    title: 'Built for high-volume campus dining',
    sub: 'Eliminate fake payment screenshots, crush the lunch-rush lines, and run closed-loop student wallets across campus.',
    rows: [
      {
        title: 'Anti-fraud UPI confirmation',
        mock: 'pos',
        desc: 'Where Kaaty began — kill fake-screenshot scams for good.',
        points: ['Real-time UPI ledger confirmation.', 'Nothing marked paid until money lands.'],
      },
      {
        title: 'Closed-loop student wallets',
        mock: 'phone',
        desc: 'Pre-loaded campus wallets speed up every transaction.',
        points: ['Top-up once, tap-to-pay all week.', 'Parents and admins see spend clearly.'],
      },
      {
        title: 'QR & pre-ordering',
        mock: 'qr',
        desc: 'Students order ahead and skip the line entirely.',
        points: [
          'Scan-to-order from anywhere on campus.',
          'Pickup tokens clear the counter crowd.',
        ],
      },
    ],
  },
  restaurants: {
    name: 'Restaurants',
    icon: 'utensils-crossed',
    visual: 'business',
    title: 'A 5-star restaurant experience awaits',
    sub: 'Make dine-in effortless with table management, course-by-course KOT routing, and guest CRM built for restaurants.',
    rows: [
      {
        title: 'Table & reservation management',
        mock: 'kds',
        desc: 'Merge, move and split table orders with ease.',
        points: ['Record table-wise orders accurately.', 'Assign tables by live availability.'],
      },
      {
        title: 'Course & KOT control',
        mock: 'pos',
        desc: 'Fire courses in sequence to the right stations.',
        points: ['Sequential course firing.', 'Split and transfer KOTs without re-punching.'],
      },
      {
        title: 'Guest CRM & loyalty',
        mock: 'phone',
        desc: 'Recognise regulars and bring them back automatically.',
        points: ['Profiles with visit history.', 'Targeted offers and rewards.'],
      },
    ],
  },
  cafes: {
    name: 'Cafes',
    icon: 'coffee',
    visual: 'pos',
    title: 'Run your cafe like clockwork',
    sub: 'Fast bar billing, recipe-level inventory, and loyalty that keeps your regulars coming back for one more cup.',
    rows: [
      {
        title: 'Quick bar billing',
        mock: 'pos',
        desc: 'Speed through the morning rush with a cafe-tuned layout.',
        points: ['Milk, shots and syrup modifiers in a tap.', 'Quick-pay wallet for regulars.'],
      },
      {
        title: 'Recipe-level inventory',
        mock: 'business',
        desc: 'Track every gram of beans and litre of milk.',
        points: ['Auto-deduct ingredients as items sell.', 'Low-stock alerts before you run dry.'],
      },
      {
        title: 'Loyalty & re-engagement',
        mock: 'phone',
        desc: 'Bring guests back with points and timely nudges.',
        points: ['Automated rewards on every visit.', 'Win-back offers for lapsed guests.'],
      },
    ],
  },
  'food-courts': {
    name: 'Food Courts',
    icon: 'store',
    visual: 'business',
    title: 'One platform for the whole food court',
    sub: 'Centralise dozens of independent stalls under a single parent ledger — unified tokens, settlements and reporting.',
    rows: [
      {
        title: 'Multi-vendor management',
        mock: 'business',
        desc: 'Onboard every stall and run them as one system.',
        points: ['Each vendor gets a lightweight POS.', 'Owner sees consolidated performance.'],
      },
      {
        title: 'Unified token system',
        mock: 'kds',
        desc: 'One token journey no matter how many stalls.',
        points: ['Single token across vendors.', 'Central TV boards for the court.'],
      },
      {
        title: 'Automated settlements',
        mock: 'pos',
        desc: 'Splits and payouts reconciled automatically.',
        points: ['Commission and rent per vendor.', 'Transparent, dispute-free.'],
      },
    ],
  },
  'cloud-kitchens': {
    name: 'Cloud Kitchens',
    icon: 'cloud',
    visual: 'kds',
    title: 'Manage every brand from one screen',
    sub: 'Run multiple virtual brands across all aggregators on one POS — accept, prep and dispatch without app-shuffling.',
    rows: [
      {
        title: 'Virtual brand management',
        mock: 'business',
        desc: 'Multiple cloud-kitchen brands, cleanly segregated.',
        points: ['Manage all brands in one setup.', 'One POS, no extra charge.'],
      },
      {
        title: 'Aggregator aggregation',
        mock: 'kds',
        desc: 'End the shuffle between a dozen ordering apps.',
        points: ['Accept all channels in one click.', 'Bill and KOT from one place.'],
      },
      {
        title: 'Dispatch coordination',
        mock: 'phone',
        desc: 'Keep dispatch tight so food leaves hot.',
        points: ['Live order stage to handover.', 'Rider assignment synced to kitchen.'],
      },
    ],
  },
  hotels: {
    name: 'Hotels',
    icon: 'bed-double',
    visual: 'business',
    title: 'Hospitality-grade F&B operations',
    sub: 'Run room service, multiple dining outlets and banquets on one connected platform with room-folio billing.',
    rows: [
      {
        title: 'Room-folio billing',
        mock: 'pos',
        desc: 'Post F&B charges straight to the guest room folio.',
        points: ['Seamless room-charge posting.', 'Consolidated checkout billing.'],
      },
      {
        title: 'Multi-outlet dining',
        mock: 'business',
        desc: 'Restaurant, bar, cafe and room service as one.',
        points: ['Unified menus across outlets.', 'Central reporting for the property.'],
      },
      {
        title: 'Banquet & event orders',
        mock: 'kds',
        desc: 'Handle large covers and pre-set menus with ease.',
        points: ['Event-wise order planning.', 'Kitchen coordination at scale.'],
      },
    ],
  },
  bakeries: {
    name: 'Bakeries',
    icon: 'croissant',
    visual: 'pos',
    title: 'Sweeten your bakery operations',
    sub: 'Weight-based billing, batch production planning, and ingredient-level inventory tailored for bakeries.',
    rows: [
      {
        title: 'Weight & unit billing',
        mock: 'pos',
        desc: 'Bill by piece, weight or box — accurately every time.',
        points: ['Integrated weighing-scale support.', 'Mixed-unit carts handled cleanly.'],
      },
      {
        title: 'Production & batch planning',
        mock: 'business',
        desc: 'Plan daily bakes against demand and stock.',
        points: ['Forecast batches from trends.', 'Track consumption per recipe.'],
      },
      {
        title: 'Custom cake pre-orders',
        mock: 'phone',
        desc: 'Take advance orders with deposits and pickups.',
        points: ['Capture custom requests.', 'Automated pickup reminders.'],
      },
    ],
  },
  'ice-cream-parlours': {
    name: 'Ice Cream Parlours',
    icon: 'ice-cream-cone',
    visual: 'kiosk',
    title: 'Scoop up faster service',
    sub: 'Speed through dessert rushes with quick-add modifiers, parlour kiosks, and loyalty for your sweet regulars.',
    rows: [
      {
        title: 'Modifier-rich billing',
        mock: 'pos',
        desc: 'Scoops, toppings and combos added in a tap.',
        points: ['Endless combinations, zero slowdown.', 'Quick re-order of favourites.'],
      },
      {
        title: 'Parlour self-kiosks',
        mock: 'kiosk',
        desc: 'Let guests build their own dessert and pay.',
        points: ['Visual builder boosts ticket size.', 'Frees staff to serve.'],
      },
      {
        title: 'Seasonal menu control',
        mock: 'business',
        desc: 'Flip flavours and specials across outlets instantly.',
        points: ['Schedule limited-time flavours.', 'Hide sold-out items live.'],
      },
    ],
  },
}

const INTEGRATION_PAGES = {
  easebuzz: {
    name: 'Easebuzz',
    icon: 'wallet',
    category: 'Payments',
    dot: '#5B2EE0',
    title: 'Collect payments seamlessly with Easebuzz',
    sub: 'Accept UPI, cards and netbanking with instant settlement and automated reconciliation inside Kaaty.',
    what: [
      'Real-time UPI confirmation at the counter — no fake screenshots.',
      'Automated reconciliation against every order.',
      'Instant settlement visibility in your dashboard.',
    ],
  },
  razorpay: {
    name: 'Razorpay',
    icon: 'credit-card',
    category: 'Payments',
    dot: '#0C2451',
    title: 'Power checkout with Razorpay',
    sub: 'Offer every popular payment method and reconcile each transaction automatically against your Kaaty orders.',
    what: [
      'UPI, cards, wallets and netbanking out of the box.',
      'Payment links for pre-orders and deposits.',
      'Auto-matched payouts and settlements.',
    ],
  },
  phonepe: {
    name: 'PhonePe',
    icon: 'smartphone',
    category: 'Payments',
    dot: '#5F259F',
    title: 'Accept PhonePe in a tap',
    sub: 'Let customers pay with PhonePe UPI and see confirmations land in your ledger in real time.',
    what: [
      'Instant UPI confirmation, fraud-proof.',
      'QR and intent-based payment flows.',
      'Reconciled automatically per order.',
    ],
  },
  'pine-labs': {
    name: 'Pine Labs',
    icon: 'printer',
    category: 'Hardware',
    dot: '#0B7F5B',
    title: 'Deep native Pine Labs integration',
    sub: 'Run billing, card processing and receipts from a single Pine Labs smart Android terminal.',
    what: [
      'Look up mobile orders on the terminal.',
      'Process cards and print receipts in one device.',
      'No double entry between POS and terminal.',
    ],
  },
  'thermal-printers': {
    name: 'Thermal Printers',
    icon: 'printer',
    category: 'Hardware',
    dot: '#475569',
    title: 'Works with any thermal printer',
    sub: 'Print itemised bills, KOTs and tokens on standard thermal and kitchen printers — wired or Bluetooth.',
    what: [
      'Auto-print KOTs to the right station.',
      'Customisable bill and token layouts.',
      'Bluetooth printing from mobile devices.',
    ],
  },
  swiggy: {
    name: 'Swiggy',
    icon: 'bike',
    category: 'Marketplaces',
    dot: '#FC8019',
    title: 'Accept Swiggy orders on one screen',
    sub: 'Pull Swiggy orders straight into Kaaty — accept, bill, KOT and mark ready without app-shuffling.',
    what: [
      'One-click accept into your POS.',
      'Auto-generate KOTs for the kitchen.',
      'Mark items out of stock instantly.',
    ],
  },
  zomato: {
    name: 'Zomato',
    icon: 'utensils',
    category: 'Marketplaces',
    dot: '#E23744',
    title: 'Manage Zomato orders inside Kaaty',
    sub: 'Every Zomato order flows into the same screen as dine-in and QR — no missed tickets, ever.',
    what: [
      'Unified queue with all channels.',
      'Menu and price sync to Zomato.',
      'Live stock availability updates.',
    ],
  },
  ondc: {
    name: 'ONDC',
    icon: 'network',
    category: 'Marketplaces',
    dot: '#1F8A5B',
    title: 'Go live on ONDC with Kaaty',
    sub: 'List your outlet on India open network for digital commerce and receive orders directly into Kaaty.',
    what: [
      'Direct ONDC order ingestion.',
      'Commission-light reach to new customers.',
      'Same unified order workflow.',
    ],
  },
}
const INTEGRATION_GROUPS = [
  { label: 'Payments', icon: 'credit-card', items: ['easebuzz', 'razorpay', 'phonepe'] },
  { label: 'Hardware', icon: 'printer', items: ['pine-labs', 'thermal-printers'] },
  { label: 'Marketplaces', icon: 'shopping-bag', items: ['swiggy', 'zomato', 'ondc'] },
]

/* ============================================================
   Navbar
   ============================================================ */

const MENU_PRODUCTS = [
  {
    group: 'Restaurant Operations',
    items: [
      { name: 'Kaaty POS', slug: 'pos', icon: 'monitor', desc: 'Peak-hour billing engine.' },
      { name: 'Kaaty KDS', slug: 'kds', icon: 'chef-hat', desc: 'Visual kitchen display.' },
      { name: 'Token Board', slug: 'token-board', icon: 'tv', desc: 'Live status displays.' },
    ],
  },
  {
    group: 'Customer Experience',
    items: [
      { name: 'Mobile App', slug: 'mobile-app', icon: 'smartphone', desc: 'Branded ordering app.' },
      { name: 'QR Ordering', slug: 'qr-ordering', icon: 'qr-code', desc: 'Scan-to-order dining.' },
      {
        name: 'Self Ordering Kiosk',
        slug: 'kiosk',
        icon: 'scan-line',
        desc: 'Line-busting terminals.',
      },
    ],
  },
  {
    group: 'Business Management',
    items: [
      {
        name: 'Business App',
        slug: 'business',
        icon: 'layout-dashboard',
        desc: 'Owner command centre.',
      },
      { name: 'Vendor App', slug: 'vendor', icon: 'store', desc: 'Mobile POS for stalls.' },
      {
        name: 'Inventory Management',
        slug: 'business',
        icon: 'package',
        desc: 'Stock & costing control.',
      },
    ],
  },
]

const MENU_SOLUTIONS = [
  { name: 'College Canteens', slug: 'college-canteens', icon: 'graduation-cap' },
  { name: 'Restaurants', slug: 'restaurants', icon: 'utensils-crossed' },
  { name: 'Cafes', slug: 'cafes', icon: 'coffee' },
  { name: 'Food Courts', slug: 'food-courts', icon: 'store' },
  { name: 'Cloud Kitchens', slug: 'cloud-kitchens', icon: 'cloud' },
  { name: 'Hotels', slug: 'hotels', icon: 'bed-double' },
  { name: 'Bakeries', slug: 'bakeries', icon: 'croissant' },
  { name: 'Ice Cream Parlours', slug: 'ice-cream-parlours', icon: 'ice-cream-cone' },
]

const MENU_INTEGRATIONS = [
  {
    group: 'Payments',
    icon: 'credit-card',
    items: [
      { name: 'Easebuzz', slug: 'easebuzz' },
      { name: 'Razorpay', slug: 'razorpay' },
      { name: 'PhonePe', slug: 'phonepe' },
    ],
  },
  {
    group: 'Hardware',
    icon: 'printer',
    items: [
      { name: 'Pine Labs', slug: 'pine-labs' },
      { name: 'Thermal Printers', slug: 'thermal-printers' },
    ],
  },
  {
    group: 'Marketplaces',
    icon: 'shopping-bag',
    items: [
      { name: 'Swiggy', slug: 'swiggy' },
      { name: 'Zomato', slug: 'zomato' },
      { name: 'ONDC', slug: 'ondc' },
    ],
  },
]

const MENU_RESOURCES = [
  { name: 'Documentation', icon: 'book-open', desc: 'Guides, setup & API references.' },
  { name: 'Case Studies', icon: 'award', desc: 'Real deployments & outcomes.' },
  { name: 'Blog', icon: 'newspaper', desc: 'Product news & F&B playbooks.' },
]

function ItemLink({ href, icon, name, desc }: ItemLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-kaaty-50"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
        <Icon name={icon} size={17} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13.5px] font-semibold text-navy">{name}</span>
        {desc && (
          <span className="mt-0.5 block text-[12px] leading-snug text-navy-500">{desc}</span>
        )}
      </span>
    </a>
  )
}

function ProductsMenu() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {MENU_PRODUCTS.map((col) => (
        <div key={col.group}>
          <div className="mb-1.5 px-2.5 text-[11px] font-bold uppercase tracking-wider text-navy-400">
            {col.group}
          </div>
          <div className="flex flex-col gap-0.5">
            {col.items.map((it) => (
              <ItemLink key={it.name} href={`#/products/${it.slug}`} {...it} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function SolutionsMenu() {
  return (
    <div className="grid grid-cols-2 gap-1 p-3">
      {MENU_SOLUTIONS.map((s) => (
        <a
          key={s.slug}
          href={`#/solutions/${s.slug}`}
          className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-kaaty-50"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
            <Icon name={s.icon} size={16} />
          </span>
          <span className="text-[14px] font-medium text-navy-800">{s.name}</span>
        </a>
      ))}
    </div>
  )
}

function IntegrationsMenu() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {MENU_INTEGRATIONS.map((c) => (
        <div key={c.group}>
          <div className="mb-2 flex items-center gap-2 px-1">
            <Icon name={c.icon} size={15} className="text-kaaty-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
              {c.group}
            </span>
          </div>
          <ul className="space-y-0.5">
            {c.items.map((i) => (
              <li key={i.slug}>
                <a
                  href={`#/integrations/${i.slug}`}
                  className="block rounded-lg px-2.5 py-1.5 text-[13.5px] font-medium text-navy-700 transition-colors hover:bg-kaaty-50 hover:text-kaaty-700"
                >
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function ResourcesMenu() {
  return (
    <div className="flex flex-col gap-1 p-3">
      {MENU_RESOURCES.map((r) => (
        <ItemLink key={r.name} href="#/resources" {...r} />
      ))}
    </div>
  )
}

type MenuConfig = { width: string; render: () => React.ReactElement }
const MENUS: Record<string, MenuConfig> = {
  Products: { width: 'w-[720px]', render: ProductsMenu },
  Solutions: { width: 'w-[520px]', render: SolutionsMenu },
  Integrations: { width: 'w-[600px]', render: IntegrationsMenu },
  Resources: { width: 'w-[360px]', render: ResourcesMenu },
}

function Logo({ light = false }) {
  return (
    <a href="#/" className="flex items-center gap-2.5">
      <img
        src="/logo.jpg"
        alt="Kaaty Logo"
        className="h-9 w-9 rounded-xl shadow-[0_8px_18px_-6px_rgba(255,107,0,.7)] object-cover"
      />
      <span
        className={`font-display text-[22px] font-extrabold tracking-[-.03em] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        Kaaty
      </span>
    </a>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState<string | null>(null)
  const [mobile, setMobile] = React.useState(false)
  const [mAcc, setMAcc] = React.useState<string | null>(null)
  const closeT = React.useRef<number | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  React.useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
  }, [mobile])
  React.useEffect(() => {
    const close = () => {
      setMobile(false)
      setOpen(null)
    }
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  const enter = (k: string) => {
    if (closeT.current !== null) {
      clearTimeout(closeT.current)
    }
    setOpen(k)
  }
  const leave = () => {
    closeT.current = window.setTimeout(() => setOpen(null), 120)
  }
  const dropdowns = ['Products', 'Solutions', 'Integrations']

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? 'border-navy-200/70 bg-white/85 backdrop-blur-xl shadow-[0_6px_24px_-16px_rgba(16,24,40,.3)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex" onMouseLeave={leave}>
            {dropdowns.map((k) => (
              <div key={k} onMouseEnter={() => enter(k)} className="relative">
                <button
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${
                    open === k ? 'text-kaaty-600' : 'text-navy-800 hover:text-kaaty-600'
                  }`}
                >
                  {k}
                  <Icon
                    name="chevron-down"
                    size={15}
                    className={`transition-transform duration-200 ${
                      open === k ? 'rotate-180 text-kaaty-500' : 'text-navy-400'
                    }`}
                  />
                </button>
              </div>
            ))}
            <a
              href="#/pricing"
              className="rounded-lg px-3.5 py-2 text-[14.5px] font-semibold text-navy-800 transition-colors hover:text-kaaty-600"
            >
              Pricing
            </a>
            <div onMouseEnter={() => enter('Resources')} className="relative">
              <button
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${
                  open === 'Resources' ? 'text-kaaty-600' : 'text-navy-800 hover:text-kaaty-600'
                }`}
              >
                Resources
                <Icon
                  name="chevron-down"
                  size={15}
                  className={`transition-transform duration-200 ${
                    open === 'Resources' ? 'rotate-180 text-kaaty-500' : 'text-navy-400'
                  }`}
                />
              </button>
            </div>
            <a
              href="#/about"
              className="rounded-lg px-3.5 py-2 text-[14.5px] font-semibold text-navy-800 transition-colors hover:text-kaaty-600"
            >
              About Us
            </a>

            {open && MENUS[open] && (
              <div
                onMouseEnter={() => enter(open)}
                className={`menu-enter absolute left-1/2 top-[58px] -translate-x-1/2 ${
                  MENUS[open].width
                } max-w-[94vw] overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lift`}
              >
                {React.createElement(MENUS[open].render)}
                <div className="flex items-center justify-between gap-3 border-t border-navy-100 bg-navy-50/60 px-5 py-3">
                  <span className="text-[12.5px] font-medium text-navy-500">
                    The complete operating system for food businesses.
                  </span>
                  <a
                    href="#/demo"
                    className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-kaaty-600 hover:text-kaaty-700"
                  >
                    Book a demo <Icon name="arrow-right" size={14} />
                  </a>
                </div>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              as="a"
              href="#/demo"
              size="md"
              icon="arrow-right"
              className="hidden sm:inline-flex"
            >
              Book Demo
            </Button>
            <button
              onClick={() => setMobile(true)}
              className="grid h-10 w-10 place-items-center rounded-xl text-navy ring-1 ring-inset ring-navy-200 lg:hidden"
              aria-label="Open menu"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </Container>
      </div>

      {mobile && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
            onClick={() => setMobile(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
              <Logo />
              <button
                onClick={() => setMobile(false)}
                className="grid h-10 w-10 place-items-center rounded-xl text-navy ring-1 ring-inset ring-navy-200"
              >
                <Icon name="x" size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {['Products', 'Solutions', 'Integrations', 'Resources'].map((k) => (
                <div key={k} className="border-b border-navy-100">
                  <button
                    onClick={() => setMAcc(mAcc === k ? null : k)}
                    className="flex w-full items-center justify-between py-3.5 text-[16px] font-bold text-navy"
                  >
                    {k}
                    <Icon
                      name={mAcc === k ? 'minus' : 'plus'}
                      size={18}
                      className="text-kaaty-500"
                    />
                  </button>
                  {mAcc === k && (
                    <div className="pb-3">
                      {k === 'Products' &&
                        MENU_PRODUCTS.map((col) => (
                          <div key={col.group} className="mb-2">
                            <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-400">
                              {col.group}
                            </div>
                            {col.items.map((it) => (
                              <a
                                key={it.name}
                                href={`#/products/${it.slug}`}
                                onClick={() => setMobile(false)}
                                className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-navy-700"
                              >
                                <Icon name={it.icon} size={16} className="text-kaaty-500" />
                                {it.name}
                              </a>
                            ))}
                          </div>
                        ))}
                      {k === 'Solutions' &&
                        MENU_SOLUTIONS.map((s) => (
                          <a
                            key={s.slug}
                            href={`#/solutions/${s.slug}`}
                            onClick={() => setMobile(false)}
                            className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-navy-700"
                          >
                            <Icon name={s.icon} size={16} className="text-kaaty-500" />
                            {s.name}
                          </a>
                        ))}
                      {k === 'Integrations' &&
                        MENU_INTEGRATIONS.map((c) => (
                          <div key={c.group} className="px-2 py-1.5">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-navy-400">
                              {c.group}
                            </div>
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {c.items.map((i) => (
                                <a
                                  key={i.slug}
                                  href={`#/integrations/${i.slug}`}
                                  onClick={() => setMobile(false)}
                                  className="rounded-md bg-navy-50 px-2 py-1 text-[12.5px] text-navy-700"
                                >
                                  {i.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      {k === 'Resources' &&
                        MENU_RESOURCES.map((r) => (
                          <a
                            key={r.name}
                            href="#/resources"
                            onClick={() => setMobile(false)}
                            className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-navy-700"
                          >
                            <Icon name={r.icon} size={16} className="text-kaaty-500" />
                            {r.name}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#/pricing"
                onClick={() => setMobile(false)}
                className="block border-b border-navy-100 py-3.5 text-[16px] font-bold text-navy"
              >
                Pricing
              </a>
              <a
                href="#/about"
                onClick={() => setMobile(false)}
                className="block border-b border-navy-100 py-3.5 text-[16px] font-bold text-navy"
              >
                About Us
              </a>
            </div>
            <div className="border-t border-navy-100 p-4">
              <Button
                as="a"
                href="#/demo"
                onClick={() => setMobile(false)}
                size="lg"
                icon="arrow-right"
                className="w-full"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ============================================================
   Hero
   ============================================================ */

function StatusDot({ color }: StatusDotProps) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={`absolute inline-flex h-full w-full animate-pulseDot rounded-full ${color}`}
      />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  )
}

function POSDevice() {
  const rows = [
    { n: 'Chicken Biryani', q: 2, p: '₹360' },
    { n: 'Paneer Tikka', q: 1, p: '₹240' },
    { n: 'Masala Dosa', q: 3, p: '₹270' },
    { n: 'Cold Coffee', q: 2, p: '₹180' },
  ]
  return (
    <div className="w-full overflow-hidden rounded-[22px] border border-navy-200/70 bg-white shadow-lift ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-navy-100 bg-navy-50/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-kaaty-500 text-white">
            <Icon name="monitor" size={14} />
          </span>
          <span className="font-display text-[13px] font-bold text-navy">Kaaty POS</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10.5px] font-bold text-emerald-600">
          <StatusDot color="bg-emerald-500" /> Live
        </span>
      </div>
      <div className="px-4 py-3">
        <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-navy-400">
          <span>Table 7 · Dine-in</span>
          <span>Order #1042</span>
        </div>
        <div className="space-y-1.5">
          {rows.map((r) => (
            <div
              key={r.n}
              className="flex items-center justify-between rounded-lg bg-navy-50/60 px-3 py-2"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white text-[11px] font-bold text-kaaty-600 ring-1 ring-navy-100">
                  {r.q}
                </span>
                <span className="truncate text-[13px] font-medium text-navy-800">{r.n}</span>
              </div>
              <span className="text-[13px] font-semibold text-navy">{r.p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-navy-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-[12.5px] font-medium text-navy-500">Total</span>
          <span className="font-display text-[18px] font-extrabold text-navy">₹1,050</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button className="rounded-lg bg-navy-50 py-2 text-[11.5px] font-semibold text-navy-700">
            Hold
          </button>
          <button className="rounded-lg bg-navy-50 py-2 text-[11.5px] font-semibold text-navy-700">
            Split
          </button>
          <button className="rounded-lg bg-kaaty-500 py-2 text-[11.5px] font-bold text-white">
            Pay UPI
          </button>
        </div>
      </div>
    </div>
  )
}

function KDSDevice() {
  const tickets = [
    {
      id: '#1042',
      t: '02:14',
      items: ['2× Biryani', '1× Paneer Tikka'],
      state: 'Preparing',
      tone: 'amber',
    },
    { id: '#1041', t: '00:38', items: ['3× Masala Dosa'], state: 'Ready', tone: 'emerald' },
  ]
  const tones: Record<string, string> = {
    amber: 'bg-amber-100 text-amber-700',
    emerald: 'bg-emerald-100 text-emerald-700',
  }
  return (
    <div className="w-full overflow-hidden rounded-[18px] border border-navy-800 bg-navy-900 shadow-lift">
      <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-kaaty-500 text-white">
            <Icon name="chef-hat" size={13} />
          </span>
          <span className="font-display text-[12px] font-bold text-white">Kitchen Display</span>
        </div>
        <span className="text-[10px] font-bold text-navy-300">STATION 1</span>
      </div>
      <div className="space-y-2 p-3">
        {tickets.map((t) => (
          <div key={t.id} className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-[13px] font-bold text-white">{t.id}</span>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${tones[t.tone]}`}>
                {t.state}
              </span>
            </div>
            <ul className="space-y-1">
              {t.items.map((i) => (
                <li key={i} className="flex items-center gap-1.5 text-[12px] text-navy-200">
                  <Icon name="dot" size={14} className="text-kaaty-400" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center gap-1 text-[10.5px] font-semibold text-navy-400">
              <Icon name="timer" size={12} /> {t.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneDevice() {
  const steps: Array<[string, boolean]> = [
    ['Order placed', true],
    ['Preparing', true],
    ['Ready for pickup', false],
  ]
  return (
    <div className="w-full overflow-hidden rounded-[28px] border-[5px] border-navy-900 bg-white shadow-lift">
      <div className="relative bg-gradient-to-b from-kaaty-500 to-kaaty-600 px-4 pb-6 pt-5 text-white">
        <div className="absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full bg-white/40" />
        <div className="mt-1 text-[10.5px] font-medium text-white/80">Order ready in</div>
        <div className="font-display text-[26px] font-extrabold leading-none">04:30</div>
        <div className="mt-3 flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
            <Icon name="bell" size={13} />
          </span>
          <span className="text-[11px] font-semibold">Token #1042</span>
        </div>
      </div>
      <div className="space-y-2.5 px-4 py-4">
        {steps.map(([s, done]) => (
          <div key={s} className="flex items-center gap-2.5">
            <span
              className={`grid h-5 w-5 place-items-center rounded-full ${
                done ? 'bg-emerald-500 text-white' : 'bg-navy-100 text-navy-400'
              }`}
            >
              <Icon name={done ? 'check' : 'circle'} size={12} />
            </span>
            <span
              className={`text-[11.5px] font-medium ${done ? 'text-navy-800' : 'text-navy-400'}`}
            >
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] sm:pt-[132px]">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-kaaty-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-8%] top-40 h-[380px] w-[380px] rounded-full bg-kaaty-300/10 blur-3xl" />

      <Container className="relative pb-20 sm:pb-28">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* ── Left: copy ── */}
          <div className="w-full lg:w-[54%] lg:max-w-[680px]">
            <div className="reveal in inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/70 px-3.5 py-1.5 text-[12.5px] font-semibold text-navy-700 backdrop-blur">
              <span className="flex h-5 items-center gap-1 rounded-full bg-kaaty-500 px-2 text-[10.5px] font-bold uppercase tracking-wide text-white">
                New
              </span>
              The food-business OS
              <Icon name="arrow-right" size={13} className="text-kaaty-500" />
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-.035em] text-navy">
              The Complete <span className="gradient-text">Operating System</span> For Modern Food
              Businesses
            </h1>

            <p className="mt-6 text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-navy-500">
              From billing and kitchen operations to customer ordering, QR menus, kiosks, vendor
              management and analytics — Kaaty brings everything together in one unified platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#/demo" size="lg" icon="arrow-right">
                Book Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                icon="play"
                onClick={() => {
                  const el = document.getElementById('products')
                  if (el) {
                    window.scrollTo({
                      top: el.getBoundingClientRect().top + window.scrollY - 70,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Watch Product Tour
              </Button>
            </div>

            <div className="mt-8 flex items-start gap-2.5 text-[13.5px] text-navy-500">
              <Icon name="check-circle-2" size={18} className="mt-0.5 shrink-0 text-kaaty-500" />
              <span>
                One unified platform for{' '}
                <span className="font-semibold text-navy-700">
                  Restaurants, Cafes, Food Courts, Cloud Kitchens,
                </span>{' '}
                and <span className="font-semibold text-navy-700">College Canteens.</span>
              </span>
            </div>
          </div>

          {/* ── Right: devices ── */}
          <div className="w-full lg:w-[46%]">
            {/*
              Aspect-ratio container: paddingBottom 90% gives stable
              intrinsic height that scales proportionally with width at
              every zoom level — zero fixed px heights anywhere.
            */}
            <div className="relative mx-auto w-full max-w-[580px] 2xl:max-w-[640px]">
              <div className="relative w-full" style={{ paddingBottom: '90%' }}>
                {/* POS — top-right, largest card */}
                <div className="absolute right-0 top-0 w-[64%] animate-floaty">
                  <POSDevice />
                </div>

                {/* KDS — left, overlapping POS */}
                <div className="absolute left-0 top-[18%] w-[48%] animate-floaty2">
                  <KDSDevice />
                </div>

                {/* Phone — bottom-right */}
                <div
                  className="absolute bottom-0 right-[8%] z-10 w-[30%] animate-floaty"
                  style={{ animationDelay: '1.2s' }}
                >
                  <PhoneDevice />
                </div>

                {/* Synced badge — center */}
                <div className="absolute left-1/2 top-[44%] z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-navy-900 px-3.5 py-2 text-white shadow-lift">
                    <Icon name="refresh-cw" size={14} className="text-kaaty-400" />
                    <span className="whitespace-nowrap text-[11.5px] font-bold">
                      Synced · real-time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ============================================================
   Home Sections A + mock panels
   ============================================================ */

function MockPanel({ kind }: { kind: MockKind }) {
  const headers = {
    pos: ['Kaaty POS', 'monitor'],
    kds: ['Kitchen Display', 'chef-hat'],
    phone: ['Mobile App', 'smartphone'],
    business: ['Owner Dashboard', 'layout-dashboard'],
    vendor: ['Vendor POS', 'store'],
    qr: ['QR Ordering', 'qr-code'],
    kiosk: ['Self Kiosk', 'scan-line'],
  }
  const [label, ic] = headers[kind] || ['Kaaty', 'utensils']
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-navy-800 bg-navy-900 p-6 shadow-lift">
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-50" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-kaaty-500/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-kaaty-500 text-white">
              <Icon name={ic} size={17} />
            </span>
            <span className="font-display text-[14px] font-bold text-white">{label}</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-bold text-navy-200">
            <StatusDot color="bg-emerald-400" /> Live
          </span>
        </div>
        <div className="mt-5">{renderMockBody(kind)}</div>
      </div>
    </div>
  )
}

function renderMockBody(kind: MockKind) {
  if (kind === 'pos' || kind === 'vendor') {
    const lineItems: Array<[string, string]> = [
      ['2× Chicken Biryani', '₹360'],
      ['1× Paneer Tikka', '₹240'],
      ['3× Masala Dosa', '₹270'],
    ]
    return (
      <div className="space-y-2">
        {lineItems.map(([n, p]) => (
          <div
            key={n}
            className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
          >
            <span className="text-[13px] font-medium text-navy-100">{n}</span>
            <span className="text-[13px] font-bold text-white">{p}</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-kaaty-500/15 px-4 py-3 ring-1 ring-kaaty-500/40">
          <span className="text-[13px] font-bold text-kaaty-300">Total</span>
          <span className="font-display text-[16px] font-extrabold text-white">₹870</span>
        </div>
      </div>
    )
  }
  if (kind === 'kds' || kind === 'kiosk') {
    const tickets: Array<[string, string, string]> = [
      ['#1042', 'Preparing', 'bg-amber-400'],
      ['#1041', 'Ready', 'bg-emerald-400'],
      ['#1040', 'Preparing', 'bg-amber-400'],
      ['#1039', 'New', 'bg-kaaty-400'],
    ]
    return (
      <div className="grid grid-cols-2 gap-2.5">
        {tickets.map(([id, st, dot]) => (
          <div key={id} className="rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <span className="font-display text-[13px] font-bold text-white">{id}</span>
              <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
            </div>
            <div className="mt-2 text-[11.5px] font-semibold text-navy-300">{st}</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${dot}`}
                style={{ width: st === 'Ready' ? '100%' : st === 'New' ? '20%' : '65%' }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (kind === 'phone') {
    const steps: Array<[string, boolean]> = [
      ['Order placed', true],
      ['Preparing', true],
      ['Ready', false],
    ]
    return (
      <div className="mx-auto w-[170px] rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="text-[11px] text-navy-300">Order ready in</div>
        <div className="font-display text-[28px] font-extrabold text-white">04:30</div>
        <div className="mt-4 space-y-2.5">
          {steps.map(([s, d]) => (
            <div key={s} className="flex items-center gap-2.5">
              <span
                className={`grid h-5 w-5 place-items-center rounded-full ${d ? 'bg-emerald-500 text-white' : 'bg-white/10 text-navy-400'}`}
              >
                <Icon name={d ? 'check' : 'circle'} size={11} />
              </span>
              <span className={`text-[11.5px] ${d ? 'text-white' : 'text-navy-400'}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (kind === 'qr') {
    return (
      <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-white">
          <Icon name="qr-code" size={64} className="text-navy-900" />
        </div>
        <div>
          <div className="font-display text-[14px] font-bold text-white">Table 7</div>
          <div className="mt-1 text-[12px] text-navy-300">Scan to view menu & order instantly.</div>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-kaaty-500/20 px-2.5 py-1 text-[11px] font-bold text-kaaty-300">
            <Icon name="trending-up" size={12} /> +18% ticket value
          </div>
        </div>
      </div>
    )
  }
  const stats: Array<[string, string]> = [
    ['Today', '₹84,200'],
    ['Orders', '312'],
  ]
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2.5">
        {stats.map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <div className="text-[11px] text-navy-300">{k}</div>
            <div className="font-display text-[18px] font-extrabold text-white">{v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="flex items-end justify-between gap-1.5" style={{ height: 72 }}>
          {[40, 62, 48, 78, 56, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-kaaty-600 to-kaaty-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const TRUST_LOGOS = [
  { name: 'KG Reddy College', icon: 'graduation-cap' },
  { name: 'Siddhartha Institution', icon: 'book-open' },
  { name: 'KL University', icon: 'building-2' },
  { name: 'MLR Institution', icon: 'landmark' },
  { name: 'CMR Groups', icon: 'library' },
]

function TrustMarquee() {
  const convexLogos = useQuery(api.trustLogos.get)
  const logos = convexLogos || TRUST_LOGOS
  // Duplicate logos multiple times to ensure the marquee loop fills ultra-wide screens
  const row = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]

  return (
    <section className="border-y border-navy-100 bg-navy-50/50 py-12">
      <Container>
        <p className="text-center text-[13px] font-semibold uppercase tracking-[.18em] text-navy-400">
          Trusted by growing food businesses & premier institutions
        </p>
      </Container>
      <div className="marquee-wrap marquee-mask mt-8 overflow-hidden">
        <div
          className="marquee-track gap-10 pr-10"
          style={{ animationDuration: `${row.length * 3.8}s` }}
        >
          {row.map((l, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-200/60 text-navy-500">
                <Icon name={l.icon} size={19} />
              </span>
              <span className="whitespace-nowrap font-display text-[15px] font-bold text-navy-400">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ECOSYSTEM_CARDS = [
  {
    slug: 'pos',
    name: 'Kaaty POS',
    icon: 'monitor',
    blurb: 'Peak-hour billing with offline reliability and fraud-proof UPI.',
  },
  {
    slug: 'kds',
    name: 'Kaaty KDS',
    icon: 'chef-hat',
    blurb: 'Visual kitchen display that routes every item to the right station.',
  },
  {
    slug: 'mobile-app',
    name: 'Mobile App',
    icon: 'smartphone',
    blurb: 'Your branded ordering app with live tracking and notifications.',
  },
  {
    slug: 'business',
    name: 'Business App',
    icon: 'layout-dashboard',
    blurb: 'Live multi-outlet analytics and settlements in your pocket.',
  },
  {
    slug: 'vendor',
    name: 'Vendor App',
    icon: 'store',
    blurb: 'A full mobile POS for stalls — no expensive hardware needed.',
  },
  {
    slug: 'qr-ordering',
    name: 'QR Ordering',
    icon: 'qr-code',
    blurb: 'Scan-to-order dining that lifts ticket value and clears lines.',
  },
  {
    slug: 'kiosk',
    name: 'Self Kiosk',
    icon: 'scan-line',
    blurb: 'Line-busting self-service terminals that grow average orders.',
  },
  {
    slug: 'token-board',
    name: 'Token Board',
    icon: 'tv',
    blurb: 'Live, kitchen-synced token displays that clear the crowd.',
  },
]

function ProductEcosystem() {
  return (
    <section id="products" className="py-24 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="One connected ecosystem"
          title={
            <>
              Every tool your food business runs on,{' '}
              <span className="gradient-text">in one platform</span>
            </>
          }
          sub="Start with one product and add the rest as you grow — everything shares the same data, in real time."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM_CARDS.map((c) => (
            <a
              key={c.slug}
              href={`#/products/${c.slug}`}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-kaaty-200 hover:shadow-lift"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-kaaty-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                <Icon name={c.icon} size={22} />
              </span>
              <h3 className="relative mt-5 font-display text-[18px] font-bold text-navy">
                {c.name}
              </h3>
              <p className="relative mt-2 flex-1 text-[13.5px] leading-relaxed text-navy-500">
                {c.blurb}
              </p>
              <span className="relative mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600">
                Learn more{' '}
                <Icon
                  name="arrow-right"
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

const WHY_CARDS = [
  {
    icon: 'refresh-cw',
    title: 'Real-Time Operations',
    desc: 'Counter, kitchen, customer apps and back office stay in sync the instant anything changes.',
  },
  {
    icon: 'shield-check',
    title: 'Fraud-Proof Payments',
    desc: 'Real-time UPI ledger confirmations end fake-screenshot scams and revenue leakage for good.',
  },
  {
    icon: 'printer',
    title: 'Pine Labs Integration',
    desc: 'Deep, native integration with Pine Labs smart terminals — billing, cards and receipts in one device.',
  },
  {
    icon: 'store',
    title: 'Multi-Vendor Management',
    desc: 'Centralise dozens of stalls, brands and franchise counters under one connected parent ledger.',
  },
  {
    icon: 'code',
    title: 'Custom Development',
    desc: 'An open feature pipeline — our engineering team builds the workflows your business actually needs.',
  },
  {
    icon: 'cpu',
    title: 'Works On Any Hardware',
    desc: 'Run on any Android or desktop device, with thermal, kitchen and Bluetooth printers supported.',
  },
]

function WhyKaaty() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/40 py-24 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Why Kaaty"
          title={
            <>
              More than a POS — <span className="gradient-text">an operating system</span>
            </>
          }
          sub="The reasons growing food businesses and institutions standardise on Kaaty."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((c, i) => (
            <div
              key={c.title}
              className="reveal group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                <Icon name={c.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-[18px] font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ============================================================
   Sections B + child pages
   ============================================================ */

function IntegrationsSection() {
  const convexIntegrations = useQuery(api.integrations.get)
  const allStatic = Object.entries(INTEGRATION_PAGES).map(([slug, v]) => ({ slug, ...v }))
  const integrationsList = convexIntegrations || allStatic

  // Duplicate items to ensure the marquee fills wide screens
  const row = [
    ...integrationsList,
    ...integrationsList,
    ...integrationsList,
    ...integrationsList,
    ...integrationsList,
    ...integrationsList,
  ]

  return (
    <section id="integrations" className="py-24 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Integrations"
          title={
            <>
              Connect with <span className="gradient-text">everything you need</span>
            </>
          }
          sub="Sync your operations with India's leading payment gateways, hardware and delivery marketplaces."
        />
      </Container>
      <div className="marquee-wrap marquee-mask mt-12 overflow-hidden">
        <div
          className="marquee-track gap-4 pr-4"
          style={{ animationDuration: `${row.length * 2.5}s` }}
        >
          {row.map((it, i) => (
            <a
              key={i}
              href={`#/integrations/${it.slug}`}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-navy-100 bg-white px-5 py-3 shadow-soft transition-all duration-200 hover:border-kaaty-200 hover:shadow-lift"
            >
              <span
                className="grid h-8 w-8 place-items-center rounded-full text-white"
                style={{ background: it.dot }}
              >
                <Icon name={it.icon} size={15} />
              </span>
              <span className="whitespace-nowrap text-[14.5px] font-semibold text-navy-800">
                {it.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      <Container>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {INTEGRATION_GROUPS.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100">
                  <Icon name={g.icon} size={19} />
                </span>
                <h3 className="font-display text-[16px] font-bold text-navy">{g.label}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <a
                    key={s}
                    href={`#/integrations/${s}`}
                    className="rounded-lg bg-navy-50 px-3 py-1.5 text-[13px] font-medium text-navy-700 transition-colors hover:bg-kaaty-50 hover:text-kaaty-700"
                  >
                    {(INTEGRATION_PAGES as Record<string, IntegrationValue>)[s].name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function IndustrySolutions() {
  const all = Object.entries(SOLUTIONS).map(([slug, v]) => ({ slug, ...v }))
  return (
    <section id="solutions" className="border-y border-navy-100 bg-navy-50/40 py-24 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Industry solutions"
          title={
            <>
              Purpose-built for <span className="gradient-text">every food business model</span>
            </>
          }
          sub="From a single espresso bar to a multi-outlet franchise — Kaaty adapts to exactly how you operate."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {all.map((s) => (
            <a
              key={s.slug}
              href={`#/solutions/${s.slug}`}
              className="reveal group flex flex-col items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-kaaty-200 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                <Icon name={s.icon} size={22} />
              </span>
              <div>
                <h3 className="font-display text-[16.5px] font-bold text-navy">{s.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600">
                  Explore{' '}
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

const CUSTOM_ITEMS = [
  { icon: 'globe', t: 'Restaurant Websites' },
  { icon: 'palette', t: 'White-Label Apps' },
  { icon: 'database', t: 'ERP Integrations' },
  { icon: 'file-text', t: 'Custom Reports' },
  { icon: 'code', t: 'API Integrations' },
  { icon: 'wallet', t: 'Campus Wallet Systems' },
  { icon: 'store', t: 'Multi-Vendor Systems' },
]

function CustomSolutions() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[28px] bg-navy-950 p-8 shadow-glow ring-1 ring-kaaty-500/40 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-kaaty-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-kaaty-600/20 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow className="bg-white/10 text-kaaty-300 ring-white/10">
                Custom development
              </Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-.025em] text-white">
                What You Ask. <span className="gradient-text">We Build.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-navy-300">
                Unlike rigid retail software that forces you to adapt, Kaaty offers an open, highly
                customizable feature pipeline. Tell us what your business needs — our engineering
                team builds it.
              </p>
              <div className="mt-8">
                <Button as="a" href="#/demo" size="lg" icon="arrow-right">
                  Book an Engineering Consultation
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CUSTOM_ITEMS.map((e) => (
                <div
                  key={e.t}
                  className="flex items-center gap-3 rounded-xl bg-white/[.04] p-3.5 ring-1 ring-white/10 transition-colors hover:bg-white/[.08]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-kaaty-500/90 text-white">
                    <Icon name={e.icon} size={17} />
                  </span>
                  <span className="text-[13.5px] font-semibold leading-snug text-navy-100">
                    {e.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const PLAN_COLS = [
  {
    key: 'core',
    name: 'Core',
    desc: 'Single outlets moving off paper books.',
    cta: 'Book A Demo',
    popular: false,
  },
  {
    key: 'growth',
    name: 'Growth',
    desc: 'High-volume restaurants, courts & canteens.',
    cta: 'Book A Demo',
    popular: true,
  },
  {
    key: 'scale',
    name: 'Scale',
    desc: 'Multi-outlet franchise chains & campuses.',
    cta: 'Contact Sales',
    popular: false,
  },
]
const PRICE_FEATURES = [
  { name: 'Unlimited Users & Terminals', core: true, growth: true, scale: true },
  { name: 'Cloud + Offline Billing', core: true, growth: true, scale: true },
  { name: 'Inventory Module', core: true, growth: true, scale: true },
  { name: '80+ Live Reports', core: true, growth: true, scale: true },
  { name: 'In-built CRM & Loyalty', core: true, growth: true, scale: true },
  { name: 'Visual KDS Panels', core: false, growth: true, scale: true },
  { name: 'Scan & QR Table Ordering', core: false, growth: true, scale: true },
  { name: 'Anti-Fraud UPI Sync', core: false, growth: true, scale: true },
  { name: 'Smart TV Token Displays', core: false, growth: true, scale: true },
  { name: 'Pine Labs POS Integration', core: false, growth: true, scale: true },
  { name: 'White-Label Customer App', core: false, growth: false, scale: true },
  { name: 'Closed-Loop Student Wallets', core: false, growth: false, scale: true },
  { name: 'On-Demand Feature Engineering', core: false, growth: false, scale: true },
  { name: '24/7 Dedicated Support', core: false, growth: false, scale: true },
]

function Cell({ on }: { on: boolean }) {
  return on ? (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-kaaty-50 text-kaaty-600">
      <Icon name="check" size={14} strokeWidth={3} />
    </span>
  ) : (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-navy-50 text-navy-300">
      <Icon name="x" size={13} strokeWidth={2.5} />
    </span>
  )
}

function Pricing({ compact = false }: { compact?: boolean }) {
  const [showAll, setShowAll] = React.useState(false)
  const rows = showAll ? PRICE_FEATURES : PRICE_FEATURES.slice(0, 9)
  return (
    <section
      id="pricing"
      className={`border-y border-navy-100 bg-navy-50/40 ${compact ? 'pt-[128px] pb-24 sm:pt-[144px]' : 'py-24 sm:py-28'}`}
    >
      <Container>
        <SectionHead
          eyebrow="Plans & pricing"
          title={
            <>
              Pricing that <span className="gradient-text">scales with you</span>
            </>
          }
          sub="A clear breakdown of what each plan offers. Prices are tailored to your outlets — book a demo for an exact, localized quote."
        />
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] border-b border-navy-100">
            <div className="hidden p-6 sm:block">
              <div className="font-display text-[18px] font-extrabold text-navy">Key Features</div>
              <div className="mt-1 text-[12.5px] text-navy-400">What each plan includes</div>
            </div>
            <div className="p-4 text-center sm:hidden">
              <div className="font-display text-[14px] font-bold text-navy">Plans</div>
            </div>
            {PLAN_COLS.map((p) => (
              <div
                key={p.key}
                className={`relative p-4 text-center sm:p-6 ${p.popular ? 'bg-navy-900 text-white' : ''}`}
              >
                {p.popular && (
                  <span className="absolute right-2 top-2 rounded-full bg-kaaty-500 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-white">
                    Popular
                  </span>
                )}
                <div
                  className={`font-display text-[17px] font-extrabold sm:text-[20px] ${p.popular ? 'text-white' : 'text-navy'}`}
                >
                  {p.name}
                </div>
                <div
                  className={`mt-1 hidden text-[11.5px] leading-snug sm:block ${p.popular ? 'text-navy-300' : 'text-navy-400'}`}
                >
                  {p.desc}
                </div>
                <a
                  href="#/demo"
                  className={`mt-3 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-[12px] font-bold transition-all ${
                    p.popular
                      ? 'bg-kaaty-500 text-white hover:bg-kaaty-400'
                      : 'bg-white text-kaaty-700 ring-1 ring-inset ring-kaaty-200 hover:bg-kaaty-50'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          {rows.map((f, i) => (
            <div
              key={f.name}
              className={`grid grid-cols-[1.4fr_repeat(3,1fr)] items-center ${i % 2 ? 'bg-navy-50/40' : ''}`}
            >
              <div className="px-4 py-3.5 text-[12.5px] font-medium text-navy-700 sm:px-6 sm:text-[14px]">
                {f.name}
              </div>
              <div className="px-2 py-3.5">
                <Cell on={f.core} />
              </div>
              <div className="px-2 py-3.5">
                <Cell on={f.growth} />
              </div>
              <div className="px-2 py-3.5">
                <Cell on={f.scale} />
              </div>
            </div>
          ))}
          <button
            onClick={() => setShowAll((s) => !s)}
            className="flex w-full items-center justify-center gap-1.5 border-t border-navy-100 py-4 text-[13.5px] font-semibold text-kaaty-600 transition-colors hover:bg-kaaty-50"
          >
            {showAll ? 'Show less' : 'Show all features'}{' '}
            <Icon name={showAll ? 'chevron-up' : 'chevron-down'} size={16} />
          </button>
        </div>
        <p className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-5 py-3.5 text-center text-[13px] text-navy-500 ring-1 ring-navy-100">
          <span className="font-semibold text-navy-700">Note:</span> Local pricing may vary based on
          your region & currency. Contact us for accurate, localized rates.
        </p>
      </Container>
    </section>
  )
}

function PricingPage() {
  return (
    <>
      <Pricing compact />
      <FAQ />
      <DemoForm />
    </>
  )
}

const STATS = [
  { v: '0 sec', l: 'Counter-to-kitchen sync', icon: 'refresh-cw' },
  { v: '80%', l: 'Less queue wait time', icon: 'timer' },
  { v: '100%', l: 'UPI fraud screenshots blocked', icon: 'shield-check' },
  { v: '15+', l: 'Connected products & modules', icon: 'layers' },
]

function AboutContent() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-.025em] text-navy">
              Built From Real <span className="gradient-text">Campus Problems</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-navy-600">
              <p>
                Kaaty started inside high-volume college campuses to solve real operational stress:
                fake payment screenshots, long lines, and communication bottlenecks between the
                front counter and the kitchen.
              </p>
              <p>
                By building a real-time connected platform, we completely eliminated waiting times
                and secured revenue leakage points.
              </p>
              <p>
                Today, that same robust engine powers restaurants, cafes, multi-vendor food courts,
                hotels and educational institutions across the region — through a single, complete
                food-tech ecosystem.
              </p>
            </div>
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 px-5 py-3.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 text-white">
                <Icon name="building-2" size={17} />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                  A product by
                </div>
                <div className="font-display text-[15px] font-bold text-navy">
                  Benvora Groups Private Limited
                </div>
              </div>
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.l}
                className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-soft ${i % 2 ? 'sm:mt-6' : ''}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100">
                  <Icon name={s.icon} size={20} />
                </span>
                <div className="mt-4 font-display text-[clamp(1.7rem,3vw,2.2rem)] font-extrabold tracking-tight text-navy">
                  {s.v}
                </div>
                <div className="mt-1 text-[13.5px] font-medium leading-snug text-navy-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-2 text-center">
          <Eyebrow className="mx-auto">About Kaaty</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">
            A complete food-tech ecosystem —{' '}
            <span className="gradient-text">not just billing software</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] text-navy-500">
            We connect every part of a food business in real time, from the counter to the kitchen
            to the customer phone.
          </p>
        </Container>
      </section>
      <AboutContent />
      <Testimonials />
      <DemoForm />
    </>
  )
}

const FAQS = [
  {
    q: 'Is Kaaty just a POS, or a full platform?',
    a: 'Kaaty is a complete food-business operating system. POS billing is one module — alongside KDS, mobile ordering, QR, kiosks, token boards, inventory, CRM, vendor management, analytics and custom development.',
  },
  {
    q: 'Can I start with one product and add more later?',
    a: 'Absolutely. Every module works standalone and snaps into the rest of the platform whenever you are ready — no migration, no re-training.',
  },
  {
    q: 'Does it integrate with Pine Labs and payment gateways?',
    a: 'Yes. Kaaty has deep native Pine Labs integration plus Easebuzz, Razorpay, PhonePe, Cashfree and Paytm — with real-time, fraud-proof UPI confirmation.',
  },
  {
    q: 'Will you build custom features for my business?',
    a: 'Yes — this is where Kaaty stands apart. Our engineering team builds bespoke workflows, dashboards, websites, white-label apps and campus integrations tailored to you.',
  },
  {
    q: 'Can Kaaty manage multiple branches from one screen?',
    a: 'Yes. The Business App gives owners live multi-outlet aggregation, automated settlements and master menu management across your entire chain.',
  },
  {
    q: 'How quickly can we go live?',
    a: 'Most outlets go live the same week. We handle menu setup, data import and staff training so there is zero downtime.',
  },
]

function FAQ() {
  const [open, setOpen] = React.useState(0)
  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-24 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="gradient-text">answered</span>
            </>
          }
          sub="Everything you need to know before booking a demo."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                  isOpen ? 'border-kaaty-200 shadow-soft' : 'border-navy-100'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-display text-[15.5px] font-bold text-navy sm:text-[17px]">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-kaaty-500 text-white' : 'bg-navy-50 text-navy-600'}`}
                  >
                    <Icon name={isOpen ? 'minus' : 'plus'} size={17} />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-navy-500 sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function FinalCTA() {
  const cols = [
    {
      h: 'Products',
      links: [
        ['Kaaty POS', '#/products/pos'],
        ['Kaaty KDS', '#/products/kds'],
        ['Mobile App', '#/products/mobile-app'],
        ['Business App', '#/products/business'],
        ['QR Ordering', '#/products/qr-ordering'],
        ['Self Kiosk', '#/products/kiosk'],
      ],
    },
    {
      h: 'Solutions',
      links: [
        ['Restaurants', '#/solutions/restaurants'],
        ['Cafes', '#/solutions/cafes'],
        ['College Canteens', '#/solutions/college-canteens'],
        ['Cloud Kitchens', '#/solutions/cloud-kitchens'],
        ['Hotels', '#/solutions/hotels'],
      ],
    },
    {
      h: 'Company',
      links: [
        ['About Us', '#/about'],
        ['Pricing', '#/pricing'],
        ['Resources', '#/resources'],
        ['Book a Demo', '#/demo'],
      ],
    },
    {
      h: 'Integrations',
      links: [
        ['Pine Labs', '#/integrations/pine-labs'],
        ['Razorpay', '#/integrations/razorpay'],
        ['Swiggy', '#/integrations/swiggy'],
        ['Zomato', '#/integrations/zomato'],
        ['ONDC', '#/integrations/ondc'],
      ],
    },
  ]
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(255,107,0,.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
      <Container className="relative">
        <div className="border-b border-white/10 py-20 text-center sm:py-24">
          <Eyebrow className="mx-auto bg-white/10 text-kaaty-300 ring-white/10">
            Get started
          </Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em]">
            Ready To Modernize Your <span className="gradient-text">Food Business?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-navy-300">
            Book your free custom demo today to minimize order friction, secure your revenue, and
            transform customer satisfaction.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href="#/demo" size="lg" icon="arrow-right">
              Book Free Demo
            </Button>
            <Button as="a" href="#/demo" size="lg" variant="ghostLight" icon="phone">
              Talk To Sales Team
            </Button>
          </div>
        </div>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-4 text-[14px] leading-relaxed text-navy-400">
              The complete operating system powering restaurants, cafes, food courts, cloud
              kitchens, hotels and college canteens.
            </p>
            <div className="mt-6 space-y-2.5 text-[13.5px] text-navy-300">
              <a
                href="mailto:kaatybusinessindia@gmail.com"
                className="flex items-center gap-2.5 hover:text-white"
              >
                <Icon name="mail" size={15} className="text-kaaty-400" />{' '}
                kaatybusinessindia@gmail.com
              </a>
              <a href="tel:+918374138823" className="flex items-center gap-2.5 hover:text-white">
                <Icon name="phone" size={15} className="text-kaaty-400" /> +91 83741 38823
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                ['linkedin', 'https://www.linkedin.com/company/kaaty/posts/?feedView=all'],
                ['instagram', 'https://www.instagram.com/kaaty.india/?__pwa=1#'],
                ['twitter', '#'],
              ].map(([ic, h]) => (
                <a
                  key={ic}
                  href={h}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-navy-200 transition-colors hover:bg-kaaty-500 hover:text-white"
                >
                  <Icon name={ic} size={16} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="font-display text-[13px] font-bold uppercase tracking-wider text-navy-300">
                {c.h}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([l, href]) => (
                  <li key={l}>
                    <a
                      href={href}
                      className="text-[14px] text-navy-400 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-navy-400">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-navy-200">Benvora Groups Private Limited.</span> All
            rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[13px] text-navy-400">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function LogoBand({ heading, logos }: LogoBandProps) {
  return (
    <section className="py-14">
      <Container>
        {heading && (
          <p className="mb-9 text-center text-[13px] font-semibold uppercase tracking-[.18em] text-navy-400">
            {heading}
          </p>
        )}
        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l.name}
              className="group flex items-center justify-center gap-2.5 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-100 text-navy-500 transition-colors group-hover:bg-kaaty-500 group-hover:text-white">
                <Icon name={l.icon} size={17} />
              </span>
              <span className="font-display text-[13.5px] font-bold leading-tight text-navy-400 transition-colors group-hover:text-navy">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function HeroVisual({ kind = 'pos' }: HeroVisualProps) {
  return (
    <div className="relative mx-auto flex min-h-[380px] max-w-[460px] items-center justify-center sm:min-h-[420px]">
      <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-br from-kaaty-100/70 to-kaaty-50/30 blur-2xl" />
      <div className="relative z-10 w-full">
        <MockPanel kind={kind} />
      </div>
      <div className="absolute -right-3 -top-4 z-20 animate-floaty rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lift">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <Icon name="trending-up" size={16} />
          </span>
          <div>
            <div className="font-display text-[14px] font-extrabold leading-none text-navy">
              +24%
            </div>
            <div className="text-[10.5px] text-navy-400">avg. ticket</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-3 z-20 animate-floaty2 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lift">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-kaaty-50 text-kaaty-600">
            <Icon name="zap" size={16} />
          </span>
          <div>
            <div className="font-display text-[14px] font-extrabold leading-none text-navy">
              Real-time
            </div>
            <div className="text-[10.5px] text-navy-400">counter ↔ kitchen</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SubHero({ eyebrow, title, sub, cta = 'Take a Free Demo', visual = 'pos' }: SubHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[120px] sm:pt-[136px]">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
      <div className="pointer-events-none absolute -top-24 right-[-8%] h-[460px] w-[460px] rounded-full bg-kaaty-500/10 blur-3xl" />
      <Container className="relative pb-16 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100">
              <span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />
              {eyebrow}
            </span>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-.03em] text-navy">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-navy-500">
              {sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#/demo" size="lg" icon="arrow-right">
                {cta}
              </Button>
              <Button as="a" href="#/pricing" size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
          <div>
            <HeroVisual kind={visual} />
          </div>
        </div>
      </Container>
    </section>
  )
}

function FeatureRows({ rows }: FeatureRowsProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="space-y-20 sm:space-y-24">
          {rows.map((r, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={r.title}
                className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={flip ? 'lg:order-2' : ''}>
                  <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold leading-[1.08] tracking-[-.02em] text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-navy-500">{r.desc}</p>
                  <ul className="mt-6 space-y-3.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-kaaty-50 text-kaaty-600">
                          <Icon name="check" size={14} strokeWidth={3} />
                        </span>
                        <span className="text-[14.5px] leading-relaxed text-navy-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={flip ? 'lg:order-1' : ''}>
                  <MockPanel kind={r.mock} />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const TESTIMONIALS = [
  {
    brand: "Sam's Pizza",
    icon: 'pizza',
    quote:
      'Kaaty has been our POS across 90+ outlets for over two years. For a large chain like us, it is the single data bridge between every outlet and the owner. Kudos to the team!',
    name: 'Jolly Christian',
    role: 'General Manager',
  },
  {
    brand: 'United Farmers',
    icon: 'wheat',
    quote:
      'Kaaty helps me manage inventory levels and food costs. I track sales and expenses in real time, which helps me make informed purchasing decisions and reduce waste across the board.',
    name: 'Jaipratap Singh',
    role: 'Managing Director',
  },
]

function Testimonials() {
  const convexTestimonials = useQuery(api.testimonials.get)
  const testimonialsList = convexTestimonials || TESTIMONIALS

  React.useEffect(() => {
    // Reveal elements locally when data loads
    const t = setTimeout(() => {
      document.querySelectorAll('#testimonials-grid .reveal:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in')
        // Also observe for scrolling
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('in')
                io.disconnect()
              }
            })
          },
          { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        )
        io.observe(el)
      })
    }, 100)
    return () => clearTimeout(t)
  }, [testimonialsList])

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <h2 className="text-center font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold tracking-[-.02em] text-navy">
          Real Restaurants · Real Results · <span className="gradient-text">Real Stories</span>
        </h2>
        <div id="testimonials-grid" className="mx-auto mt-14 flex flex-wrap justify-center gap-6">
          {testimonialsList.map((t, i) => (
            <figure
              key={t.name || i}
              className="reveal w-full max-w-[480px] rounded-2xl border border-navy-100 bg-white p-7 shadow-soft sm:p-8"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100">
                  <Icon name={t.icon} size={20} />
                </span>
                <span className="font-display text-[16px] font-extrabold text-navy">{t.brand}</span>
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-navy-600">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-100 text-navy-500">
                  <Icon name="user" size={20} />
                </span>
                <span>
                  <span className="block font-display text-[14.5px] font-bold text-navy">
                    {t.name}
                  </span>
                  <span className="block text-[13px] text-navy-400">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CountryFlag({ iso, country }: { iso: string; country: string }) {
  return (
    <img
      src={`https://flagcdn.com/w20/${iso.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${iso.toLowerCase()}.png 2x`}
      width="20"
      height="15"
      alt={country}
      className="shrink-0 rounded-[2px] object-cover shadow-sm"
      loading="lazy"
    />
  )
}

const COUNTRY_CODES = [
  { iso: 'IN', code: '+91', country: 'India', flag: '🇮🇳', digits: [10, 11] },
  { iso: 'AF', code: '+93', country: 'Afghanistan', flag: '🇦🇫', digits: [9] },
  { iso: 'AL', code: '+355', country: 'Albania', flag: '🇦🇱', digits: [9] },
  { iso: 'DZ', code: '+213', country: 'Algeria', flag: '🇩🇿', digits: [9] },
  { iso: 'AD', code: '+376', country: 'Andorra', flag: '🇦🇩', digits: [6] },
  { iso: 'AO', code: '+244', country: 'Angola', flag: '🇦🇴', digits: [9] },
  { iso: 'AR', code: '+54', country: 'Argentina', flag: '🇦🇷', digits: [10] },
  { iso: 'AM', code: '+374', country: 'Armenia', flag: '🇦🇲', digits: [8] },
  { iso: 'AU', code: '+61', country: 'Australia', flag: '🇦🇺', digits: [9] },
  { iso: 'AT', code: '+43', country: 'Austria', flag: '🇦🇹', digits: [10, 11] },
  { iso: 'AZ', code: '+994', country: 'Azerbaijan', flag: '🇦🇿', digits: [9] },
  { iso: 'BH', code: '+973', country: 'Bahrain', flag: '🇧🇭', digits: [8] },
  { iso: 'BD', code: '+880', country: 'Bangladesh', flag: '🇧🇩', digits: [10] },
  { iso: 'BY', code: '+375', country: 'Belarus', flag: '🇧🇾', digits: [9] },
  { iso: 'BE', code: '+32', country: 'Belgium', flag: '🇧🇪', digits: [9] },
  { iso: 'BZ', code: '+501', country: 'Belize', flag: '🇧🇿', digits: [7] },
  { iso: 'BJ', code: '+229', country: 'Benin', flag: '🇧🇯', digits: [8] },
  { iso: 'BT', code: '+975', country: 'Bhutan', flag: '🇧🇹', digits: [8] },
  { iso: 'BO', code: '+591', country: 'Bolivia', flag: '🇧🇴', digits: [8] },
  { iso: 'BA', code: '+387', country: 'Bosnia & Herzegovina', flag: '🇧🇦', digits: [8] },
  { iso: 'BW', code: '+267', country: 'Botswana', flag: '🇧🇼', digits: [8] },
  { iso: 'BR', code: '+55', country: 'Brazil', flag: '🇧🇷', digits: [10, 11] },
  { iso: 'BN', code: '+673', country: 'Brunei', flag: '🇧🇳', digits: [7] },
  { iso: 'BG', code: '+359', country: 'Bulgaria', flag: '🇧🇬', digits: [9] },
  { iso: 'KH', code: '+855', country: 'Cambodia', flag: '🇰🇭', digits: [8, 9] },
  { iso: 'CM', code: '+237', country: 'Cameroon', flag: '🇨🇲', digits: [9] },
  { iso: 'CA', code: '+1', country: 'Canada', flag: '🇨🇦', digits: [10] },
  { iso: 'CL', code: '+56', country: 'Chile', flag: '🇨🇱', digits: [9] },
  { iso: 'CN', code: '+86', country: 'China', flag: '🇨🇳', digits: [11] },
  { iso: 'CO', code: '+57', country: 'Colombia', flag: '🇨🇴', digits: [10] },
  { iso: 'CR', code: '+506', country: 'Costa Rica', flag: '🇨🇷', digits: [8] },
  { iso: 'HR', code: '+385', country: 'Croatia', flag: '🇭🇷', digits: [9] },
  { iso: 'CU', code: '+53', country: 'Cuba', flag: '🇨🇺', digits: [8] },
  { iso: 'CY', code: '+357', country: 'Cyprus', flag: '🇨🇾', digits: [8] },
  { iso: 'CZ', code: '+420', country: 'Czech Republic', flag: '🇨🇿', digits: [9] },
  { iso: 'DK', code: '+45', country: 'Denmark', flag: '🇩🇰', digits: [8] },
  { iso: 'EC', code: '+593', country: 'Ecuador', flag: '🇪🇨', digits: [9] },
  { iso: 'EG', code: '+20', country: 'Egypt', flag: '🇪🇬', digits: [10] },
  { iso: 'SV', code: '+503', country: 'El Salvador', flag: '🇸🇻', digits: [8] },
  { iso: 'EE', code: '+372', country: 'Estonia', flag: '🇪🇪', digits: [7, 8] },
  { iso: 'ET', code: '+251', country: 'Ethiopia', flag: '🇪🇹', digits: [9] },
  { iso: 'FJ', code: '+679', country: 'Fiji', flag: '🇫🇯', digits: [7] },
  { iso: 'FI', code: '+358', country: 'Finland', flag: '🇫🇮', digits: [9, 10] },
  { iso: 'FR', code: '+33', country: 'France', flag: '🇫🇷', digits: [9] },
  { iso: 'GE', code: '+995', country: 'Georgia', flag: '🇬🇪', digits: [9] },
  { iso: 'DE', code: '+49', country: 'Germany', flag: '🇩🇪', digits: [10, 11] },
  { iso: 'GH', code: '+233', country: 'Ghana', flag: '🇬🇭', digits: [9] },
  { iso: 'GR', code: '+30', country: 'Greece', flag: '🇬🇷', digits: [10] },
  { iso: 'GT', code: '+502', country: 'Guatemala', flag: '🇬🇹', digits: [8] },
  { iso: 'HN', code: '+504', country: 'Honduras', flag: '🇭🇳', digits: [8] },
  { iso: 'HK', code: '+852', country: 'Hong Kong', flag: '🇭🇰', digits: [8] },
  { iso: 'HU', code: '+36', country: 'Hungary', flag: '🇭🇺', digits: [9] },
  { iso: 'IS', code: '+354', country: 'Iceland', flag: '🇮🇸', digits: [7] },
  { iso: 'ID', code: '+62', country: 'Indonesia', flag: '🇮🇩', digits: [10, 11] },
  { iso: 'IR', code: '+98', country: 'Iran', flag: '🇮🇷', digits: [10] },
  { iso: 'IQ', code: '+964', country: 'Iraq', flag: '🇮🇶', digits: [10] },
  { iso: 'IE', code: '+353', country: 'Ireland', flag: '🇮🇪', digits: [9] },
  { iso: 'IL', code: '+972', country: 'Israel', flag: '🇮🇱', digits: [9] },
  { iso: 'IT', code: '+39', country: 'Italy', flag: '🇮🇹', digits: [10] },
  { iso: 'JM', code: '+1876', country: 'Jamaica', flag: '🇯🇲', digits: [7] },
  { iso: 'JP', code: '+81', country: 'Japan', flag: '🇯🇵', digits: [10, 11] },
  { iso: 'JO', code: '+962', country: 'Jordan', flag: '🇯🇴', digits: [9] },
  { iso: 'KZ', code: '+7', country: 'Kazakhstan', flag: '🇰🇿', digits: [10] },
  { iso: 'KE', code: '+254', country: 'Kenya', flag: '🇰🇪', digits: [9] },
  { iso: 'KW', code: '+965', country: 'Kuwait', flag: '🇰🇼', digits: [8] },
  { iso: 'KG', code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬', digits: [9] },
  { iso: 'LA', code: '+856', country: 'Laos', flag: '🇱🇦', digits: [9, 10] },
  { iso: 'LV', code: '+371', country: 'Latvia', flag: '🇱🇻', digits: [8] },
  { iso: 'LB', code: '+961', country: 'Lebanon', flag: '🇱🇧', digits: [7, 8] },
  { iso: 'LY', code: '+218', country: 'Libya', flag: '🇱🇾', digits: [9] },
  { iso: 'LT', code: '+370', country: 'Lithuania', flag: '🇱🇹', digits: [8] },
  { iso: 'LU', code: '+352', country: 'Luxembourg', flag: '🇱🇺', digits: [9] },
  { iso: 'MO', code: '+853', country: 'Macao', flag: '🇲🇴', digits: [8] },
  { iso: 'MY', code: '+60', country: 'Malaysia', flag: '🇲🇾', digits: [9, 10] },
  { iso: 'MV', code: '+960', country: 'Maldives', flag: '🇲🇻', digits: [7] },
  { iso: 'MT', code: '+356', country: 'Malta', flag: '🇲🇹', digits: [8] },
  { iso: 'MX', code: '+52', country: 'Mexico', flag: '🇲🇽', digits: [10] },
  { iso: 'MD', code: '+373', country: 'Moldova', flag: '🇲🇩', digits: [8] },
  { iso: 'MC', code: '+377', country: 'Monaco', flag: '🇲🇨', digits: [8, 9] },
  { iso: 'MN', code: '+976', country: 'Mongolia', flag: '🇲🇳', digits: [8] },
  { iso: 'ME', code: '+382', country: 'Montenegro', flag: '🇲🇪', digits: [8] },
  { iso: 'MA', code: '+212', country: 'Morocco', flag: '🇲🇦', digits: [9] },
  { iso: 'MZ', code: '+258', country: 'Mozambique', flag: '🇲🇿', digits: [9] },
  { iso: 'MM', code: '+95', country: 'Myanmar', flag: '🇲🇲', digits: [8, 9] },
  { iso: 'NA', code: '+264', country: 'Namibia', flag: '🇳🇦', digits: [9] },
  { iso: 'NP', code: '+977', country: 'Nepal', flag: '🇳🇵', digits: [10] },
  { iso: 'NL', code: '+31', country: 'Netherlands', flag: '🇳🇱', digits: [9] },
  { iso: 'NZ', code: '+64', country: 'New Zealand', flag: '🇳🇿', digits: [8, 9] },
  { iso: 'NI', code: '+505', country: 'Nicaragua', flag: '🇳🇮', digits: [8] },
  { iso: 'NG', code: '+234', country: 'Nigeria', flag: '🇳🇬', digits: [10] },
  { iso: 'MK', code: '+389', country: 'North Macedonia', flag: '🇲🇰', digits: [8] },
  { iso: 'NO', code: '+47', country: 'Norway', flag: '🇳🇴', digits: [8] },
  { iso: 'OM', code: '+968', country: 'Oman', flag: '🇴🇲', digits: [8] },
  { iso: 'PK', code: '+92', country: 'Pakistan', flag: '🇵🇰', digits: [10] },
  { iso: 'PS', code: '+970', country: 'Palestine', flag: '🇵🇸', digits: [9] },
  { iso: 'PA', code: '+507', country: 'Panama', flag: '🇵🇦', digits: [8] },
  { iso: 'PG', code: '+675', country: 'Papua New Guinea', flag: '🇵🇬', digits: [8] },
  { iso: 'PY', code: '+595', country: 'Paraguay', flag: '🇵🇾', digits: [9] },
  { iso: 'PE', code: '+51', country: 'Peru', flag: '🇵🇪', digits: [9] },
  { iso: 'PH', code: '+63', country: 'Philippines', flag: '🇵🇭', digits: [10] },
  { iso: 'PL', code: '+48', country: 'Poland', flag: '🇵🇱', digits: [9] },
  { iso: 'PT', code: '+351', country: 'Portugal', flag: '🇵🇹', digits: [9] },
  { iso: 'QA', code: '+974', country: 'Qatar', flag: '🇶🇦', digits: [8] },
  { iso: 'RO', code: '+40', country: 'Romania', flag: '🇷🇴', digits: [9] },
  { iso: 'RU', code: '+7', country: 'Russia', flag: '🇷🇺', digits: [10] },
  { iso: 'RW', code: '+250', country: 'Rwanda', flag: '🇷🇼', digits: [9] },
  { iso: 'SA', code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', digits: [9] },
  { iso: 'SN', code: '+221', country: 'Senegal', flag: '🇸🇳', digits: [9] },
  { iso: 'RS', code: '+381', country: 'Serbia', flag: '🇷🇸', digits: [9] },
  { iso: 'SG', code: '+65', country: 'Singapore', flag: '🇸🇬', digits: [8] },
  { iso: 'SK', code: '+421', country: 'Slovakia', flag: '🇸🇰', digits: [9] },
  { iso: 'SI', code: '+386', country: 'Slovenia', flag: '🇸🇮', digits: [8] },
  { iso: 'ZA', code: '+27', country: 'South Africa', flag: '🇿🇦', digits: [9] },
  { iso: 'KR', code: '+82', country: 'South Korea', flag: '🇰🇷', digits: [9, 10] },
  { iso: 'ES', code: '+34', country: 'Spain', flag: '🇪🇸', digits: [9] },
  { iso: 'LK', code: '+94', country: 'Sri Lanka', flag: '🇱🇰', digits: [9] },
  { iso: 'SD', code: '+249', country: 'Sudan', flag: '🇸🇩', digits: [9] },
  { iso: 'SE', code: '+46', country: 'Sweden', flag: '🇸🇪', digits: [9] },
  { iso: 'CH', code: '+41', country: 'Switzerland', flag: '🇨🇭', digits: [9] },
  { iso: 'TW', code: '+886', country: 'Taiwan', flag: '🇹🇼', digits: [9] },
  { iso: 'TJ', code: '+992', country: 'Tajikistan', flag: '🇹🇯', digits: [9] },
  { iso: 'TZ', code: '+255', country: 'Tanzania', flag: '🇹🇿', digits: [9] },
  { iso: 'TH', code: '+66', country: 'Thailand', flag: '🇹🇭', digits: [9] },
  { iso: 'TN', code: '+216', country: 'Tunisia', flag: '🇹🇳', digits: [8] },
  { iso: 'TR', code: '+90', country: 'Turkey', flag: '🇹🇷', digits: [10] },
  { iso: 'TM', code: '+993', country: 'Turkmenistan', flag: '🇹🇲', digits: [8] },
  { iso: 'AE', code: '+971', country: 'UAE', flag: '🇦🇪', digits: [9] },
  { iso: 'UG', code: '+256', country: 'Uganda', flag: '🇺🇬', digits: [9] },
  { iso: 'GB', code: '+44', country: 'UK', flag: '🇬🇧', digits: [10, 11] },
  { iso: 'UA', code: '+380', country: 'Ukraine', flag: '🇺🇦', digits: [9] },
  { iso: 'UY', code: '+598', country: 'Uruguay', flag: '🇺🇾', digits: [8] },
  { iso: 'US', code: '+1', country: 'USA', flag: '🇺🇸', digits: [10] },
  { iso: 'UZ', code: '+998', country: 'Uzbekistan', flag: '🇺🇿', digits: [9] },
  { iso: 'VE', code: '+58', country: 'Venezuela', flag: '🇻🇪', digits: [10] },
  { iso: 'VN', code: '+84', country: 'Vietnam', flag: '🇻🇳', digits: [9, 10] },
  { iso: 'YE', code: '+967', country: 'Yemen', flag: '🇾🇪', digits: [9] },
  { iso: 'ZM', code: '+260', country: 'Zambia', flag: '🇿🇲', digits: [9] },
  { iso: 'ZW', code: '+263', country: 'Zimbabwe', flag: '🇿🇼', digits: [9] },
]

type DemoFormData = {
  name: string
  business: string
  phone: string
  email: string
  type: string
  message: string
}

function DemoForm() {
  const submitToConvex = useMutation(api.demoRequests.submitDemoRequest)
  const [countryCode, setCountryCode] = React.useState('+91')
  const [countryDropdownOpen, setCountryDropdownOpen] = React.useState(false)
  const [countrySearch, setCountrySearch] = React.useState('')
  const countryPickerRef = React.useRef<HTMLDivElement>(null)

  const [btypeDropdownOpen, setBtypeDropdownOpen] = React.useState(false)
  const btypePickerRef = React.useRef<HTMLDivElement>(null)

  const selectedCountry = React.useMemo(
    () => COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0],
    [countryCode],
  )

  const filteredCountries = React.useMemo(() => {
    const q = countrySearch.trim().toLowerCase()
    if (!q) return COUNTRY_CODES
    return COUNTRY_CODES.filter(
      (c) =>
        c.country.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q),
    )
  }, [countrySearch])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryPickerRef.current && !countryPickerRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false)
        setCountrySearch('')
      }
      if (btypePickerRef.current && !btypePickerRef.current.contains(e.target as Node)) {
        setBtypeDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const [form, setForm] = React.useState<DemoFormData>({
    name: '',
    business: '',
    phone: '',
    email: '',
    type: '',
    message: '',
  })
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)
  const [err, setErr] = React.useState<Partial<Record<keyof DemoFormData, number>>>({})
  const set =
    (k: keyof DemoFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const er: Partial<Record<keyof DemoFormData, number>> = {}
    if (!form.name.trim()) er.name = 1
    if (!form.business.trim()) er.business = 1
    // Per-country phone digit validation
    const digits = form.phone.replace(/\D/g, '')
    const phoneOk =
      countryCode === '+91'
        ? digits.length === (digits.startsWith('0') ? 11 : 10)
        : (() => {
            const selected = COUNTRY_CODES.find((c) => c.code === countryCode)
            const validLengths = selected ? selected.digits : null
            return validLengths
              ? validLengths.includes(digits.length)
              : digits.length >= 6 && digits.length <= 15
          })()
    if (!phoneOk) er.phone = 1
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 1
    if (!form.type) er.type = 1
    setErr(er)
    if (Object.keys(er).length > 0) return
    setLoading(true)
    setSubmitError(null)
    try {
      await submitToConvex({
        name: form.name.trim(),
        business: form.business.trim(),
        phone: `${countryCode} ${form.phone.trim()}`,
        email: form.email.trim(),
        type: form.type,
        message: form.message.trim() || undefined,
      })
      setSent(true)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const field = (k: keyof DemoFormData, label: string, type = 'text', ph = '') => (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">
        {label} <span className="text-kaaty-500">*</span>
      </span>
      <input
        type={type}
        value={form[k]}
        onChange={set(k)}
        placeholder={ph}
        className={`h-11 w-full rounded-xl border bg-navy-50/50 px-3.5 text-[14px] text-navy outline-none transition-all placeholder:text-navy-300 focus:border-kaaty-400 focus:bg-white focus:ring-4 focus:ring-kaaty-500/10 ${
          err[k] ? 'border-red-300 ring-2 ring-red-100' : 'border-navy-200'
        }`}
      />
    </label>
  )
  const BTYPES = [
    'Restaurant',
    'Cafe / QSR',
    'Food Court',
    'Cloud Kitchen',
    'College Canteen',
    'Hotel',
    'Bakery',
    'Ice Cream Parlour',
    'Other',
  ]
  return (
    <section id="demo-form" className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold tracking-[-.025em] text-navy">
              Schedule a <span className="gradient-text">free demo</span>
            </h2>
            <p className="mt-3 text-[15.5px] text-navy-500">
              Get in touch with our team to clarify your queries and see Kaaty in action for your
              outlet.
            </p>
            {sent ? (
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <Icon name="check" size={24} strokeWidth={3} />
                </span>
                <div>
                  <div className="font-display text-[17px] font-bold text-navy">
                    Your request is confirmed, {form.name.split(' ')[0]}!
                  </div>
                  <div className="text-[14px] text-navy-600">
                    Our team will reach out shortly to schedule your demo.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  {field('name', 'Name', 'text', 'Your full name')}
                  {field('business', 'Business Name', 'text', 'Outlet / brand name')}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Phone with custom country code dropdown + search */}
                  <label className="block">
                    <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">
                      Phone <span className="text-kaaty-500">*</span>
                    </span>
                    <div className="relative" ref={countryPickerRef}>
                      <div
                        className={`flex h-11 w-full overflow-hidden rounded-xl border bg-navy-50/50 transition-all focus-within:border-kaaty-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-kaaty-500/10 ${
                          err.phone ? 'border-red-300 ring-2 ring-red-100' : 'border-navy-200'
                        }`}
                      >
                        {/* Custom Dropdown Trigger Button */}
                        <button
                          type="button"
                          onClick={() => {
                            setCountryDropdownOpen((v) => !v)
                            setCountrySearch('')
                          }}
                          className="flex h-full shrink-0 items-center gap-1.5 border-r border-navy-200 bg-transparent px-3 text-[13.5px] font-bold text-navy outline-none hover:bg-navy-100/40 transition-colors"
                        >
                          {selectedCountry && (
                            <CountryFlag
                              iso={selectedCountry.iso}
                              country={selectedCountry.country}
                            />
                          )}
                          <span>
                            {selectedCountry
                              ? `${selectedCountry.iso} ${selectedCountry.code}`
                              : countryCode}
                          </span>
                          <Icon
                            name="chevron-down"
                            size={14}
                            className={`shrink-0 text-navy-500 transition-transform duration-200 ${
                              countryDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/\D/g, '')
                            let maxDigits = 10
                            if (countryCode === '+91') {
                              maxDigits = digitsOnly.startsWith('0') ? 11 : 10
                            } else {
                              const sel = COUNTRY_CODES.find((c) => c.code === countryCode)
                              maxDigits = sel ? Math.max(...sel.digits) : 15
                            }
                            setForm((f) => ({ ...f, phone: digitsOnly.slice(0, maxDigits) }))
                            if (err.phone) setErr((er) => ({ ...er, phone: undefined }))
                          }}
                          placeholder={(() => {
                            if (countryCode === '+91') {
                              return form.phone.startsWith('0')
                                ? '11 digits (landline)'
                                : '10 digits (mobile)'
                            }
                            const sel = COUNTRY_CODES.find((c) => c.code === countryCode)
                            return sel ? `${sel.digits.join(' or ')} digits` : 'Phone number'
                          })()}
                          className="h-full min-w-0 flex-1 bg-transparent px-3 text-[14px] text-navy outline-none placeholder:text-navy-300"
                        />
                      </div>

                      {/* Dropdown Popup Menu with Search */}
                      {countryDropdownOpen && (
                        <div className="absolute left-0 top-full z-50 mt-1.5 flex w-80 max-w-[92vw] flex-col overflow-hidden rounded-2xl border border-navy-200 bg-white p-2 shadow-2xl ring-1 ring-black/5">
                          {/* Search Input */}
                          <div className="relative mb-2 px-0.5">
                            <Icon
                              name="search"
                              size={15}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
                            />
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code..."
                              autoFocus
                              className="h-9 w-full rounded-xl border border-navy-200 bg-navy-50/70 pl-8 pr-3 text-[13px] text-navy outline-none placeholder:text-navy-400 focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-900/5"
                            />
                          </div>

                          {/* Country List - fits ~10 items */}
                          <div className="max-h-[380px] overflow-y-auto space-y-0.5 pr-0.5">
                            {filteredCountries.length === 0 ? (
                              <div className="py-5 text-center text-[13px] text-navy-400">
                                No country found
                              </div>
                            ) : (
                              filteredCountries.map((c) => {
                                const isSelected =
                                  c.code === countryCode && c.iso === selectedCountry?.iso
                                return (
                                  <button
                                    key={c.iso + c.code}
                                    type="button"
                                    onClick={() => {
                                      setCountryCode(c.code)
                                      setCountryDropdownOpen(false)
                                      setCountrySearch('')
                                      if (err.phone) setErr((er) => ({ ...er, phone: undefined }))
                                    }}
                                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] transition-colors ${
                                      isSelected
                                        ? 'bg-navy-900 font-bold text-white shadow-sm'
                                        : 'hover:bg-navy-50 text-navy-700'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <CountryFlag iso={c.iso} country={c.country} />
                                      <span
                                        className={`font-semibold shrink-0 ${isSelected ? 'text-white' : 'text-navy-800'}`}
                                      >
                                        {c.iso} {c.code}
                                      </span>
                                      <span
                                        className={`truncate text-[12px] ${isSelected ? 'text-navy-300' : 'text-navy-400'}`}
                                      >
                                        — {c.country}
                                      </span>
                                    </div>
                                    {isSelected && (
                                      <Icon
                                        name="check"
                                        size={15}
                                        strokeWidth={2.5}
                                        className="text-emerald-400 shrink-0 ml-1.5"
                                      />
                                    )}
                                  </button>
                                )
                              })
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {err.phone ? (
                      <span className="mt-1 block text-[12px] text-red-500">
                        {(() => {
                          if (countryCode === '+91') {
                            return form.phone.startsWith('0')
                              ? 'Enter a valid 11-digit landline number'
                              : 'Enter a valid 10-digit mobile number'
                          }
                          const sel = COUNTRY_CODES.find((c) => c.code === countryCode)
                          return sel
                            ? `Enter a valid ${sel.country} number (${sel.digits.join(' or ')} digits)`
                            : 'Enter a valid phone number'
                        })()}
                      </span>
                    ) : null}
                  </label>
                  {field('email', 'Email', 'email', 'you@business.com')}
                </div>
                {/* Custom Business Type Dropdown */}
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">
                    Business Type <span className="text-kaaty-500">*</span>
                  </span>
                  <div className="relative" ref={btypePickerRef}>
                    <button
                      type="button"
                      onClick={() => setBtypeDropdownOpen((v) => !v)}
                      className={`h-11 w-full rounded-xl border bg-navy-50/50 px-3.5 text-[14px] text-left outline-none transition-all flex items-center justify-between cursor-pointer focus:border-kaaty-400 focus:bg-white focus:ring-4 focus:ring-kaaty-500/10 ${
                        err.type ? 'border-red-300 ring-2 ring-red-100' : 'border-navy-200'
                      }`}
                    >
                      <span className={form.type ? 'text-navy font-medium' : 'text-navy-300'}>
                        {form.type || 'Select your business type…'}
                      </span>
                      <Icon
                        name="chevron-down"
                        size={16}
                        className={`shrink-0 text-navy-500 transition-transform duration-200 ${
                          btypeDropdownOpen ? 'rotate-180 text-kaaty-500' : ''
                        }`}
                      />
                    </button>

                    {btypeDropdownOpen && (
                      <div className="absolute left-0 top-full z-50 mt-1.5 w-full overflow-hidden rounded-2xl border border-navy-200 bg-white p-1.5 shadow-2xl ring-1 ring-black/5">
                        <div className="max-h-60 overflow-y-auto space-y-0.5 pr-0.5">
                          {BTYPES.map((t) => {
                            const isSelected = form.type === t
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => {
                                  setForm((f) => ({ ...f, type: t }))
                                  setBtypeDropdownOpen(false)
                                  if (err.type) setErr((er) => ({ ...er, type: undefined }))
                                }}
                                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-[13.5px] transition-colors ${
                                  isSelected
                                    ? 'bg-navy-900 font-bold text-white shadow-sm'
                                    : 'hover:bg-navy-50 text-navy-700 font-medium'
                                }`}
                              >
                                <span>{t}</span>
                                {isSelected && (
                                  <Icon
                                    name="check"
                                    size={15}
                                    strokeWidth={2.5}
                                    className="text-emerald-400 shrink-0 ml-2"
                                  />
                                )}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    rows={3}
                    placeholder="Tell us a little about what you need…"
                    className="w-full rounded-xl border border-navy-200 bg-navy-50/50 px-3.5 py-2.5 text-[14px] text-navy outline-none transition-all placeholder:text-navy-300 focus:border-kaaty-400 focus:bg-white focus:ring-4 focus:ring-kaaty-500/10"
                  />
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 text-[12.5px] text-navy-400">
                  <span className="grid h-5 w-5 place-items-center rounded bg-navy-100">
                    <Icon name="shield-check" size={13} className="text-navy-500" />
                  </span>
                  Protected — we never share your details.
                </div>
                {submitError && <p className="text-[13px] text-red-500">{submitError}</p>}
                <Button
                  as="button"
                  type="submit"
                  size="lg"
                  icon={loading ? undefined : 'arrow-right'}
                  className={loading ? 'opacity-70 cursor-not-allowed' : ''}
                >
                  {loading ? 'Submitting…' : 'Submit'}
                </Button>
              </form>
            )}
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-navy-100 bg-white p-8 shadow-soft">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-kaaty-100/70 blur-2xl" />
              <div className="relative space-y-4">
                {[
                  [
                    'phone-call',
                    'Talk to a specialist',
                    'Walkthrough tailored to your outlet type',
                  ],
                  ['calendar', 'Pick a time that works', 'Live 1:1 demo, no commitment'],
                  ['rocket', 'Go live fast', 'Code-free onboarding & data import'],
                ].map(([ic, h, d]) => (
                  <div key={h} className="flex items-start gap-3.5 rounded-2xl bg-navy-50/60 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-kaaty-500 text-white">
                      <Icon name={ic} size={20} />
                    </span>
                    <div>
                      <div className="font-display text-[15px] font-bold text-navy">{h}</div>
                      <div className="text-[13px] text-navy-500">{d}</div>
                    </div>
                  </div>
                ))}
                <a
                  href="tel:+918374138823"
                  className="flex items-center justify-between rounded-2xl bg-navy-900 p-5 text-white transition-opacity hover:opacity-90"
                >
                  <div>
                    <div className="text-[12px] text-navy-300">Prefer to call?</div>
                    <div className="font-display text-[18px] font-extrabold">+91 83741 38823</div>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-kaaty-500">
                    <Icon name="phone" size={18} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const BRAND_LOGOS = [
  { name: "Sam's Pizza", icon: 'pizza' },
  { name: 'United Farmers', icon: 'wheat' },
  { name: 'KG Reddy College', icon: 'graduation-cap' },
  { name: 'CMR Group', icon: 'building-2' },
  { name: 'G Fried Chicken', icon: 'drumstick' },
  { name: 'MLR Institute', icon: 'school' },
]

function Accordion({ items, heading = 'Frequently asked questions' }: AccordionProps) {
  const [open, setOpen] = React.useState(0)
  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="FAQ" title={heading} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                  isOpen ? 'border-kaaty-200 shadow-soft' : 'border-navy-100'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-display text-[15.5px] font-bold text-navy sm:text-[17px]">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-kaaty-500 text-white' : 'bg-navy-50 text-navy-600'}`}
                  >
                    <Icon name={isOpen ? 'minus' : 'plus'} size={17} />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-navy-500 sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function BenefitStrip({ benefits, heading = 'Why teams love it' }: BenefitStripProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="Benefits" title={heading} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3.5 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100">
                <Icon name={b.icon} size={20} />
              </span>
              <span className="font-display text-[14.5px] font-bold leading-tight text-navy">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function MiniValueGrid({ heading = 'Everything else, included', items }: MiniValueGridProps) {
  const data = items || [
    {
      icon: 'shield-check',
      title: 'Anti-fraud UPI',
      desc: 'Real-time payment confirmations end fake-screenshot scams.',
    },
    {
      icon: 'printer',
      title: 'Hardware ready',
      desc: 'Pine Labs, thermal & kitchen printers work out of the box.',
    },
    {
      icon: 'refresh-cw',
      title: 'Always in sync',
      desc: 'Counter, kitchen and customer apps update in real time.',
    },
    {
      icon: 'headphones',
      title: 'Dedicated support',
      desc: 'Onboarding, data import and a team that picks up the phone.',
    },
  ]
  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="More than a POS" title={heading} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((c) => (
            <div
              key={c.title}
              className="reveal rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100">
                <Icon name={c.icon} size={20} />
              </span>
              <h3 className="mt-4 font-display text-[16px] font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

type ProductValue = (typeof PRODUCTS)[keyof typeof PRODUCTS]
type SolutionValue = (typeof SOLUTIONS)[keyof typeof SOLUTIONS]
type IntegrationValue = (typeof INTEGRATION_PAGES)[keyof typeof INTEGRATION_PAGES]

function ProductPage({ slug }: { slug: string }) {
  const d = (PRODUCTS as Record<string, ProductValue | undefined>)[slug]
  if (!d) return <NotFound />
  return (
    <>
      <SubHero eyebrow={d.group} title={d.title} sub={d.sub} visual={d.visual as MockKind} />
      <LogoBand heading="Powering food businesses & institutions everywhere" logos={BRAND_LOGOS} />
      <FeatureRows rows={d.features as FeatureRow[]} />
      <BenefitStrip benefits={d.benefits} heading={`Built into ${d.name}`} />
      <Testimonials />
      <Accordion items={SHARED_BENEFIT_FAQS} />
      <DemoForm />
    </>
  )
}

function SolutionPage({ slug }: { slug: string }) {
  const d = (SOLUTIONS as Record<string, SolutionValue | undefined>)[slug]
  if (!d) return <NotFound />
  return (
    <>
      <SubHero eyebrow={d.name} title={d.title} sub={d.sub} visual={d.visual as MockKind} />
      <LogoBand heading={`Trusted by leading ${d.name.toLowerCase()}`} logos={BRAND_LOGOS} />
      <FeatureRows rows={d.rows as FeatureRow[]} />
      <MiniValueGrid heading={`Built for ${d.name}, ready for everything`} />
      <Testimonials />
      <DemoForm />
    </>
  )
}

function IntegrationPage({ slug }: { slug: string }) {
  const d = (INTEGRATION_PAGES as Record<string, IntegrationValue | undefined>)[slug]
  if (!d) return <NotFound />
  const related = (INTEGRATION_GROUPS.find((g) => g.label === d.category)?.items ?? []).filter(
    (s) => s !== slug,
  )
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100">
              <span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />
              {d.category} Integration
            </span>
            <div
              className="mx-auto mt-7 grid h-20 w-20 place-items-center rounded-3xl text-white shadow-lift"
              style={{ background: d.dot }}
            >
              <Icon name={d.icon} size={36} />
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">
              {d.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-navy-500">
              {d.sub}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as="a" href="#/demo" size="lg" icon="arrow-right">
                Book a Demo
              </Button>
              <Button as="a" href="#/integrations/easebuzz" size="lg" variant="outline">
                All Integrations
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {d.what.map((w, i) => (
            <div key={i} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100">
                <Icon name="check" size={20} strokeWidth={2.6} />
              </span>
              <p className="mt-4 text-[14.5px] leading-relaxed text-navy-700">{w}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="Get connected"
            title={
              <>
                Live in <span className="gradient-text">three simple steps</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ['Connect', `Link your ${d.name} account inside Kaaty in a few clicks.`],
              ['Configure', 'Map outlets, payment modes or menus — we guide you through it.'],
              ['Go live', 'Start transacting with everything reconciled automatically.'],
            ].map(([t, dd], i) => (
              <div
                key={t}
                className="relative rounded-2xl border border-navy-100 bg-white p-7 shadow-soft"
              >
                <span className="font-display text-[40px] font-extrabold leading-none text-kaaty-200">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[18px] font-bold text-navy">{t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{dd}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy-100 bg-navy-50/40 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-[22px] font-extrabold text-navy">
              More {d.category.toLowerCase()} integrations
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((s) => {
                const ip = (INTEGRATION_PAGES as Record<string, IntegrationValue>)[s]
                return (
                  <a
                    key={s}
                    href={`#/integrations/${s}`}
                    className="flex items-center gap-2.5 rounded-full border border-navy-100 bg-white px-5 py-3 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-white"
                      style={{ background: ip.dot }}
                    >
                      <Icon name={ip.icon} size={15} />
                    </span>
                    <span className="text-[14.5px] font-semibold text-navy-800">{ip.name}</span>
                  </a>
                )
              })}
            </div>
          </Container>
        </section>
      )}
      <DemoForm />
    </>
  )
}

const RESOURCE_CARDS = [
  { icon: 'book-open', t: 'Documentation', d: 'Setup guides, API references and how-tos.' },
  { icon: 'award', t: 'Case Studies', d: 'Real deployments and the results they drove.' },
  { icon: 'newspaper', t: 'Blog', d: 'Product news and F&B operations playbooks.' },
  { icon: 'life-buoy', t: 'Help Center', d: 'Answers, troubleshooting and best practices.' },
  { icon: 'code', t: 'API & Webhooks', d: 'Build on top of Kaaty with our developer tools.' },
  { icon: 'users', t: 'Community', d: 'Join other operators scaling with Kaaty.' },
]

function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-6 text-center">
          <Eyebrow className="mx-auto">Resources</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">
            Resources to help you <span className="gradient-text">grow</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] text-navy-500">
            Everything you need to get the most out of Kaaty — from first setup to scaling your
            chain.
          </p>
        </Container>
      </section>
      <Container className="pb-24 pt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CARDS.map((c) => (
            <a
              key={c.t}
              href="#/demo"
              className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                <Icon name={c.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-[18px] font-bold text-navy">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{c.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600">
                Explore{' '}
                <Icon
                  name="arrow-right"
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      </Container>
      <DemoForm />
    </>
  )
}

function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center pt-24 text-center">
      <Container>
        <div className="font-display text-[80px] font-extrabold text-kaaty-500">404</div>
        <p className="mt-2 text-navy-500">That page does not exist yet.</p>
        <div className="mt-6">
          <Button as="a" href="#/" icon="arrow-left">
            Back home
          </Button>
        </div>
      </Container>
    </section>
  )
}

/* ============================================================
   Router + App
   ============================================================ */

function ScrollProgress() {
  const [p, setP] = React.useState(0)
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div
        className="h-full bg-kaaty-500 transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ProductEcosystem />
      <WhyKaaty />
      <IndustrySolutions />
      <IntegrationsSection />
      <CustomSolutions />
      <Testimonials />
      <FAQ />
      <DemoForm />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-2 text-center">
          <Eyebrow className="mx-auto">Book a demo</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">
            See Kaaty in action for <span className="gradient-text">your business</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] text-navy-500">
            A live, no-commitment walkthrough tailored to how you operate. Fill the form and our
            team will reach out.
          </p>
        </Container>
      </section>
      <DemoForm />
    </>
  )
}

function useRoute() {
  const [route, setRoute] = React.useState<string>(() => window.location.hash || '#/')
  React.useEffect(() => {
    const on = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

function renderRoute(route: string) {
  const path = route.replace(/^#\/?/, '').replace(/\/$/, '')
  const seg = path.split('/').filter(Boolean)
  if (seg.length === 0) return <Home />
  if (seg[0] === 'pricing') return <PricingPage />
  if (seg[0] === 'resources') return <ResourcesPage />
  if (seg[0] === 'about') return <AboutPage />
  if (seg[0] === 'demo') return <ContactPage />
  if (seg[0] === 'products' && seg[1]) return <ProductPage slug={seg[1]} />
  if (seg[0] === 'solutions' && seg[1]) return <SolutionPage slug={seg[1]} />
  if (seg[0] === 'integrations' && seg[1]) return <IntegrationPage slug={seg[1]} />
  return <NotFound />
}

function App() {
  const route = useRoute()
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route])
  useReveal()
  React.useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in')
      })
    }, 60)
    return () => clearTimeout(t)
  }, [route])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main key={route}>{renderRoute(route)}</main>
      <FinalCTA />
    </>
  )
}

export default App
