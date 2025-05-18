const   {userSignup, login, alldata , allprofile ,categorydata ,  subcategorydata  , chat , proFile, jbpost , allservices , fullServices} = require("../controllers/usercontrollers");
 const {verifyToken} = require('../middleware/jwtAuth')
const express = require("express");

const Route = express.Router();
Route.post('/signup', userSignup )
Route.post('/login' ,login)
Route.get('/getUser', alldata)
Route.get('/getprofile',verifyToken , allprofile)
Route.get('/getcategory', categorydata)
Route.post('/getsubcategory', subcategorydata)
Route.post('/innerprofile', proFile)
Route.get('/chatuser',verifyToken,chat)
Route.post ('/jobpost', jbpost),
Route.post('/getAllServices', allservices)
Route.post('/fullServices' , fullServices)
module.exports = Route 