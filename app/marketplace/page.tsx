'use client'

import { useState } from 'react'
import { AssetCard } from '@/components/asset-card'
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { AIInsights } from '@/components/ai-insights'
import { ARViewer } from '@/components/ar-viewer'

const assets = [
  { id: 1, name: "LeBron James", type: "Athlete", image: "/Sports-NFT/Lebron.jpg", currentPrice: 100, change: 2.5 },
  { id: 2, name: "Manchester United", type: "Team", image: "/Sports-NFT/Manchester-united.jpg", currentPrice: 350, change: -1.2 },
  { id: 3, name: "Serena Williams", type: "Athlete", image: "/Sports-NFT/Serena-Williams.jpg", currentPrice: 80, change: 1.8 },
  { id: 4, name: "Pep Guardiola", type: "Coach", image: "/Sports-NFT/Pep-Guardiola.jpg", currentPrice: 50, change: 3.2 },
  { id: 5, name: "New York Yankees", type: "Team", image: "/Sports-NFT/New-york-yankees.jpg", currentPrice: 220, change: 0.5 },
  { id: 6, name: "Cristiano Ronaldo", type: "Athlete", image: "/Sports-NFT/Christiano-Ronaldo.jpg", currentPrice: 95, change: -0.8 },
  { id: 7, name: "Golden State Warriors", type: "Team", image: "/Sports-NFT/Golden-State-Warriors.jpg", currentPrice: 380, change: 1.5 },
  { id: 8, name: "Simone Biles", type: "Athlete", image: "/Sports-NFT/Simone-Biles.jpg", currentPrice: 60, change: 4.2 },
]

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')

  const filteredAssets = assets.filter(asset => 
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'All' || asset.type === filterType)
  )

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Marketplace</h1>
      <div className="flex space-x-4">
        <Input
          type="text"
          placeholder="Search assets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white"
        />
              <div className="bg-gray-800 border-gray-700 text-white">
        <Select
          value={filterType}
          onValueChange={setFilterType}
        >
          <option value="All">All Types</option>
          <option value="Athlete">Athletes</option>
          <option value="Team">Teams</option>
          <option value="Coach">Coaches</option>
        </Select>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <AIInsights />
          <ARViewer />
        </div>
      </div>
    </div>
  )
}

