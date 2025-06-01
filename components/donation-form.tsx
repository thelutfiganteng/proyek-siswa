"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface Reward {
  id: string
  title: string
  amount: number
  description: string
  backers: number
}

interface DonationFormProps {
  projectId: string
  rewards: Reward[]
}

export default function DonationForm({ projectId, rewards }: DonationFormProps) {
  const [selectedReward, setSelectedReward] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Format currency to IDR
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedReward && !customAmount) {
      toast({
        title: "Pilih jumlah donasi",
        description: "Silakan pilih paket reward atau masukkan jumlah donasi kustom.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Terima kasih atas dukungan Anda!",
        description: "Anda akan diarahkan ke halaman pembayaran.",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 mb-6">
        <h3 className="font-semibold">Pilih Paket Dukungan</h3>

        <RadioGroup value={selectedReward || ""} onValueChange={setSelectedReward}>
          {rewards.map((reward) => (
            <div key={reward.id} className="border rounded-md p-4 cursor-pointer hover:border-blue-500">
              <div className="flex items-start gap-2">
                <RadioGroupItem value={reward.id} id={`reward-${reward.id}`} className="mt-1" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <Label htmlFor={`reward-${reward.id}`} className="font-medium">
                      {reward.title}
                    </Label>
                    <span className="text-blue-600 font-medium">{formatCurrency(reward.amount)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{reward.backers} pendukung</p>
                </div>
              </div>
            </div>
          ))}

          <div className="border rounded-md p-4 cursor-pointer hover:border-blue-500">
            <div className="flex items-start gap-2">
              <RadioGroupItem value="custom" id="reward-custom" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="reward-custom" className="font-medium">
                  Jumlah Kustom
                </Label>
                <div className="mt-2">
                  <Input
                    type="number"
                    placeholder="Rp"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedReward("custom")
                    }}
                    min="10000"
                    step="10000"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Memproses..." : "Dukung Sekarang"}
      </Button>
    </form>
  )
}
