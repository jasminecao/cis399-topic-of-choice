import { Button, Paragraph, YStack } from '@my/ui'
import { H1, Heading, Image, Square } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const [coords, setCoords] = React.useState({ x: 0, y: 0 })
  const [rotate, setRotate] = React.useState(0)
  const [scale, setScale] = React.useState(1)

  const link = useLink({
    href: '/',
  })

  React.useEffect(() => {
    const handleWindowMouseMove = (event) => {
      const centerX = screen.width / 2
      const centerY = screen.height / 2
      setCoords({
        x: event.clientX - centerX,
        y: event.clientY - centerY,
      })
      setScale(Math.random() * 0.5 + 0.5)
      console.log(rotate)
      setRotate((rotate) => rotate + 450)
    }
    window.addEventListener('click', handleWindowMouseMove)

    return () => {
      window.removeEventListener('click', handleWindowMouseMove)
    }
  }, [])

  return (
    <YStack jc="space-between" ai="center" p="$11" space fullscreen>
      <H1>{`Hi ${id}!`}</H1>
      <Square
        animation={'bouncy'}
        size={500}
        hoverStyle={{
          scale: 1.3,
        }}
        pressStyle={{
          scale: 0.9,
        }}
        x={coords.x}
        y={coords.y}
        scale={scale}
        rotate={`${rotate}deg`}
      >
        {
          <Image
            src={'https://www.pngmart.com/files/12/My-Neighbor-Totoro-Transparent-Background.png'}
            width={300}
            height={400}
          />
        }
      </Square>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
