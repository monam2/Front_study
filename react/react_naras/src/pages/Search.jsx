import React, { useEffect, useState } from 'react'// eslint-disable-line no-unused-vars
import { useSearchParams } from "react-router-dom"
import { fetchSearchResult } from "../api";


const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  const [countires, setContries] = useState([]);
  
  const setInitData = async ()=> {
    const data = await fetchSearchResult(q);
    setContries(data);
  }

  useEffect(()=>{
    setInitData();
    console.log(countires)
  },[q])

  return (
    <div>

    </div>
  )
}

export default Search