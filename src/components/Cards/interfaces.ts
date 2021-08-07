import { Howl } from 'howler'


export type ExperienceProps = {
  company: string
  date: string
  isAnimated?: boolean
  stack?: string
  bgColor: string
  job: string
  logo: string
}

export interface TechnologieProps {
  active?: boolean
  bgColor: string
  companies: string[]
  language: string
  logo: string
}

export interface EducationProps {
  diplomaName: string
  logo: string
  bgColor: string
  location: string
  onClick(): void
  date: string
}

export interface SongsInterface {
  [title: string]: Howl;
}