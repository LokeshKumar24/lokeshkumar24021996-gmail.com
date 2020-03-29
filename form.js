
var name,email,phone,dob,address;
var allNames,allEmails,allPhones,allDob,allAddress;

function details(){
     name=document.form.name.value;
     email=document.form.email.value;
     phone=document.form.phone.value;
     dob=document.form.dob.value;
     address=document.form.address.value;

    console.log(name+""+email+""+phone+""+dob+""+address)

    if ((name==''||name==null)&&(email==''||email==null)&&
    (phone==''||phone==null)&&(dob==''||dob==null)&&
    (address==''||address==null)) {
        alert("please fill all the details")
        return false;
        
    } 
    else {
        if (phone.length==10) {
            localStorage.setItem("name",JSON.stringify(name));
            localStorage.setItem("email",JSON.stringify(email));
            localStorage.setItem("phone",JSON.stringify(phone));
            localStorage.setItem("dob",JSON.stringify(dob));
            localStorage.setItem("address",JSON.stringify(address))
            sendDetails()
        } 
        else {
            alert("please enter 10 digit mobile number");
            return false;      
             }
       }
}

(()=>{
     allNames=localStorage.getItem('name');
     allEmails=localStorage.getItem('email');
     allPhones=localStorage.getItem('phone');
     allDob=localStorage.getItem('dob');
     allAddress=localStorage.getItem('address');
   
       document.getElementById('allDetails').innerHTML=(
       "<td>"+JSON.parse(allNames)+"</td>"+
       "<td>"+JSON.parse(allEmails)+"</td>"+
       "<td>"+JSON.parse(allPhones)+"</td>"+
       "<td>"+JSON.parse(allDob)+"</td>"+
       "<td>"+JSON.parse(allAddress)+"</td>")

})()