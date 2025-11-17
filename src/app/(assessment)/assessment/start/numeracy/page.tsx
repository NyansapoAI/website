import React from "react"
import CountAndMatch from "./countAndMatch"
import NumeracyAssessments from "./NumeracyAssessments"

type Props = {}

// ADD THIS LINE (this prevents Vercel build caching issues)
const fetchNumeracyAssessmentContent = async (id: number) => {
  return fetch("https://graphql.nyansapoai.net/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",        // ← ADD THIS
    body: JSON.stringify({
      query: `query NumeracyAssessmentContent($where: NumeracyAssessmentContentWhereUniqueInput!) {
        numeracyAssessmentContent(where: $where) {
          countAndMatchs {
            id
            number
          }
          id
          numberRecognitions {
            number
            id
          }
          numeracyOperations {
            firstNumber
            mathOperator
            secondNumber
            correctAnswer
            id
          }
          wordProblems {
            id
            problem
            problemAnswer
          }
        }
      }`,
      variables: {
        where: {
          id: id,
        },
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error))
}

export default async function page({}: Props) {
  const resp = await fetchNumeracyAssessmentContent(1)

  return resp?.data?.numeracyAssessmentContent ? (    // ← Fixed the unsafe chaining
    <div className="sm:px-8 md:px-16 py-2 mx-auto max-w-[1920px]">
      <NumeracyAssessments data={resp.data.numeracyAssessmentContent} />
    </div>
  ) : (
    <p className="text-xl text-center text-destructive">
      Something went wrong, please refresh the page
    </p>
  )
}