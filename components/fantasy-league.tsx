'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const dummyLeagueData = [
  { rank: 1, name: "InvestorPro", score: 1250, change: "+15" },
  { rank: 2, name: "SportsFanatic", score: 1180, change: "-5" },
  { rank: 3, name: "AthleteBacker", score: 1150, change: "+20" },
  { rank: 4, name: "TeamSpirit", score: 1100, change: "+10" },
  { rank: 5, name: "GoalGetter", score: 1050, change: "-8" },
]

export function FantasyLeague() {
  const [joined, setJoined] = useState(false)

  const handleJoinLeague = () => {
    setJoined(true)
    // In a real app, this would process the league joining
    alert("You've successfully joined the Fantasy Investment League!")
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Fantasy Investment League</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-400">
          Compete with other investors based on your portfolio performance!
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Investor</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyLeagueData.map((investor) => (
              <TableRow key={investor.rank}>
                <TableCell className="font-medium">{investor.rank}</TableCell>
                <TableCell>{investor.name}</TableCell>
                <TableCell>{investor.score}</TableCell>
                <TableCell className={`text-right ${investor.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {investor.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {!joined && (
          <Button onClick={handleJoinLeague} className="w-full">
            Join League
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

