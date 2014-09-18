$(document).ready(function(){
	$('.input').focus();
	$('.button').on('click',function(){
		$('.fizzbuzz').text(" ");
		var number=$('.input').val();
	})
})
function(number){
for (var i=1; i<=number; i++) {
	if(i%3===0 && i%5===0){
		$('fizzbuzz').append("FizzBuzz"+",");
	}
	else if(i%3===0){
		$('fizzbuzz').append("Fizz"+",");
	}
	else if(i%5===0){
		$('fizzbuzz').append("Buzz"+",");
	}
	else {
		$('fizzbuzz').append(i+",");
	}
}
};