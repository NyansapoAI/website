"use client"
import { Button } from "@/components/ui/button"
import Spinner from "@/components/ui/spinner"
import { generateRandomName } from "@/lib/utils"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const GetStartedButton = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleClick = () => {
    const { firstName, lastName } = generateRandomName()
    setLoading(true)
    fetch("https://graphql.nyansapoai.net/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query:
          "mutation CreateOneLiteracyAssessment($data: LiteracyAssessmentCreateInput!) {\r\n  createOneLiteracyAssessment(data: $data) {\r\n    id\r\n    literacyAssessmentContent {\r\n      letters {\r\n        id\r\n        letter\r\n      }\r\n      multipleChoiceQuestions {\r\n        question\r\n        multipleChoiceQuestionAnswers {\r\n          answer\r\n          correct\r\n          id\r\n        }\r\n      }\r\n      words {\r\n        word\r\n        id\r\n      }\r\n      stories {\r\n        id\r\n        story\r\n      }\r\n      paragraphs {\r\n        id\r\n        paragraph\r\n      }\r\n    }\r\n  }\r\n}",
        variables: {
          data: {
            student: {
              create: {
                firstName: firstName,
                gender: "MALE",
                grade: 5,
                lastName: lastName,
                age: 10,
                camp: {
                  connect: {
                    id: 43,
                  },
                },
              },
            },
            literacyAssessmentConfig: {
              create: {
                numberOfWordsThatShouldBeWrongOrAboveToFailWordAssessment: 3,
                numberOfWordsThatShouldBeWrongOrAboveToFailParagraphAssessment: 3,
              },
            },
            assessmentType: "BASELINE",
            camp: {
              connect: {
                id: 43,
              },
            },
            choosenParagraph: 1,
            literacyAssessmentContent: {
              connect: {
                id: 1,
              },
            },
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        let data = json.data
        console.log(data.createOneLiteracyAssessment)
        setLoading(false)
        if (data.createOneLiteracyAssessment)
          router.push(`/assessment/${data.createOneLiteracyAssessment.id}`)
      })
      .catch((error) => {
        console.error("Error:", error)
        setLoading(false)
      })
  }
  return (
    <Button onClick={handleClick}>
      {loading ? <Spinner /> : <span>Get started</span>}
    </Button>
  )
}
export default GetStartedButton
