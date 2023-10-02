import React from "react"
import { Assessment } from "../Assessment"
import { LiteracyAssessment } from "./types"

type Props = {}

const fetchAssessment = async (id: string) => {
  return fetch("https://graphql.nyansapoai.net/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Content($where: LiteracyAssessmentContentWhereUniqueInput!) {
        literacyAssessmentContent(where: $where) {
          words {
            id
            word
            literacyAssessmentContentId
          }
          paragraphs {
            id
            paragraph
            literacyAssessmentContentId
          }
          stories {
            id
            story
            literacyAssessmentContentId
          }
          letters {
            letter
            literacyAssessmentContentId
            id
          }
          multipleChoiceQuestions {
            id
            literacyAssessmentContentId
            question
            multipleChoiceQuestionAnswers {
              answer
              id
            }
          }
          id
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
      (response) => response.json() as Promise<{ data: LiteracyAssessment }>
    )
    .then((data) => data)
    .catch((error) => console.log(error))
}

export default async function page({}: Props) {
  const resp = await fetchAssessment("1")
  console.log(resp)

  return (
    <div className="px-8 md:px-16 py-8   mx-auto max-w-[1920px]">
      {resp && resp.data.literacyAssessmentContent ? (
        <Assessment literacyAssessment={resp.data.literacyAssessmentContent} />
      ) : (
        <p className="text-lg p-4 text-destructive">Assessment not found</p>
      )}
    </div>
  )
}
