"use client"

import * as React from "react"
import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface QuantityInputProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function QuantityInput({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantityInputProps) {
  return (
    <div className="flex mx-3 items-center">
      <Button
        variant="outline"
        size="icon"
        className="h-5 w-5 rounded-r-none"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value)
          if (!isNaN(newValue)) {
            onChange(Math.min(max, Math.max(min, newValue)))
          }
        }}
        className="h-6 w-6 border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        variant="outline"
        size="icon"
        className="h-5 w-5 rounded-l-none"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  )
}