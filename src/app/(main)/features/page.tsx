import CTA from '@/components/sections/CTA'
import FeaturesHero from '@/components/sections/FeaturesHero'
import PremiumOfferings from '@/components/sections/PremiumOfferings'
import RequestQuote from '@/components/sections/RequestQuote'
import UbakcoLogistics from '@/components/sections/ubakcoLogistics'
import WhyPremiumTrust from '@/components/sections/WhyPremiumTrust'
import Footer from '@/components/shared/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <FeaturesHero />
      <PremiumOfferings />
      <RequestQuote />
      <UbakcoLogistics />
      <WhyPremiumTrust />
      <CTA />
      <Footer />
    </div>
  )
}

export default page
