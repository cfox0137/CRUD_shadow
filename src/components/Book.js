import React from 'react';


const Book = ({ text })  => { 



    return (

        <div>
            <p>{text}</p>
            <button>Modify</button>
            <button>Delete</button>
        </div>

    )


}


export default Book;