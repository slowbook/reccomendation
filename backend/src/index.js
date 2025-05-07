const express = require('express');
const { middleware } = require('./routes/middleware');
const { authRouter } = require('./routes/authRoute');
const cors = require("cors") ;
const app = express()
const port = 3000    

app.use(express.json())
app.use(cors()) ;
app.get('/main', middleware , (req, res) => {
  res.json(`hi ${req.email}`);
})

app.use('/auth',authRouter);

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})
