"use client";

import { BentoCard, BentoGrid } from "@/components/ui";
import { features } from "@/components/home/cards";

export function Grid() {
  return (
    <BentoGrid>
      {features.map((features, index) => (
        <BentoCard key={index} {...features} />
      ))}
    </BentoGrid>
  );
}
