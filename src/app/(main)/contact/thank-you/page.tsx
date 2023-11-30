import { CheckCircle } from "lucide-react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kSYZwRXwlya
 */
export default function Thankyou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Thank You!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your message has been received. We will get back to you soon.
        </p>
        <div>
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        </div>
      </div>
    </div>
  )
}
