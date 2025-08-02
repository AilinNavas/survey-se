"use client"

import { useRouter } from "next/navigation"
import { Heart, Home } from "lucide-react"
import PracticeHeader from "@/components/practice-header"

export default function ThankYouPage() {
  const router = useRouter()

  const handleBackHome = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <PracticeHeader className="mb-8" />

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Thank You Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <Heart size={48} className="text-secondary-1 fill-secondary-1/50" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-main mb-6">Thank You for Your Feedback</h2>

          <p className="text-lg text-secondary-2 mb-8 leading-relaxed">
            We truly appreciate your time and thoughts. Your input helps us grow and improve our service.
          </p>

        </div>
      </div>
    </div>
  )
}
