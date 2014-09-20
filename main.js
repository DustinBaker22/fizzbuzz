
$(document).ready(function(){
	$('.input').focus();
	$('.button').on('click',function(){
		$('.output').text(" ");
		var number=$('.input').val();
		doFizzBuzz(number);
	});
});
function doFizzBuzz (number) {
for (i=1; i<=number; i++) {
	if(i%3===0 && i%5===0){
		$('.list').append("<li class='fizz-buzz'>" + "FizzBuzz" + "</li>");
	}
	else if(i%3===0){
		$('.list').append("<li class='fizz-buzz'>" + "Fizz" + "</li>");
	}
	else if(i%5===0){
		$('.list').append("<li class='fizz-buzz'>" + "Buzz" + "</li>");
	}
	else {
		$('.list').append("<li>"+ i +"</li>");
	}
}
};