import React from 'react'
import TimelineItem from './TimelineItem'

export default function VerticalTimeline () {
  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
        <TimelineItem
          title="2003 - 2007"
          content="Cursé Tecnicatura en Informática. Adquirí las bases de la programación y el pensamiento lógico."
        />
        <TimelineItem
          title="2009 - 2014"
          content="Carrera de Ingeniería en Telecomunicaciones: Fortalecí mis conocimientos de lógica computacional a través de materias como electrónica digital y lenguaje ensamblador aplicado a sistemas con microprocesadores."
        />
         <TimelineItem
          title="2014 - 2023"
          content="Ingeniero en Telecomunicaciones: Desarrollé habilidades de gestión y trabajo en equipo."
        />
         <TimelineItem
          title="2022 - 2024"
          content="Retomo mi pasión por la programación, enfocandome en el Desarrollo Web. He completado varios cursos y proyectos, y estoy enfocado en aportar valor a partir de los conocimientos adquiridos."
        />
      </div>
    </div>
  )
}
