import React from 'react'
import { useDispatch } from 'react-redux';
import axios from '../Redux/action';
import * as actFunc from '../Redux/action';

export const TodosInput = () => {
    const data = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    const getApi = ()=>{
        axios
        .get('http://localhost:8080/todo')
        .then((res)=> dispatch(actFunc.getTodosSuccess(res)))
        .catch((res)=> console.log(err));
    };
    React.useEffect(()=>{
        getApi();
    },[]);
  return (
    <div>TodosInput</div>
  )
}
