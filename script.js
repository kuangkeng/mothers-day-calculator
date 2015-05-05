$("#result, #bottomform").hide();

var data = {
			  cooking: 20.01,
			  driving: 11.16,
			  homeworkpre: 16.39,
			  homeworksec: 14.62,
			  kids: 9.48,
			  cleaning: 10.98,
			  planning: 22.35,
			  shopping: 9.83,
			  finances: 31.7,
			  yard: 11.68,
			  decorating: 23.27,
			  finding: 21.43,
			  counseling: 21.4
			};

$(document).ready(function(){

//form validation using jquery validation plugin
	 $("#mothersform").validate({
		rules: {
					cookinghour: {
						required: true,
						range: [0,84]
					},
					
					drivinghour: {
						required: true,
						range: [0,84]
					},
					homeworkhour: {
						required: true,
						range: [0,84]
					},
					kidshour: {
						required: true,
						range: [0,84]
					},
					cleaninghour: {
						required: true,
						range: [0,84]
					},
					planninghour: {
						required: true,
						range: [0,84]
					},
					shoppinghour: {
						required: true,
						range: [0,84]
					},
					financeshour: {
						required: true,
						range: [0,84]
					},
					yardhour: {
						required: true,
						range: [0,84]
					},
					decoratinghour: {
						required: true,
						range: [0,84]
					},
					findinghour: {
						required: true,
						range: [0,84]
					},
					counselinghour: {
						required: true,
						range: [0,84]
					},
				},
//messages to be displayed if input cannot be validated
		messages: {
                    cookinghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    drivinghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    homeworkhour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    kidshour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    cleaninghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    planninghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    shoppinghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    financeshour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    yardhour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    decoratinghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    findinghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                    counselinghour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 84"
                    },
                },

//display error messages style if input cannot be validated
       errorPlacement: function(error, element) {
 //       error.insertAfter(element);
        offset = element.offset();
            error.insertAfter(element)
            error.addClass('errormessage');  // add a class to the wrapper
   			error.css('position', 'absolute');
            error.css('left', offset.left);
            error.css('top', offset.top + element.outerHeight() + 5);
    },
    wrapper: 'div',   

submitHandler: function(form) {

//setting the input variables
		var inputcooking = ($('#inputcookinghour').val()*data.cooking).toFixed(2),
			inputdriving = ($('#inputdrivinghour').val()*data.driving).toFixed(2),
			inputhomework = ($('#inputhomeworkhour').val()*data.homeworksec).toFixed(2),
			inputkids = ($('#inputkidshour').val()*data.kids).toFixed(2),
			inputcleaning = ($('#inputcleaninghour').val()*data.cleaning).toFixed(2),
			inputplanning = ($('#inputplanninghour').val()*data.planning).toFixed(2),
			inputshopping = ($('#inputshoppinghour').val()*data.shopping).toFixed(2),
			inputfinances = ($('#inputfinanceshour').val()*data.finances).toFixed(2),
			inputyard = ($('#inputyardhour').val()*data.yard).toFixed(2),
			inputdecorating = ($('#inputdecoratinghour').val()*data.decorating).toFixed(2),
			inputfinding = ($('#inputfindinghour').val()*data.finding).toFixed(2),
			inputcounseling = ($('#inputcounselinghour').val()*data.counseling).toFixed(2);

		var totalwage = 12*(inputcooking + inputdriving + inputhomework + inputkids + inputcleaning + inputplanning + inputshopping + inputfinances + inputyard + inputdecorating + inputfinding + inputcounseling).toFixed(2);

console.log("input = " + $('#inputcookinghour').val());
console.log("input = " + $('#inputdrivinghour').val());
console.log("input = " + $('#inputhomeworkhour').val());
console.log("input = " + $('#inputkidshour').val());
console.log("input = " + $('#inputcleaninghour').val());
console.log("input = " + $('#inputplanninghour').val());	
console.log("input = " + $('#inputshoppinghour').val());
console.log("input = " + $('#inputfinanceshour').val());
console.log("input = " + $('#inputyardhour').val());
console.log("input = " + $('#inputdecoratinghour').val());
console.log("input = " + $('#inputfindinghour').val());
console.log("input = " + $('#inputcounselinghour').val());

console.log("data = " + data.cooking);
console.log("data = " + data.driving);
console.log("data = " + data.homeworksec);
console.log("data = " + data.kids);
console.log("data = " + data.cleaning);
console.log("data = " + data.planning);
console.log("data = " + data.shopping);
console.log("data = " + data.finances);
console.log("data = " + data.yard);
console.log("data = " + data.decorating);
console.log("data = " + data.finding);
console.log("data = " + data.counseling);

console.log("sum = " + inputcooking);
console.log("sum = " + inputdriving);
console.log("sum = " + inputhomework);
console.log("sum = " + inputkids);
console.log("sum = " + inputcleaning);
console.log("sum = " + inputplanning);
console.log("sum = " + inputshopping);
console.log("sum = " + inputfinances);
console.log("sum = " + inputyard);
console.log("sum = " + inputdecorating);
console.log("sum = " + inputfinding);
console.log("sum = " + inputcounseling);
				
console.log("Total Wage is: " + totalwage);

$("#result").show();
$("#bottomform").show();
$("#totalnumber").text(totalwage);
$("#button").hide();


    }


})});
