import React from "react";

const Book = ({ text, myBooks, setMyBooks, book }) => {
  const deleteHandler = () => {
    setMyBooks(myBooks.filter((el) => el.id !== book.id));
  };

  const modifyHanlder = () => {

    const update = prompt("Podaj nowy tytuł")

    setMyBooks(myBooks.map(item => {

      if(item.id === book.id) {
        
        
        return {

         ...item, text: update
        }

       

      }

      return item;
    

    }))


  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={modifyHanlder}>Modify</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Book;
