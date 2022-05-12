let menuClosed = true;

document.querySelector(".nav-icon i").addEventListener("click", showMenu);

function showMenu(event){
    const menuItems = document.querySelectorAll("nav .a > a");
    let value;
    if(menuClosed){
        value = "block";
        menuClosed = false;
    }else{
        value = "none";
        menuClosed = true;
    }
    for(let item of menuItems){
        item.style.display = value;
    }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function submitForm() {
  document.getElementById("contactForm").submit();
  alert("Form is successfully submited");
}

