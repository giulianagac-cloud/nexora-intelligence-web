'use client'
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookies-accepted', 'false')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '480px',
      background: '#0d0d14',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '4px',
      padding: '20px 24px',
      zIndex: 9998,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    }}>
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '12px',
        color: 'rgba(242,242,248,0.7)',
        lineHeight: 1.7,
        margin: 0,
      }}>
        Usamos cookies para analizar el tráfico y mejorar tu experiencia.
        No compartimos datos personales con terceros.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={accept}
          style={{
            background: '#0055ff',
            color: '#f2f2f8',
            border: 'none',
            padding: '8px 20px',
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '2px',
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
            padding: '8px 20px',
            fontFamily: 'var(--mono)',
            fontSize: '11px',
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
