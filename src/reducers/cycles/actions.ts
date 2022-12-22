import { Cycle } from "./reducer";

export enum CyclesActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    FINISH_CYCLE = 'FINISH_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
}

export function addNewCycleAction(cycle: Cycle) {
    return {
        type: CyclesActionTypes.ADD_NEW_CYCLE,
        payload: cycle,
    }
}

export function finishCycleAction(id: string) {
    return {
        type: CyclesActionTypes.FINISH_CYCLE,
        payload: {
            id,
        },
    }
}

export function interruptCycleAction(id: string) {
    return {
        type: CyclesActionTypes.INTERRUPT_CYCLE,
        payload: {
            id
        },
    }
}