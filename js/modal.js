function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeModalButton = document.querySelector(".close")
const submitButton = document.querySelector(".btn-submit")


// icon color
const iconMenu= document.querySelector(".icon")

iconMenu.addEventListener("click", function() {
  document.querySelector(".fa-bars").classList.toggle("color-white")
})



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeModalButton.addEventListener("click", closeModal)




// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}





// submit form &&fonction qui va verifier que tout est bon
const modalBody = document.querySelector(".modal-body")


function messageConfirmation() {
  if (modalBody) {
  modalBody.innerHTML = "<div>Merci ! Votre réservation a été reçue.</div><button class='btn-submit button flex-end' id='btn-close'>Fermer</button>"
  document.querySelector("#btn-close").addEventListener("click", closeModal)
  }
} 

submitButton.addEventListener("click", messageConfirmation)



// error messages form

    // red box

function redBox (constName) {
  constName.classList.add("input-wrong")
}
function unredBox (constName) {
  constName.classList.remove("input-wrong")
}
    //names

const firstName = document.querySelector("#first")
const lastName = document.querySelector("#last")

function nameLengthIsRight(constName) {
  if (constName.value.length >= 2) {
    unredBox(constName)  }
  else {
    redBox(constName)  }
}



firstName.addEventListener("change", function(){nameLengthIsRight(firstName)})
lastName.addEventListener("change", function(){nameLengthIsRight(lastName)})

    //mail

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  
const email = document.querySelector("#email")

function emailIsRight(constName) {
  if (regexEmail.test(constName.value)) {
    unredBox(constName)
  }
  else {
    redBox(constName)
  }
}

email.addEventListener("change", function() {emailIsRight(email)})

    //birthdate + quantity

const birthdate = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")

function numberIsRight(constName) {
  if (constName.value){
    unredBox(constName)
  }
  else {
    redBox(constName)
  }
}

birthdate.addEventListener("focusout", function() {numberIsRight(birthdate)})
quantity.addEventListener("focusout", function() {numberIsRight(quantity)})

    // using conditions

const usingConditions = document.querySelector("#checkbox1")

function usingConditionsChecked () {
  if (usingConditions.checked)
  return true
}

    //red text
