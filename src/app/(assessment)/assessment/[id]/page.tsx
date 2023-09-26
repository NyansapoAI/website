import React from "react"
import { Assessment } from "../Assessment"
import { LiteracyAssessmentData } from "./types"

type Props = {
  params: {
    id: string
  }
}

const fetchAssessment = async (id: string) => {
  return fetch("https://graphql.nyansapoai.net/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query LiteracyAssessment($where: LiteracyAssessmentWhereUniqueInput!) {
          literacyAssessment(where: $where) {
            id
            literacyAssessmentContent {
              letters {
                id
                letter
              }
              multipleChoiceQuestions {
                question
                id
                multipleChoiceQuestionAnswers {
                  answer
                  correct
                  id
                }
              }
              words {
                word
                id
              }
              stories {
                id
                story
              }
              paragraphs {
                id
                paragraph
              }
            }
          }
        }`,
      variables: {
        where: {
          id: parseInt(id),
        },
      },
    }),
  })
    .then(
      (response) => response.json() as Promise<{ data: LiteracyAssessmentData }>
    )
    .then((data) => data)
    .catch((error) => console.log(error))
}

export default async function page({ params: { id } }: Props) {
  const resp = await fetchAssessment(id)

  return (
    <div className="px-8 md:px-16 py-8   mx-auto max-w-[1920px]">
      {resp && resp.data.literacyAssessment ? (
        <Assessment literacyAssessment={resp.data.literacyAssessment} />
      ) : (
        <p className="text-lg p-4 text-destructive">Assessment not found</p>
      )}
    </div>
  )
}
