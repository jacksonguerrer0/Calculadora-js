import types from "./types/types";

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
        default:
            return state;
    }
}
export default calculadoraDucks

// actions

export const viewOperationNumber = (number) => async (dispatch, getState) =>{
    const {operation} = getState().result
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
        let result = eval(operation)
        dispatch(viewResult(result))
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

export const resetTodo = () => ({
    type: types.reset
})
export const resetResult = () => ({
    type: types.resetResult
})