/* eslint-disable import/no-anonymous-default-export */

import './BookTableList.css'
import React, { useState } from "react";

export default props => {
    return (
        <React.Fragment>
            <table id="table-books">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Type</th>
                        <th>ISBN</th>
                        <th>Category</th>
                        <th>Available Copies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books === undefined || props.books.length === 0 ? 
                            false
                        :
                        props.books.map(book=>{
                            return (
                                <tr key={book.bookId}>
                                    <td>{book.title}</td>
                                    <td>{book.firstName} {book.lastName}</td>
                                    <td>{book.type}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.category}</td>
                                    <td>{book.totalCopies - book.copiesInUse} / {book.totalCopies}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>

            {props.books === undefined || props.books.length === 0 ? 
                <div><p id="no-books-warning">No books found!</p></div> : 
                <div></div>}
        </React.Fragment>
    );
}