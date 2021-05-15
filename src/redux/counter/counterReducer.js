import { ADD_COUNT, DECREASE_COUNT, RESET_COUNT, SET_COUNT } from './counterType'

const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: parseInt(state.count) + 1
            }
        case DECREASE_COUNT:
            return {
                ...state,
                count: parseInt(state.count) - 1
            }
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export default reducer