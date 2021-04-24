const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let status = require("statuses");
const User = require("../../Model/user.model");


module.exports.userRegistration=async(req,res)=>{
    try{
        let{email,name,password,mobile,DOB,country}=req.body;
        const User = model.user;
        const hash = await bcrypt.hash(password, 10);
        const userIDGet = await User.findOne({
            // where: { DID1: DID1,email:email,mobile,mobile:mobile },
            where: {
              $or: {
                'name': name,
                'email': email,
                'mobile': mobile
              },
            },
          });
          if (userIDGet == null || userIDGet == ""){
              var userCreate=await User.create({
                email:email,
                name:name,
                password:hash,
                mobile:mobile,
                DOB:DOB,
                country:country      
              });
              if(userCreate!=""){
                  res.status(200).json({
                      success:true,
                      message:"user registration successfull"
                  })
              }
              else{
                  res.status(400).json({
                      success:false,
                      message:"something went wrong"
                  })
              }
          }
          else{
                res.status(400).json({
                    success:false,
                    message:"user already exists"
                })
          }
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"something went wrong"
        })
    }
};


module.exports.userlogin=async(req,res)=>{
    try{
        let{email,password}=req.body;
        const User = model.user;
        const userData = await User.findOne({
            where: {
                email: email,
                status:0
              }
          });
          if (userData == null || userData == "") {
           res.status(400).json({
               success:false,
               message:"user not found"
           })
          }
          else{
            const pwd = userData.password;
            const matchResult = await bcrypt.compare(password, pwd);
            if (matchResult == true){
                //token
                res.status(200).json({
                    success:true,
                    message:"user login successfull"
                })
            }
            else{
                res.status(400).json({
                    success:false,
                    message:"please enter correct password"
                })
            }
          }
        }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports.userUpdate=async(req,res)=>{
    try{
        let{email,name,mobile,DOB,country,}=req.body;
        const User = model.user;
         var userUpdate=await User.update({
            name:name,
            mobile:mobile,
            DOB:DOB,
            country:country
            },{
                where : {
                    email:email
                }
            });
            if(userUpdate!=null || userUpdate!=""){
                res.status(200).json({
                    success:true,
                    message:"user updated"
                })
            }
          else{
              res.status(400).json({
                  success:false,
                  message:"User not found"
              })
          }
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports.userDelete=async(req,res)=>{
    try{
          let{email,name}=req.body;
          const User = model.user;
          var userdelete =await User.update({
              status:1
          },{where:{email:email,name:name}});
          if(userdelete!=null||userdelete!=""){
              res.status(200).json({
                success:true,
                message:"user deleted"
              })
          }
          else{
              res.status(400).json({
                  success:false,
                  message:"user not found"
              })
          }
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"something went wrong"
        })
    }
}

module.exports.listUser=async(req,res)=>{
    try{
        const User = model.user;
        var alluser=await User.findAll({});
        if(alluser!=null||alluser!=""){
            res.status({
                success:true,
                data:alluser,
                message:"all user list"
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:"no users"
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}