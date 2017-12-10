
document.getElementById("calcButton").addEventListener("click", function(){
	age= Number(document.getElementById("age").value);
	hp= Number(document.getElementById("horseP").value);
	calculate(hp, age);
});


function calculate(hp, age){
	var insurance= 0;

	insurance= parseFloat(hp*100/age +150).toFixed(2);

	document.getElementById("result").innerHTML="We will insure your car for " +insurance+ "$ per year.";
}