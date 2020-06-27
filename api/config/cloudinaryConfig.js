const cloudinary = require('cloudinary') // { config, uploader } from 'cloudinary';
require('dotenv').config()

const cloudinaryConfig = (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'scaredsleepless',
    api_key: process.env.CLOUDINARY_API_KEY || '292256719632758',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'KeuW0xZPkc8oO1bBboEwvSASxpk',
  });
  next();
}

module.exports = { cloudinaryConfig, uploader: cloudinary.uploader };
