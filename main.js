class Registration{

    constructor(firstname, lastname, email, password, Rpassword,textnote){
        this.fname=firstname;
        this.lname=lastname; 
        this.emailid=email;
        this.pwd=password;
        this.pwd1=Rpassword;
        this.textnotes=textnote;
    }
    getFname(){
        return this.fname;
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
        this.fname=firstname;
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
    console.log(`${firname}`)
    console.log(`${lasname}`)
    console.log(`${emailids}`)
    console.log(`${passwrd}`)
    console.log(`${Repasswrd}`)


    registration.reset();
}






const loginform=document.getElementById("login-form");
if(loginform) loginform.addEventListener('submit',clearregister1)
function clearregister1(e){
    e.preventDefault();
    let emailids1=document.getElementById('emailid').value;
    let passwrd1=document.getElementById('pwd').value;
    console.log(`${emailids1}`)
    console.log(`${passwrd1}`)

    loginform.reset();
}


const noteform=document.getElementById("note-form1");
if(noteform) noteform.addEventListener('submit',clearregister2)
function clearregister2(e){
    e.preventDefault();
    let notefield1=document.getElementById('textnotes').value;
    console.log(`${notefield1}`)

    noteform.reset();
}







