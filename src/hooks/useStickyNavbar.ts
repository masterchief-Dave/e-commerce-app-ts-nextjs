import { useState, useEffect } from 'react'

export const useStickyNavbar = () => {
  const [scroll, setScroll] = useState<number | null>(null)
  const [isTop, setIsTop] = useState<boolean>(false)

  useEffect(() => {
    setScroll(window.scrollY)
  }, [])

  const handleNavbar = () => {
    if (window.scrollY > 0) {
      return setIsTop(true)
    } else {
      return setIsTop(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleNavbar)

    return () => {
      document.removeEventListener('scroll', handleNavbar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll])

  return {
    isTop,
  }
}
