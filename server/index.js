const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const fileUpload = require('express-fileupload')
connectDB();
const app = express();

app.use(fileUpload({
    useTempFiles: true
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://master--gorgeous-centaur-9b4db8.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
 
app.use(routes);
app.use(courseRoutes);

app.listen(
    process.env.PORT,
    () => console.log("Backend is running")
)