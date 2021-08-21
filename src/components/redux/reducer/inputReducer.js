const SET_VALUE = 'SET_VALUE'

let initionState = {
    current: '',
    MathOperator: null,
}
// '123+123+123+123'.indexOf('+', 7+1)
// str.slice(0, 1)
const inputReducer = (state = initionState, action) => {
    switch (action.type) {
        case SET_VALUE:
            if (action.newCurrent === 'Clearn') {
                return {
                    ...state,
                    current: '',
                }
            } else if (action.newCurrent === 'C') {
                return {
                    ...state,
                    current: state.current.slice(0, state.current.length - 1),
                }
            } else if (action.newCurrent === '=') {
                let example = state.current
                const mapOperator = () => {
                    if (example.indexOf('+') !== -1) {
                        return example.indexOf('+')
                    } else if (example.indexOf('-') !== -1) {
                        return example.indexOf('-')
                    } else if (example.indexOf('/') !== -1) {
                        return example.indexOf('/')
                    } else if (example.indexOf('*') !== -1) {
                        return example.indexOf('*')
                    }
                }
                let operatorMap = mapOperator()
                let oneNum = Number(example.slice(0, operatorMap))
                let twoNum = Number(
                    example.slice(operatorMap + 1, example.length)
                )
                let operator = example[operatorMap]
                let newCurrent

                if (operator === '/') {
                    newCurrent = oneNum / twoNum + ''
                } else if (operator === '*') {
                    newCurrent = oneNum * twoNum + ''
                } else if (operator === '+') {
                    newCurrent = oneNum + twoNum + ''
                } else if (operator === '-') {
                    newCurrent = oneNum - twoNum + ''
                }

                return {
                    ...state,
                    current: newCurrent.slice(0, 15),
                }
            } else {
                return {
                    ...state,
                    current: state.current + action.newCurrent,
                }
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
