/* ============================================================
   Kaaty — Shared primitives & Lucide icon renderer
   ============================================================ */

/* ---- Lucide icon as a React component ---- */
function lucideChild(child, i) {
  const tag = child[0];
  const attrs = child[1] || {};
  const kids = child[2];
  return React.createElement(tag, { key: i, ...attrs }, Array.isArray(kids) ? kids.map(lucideChild) : null);
}

function Icon({ name, size = 24, strokeWidth = 2, className = '', style }) {
  const L = typeof window !== 'undefined' ? window.lucide : null;
  const node = L && L.icons ? (L.icons[toPascal(name)] || L.icons[name]) : null;
  // lucide node shape: ['svg', attrs, [ [tag, attrs], ... ]]
  const children = node && Array.isArray(node[2]) ? node[2] : [];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} style={style}
      aria-hidden="true">
      {children.map(lucideChild)}
    </svg>
  );
}
function toPascal(s) { return String(s).split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(''); }

/* ---- Layout ---- */
function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/* ---- Buttons ---- */
function Button({ children, variant = 'primary', size = 'md', icon, className = '', as = 'button', href, onClick }) {
  const sizes = {
    sm: 'h-9 px-4 text-[13px]',
    md: 'h-11 px-5 text-[14px]',
    lg: 'h-[52px] px-7 text-[15px]',
  };
  const variants = {
    primary: 'bg-kaaty-500 text-white shadow-[0_8px_22px_-8px_rgba(255,107,0,.7)] hover:bg-kaaty-600 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(255,107,0,.65)]',
    dark: 'bg-navy text-white hover:bg-navy-800 hover:-translate-y-0.5',
    outline: 'bg-white text-navy ring-1 ring-inset ring-navy-200 hover:ring-navy-300 hover:bg-navy-50 hover:-translate-y-0.5',
    ghostLight: 'bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/20 hover:-translate-y-0.5 backdrop-blur',
    soft: 'bg-kaaty-50 text-kaaty-700 hover:bg-kaaty-100',
  };
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-display tracking-tight transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={size === 'lg' ? 18 : 16} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
  if (as === 'a') return <a href={href} onClick={onClick} className={cls}>{inner}</a>;
  return <button onClick={onClick} className={cls}>{inner}</button>;
}

/* ---- Eyebrow / pill label ---- */
function Eyebrow({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />
      {children}
    </span>
  );
}

/* ---- Section heading ---- */
function SectionHead({ eyebrow, title, sub, align = 'center', light = false, className = '' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex max-w-3xl flex-col gap-6 ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-extrabold leading-[1.12] tracking-[-.025em] ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {sub && <p className={`text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed ${light ? 'text-navy-300' : 'text-navy-500'}`}>{sub}</p>}
    </div>
  );
}

/* ---- Reveal on scroll ---- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

Object.assign(window, { Icon, Container, Button, Eyebrow, SectionHead, useReveal });
