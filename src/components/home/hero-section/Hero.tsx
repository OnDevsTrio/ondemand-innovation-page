import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import heroImage from '@/../public/assets/innovation.svg'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'

const Hero = () => {
  return (
    <div
      style={{ height: 'calc(100vh - 6rem)' }}
      className="flex justify-between py-10 w-full items-center sm:max-h-[auto] md:max-h-[700px] gap-10 relative"
    >
      <div className="flex text-center md:text-left flex-grow flex-col gap-5 items-center md:items-start">
        <div className="space-y-2 w-full lg:w-3/5">
          <p className="text-primary font-medium">OnDemand Innovation</p>
          <h1 className="text-3xl md:text-[3.5rem] font-bold leading-tight">
            CONNECTING <span className="text-primary">INNOVATION</span> TO
            BUSINESS
          </h1>
        </div>
        <p className="text-text lg:text-xl f-full lg:w-2/5">
          Our platform is dedicated to connecting talented individuals with
          dynamic internship opportunities that empower growth, innovation, and
          success.
        </p>
        <Button
          className="rounded-full text-base py-6 px-4 pe-6 gap-2 mt-2"
          variant="gradient"
        >
          <LuArrowUpRightFromCircle size="1.4rem" />
          APPLY AS INTERN
        </Button>
      </div>
      <div className="w-2/5 hidden lg:flex absolute -right-14 mt-16 items items-center justify-center">
        <Image
          alt="hero"
          src={heroImage}
          width="0"
          height="0"
          className="object-cover w-full"
        />
      </div>
    </div>
  )
}

export default Hero
