
function total() {
 var number1=document.getElementById('number1').value;
 var number2=document.getElementById('number2').value;
 var total=Number(number1)+Number(number2);
 document.getElementById('result').innerHTML=total
 if(isNaN(number1)||isNaN(number2)) 
 { 
 alert('Please enter a number!'); 
 return false;
 }


}