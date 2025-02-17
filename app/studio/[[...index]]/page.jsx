'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Додай generateStaticParams для динамічних параметрів
export async function generateStaticParams() {
  // Якщо у тебе є список динамічних параметрів для шляху, додай їх тут
  return [
    { index: 'page-1' },  // Приклад статичних параметрів
    { index: 'page-2' },  // Замінити на реальні значення
    { index: 'page-3' }   // Якщо це має бути динамічним
  ]
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
