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
      firtsname:"sai venkatesh",
      lastname:"sure",
      emailid: "saivenkateshsure2@gmail.com",
       pwd: "sudharani2"
    } 
  ];
  


  const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    emailid VARCHAR(255) NOT NULL UNIQUE,
    pwd VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

async function register(user) {
  let cUser = await getUser(user.emailid);

  if(cUser.length > 0) throw error("email already in use");

  const sql = `INSERT INTO users (firstname,lastname,emailid, pwd)
    VALUES ("${user.firstname}", "${user.lastname}","${user.emailid}","${user.pwd}");
  `
  await con.query(sql);
  return await login(user);
}

//register(users[0])

async function getAllUsers() {
   const sql = `SELECT * FROM users;`;
   let users = await con.query(sql);
   //console.log(users)
}

getAllUsers();

async function getUser(emailid) {
  let sql = `
    SELECT * FROM users 
      WHERE emailid = "${emailid}"
  `;

  return await con.query(sql);  
}

async function login(user) { 
  let cUser = await getUser(user); 
  
  if(!cUser[0]) throw Error("email not found");
  if(cUser[0].pwd !== user.pwd) throw Error("Password incorrect");
  console.log(cUser[0]);

  return cUser[0];
}
 login(users[0]);
  
  function getAllUsers() {
    return users; 
  }



// Update User function

async function editUser(user) {
  let sql = `UPDATE users 
    SET emailid = "${user.emailid}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}
// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE emailid = "${user.emailid}"
  `;
  }
  return await con.query(sql);  
}


module.exports = { getAllUsers, login, register};


 