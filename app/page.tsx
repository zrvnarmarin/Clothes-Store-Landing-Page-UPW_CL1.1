import ArrivalsSection from '@/components/arrivals/ArrivalsSection'
import CompaniesSection from '@/components/companies/CompaniesSection'
import HeroSection from '@/components/hero/HeroSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <HeroSection />
      <CompaniesSection />
      <ArrivalsSection />
    </main>
  )
}
