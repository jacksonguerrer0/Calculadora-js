import types from "./types/types";
import stringMatch from 'string-math'
// constnates
const initialState = {
    result: null, 
    operation: ''
}
// reducer
const calculadoraDucks = (state=initialState, action) => {
    switch (action.type) {
        case types.viewResult:
            return{
                ...state,
                result: action.payload
            }
        case types.operation:
            return{
                ...state,
                operation: action.payload
            }
        case types.reset:
            return initialState
        case types.resetResult:
            return{
                ...state,
                result: null
            }
        case types.resetOperation: 
            return {
                ...state,
                operation: ''
            }
        case types.delete:
            return {
                ...state,
                operation: action.payload
            }
        default:
            return state;
    }
}
export default calculadoraDucks

// actions

export const viewOperationNumber = (number) => async (dispatch, getState) =>{
    const {operation} = getState().result
    const newNumber = operation  + number
    dispatch(resetResult())
    dispatch(viewOperat(newNumber))
}

export const viewOperationOperator = (operator) => async (dispatch, getState) =>{
    const {operation, result} = getState().result
    let endCaracter = operation[operation.length - 1];
    if(typeof(result) === 'string'){
        let newOperation = result + operator
        dispatch(resetResult())
        dispatch(viewOperat(newOperation))
    }else{
        if(endCaracter === '+' || endCaracter === '-' || endCaracter === '*' || endCaracter === '/' || endCaracter === '.'){
            let removeEndCaracter = operation.slice(0, -1);
            const newOperator = removeEndCaracter  + operator
            dispatch(viewOperat(newOperator))
            dispatch(resetResult())
        }else if(operation.length){
            const newOperator = operation  + operator
            dispatch(viewOperat(newOperator))
        }
    }
}



export const operationResult = () => (dispatch, getState) =>{
    const { operation } = getState().result
    try {
        let result = stringMatch(operation)
        dispatch(resetOperation())
        dispatch(viewResult(result.toString()))
    } catch (error) {
        alert(error)
    }
}
export const deleteDigitOperation = () => (dispatch, getState) => {
    const { operation } = getState().result
    const removeEndStr = operation.slice(0,-1)
    dispatch(deleteOperation(removeEndStr))
}
export const viewResult = (data) => ({
    type: types.viewResult,
    payload: data
})

export const viewOperat = (data) =>({
    type: types.operation,
    payload: data
})
export const resetTodo = () => ({
    type: types.reset
})
export const resetResult = () => ({
    type: types.resetResult
})
export const resetOperation = () => ({
    type: types.resetOperation
})
export const deleteOperation = (data) => ({
    type: types.delete,
    payload: data
})