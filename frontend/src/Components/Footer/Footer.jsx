import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <>
     <footer className='bg-black'>
        <div className="inner-footer container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                <div className="footer-box-one flex flex-col gap-4 p-4">
                   <div className="inner-footer-box-one text-white">
                     <h1 className='footer-logo' >logo</h1>
                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>

                      <div className="address">
                        <h3>Address</h3>
                        <p>123 Street Name</p>
                        <p>Road Name</p>
                        <p>London</p>
                        <p>+44 7412 345 678</p>
                   </div>
                 
                 <div className="footer-logo flex gap-3 items-center justify-start">
                 <FaInstagram />
                 <TiSocialFacebook />
                 <FaTwitter />
                 <FaYoutube />


                 </div>


                </div>
               
            </div>
               
            <div className="footer-box-two p-4">Box 2</div>
                <div className="footer-box-three p-4">Box 3</div>
                <div className="footer-box-four p-4">Box 4</div>   

        </div>
        </div>
     </footer>
    </>
  )
}

export default Footer