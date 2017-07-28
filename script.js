
  




var screen= document.getElementById('stuff');  
  
  function input(x){
    if(x==='='){
      screen.value=eval(screen.value);
    }
    else if(x==='AC'){
      screen.value='';
    }
    else if(x==='CE'){
      var entry= screen.value;
      var length= entry.length-1;
      var newEntry= entry.substring(0,length);
      screen.value= newEntry;
    }
    else{screen.value+=x}
  };




   





  
  
  
  
  
  
    

    
  
  
