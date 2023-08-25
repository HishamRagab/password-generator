let password = document.querySelector(".password");
let chars = "`-=[]';/.,~!@#$%^&*()_+{}|:?<>";
let passW = "";
let range = document.querySelector(".range");
let num = document.querySelector(".num");

range.oninput = function () {
  range.style.cssText = `background-size: ${
    ((range.value - range.min) / (range.max - range.min)) * 100
  }% 100%;`;
  num.textContent = range.value;
};

document.querySelector("button").onclick = function () {
  for (let i = 0; i < range.value; i++) {
    let arr = [];
    if (document.querySelector(".lower").classList.contains("active"))
      arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    if (document.querySelector(".upper").classList.contains("active"))
      arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    if (document.querySelector(".numbers").classList.contains("active"))
      arr.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    if (document.querySelector(".symbols").classList.contains("active"))
      arr.push(chars[Math.floor(Math.random() * 30)]);
    passW += arr[Math.floor(Math.random() * arr.length)];
    arr.length == 0
      ? (password.textContent = "")
      : (password.textContent = passW);
  }
  passW = "";
};

document
  .querySelectorAll(".btn")
  .forEach((btn) => (btn.onclick = () => btn.classList.toggle("active")));
