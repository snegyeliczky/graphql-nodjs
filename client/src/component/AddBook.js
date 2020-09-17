import React, {useState} from 'react';
import {useQuery, useMutation} from "react-apollo";
import {getAuthor, addBookMutation, getBookQuery} from "../queries/queries";

const AddBook = () => {

    const [bookName,setBookName] =useState("");
    const [genre,setGenre] =useState("");
    const [author,setAuthor] =useState("");



    const {loading, data} = useQuery(getAuthor);

    const [addBook,{bookAfterAdd}]=useMutation(addBookMutation);


    function displayAuthors() {
        if (loading) return <option>Loding author</option>;
        else {
            return data.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>
            })
        }

    }




    function handleSaveBook() {
        console.log(bookName,genre,author);
        addBook({
            variables:{
                name:bookName,
                genre:genre,
                authorId:author
            },
            refetchQueries:[{query:getBookQuery}]
        })


    }

    return (
        <div className={"addBook"}>
            <div className={"field"}>
                <label>Book name:</label>
                <input type={"text"} onChange={(event => {setBookName(event.target.value)})}/>
            </div>
            <div className={"field"}>
                <label>Genre:</label>
                <input type={"text"} onChange={(event => {setGenre(event.target.value)})}/>
            </div>
            <div className={"field"}>
                <label>Author:</label>
                <select onChange={e=>{setAuthor(e.target.value)}}>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button onClick={handleSaveBook}>+</button>

        </div>
    );
};

export default AddBook;