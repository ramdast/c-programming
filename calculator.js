var str,firstnumber,secondnumber,opretor,inputnumber,result;

function inputTex(inputNumber){
  var myTxt = document.getElementById('myInput');

  myTxt.value = myTxt.value + inputNumber;

  if(opretor === undefined){
    firstnumber = parseInt(myTxt.value);
  } else {
 //document.getElementById("calcitext").innerHTML= firstnumber  + parseInt(myTxt.value);
    document.getElementById('myInput').innerHTML=myTxt.value;
    secondnumber=parseInt(myTxt.value);
    
    
  }
  
  
}

function opretors(opr){
  opretor = opr;
  var myTxt = document.getElementById('myInput');

  myTxt.value = '';
}

function myReset(){
  
 document.getElementById("calcitext").innerHTML=0;  
}

function myResult(){
  
  
 switch(opretor){
   case '+':
     document.getElementById("calcitext").innerHTML= firstnumber+secondnumber;
     break;
     case '-':
     document.getElementById("calcitext").innerHTML= firstnumber-secondnumber;
     break;
      case '*':
     document.getElementById("calcitext").innerHTML= firstnumber*secondnumber;
     break;
      case '/':
     document.getElementById("calcitext").innerHTML= firstnumber/secondnumber;
     break;
     
 }
    
  
}



