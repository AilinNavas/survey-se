"use client"

import { useRouter } from "next/navigation"
import { ExternalLink, Star, Facebook } from "lucide-react"
import PracticeHeader from "@/components/practice-header"

export default function ReviewPage() {
  const router = useRouter()

  const handleGoogleReview = () => {
    // Open Google review link in new tab
    window.open("https://g.page/r/CQMrOM1YvxidEBM/review", "_blank")
    // Then redirect to thank you page
    router.push("/thank-you")
  }

  const handleFacebookReview = () => {
    // Open Facebook review link in new tab
    window.open("https://www.facebook.com/SouthsideEndodontics/reviews", "_blank")
    // Then redirect to thank you page
    router.push("/thank-you")
  }

  const handleYelpReview = () => {
    // Open Yelp review link in new tab
    window.open("https://www.yelp.com/biz/southside-endodontics-fort-worth", "_blank")
    // Then redirect to thank you page
    router.push("/thank-you")
  }

  const handleNoThanks = () => {
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <PracticeHeader className="mb-8" />

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-secondary-2/10 rounded-full p-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-main mb-6">
            Thank you! We're so glad you had a great experience.
          </h2>

          <p className="text-lg text-secondary-2 mb-8 leading-relaxed">
            Would you mind sharing your feedback online? Choose your preferred platform below. It only takes a minute
            and helps our practice grow.
          </p>

          {/* Action Buttons */}
          <div className="space-y-6">
            {/* Primary Google Review Button */}
            <button
              onClick={handleGoogleReview}
              className="w-full bg-main hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-1 focus:ring-opacity-50 flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              Leave a Google Review
            </button>

            {/* Divider with "or" */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-secondary-2 font-medium text-sm uppercase tracking-wide">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Secondary Platform Options */}
            <div className="space-y-3">
              <p className="text-sm text-secondary-2 mb-3">Choose another platform:</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={handleFacebookReview}
                  className="w-full bg-gray-50 hover:bg-[#1877F2]/50 hover:text-white text-[#1877F2] border border-[#1877F2] font-medium py-3 px-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-opacity-50 flex items-center justify-center gap-2 text-sm"
                >
                  <Facebook size={16} />
                  Facebook
                </button>

                <button
                  onClick={handleYelpReview}
                  className="w-full bg-gray-50 hover:bg-[#C1272D]/50 hover:text-white text-[#C1272D] border border-[#C1272D] font-medium py-3 px-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C1272D] focus:ring-opacity-50 flex items-center justify-center gap-2 text-sm"
                >
                <img src="/yelp.svg" alt="Yelp" className="w-4 h-4 mr-2 " />
                  Yelp
                </button>
              </div>
            </div>

            {/* No Thanks Button */}
            <button
              onClick={handleNoThanks}
              className="w-full bg-gray-100 hover:bg-gray-200 text-secondary-2 font-semibold py-4 px-8 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 mt-8"
            >
              No, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
