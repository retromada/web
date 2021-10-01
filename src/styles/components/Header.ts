import { tailed } from 'tailed-js'

export const Link = tailed('a')`
  w-full
  hover:bg-white
  hover:bg-opacity-5
  pointer
  ${''}
`

export const IconBox = tailed('div')`
  w-full
  h-full
  flex
  items-center
  justify-center
  ${''}
`
