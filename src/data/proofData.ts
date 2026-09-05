export type VerifiedLogo = {
  name: string
  icon: string
  category?: string
}

export type VerifiedMetric = {
  label: string
  subtext: string
}

export const VERIFIED_BRAND_LOGOS: VerifiedLogo[] = [
  { name: "Sam's Pizza", icon: 'pizza', category: 'Restaurant & QSR' },
  { name: 'United Farmers', icon: 'wheat', category: 'Retail & Cafe' },
  { name: 'KG Reddy College', icon: 'graduation-cap', category: 'Campus Dining' },
  { name: 'CMR Group', icon: 'building-2', category: 'Institutional Food' },
  { name: 'G Fried Chicken', icon: 'drumstick', category: 'Fast Casual' },
  { name: 'MLR Institute', icon: 'school', category: 'Campus Dining' },
]

export const VERIFIED_OPERATIONAL_METRICS: VerifiedMetric[] = [
  {
    label: 'High-Volume Speed',
    subtext: 'Built for 500+ orders per hour during peak shifts and break rushes',
  },
  {
    label: 'Offline Continuity',
    subtext: 'Local station storage continues punching and printing if network drops',
  },
  {
    label: 'Zero Fraud UPI',
    subtext: 'Direct bank webhook verification eliminates screenshot scams',
  },
  {
    label: 'Unified Ledger',
    subtext: 'End-of-day sales, refunds, and vendor splits reconciled in one click',
  },
]
