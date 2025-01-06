'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const portfolioData = [
  { name: "LeBron James", type: "Athlete", value: 2500, change: 15 },
  { name: "Manchester United", type: "Team", value: 7500, change: -5 },
  { name: "Serena Williams", type: "Athlete", value: 1800, change: 8 },
  { name: "Pep Guardiola", type: "Coach", value: 1000, change: 12 },
]

export default function Portfolio() {
  const [predictedAsset, setPredictedAsset] = useState('')
  const [prediction, setPrediction] = useState<string | null>(null)

  const totalValue = portfolioData.reduce((sum, asset) => sum + asset.value, 0)

  const handlePredict = () => {
    setPrediction(`Based on recent performance and market trends, ${predictedAsset} is projected to increase in value by 8% before their next match. Consider increasing your investment for potential gains.`)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Your Portfolio</h1>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Total Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-gray-300">${totalValue.toLocaleString()}</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.map((asset) => (
          <Card key={asset.name} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>{asset.name}</CardTitle>
              <p className="text-sm text-gray-400">{asset.type}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <p className="font-semibold">${asset.value.toLocaleString()}</p>
                <p className={asset.change >= 0 ? "text-green-400" : "text-red-400"}>
                  {asset.change >= 0 ? "+" : ""}{asset.change}%
                </p>
              </div>
              <Progress value={asset.value / totalValue * 100} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Performance Prediction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <Input
              type="text"
              placeholder="Enter asset name..."
              value={predictedAsset}
              onChange={(e) => setPredictedAsset(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button onClick={handlePredict} disabled={!predictedAsset}>Predict</Button>
          </div>
          {prediction && (
            <div className="bg-blue-900 p-4 rounded-md">
              <p>{prediction}</p>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Live Trading</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Upcoming Matches</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Manchester United vs Liverpool</p>
                <p className="text-sm text-gray-400">Kickoff in 2 hours</p>
              </div>
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                Trade Now
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">LeBron James - Lakers vs Warriors</p>
                <p className="text-sm text-gray-400">Tipoff in 5 hours</p>
              </div>
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                Trade Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

