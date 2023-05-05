const modalbg = document.querySelector("#contact_modal");
const send = document.querySelector(".contact_button");
const closeForm = document.querySelector(".close");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const message = documment.querySelector("#message");



// FUNCTIONS
/**
 * Manage the navigation page
 */
function openClosePageNavigation() {
    var nodeNavigation = document.getElementById("pageNavigation");
  
    if (nodeNavigation.classList.contains("isNavigationOpen")) {
        nodeNavigation.classList.remove("isNavigationOpen");
    } else {
        nodeNavigation.classList.add("isNavigationOpen");
    }
}
  
/**
 * launch modal form
 */
function launchModal() {
    modalbg.style.display = "block";

    const myBody = document.querySelector('body');
    myBody.classList.add('isModalOpen');
}

/**
 * closing modal form
 */
function closeModal() {
    modalbg.style.display = "none";

    const openForm = document.querySelector('.modal');
    openForm.classList.remove('hidden');

    // const closeForm = document.querySelector('#closeForm');
    // closeForm.classList.remove('active');

    const myBody = document.querySelector('body');
    myBody.classList.remove('isModalOpen');
}

// TO OPEN OR CLOSE THE FORM
// launch modal event
send.forEach((btn) => btn.addEventListener("click", launchModal));

// closing modal event
closeForm.forEach((btn) => btn.addEventListener("click", closeModal));
//btnCloseEnd.forEach((btn) => btn.addEventListener("click", closeModal));



// CODE FOURNI
// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }
