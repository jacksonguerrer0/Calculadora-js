import nerdamer from "nerdamer";
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
        default:
            return state;
    }
}
export default calculadoraDucks

// actions

export const viewOperationNumber = (number) => async (dispatch, getState) =>{
    const {operation, result} = getState().result
    let endCaracter = operation[operation.length - 1];
    if(endCaracter !== '+' || endCaracter !== '-' || endCaracter !== '*' || endCaracter !== '/' || endCaracter !== '.'){
        let removeEndCaracter = operation.slice(0, -1);
        if (operation.length < 35){
            const newOperator = removeEndCaracter  + number
            dispatch(viewOperat(newOperator))
        }
    }


    if (operation.length < 35){
        const newNumber = operation  + number
        dispatch(viewOperat(newNumber))
    }
}

export const viewOperationOperator = (operator) => async (dispatch, getState) =>{
    const {operation} = getState().result

    let endCaracter = operation[operation.length - 1];
    console.log(endCaracter)
    if(endCaracter === '+' || endCaracter === '-' || endCaracter === '*' || endCaracter === '/' || endCaracter === '.'){
        let removeEndCaracter = operation.slice(0, -1);
        if (operation.length < 35){
            const newOperator = removeEndCaracter  + operator
            dispatch(viewOperat(newOperator))
        }
    }else if(operation.length < 35){
        const newOperator = operation  + operator
        dispatch(viewOperat(newOperator))
    }
}



export const viewOperat = (data) =>({
    type: types.operation,
    payload: data
})


export const operationResult = () => (dispatch, getState) =>{
    const { operation } = getState().result
    try {
        // con nerdamer
        // let nerdResult = nerdamer(operation);
        // con eval funciona pero vercel no lo deja desplegar
        // let evalr = eval(operation)
        // console.log(evalr)

        // con string math
        let result = stringMatch(operation)
        console.log(result)
        // let result = stringMath.symbol.multiplier.num.value

        dispatch(viewResult(result))
        dispatch(resetOperation())
        dispatch(viewOperat(result.toString()))
    } catch (error) {
        alert(error)
    }
}

export const viewResult = (data) => ({
    type: types.viewResult,
    payload: data
})

// function addbits(s) {
//     return (s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [])
//         .reduce(function(sum, value) {
//             return parseFloat(sum) + parseFloat(value);
//         });
// }
// (string.match(/^(-?\d+)(\+-?\d+)*$/)) ? string.split('+').stringSum() : NaN;
// }   
// function sum(string) {
//     return (string.match(/^(-?\d+)(\+-?\d+)*$/)) ? string.split('+') : NaN;
//   }  
// console.log(sum("5+5"))

export const resetTodo = () => ({
    type: types.reset
})
export const resetResult = () => ({
    type: types.resetResult
})
export const resetOperation = () => ({
    type: types.resetOperation
})