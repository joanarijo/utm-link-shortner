import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

const Archive = (props) => {
    const list = props.list;

    const urlsPerPage = 8;
    const [ activePage, setCurrentPage ] = useState( 1 );

    const indexOfLastList  = activePage * urlsPerPage;
    const indexOfFirstList = indexOfLastList - urlsPerPage;
    const currentList = list.slice( indexOfFirstList, indexOfLastList );
    
    const renderList = currentList.map((url, index) => {
        return <div key={index}>
            <ul>
                <li>Original: <a href={url.url} target='_blank'>{url.url}</a></li>
                <li>Shortlink: <a href={"http://www.heroku.link/" + url._id} target='_blank'>{"http://www.heroku.link/" + url._id}</a></li>
            </ul>
            </div>;
   } );

     const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber )
     };
  

    return (
         <main>
         <section>
            <h3>Archive</h3>
            <p>All urls converted to shortlinks:</p>
            { renderList }
            <Pagination
               hideDisabled
               activePage={ activePage }
               itemsCountPerPage={ 8 }
               totalItemsCount={ list.length }
               pageRangeDisplayed={ 3 }
               onChange={ handlePageChange }
               className="pagination"
            />
            <p>Return <Link to="/">Home</Link></p>
         </section>
         </main>
     );
}
 
export default Archive;
