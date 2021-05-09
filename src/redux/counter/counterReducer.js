import { ADD_COUNT, DECREASE_COUNT, RESET_COUNT } from './counterType'

const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

export default reducer