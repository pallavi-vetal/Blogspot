/*******************categories******************/
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function loop(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	
	});
});

/**************login -signup tabs*********************/

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



//************************* For Searching Operation *********************/


/*******************like operation *************************/
var like_btn=document.getElementById('like-btn');
like_btn.onclick=function(){
  
    //create request object
    
    var request = new XMLHttpRequest();
    
     //capture and store response into a variable
     
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                like_btn.style.color = '#F00' ;
                
            }
        }
        
    };
   
    
    //make a request to counter endpoint
    
    request.open('GET',"/counter",true);
    request.send(null);
};

