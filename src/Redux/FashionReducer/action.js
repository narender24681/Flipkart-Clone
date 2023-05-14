import { databaseUrl } from "../../utils/database-url";
import { REQUEST_STATE,SUCCESS_STATE,ERROR_STATE } from "./actionTypes";

import axios from "axios";


export const getProductscloths=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get(`${databaseUrl}/mens`,obj).then((res)=>{
dispatch({type:SUCCESS_STATE,payload:res.data})
    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}

export const getProductsclothsWomen=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get(`${databaseUrl}/womens`,obj).then((res)=>{
dispatch({type:SUCCESS_STATE,payload:res.data})
    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}

