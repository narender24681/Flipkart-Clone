import { REQUEST_STATE,ERROR_STATE,SUCCESS_STATE } from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,      
    products:[]
}

export const reducer=(state=initialState,{type,payload})=>{   
switch(type){
    case REQUEST_STATE:
        return {...state,isLoading:true}
        case SUCCESS_STATE:     
            return {...state,isLoading:false,products:payload}
            case ERROR_STATE:
                return {...state,isLoading:false,isError:true}
             default:
                return state
    
}
}