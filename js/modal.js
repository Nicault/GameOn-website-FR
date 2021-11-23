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
const submitButton = document.querySelector(".btn-submit")



// icon color
const iconMenu= document.querySelector(".icon")

iconMenu.addEventListener("click", function() {
  document.querySelector(".fa-bars").classList.toggle("color-white")
})



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
const closeModalButton = document.querySelector(".close")

closeModalButton.addEventListener("click", closeModal)




 //creations des div red text
 
const casesFormulaire = document.querySelectorAll(".formData")

let redTexts = []
for (let i = 0 ; i < casesFormulaire.length ; i++) {
  redTexts.push(document.createElement("DIV"))
  redTexts[i].classList.add("red-text" , "opacity0")
  casesFormulaire[i].appendChild(redTexts[i])
}

redTexts[0].textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
redTexts[1].textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
redTexts[2].textContent = "Veuillez entrer une adresse mail valide."
redTexts[3].textContent = "Veuillez entrer votre date de naissance."
redTexts[4].textContent = "Veuillez entrer un nombre."
// redTexts[5].textContent =
redTexts[6].textContent = "Veuillez vérifier que vous avez accepté les conditions d'utilisation."


// error messages form

    // red box

    function redBox (constName) {
      constName.classList.add("input-wrong")
    }
    function unredBox (constName) {
      constName.classList.remove("input-wrong")
    }
    
    // red text 
    
    function redText (array) {
      redTexts[array].classList.remove("opacity0")  
    }
    function unredText (array) {
      redTexts[array].classList.add("opacity0")  
    }
    
    //wrong input
    
    function wrongInput (constName, array) {
      redBox (constName)
      redText (array)
      return false
    }
    
    function goodInput (constName, array) {
      unredBox (constName)
      unredText (array)
      return true
    }



//first + last names

const firstName = document.querySelector("#first")
const lastName = document.querySelector("#last")

function nameLengthIsRight(constName, array) {
  if (constName.value.length >= 2) {
    return goodInput (constName, array)
  }
  else {
    return wrongInput (constName, array)  

  }
}

//email

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  
const email = document.querySelector("#email")

function emailIsRight(){
  if (regexEmail.test(email.value)) {
    return goodInput (email, 2)
  }
  else {
    return wrongInput (email, 2)  

  }
}


//birthdate + quantity

const birthdate = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")

function numberIsRight(constName, array) {
  if (constName.value){
    return goodInput (constName, array)
  }
  else {
    return wrongInput (constName, array) 
  }
}


// using conditions /!\ verifier array si ajout de nouvelles checkboxes !!

const usingConditions = document.querySelector("#checkbox1")
const Checkboxes = document.querySelectorAll(".checkbox-icon")
const usingConditionsCheckbox = Checkboxes[6]

function usingConditionsIsChecked() {
  if (usingConditions.checked){
    return goodInput (usingConditionsCheckbox, 6)
  }
  else {
    return wrongInput (usingConditionsCheckbox, 6)  
  }
}


// Listeners 

firstName.addEventListener("change", function(){nameLengthIsRight(firstName, 0)})
lastName.addEventListener("change", function(){nameLengthIsRight(lastName, 1)})
email.addEventListener("change", function() {emailIsRight()})
birthdate.addEventListener("focusout", function() {numberIsRight(birthdate, 3)})
quantity.addEventListener("focusout", function() {numberIsRight(quantity, 4)})
usingConditions.addEventListener("click", function() {usingConditionsIsChecked(usingConditionsCheckbox, 6)})







// submit form && fonction VALIDATE
const modalBody = document.querySelector(".modal-body") 

let inputs = document.querySelectorAll("input")
let checkboxes = document.querySelectorAll(".checkbox-icon")

function validate() {
  if (modalBody 
    && nameLengthIsRight(firstName, 0) 
    && nameLengthIsRight(lastName, 1) 
    && emailIsRight() 
    && numberIsRight(birthdate, 3) 
    && numberIsRight(quantity, 4) 
    && usingConditionsIsChecked()) {

    modalBody.innerHTML = "<div>Merci ! Votre réservation a été reçue.</div><button class='btn-submit button flex-end' id='btn-close'>Fermer</button>"
    document.querySelector("#btn-close").addEventListener("click", closeModal)

      // for (let i = 0 ; i < inputs.length ; i++){
      //   inputs[i].value = ""
      // }

      // for (let i = 0 ; i < checkboxes.length ; i++) {
      //   checkboxes[i].checked = "false"      
      // }
      
  return true

  } else {

      nameLengthIsRight(firstName, 0)
      nameLengthIsRight(lastName, 1)
      emailIsRight()
      numberIsRight(birthdate, 3)
      numberIsRight(quantity, 4)
      usingConditionsIsChecked()
      
      return false
    
  }
} 
// submitButton.addEventListener("click", function(e) {e.preventDefault()})
// submitButton.addEventListener("click", validate)
