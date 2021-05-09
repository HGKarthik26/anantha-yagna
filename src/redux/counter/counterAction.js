import { ADD_COUNT, DECREASE_COUNT, RESET_COUNT } from "./counterType"

export const addCount = () => {
    return {
        type: ADD_COUNT
    }
}

export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT
    }
}

export const resetCount = () => {
    return {
        type: RESET_COUNT
    }
}