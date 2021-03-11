const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();

const connectDB = require('./server/database/connection');
//important for collaborative enviroment
dotenv.config({ path: 'config.env' });



const PORT = process.env.PORT || 1011
 ;
connectDB();



//body parser, parsing the request to the body-parser
/*body-parser parses your request and converts it into a format from which you can easily 
extract relevant information that you may need. extended true will accept object value can contain any format*/
app.use(bodyparser.urlencoded({ extended: true }));




//morgan use, ( middle ware is used for authentication between request and response)
//now morgan is used to display something in the console , tiny show the tiny part 
app.use(morgan("tiny"));



//loading assets, that is connecting the assets folder with the node app, further we can just add the file to this folder 
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
// css/cssfile

app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
//js/jsfile

app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
// img /img.jpg


//load routers
app.use('/', require('./server/routes/router'))


//path to be set if in future the ejs files are shifted to ejs folder 
/*
 app.set('views',path.join(__dirname,"views/ejs")) 
 */

//setting view engine 
app.set('view engine', 'ejs')







app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);
})