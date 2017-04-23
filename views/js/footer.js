var cmnt_btn = document.getElementById('cmnt-btn');
cmnt_btn.onclick = function(){
    
    //create request object
   
    var request = new XMLHttpRequest();
    
     //capture and store response into a variable
    var margin_top = 0;
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                //capture the list of names
                var names = request.responseText;
                names = JSON.parse(names);
                 var list = names;
                
                var cmnt_result=document.getElementById('cmnt-result');
                var cmnt_p=document.getElementById('cmnt-p');
                cmnt_p.innerHTML = list; 
                var d = new Date();
                document.getElementById("cmnt-date").innerHTML = d;
                cmnt_result.style.display='block';
                cmnt_added=document.getElementById('cmnt-added');
                cmnt_added.style.display='block';
                
                        
        }
        
    }
    };
   
    
    //make a request to counter endpoint
    var cmnt_input = document.getElementById('cmnt-input');
    var cmnt_val = cmnt_input.value;
    request.open('GET','/submit-query?name='+cmnt_val,true);
    request.send(null);
      
};
