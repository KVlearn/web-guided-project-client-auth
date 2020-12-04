import React from 'react';
import axios from 'axios';

const axiosWithAuth=()=>{
    //create takes one parameter - configuration.
    //so this is a configured axios that sends auth in header
    const token=localStorage.getItem('token')
   
    return axios.create({
        headers:{
            Authorization: token,
        },
        baseURL:'http://localhost:5000/api'
    })
}
export default axiosWithAuth;
