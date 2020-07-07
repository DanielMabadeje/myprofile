var myVar;
// effect1();
// effect2();
function myFunction() {
    myVar = setTimeout(showPage, 7000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  // document.getElementById("loader").style.height = "0";
  // document.getElementById("content").style.display = "block";
//   document.getElementById("logo").style.display = "initial";
  // document.getElementById("logo").style.position = "relative";
}