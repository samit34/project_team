import React, { useEffect, useState } from 'react';
import BannerImage4 from '../../../public/assets/plumber.jpeg?url'; // Import the local image
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Filter } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
// Dummy data array with multiple user objects


const Chatuser = () => {

const token = localStorage.getItem("token");
const decodedToken = jwtDecode(token);
const username = decodedToken.username;
console.log("this is the username ",username)
  const [User, setUser] = useState([]);

  const Chatuse = () => {
    axios.get("http://localhost:8000/user/chatuser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {  
      console.log("Data fetched from database profile:", res.data);
      setUser(res.data);
    }) .catch((error) => {
      console.error("Error fetching data chatuse profile:", error);
    });
   
  }
  
  useEffect(() => {
    Chatuse()},[]);
    

    const filtername = User.filter((user) => user.username !== username);
      console.log("this is the filter name ",filtername)


  return (
    <div>
      {filtername.map((user) => (
        <Link  to={`/chat/${user._id}`}  >
        <div 
          
          style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}
        >
          <img 
            src={user.photo} 
            alt={user.name} 
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px'
            }}
          />
          <h2>{user.username}</h2>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Chatuser;
