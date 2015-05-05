// $("#result").hide();

var data = {
			  cooking: 20.01,
			  driving: 11.16,
			  homewor-pre: 16.39,
			  homework-sec: 14.62,
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
		var inputsleep = ($('#inputsleephour').val()/10*10 + $('#inputsleepmin').val()/60),
			inputwork = $('#inputworkhour').val()/10*10 + $('#inputworkmin').val()/60,
			inputshop = $('#inputshophour').val()/10*10 + $('#inputshopmin').val()/60,
			inputtv = $('#inputtvhour').val()/10*10 + $('#inputtvmin').val()/60,
			inputvideo = $('#inputvideohour').val()/10*10 + $('#inputvideomin').val()/60,
			inputsports = $('#inputsportshour').val()/10*10 + $('#inputsportsmin').val()/60,
			inputage = $('#inputage').val(),
			inputgender = $('#inputgender').val(),
			inputworkstatus = $('#inputworkstatus').val();

//setting the average variables which are based on users' input
		var avgwork = datawork[gender][workstatus],
			avgshop = datashop[age][shopgender],
			avgtv = dataleisure[age].tv,
			avgvideo = dataleisure[age].video,
			avgsports = dataleisure[age].sports;

		var avgworkhour = Math.floor(avgwork),
			avgworkmin = Math.round((avgwork-Math.floor(avgwork))*60),
			avgtvhour = Math.floor(avgtv),
			avgtvmin = Math.round((avgtv-Math.floor(avgtv))*60),
			avgshopmin = Math.round(avgshop*60),
			avgvideomin = Math.round(avgvideo*60),
			avgsportsmin = Math.round(avgsports*60);

//code for question 1 on sleep

		var sleepfull = (inputsleep - avgsleep) / avgsleep *100,
			sleep = Math.round(sleepfull),
			sleepabs = Math.abs(sleep);
		if(sleep>0){
			$("#sleepboxmore").show();
			$("#sleepnomore").text(sleepabs+"% more");
			$("#sleepnomore").addClass("more");
		}
		else{
			$("#sleepboxless").show();
			$("#sleepnoless").text(sleepabs+"% less");
			$("#sleepnoless").addClass("less");
		}
		console.log("question 1 answer: " + sleepabs);
		console.log("question 1 hour and min input: " + inputsleep);
		console.log("question 1 hour input: " + $('#inputsleephour').val());
		console.log("question 1 min input: " + $('#inputsleepmin').val()/60);
		console.log("avgwork: " + avgworkhour + "." + avgworkmin);
		console.log("avgshop: " + avgshopmin);
		console.log("avgtv: " + avgtvhour + "." + avgtvmin);
		console.log("avgvideo: " + avgvideomin);
		console.log("avgsports: " + avgsportsmin);
		

//code for question 2 on work
		var workfull = (inputwork - avgwork)/avgwork *100,
			work = Math.round(workfull),
			workabs = Math.abs(work);
			if(work>0){
				$("#workboxmore").show();
				$("#worknomore").text(workabs+"% more");
				$("#workavgnomore").text(avgworkhour + " hours and " + avgworkmin + " minutes");
				$("#workgendermore").text(inputgender);
				$("#workstatusmore").text(inputworkstatus);
				$("#worknomore").addClass("more");
			}
			else{
				$("#workboxless").show();
				$("#worknoless").text(workabs+"% less");
				$("#workavgnoless").text(avgworkhour + " hours and " + avgworkmin + " minutes");
				$("#workgenderless").text(inputgender);
				$("#workstatusless").text(inputworkstatus);
				$("#worknoless").addClass("less");
			}
			console.log("question 2 answer: " + workabs);

//code for question 3 on shopping
	var shopfull = (inputshop - avgshop)/avgshop *100,
		shop = Math.round(shopfull),
		shopabs = Math.abs(shop);
		if(shop>0){
			$("#shopboxmore").show();
			$("#shopnomore").text(shopabs+"% more");
			$("#shopavgnomore").text(" " + avgshopmin + " minutes");
			$("#shopgendermore").text(inputgender);
			$("#shopagemore").text(inputage);
			$("#shopnomore").addClass("more");
		}
		else{
			$("#shopboxless").show();
			$("#shopnoless").text(shopabs+"% less");
			$("#shopavgnoless").text(" " + avgshopmin + " minutes");
			$("#shopgenderless").text(inputgender);
			$("#shopageless").text(inputage);
			$("#shopnoless").addClass("less");
		}
		console.log("question 3 answer: " + shopabs);
		

//code for question 4 on tv

	var tvfull = (inputtv - avgtv)/ avgtv *100,
		tv = Math.round(tvfull),
		tvabs = Math.abs(tv);
	if(tv>0){
		$("#tvboxmore").show();
		$("#tvnomore").text(tvabs+"% more");
		$("#tvavgnomore").text(avgtvhour + " hours and " + avgtvmin + " minutes");
		$("#tvagemore").text(inputage);
		$("#tvnomore").addClass("more");
		}
	else{
		$("#tvboxless").show();
		$("#tvnoless").text(tvabs+"% less");
		$("#tvavgnoless").text(avgtvhour + " hours and " + avgtvmin + " minutes");
		$("#tvageless").text(inputage);
		$("#tvnoless").addClass("less");
		}
	console.log("question 4 answer: " + tvabs);

//code for question 5 on video games and computer

	var videofull = (inputvideo - avgvideo)/ avgvideo *100,
		video = Math.round(videofull),
		videoabs = Math.abs(video);
	if(video>0){
		$("#videoboxmore").show();
		$("#videonomore").text(videoabs+"% more");
		$("#videoavgnomore").text(" " + avgvideomin + " minutes");
		$("#videoagemore").text(inputage);
		$("#videonomore").addClass("more");
		}
	else{
		$("#videoboxless").show();
		$("#videonoless").text(videoabs+"% less");
		$("#videoavgnoless").text(" " + avgvideomin + " minutes");
		$("#videoageless").text(inputage);
		$("#videonoless").addClass("less");
		}
	console.log("question 5 answer: " + videoabs);

//code for question 6 on sports, exercise and recreation

	var sportsfull = (inputsports - avgsports)/ avgsports *100,
		sports = Math.round(sportsfull),
		sportsabs = Math.abs(sports);
	if(sports>0){
		$("#sportsboxmore").show();
		$("#sportsnomore").text(sportsabs+"% more");
		$("#sportsavgnomore").text(" " + avgsportsmin + " minutes");
		$("#sportsagemore").text(inputage);
		$("#sportsnomore").addClass("more");
		}
	else{
		$("#sportsboxless").show();
		$("#sportsnoless").text(sportsabs+"% less");
		$("#sportsavgnoless").text(" " + avgsportsmin + " minutes");
		$("#sportsageless").text(inputage);
		$("#sportsnoless").addClass("less");
		}
	console.log("question 6 answer: " + sportsabs);

//create a new array based on calculation of input (convert to percentage)

	var dataset = [
		{"name":"Sleep","value": sleep/100, "label": sleep, "tooltip": "Compared with average Americans" + " (8:44)"},
		{"name":"Work","value": work/100, "label": work, "tooltip": "Compared with " + inputgender + " Americans with " + inputworkstatus + " employment" + " (" +avgworkhour +":"+ avgworkmin + ")"},
		{"name":"Shop","value": shop/100, "label": shop, "tooltip": "Compared with " + inputgender + " Americans aged " + inputage + " (" + "0:" + avgshopmin + ")"},
		{"name":"Watch TV","value": tv/100, "label": tv, "tooltip": "Compared with Americans aged " + inputage + " (" + avgtvhour + ":" + avgtvmin + ")"},
		{"name":"Computer","value": video/100, "label": video, "tooltip": "Compared with Americans aged " + inputage + " (" + "0:" + avgvideomin + ")"},
		{"name":"Workout","value": sports/100, "label": sports, "tooltip": "Compared with Americans aged " + inputage + " (" + "0:" + avgsportsmin + ")"}
		];
	console.log (dataset[1].value);
	
//code for first d3 bar chart starts here	

var margin = {top: 30, right: 50, bottom: 10, left: 140},
    width = 540 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);

