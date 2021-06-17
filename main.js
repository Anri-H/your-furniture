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

function navBar() {
  document.querySelector(".header-nav").style.display === "block"
    ? (document.querySelector(".header-nav").style.display = "none")
    : (document.querySelector(".header-nav").style.display = "block");
}

function userName() {
  const reg = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  if (!reg.test(this.value)) {
    alert("invalid username");
  }
}

document.querySelector(".username").addEventListener("input", userName);
