'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube } from 'lucide-react'

export function ARViewer() {
  const [arActive, setArActive] = useState(false)

  const toggleAR = () => {
    setArActive(!arActive)
    // In a real implementation, this would initialize an AR session
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Cube className="w-5 h-5 mr-2 text-purple-400" />
          AR Asset Viewer
        </CardTitle>
      </CardHeader>
      <CardContent>
        {arActive ? (
          <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">AR View Active</p>
          </div>
        ) : (
          <Button onClick={toggleAR} className="w-full">
            Launch AR Viewer
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

