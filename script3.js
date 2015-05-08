$("#result, #bottomform, #occupation, #td_bls, #td_blsrate").hide();

var data = {
			  task_1: 20.01,
			  driving: 11.16,
			  homework: 14.62,
			  kids: 9.48,
			  cleaning: 10.98,
			  planning: 22.35,
			  shopping: 9.83,
			  finances: 31.7,
			  yard: 11.68,
			  finding: 21.43,
			};

$(document).ready(function(){

//form validation using jquery validation plugin
	 $("#mothersform").validate({
		
submitHandler: function(form) {

//grab the input
		var inputtask_1 = $('#inputtask_1hour').val(),
			inputdriving = $('#inputdrivinghour').val(),
			inputhomework = $('#inputhomeworkhour').val(),
			inputkids = $('#inputkidshour').val(),
			inputcleaning = $('#inputcleaninghour').val(),
			inputplanning = $('#inputplanninghour').val(),
			inputshopping = $('#inputshoppinghour').val(),
			inputfinances = $('#inputfinanceshour').val(),
			inputyard = $('#inputyardhour').val(),
			inputfinding = $('#inputfindinghour').val();
		
//convert the input into hours
		if(inputtask_1=="Never"){var task_1hour=0;}
		if(inputtask_1=="Seldom"){var task_1hour=1;}
		if(inputtask_1=="Always"){var task_1hour=5;}
		if(inputtask_1=="All the time!"){var task_1hour=14;}

		if(inputdriving=="Never"){var drivinghour=0;}
		if(inputdriving=="Seldom"){var drivinghour=1;}
		if(inputdriving=="Always"){var drivinghour=5;}
		if(inputdriving=="All the time!"){var drivinghour=14;}

		if(inputhomework=="Never"){var homeworkhour=0;}
		if(inputhomework=="Seldom"){var homeworkhour=1;}
		if(inputhomework=="Always"){var homeworkhour=5;}
		if(inputhomework=="All the time!"){var homeworkhour=14;}

		if(inputkids=="Never"){var kidshour=0;}
		if(inputkids=="Seldom"){var kidshour=1;}
		if(inputkids=="Always"){var kidshour=5;}
		if(inputkids=="All the time!"){var kidshour=14;}

		if(inputcleaning=="Never"){var cleaninghour=0;}
		if(inputcleaning=="Seldom"){var cleaninghour=1;}
		if(inputcleaning=="Always"){var cleaninghour=5;}
		if(inputcleaning=="All the time!"){var cleaninghour=14;}

		if(inputplanning=="Never"){var planninghour=0;}
		if(inputplanning=="Seldom"){var planninghour=1;}
		if(inputplanning=="Always"){var planninghour=5;}
		if(inputplanning=="All the time!"){var planninghour=14;}

		if(inputshopping=="Never"){var shoppinghour=0;}
		if(inputshopping=="Seldom"){var shoppinghour=1;}
		if(inputshopping=="Always"){var shoppinghour=5;}
		if(inputshopping=="All the time!"){var shoppinghour=14;}

		if(inputfinances=="Never"){var financeshour=0;}
		if(inputfinances=="Seldom"){var financeshour=1;}
		if(inputfinances=="Always"){var financeshour=5;}
		if(inputfinances=="All the time!"){var financeshour=14;}

		if(inputfinding=="Never"){var findinghour=0;}
		if(inputfinding=="Seldom"){var findinghour=1;}
		if(inputfinding=="Always"){var findinghour=5;}
		if(inputfinding=="All the time!"){var findinghour=14;}

		if(inputyard=="Never"){var yardhour=0;}
		if(inputyard=="Seldom"){var yardhour=1;}
		if(inputyard=="Always"){var yardhour=5;}
		if(inputyard=="All the time!"){var yardhour=14;}

//convert hours into wage
		var task_1wage = task_1hour*data.task_1
			drivingwage  = drivinghour*data.driving
			homeworkwage = homeworkhour*data.homework
			kidswage = kidshour*data.kids
			cleaningwage = cleaninghour*data.cleaning
			planningwage = planninghour*data.planning
			shoppingwage = shoppinghour*data.shopping
			financeswage = financeshour*data.finances
			findingwage = findinghour*data.finding
			yardwage = yardhour*data.yard

//add up the total wage
		var totalwage = 52*(task_1wage + drivingwage + homeworkwage + kidswage + cleaningwage + planningwage + shoppingwage + financeswage + yardwage + findingwage),
			totalwageround = totalwage.toFixed(2);

//verify the variables
console.log("input = " + $('#inputtask_1hour').val());
console.log("input = " + $('#inputdrivinghour').val());
console.log("input = " + $('#inputhomeworkhour').val());
console.log("input = " + $('#inputkidshour').val());
console.log("input = " + $('#inputcleaninghour').val());
console.log("input = " + $('#inputplanninghour').val());	
console.log("input = " + $('#inputshoppinghour').val());
console.log("input = " + $('#inputfinanceshour').val());
console.log("input = " + $('#inputyardhour').val());
console.log("input = " + $('#inputfindinghour').val());

console.log("data = " + data.task_1);
console.log("data = " + data.driving);
console.log("data = " + data.homework);
console.log("data = " + data.kids);
console.log("data = " + data.cleaning);
console.log("data = " + data.planning);
console.log("data = " + data.shopping);
console.log("data = " + data.finances);
console.log("data = " + data.yard);
console.log("data = " + data.finding);

console.log("hour = " + task_1hour);
console.log("hour = " + drivinghour);
console.log("hour = " + homeworkhour);
console.log("hour = " + kidshour);
console.log("hour = " + cleaninghour);
console.log("hour = " + planninghour);
console.log("hour = " + shoppinghour);
console.log("hour = " + financeshour);
console.log("hour = " + yardhour);
console.log("hour = " + findinghour);

console.log("wage = " + task_1wage);
console.log("wage = " + drivingwage);
console.log("wage = " + homeworkwage);
console.log("wage = " + kidswage);
console.log("wage = " + cleaningwage);
console.log("wage = " + planningwage);
console.log("wage = " + shoppingwage);
console.log("wage = " + financeswage);
console.log("wage = " + yardwage);
console.log("wage = " + findingwage);

console.log("totalwage is: " + totalwage);
console.log("totalwageround is: " + totalwageround);

$("#result, #bottomform, #occupation, #td_bls, #td_blsrate").show();
$("#task_1hour").text(task_1hour);
$("#drivinghour").text(drivinghour);
$("#homeworkhour").text(homeworkhour);
$("#kidshour").text(kidshour);
$("#cleaninghour").text(cleaninghour);
$("#planninghour").text(planninghour);
$("#shoppinghour").text(shoppinghour);
$("#financeshour").text(financeshour);
$("#yardhour").text(yardhour);
$("#findinghour").text(findinghour);
$("#totalnumber").text(totalwageround);
$("#occupation").text("general manager");
$("#button").hide();

    }

})});
