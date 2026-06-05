import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial state without triggering effect warning if possible
    // but Next.js/React doesn't like setState in effect synchronously.
    // Actually, setting state in effect is okay for window size, but eslint react-hooks/exhaustive-deps 
    // or react-hooks/set-state-in-effect might complain.
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    // Initial check - setTimeout to avoid synchronous setState warning
    setTimeout(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }, 0)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
