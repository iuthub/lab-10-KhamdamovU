
function convert(){
	var answer=document.getElementById("answer");
answer.innerHTML ="The answer is: ";
	var Input=document.getElementById("Input");
	var input=parseInt(Input.value);
    var Left=document.getElementById("Left");
    var lVal=Left.value;
    var Right=document.getElementById("Right");
    var rVal=Right.value;
var calculated=input;
 if(rVal!==lVal)
 {
 	if(lVal=="kg")
 	{
        calculated=input* 2.20462262;
        calculated+=" pounds";
 	}
 	else{
    calculated=input* 0.45359237;
        calculated+=" kg";
 	}
 }
var answer=document.getElementById("answer");
answer.innerHTML+=calculated;

};