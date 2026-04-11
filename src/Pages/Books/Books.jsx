import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishlist from '../../Components/ListedBooks/ListedWishlist';

const Books = () => {

    const {wishlist, setWishlist} = useContext(BookContext)
const {storedBooks, setStoredBooks} = useContext(BookContext);
    console.log("stored books", storedBooks, setStoredBooks, setWishlist);

    return (
        <div className='container mx-auto'>
            <h2 className='text-center bg-base-content text-white p-6'>Listed Books </h2>
            
             <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList></ListedReadList>
    </TabPanel>
    <TabPanel>
      <ListedWishlist/>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;