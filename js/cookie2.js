window.onload = function(){
	countcookie();
}

var countq;

function countcookie(){
	var exex1 = $.cookie("ex1");
	var exex2 = $.cookie("ex2");
	var exex3 = $.cookie("ex3");
	var exex4 = $.cookie("ex4");
	var exex5 = $.cookie("ex5");
	var exex6 = $.cookie("ex6");
	var exex7 = $.cookie("ex7");
	var exex8 = $.cookie("ex8");
	var exex9 = $.cookie("ex9");
	var exex10 = $.cookie("ex10");
	var exex11 = $.cookie("ex11");
	
	var qq1 = $.cookie("q1");
	var qq2 = $.cookie("q2");
	var qq3 = $.cookie("q3");
	var qq4 = $.cookie("q4");
	var qq5 = $.cookie("q5");
	var qq6 = $.cookie("q6");
	var qq7 = $.cookie("q7");
	var qq8 = $.cookie("q8");
	var qq9 = $.cookie("q9");
	var qq10 = $.cookie("q10");
	var qq11 = $.cookie("q11");
	var qq12 = $.cookie("q12");
	var qq13 = $.cookie("q13");
	var qq14 = $.cookie("q14");
	var qq15 = $.cookie("q15");
	var qq16 = $.cookie("q16");
	var qq17 = $.cookie("q17");	
	
	if(exex2){
		document.getElementById("explan2").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q1").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q1").disabled = false;
	}
	if(exex3){
		document.getElementById("explan3").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q2").src = "img/qbtn/q2btn_on.png";
		document.getElementById("q2").disabled = false;
	}
	if(exex4){
		document.getElementById("explan4").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q3").src = "img/qbtn/q3btn_on.png";
		document.getElementById("q3").disabled = false;
	}
	if(exex5){
		document.getElementById("explan5").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q4").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q4").disabled = false;
	}
	if(exex6){
		document.getElementById("explan6").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q6").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q6").disabled = false;
	}
	if(exex7){
		document.getElementById("explan7").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q8").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q8").disabled = false;
	}
	
	
	if(qq1){
		document.getElementById("question2").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex3").src = "img/exbtn/ex2btn_on.png";
		document.getElementById("ex3").disabled = false;
	}
	if(qq2){
		document.getElementById("question3").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex4").src = "img/exbtn/ex3btn_on.png";
		document.getElementById("ex4").disabled = false;
	}
	if(qq3){
		document.getElementById("question4").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex5").src = "img/exbtn/ex1btn_on.png";
		document.getElementById("ex5").disabled = false;
	}
	if(qq4){
		document.getElementById("question5").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q5").src = "img/qbtn/q2btn_on.png";
		document.getElementById("q5").disabled = false;
	}
	if(qq5){
		document.getElementById("question6").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex6").src = "img/exbtn/ex1btn_on.png";
		document.getElementById("ex6").disabled = false;
	}
	if(qq6){
		document.getElementById("question7").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q7").src = "img/qbtn/q2btn_on.png";
		document.getElementById("q7").disabled = false;
	}
	if(qq7){
		document.getElementById("question8").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex7").src = "img/exbtn/ex1btn_on.png";
		document.getElementById("ex7").disabled = false;
	}
	if(qq8){
		document.getElementById("question9").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q9").src = "img/qbtn/q2btn_on.png";
		document.getElementById("q9").disabled = false;
	}
	if(qq9){
		document.getElementById("question10").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q10").src = "img/qbtn/matomebtn_on.png";
		document.getElementById("q10").disabled = false;
	}
	if(qq10){
		document.getElementById("question11").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
	}
}



/*       ここから下は過去のもの     */
function cookiecount(){
	countq = $.cookie("questioncount");
	console.log("今クッキーに入っているのは"+$.cookie("questioncount"));
	if(countq == 2){
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";		
	}else if(countq == 3){
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 4){
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 5){
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 6){
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 7){
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 8){
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 9){
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 10){
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 11){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 12){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 13){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 14){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 15){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 16){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 17){
		document.getElementById("question11").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question10").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question9").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question8").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question7").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question6").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question5").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question4").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}
}

function cookiesave(){
	$.removeCookie("questioncount");
	$.cookie("questioncount",1);
}