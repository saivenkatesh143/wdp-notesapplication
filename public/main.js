// getUsers button 
let ptn=document.getElementById("btn-users")
if(ptn) ptn.addEventListener('click', getUsers)

function getUsers() {
     fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}


// Fetch method implementation:
//async function fetchData(route = '', data = {}, methodType) {
    //const response = await fetch(`http://localhost:3000${route}`, {
     // method: methodType, // *GET, POST, PUT, DELETE, etc.
     // mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      //headers: {
      //  'Content-Type': 'application/json'
      //},
     // redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
   // });
   // if(response.ok) {
    //  return await response.json(); // parses JSON response into native JavaScript objects
   // } else {
     // throw await response.json();
 //   }
 // }
  




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
    let Repasswrd=document.getElementById('pwd1').value;
    
    
const registration1=new Registration(firname,lasname,emailids,passwrd,Repasswrd)
console.log(`${firname}`)
console.log(`${lasname}`)
console.log(`${emailids}`)
console.log(`${passwrd}`)
console.log(`${Repasswrd}`)
console.log(registration1)


}


const loginform=document.getElementById("login-form");
if(loginform) loginform.addEventListener('submit',clearregister1)
function clearregister1(e){
    e.preventDefault();
    let emailids=document.getElementById('emailid').value;
    let passwrd=document.getElementById('pwd').value;
    
    const registration2=new Registration(null, null, emailids,passwrd,null)
    console.log(`${emailids}`)
    console.log(`${passwrd}`)
  //  fetchData("/users/login", registration2, "POST")
    //.then((data) => {
      //console.log(data);
      //window.location.href = "note.html";
    //})
    //.catch((err) => {
      //console.log(`Error!!! ${err.message}`)
   // }) 
}
class RegistrationNote{
    constructor(textnote){
        this.textnotes=textnote;
    }
    getTextnotes(){
        return this.textnotes;
    }
    setTextnotes(){
        this.textnotes=textnote;
    }
}


const notedata=document.getElementById("note-form1");
if(notedata) notedata.addEventListener('submit',clearregister2)
function clearregister2(e){
    e.preventDefault();
    let textdata=document.getElementById('textnotes').value;
    const registration1=new RegistrationNote(textdata)
    console.log(`${textdata}`)
}

