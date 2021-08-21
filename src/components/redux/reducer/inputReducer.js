const SET_VALUE = 'SET_VALUE'

let initionState = {
    current: '',
}

const inputReducer = (state = initionState, action) => {
    switch (action.type) {
        case SET_VALUE:
            debugger
            return {
                ...state,
                current: state.current + action.newCurrent,
            }
        default:
            return state
    }
}

export let setValue = newCurrent => {
    return {
        type: SET_VALUE,
        newCurrent,
    }
}

export default inputReducer
