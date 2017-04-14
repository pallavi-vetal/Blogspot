jQuery(document).ready(function(){
	jQuery('.skillbar').each(function loop(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	
	});
});
document.getElementsByClassName("tablink")[0].click();

function openCity(evt, name) {
var i, x, tablinks;
x = document.getElementsByClassName("op");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
tablinks[i].classList.remove("w3-light-grey");
}
document.getElementById(name).style.display = "block";
evt.currentTarget.classList.add("w3-light-grey");
}