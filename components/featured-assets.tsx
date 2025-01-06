import { AssetCard } from '@/components/asset-card'

const featuredAssets = [
  { id: 1, name: "LeBron James", type: "Athlete", image: "/placeholder.svg?height=400&width=300", currentPrice: 1000, change: 2.5 },
  { id: 2, name: "Manchester United", type: "Team", image: "/placeholder.svg?height=400&width=300", currentPrice: 5000, change: -1.2 },
  { id: 3, name: "Serena Williams", type: "Athlete", image: "/placeholder.svg?height=400&width=300", currentPrice: 800, change: 1.8 },
  { id: 4, name: "Pep Guardiola", type: "Coach", image: "/placeholder.svg?height=400&width=300", currentPrice: 500, change: 3.2 },
]

export function FeaturedAssets() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Featured Assets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  )
}

