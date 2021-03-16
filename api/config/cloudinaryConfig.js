const cloudinary = require('cloudinary') // { config, uploader } from 'cloudinary';
require('dotenv').config()

const cloudinaryConfig = (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'xx',
    api_key: process.env.CLOUDINARY_API_KEY || 'xx',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'xx',
  });
  next();
}

module.exports = { cloudinaryConfig, uploader: cloudinary.uploader };
