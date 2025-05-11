export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  image: string
  stats: {
    name: string
    value: number
  }[]
}