var formatAsPercentage = d3.format("10%");

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(formatAsPercentage)
    .ticks(10)
    .orient("top");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {return d.tooltip;});

var svg = d3.select("#barbox")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

  x.domain(d3.extent(dataset, function(d) { return d.value; })).nice();
  y.domain(dataset.map(function(d) { return d.name; }));

var xd = x.domain(d3.extent(dataset, function(d) { return d.value; })).nice(),
    yd = y.domain(dataset.map(function(d) { return d.name; }));


  svg.selectAll(".bar")
      .data(dataset)
      .enter().append("rect")
      .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", y.rangeBand())
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  svg.append("g")
      .attr("class", "y axis")
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y2", height);

  svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

svg.selectAll("text.name")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){return d.name;})
  .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
  .attr("x", -50)
  .attr('stroke', 'none')
  .attr('fill', 'black')
  .attr("dy", ".35em")
  .attr('text-anchor', 'end')
  .attr({"fill":"black","font-family":"Arimo", "font-size":15});
  

  svg.selectAll("text.value")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d){return d.label + "%";})
     .attr("x", function(d) { 
        if (d.value <= 0) {
          return x(Math.min(0, d.value));
        }
        else {
          return x(Math.min(0, d.value)) + Math.abs(x(d.value)-x(0));
        }
        })
     .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
     .attr("text-anchor", function(d){
      if (d.value <= 0) {return "end"}
      else {return "left"}
     })
     .attr("dx", function(d){
      if (d.value <= 0) {return -2}
      else {return 2}
     })
     .attr("dy", ".36em")
     .attr({"fill":"black","font-family":"Arimo", "font-size":14});
  
