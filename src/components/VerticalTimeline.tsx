import React from 'react'
import TimelineItem from './TimelineItem'

export default function VerticalTimeline () {
  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
        <TimelineItem
          title="2003 - 2007"
          content="Tecnicatura en Informática."
        />
        <TimelineItem
          title="2009 - 2014"
          content="Carrera de Ingeniería en Telecomunicaciones"
        />
         <TimelineItem
          title="2014 - 2023"
          content="Trabajo de Ingeniero en Telecomunicaciones en Administración Pública"
        />
         <TimelineItem
          title="2022 - Actualidad"
          content="Cursos y Proyectos de Desarrollo Web"
        />
      </div>
    </div>
  )
}
