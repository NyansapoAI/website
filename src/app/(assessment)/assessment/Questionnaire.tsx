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
import { assessmentVariants } from "./start/literacy/Assessment"
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
import { useContext } from "react"
import { AssessmentContext, Gender } from "./start/literacy/AssessmentContext"
import axios from "axios"
import { NumeracyAssessmentContext } from "./start/numeracy/NumeracyAssessmentContext"
import { numeracyAssessmentVariants } from "./start/numeracy/NumeracyAssessments"

const formSchema = z.object({
  email: z.string().optional(),
  experience: z.string(),
  studentLink: z.string().optional(),
  assessmentType: z.string().optional(),
  feedback: z.string().optional(),
  subscribe: z.boolean().default(true).optional(),
})
type Props = {
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
  assessmentType: "numeracy" | "literacy"
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
export function Questionnaire({ setCurrentItem, assessmentType }: Props) {
  const { setAssessmentId, setFeedbackId, assessmentInput } =
    useContext(AssessmentContext)
  const {
    setAssessmentId: setNassessmentId,
    setFeedbackId: setNfeedbackId,
    assessmentInput: NassessmentInput,
  } = useContext(NumeracyAssessmentContext)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      feedback: "",
      // recommend: "someone@example.com",
      subscribe: true,
    },
  })
  const { mutate: saveAssessment, isLoading: processing } = useMutation({
    mutationFn: async () => {
      if (assessmentType === "numeracy") {
        return axios
          .post(
            process.env.NEXT_PUBLIC_API_URL!,
            {
              query: `mutation CreateOneNumeracyAssessment($data: NumeracyAssessmentCreateInput!, $numeracyAssessmentConfigInput: NumeracyAssessmentConfigInput!) {
    createOneNumeracyAssessment(data: $data) {
      id
      studentId
      dynamicallyGeneratedLearningLevel(numeracyAssessmentConfigInput: $numeracyAssessmentConfigInput) {
        dynamicallyGeneratedLearningLevel
      }
    }
  }`,
              variables: {
                ...NassessmentInput,
                data: {
                  ...NassessmentInput.data,
                  student: {
                    connectOrCreate: {
                      where: {
                        firstName_lastName_campId: {
                          campId: parseInt(
                            process.env.NEXT_PUBLIC_NUMERACY_CAMP_ID!
                          ),
                          firstName: form.getValues("email") ?? "Anonymous",
                          lastName: "",
                        },
                      },
                      create: {
                        age: 10,
                        camp: {
                          connect: {
                            id: parseInt(
                              process.env.NEXT_PUBLIC_NUMERACY_CAMP_ID!
                            ),
                          },
                        },
                        gender: Gender.MALE,
                        lastName: "",
                        firstName: form.getValues("email") ?? "Anonymous",
                        grade: 4,
                      },
                    },
                  },
                },
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => response.data)
      }

      return axios
        .post(
          process.env.NEXT_PUBLIC_API_URL!,
          {
            query:
              "mutation CreateOneLiteracyAssessment($data: LiteracyAssessmentCreateInput!, $literacyAssessmentConfigInput: LiteracyAssessmentConfigInput!) {\r\n  createOneLiteracyAssessment(data: $data) {\r\n id\r\n     dynamicallyGeneratedLearningLevel(literacyAssessmentConfigInput: $literacyAssessmentConfigInput) {\r\n      dynamicallyGeneratedLearningLevel\r\n  }\r\n studentId \r\n  }\r\n}",
            variables: {
              data: {
                ...assessmentInput,
                student: {
                  create: {
                    age: 10,
                    camp: {
                      connect: {
                        id: parseInt(process.env.NEXT_PUBLIC_LITERACY_CAMP_ID!),
                      },
                    },
                    gender: Gender.MALE,
                    lastName: "",
                    firstName:
                      form.getValues("email") ?? "Anonymous-" + Math.random(),
                    grade: 4,
                  },
                },
              },
              literacyAssessmentConfigInput: {},
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => response.data)
    },
    onSuccess: (data) => {
      if (assessmentType === "numeracy") {
        setNassessmentId(data.data.createOneNumeracyAssessment.id)
        saveQuestionnaire({
          ...form.getValues(),
          assessmentType: "Numeracy",
          studentLink: `https://dashboard.nyansapoai.net/Test%20Organization%20For%20Training/camps/Web%20Numeracy%20Assessments/students/${
            data.data.createOneNumeracyAssessment.studentId
          }?campId=${process.env.NEXT_PUBLIC_NUMERACY_CAMP_ID!}`,
        })
      } else if (assessmentType === "literacy") {
        setAssessmentId(data.data.createOneLiteracyAssessment.id)
        saveQuestionnaire({
          ...form.getValues(),
          assessmentType: "Literacy",
          studentLink: `https://dashboard.nyansapoai.net/Test%20Organization%20For%20Training/camps/Web%20Assessments/students/${
            data.data.createOneLiteracyAssessment.studentId
          }?campId=${process.env.NEXT_PUBLIC_LITERACY_CAMP_ID!}`,
        })
      }
    },
    onError: (error) => {
      console.log("error", error)
    },
  })
  const { mutate: saveQuestionnaire, isLoading } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      if (data.subscribe && data.email) {
        const users = await sanityClient.fetch(
          `*[_type == "subscribers" && email == $email]`,
          {
            email: data.email,
          }
        )
        if (users.length < 1) {
          await sanityClient.create({
            _type: "subscribers",
            email: data.email,
          })
        }

        const feedback = await sanityClient.create({
          _type: "feedback",
          email: data.email,
          studentLink: data.studentLink,
          experience: data.experience,
          feedback: data.feedback,
        })
        return feedback
      } else {
        const feedback = await sanityClient.create({
          _type: "feedback",
          email: data.email ?? "Anonymous",
          studentLink: data.studentLink,
          experience: data.experience,
          feedback: data.feedback,
        })
        return feedback
      }
    },
    onSuccess: (data) => {
      if (assessmentType === "numeracy") {
        setCurrentItem(numeracyAssessmentVariants.results)
        setNfeedbackId(data?._id)
      } else if (assessmentType === "literacy") {
        setFeedbackId(data?._id)

        setCurrentItem(assessmentVariants.results)
      }
    },
    onError: (err: Error) => {
      toast.error(err.message)
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveAssessment()
  }
  return (
    <Card className="bg-transparent shadow-none mx-auto max-w-fit">
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
                      className="flex flex-wrap gap-4 items-center space-y-1 space-x-2"
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
              {isLoading || processing ? <Spinner /> : "View Results"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
