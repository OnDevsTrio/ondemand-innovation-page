'use client'

import { PiSunDuotone, PiMoonDuotone, PiLaptopDuotone } from 'react-icons/pi'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const themes = [
  { icon: PiSunDuotone, label: 'Light' },
  { icon: PiMoonDuotone, label: 'Dark' },
  { icon: PiLaptopDuotone, label: 'System' },
]

export function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme, theme: initialTheme } = useTheme()
  const [theme, setLocalTheme] = useState<string>()

  useEffect(() => {
    setLocalTheme(initialTheme)
  }, [initialTheme])

  return (
    <DropdownMenu open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='circle'
          className={cn('text-text', isOpen && 'text-primary bg-accent')}
        >
          {themes.map(
            ({ icon: Icon, label }) =>
              theme === label.toLowerCase() && (
                <Icon key={label} size='1.3rem' />
              )
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='p-2 min-w-40'>
        {themes.map(({ icon: Icon, label }) => (
          <DropdownMenuItem
            key={label}
            onClick={() => setTheme(label.toLowerCase())}
            className={`${
              theme === label.toLowerCase()
                ? 'bg-muted text-primary'
                : 'bg-transparent'
            } group cursor-pointer`}
          >
            <Icon className='mr-2 group-hover:text-primary size-4' />
            <span className='group-hover:text-primary'>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
