//navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
};
//Remove menu  on scroll
window.onscroll = () => {
  navbar.classList.remove("active");
};


//form validation
function formValidation(){
  const name= document.getElementById('name').value;
  const email= document.getElementById('email').value;
  const number= document.getElementById('number').value;
  const message= document.getElementById('message').value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(name=='' || email=='' || number==''|| message==''){
    alert('All fields must be filled out');
    return false;
  }

  if(!emailPattern.test(email)){
    alert("Please enter a valid email address");
    return false;
  }

  if(number.length !==10){
    alert('please enter 10-digit number');
    return false;
  }

  alert('Your massege sent has been successfully')

  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('number').value='';
  document.getElementById('message').value='';

  return true;
}