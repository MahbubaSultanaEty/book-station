import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishlist from '../../Components/ListedBooks/ListedWishlist';

const Books = () => {

  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);

    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-2xl bg-base-content text-white p-6'>Listed Books </h2>
    
        <div className='flex justify-center my-3'>
             <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort By {sortingType} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=> setSortingType("pages")}><a>Pages</a></li>
    <li onClick={()=> setSortingType("rating")}><a>Rating</a></li>
  </ul>
</div>
        </div>  
     
             <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList setSortingType={setSortingType} sortingType={sortingType}></ListedReadList>
    </TabPanel>
    <TabPanel>
            <ListedWishlist setSortingType={setSortingType} sortingType={sortingType} />
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;