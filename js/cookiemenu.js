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

	if(exex1){
		console.log("cookie1章実行中");
		document.getElementById("chapter1").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:70px;width:70px;'>";
		document.getElementById("c2").src = "img/menubtn/c2btn_on.png";
		document.getElementById("c2").disabled = false;
	}
	if(exex2 && exex3 && exex4 && exex5 && exex6 && exex7 && qq1 && qq2 && qq3 && qq4 && qq5 && qq6 && qq7 && qq8 && qq9 && qq10){
		console.log("cookie2章実行中");
		document.getElementById("chapter2").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:70px;width:70px;'>";
		document.getElementById("c3").src = "img/menubtn/c3btn_on.png";
		document.getElementById("c3").disabled = false;
	}
	if(exex8 && exex9 && exex10 && exex11 && qq11 && qq12 && qq13 && qq14 && qq15 && qq16 && qq17){
		console.log("cookie3章実行中");
		document.getElementById("chapter3").innerHTML = "<img border='0' src='./img/clear.png' style = 'height:70px;width:70px;'>";
	}
}
function cookiecount(){
	countq = $.cookie("questioncount");
	console.log("今クッキーに入っているのは"+$.cookie("questioncount"));
	if(countq >= 1 && 11 > countq){
		document.getElementById("chapter1").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq >= 11 && 18 > countq){
		document.getElementById("chapter1").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("chapter2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else if(countq == 18){
		document.getElementById("chapter1").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("chapter2").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
		document.getElementById("chapter3").innerHTML = "<h3 style='display:inline;'><font color = 'red'>クリア！！</font></h3>";
	}else{
		
	}
}
	