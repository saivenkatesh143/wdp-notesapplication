// "database" as object literal
const users = [
    {
        emailid: "saivenkateshsure@gmail.com",
         pwd: "sudharani"
    },
    {
        emailid: "saivenkateshsure1@gmail.com",
         pwd: "sudharani1"
      
    },
    {
        emailid: "saivenkateshsure2@gmail.com",
        pwd: "sudharani2"
    }
  ];
  
  function getAllUsers() {
    return users; 
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.emailid === user.emailid);
    if(!cUser[0]) throw Error("email id not found");
    if(cUser[0].pwd !== user.pwd) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };



 