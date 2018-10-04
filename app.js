const express = require('express');
const multer = require('multer');
//const upload = multer({
 // dest: 'uploads/' // this saves your file into a directory called "uploads",
	
//}); 

let upload = multer({
    storage: multer.diskStorage({
       destination: (req, file, cb) => {
          cb(null, '/Users/cjnathan/.node-red/pkgbupload/')
     },
     filename: (req, file, cb) => {
        //let customFileName = crypto.randomBytes(18).toString('hex'),
            fileExtension = file.originalname.split('.')[1] // get file extension from original file name
            cb(null, file.originalname)
         }
      })
})


const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/', upload.single('file-to-upload'), (req, res) => {
//console.log(req)
  res.redirect('/');
});

app.listen(3000);