function type(d) {
  d.value = +d.value;
  return d;}

var chart = $(".box1"),
    aspect = chart.width() / chart.height(),
    container = chart.parent();
$(window).on("resize", function() {
    var targetWidth = container.width();
    chart.attr("width", targetWidth);
    chart.attr("height", Math.round(targetWidth / aspect));
}).trigger("resize");

//create a new array based on calculation of population average values

var sleepfull2 = (inputsleep - dataavg.sleep)/dataavg.sleep *100,
	sleep2 = Math.round(sleepfull2);
var workfull2 = (inputwork - dataavg.work)/dataavg.work *100,
	work2 = Math.round(workfull2);
var shopfull2 = (inputshop - dataavg.shop)/dataavg.shop *100,
	shop2 = Math.round(shopfull2);
var tvfull2 = (inputtv - dataavg.tv)/dataavg.tv *100,
	tv2 = Math.round(tvfull2);
var videofull2 = (inputvideo - dataavg.video)/dataavg.video *100,
	video2 = Math.round(videofull2);
var sportsfull2 = (inputsports - dataavg.sports)/dataavg.sports *100,
	sports2 = Math.round(sportsfull2);

var dataset2 = [
	{"name":"Sleep","value": sleep2/100, "label": sleep2, "tooltip": "Compared with general Americans (8:44)"},
	{"name":"Work","value": work2/100, "label": work2, "tooltip": "Compared with general Americans (7:35)"},
	{"name":"Shop","value": shop2/100, "label": shop2, "tooltip": "Compared with general Americans (0:45)"},
	{"name":"Watch TV","value": tv2/100, "label": tv2, "tooltip": "Compared with general Americans (3:14)"},
	{"name":"Computer","value": video2/100, "label": video2, "tooltip": "Compared with general Americans (0:29)"},
	{"name":"Workout","value": sports2/100, "label": sports2, "tooltip": "Compared with general Americans (0:22)"}];

//code for second d3 bar using dataset2:

