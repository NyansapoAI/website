import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { faker } from "@faker-js/faker"
import { Paragraph, Story } from "@/app/(assessment)/assessment/start/types"
import { format, formatDistance, parseISO } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomName() {
  var randomFirstName = faker.person.firstName()
  var randomLastName = faker.person.lastName()

  return { firstName: randomFirstName, lastName: randomLastName }
}

type Text = Paragraph | Story

export const splitIntoTwoSentencesEach = <T>(text: Text[]) => {
  const splitSentences = text.map((item) => {
    if ("paragraph" in item) {
      const sentences = item.paragraph.split(".")
      let splitSentences: string[] = []
      for (let i = 0; i < sentences.length; i += 2) {
        splitSentences.push(sentences.slice(i, i + 2).join(". "))
      }
      return splitSentences.map((item, index) => ({
        paragraph: item,
        index: index,
      })) as T
    } else {
      const sentences = item.story.split(".")
      let splitSentences: string[] = []
      for (let i = 0; i < sentences.length; i += 2) {
        splitSentences.push(sentences.slice(i, i + 2).join(". "))
      }
      return splitSentences.map((item, index) => ({
        story: item,
        index: index,
      })) as T
    }
  })
  return splitSentences.flatMap((item) => item)
}
export const friendlyDate = (date: string) => {
  const d = new Date(date)
  return format(d, "EEE, PPP")
}
export const friendlyLastUpdatedDate = (date: string) => {
  return formatDistance(parseISO(date), Date.now(), {
    addSuffix: true,
  })
}
