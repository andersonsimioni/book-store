/* eslint-disable import/no-anonymous-default-export */
import {React, Fragment, useState} from "react";
import BookSearchBox from "./BookSearchBox";
import BookTableList from "./BookTableList";
import { getBookByAuthor, getBookByCategory, getBookByISBN, getBookByTitle, getBookByType } from "../api/bookStoreApi";

export default props => {

    const [books, setBooks] = useState();

    const apiFunctionDict = {
        'author': v=>getBookByAuthor(v),
        'title': v=>getBookByTitle(v),
        'category': v=>getBookByCategory(v),
        'isbn': v=>getBookByISBN(v),
        'type': v=>getBookByType(v),
    };

    function findBooks(prop, val){
        apiFunctionDict[prop.toLowerCase()](val).then(r => setBooks(r));
    }

    return (
        <Fragment>
            <BookSearchBox findBooks={findBooks}></BookSearchBox>
            <BookTableList books={books}></BookTableList>
        </Fragment>
    )
}