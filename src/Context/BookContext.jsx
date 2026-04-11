import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishlist] = useState([])

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id
        // step 2: where to store
        // step 3: array of collection
        // step 4: if the book is already exist show an alert or taost
        // step 5: if not then add the book in the array of collection

        const existBook = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (existBook) {
            toast.warning("The book already exist in your reading list")
            
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
             toast.success(`${currentBook.bookName} is added to reading list succesfully`)
        }
        
    }

    const handleWishlist = (currentBook) => {
        const existBook = wishlist.find(book => book.bookId == currentBook.bookId);

        const existInReadList = storedBooks.find(book => currentBook.bookId == book.bookId);

        if (existInReadList) {
            toast.error("this book already exist in your reading list");
            return;
        }

        if (existBook) {
                 toast.warning("The book already exist in your wishlist list")   
        } else {
            setWishlist([...wishlist, currentBook]);
             toast.success(`${currentBook.bookName} is added to wishlist succesfully`)
        }
       
    }
// console.log(wishlist);
    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead, handleWishlist, wishlist, setWishlist
    }
    return (
        <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>);
};

export default BookProvider;