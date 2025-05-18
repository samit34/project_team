import React, { useState, createContext, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//  import { jwtDecode } from 'jwt-decode';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const MyContext = createContext();

const Authcontext = ({children}) => {
 
  const [isauth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const [role ,setRole] = useState();
   const [data , setData] = useState([]);
   const [profile , setProfile] = useState([]);

  // Function to handle logout
  const login = (token) => {
    try {
      localStorage.setItem("token", token);
      console.log("tis is a login token ",token)
      const decodedToken = jwtDecode(token);
      
      setAuth(true);
      setRole(decodedToken.role);
         
      // Navigate based on role
      if (decodedToken.role === "client") {
        navigate('/'); 
        console.log("this is a client")
      } else if (decodedToken.role === "professional") {
        navigate('/provider');
        console.log("this is a provider")
      }else{
        navigate('/');
        
      }
    } catch (error) { 
      console.error("Invalid token", error);
    }
  };

console.log("the value of role in login" , role) // Set auth to true if the token is valid

  const logout = () => {
    setAuth(false);
    setRole(null); // Reset role on logout
    localStorage.removeItem("token");
    navigate('/login');
  };

  
  

  useEffect(() => {
    const checkToken = () => {

      console.log("check funcation is running ")
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const expirationTime = decodedToken.exp * 1000; // Convert exp to milliseconds
          if (expirationTime < Date.now()) {
            logout(); // Log out if the token is expired
          } else {
            setAuth(true);
            setRole(decodedToken.role);
              // console.log("the value of role in else" , role) // Set auth to true if the token is valid
          }
        } catch (error) {
          console.error("Invalid token", error);
          logout(); // Log out on error
        }
      } else {
        setAuth(false); // No token found
      }
      setLoading(false); // Set loading to false
    };

    checkToken(); // Run once on mount

    const intervalId = setInterval(() => {
      checkToken(); // Run every 30 seconds
    }, 30000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  useEffect(() => {
    
      datafun(); // Fetch data when authenticated
      profilefun()
    }, []) 

    const datafun = ()=>{
      axios.get("http://localhost:8000/user/getUser",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("this is a response from the server",response.data);
        setData(response.data); // Set the data in state
        console.log("this is a data from the server",data);
      }) .catch((error) => {  
        console.error("Error fetching data:", error);
      } )

    }


    const profilefun = ()=>{

      console.log("this is a profilefun  function in auth")
      axios.get("http://localhost:8000/user/getprofile",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log("this is a response from the server",response.data);
        setProfile(response.data); // Set the data in state
        // console.log("this is a data from the server",data);
      }) .catch((error) => {  
        console.error("Error fetching data auth :", error);
      } )

    }


  return (
    <>
      <MyContext.Provider value={{isauth , login , role ,loading , logout , data , profile}}>
         {children}
      </MyContext.Provider>
    </>
  )
}

export const useAuth = () => useContext(MyContext);

export default Authcontext