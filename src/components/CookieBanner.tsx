'use client'
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [animIn, setAnimIn] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted')
    if (!accepted) {
      setVisible(true)
      setTimeout(() => setAnimIn(true), 50)
    }
  }, [])

  const accept = () => {
    setAnimIn(false)
    setTimeout(() => setVisible(false), 400)
    localStorage.setItem('cookies-accepted', 'true')
  }

  const decline = () => {
    setAnimIn(false)
    setTimeout(() => setVisible(false), 400)
    localStorage.setItem('cookies-accepted', 'false')
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: 0,
      right: 0,
      background: '#0d0d14',
      borderTop: '2px solid #0055ff',
      padding: '20px 64px',
      zIndex: 9998,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
      transform: animIn ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      boxShadow: '0 -8px 32px rgba(0,85,255,0.15)',
    }}>
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '14px',
        color: 'rgba(242,242,248,0.7)',
        lineHeight: 1.7,
        margin: 0,
        maxWidth: '680px',
      }}>
        🍪 Usamos cookies para analizar el tráfico y mejorar tu experiencia en el sitio.
        No compartimos datos personales con terceros.
        Podés aceptar o rechazar su uso.
      </p>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: '#0055ff',
            color: '#f2f2f8',
            border: 'none',
            padding: '10px 28px',
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'background 0.2s',
          }}
        >
          Aceptar
        </button>
        <button
          onClick={decline}
          style={{
            background: 'transparent',
            color: 'rgba(242,242,248,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 28px',
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '2px',
          }}
        >
          Rechazar
        </button>
      </div>
    </div>
  )
}
