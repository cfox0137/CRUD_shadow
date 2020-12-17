import React from 'react';
import Book from './Book';


const BooksToRead = ({myBooks}) => { 

    console.log(myBooks)



    return (

        <div>
       
       {myBooks.map(myBooks => (
           <Book text={myBooks.text} key={myBooks.id}/>
       ))}

        <br/>
        </div>

    );


};


export default BooksToRead;