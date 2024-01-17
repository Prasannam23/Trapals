document.getElementById("toggle").addEventListener("click", function (event) {
 event.preventDefault();
 document.getElementById('updatePopup').style.display = 'block';
 document.getElementById('overlay').style.display = 'block';
});

document.getElementById("removeUpdatePopup").addEventListener("click", function (event) {
 event.preventDefault();
 document.getElementById('updatePopup').style.display = 'none';
});

document.getElementById("showResetPopup").addEventListener("click", function (event) {
 event.preventDefault();
 document.getElementById("reset").style.display = "block";
});

document.getElementById("hideResetPopup").addEventListener("click", function (event) {
 document.getElementById("reset").style.display = "none";
 document.getElementById("deleteOverlay").style.display = "none";
});

function hideDeletePopup() {
 document.getElementById("deletePopup").style.display = "none";
 document.getElementById("deleteOverlay").style.display = "none";
}
