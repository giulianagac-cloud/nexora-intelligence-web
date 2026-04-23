import { IntroScreen }       from '@/components/IntroScreen'
import { Nav }               from '@/components/layout/Nav'
import { Footer }            from '@/components/layout/Footer'
import { Hero }              from '@/components/sections/Hero'
import { Servicios }         from '@/components/sections/Servicios'
import { Casos }             from '@/components/sections/Casos'
import { Blog }              from '@/components/sections/Blog'
import { FAQ }               from '@/components/sections/FAQ'
import { Proceso }           from '@/components/sections/Proceso'
import { Contacto }          from '@/components/sections/Contacto'
import { CookieBanner }      from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Casos />
        <Blog />
        <FAQ />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
