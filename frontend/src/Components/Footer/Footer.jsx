import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <>
     <footer className='bg-black '>
        <div className="inner-footer">
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="footer-box-one ">
                   <div className="inner-footer-box-one  flex flex-col gap-5 p-4 text-white">
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
               
            <div className="footer-box-two p-4 text-white">
              <div className="inner-box-two flex flex-col gap-4">
              <h1 class="footer-box-two-heading footer-logo" >Latest Services</h1>

              <div className="footer-box-two-content">
                <p class="fb-two">Where Music Is Headed Next</p>
                <p class="fb-two-date" >February 12, 2016</p>
              </div>

              <div className="footer-box-two-content">
                <p class="fb-two">Where Music Is Headed Next</p>
                <p class="fb-two-date" >February 12, 2016</p>
              </div>

              <div className="footer-box-two-content">
                <p class="fb-two">Where Music Is Headed Next</p>
                <p class="fb-two-date" >February 12, 2016</p>
              </div>

              <div className="footer-box-two-content">
                <p class="fb-two">Where Music Is Headed Next</p>
                <p class="fb-two-date" >February 12, 2016</p>
              </div>
              </div>
            </div>
                <div className="footer-box-three p-4 text-white">
                  <div className="inner-footer-box-three flex flex-col gap-4 ">
                     <h1 class="footer-logo" >Terms & Condition</h1>
                     <p>Couldn't connect with Twitter</p>
                  </div>
                </div>
                <div className="footer-box-four  text-white p-4">
                  <div className="inner-footer-box-four flex flex-col gap-4 ">
                    <h1 class="footer-logo">Payment Method </h1>
                    <hr />
                  </div>
                  
                  </div>   

        </div>
        </div>
     </footer>
    </>
  )
}

export default Footer