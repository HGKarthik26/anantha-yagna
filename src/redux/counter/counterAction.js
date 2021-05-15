import { ADD_COUNT, DECREASE_COUNT, SET_COUNT, RESET_COUNT } from "./counterType"

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

export const setCount = (count) => {
    return {
        type: SET_COUNT,
        payload: count
    }
}

export const resetCount = () => {
    return {
        type: RESET_COUNT
    }
}