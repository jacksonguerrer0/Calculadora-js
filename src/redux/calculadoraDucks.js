import types from "./types/types";

// constnates
const initialState = {
    result: 0, 
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
        default:
            return state;
    }
}
export default calculadoraDucks

// actions

export const viewOperation = (data) => async (dispatch, getState) =>{
    const {operation} = getState().result

    const newOperation = operation  + data + ","
    dispatch(viewOperat(newOperation))
}

export const viewOperat = (data) =>({
    type: types.operation,
    payload: data
})