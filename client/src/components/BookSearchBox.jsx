/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { GetAuthors, GetCategories } from "../api/bookStoreApi";

export default props => {
    const [val, setVal] = useState();
    const [prop, setProp] = useState('Title');

    function handleChangeVal(e){
        console.log(e.target.value)
        setVal(e.target.value);
        props.findBooks(prop, e.target.value);
    }

    function handleChangeProp(e){
        console.log(e.target.value)
        setProp(e.target.value);
        props.findBooks(e.target.value, val);
    }

    return (
        <div>
            <input onChange={e=>handleChangeVal(e)} id="txt-search-by-val" list="txt-search-by-val-lst"  type="text" placeholder="Search book by.."/>
            <select onChange={e=>handleChangeProp(e)} id="select-search-by-prop" style={{height: "22px"}}>
                <option>Title</option>
                <option>Author</option>
                <option>Category</option>
                <option>Type</option>
                <option>ISBN</option>
            </select>
        </div>
    )
}