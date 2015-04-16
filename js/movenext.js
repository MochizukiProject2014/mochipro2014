
function movenextc1(){
	document.getElementById("movenext").innerHTML='<input type="button" value="次に進む" onclick="location.href=\'./FLASH1/story1_2.html\'"></input>&nbsp;<input type="button" value="問題選択画面へ" onclick="location.href=\'./chapter1.html\'"></input>';
}

function movenext211(){//茶番を挟む
	document.getElementById("movenext").innerHTML='<input type="image" onclick="location.href=\'./FLASH2/storytea2_1.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext212(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_1_3.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext213(){//tea
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext221(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-2-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';	
}

function movenext222(){//tea
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_3.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext231(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-3-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext232(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_4.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext241(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-4-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenext242(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_5.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}

function movenextc2(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/story2_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
}


function movenext311(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q3-1-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenext312(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q3-1-3.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenext313(){//tea
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_1.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenext314(){//tea
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenext321(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_3.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenext331(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_4.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenextc3(){
	document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/story3_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
}

function movenext111(){
	document.getElementById("movenext").innerHTML='<input type="button" value="次に進む" onclick="location.href=\'./FLASH1/story1_2.html\'"></input>';
			
	$(function() {
		$( "input[type=button]" )
		.button()
		.click(function( event ) {
			event.preventDefault();
		});
	});
}
