let inputValue = document.getElementById("task");

let liveToastBtn = document.getElementById("liveToastBtn");


let listDOM = document.getElementById("list");

function newElement(){
    let liDOM = document.createElement("li");
    let text = inputValue.value;
    liDOM.innerHTML = text;
    localStorage.setItem("Item", inputValue.value);
    
    if(text === ""){
        
        $('.toast.error.hide').toast('show')
      
    } else {
        listDOM.append(liDOM);
       $('.toast.success.hide').toast('show')

        inputValue.value = "";
    }
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
    
}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.append(txt);
    myNodelist[i].append(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


listDOM.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);






