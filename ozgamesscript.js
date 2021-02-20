function clickevent() {
   var x=document.getElementById("drop-down-task-bar");
   if( x.style.display== "none") {
      x.style.display="block";
   }
   else {
      x.style.display="none";
   }
}
function scroll_view(){
   var x=document.getElementById("mps-iframe");
   x.scrollIntoView();
}
function set_height(){
   var the_height = document.getElementById('mps-iframe').contentDocument.body.scrollHeight;
  //change the height of the iframe
  document.getElementById('mps-iframe').height=the_height;
}

