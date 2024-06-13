'use client'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import HomeNavbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer'

const queryClient = new QueryClient()

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider {...props}>
        <ProgressBar
          height="3px"
          color="#86B6F6"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <main className="flex container overflow-hidden min-h-screen flex-col">
          <section className="md:px-[3%] flex flex-col">
            <HomeNavbar />
            <div style={{ minHeight: 'calc(100vh - 6rem)' }} className="pt-24">
              {children}
            </div>
            <Footer />
          </section>
        </main>
      </NextThemesProvider>
    </QueryClientProvider>
  )
}
