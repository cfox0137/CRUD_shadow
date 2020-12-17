import React from 'react';


const Form = ({inputText, setInputText, myBooks, setMyBooks}) => {

    const inputTextHandler = (e) => {

        console.log(e.target.value);
        setInputText(e.target.value);
    
    }

    const submitABook = (e) => {
        e.preventDefault();
        setMyBooks ([
            ...myBooks, { text: inputText, id: Math.random()*100}
        ])
        setInputText('');

    }

return ( 
<form>

<input value={inputText} type="text" onChange={inputTextHandler}></input>
<button onClick={submitABook}>Add</button>

</form>

)


}






export default Form;