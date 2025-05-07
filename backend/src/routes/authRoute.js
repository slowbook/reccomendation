const express = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient() ;
require('dotenv').config();

const authRouter = express.Router() ;

authRouter.post('/signup',async (req,res)=>{
    const data = req.body;
    const user=await prisma.user.findUnique({
        where:{
            email:data.email
        }
    })  
    const hashedPassword = await bcrypt.hash(data.password , 6) ;
    if(!user){
        const newUser= await prisma.user.create({
            data:{
                name:data.name,
                email:data.email,
                password: hashedPassword
            }
        })  
        const token= sendToken(newUser.email) ;
        res.json({message:`Welcome ${data.name}` , token : token})
    }else{
        res.json({message:'User already Exists'})
    }
})

authRouter.post('/login',async (req,res)=>{
    const data= req.body;
    const existingUser = await prisma.user.findUnique({
        where : {
            email : data.email
        }
    })

    if(existingUser){
        const isPasswordValid = await bcrypt.compare(data.password , existingUser.password) ;
        if(isPasswordValid){
            const token=sendToken(existingUser.email);
            res.json({token})
        }
        else {
            res.json({message:'User does not Exist or Invalid credentials'})
        }
    }
    else {
        res.json({message:'User does not Exist or Invalid credentials'})
    }
})

function sendToken(email){
    const token= jwt.sign({
        email:email
    },process.env.JWT_SECRET);
    return token;
}



module.exports = {
    authRouter
}