//Selectors
const dropdown1 = document.querySelector("#dropdown1");
const dropdown2 = document.querySelector("#dropdown2");
const number = document.querySelector(".number");
const add = document.querySelector(".add");
const confirm = document.querySelector(".confirm");
const cancel = document.querySelector(".cancel");
const entries = document.querySelector(".entries");
const modal2 = document.querySelector(".modal2");
const input1 = document.querySelector(".input1");
const list = document.querySelector(".list");

//Event Listeners
add.addEventListener("click", addRules);
list.addEventListener("click", removeCheck);
list.addEventListener("click", addInput);
list.addEventListener("click", removeParameter);
confirm.addEventListener("click", thankYou);
cancel.addEventListener("click", ohNo);

//Function
function addRules(event) {
  //Prevent default
  event.preventDefault();
  //entries div
  const ruleDiv = document.createElement("div");
  ruleDiv.classList.add("entries");
  modal2.appendChild(ruleDiv);
  //Create dropdown1
  const newDropdown = dropdown1.cloneNode(true);
  ruleDiv.appendChild(newDropdown);
  //create dropdown2
  const newDropdown2 = dropdown2.cloneNode(true);
  ruleDiv.appendChild(newDropdown2);
  //create input
  const newInput = input1.cloneNode(true);
  ruleDiv.appendChild(newInput);
  //add rule button
  const addRuleBtn = document.createElement("button");
  addRuleBtn.innerText = "add rule";
  addRuleBtn.classList.add("add-rule1");
  ruleDiv.appendChild(addRuleBtn);
  //removeBtn
  const addRemoveBtn = document.createElement("button");
  addRemoveBtn.innerHTML = '<i class="fas fa-minus"></i>';
  addRemoveBtn.classList.add("remove1");
  ruleDiv.appendChild(addRemoveBtn);
  list.appendChild(ruleDiv);
}

function removeCheck(e) {
  const item = e.target;
  //remove
  if (item.classList[0] === "remove1") {
    const entry = item.parentElement;
    entry.remove();
  }
}

function addInput(e) {
  const item = e.target;
  //add input
  if (item.classList[0] === "add-rule1") {
    const entry = item.parentElement;
    const newInput1 = input1.cloneNode(true);
    newInput1.classList.remove("input1");
    newInput1.classList.add("input2");
    entry.appendChild(newInput1);
    const addRuleBtn = document.createElement("button");
    addRuleBtn.innerText = "add rule";
    addRuleBtn.classList.add("add-rule1");
    entry.appendChild(addRuleBtn);
  }
}

function removeParameter(e) {
  const item = e.target;
  if (item.classList[0] === "remove2") {
    const entry = item.parentElement;
  }
}

function thankYou(e) {
  e.preventDefault();
  alert("Thanks for using this rules-form");
}

function ohNo(e) {
  e.preventDefault();
  alert("Oh no, we're sad to see you go!");
}
