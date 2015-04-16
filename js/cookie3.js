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


	if(exex8){
		document.getElementById("explan8").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q11").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q11").disabled = false;
	}
	if(exex9){
		document.getElementById("explan9").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q14").src = "img/qbtn/q3btn_on.png";
		document.getElementById("q14").disabled = false;
	}
	if(exex10){
		document.getElementById("explan10").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q15").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q15").disabled = false;
	}
	if(exex11){
		document.getElementById("explan11").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q16").src = "img/qbtn/q1btn_on.png";
		document.getElementById("q16").disabled = false;
	}




	if(qq11){
		document.getElementById("question12").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q12").src = "img/qbtn/q2btn_on.png";
		document.getElementById("q12").disabled = false;
	}
	if(qq12){
		document.getElementById("question13").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q13").src = "img/qbtn/q3btn_on.png";
		document.getElementById("q13").disabled = false;
	}
	if(qq13){
		document.getElementById("question14").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex9").src = "img/exbtn/ex2btn_on.png";
		document.getElementById("ex9").disabled = false;
	}
	if(qq14){
		document.getElementById("question15").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex10").src = "img/exbtn/ex1btn_on.png";
		document.getElementById("ex10").disabled = false;
	}
	if(qq15){
		document.getElementById("question16").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("ex11").src = "img/exbtn/ex1btn_on.png";
		document.getElementById("ex11").disabled = false;
	}
	if(qq16){
		document.getElementById("question17").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
		document.getElementById("q17").src = "img/qbtn/matomebtn_on.png";
		document.getElementById("q17").disabled = false;
	}
	if(qq17){
		document.getElementById("question18").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:40px;width:40px;'>";
	}

	
}








function cookiecount(){
	countq = $.cookie("questioncount");
	console.log("今クッキーに入っているのは"+$.cookie("questioncount"));
	if(countq == 12){
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 13){
		document.getElementById("question13").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 14){
		document.getElementById("question14").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question13").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 15){
		document.getElementById("question15").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question14").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question13").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 16){
		document.getElementById("question16").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question15").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question14").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question13").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 17){
		document.getElementById("question17").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question16").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question15").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question14").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question13").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 18){
		document.getElementById("question18").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question17").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question16").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question15").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question14").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question13").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("question12").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}
}

function cookiesave(){
	$.removeCookie("questioncount");
	$.cookie("questioncount",1);
}