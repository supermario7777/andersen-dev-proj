import { Stat } from './stats'

export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  image: string
  stats: Stat[]
}
