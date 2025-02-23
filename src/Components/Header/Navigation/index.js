import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdLocalGroceryStore } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { GiLipstick } from "react-icons/gi";
import { BsBalloon } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
const Navigation=()=>{
    return(
<nav>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3 navPart1'>
              <Button className='allCatTab align-items-center'>
                <span className='icon1 mr-2'><IoIosMenu/></span>
                <span className="text">ALL CATEGORIES</span>
                <span className='icon2 ml-2'><FaAngleDown/></span>
              </Button>
            </div>
            <div className='col-sm-9 navPart2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto '>
                    <li className='list-inline-item'><Link to="/"><MdLocalGroceryStore/>All</Link></li>
                    <li className='list-inline-item'><Link to="/"><FaHeadphones/>Electronics</Link></li>
                    <li className='list-inline-item'><Link to="/"><GiLipstick/>Beauty</Link></li>
                    <li className='list-inline-item'><Link to="/">< BsBalloon/>Kids</Link></li>
                    <li className='list-inline-item'><Link to="/"><IoGiftOutline/>Gifting</Link></li>
                    <li className='list-inline-item'><Link to="/"><IoDiamondOutline/>Premium</Link></li>
                    
                </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default Navigation;




