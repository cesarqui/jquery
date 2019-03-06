
//suma
$(function() {
	console.log("REAdy")
	$('#sum').click(function(e){
		
		$('#operaciones').parsley()


		var first_number = $('#first_number').val()
			second_number = $('#second_number').val()
			result = $('#result')

		console.log(first_number + " " + second_number)
		e.preventDefault()  // evita el envio del form
		console.log(typeof(first_number))
		console.log(typeof(second_number))
		sum_result = parseInt(first_number) + parseInt(second_number)
		result.val(sum_result)
	})
});

//resta
$(function() {
	console.log("REAdy")
	$('#res').click(function(e){
		
		$('#operaciones').parsley()


		var first_number = $('#first_number').val()
			second_number = $('#second_number').val()
			result = $('#result')

		console.log(first_number + " " + second_number)
		e.preventDefault()  // evita el envio del form
		console.log(typeof(first_number))
		console.log(typeof(second_number))

		if(first_number > second_number){
			res_result = parseInt(first_number) - parseInt(second_number)
			result.val(res_result)

			}else{
				 alert("El primer numero tiene que se mayor que el segundo ");
				}
		
	})
});



//multiplicacion

$(function() {
	console.log("REAdy")
	$('#mul').click(function(e){
		
		$('#operaciones').parsley()


		var first_number = $('#first_number').val()
			second_number = $('#second_number').val()
			result = $('#result')

		console.log(first_number + " " + second_number)
		e.preventDefault()  // evita el envio del form
		console.log(typeof(first_number))
		console.log(typeof(second_number))
		mul_result = parseInt(first_number) * parseInt(second_number)
		result.val(mul_result)
	})
});


//divisón
$(function() {
	console.log("REAdy")
	$('#divi').click(function(e){
		
		$('#operaciones').parsley()


		var first_number = $('#first_number').val()
			second_number = $('#second_number').val()
			result = $('#result')

		console.log(first_number + " " + second_number)
		e.preventDefault()  // evita el envio del form
		console.log(typeof(first_number))
		console.log(typeof(second_number))
		divi_result = parseInt(first_number) / parseInt(second_number)
		result.val(divi_result)
	})
});