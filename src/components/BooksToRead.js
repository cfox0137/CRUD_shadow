import React from "react";
import Book from "./Book";

const BooksToRead = ({ myBooks, setMyBooks, }) => {

  return (
    <div>
      { myBooks.map((book) => (
        <Book
          myBooks={myBooks}
          setMyBooks={setMyBooks}
          text={book.text}
          key={book.id}
          book={book}
        />
      ))}

      <br />
    </div>
  );
};

export default BooksToRead;
