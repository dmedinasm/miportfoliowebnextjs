import Hero from '../components/Hero'
import Header from '../components/Header'
import Education from '@/components/Education'
import Proyectos from '@/components/Proyectos'

export default function Home () {
  return (
    <main className='px-52'>
      <Header/>
      <Hero/>
      <Education/>
      <Proyectos/>
    </main>
  )
}
