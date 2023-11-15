import React, { SyntheticEvent, useEffect, useState } from 'react'
import IconButton from '@components/buttons/IconButton'
import Loader from '@components/Loader'
import { EditResult } from '../../../EditExpandResult'
import {
  LettersFragmentFragment,
  NumberRecognitionFragmentFragment,
  WordResultsFragmentFragment,
} from '@generated/graphql/graphql'
import { Transition } from '@headlessui/react'
import { graphql } from '@generated/graphql'
import { useMutation, useQuery } from 'urql'
import EmptyContent from '@components/global/EmptyContent'
import { EditPredictionForm } from '../../../EditPredictionForm'
import ErrorPage from '@components/global/ErrorPage'
import toast from 'react-hot-toast'
import AudioPlayer from '../../../AudioPlayer'

export type ResultInfoProps = {
  result: WordResultsFragmentFragment
}
const NumberRecognitionModelCorrectionMutation = graphql(`
  mutation UpdateOneNumberRecognitionResult(
    $data: NumberRecognitionResultUpdateInput!
    $where: NumberRecognitionResultWhereUniqueInput!
  ) {
    updateOneNumberRecognitionResult(data: $data, where: $where) {
      answerFromModifiedModelPrediction
      answerFromOriginalModelPrediction
      correctAccordingToModelPrediction {
        correct
        correctAccordingToModifiedModelPrediction
        correctAccordingToOriginalModelPrediction
      }
      id
      numberRecognition {
        number
      }
      urlOfRecordedVoice
    }
  }
`)
const NumberRecognitionInfoPanelQuery = graphql(`
  query NumberRecognitionResult(
    $where: NumberRecognitionResultWhereUniqueInput!
  ) {
    numberRecognitionResult(where: $where) {
      answerFromModifiedModelPrediction
      answerFromOriginalModelPrediction
      correctAccordingToModelPrediction {
        correct
        correctAccordingToModifiedModelPrediction
        correctAccordingToOriginalModelPrediction
      }
      id
      numberRecognition {
        number
      }
      urlOfRecordedVoice
    }
  }
`)

export default function NumberRecognitionPanel({ result }: ResultInfoProps) {
  const [editedPrediction, setEditedPrediction] = useState('')
  const [{ fetching: Mfetching, error: Merror }, updateModelPrediction] =
    useMutation(NumberRecognitionModelCorrectionMutation)
  const [{ data, error, fetching }, refetchQuery] = useQuery({
    query: NumberRecognitionInfoPanelQuery,
    variables: {
      where: { id: result.id },
    },
  })
  const [edit, setEdit] = useState(false)

  const handleEdit = (text: string) => {
    if (text) {
      setEdit((edit) => !edit)
      setEditedPrediction(text)
    }
  }

  const handleFinishedEditing = (e: SyntheticEvent) => {
    e.preventDefault()
    if (!editedPrediction) return
    const variables = {
      where: {
        id: result.id,
      },
      data: {
        answerFromModifiedModelPrediction: {
          set: editedPrediction,
        },
      },
    }

    updateModelPrediction(variables).then((res) => {
      if (res.data?.updateOneNumberRecognitionResult) {
        toast.success(`${result.wordProblem.problemAnswer} prediction updated`)
        setEdit((edit) => !edit)
      }
    })
    // setEditedPrediction(text);
  }
  if (fetching) return <Loader />
  if (error) return <ErrorPage error={error} />
  if (data && data.numberRecognitionResult)
    return (
      <div className='relative bg-slate-100 z-50  flex flex-col gap-3 dark:bg-slate-800 rounded-xl text-dark dark:text-slate-100 shadow-lg p-4'>
        <p className='flex gap-2 items-center'>
          <span className='text-sm'>Correct Answer</span>
          <span className='text-xl font-semibold'>
            {result.wordProblem.problemAnswer}
          </span>
        </p>
        <div className='flex flex-col gap-2 '>
          <div className='flex gap-3 justify-between items-center'>
            <p className='flex gap-2 items-center'>
              <span className='text-sm'>Model Prediction</span>
              <span className='text-xl font-semibold'>
                {data.numberRecognitionResult.answerFromOriginalModelPrediction}
              </span>
            </p>
            <EditResult
              correctModelCallback={() => {
                if (
                  data.numberRecognitionResult
                    ?.answerFromModifiedModelPrediction
                ) {
                  handleEdit(
                    data.numberRecognitionResult
                      .answerFromModifiedModelPrediction
                  )
                } else {
                  if (data.numberRecognitionResult) {
                    handleEdit(
                      data.numberRecognitionResult
                        .answerFromOriginalModelPrediction
                    )
                  }
                }
              }}
            />
          </div>
          {data.numberRecognitionResult.answerFromModifiedModelPrediction && (
            <p className='flex gap-2 items-center'>
              <span className='text-sm'>Updated Model Prediction</span>
              <span className='text-xl font-semibold'>
                {data.numberRecognitionResult.answerFromModifiedModelPrediction}
              </span>
            </p>
          )}
        </div>
        <div className=''>
          {data.numberRecognitionResult &&
          data.numberRecognitionResult.urlOfRecordedVoice ? (
            <AudioPlayer
              audioLink={data.numberRecognitionResult.urlOfRecordedVoice}
            />
          ) : (
            <span className='text-rose-400 text-sm'>audio not available</span>
          )}
        </div>

        {edit && (
          <Transition
            show={edit}
            className='relative z-20'
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <EditPredictionForm
              error={Merror}
              fetching={Mfetching}
              setEditedPrediction={setEditedPrediction}
              editedPrediction={editedPrediction}
              handleFinishedEditing={handleFinishedEditing}
              setEdit={setEdit}
            />
          </Transition>
        )}
        {!data.numberRecognitionResult.correctAccordingToModelPrediction && (
          <IconButton className='flex shadow-md rounded-lg text-dark active:outline-green-400 bg-accent2 gap-1 p-2 justify-center items-center'>
            {/* <Icon icon={CheckIcon} color='stone' /> */}
            <span>Mark as correct</span>
          </IconButton>
        )}
      </div>
    )
  return (
    <div className='relative bg-slate-100 z-50  flex flex-col gap-3 dark:bg-slate-800 rounded-xl text-dark dark:text-slate-100 shadow-lg p-4'>
      <EmptyContent
        caption='no information found'
        callback={() => refetchQuery({ requestPolicy: 'network-only' })}
      />
    </div>
  )
}
