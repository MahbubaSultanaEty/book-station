const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList")
    console.log(allReadList, "readlist from local db");

    if (allReadList) return JSON.parse(allReadList);
    return []
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isALreadyExist = allBooks.find(bk => bk.bookId === book.bookId )
    if (!isALreadyExist) {
        // add to local db
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks))
    }
}

export {getAllReadListFromLocalDB, addReadListToLocalDB}