import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {

const {storedBooks, setStoredBooks} = useContext(BookContext);
    console.log("stored books", storedBooks, setStoredBooks);

    return (
        <div>
            <h2>Books</h2>
        </div>
    );
};

export default Books;