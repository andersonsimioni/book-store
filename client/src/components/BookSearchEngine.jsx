/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import BookSearchBox from "./BookSearchBox";
import BookTableList from "./BookTableList";
import { GetBookByAuthor, GetBookByCategory, GetBookByISBN, GetBookByTitle, GetBookByType } from "../api/bookStoreApi";

export default props => {

    const [books, setBooks] = useState();

    const apiFunctionDict = {
        'author': v=>GetBookByAuthor(v),
        'title': v=>GetBookByTitle(v),
        'category': v=>GetBookByCategory(v),
        'isbn': v=>GetBookByISBN(v),
        'type': v=>GetBookByType(v),
    };

    function findBooks(prop, val){
        console.log(prop, val);
        apiFunctionDict[prop.toLowerCase()](val).then(r => setBooks(r));
    }

    return (
        <React.Fragment>
            <BookSearchBox findBooks={findBooks}></BookSearchBox>
            <BookTableList books={books}></BookTableList>
        </React.Fragment>
    )
}