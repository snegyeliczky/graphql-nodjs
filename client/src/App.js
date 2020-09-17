import React from 'react';
import './index.css'
import BookList from "./component/BookList";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import AddBook from "./component/AddBook";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

function App() {

    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Sándi's Reading list</h1>
                <BookList/>
                <AddBook/>
            </div>
        </ApolloProvider>
    );
}

export default App;
