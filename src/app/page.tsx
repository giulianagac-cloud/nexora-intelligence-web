import { IntroScreen }  from '@/components/IntroScreen'
import { Nav }          from '@/components/layout/Nav'
import { Hero }         from '@/components/sections/Hero'
import { LogosStrip }   from '@/components/sections/LogosStrip'
import { Servicios }    from '@/components/sections/Servicios'
import { Bots }         from '@/components/sections/Bots'
import { Verticales }   from '@/components/sections/Verticales'
import { Founder }      from '@/components/sections/Founder'
import { Casos }        from '@/components/sections/Casos'
import { Productos }    from '@/components/sections/Productos'
import { Proceso }      from '@/components/sections/Proceso'
import { TechStack }    from '@/components/sections/TechStack'
import { CTAFinal }     from '@/components/sections/CTAFinal'
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
        <Casos />
        <Productos />
        <Founder />
        <Proceso />
        <TechStack />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
