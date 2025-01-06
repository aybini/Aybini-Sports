'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

interface SponsorshipPoolProps {
  name: string
  type: 'Athlete' | 'Team'
  currentAmount: number
  targetAmount: number
}

export function SponsorshipPool({ name, type, currentAmount, targetAmount }: SponsorshipPoolProps) {
  const [contribution, setContribution] = useState('')
  const progress = (currentAmount / targetAmount) * 100

  const handleContribute = () => {
    // In a real app, this would process the contribution
    alert(`Thank you for contributing $${contribution} to ${name}'s sponsorship pool!`)
    setContribution('')
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name} Sponsorship Pool</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Current: ${currentAmount.toLocaleString()}</span>
          <span>Target: ${targetAmount.toLocaleString()}</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-400">
          Support {name} and receive exclusive NFT rewards, recognition, and more!
        </p>
        <div className="flex space-x-2">
          <Input
            type="number"
            placeholder="Enter amount"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white"
          />
          <Button onClick={handleContribute} disabled={!contribution}>Contribute</Button>
        </div>
      </CardContent>
    </Card>
  )
}

