// const home = document.getElementById("home")
// const about = document.getElementById("about")
// const project = document.getElementById("project")
// const contact = document.getElementById("contact")
// const actived = document.getElementById("hh")
// about.addEventListener('click', function(event) {
//     event.preventDefault();
//     about.classList.add("active")
//     home.classList.remove("active")
//   });
// home.addEventListener('click', function(event) {
//     event.preventDefault();
//     about.classList.remove("active")
//     project.classList.remove("active")
//     contact.classList.remove("active")
//     home.classList.add("active")
//     actived.classList.add("actived")
//   });
// project.addEventListener('click', function(event) {
//     event.preventDefault();
//     project.classList.add("active")
//     home.classList.remove("active")
//     about.classList.remove("active")
//     contact.classList.remove("active")
//   });
// contact.addEventListener('click', function(event) {
//     event.preventDefault();
//     contact.classList.add("active")
//     home.classList.remove("active")
//     project.classList.remove("active")
//     about.classList.remove("active")
//     actived.classList.remove("actived")
//   });
function validateForm() {
    const name = document.getElementById("in-name").value;
    const email = document.getElementById("in-email").value;
    const message = document.getElementById("in-message").value;

  
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-message").innerHTML = "";
  
    let isValid = true;
  
    if (name === "") {
      document.getElementById("error-name").innerHTML = "*Name cannot be blank";
      isValid = false;
    }
  
    if (email === "") {
      document.getElementById("error-email").innerHTML = "*Email cannot be blank";
      isValid = false;
    }
  
    if (message === "") {
      document.getElementById("error-message").innerHTML = "*Message cannot be blank";
      isValid = false;
    }
  
    return isValid;
  }