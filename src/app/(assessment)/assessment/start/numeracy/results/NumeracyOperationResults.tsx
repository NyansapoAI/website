import React from "react"
import * as _ from "lodash"
import clsx from "clsx"
import Image from "next/image"
import { NumeracyAssessmentResponse } from "../../types"

type Props = {
  data: NumeracyAssessmentResponse["numeracyAssessment"]["numeracyOperationResults"]
  title: string
}

export default function NumeracyOperationResults({ data, title }: Props) {
  const groupedData = _.groupBy(data, "numeracyOperation.mathOperator")

  return (
    <div className="p-4">
      <h1 className="text-xl ">{title}</h1>
      <div className="flex flex-col gap-4 divide-y-2 divide-slate-300 dark:divide-slate-600 w-full items-start p-4 ">
        {Object.values(groupedData).map((group, i) => (
          <div key={i} className="flex w-full flex-col py-2 gap-2">
            <h2>{Object.keys(groupedData)[i]}</h2>
            <div className="flex gap-2 flex-wrap">
              {group.map((result, i) => (
                <Operation key={result.id} result={result} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
type OperationProps = {
  result: NumeracyAssessmentResponse["numeracyAssessment"]["numeracyOperationResults"][number]
}
const Operation = ({ result }: OperationProps) => {
  const [edit, setEdit] = React.useState(false)

  function getOperatorIcon(operator: string) {
    switch (operator) {
      case "ADDITION":
        return <p>+</p>
      case "SUBTRACTION":
        return <p>-</p>

      case "MULTIPLICATION":
        return <p>x</p>
      case "DIVISION":
        return <p>/</p>
      default:
        return <p>?</p>
    }
  }

  const operator = getOperatorIcon(result.numeracyOperation.mathOperator)
  // const markWrong = async () => {
  //   const variables = {
  //     where: {
  //       id: result.id,
  //     },
  //     data: {
  //       answerFromModifiedModelPrediction: {
  //         set: result.answerFromOriginalModelPrediction,
  //       },
  //     },
  //   }
  //   try {
  //     let res = await updateModelPrediction(variables)
  //     if (res.data.updateOneNumeracyOperationResult) {
  //       toast.success('Question Marked correct')
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     toast.error('Something went wrong')
  //   }

  //   setEdit((edit) => !edit)
  // }

  return (
    <div
      key={result.id}
      className="flex flex-col p-2 items-center justify-end gap-2"
    >
      <div
        className={clsx(
          "flex items-center gap-2",
          result.numeracyOperation.mathOperator !== "DIVISION" && "flex-col"
        )}
      >
        <div
          className={clsx(
            "flex  p-2  gap-2 items-end ",
            result.numeracyOperation.mathOperator !== "DIVISION" &&
              "flex-col  border-b-4 border-slate-300 dark:border-slate-500 "
          )}
        >
          <p className="text-2xl font-semibold">
            {result.numeracyOperation.firstNumber}
          </p>
          <div className="flex gap-2">
            <p className="text-2xl font-semibold">{operator}</p>
            <p className="text-2xl font-semibold">
              {result.numeracyOperation.secondNumber}
            </p>
          </div>
        </div>
        <p
          className={clsx(
            "text-2xl font-semibold",
            result.numeracyOperation.mathOperator !== "DIVISION"
              ? "hidden"
              : "block"
          )}
        >
          =
        </p>
        <p
          className={clsx(
            "text-2xl font-semibold",
            result.correctAccordingToModelPrediction.correct
              ? "text-lime-600 dark:text-lime-500"
              : "text-rose-500"
          )}
        >
          {result.numeracyOperation.correctAnswer}
        </p>
      </div>
      {result.urlOfScreenshot && (
        <Image
          src={result.urlOfScreenshot}
          width={100}
          className="border-2 rounded-md p-2"
          height={200}
          alt="written answer"
        ></Image>
      )}
    </div>
  )
}
