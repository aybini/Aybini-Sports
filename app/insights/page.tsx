'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const dummyData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
]

export default function Insights() {
  const [assetName, setAssetName] = useState('')
  const [prediction, setPrediction] = useState<string | null>(null)

  const handlePredict = () => {
    // Simulate AI prediction
    setPrediction(`Based on recent performance and market trends, ${assetName} is projected to increase in value by 15% over the next quarter. Consider investing now for potential gains.`)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">AI-Powered Insights</h1>
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Performance Prediction</h2>
          <div className="flex space-x-4">
            <Input
              type="text"
              placeholder="Enter asset name..."
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button onClick={handlePredict} disabled={!assetName}>Predict</Button>
          </div>
          {prediction && (
            <div className="bg-blue-900 p-4 rounded-md">
              <p>{prediction}</p>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Market Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

