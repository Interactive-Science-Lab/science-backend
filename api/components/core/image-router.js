const express = require('express');

const { log } = require('./log-middleware.js')

const multer = require('../../config/multer')
const multerUploads = multer.multerUploads
const dataUri = multer.dataUri

const cloudinary = require('../../config/cloudinaryConfig')
const uploader = cloudinary.uploader
const cloudinaryConfig = cloudinary.cloudinaryConfig


const customPost = (router, ClassDatabase) => {
  router.post('/', multerUploads, cloudinaryConfig, (req, res) => {
    const imageData = req.body;

    //store the process image as a 'data-uri'
    const file = dataUri(req).content;

    //Uploading the image to cloudinary
    uploader.upload(file)
      .then((result) => {
        imageData.image_url = result.url;

        //Add the image to the database.
        ClassDatabase.add(imageData, ClassDatabase.findById)
          .then(image => {
            log(req, {}, image)
            res.status(201).json(image);
          })
          .catch(err => {
            res.status(500).json({ err, message: 'Failed to create new image' });
          });
      })
      .catch((err) => res.status(400).json({
        messge: 'someting went wrong while processing your request',
        data: { err }
      }))

  });
}

const customPut = (router, ClassDatabase) => {
  router.put('/:id', multerUploads, cloudinaryConfig, (req, res) => {
    const { id } = req.params;
    const imageData = req.body;

    if (req.file) {
      const imageFile = req.file;
      //store the process image as a 'data-uri'
      const file = dataUri(req).content;
      //Uploading the image to cloudinary


      uploader.upload(file)
        .then((result) => {
          imageData.image_url = result.url;
          //Add the image to the database.
          ClassDatabase.findById(id)
            .then(image => {
              if (image) {
                if (imageData.thumbnail) { ClassDatabase.removeThumbnail(image) }
                ClassDatabase.update(imageData, id, ClassDatabase.findById)
                  .then(updatedImage => {
                    res.json(updatedImage);
                  });
              } else {
                res.status(404).json({ message: 'Could not find image with given id' });
              }
            })
            .catch(err => {
              res.status(500).json({ message: 'Failed to update image' });
            });
        })
        .catch((err) => res.status(400).json({
          messge: 'someting went wrong while processing your request',
          data: { err }
        }))
    } else {
      ClassDatabase.findById(id)
        .then(image => {
          if (image) {
            log(req, image) //Find a way to log that being a thumbnail again
            //If the incoming image is being set as thumnbnail, remove the current one.
            if (imageData.thumbnail) { ClassDatabase.removeThumbnail(image) }
            ClassDatabase.update(imageData, id, ClassDatabase.findById)
              .then(updatedImage => {
                res.json(updatedImage);
              });
          } else {
            res.status(404).json({ message: 'Could not find image with given id' });
          }
        })
        .catch(err => {
          res.status(500).json({ message: 'Failed to update image' });
        });
    }
  });
}

module.exports = {
  customPost,
  customPut
}