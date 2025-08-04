"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MessageSquare } from "lucide-react"
import PracticeHeader from "@/components/practice-header"

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("")
  const router = useRouter()

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!feedback.trim()) return

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbykfqFrzloEHHtQ2oYck2yTGno4c4uaeSnEcCSmu2pGEVMVznfJ7_dgjgNoPuBxmtO21w/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ feedback }).toString(),
    })

    const result = await res.json()
    console.log("Google Sheets response:", result)

    router.push("/thank-you")
  } catch (error) {
    console.error("Error submitting feedback:", error)
  }
}


  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <PracticeHeader className="mb-8" />

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Feedback Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-4">
              <MessageSquare size={32} className="text-secondary-1" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-main mb-6">We'd love to hear how we can improve</h2>

          <p className="text-lg text-secondary-2 mb-8 leading-relaxed">
            Please let us know what we could have done better. Your feedback helps us provide the best care possible.
          </p>

          {/* Feedback Form */}
          <form
            action="https://formsubmit.co/marketing@southsideendodontics.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="text-left">
              <textarea
                value={feedback}
                name="feedback"
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts with us..."
                rows={6}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-secondary-1 focus:outline-none transition-colors resize-none text-secondary-2"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!feedback.trim()}
              className="w-full bg-main hover:bg-opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-1 focus:ring-opacity-50 disabled:transform-none"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
