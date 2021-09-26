import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='d-flex justify-content-between firstDiv'>
           <h1>World best Physician</h1>
           <div className='d-flex mt-3'>
               <a href='\home'>Home</a>
               <a href='\doctors'>doctors</a>
               <a href='Contact'>Contact</a>
           </div>
        </div>
    );
};

export default Header;