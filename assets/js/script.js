let count=60;
let score = 0;
let counter=setInterval(timer, 700); //1000 will  run it every 1 second

function reset(){
	$('button').css("background", "black");
	$('button').attr('disabled','disabled');
}

function timer()
{
	reset();

	count=count-1;

	$('#timer').html(count + " Millisecond");

	$('#score').html(score);

	let randomizer = Math.floor((Math.random() * 36) + 1);

	$('#' + randomizer).css("background", 'rgb(255, 255, 51)');
	$('#' + randomizer).removeAttr('disabled');

	$('#' + randomizer).on('click',function(){

		score += 10;
	});

	if (count == 0)
	{
		clearInterval(counter);
		alert("Times Up!");
		return;
	}


}