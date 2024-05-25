
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const commandesRoutes = require('./routes/commandesRoutes');
const commandeslisteRoutes = require('./routes/CommandeslisteRoutes');


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/SFE');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const storagecmd = multer.diskStorage({
    destination: './upload/commends',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

const uploadcmd = multer({ storage: storagecmd });

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

app.use('/commends', express.static('upload/commends'));

app.post("/uploadcomd", uploadcmd.single('commend'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/commends/${req.file.filename}`
    });
});



app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/',commandesRoutes);
app.use('/',commandeslisteRoutes);

app.get("/", (req, res) => {
    res.send("Express App is Running")
});

const port = 4000;
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port)
    }
    else {
        console.log("Error : ", error);
    }
});
