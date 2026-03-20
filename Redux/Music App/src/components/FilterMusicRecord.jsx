import React, { useEffect, useState}  from 'react';
import { useSearchParams} from 'react-router-dom' ;
 import data from '../../db. json' ; 
 export const FilterMusicRecordo = () =>{
    const [searchParams, setSearchParams] = useSearchParams ();

    const [filterVal, setFilterVal] = useState(
        searchParams.getAll('genre') || [],
    );
        const [sort, setSort] = React.useState(searchParams.get('_sort')||'');

        const [keys]= React.useState(()=>{
            return data. albums
            .map ((el) => {
                let value = object.values(el.genre).join('');
                return value;
        })
        .reduce((acc,curr)=>{
           acc[curr]=(acc[curr]||0)+1;
           return acc;
        },{});
        });

        const handleFilter =(e)=>{
            const option = e.target.name;
            const newArr =[...filterVal];
         if(newArr.includes(option)){
            newArr.splice(newArr.indexOf(option),1);
         } else{
            newArr.push(option);
         }
         setFilterVal(newArr);
        };
        const handleort=(e)=>{
            setSort(e.terget.value);
        };
        useEffect(()=>{
            const Params={};
            filterVal && (Params.genre=filterVal);
            sort && (Params._sort = sort);
            setSearchParams(Params);
        },[sort,filterVal,setSearchParams]);
 }};