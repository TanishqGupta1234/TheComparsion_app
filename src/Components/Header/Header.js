import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/imagess.jpeg'; // Correct import statement for logo
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className='headerwrapper'>
      {/* Top Announcement Bar */}
      <div className='top-strip bg-purple'>
        <div className='container'>
          <p className='mb-0 mt-0 text-center'>We are going to start the <b>sale very soon</b>... So please join us early</p>
        </div>
      </div>
      
      {/* Header Section */}
      <div className='header'>
        <div className='container'>
          <div className='row'>
            {/* Logo Section */}
            <div className='logowrapper d-flex align-items-center col-sm-2'>
              <Link to={'/'}>
                <img src={logo} alt='logo' />
              </Link>
            </div>

            {/* Search and User Section */}
            <div className='d-flex align-items-center col-sm-10 part2'>
              <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                  <span className='label'>Your Location</span>
                  <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
              </Button>
              
              <SearchBox />

              <div className='part3 d-flex align-items-center ml-auto'>
                <Button className='circle mr-3'>
                  <FaRegUserCircle />
                </Button>
                <div className='ml-auto cartTab'>
                  <span className='price'>$3.29</span>
                  <Button className='circle ml-2'>
                    <IoBagOutline />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <Navigation/ >
    </div>
  );
}

export default Header;
