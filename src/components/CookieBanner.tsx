'use client'
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [animIn, setAnimIn] = useState(false)

  useEffect(() => {
    setVisible(true)
    setTimeout(() => setAnimIn(true), 800)
  }, [])

  const accept = () => {
    setAnimIn(false)
    setTimeout(() => setVisible(false), 500)
    localStorage.setItem('cookies-accepted', 'true')
  }

  const decline = () => {
    setAnimIn(false)
    setTimeout(() => setVisible(false), 500)
    localStorage.setItem('cookies-accepted', 'false')
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      width: '380px',
      maxWidth: '90vw',
      background: '#faf9f7',
      border: '1px solid rgba(0,0,0,0.10)',
      borderLeft: '4px solid #00a67e',
      borderRadius: '10px',
      padding: '24px 24px 20px',
      zIndex: 9998,
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
      transform: animIn ? 'translateY(0)' : 'translateY(calc(100% + 40px))',
      opacity: animIn ? 1 : 0,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
    }}>
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', marginBottom: '12px',
      }}>
        <span style={{ fontSize: '20px' }}>🍪</span>
        <button onClick={decline} style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#9a9180', fontSize: '20px', lineHeight: 1, padding: '0',
        }}>×</button>
      </div>
      <p style={{
        fontFamily: 'var(--mono)', fontSize: '13px',
        color: '#4a4540', lineHeight: 1.75, margin: '0 0 20px',
      }}>
        Usamos cookies para entender cómo navegás el sitio y mejorar la experiencia. Sin datos personales, sin terceros raros. Vos decidís.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={accept} style={{
          flex: 1, background: '#1a1a1a', color: '#f0ede8',
          border: 'none', padding: '11px 0',
          fontFamily: 'var(--mono)', fontSize: '12px',
          fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', cursor: 'pointer', borderRadius: '5px',
        }}>
          Aceptar
        </button>
        <button onClick={decline} style={{
          flex: 1, background: 'transparent', color: '#9a9180',
          border: '1px solid rgba(0,0,0,0.12)', padding: '11px 0',
          fontFamily: 'var(--mono)', fontSize: '12px',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          cursor: 'pointer', borderRadius: '5px',
        }}>
          Rechazar
        </button>
      </div>
    </div>
  )
}
