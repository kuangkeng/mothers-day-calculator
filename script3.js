$("#result, #bottomform, #occupation, #td_bls, #td_blsrate, #note").hide();

var data = {
			  task_1: 10.98,
			  task_2: 20.01,
			  task_3: 11.68,
			  task_4: 9.77,
			  task_5: 22.35,
			  task_6: 55.44,
			  task_7: 9.48,
			  task_8: 21.43,
			  task_9: 14.62,
			  task_10: 20.43,
  			task_11: 11.16,
			};

$(document).ready(function(){

//form validation using jquery validation plugin
	 $("#mothersform").validate({
		
submitHandler: function(form) {

//grab the input
		var inputtask_1 = $('#inputtask_1hour').val(),
			inputtask_2 = $('#inputtask_2hour').val(),
			inputtask_3 = $('#inputtask_3hour').val(),
			inputtask_4 = $('#inputtask_4hour').val(),
			inputtask_5 = $('#inputtask_5hour').val(),
			inputtask_6 = $('#inputtask_6hour').val(),
			inputtask_7 = $('#inputtask_7hour').val(),
			inputtask_8 = $('#inputtask_8hour').val(),
			inputtask_9 = $('#inputtask_9hour').val(),
			inputtask_10 = $('#inputtask_10hour').val(),
        inputtask_11 = $('#inputtask_11hour').val();
		
//convert the input into hours
		if(inputtask_1=="Never"){var task_1hour=0;}
		if(inputtask_1=="Rarely"){var task_1hour=1;}
		if(inputtask_1=="Sometimes"){var task_1hour=5;}
		if(inputtask_1=="Always"){var task_1hour=14;}

		if(inputtask_2=="Never"){var task_2hour=0;}
		if(inputtask_2=="Rarely"){var task_2hour=1;}
		if(inputtask_2=="Sometimes"){var task_2hour=5;}
		if(inputtask_2=="Always"){var task_2hour=14;}

		if(inputtask_3=="Never"){var task_3hour=0;}
		if(inputtask_3=="Rarely"){var task_3hour=1;}
		if(inputtask_3=="Sometimes"){var task_3hour=5;}
		if(inputtask_3=="Always"){var task_3hour=14;}

		if(inputtask_4=="Never"){var task_4hour=0;}
		if(inputtask_4=="Rarely"){var task_4hour=1;}
		if(inputtask_4=="Sometimes"){var task_4hour=5;}
		if(inputtask_4=="Always"){var task_4hour=14;}

		if(inputtask_5=="Never"){var task_5hour=0;}
		if(inputtask_5=="Rarely"){var task_5hour=1;}
		if(inputtask_5=="Sometimes"){var task_5hour=5;}
		if(inputtask_5=="Always"){var task_5hour=14;}

		if(inputtask_6=="Never"){var task_6hour=0;}
		if(inputtask_6=="Rarely"){var task_6hour=1;}
		if(inputtask_6=="Sometimes"){var task_6hour=5;}
		if(inputtask_6=="Always"){var task_6hour=14;}

		if(inputtask_7=="Never"){var task_7hour=0;}
		if(inputtask_7=="Rarely"){var task_7hour=1;}
		if(inputtask_7=="Sometimes"){var task_7hour=5;}
		if(inputtask_7=="Always"){var task_7hour=14;}

		if(inputtask_8=="Never"){var task_8hour=0;}
		if(inputtask_8=="Rarely"){var task_8hour=1;}
		if(inputtask_8=="Sometimes"){var task_8hour=5;}
		if(inputtask_8=="Always"){var task_8hour=14;}

		if(inputtask_10=="Never"){var task_10hour=0;}
		if(inputtask_10=="Rarely"){var task_10hour=1;}
		if(inputtask_10=="Sometimes"){var task_10hour=5;}
		if(inputtask_10=="Always"){var task_10hour=14;}

		if(inputtask_9=="Never"){var task_9hour=0;}
		if(inputtask_9=="Rarely"){var task_9hour=1;}
		if(inputtask_9=="Sometimes"){var task_9hour=5;}
		if(inputtask_9=="Always"){var task_9hour=14;}
  
    	if(inputtask_11=="Never"){var task_11hour=0;}
		if(inputtask_11=="Rarely"){var task_11hour=1;}
		if(inputtask_11=="Sometimes"){var task_11hour=5;}
		if(inputtask_11=="Always"){var task_11hour=14;}

//convert hours into wage
		var task_1wage = task_1hour*data.task_1
			task_2wage  = task_2hour*data.task_2
			task_3wage = task_3hour*data.task_3
			task_4wage = task_4hour*data.task_4
			task_5wage = task_5hour*data.task_5
			task_6wage = task_6hour*data.task_6
			task_7wage = task_7hour*data.task_7
			task_8wage = task_8hour*data.task_8
			task_10wage = task_10hour*data.task_10
			task_9wage = task_9hour*data.task_9
      task_11wage = task_10hour*data.task_11

//add up the total wage
		var totalwage = 52*(task_1wage + task_2wage + task_3wage + task_4wage + task_5wage + task_6wage + task_7wage + task_8wage + task_9wage + task_10wage + task_11wage),
			totalwageround1 = totalwage.toFixed(0);
  
  totalwageround = addThousandsSeparator(totalwageround1);

  
  
  
function addThousandsSeparator(input) {
    var output = input
    if (parseFloat(input)) {
        input = new String(input); // so you can perform string operations
        var parts = input.split("."); // remove the decimal part
        parts[0] = parts[0].split("").reverse().join("").replace(/(\d{3})(?!$)/g, "$1,").split("").reverse().join("");
        output = parts.join(".");
    }

    return output;
}  
  
  
  
		if(totalwageround1<30000){var occupation="cook";}
		if(totalwageround1>=30000 && totalwageround1<40000){var occupation="travel guide";}
		if(totalwageround1>=40000 && totalwageround1<50000){var occupation="sheet metal worker";}
		if(totalwageround1>=50000 && totalwageround1<60000){var occupation="editor";}
		if(totalwageround1>=60000 && totalwageround1<70000){var occupation="financial specialist";}
		if(totalwageround1>=70000 && totalwageround1<80000){var occupation="biological scientist";}
		if(totalwageround1>=80000 && totalwageround1<90000){var occupation="biochemists";}
		if(totalwageround1>=90000 && totalwageround1<100000){var occupation="economist";}
		if(totalwageround1>=100000 && totalwageround1<110000){var occupation="aerospace engineer";}
		if(totalwageround1>=110000 && totalwageround1<120000){var occupation="judge or magistrate";}
		if(totalwageround1>=120000 && totalwageround1<130000){var occupation="marketing manager";}
		if(totalwageround1>=130000 && totalwageround1<170000){var occupation="dentist";}
		if(totalwageround1>=170000){var occupation="psychiatrist";}

$("#result, #bottomform, #occupation, #td_bls, #td_blsrate, #note").show();
$("#task_1hour").text(task_1hour);
$("#task_2hour").text(task_2hour);
$("#task_3hour").text(task_3hour);
$("#task_4hour").text(task_4hour);
$("#task_5hour").text(task_5hour);
$("#task_6hour").text(task_6hour);
$("#task_7hour").text(task_7hour);
$("#task_8hour").text(task_8hour);
$("#task_9hour").text(task_9hour);
$("#task_10hour").text(task_10hour);
$("#task_11hour").text(task_11hour);
$("#totalnumber").text("$"+totalwageround);
$("#occupation").text(occupation);
$("#button").hide();



//verify the variables
console.log("input = " + $('#inputtask_1hour').val());
console.log("input = " + $('#inputtask_2hour').val());
console.log("input = " + $('#inputtask_3hour').val());
console.log("input = " + $('#inputtask_4hour').val());
console.log("input = " + $('#inputtask_5hour').val());
console.log("input = " + $('#inputtask_6hour').val());	
console.log("input = " + $('#inputtask_7hour').val());
console.log("input = " + $('#inputtask_8hour').val());
console.log("input = " + $('#inputtask_9hour').val());
console.log("input = " + $('#inputtask_10hour').val());
  console.log("input = " + $('#inputtask_11hour').val());

console.log("data = " + data.task_1);
console.log("data = " + data.task_2);
console.log("data = " + data.task_3);
console.log("data = " + data.task_4);
console.log("data = " + data.task_5);
console.log("data = " + data.task_6);
console.log("data = " + data.task_7);
console.log("data = " + data.task_8);
console.log("data = " + data.task_9);
console.log("data = " + data.task_10);
console.log("data = " + data.task_11);

console.log("hour = " + task_1hour);
console.log("hour = " + task_2hour);
console.log("hour = " + task_3hour);
console.log("hour = " + task_4hour);
console.log("hour = " + task_5hour);
console.log("hour = " + task_6hour);
console.log("hour = " + task_7hour);
console.log("hour = " + task_8hour);
console.log("hour = " + task_9hour);
console.log("hour = " + task_10hour);
console.log("hour = " + task_11hour);

console.log("wage = " + task_1wage);
console.log("wage = " + task_2wage);
console.log("wage = " + task_3wage);
console.log("wage = " + task_4wage);
console.log("wage = " + task_5wage);
console.log("wage = " + task_6wage);
console.log("wage = " + task_7wage);
console.log("wage = " + task_8wage);
console.log("wage = " + task_9wage);
console.log("wage = " + task_10wage);
console.log("wage = " + task_11wage);

console.log("totalwage is: " + totalwage);
console.log("totalwageround is: " + totalwageround);
console.log("occupation is: " + occupation);



    }

})});
