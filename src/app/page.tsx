import { IntroScreen }  from '@/components/IntroScreen'
import { Nav }          from '@/components/layout/Nav'
import { Hero }         from '@/components/sections/Hero'
import { LogosStrip }   from '@/components/sections/LogosStrip'
import { Servicios }    from '@/components/sections/Servicios'
import { Bots }         from '@/components/sections/Bots'
import { Verticales }        from '@/components/sections/Verticales'
import { NuestrosProductos } from '@/components/sections/NuestrosProductos'
import { Casos }             from '@/components/sections/Casos'
import { Proceso }      from '@/components/sections/Proceso'
import { Stack }        from '@/components/sections/Stack'
import { Contacto }     from '@/components/sections/Contacto'
import { Footer }       from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Nav />
      <main>
        <Hero />
        <LogosStrip />
        <Servicios />
        <Bots />
        <Verticales />
        <NuestrosProductos />
        <Casos />
        <Proceso />
        <Stack />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
