
  function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let Follow = getCookie("followed");
  if (Follow != "") {loloj()
  } else{lolo()
  }
}

window.onload = function() {
  setTimeout(function() {
    checkCookie()
  }, 300);
};
    
    function loloe(){
document.getElementById("cexit").style.visibility = "visible";
document.getElementById("cexit").style.opacity = "2";
}
function lolo(){
    document.getElementById("popup1").style.visibility  = "visible";
    document.getElementById("popup1").style.opacity  = "1";
 document.getElementById("cexit")    .style.visibility = "hide";
document.getElementById("cexit").style.opacity = "0";
}

function confirm(){
  document.cookie = "followed=yes; expires=Mon, 01 Jan 2024 12:00:00 UTC; path=/";
  window.location.reload();
}

function followfb(){ 
window.open('https://Facebook.com/Pharmalite.in','_blank') ;
confirm()
    
}

function followyt(){ 
window.open('https://youtube.com/@pharmalite','_blank') ;
confirm()
    
}

function followinsta(){ 
window.open('https://instagram.com/Pharmalite.in','_blank') ;
confirm()
    
}

function loloj(){
    document.getElementById("popup1").style.visibility  = "invisible";
 document.getElementById("popup1").style.opacity  = "0";
 }
