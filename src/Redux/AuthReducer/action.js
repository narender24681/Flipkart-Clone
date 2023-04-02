import axios from "axios";
import { databaseUrl } from "../../utils/database-url";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./actionType";

export const signup = (data) => (dispatch) => {
    return axios.get(`${databaseUrl}/users?email=${data.email}`)
    .then(res => {
        console.log(res.data[0]);
        if (res.data[0] == undefined) {
            return axios.post(`${databaseUrl}/users`, data)
            .then(res1 => {
                // console.log(res.data);
                dispatch({type: AUTH_SIGNUP, payload: res1.data});
    
                return true;
            })
            .catch(err => {
                console.log(err);
            })
        }
        else {
            return false;
        }
    })
}

export const login = (data) => (dispatch) => {
    return axios.get(`${databaseUrl}/users?email=${data.email}&password=${data.password}`)
    .then(res => {
        // console.log(res.data[0]);
        if (res.data[0] != undefined) {
            dispatch({type: AUTH_LOGIN, payload: res.data[0]});

            return true;
        }
        else {
            return false;
        }
    })
    .catch(err => {
        console.log(err);
    })
}

export const logout = (dispatch) => {
    dispatch({type: AUTH_LOGOUT});
}
