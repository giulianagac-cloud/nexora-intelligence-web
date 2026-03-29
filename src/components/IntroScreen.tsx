'use client'
import { useEffect, useRef, useState } from 'react'

export function IntroScreen() {
  const [pct, setPct] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    // Check sessionStorage so it only plays once per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('intro-shown')) {
      setHidden(true)
      return
    }

    let current = 0
    intervalRef.current = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3
      if (current >= 100) {
        current = 100
        clearInterval(intervalRef.current!)
        setPct(100)
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => {
            setHidden(true)
            sessionStorage.setItem('intro-shown', '1')
          }, 1000)
        }, 300)
        return
      }
      setPct(current)
    }, 60)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`intro${exiting ? ' exit' : ''}`}>
      <div className="i-corner tl" />
      <div className="i-corner tr" />
      <div className="i-corner bl" />
      <div className="i-corner br" />
      <div className="i-hline" />
      <div className="i-hline" />
      <div className="i-hline" />
      <div className="i-scan" />
      <div className="i-center">
        <div className="i-logo">
          NEXORA<span>_</span>Intelligence
        </div>
        <div className="i-tag">
          // <em>consultora_digital</em> · automatización · IA
        </div>
        <div className="i-bw">
          <div className="i-b" />
        </div>
        <div className="i-pct">{pct}%</div>
      </div>
    </div>
  )
}
