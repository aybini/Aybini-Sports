'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface RealTimePriceProps {
  initialPrice: number
  assetId: number
}

export function RealTimePrice({ initialPrice, assetId }: RealTimePriceProps) {
  const [price, setPrice] = useState(initialPrice)
  const [prevPrice, setPrevPrice] = useState(initialPrice)

  useEffect(() => {
    // Simulating WebSocket connection
    const interval = setInterval(() => {
      setPrevPrice(price)
      setPrice(prev => {
        const change = (Math.random() - 0.5) * 2
        return Number((prev + change).toFixed(2))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [assetId])

  const TrendIcon = price >= prevPrice ? TrendingUp : TrendingDown
  const trendColor = price >= prevPrice ? 'text-green-400' : 'text-red-400'

  return (
    <div className={`flex items-center ${trendColor}`}>
      <TrendIcon className="w-4 h-4 mr-1" />
      <span className="font-bold">${price.toFixed(2)}</span>
    </div>
  )
}

