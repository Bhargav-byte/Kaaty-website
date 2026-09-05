import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type RouterContextType = {
  pathname: string
  search: string
  path: string
  navigate: (to: string, options?: { replace?: boolean }) => void
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  search: '',
  path: '/',
  navigate: () => {},
})

// eslint-disable-next-line react-refresh/only-export-components
export function useRouter(): RouterContextType {
  return useContext(RouterContext)
}

function resolveInitialLocation(): { pathname: string; search: string } {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '' }
  }

  // Graceful resolution: if arriving via legacy hash URL (e.g. #/pricing or #/demo?source=hero)
  const hash = window.location.hash
  if (hash.startsWith('#/')) {
    const raw = hash.slice(1) // e.g. "/pricing" or "/demo?source=hero"
    const [hPath, hSearch] = raw.split('?')
    const fullTarget =
      (hPath.startsWith('/') ? hPath : `/${hPath}`) + (hSearch ? `?${hSearch}` : '')
    try {
      window.history.replaceState({}, '', fullTarget)
    } catch {
      // Ignore if history state fails
    }
    return {
      pathname: hPath.startsWith('/') ? hPath : `/${hPath}`,
      search: hSearch ? `?${hSearch}` : '',
    }
  }

  return {
    pathname: window.location.pathname || '/',
    search: window.location.search || '',
  }
}

export function Router({ children }: { children: React.ReactNode }) {
  const [loc, setLoc] = useState(resolveInitialLocation)

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    if (typeof window === 'undefined') return

    const [newPath, newSearch = ''] = to.split('?')
    const formattedPath = newPath.startsWith('/') ? newPath : `/${newPath}`
    const full = formattedPath + (newSearch ? `?${newSearch}` : '')

    if (options?.replace) {
      window.history.replaceState({}, '', full)
    } else {
      window.history.pushState({}, '', full)
    }

    setLoc({ pathname: formattedPath, search: newSearch ? `?${newSearch}` : '' })
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    const onPopState = () => {
      setLoc({
        pathname: window.location.pathname || '/',
        search: window.location.search || '',
      })
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Universal click interceptor: enables standard <a href="/path"> to navigate client-side
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        e.shiftKey
      ) {
        return
      }

      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      // Handle legacy hash link in click
      if (href.startsWith('#/')) {
        e.preventDefault()
        navigate(href.slice(1))
        return
      }

      // Handle internal relative paths starting with '/'
      if (href.startsWith('/') && !href.startsWith('//')) {
        const targetAttr = target.getAttribute('target')
        if (targetAttr && targetAttr !== '_self') return

        e.preventDefault()
        navigate(href)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  const contextValue: RouterContextType = {
    pathname: loc.pathname,
    search: loc.search,
    path: loc.pathname + loc.search,
    navigate,
  }

  return <RouterContext.Provider value={contextValue}>{children}</RouterContext.Provider>
}

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  replace?: boolean
}

export function Link({ to, replace, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey
    ) {
      e.preventDefault()
      navigate(to, { replace })
    }
  }

  return <a href={to} onClick={handleClick} {...rest} />
}