var margin = {top: 30, right: 50, bottom: 10, left: 140},
    width = 540 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);

var formatAsPercentage = d3.format("10%");

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(formatAsPercentage)
    .ticks(10)
    .orient("top");

var tip = d3.tip()
  	.attr('class', 'd3-tip')
  	.offset([-10, 0])
  	.html(function(d) {return d.tooltip;});

var svg = d3.select("#barbox2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

  x.domain(d3.extent(dataset2, function(d) { return d.value; })).nice();
  y.domain(dataset2.map(function(d) { return d.name; }));

var xd = x.domain(d3.extent(dataset2, function(d) { return d.value; })).nice(),
    yd = y.domain(dataset2.map(function(d) { return d.name; }));


  svg.selectAll(".bar")
      .data(dataset2)
      .enter().append("rect")
      .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", y.rangeBand())
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  svg.append("g")
      .attr("class", "y axis")
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y2", height);

  svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

svg.selectAll("text.name")
  .data(dataset2)
  .enter()
  .append("text")
  .text(function(d){return d.name;})
  .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
  .attr("x", -50)
  .attr('stroke', 'none')
  .attr('fill', 'black')
  .attr("dy", ".35em")
  .attr('text-anchor', 'end')
  .attr({"fill":"black","font-family":"Arimo", "font-size":15});
  

  svg.selectAll("text.value")
     .data(dataset2)
     .enter()
     .append("text")
     .text(function(d){return d.label + "%";})
     .attr("x", function(d) { 
        if (d.value <= 0) {
          return x(Math.min(0, d.value));
        }
        else {
          return x(Math.min(0, d.value)) + Math.abs(x(d.value)-x(0));
        }
        })
     .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
     .attr("text-anchor", function(d){
      if (d.value <= 0) {return "end"}
      else {return "left"}
     })
     .attr("dx", function(d){
      if (d.value <= 0) {return -2}
      else {return 2}
     })
     .attr("dy", ".36em")
     .attr({"fill":"black","font-family":"Arimo", "font-size":14});
  
function type(d) {
  d.value = +d.value;
  return d;}

$("#message, #result").show();
$("#button").hide();

//code for dynamic twitter message

var twittermsg;
if(sleep>0&&work>0){twittermsg="I sleep and work more than fellow Americans. What about you?";}
if(sleep>0&&work<0){twittermsg="I sleep more and work less than fellow Americans. What about you?";}
if(sleep<0&&work>0){twittermsg="I work more and sleep less than fellow Americans. What about you?";}
if(sleep<0&&work<0){twittermsg="I sleep and work less than fellow Americans. What about you?";}
else{"Do you sleep, work and play more than fellow Americans?";}


var twitterurl = 'https://twitter.com/share?url=http://kuangkeng.github.io/keng-data-journalism/timeuseform/index.html&text='+twittermsg+'&via=kuangkeng';
console.log("twittermsg: " + twittermsg);
console.log("twitterurl: " + twitterurl);

$('a[href="https://twitter.com/share"]').each(function(){
    $(this).prop('href', twitterurl);
    });
$.getScript('http://platform.twitter.com/widgets.js');


//Facebook SDK

var fbmsg;
if(sleep>0&&work>0){fbmsg="http://kuangkeng.github.io/keng-data-journalism/timeuseform/result1.html";}
if(sleep>0&&work<0){fbmsg="http://kuangkeng.github.io/keng-data-journalism/timeuseform/result2.html";}
if(sleep<0&&work>0){fbmsg="http://kuangkeng.github.io/keng-data-journalism/timeuseform/result3.html";}
if(sleep<0&&work<0){fbmsg="http://kuangkeng.github.io/keng-data-journalism/timeuseform/result4.html";}
console.log("fbmsg: " + fbmsg);
$(".facebook-share-button").click(function(){

FB.ui({
  method: 'share_open_graph',
  action_type: 'og.likes',
  action_properties: JSON.stringify({
      object: fbmsg,
  })
}, function(response){});

    });





   }
});
});
