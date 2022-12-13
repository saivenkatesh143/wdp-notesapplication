import {fetchData,setCurrentUser,getCurrentUser} from './main.js'




class Registration{
    constructor(firstname, lastname, email, password, Rpassword,textnote){
        this.firname=firstname;
        this.lname=lastname; 
        this.emailid=email;
        this.pwd=password;
        this.pwd1=Rpassword;
        this.textnotes=textnote;
    }
    getFname(){
        return this.firname;
    }
    getLname(){
        return this.lname;
    }
    getEmailid(){
        return this.email;
    }
    getPwd(){
        return this.pwd;
    }
    getPwd1(){
        return this.pwd1;
    }
    
    setFname(firstname){
        this.firname=firstname;
    }

    setLname(lastname){
        this.lname=lastname;
    }
    setEmailid(email){
        this.emailid=email;
    }
    setPwd(password){
        this.pwd=password;
    }
    setPwd1(Rpassword){
        this.pwd1=Rpassword;
    }

    
}






const registration=document.getElementById("note-form");
if(registration) registration.addEventListener('submit',clearregister)
function clearregister(e){
    e.preventDefault();
    let firname=document.getElementById('fname').value;
    let lasname=document.getElementById('lname').value;
    let emailids=document.getElementById('emailid').value;
    let passwrd=document.getElementById('pwd').value;
    //let Repasswrd=document.getElementById('pwd1').value;
    
    
const registration1=new Registration(firname,lasname,emailids,passwrd)
fetchData("/users/register", registration1, "POST")
 .then((data) => {
    setCurrentUser(data);
     alert("registration success");
   window.location.href = "note.html";
 })
 .catch((err) => {
  // console.log(`Error!!! ${err.message}`)
  alert("not done");
 }) 

/*
console.log(`${firname}`)
console.log(`${lasname}`)
console.log(`${emailids}`)
console.log(`${passwrd}`)
console.log(registration1)
*/
}


const loginform=document.getElementById("login-form");
if(loginform) loginform.addEventListener('submit',clearregister1)
function clearregister1(e){
    e.preventDefault();
    let emailids=document.getElementById('emailid').value;
    let passwrd=document.getElementById('pwd').value;
    
    const registration2=new Registration(null, null, emailids,passwrd)
   fetchData("/users/login", registration2, "POST")
    .then((data) => {
        setCurrentUser(data);
        alert("Login success");
      window.location.href = "note.html";
    })
    .catch((err) => {
     // console.log(`Error!!! ${err.message}`)
     alert("Incorrect username or password");
     loginform.reset();
    }) 
}
class RegistrationNote{
    constructor(textnote){
        this.notecontent=textnote;
    }
    getTextnotes(){
        return this.notecontent;
    }
    setTextnotes(){
        this.notecontent=textnote;
    }
}

let user=getCurrentUser()

const notedata=document.getElementById("note-form1");
if(notedata) notedata.addEventListener('submit',clearregister2)
function clearregister2(e){
    e.preventDefault();
let notedata2=document.getElementById("textnotes").value;
    const registration10=new RegistrationNote(notedata2);
    registration10.user_id = user.userID;
    fetchData("/notes/createnote", registration10, "POST")
    .then((data) => {
        alert("note added");
      window.location.href = "note.html";
    })
    .catch((err) => {
     console.log(`Error!!! ${err.message}`)
     alert("test");
    }) 
    //console.log(`${textdata}`)
}

if(user&&notedata) getallnotes();

function getallnotes(){
    let textdata=document.getElementById('textnotes');
    fetchData("/notes/getnote",user,"POST")
    .then((data) => {
 //console.log(data);
 for(let i=0;i<data.length;i++){
 textdata.value=data[i].notecontent;
 }


    })
}
