import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card"
import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import { z } from "zod"
import { sanityClient } from "@/lib/sanity.client"
import { redirect } from "next/navigation"
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nyansapo  AI",
}
export default function Contact() {
  const handleSubmit = async (data: FormData) => {
    "use server"
    let success = false
    const formSchema = z.object({
      firstName: z.string().min(2).max(20),
      lastName: z.string().min(2).max(20),
      email: z.string().email(),
      companyName: z.string().min(2).max(20),
      companyUrl: z.string().url().or(z.literal("").optional()),
      message: z.string().nullable().optional(),
    })
    try {
      const payload = formSchema.parse(Object.fromEntries(data.entries()))
      const resp = await sanityClient.create({
        _type: "contactForm",
        ...payload,
      })
      success = true
    } catch (err) {
      console.log(err)
    }

    success && redirect("/contact/thank-you")
    // console.log(Object.fromEntries(data.entries()))
  }

  return (
    <div className="py-12 2xl:py-20 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <Card className="bg-slate-900  max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Please fill out the form below and we will get back to you as soon
            as possible.
          </CardDescription>
        </CardHeader>

        <form action={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name&#42;</Label>
                  <Input
                    required
                    name="firstName"
                    id="first-name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name&#42;</Label>
                  <Input
                    required
                    name="lastName"
                    id="last-name"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email&#42;</Label>
                <Input
                  required
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-name">Company name&#42;</Label>
                <Input
                  required
                  name="companyName"
                  id="company-name"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-url">Company website</Label>
                <Input
                  name="companyUrl"
                  id="company-url"
                  type="url"
                  placeholder="Enter your company website URL"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
