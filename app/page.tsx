"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import StarRating from "@/components/star-rating"
import PracticeHeader from "@/components/practice-header"

export default function RatingPage() {
  const [selectedRating, setSelectedRating] = useState(0)
  const router = useRouter()

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating)
  }

  const handleNext = () => {
    if (selectedRating === 5) {
      router.push("/review")
    } else if (selectedRating <= 4 && selectedRating >= 1) {
      router.push("/feedback")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <PracticeHeader className="mb-12" />

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-main mb-8">
            How would you rate your experience with Southside Endodontics?
          </h2>

          <StarRating onRatingSelect={handleRatingSelect} selectedRating={selectedRating} />

          {selectedRating > 0 && (
            <div className="mt-8 animate-in fade-in duration-300">
              <button
                onClick={handleNext}
                className="bg-main hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-1 focus:ring-opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
