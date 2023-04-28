// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismadb from "../../lib/prismadb";

export default async function handler (req, res) {
  //creating users for the database;

  // await prismadb.user.create({
  //   data:{
  //     firstname:"hero",
  //     lastname:"chandola",
  //     username:"herovinay",
  //     password:"herovinay"
  //   }
  // })
  // res.status(200).json("ok");

  //finding all users from the database;
  // const alluser=await prismadb.user.findMany({});
  // res.status(200).json(alluser);


  //updating data from the database and fetching updated data;
  //where command is for only unique values in the db;
  await prismadb.user.update({
    where:{
      firstname:"hero"
    },
    data:{
      lastname:"chandole",
      username:"vinni",
      password:"vinni"
    }
  });
  const updateduser=await prismadb.user.findMany({});
  res.status(200).json(updateduser);

  // deleting user from the database;
  // await prismadb.user.delete({
  //   where:{
  //     firstname:"hero"
  //   }
  // })
  // res.status(200).json("deleted user sucessfully");
}
