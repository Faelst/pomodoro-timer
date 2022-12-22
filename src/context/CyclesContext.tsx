import React, { createContext, useEffect, useReducer, useState } from 'react'
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer'
import { addNewCycleAction, finishCycleAction, interruptCycleAction } from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  finishCycle: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  handleInterruptCycle: () => void
}

export const CyclesContext = createContext<CyclesContextType>(
  {} as CyclesContextType,
)

export function CyclesProvider({ children }: { children: React.ReactNode }) {
  const [cyclesState, dispatch] = useReducer(CyclesReducer, {
    cycles: [],
    activeCycleId: null,
  }, (state) => {
    const stateJSON = localStorage.getItem('@pomodoro-timer:cycles-state-1.0.0')

    if (stateJSON) {
      return JSON.parse(stateJSON)
    }

    return state
  })

  const activeCycle = cyclesState.cycles.find(
    (cycle) => cycle.id === cyclesState.activeCycleId,
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(cyclesState.cycles[0].startDate),
      )
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@pomodoro-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])


  const finishCycle = () => {
    dispatch(finishCycleAction(cyclesState.activeCycleId))
    setAmountSecondsPassed(0)
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
      createdAt: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
  }

  const handleInterruptCycle = () => {
    dispatch(interruptCycleAction(cyclesState.activeCycleId || ''))

    setAmountSecondsPassed(0)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles: cyclesState.cycles,
        activeCycle,
        activeCycleId: cyclesState.activeCycleId,
        amountSecondsPassed,
        finishCycle,
        setSecondsPassed,
        createNewCycle,
        handleInterruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
