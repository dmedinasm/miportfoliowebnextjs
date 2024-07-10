import React from 'react'

export default function Badge ({ title }: {title: string}) {
  return (
    <span
  className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-800 border border-gray-500"
>

  <p className="whitespace-nowrap text-sm">{title}</p>
</span>
  )
}
