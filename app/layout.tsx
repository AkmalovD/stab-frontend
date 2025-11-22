import { Toaster } from 'sonner'
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/auth/AuthContext'

export const metadata: Metadata = {
  title: 'STAB - Study Abroad Budget & Planning Platform',
  description: 'A comprehensive study abroad planning application with city comparison and interactive features',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <AuthProvider>
          <div className="layout-container flex h-full grow flex-col">
            {children}
          </div>
        </AuthProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}

