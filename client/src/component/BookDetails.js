import React from 'react';
import {useQuery} from "react-apollo";
import {getBookByIdQuery} from "../queries/queries";

const BookDetails = (bookId) => {

    const id = bookId.bookId;
    const {loading, error, data} = useQuery(getBookByIdQuery, {
        variables: {id}
    });

    function displayBookDetails() {
        if (loading) return <option>Loding author</option>;

        if (data.book != null) {
            return (
                <div>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className={"other-books"}>
                        {data.book.author.books.map(book =>{
                            return<li key={book.id}>{book.name}</li>
                        })}

                    </ul>
                </div>

            );

        }

    }

    return (
        <div id={"book-details"}>
            {displayBookDetails()}

        </div>
    );
};

export default BookDetails;