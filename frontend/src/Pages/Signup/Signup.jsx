


import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Auth/Authcontext';
// import './Signup.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [cat , setCat] = useState([])
  const [subcat , setSubcat] = useState([])
  const navigate = useNavigate();
  const { login } = useAuth();


  //  radio buttton
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');

  // Handle gender change
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Handle role change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (!username || !phone || !email || !password || !role || !gender) {
      alert('All fields are required');
      return;
    }
        console.log("the  ")
    const data = {
     username,
     phone,
     email,
     password,
     role,
     gender,
     category,
     subcategory
    };
    console.log("the handle submit fun cation runnig" , data)
    axios
      .post('http://localhost:8000/user/signup', data)
     

      .then((res) => {
       
        login(res.data.token);
        
      })
      .catch((err) => {
        console.error('Signup error:', err);
        alert('Signup failed. Please try again.');
      });
  };
   
  const categoryOptions = ()=>{
    console.log("Fetching categories...");
      axios.get("http://localhost:8000/user/getcategory")
      .then((res) => {
        console.log("Data fetched from database:", res.data);
        setCat(res.data);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      } );
  }

  console.log("Selected category:", category); 
  
  const subcategoryOptions = () => {
    const data = { category: category };
    axios.post("http://localhost:8000/user/getsubcategory", data)
      .then((res) => {
        console.log("Data fetched from database:", res.data);
        setSubcat(res.data); // setSubcat, not setSubcategory
        // subcategoryOptions();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    
  };
   console.log("Selected subcat:", subcat);
useEffect(() => {
    categoryOptions()
  },[]);
  
  useEffect(() => {
    if (category) {
      subcategoryOptions();
    }
  }, [category]); 

  return (
    <div className=" sec-signup ">
      <form
        className=" signup-form mt-11 "
        onSubmit={handleSubmit}
        
      >
        <h2 className=" text-black " >Sign Up</h2>

        <div className="signup-name">
        <FaUser  className='signup-user-icon' />

          <input
            type="text"
            id="username"
            className="signup-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="signup-email">
        <MdEmail className='signup-email-icon' />

          <input
            type="email"
            id="email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="signup-number">
        <FaPhone className='signup-number-icon' />

          <input
            type="text"
            id="phone"
            className="signup-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your number"
          />
        </div>
        <div className="signup-password">
        <RiLockPasswordFill className='signup-password-icon' />
          <input
            type="password"
            id="password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div>
      {/* Gender Selection */}
      <div>
        <h3>Gender</h3>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={gender === 'male'} 
            onChange={handleGenderChange} 
          /> 
          Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={gender === 'female'} 
            onChange={handleGenderChange} 
          /> 
          Female
        </label>
      </div>
      {/* Role Selection */}
      <div>
        <h3>Role</h3>
        <label>
          <input 
            type="radio" 
            name="role" 
            value="client" 
            checked={role === 'client'} 
            onChange={handleRoleChange} 
          /> 
          Client
        </label>
        <label>
          <input 
            type="radio" 
            name="role" 
            value="professional" 
            checked={role === 'professional'} 
            onChange={handleRoleChange} 
          /> 
          Professional
        </label>

        <select
  name="category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
<option value="">Select a category</option>
  {cat.map((catItem) => (
    <option key={catItem._id} value={catItem.category}>
      {catItem.category}
    </option>
  ))}
</select>
{ console.log("Selected category:", category) } 
{ console.log("Selected category:", subcat) } 
{category && category.length > 0 ? (
        <select
          name="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
         <option value="">Select a Subcategory</option>
         
         {subcat.map(sub =>
  sub.subcategories.map(a => (
    <option key={a.name} value={a.name}>
      {a.name}
    </option>
  ))
)}
{console.log("Selected subcat:", subcat)}
 
        </select>
      ) : (
        <p>No categories available.</p>
      )}

      </div>
    </div>
        <button type="submit" className="singup-submit  ">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

