import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";

import './Navbar.css';
const Navbar = () => {

    const handleSearch = () => {    
        const search = document.querySelector('.serach')
        search.classList.toggle('serach-active')
    }

    const handlenavcom = () => {    
        const nav = document.querySelector('.nav-com')
        nav.classList.toggle('nav-com-active')
    }
    return (
        
        <nav className="bg-white p-4">
            <div className="inner-nav  mx-0 sm:mx-8  flex justify-between items-center">
                <div className='nav-heading' > <h1 className= " text-4xl text-[#0e0e0e]  font-[700]"  >suphreme</h1 ></div>
                <FaBars className='nav-bars' onClick={handlenavcom} />
                <div className="nav-com lg:space-x-5 space-x-0 font-[500] text-xl  ">
                   <Link href="#"  className=" hover:text-blue-500" onClick={handlenavcom}  >Home</Link>
                    <Link href="#" className=" hover:text-blue-500" onClick={handlenavcom}  >About</Link>
                    <Link href="#" className=" hover:text-blue-500" onClick={handlenavcom}  >Services</Link>
                    <Link href="#" className=" hover:text-blue-500" onClick={handlenavcom}  >Contact</Link>
                    <Link href="#" className=" hover:text-blue-500" onClick={handlenavcom}  >Login</Link>
                    <Link href="#" className="nav-icons  text-lg   hover:text-blue-100  " onClick={() => { handleSearch(); handlenavcom(); }}><CiSearch className='nav-icons serach-icon' /></Link>
                    <Link href="#" className="nav-icons  text-lg   hover:text-blue-100  "><LiaShoppingBagSolid  className='nav-icons'  onClick={handlenavcom}  /></Link>
                </div>

                

                <div className="serach  bg-black p-2 rounded-lg z-10"  >
               <input type="text" placeholder='serach' className='serach-input' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;