// models/Category.js
const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

// Subcategory schema
const SubcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false }); // disable separate _id for subdocs if you don’t need it

// Main Category schema
const CategorySchema = new Schema({
  // MongoDB will auto-generate an ObjectId for _id
  category: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  banner: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    trim: true
  },
  subcategories: {
    type: [SubcategorySchema],
    validate: v => Array.isArray(v) && v.length > 0, // ensure at least one subcategory
  }
}, {
  timestamps: true,   // adds createdAt / updatedAt
  versionKey: false   // disable __v
});
 const category =  model('Categories', CategorySchema);

module.exports =  category
