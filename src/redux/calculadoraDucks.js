import types from "./types/types";

// constnates


// reducer
const calculadoraDucks = (state={result: 0}, action) => {
    switch (action.type) {
        case types.viewResult:
            return{
                ...state,
                result: action.payload
            }
    
        default:
            return state;
    }
}
export default calculadoraDucks

// actions