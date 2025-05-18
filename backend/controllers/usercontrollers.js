const { generateToken } = require("../middleware/jwtAuth");
const User = require("../model/userschema");
const bcrypt = require("bcrypt");
 const category = require("../model/category");
 const message = require("../model/messageschema");
 const jobpost = require("../model/jobpost");
const { all } = require("../route/userroute");
const userSignup = async (req, res) => {
  const { username, email, phone, password, role, gender, category, subcategory } = req.body;


  try {
    // Check if username or email already exists
    const existingUser = await User.find({
      $or: [{ username: username }, { email: email }],
    });
    
    if(existingUser.length > 0) {
      return res
        .status(400)
        .json({ message: "Username or email already exists insignup " });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      phone,
      role,
      gender,
      category,
      subcategory,
      password: hashedPassword,
      aboutus , 
    });

    await newUser.save();

    const data = await User.find({ username });

    const id = data[0]._id;

    const payload = {
      username: username,
      userid: id,
      role: role,
    };
    const token = generateToken(payload);

    res.status(201).json({ token, message: "Signup successful" });
  } catch (err) {
    console.error("signup error", err);
    res.status(500).send("There is an error in the backend");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // console.log("Login attempt with:", username, password);

    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      console.log(" the user is not exist ");
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      console.log("the password is not exist");
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const payload = {
      username: user.username,
      userid: user._id,
      role: user.role,
    };

    // console.log("this is a pay load ", payload);

    const token = generateToken(payload);

    res
      .status(200)
      .json({
        message: "Login successful",
        user: { username: user.username },
        token: token,
      });
    // console.log("the user login succesfully");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

const alldata = async (req, res) => {
  try {
    const data = await category.find({});
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}

const allprofile = async (req, res) => {
  const  userId = req.user.username;
  console.log( "this is the user id in allprofile ",userId)
  try {
    const data = await User.find({ username : userId });
    if (data.length === 0) {   
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}


const categorydata = async (req, res) => {
 
  try {
    const data = await category.find({});
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}


const  subcategorydata = async  (req, res) => {
 console.log("subcategory data is called ");
  try {
    const data = await category.find({ category : req.body.category });
    if (data.length === 0) {   
      return res.status(404).json({ message: "No subcategories found" });
    }
  
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}   
const proFile = async (req, res) => {
  // console.log("proFile data is called ");
  // console.log("this is the id ",req.body)
 const { id } = req.body;
  // console.log("this is the id ",id)
  try {
    const data = await User.find({ _id : id });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}

const chat = async(req, res) => {
  console.log("chat data is called ");
  const  id  = req.user.userid;

  // console.log("this is the id ",id)
  const userId = req.user.username; // Assuming you have the user ID from the token
  // console.log("this is the id ",userId)
  try {
    const data = await message.find({
      $or:[
        { sender:  userId },
        { receiver: id     }
      ]
    });
    
    if (data.length === 0) {
      console.log("No messages found for this user");
      return res.status(404).json({ message: "No user found" });
    }
        console.log("this is the data" , data)
      const receiverIds = data.map(msg => msg.receiver);
      const senderIds = data.map(msg => msg.sender);
    // console.log("this is the sender id ",senderIds);
    // console.log("this is the recevier id ",receiverIds);
    const uniqueReceiverIds = [...new Set(receiverIds)];
    const uniquesenderIds = [...new Set(senderIds)];
       const chatdata = await User.find({
        $or:[{_id :  uniqueReceiverIds},
          {username : uniquesenderIds}
        ]
       })
    console.log("this is the chat data ",chatdata)
    res.status(200).json(chatdata);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}


  const jbpost =   async (req, res) => {
  try {
    const jobData = req.body;

    const newJob = new jobpost(jobData);
    await newJob.save();

    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (error) {
    console.error("Job posting error:", error);
    res.status(500).json({ message: "Failed to post job", error });
  }
}

const allservices = async (req, res) => {
  try {
    const data = await jobpost.find({});
    if (data.length === 0) {   
      return res.status(404).json({ message: "No services found" });
    }
    console.log("this is the allservices data ",data)
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  } 
}

const fullServices = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("this is the id", id);

    const data = await jobpost.find({ _id: id });

    if (data.length === 0) {
      return res.status(404).json({ message: "No services found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};


 module.exports = { userSignup, login , alldata , allprofile , categorydata ,subcategorydata , proFile ,  chat , jbpost , allservices , fullServices };

