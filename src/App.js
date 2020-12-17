import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import BooksToRead from './components/BooksToRead';

function App () {

  const [inputText, setInputText] = useState('');
  const [myBooks, setMyBooks] = useState([{text: 'hello', id: 12}]);

  return (
    <div className="App">

    <header>
      <h1>My Bookshelf</h1>
    </header>

    <BooksToRead myBooks={myBooks} />
    <Form setInputText={setInputText} myBooks={myBooks} setMyBooks={setMyBooks} inputText={inputText} />
    </div>
  );

}

export default App;
