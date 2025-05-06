const express = require('express');
const { middleware } = require('./routes/middleware');
const { authRouter } = require('./routes/authRoute');
const app = express()
const port = 3000    

app.use(express.json())
app.get('/', middleware , (req, res) => {
  res.json(`hi ${req.email}`);
})

app.use('/auth',authRouter);

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})
