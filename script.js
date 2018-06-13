var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var b=document.getElementsByTagName("li")//for getting access to the list elemnts

var pos;
var i;

function inputLength() {
	return input.value.length;
}

function addDel(pos){
	var delbtn=document.createElement("button");
delbtn.innerHTML="DELETE";
b[pos].appendChild(delbtn);
delbtn.onclick=removeParent;}
for(i=0;i<b.length;i++)
{
	addDel(i);
}//this wlll add delete button to the existing elements of the list

function createListElement() {
	var li = document.createElement("li");
	var delbtn=document.createElement("button");
    delbtn.appendChild(document.createTextNode("DELETE"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delbtn);

	ul.appendChild(li);
	input.value = "";
	delbtn.onclick=removeParent;
}//this will create the delte button for every new element in the list


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
ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}//this function will cross of the list item when done

function removeParent(evt){
evt.target.parentNode.remove();
}//function to delete the node

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





