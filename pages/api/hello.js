// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismadb from "../../lib/prismadb";

export default async function handler (req, res) {
  //creating users for the database;


  if(req.method=="GET"){
    res.status(200).json("Ok get request");
  }

  else if(req.method=="POST"){
    const {firstname,lastname,username,password}=req.body;

    const user=await prismadb.user.findMany({
      where:{
         OR:[
          {
            "firstname":firstname
          },
          {
            "username":username
          }
         ]
      }
    })
    console.log(user.length);
    //if user is not present in the db;
    if(!user.length){
      await prismadb.user.create({
        data:{
          firstname,
          lastname,
          username,
          password
        }
      })
      res.status(200).json("Created User succesfully...");
    }
    else{
      res.status(200).json("User Existed Already...");
    }
   
  }

  

  //finding all users from the database;
  // const alluser=await prismadb.user.findMany({});
  // res.status(200).json(alluser);


  //updating data from the database and fetching updated data;
  //where command is for only unique values in the db;
  // await prismadb.user.update({
  //   where:{
  //     firstname:"hero"
  //   },
  //   data:{
  //     lastname:"vibha",
  //     username:"vibha",
  //     password:"vibha"
  //   }
  // });
  // const updateduser=await prismadb.user.findMany({});
  // res.status(200).json(updateduser);

  // deleting user from the database;
  // await prismadb.user.delete({
  //   where:{
  //     firstname:"hero"
  //   }
  // })
  // res.status(200).json("deleted user sucessfully");
}
