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




function messageConfirmation(e) {
  e.preventDefault() 
  const modalBody = document.querySelector(".modal-body")
    if (modalBody) {
    modalBody.innerHTML = "<div>Merci ! Votre réservation a été reçue.</div><button class='btn-submit button flex-end' id='btn-close'>Fermer</button>"
    modalBody.classList.add = ".modal-body-after"
    document.querySelector("#btn-close").addEventListener("click", closeModal)
    }
}
// submit form
submitButton.addEventListener("click", messageConfirmation)


