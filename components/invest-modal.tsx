import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InvestModalProps {
  asset: {
    name: string
    type: string
    currentPrice: number
  }
  isOpen: boolean
  onClose: () => void
}

export function InvestModal({ asset, isOpen, onClose }: InvestModalProps) {
  const [amount, setAmount] = useState('')
  const [step, setStep] = useState(1)

  const handleInvest = () => {
    // Simulate investment process
    setStep(2)
    setTimeout(() => {
      setStep(3)
    }, 2000)
  }

  const handleClose = () => {
    setStep(1)
    setAmount('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Invest in {asset.name}</DialogTitle>
          <DialogDescription>
            {asset.type} - Current Price: ${asset.currentPrice.toFixed(2)}
          </DialogDescription>
        </DialogHeader>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Investment Amount (USD)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <p className="text-sm text-gray-400">
              Estimated shares: {amount ? (parseFloat(amount) / asset.currentPrice).toFixed(4) : '0'}
            </p>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <p>Processing your investment...</p>
            <div className="mt-4 animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            <p className="text-xl font-bold text-green-500 mb-2">Investment Successful!</p>
            <p>You have successfully invested ${amount} in {asset.name}.</p>
          </div>
        )}
        <DialogFooter>
          {step === 1 && (
            <Button onClick={handleInvest} disabled={!amount}>
              Confirm Investment
            </Button>
          )}
          {step === 3 && (
            <Button onClick={handleClose}>
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

