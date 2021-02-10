import express from 'express'
import awsSdk from 'aws-sdk'
import multer from 'multer'
import multerS3 from  'multer-s3'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  bucket: process.env.DO_BUCKET,
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}
const storage = multerS3({
    s3: s3,
    acl: 'public-read',
    key: function(request, file, cb) {
        console.log(file);
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },   
})
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
});

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router