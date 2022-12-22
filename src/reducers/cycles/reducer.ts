import { produce } from "immer"
import { CyclesActionTypes } from "./actions"

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedAt?: Date
  finishedAt?: Date
  createdAt: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}


export const CyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case CyclesActionTypes.ADD_NEW_CYCLE: {
      return produce(state, (draft) => {
        draft.cycles.push(action.payload)
        draft.activeCycleId = action.payload.id
      })
    }
    case CyclesActionTypes.FINISH_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === action.payload.id)

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedAt = new Date()
        draft.activeCycleId = null
      })
    }
    case CyclesActionTypes.INTERRUPT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === action.payload.id)

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedAt = new Date()
        draft.activeCycleId = null
      })
    }
    default:
      return state
  }
}
