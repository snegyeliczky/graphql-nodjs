import React, {useState} from 'react';
import {useQuery} from "react-apollo";
import {getBookQuery} from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {

    const {loading, data} = useQuery(getBookQuery);
    const[bookDetailId,setBookDetailId] = useState(null);

    function displayBooks() {
        if (loading) return <p>Loding</p>;
        else {
        return data.books.map(book => {
            return <li key={book.id} onClick={(e)=>{setBookDetailId(book.id)}}>{book.name}</li>
        })
        }

    }



    return (
        <div>

            <ul id={"book-list"}>
                {displayBooks()}
            </ul>
            <BookDetails bookId={bookDetailId}/>

        </div>
    );
};

export default BookList;