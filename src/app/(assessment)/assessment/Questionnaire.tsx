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

const formSchema = z.object({
  email: z.string().email(),
  subscribe: z.boolean().default(true).optional(),
})
type Props = {
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}

export function Questionnaire({ setCurrentItem }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subscribe: true,
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-blue-800/10 max-w-[250px]"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subscribe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>Send me News and Updates</FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : "View Results"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
