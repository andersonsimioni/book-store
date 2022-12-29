/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { GetAuthors, GetCategories } from "../api/bookStoreApi";

export default props => {
    let [val, setVal] = useState();
    let [prop, setProp] = useState('Title');

    /* let [authors, setAuthors] = useState();
    let [categories, setcategories] = useState(); */

    function onChangeVal(e){
        console.log(e.target.value)
        setVal(e.target.value);
        props.findBooks(prop, e.target.value);
    }

    function onChangeProp(e){
        console.log(e.target.value)
        setProp(e.target.value);
        props.findBooks(e.target.value, val);
    }

    /* GetAuthors().then(a =>{ setAuthors(a); }); */
    /* GetCategories().then(a=>{ setcategories(a) }); */

    return (
        <div>
            <input onChange={e=>onChangeVal(e)} id="txt-search-by-val" list="txt-search-by-val-lst"  type="text" placeholder="Search book by.."/>
            <datalist id='txt-search-by-val-lst'>
            {/* {authors == undefined ? false : authors.map(a => {return <option key={a} value={a}>{a}</option>})} */}
            {/* {categories == undefined ? false : categories.map(c => {return <option key={c} value={c}>{c}</option>})} */}
            </datalist>
            <select onChange={e=>onChangeProp(e)} id="select-search-by-prop" style={{height: "22px"}}>
                <option>Title</option>
                <option>Author</option>
                <option>Category</option>
                <option>Type</option>
                <option>ISBN</option>
            </select>
        </div>
    )
}