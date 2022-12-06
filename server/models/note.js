const notedata = [
  {
      user_id: "1",
       notecontent:"test"
  },
];





const con = require("./db_connect");
//require("./user")

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    notecontent VARCHAR(255) NOT NULL,
    user_id INT,
    CONSTRAINT note_pl PRIMARY KEY(noteID),
    CONSTRAINT note_fk FOREIGN KEY(user_id) REFERENCES users(userID)
   
  ); `
  await con.query(sql);
}
createTable();
async function getallnotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  //console.log(notes)
} 

getallnotes();

async function getnote(note) {
  let sql = `
    SELECT * FROM notes 
      WHERE user_id = "${note.user_id}"
  `;

  return await con.query(sql);  
  
}

  
  




async function createnote(note){

  let sql=`INSERT INTO notes (user_id,notecontent) VALUES ("${note.user_id}", "${note.notecontent}");`

let data=await con.query(sql);


return {success:"Note Added"};

}

async function deletenote(note){
  let sql=`DELETE FROM notes where user_id="${note.user_id}"`;

  return await con.query(sql);
}
async function editnote(note) {
  let sql = `UPDATE notes 
    SET notecontent = "${note.notecontent}"
    WHERE noteID = ${note.noteID}
  `;
  
  await con.query(sql);
  let updatedNote = await getnote(note);
  return updatedNote[0];
  }


createnote(notedata[0])
module.exports = {getallnotes,getnote,createnote,deletenote,editnote};


