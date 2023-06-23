import React, { useEffect, useState } from 'react';
import "./bookapi.css";
import axios from 'axios';
import BookCard from './../BookCard'

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children";
// const APIKEY = "&key=AIzaSyAsBgCpq65SZuym7PV66Qi1qfp_5xIdA0w";
const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE";


const BookApi = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const query = "+subject:foxes";
    const fetchData = async () => {
      try {
        const response = await axios.get(BASEURL + query + APIKEY );
        setBooks(response.data.items);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto" id="bookResults">
      <h2 className="mb-4">Book Search Results:</h2>
            
      <div id="bookInfo">
        {books.map((book) => (
          <BookCard 
          id={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks && ( <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" /> )}
          description={book.volumeInfo.description}
          isbn={book.volumeInfo.industryIdentifiers[0].identifier}
          />
    //       <article className="mb-5 w-50 mx-auto" id={book.id}>
    //         <h3>{book.volumeInfo.title}</h3>
    //         <p>by {book.volumeInfo.authors}</p>
    //         {book.volumeInfo.imageLinks && ( <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" /> )}
    //         <p id="description" className="fst-italic">{book.volumeInfo.description}</p>
    //         <small id="isbn">ISBN: {book.volumeInfo.industryIdentifiers[0].identifier}</small>
    //         <button type="button" className="btn w-100 btn-outline-primary my-4">SHOP</button>
    //       </article>
       ))}
   </div>
      
 </div>

  );


};

export default BookApi;