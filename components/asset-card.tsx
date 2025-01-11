'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { InvestModal } from '@/components/invest-modal'
import { RealTimePrice } from '@/components/real-time-price'

interface Asset {
  id: number
  name: string
  type: string
  image: string
  currentPrice: number
  change: number
}

interface AssetCardProps {
  asset: Asset
}

export function AssetCard({ asset }: AssetCardProps) {
  const { id, name, type, image, currentPrice, change } = asset
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false)

  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
      <div className="relative">
        <Image
          src={image} 
          alt={name} 
          width={300} 
          height={500} 
          style={{ objectFit: "contain"}}
          className="w-full h-48" 
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {type}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <RealTimePrice initialPrice={currentPrice} assetId={id} />
          <p className={`${change >= 0 ? 'text-green-400' : 'text-red-400'} text-sm`}>
            {change >= 0 ? '+' : ''}{change.toFixed(2)}%
          </p>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-700 p-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsInvestModalOpen(true)}>
          Invest Now
        </Button>
      </CardFooter>
      <InvestModal
        asset={{ name, type, currentPrice }}
        isOpen={isInvestModalOpen}
        onClose={() => setIsInvestModalOpen(false)}
      />
    </Card>
  )
}
