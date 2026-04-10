import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    
      const [storedBooks, setStoredBooks]= useState([])

    const handleAddToRead = (currentBook) => {
        // step 1: store book id
        // step 2: where to store
        // step 3: array of collection
        // step 4: if the book is already exist show an alert or taost
        // step 5: if not then add the book in the array of collection

        const existBook = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (existBook) {
            alert("The book already exist in your reading list")
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to reading list succesfully`)
        }
        
    }
console.log(storedBooks);
    const data = {
        storedBooks, setStoredBooks, handleAddToRead
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>;
};

export default BookProvider;