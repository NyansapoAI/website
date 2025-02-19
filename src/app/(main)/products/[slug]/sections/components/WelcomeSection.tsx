import React from "react"
import { MessageCircle } from "lucide-react"

interface WelcomeSectionProps {
  ctaText: string
  title: string
  onGetStarted: () => void
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  ctaText,
  title,
  onGetStarted,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-yellow-500">{title}</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-xl text-gray-700 font-semibold">
            Reach out to us
          </h2>
        </div>
        <p className="text-gray-700">{ctaText}</p>
        <button
          onClick={onGetStarted}
          className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors"
        >
          I&apos;m Interested!
        </button>
      </div>
    </div>
  )
}

export default WelcomeSection
