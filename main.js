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

const notification = document.querySelector(".notification");
function userName() {
  const reg = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  if (!reg.test(this.value) && this.value !== "") {
    notification.style.display = "block";
    document.querySelector(".user-name-validation").style.display = "block";
  } else {
    document.querySelector(".user-name-validation").style.display = "none";
    notification.style.display = "none";
  }
}

function email() {
  const reg = /^\S+@\S+\.\S+$/;
  if (!reg.test(this.value) && this.value !== "") {
    notification.style.display = "block";
    document.querySelector(".email-validation").style.display = "block";
  } else {
    document.querySelector(".email-validation").style.display = "none";
    notification.style.display = "none";
  }
}

document.querySelector(".username").addEventListener("input", userName);

document.querySelector(".email").addEventListener("input", email);
