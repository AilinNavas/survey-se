"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface StarRatingProps {
  onRatingSelect: (rating: number) => void
  selectedRating: number
}

export default function StarRating({ onRatingSelect, selectedRating }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className="flex justify-center gap-2 my-8">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRatingSelect(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-transform hover:scale-110 focus:outline-none rounded-full p-1"
          aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
        >
          <Star
            size={48}
            className={`transition-colors ${
              star <= (hoverRating || selectedRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  )
}
