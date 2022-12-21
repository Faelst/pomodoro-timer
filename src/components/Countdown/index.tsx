import { useContext, useEffect } from 'react'

import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../context/CyclesContext'

export function Countdown() {
  const { activeCycle, finishCycle, amountSecondsPassed, setSecondsPassed } =
    useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro - ${activeCycle?.task} - ${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsPassed >= totalSeconds) {
          clearInterval(interval)
          return finishCycle()
        }

        setSecondsPassed(secondsPassed)
      }, 1000)

      return () => clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, finishCycle, totalSeconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
