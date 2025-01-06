import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">AYBINI Sports</Link>
        <div className="space-x-4">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/insights">AI Insights</Link>
          <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}

