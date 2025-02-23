import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/imagess.jpeg'; // Correct import statement for logo
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { Dialog } from '@mui/material';
import { IoIosSearch} from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const [isOpenModel, setisOpenModel]= useState(false);
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
              
              <Button className='countryDrop' onClick={()=>setisOpenModel(true)}>
                <div className='info d-flex flex-column'>
                  <span className='label'>Your Location</span>
                  <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
              </Button>
              <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)}className='locationModel'  TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter your address to estimate the delivery time!</p>
                <Button className='close_' onClick={()=>setisOpenModel(false)}><IoMdClose/></Button>
                <div className='headerSearch w-100'>
                        <input type='text' placeholder='Search for your area...'/>
                        <Button><IoIosSearch/></Button>
                      </div> 
<ul className='countryList mt-3'>
<li><Button onClick={()=>setisOpenModel(false)}>Mumbai</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Delhi</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Bangalore</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Kolkata</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Chennai</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Hyderabad</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Pune</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Ahmedabad</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Jaipur</Button></li>
  <li><Button onClick={()=>setisOpenModel(false)}>Lucknow</Button></li>

</ul>

              </Dialog>
              
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
