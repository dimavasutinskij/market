
import { Next13NProgress } from 'nextjs13-progress'
import './globals.css'
import { ContextProvider } from '@/context/ContextProvider'

export const metadata = {
  title: 'Organic Store - Promoting Healthy and Nourishing Food',
  description: 'carefully curated selection of organic products designed to support your well-being',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body>
          {children}
          <Next13NProgress color="#274C5B" height={5} />
        </body>
      </ContextProvider>
    </html>
  )
}
