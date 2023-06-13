
const form = document.getElementById("form")
const emailInput = document.getElementById('email');
const text = document.getElementById("erortext");
const requestBuutton = document.getElementById("green-button");

requestBuutton.addEventListener("click", (event) => {
  event.preventDefault()
  if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text.style.display = 'flex'
}
if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text.style.display = 'none'
}
})









