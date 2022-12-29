/* eslint-disable import/no-anonymous-default-export */
import './App.css'

import React from "react";
import BookSearchEngine from './components/BookSearchEngine';

export default props => {
    return (
        <React.Fragment>
            <h1><span className="material-symbols-outlined">menu_book</span> Book Store Website</h1>

            <div className='card'>
                <h4>~ Books ~</h4>
                <hr></hr>
                <BookSearchEngine></BookSearchEngine>
            </div>
        </React.Fragment>
    )
}