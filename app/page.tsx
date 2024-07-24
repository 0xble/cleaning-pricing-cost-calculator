'use client'
import { useState } from 'react'

export default function Home() {
  const [hours, setHours] = useState('')
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
  const [totalCost, setTotalCost] = useState<number | null>(null)
  const [minimumPrice, setMinimumPrice] = useState<number | null>(null)

  const calculate = () => {
    const numHours = parseFloat(hours)
    if (!isNaN(numHours)) {
      const cost = numHours * 25
      setEstimatedPrice(numHours * 55)
      setTotalCost(cost)
      setMinimumPrice(cost / 0.6)
    } else {
      setEstimatedPrice(null)
      setTotalCost(null)
      setMinimumPrice(null)
    }
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Pricing & Cost Calculator</h1>
      <div className='mb-4 flex gap-2'>
        <input
          type='number'
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder='Enter hours'
          className='rounded border p-2'
        />
        <button
          onClick={calculate}
          className='rounded bg-blue-500 px-4 py-2 text-white'
        >
          Calculate
        </button>
      </div>
      {estimatedPrice !== null &&
        totalCost !== null &&
        minimumPrice !== null && (
          <div className='text-xl'>
            <p>Estimated Total Price: ${estimatedPrice.toFixed(2)}</p>
            <p>Minimum Total Price: ${minimumPrice.toFixed(2)}</p>
            <p>Estimated Total Cost: ${totalCost.toFixed(2)}</p>
          </div>
        )}
    </div>
  )
}
