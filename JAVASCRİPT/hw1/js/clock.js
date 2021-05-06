let guestName = prompt("What is your name?");
document.getElementById("myName").innerHTML = guestName;

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var n = today.getDay();
    switch(n){
        case 1:
        n= "Pazartesi";
        break;
        case 2:
        n= "Salı";
        break;
        case 3:
        n= "Çarşamba";
        break;
        case 4:
        n= "Perşembe";
        break;
        case 5:
        n= "Cuma";
        break;
        case 6:
        n= "Cumartesi";
        break;
        case 7:
        n= "Pazar";
        break;
        
        }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s + " " + n;
    t = setTimeout(function() {
      showTime()
    }, 500);
  }
  showTime();
 
