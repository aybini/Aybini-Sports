import { Button } from "@/components/ui/button"
import { FeaturedAssets } from '@/components/featured-assets'
import { InvestorFAQ } from '@/components/investor-faq'
import { SponsorshipPool } from '@/components/sponsorship-pool'
import { FantasyLeague } from '@/components/fantasy-league'
import { MilestoneBonuses } from '@/components/milestone-bonuses'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Welcome to the Future of Sports Investment
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Invest in athletes, teams, and coaches through blockchain-powered NFTs. 
          Own a piece of sports history and profit from their success.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore Marketplace
          </Button>
          <Button size="lg" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
            Learn More
          </Button>
        </div>
      </section>
      
      <FeaturedAssets />
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SponsorshipPool 
          name="LeBron James" 
          type="Athlete" 
          currentAmount={750000} 
          targetAmount={1000000} 
        />
        <FantasyLeague />
      </section>
      
      <MilestoneBonuses />
      
      <section className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Investor FAQ</h2>
        <InvestorFAQ />
      </section>
    </div>
  )
}

