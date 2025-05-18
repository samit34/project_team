import React, { useState , useEffect } from 'react';
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { useAuth } from '../../Auth/Authcontext';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Login = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login, isauth } = useAuth();
  const navigate = useNavigate()


  const loginuser = async (e) => {
    e.preventDefault();
    const data = {
      username: name,
      password: password,
    };

    try {
      const res = await axios.post("http://localhost:8000/user/login", data); // Changed to POST
      console.log("Login response:", res);
      login(res.data.token);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        navigate('/block');
      }
      console.log("Login error:", err);
    }
  };
  const toggleShowPassword = () => setShow((prev) => !prev);
  if (isauth) {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userRole = decodedToken.role;
  
    if (userRole === 'professional') {
      return <Navigate to="/provider" />;
    } else if (userRole === 'client') {
      return <Navigate to="/ConsumerDash" />;
    } else {
      return <Navigate to="/ " />;
    }
  }
  
  return (
    <>
      <div className='main bg-main-image bg-cover bg-center h-screen content-center'>
        <div className='flex justify-center'>
          <div className='bg-white p-5 rounded-md border-[#E5E5E5] border-1'>
            <form className='' >
              <div className="login-page text-center">
                <h1 className='text-black text-2xl font-semibold'>Welcome Back</h1>
                <p className='mb-3'>Enter your username and password to continue</p>
                <div className="name text-left">
                  <label className='w-full font-semibold text-sm'>Email</label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="login-name-input w-full  border-[#E5E5E5] border-1 py-2 px-3"
                  />
                </div>
                <div className="password mt-4 text-left relative">
                <label className='w-full font-semibold text-sm'>Password</label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-password-input w-full border-[#E5E5E5] border-1 py-2 px-3"
                  />
                   <FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={toggleShowPassword}
                    />
                </div>
                <button className="login-button bg-primary-color w-full my-3 p-2 font-semibold text-black rounded-sm" onClick={loginuser}>
                  Login
                </button>
                <div className='text-black ' >
                  Don"t have an account Signup now ?
                  <Link className="login-button ms-1" to={'/signup'}  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
