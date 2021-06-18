function sign() {
  let sign_in = document.querySelector(".sign-in").style.display;
  if (sign_in === "block") {
    document.querySelector(".sign-in").style.display = "none";
    document.querySelector(".sign-up").style.display = "block";
  } else {
    document.querySelector(".sign-in").style.display = "block";
    document.querySelector(".sign-up").style.display = "none";
  }
}

const buttonMenu = document.querySelector(".button-menu");
buttonMenu.addEventListener("click", () => {
  document.querySelector(".header-nav").classList.toggle("show");
});

// validation-start
const notification = document.querySelector(".notification");
function userName() {
  const reg = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  if (!reg.test(this.value)) {
    this.style.color = "red";
  } else {
    this.style.color = "black";
  }
}

function email() {
  const reg = /^\S+@\S+\.\S+$/;
  if (!reg.test(this.value)) {
    this.style.color = "red";
  } else {
    this.style.color = "black";
  }
}

function tel() {
  const reg = /^0[0-9]{8}$/;
  if (!reg.test(this.value)) {
    this.style.color = "red";
  } else {
    this.style.color = "black";
  }
}

document.querySelectorAll(".username").forEach((el) => {
  el.addEventListener("input", userName);
});

document.querySelectorAll(".email").forEach((el) => {
  el.addEventListener("input", email);
});

document.querySelector(".tel").addEventListener("input", tel);

// function checkSubmit(event) {  
//   if (userNam.style.color === "red") {
//       event.preventDefault();
//     notification.style.display = "block";
//   } else submit(document.querySelector(".form-submit"));  
// }

// document.querySelector(".form-submit").addEventListener("click", checkSubmit);

// validation-end
