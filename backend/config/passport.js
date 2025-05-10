const { PrismaClient } = require('@prisma/client');
const prisma=new PrismaClient()
const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.c_id,
    clientSecret:process.env.c_secret,
    callbackURL: process.env.call_back
  },
  async function(accessToken, refreshToken, profile, cb) {
   try{
    console.log("AccessToken:", accessToken);
      console.log("Google Profile:", profile);
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
      
  let user= await prisma.user.findUnique({ 
    where:{
        email: email }
    })
    
    if(!user){
        user= await prisma.user.create({
            data:{
                name:profile.displayName,
                email:email,
                password:""
                
            }
        })  
    }return cb(null,user)
}catch(err){
    console.log("erorr",err);
    return cb(err);
}

  }
));
passport.serializeUser((user,cb)=>{
    cb(null,user.id);
})

passport.deserializeUser(async(id,cb)=>{
    const existingUser = await prisma.user.findUnique({
        where : {
            id
        }
    })
    cb (null,existingUser);
})

