/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hXQpoKNSpFw
 */
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full flex flex-col gap-8 lg:gap-16 mt-16 py-12 md:py-24  lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl my-4 font-semibold">For Organizations</h1>
        <div className="grid gap-6 text-primary-foreground md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center space-y-4 p-6 bg-green-100 rounded-lg">
            <h3 className="text-2xl font-bold">Free tier</h3>
            <p className="text-4xl lg:text-5xl font-bold">$0</p>
            <p className="text-md font-semibold">Per child/month</p>
            <p className="text-md text-center font-semibold">
              This free tier will allow an organization to adopt the Nyansapo AI
              platform to implement FLN programs with three schools for at least
              one school term (up to three months).
            </p>

            <ul className="flex flex-col flex-1 space-y-2  py-4 text-left">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Up to 3 Camps </span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Up to 9 Assessments per child</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Up to 6 Custom Session Generations</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>300 Children</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>9 Teachers </span>
              </li>
            </ul>

            <a
              href="https://platform.nyansapoai.net/auth/signup"
              target={"_blank"}
              className={cn(buttonVariants({ variant: "default" }), "w-full")}
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 bg-yellow-100 rounded-lg">
            <h3 className="text-2xl font-bold">FLN at Scale</h3>
            <p className="text-4xl lg:text-5xl font-bold">$0.99</p>
            <p className="text-md font-semibold">
              Per child/month (Discounted from $4.99)
            </p>
            <p className="text-md font-semibold">
              To scale FLN with implementation partners.
            </p>
            <ul className="flex flex-col flex-1 space-y-2 py-4 text-left">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Schools</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Camps</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Assessments</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Custom Session Generation</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Children</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Teachers</span>
              </li>
            </ul>
            <a
              href="https://platform.nyansapoai.net/auth/signup"
              target={"_blank"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full bg-accent2 hover:bg-accent2/90 text-secondary-foreground"
              )}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl my-4 font-semibold">For Schools</h1>

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center space-y-4 p-6 text-primary-foreground bg-green-100 rounded-lg">
            <h3 className="text-2xl font-bold">Free tier</h3>
            <p className="text-4xl lg:text-5xl font-bold">$0</p>
            <p className="text-md font-semibold">Per child/month</p>
            <p className="text-md text-center font-semibold">
              This free tier will allow a school to adopt the Nyansapo AI
              platform and implement FLN for a whole school year.
            </p>
            <ul className="flex flex-col flex-1 space-y-2  py-4 text-left">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>3 camps</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>9 assessments per child</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>6 custom session generations</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>300 children</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>9 teachers</span>
              </li>
            </ul>
            <a
              href="https://platform.nyansapoai.net/auth/signup"
              target={"_blank"}
              className={cn(buttonVariants({ variant: "default" }), "w-full")}
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 text-primary-foreground bg-yellow-100 rounded-lg">
            <h3 className="text-2xl font-bold">FLN at Scale</h3>
            <p className="text-4xl lg:text-5xl font-bold">$0.99</p>
            <p className="text-md font-semibold">
              Per child/month (Discounted from $4.99)
            </p>
            <p className="text-md font-semibold">
              Incorporation of Nyansapo FLN into schools at scale
            </p>

            <ul className="flex flex-col flex-1 space-y-2 py-4 text-left">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Camps</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Assessments</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Custom Session Generation</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Children</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span>Unlimited Teachers</span>
              </li>
            </ul>
            <a
              href="https://platform.nyansapoai.net/auth/signup"
              target={"_blank"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full bg-accent2 hover:bg-accent2/90 text-secondary-foreground"
              )}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
