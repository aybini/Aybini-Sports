'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Milestone {
  id: number
  title: string
  description: string
  reward: string
  achieved: boolean
}

const dummyMilestones: Milestone[] = [
  { id: 1, title: "First Pro Game", description: "Athlete plays their first professional game", reward: "Commemorative NFT", achieved: true },
  { id: 2, title: "100 Career Points", description: "Athlete reaches 100 career points", reward: "Exclusive Digital Trading Card", achieved: false },
  { id: 3, title: "All-Star Selection", description: "Athlete is selected for the All-Star team", reward: "VIP Meet & Greet Opportunity", achieved: false },
]

export function MilestoneBonuses() {
  const [milestones, setMilestones] = useState(dummyMilestones)

  const claimReward = (id: number) => {
    setMilestones(milestones.map(m => 
      m.id === id ? { ...m, achieved: true } : m
    ))
    // In a real app, this would process the reward claiming
    alert("Congratulations! You've claimed your reward.")
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Milestone Bonuses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="bg-gray-700 p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{milestone.title}</h3>
              <Badge variant={milestone.achieved ? "default" : "secondary"}>
                {milestone.achieved ? "Achieved" : "Pending"}
              </Badge>
            </div>
            <p className="text-sm text-gray-400">{milestone.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Reward: {milestone.reward}</span>
              {milestone.achieved && (
                <Button size="sm" onClick={() => claimReward(milestone.id)}>
                  Claim Reward
                </Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

