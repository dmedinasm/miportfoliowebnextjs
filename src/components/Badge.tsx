import React from 'react'

export default function Badge ({ title }: {title: string}) {
  return (
    <span
  className="inline-flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 px-2.5 py-0.5 text-emerald-800 dark:text-emerald-50 border border-gray-500 animate-pulse cursor-pointer"
>

  <p className="whitespace-nowrap text-sm">{title}</p>
</span>
  )
}
