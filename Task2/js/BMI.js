function Calculate()
{
  var we = document.getElementById("w");
  var h = document.getElementById("height");
  var Weight=parseInt(we.value);
  var Height=parseInt(h.value);
  var bmi=703*Weight /(Height*Height);
bmi=parseInt(bmi);

  var BMI=document.getElementById("score");
  var TYPE=document.getElementById("type");
  var tType;
  if(bmi<18){tType="Underweight: ";}
  else if(bmi<=25){tType="Normal: ";}
  else if(bmi<=30){tType="Overweight: ";}
  	else tType="Obese: ";


  TYPE.innerHTML=": "+tType;
  BMI.innerHTML=": "+bmi;
}