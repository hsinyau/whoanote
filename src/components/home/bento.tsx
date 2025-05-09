'use client'

import { features } from '@/components/home/cards'
import { BentoCard, BentoGrid } from '@/components/ui'

export function Grid() {
  return (
    <BentoGrid>
      {features.map((features, index) => (
        <BentoCard key={index} {...features} />
      ))}
    </BentoGrid>
  )
}
