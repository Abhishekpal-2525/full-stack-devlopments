import React, {usecontext , useEffect} from 'react'
import axios from 'axios';
import { contextCreated } from '../context/CreateComponentContext';

const fetchData = (url) => {
    return axios
    .get(url)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
         return [null, err];
    })
};

export const ApiCall = ()=> {
     const {data, setData} = usecontext(contextCreated);

     const api = `https://fakestoreapi.com/products`;
     useEffect(()=>{
          fetchData(api)
          .then((res)=>setData(res))
          .catch((err)=> console.log(err));
     },[]);
     return(
          <>
          <h1>Api Call</h1>
          </>
     );
};