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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useContext } from "react"
import { AssessmentContext } from "./AssessmentContext"

const formSchema = z.object({
  // recommend: z.string().feedbackId(),
  postAssessmentFeedback: z.string().optional(),
  agree: z.string(),
  adopt: z.string(),
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
const adoption = [
  {
    value: "Strongly agree",
    label: "Strongly Agree",
  },
  {
    value: "Agree",
    label: "Agree",
  },
  {
    value: "disagree",
    label: "Disagree",
  },
  {
    value: "Strongly disagree",
    label: "Strongly Disagree",
  },
]
const agree = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
]
export function ResultsQuestionnaire({ setCurrentItem }: Props) {
  const { feedbackId, setFeedbackId } = useContext(AssessmentContext)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postAssessmentFeedback: "",
      adopt: "",
      // recommend: "someone@example.com",
    },
  })
  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      await sanityClient
        .patch(feedbackId)
        .set({
          _type: "feedback",
          agree: data.agree ? "yes" : "No",
          adopt: data.adopt,
          postAssessmentFeedback: data.postAssessmentFeedback,
        })
        .commit()
    },
    onSuccess: () => {
      toast.success("Thank you for your feedback")
    },
    onError: (err: Error) => {
      console.log(err)
      toast.error(err.message)
    },
  })
  const handleBack = () => {
    setCurrentItem(assessmentVariants.results)
  }
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values)
  }
  return (
    <Card className="bg-transparent shadow-none border-none">
      <CardHeader>
        <CardTitle>Assessment Survey</CardTitle>
        <CardDescription>please fill the form below</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem className="md:space-x-3 space-y-2 ">
                  <FormLabel className="text-md ">
                    Do you agree with the assessment results?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex gap-4 items-center space-y-0 space-x-2"
                    >
                      {agree.map((item, i) => (
                        <FormItem
                          key={i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                    {/* <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    /> */}
                  </FormControl>
                  <div className="space-y-1 leading-none"></div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adopt"
              render={({ field }) => (
                <FormItem className="md:space-x-3 space-y-4 ">
                  <FormLabel className="text-md ">
                    Would you consider adopting this platform for your
                    accelerated learning programs?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex flex-wrap gap-6 lg:items-center space-y-0 md:space-x-2"
                    >
                      {adoption.map((item) => (
                        <FormItem
                          key={item.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <div className="space-y-1 leading-none"></div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postAssessmentFeedback"
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
            <div className="flex items-center gap-6">
              <Button variant="outline" onClick={handleBack}>
                Back to Results
              </Button>
              <Button type="submit" className="max-w-fit" disabled={isLoading}>
                {isLoading ? <Spinner /> : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
