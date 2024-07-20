import Hero from '../components/Hero'
import Header from '../components/Header'
import Education from '@/components/Education'
import Proyectos from '@/components/Proyectos'
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'

export default function Home () {
  return (
    <main className='px-4 dark:bg-[#1A1D34] '>
      <Header/>
      <Hero/>
      <Education/>
      <Proyectos/>
      <AboutMe/>
      <Footer/>
    </main>
  )
}
