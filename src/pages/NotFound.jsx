import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

export const NotFound = () => {
   return (
      <div className="NotFound">
         <img
            src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
            alt=""
         />
         <Link to="/">
            <h1 className='h1NotFound'>Return to Home</h1>
         </Link>
      </div>
   );
};

export default NotFound;