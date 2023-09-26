import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { faker } from "@faker-js/faker"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomName() {
  var randomFirstName = faker.person.firstName()
  var randomLastName = faker.person.lastName()

  return { firstName: randomFirstName, lastName: randomLastName }
}
