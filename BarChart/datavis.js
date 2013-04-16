$(function() {



$("<p>").text("My Visualization Here")
		.appendTo("body");


});




$(function() {
	console.log(data)
	var i = 0;
    while(i < data.length) {
      var person = data[i];
      var name = person[8]
      var salary = parseInt(person[11],10);
      
      var maxSalary = 266750;
      
      var fraction = salary / maxSalary;
      
      var salaryWidth = fraction * 500;
      
      var row = $("<div>").addClass("row");
      
    	var div = $("<div>").addClass("name").text(name)
    				.appendTo(row);
      
      var divSalary = $("<div>").addClass("salary").text(salary)
          	.css({ width:salaryWidth})
          			.appendTo(row);

          			
          			
        $("body").append(row);

      i= i + 1;
    }
    
});