var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var done = document.querySelector(".done");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.innerHTML =li.innerHTML + "    <button class='deleteButton'>Delete</button>";
	addDeleteEvent();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass(){
	 this.classList.toggle("done");
}

function deleteEvent(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function addDeleteEvent(){
	var deleteButton = document.querySelectorAll(".deleteButton");
	for(var i=0; i<deleteButton.length; i++){
		deleteButton[i].addEventListener("click", deleteEvent);
	}
}

function initAll(){
	for(var i=0; i<li.length; i++){
		li[i].addEventListener("click", toggleClass);
		li[i].innerHTML = li[i].innerHTML + "    <button class='deleteButton'>Delete</button>";
	}

	addDeleteEvent();
}



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

initAll();


