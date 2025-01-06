'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export function AIInsights() {
  const [insight, setInsight] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateInsight = () => {
    setLoading(true)
    // Simulating AI-generated insight
    setTimeout(() => {
      setInsight("Based on recent performance metrics and social media sentiment analysis, there's a 78% probability of LeBron James' NFT value increasing by 15% in the next 48 hours. Consider increasing your investment position.")
      setLoading(false)
    }, 2000)
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
          AI-Powered Insight
        </CardTitle>
      </CardHeader>
      <CardContent>
        {insight ? (
          <p className="text-sm text-gray-300">{insight}</p>
        ) : (
          <Button onClick={generateInsight} disabled={loading}>
            {loading ? 'Generating Insight...' : 'Generate AI Insight'}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

