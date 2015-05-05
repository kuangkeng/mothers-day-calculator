$("#result").hide();

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
		var inputcooking = $('#inputcookinghour').val()*data.cooking,
			inputdriving = $('#inputdrivinghour').val()*data.driving,
			inputhomework = $('#inputhomeworkhour').val()*data.homework,
			inputkids = $('#inputkidshour').val()*data.kids,
			inputcleaning = $('#inputcleaninghour').val()*data.cleaning,
			inputplanning = $('#inputplanninghour').val()*data.planning,
			inputshopping = $('#inputshoppinghour').val()*data.shopping,
			inputfinances = $('#inputfinanceshour').val()*data.finances,
			inputyard = $('#inputyardhour').val()*data.yard,
			inputdecorating = $('#inputdecoratinghour').val()*data.decorating,
			inputfinding = $('#inputfindinghour').val()*data.finding,
			inputcounseling = $('#inputcounselinghour').val()*data.counseling;

		var totalwage = 
			inputcooking+
			inputdriving+
			inputhomework+
			inputkids+
			inputcleaning+
			inputplanning+
			inputshopping+
			inputfinances+
			inputyard+
			inputdecorating+
			inputfinding+
			inputcounseling;

console.log("Tota Wage is: " + totalwage);

$("#result").show();

    }


})});
