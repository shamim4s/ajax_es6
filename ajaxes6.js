const buttonGet = document.getElementById("idget");
const buttonSend = document.getElementById("idsend");
const tagH1 = document.getElementById("idh1");
const tagP = document.getElementById("idp");
setInterval(ajaxcall, 1000);

const getFunc = function () {
  console.log("Get Data");
};

const sendFunc = function () {
  console.log("Send Data");
};

function h1Func(idh1) {
  tagH1.innerHTML = idh1;
};

function pFunc(idp) {
  tagP.innerHTML = idp;
};
function ajaxcall() {
  fetch('https://jsonplaceholder.typicode.com/todos/1').
  then(data => data.json()).
  then(json => {
    // debugger
    // console.log(json)
    h1Func(json.title);
    pFunc(json.completed);
  });
  console.log("checked data done");
}

buttonGet.addEventListener("click", getFunc);
buttonSend.addEventListener("click", sendFunc);