function grow()
{
var rows = document.getElementById("rows");
var rVal= parseInt(rows.value);
var columns = document.getElementById("columns");
var cVal= parseInt(columns.value);

var div=document.getElementById("garden");
div.innerHTML="";
var MaxValue=2;
for(var count=0;count<rVal;count++)
{
	for(var count2=0;count2<cVal;count2++)
	{
var rand=parseInt(Math.random()*MaxValue);
if(rand==1)
{div.innerHTML+= "<img src=\"img/melon.jpeg\" height=100px width=100px/>";}
else {div.innerHTML+= "<img src=\"img/watermelon.jpeg\" height=100px width=100px/>" }
    }
div.innerHTML+= "<br/>";
}




}