import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {

    const {wishlist, setWishlist} = useContext(BookContext)
const {storedBooks, setStoredBooks} = useContext(BookContext);
    console.log("stored books", storedBooks, setStoredBooks, setWishlist);

    return (
        <div className='container mx-auto'>
            <h2>Read List : { storedBooks.length}</h2>
            <h2>WshList : { wishlist.length}</h2>
            
        </div>
    );
};

export default Books;