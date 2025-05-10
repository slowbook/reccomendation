const express = require('express');
const { middleware } = require('./routes/middleware');
const { authRouter } = require('./routes/authRoute');
const cors = require("cors") ;
const app = express()
const port = 3000    
const passport=require('passport')
const session=require('express-session')
require('../config/passport')


app.use(express.json())
app.use(cors()) ;
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:"43"
}))
app.use(passport.initialize());
app.use(passport.session());


app.get('/main', middleware , (req, res) => {
  res.json(`hi ${req.email}`);
})

app.use('/auth',authRouter);


app.listen(port,()=>{
    console.log(`Running on port ${port}`);
  
})
