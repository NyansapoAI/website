"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { sanityClient } from "@/lib/sanity.client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { assessmentVariants } from "./Assessment"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import Spinner from "@/components/ui/spinner"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string().optional(),
  experience: z.string(),
  // recommend: z.string().email(),
  feedback: z.string().optional(),
  subscribe: z.boolean().default(true).optional(),
})
type Props = {
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
const experience = [
  {
    value: "fantastic",
    label: "Fantastic",
  },
  {
    value: "good",
    label: "Good",
  },
  {
    value: "neutral",
    label: "Neutral",
  },
  {
    value: "bad",
    label: "Bad",
  },
  {
    value: "very bad",
    label: "Very Bad",
  },
]
export function Questionnaire({ setCurrentItem }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      feedback: "",
      // recommend: "someone@example.com",
      subscribe: false,
    },
  })
  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      if (data.subscribe) {
        const users = await sanityClient.fetch(
          `*[_type == "subscribers" && email == $email]`,
          {
            email: data.email,
          }
        )
        if (users.length > 0) {
          return
        }

        await sanityClient.create({
          _type: "subscribers",
          email: data.email,
        })
        await sanityClient.create({
          _type: "feedback",
          email: data.email,
          experience: data.experience,
          feedback: data.feedback,
        })
      } else {
        await sanityClient.create({
          _type: "feedback",
          email: "Anonymous",
          experience: data.experience,
          feedback: data.feedback,
        })
      }
    },
    onSuccess: () => {
      setCurrentItem(assessmentVariants.results)
    },
    onError: (err: Error) => {
      console.log(err)
      toast.error(err.message)
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    mutate(values)
  }
  return (
    <Card className="bg-transparent shadow-none border-none">
      <CardHeader>
        <CardTitle>Finishing up</CardTitle>
        <CardDescription>
          please fill the form below to view your results
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-blue-500/10 border-blue-800 max-w-[250px]"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We will only keep your email if you allow us to send you
                    news and updates
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subscribe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      Send me News and Important Updates
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-md">
                    What was your overall experience with assessment...
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4 items-center space-y-1 space-x-2"
                    >
                      {experience.map((expectation) => (
                        <FormItem
                          key={expectation.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={expectation.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {expectation.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">
                    What would you like us to improve?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="feedback"
                      className="resize-none max-w-[550px] bg-blue-500/10 border-blue-800"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="recommend"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What would you like us to improve in the assessment
                  </FormLabel>
                  <FormControl>
                    <Input className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button type="submit" className="max-w-fit" disabled={isLoading}>
              {isLoading ? <Spinner /> : "View Results"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
