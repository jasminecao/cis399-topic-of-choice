import { config } from '@my/ui'
import { createAnimations } from '@tamagui/animations-css'
import { createTamagui } from 'tamagui'


export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
