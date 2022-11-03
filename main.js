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
    getTextnotes(){
        return this.textnotes;
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

    setTextnotes(){
        this.textnotes=textnote;
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
}


const loginform=document.getElementById("login-form");
if(loginform) loginform.addEventListener('submit',clearregister1)
function clearregister1(e){
    e.preventDefault();
    let emailids=document.getElementById('emailid').value;
    let passwrd=document.getElementById('pwd').value;
    
    const registration1=new Registration(emailids,passwrd)
    console.log(`${emailids}`)
    console.log(`${passwrd}`)
}

const notedata=document.getElementById("note-form1");
if(notedata) notedata.addEventListener('submit',clearregister2)
function clearregister2(e){
    e.preventDefault();
    let textdata=document.getElementById('textnotes').value;
    const registration1=new Registration(textdata)
    console.log(`${textdata}`)
}