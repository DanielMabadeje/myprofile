

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it

var modal;
function openmodal(params) {
    // Get the modal
    // alert('cc')
 modal = document.getElementById(params);
modal.style.display = "block";
}
function closemodal(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
