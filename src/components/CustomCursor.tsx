'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let gx = 0, gy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      gx += (mx - gx) * 0.06
      gy += (my - gy) * 0.06
      if (glowRef.current) {
        glowRef.current.style.left = gx + 'px'
        glowRef.current.style.top  = gy + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cur-dot" />
      <div ref={ringRef} className="cur-ring" />
      <div ref={glowRef} className="cur-glow" />
    </>
  )
}
