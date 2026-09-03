import React from 'react'
import { Icon } from './Icon'
import { trackEvent } from '../lib/analytics'

export type ContainerProps = {
  className?: string
  children: React.ReactNode
}

export function Container({ className = '', children }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1720px] px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
      {children}
    </div>
  )
}

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'dark' | 'outline' | 'ghostLight' | 'soft' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  className?: string
  as?: 'button' | 'a'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  as = 'button',
  type = 'button',
  href,
  onClick,
  target,
  rel,
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
    whatsapp:
      'bg-[#25D366] text-white shadow-[0_8px_22px_-8px_rgba(37,211,102,.7)] hover:bg-[#20bd5c] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(37,211,102,.65)]',
  }
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-display tracking-tight transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          size={children ? (size === 'lg' ? 18 : 16) : size === 'lg' ? 24 : 20}
          className={`transition-transform duration-200 ${children ? 'group-hover:translate-x-0.5' : 'group-hover:scale-110'}`}
        />
      )}
    </>
  )
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    onClick?.(e)
    if (href) {
      if (href.includes('wa.me')) {
        trackEvent('whatsapp_click')
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click')
      } else {
        trackEvent('cta_click', {
          cta_text: typeof children === 'string' ? children : undefined,
          cta_target: href,
        })
      }
    } else {
      trackEvent('cta_click', {
        cta_text: typeof children === 'string' ? children : undefined,
      })
    }
  }

  if (as === 'a') {
    return (
      <a href={href} onClick={handleClick} className={cls} target={target} rel={rel}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={handleClick} className={cls}>
      {inner}
    </button>
  )
}

export type EyebrowProps = {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />
      {children}
    </span>
  )
}

export type SectionHeadProps = {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  sub?: React.ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHead({
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
