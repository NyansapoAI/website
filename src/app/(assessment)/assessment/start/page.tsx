"use client";

import React from "react"
import { Assessment } from "./literacy/Assessment"
import { LiteracyAssessment } from "./types"
import Link from "next/link"

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
              correct
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

  return (
    <div className="sm:px-8  py-6 md:py-8 mx-auto max-w-[1920px]">
      <h2 className="text-2xl font-bold text-center">Choose Assessment type</h2>
      <div className="flex gap-6 justify-center items-center pt-8 md:pt-16 flex-wrap">
        <Link
          className="p-8 xl:p-12 hover:scale-105 duration-200 text-xl font-bold rounded-md border border-primary "
          href="/assessment/start/literacy"
        >
          Literacy Assessment
        </Link>
        <Link
          className="p-8 xl:p-12 hover:scale-105 duration-200 text-xl font-bold rounded-md border-primary border"
          href="/assessment/start/numeracy"
        >
          Numeracy Assessment
        </Link>
      </div>
      {/* {resp && resp.data.literacyAssessmentContent ? (
        <Assessment literacyAssessment={resp.data.literacyAssessmentContent} />
      ) : (
        <p className="text-xl p-4 text-destructive">
          Something went wrong, please refresh the page
        </p>
      )} */}
    </div>
  )
}
