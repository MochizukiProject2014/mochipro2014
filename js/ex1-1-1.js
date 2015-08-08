var num=0;
var conStatus = '半径(cm)を整数で入力してください：';
var doNum=0;
var comment = [	
	/* 0 */ "<p>＜おじいちゃん＞　<br />　これが<font color = red>プログラム</font>じゃ。どうじゃ、何がなんだかわからんじゃろ。</p>", 
	/* 1 */	"<p>＜おじいちゃん＞<br />　プログラムというのは<font color = red>パソコンに命令する言葉</font>のことじゃ。<br/>　このプログラムは、わしがパソコンに円の半径を教えたら面積を求めろ、</br>　というような命令になっておる。</p>",
	/* 2 */	"<p>＜けんご＞<br />　なんだか英語がいっぱいでよくわからないよ…</p>",
	/* 3 */	"<p>＜おじいちゃん＞<br />　そうじゃろうなぁ、今はプログラムを見てもよくわからんと思うが、それで大丈夫じゃ。<br/>　とりあえずプログラミングというのは<font color = red>パソコンに命令する言葉</font>で、<br/>　今は円の面積を求めるように命令している、ということだけわかってほしいぞい。<br/></p>",
	/* 4 */	"<p>＜おじいちゃん＞<br />　ではいよいよ円の面積を求めてみるぞい！<br/>　このプログラムを「<font color = red>実行</font>」じゃ！</p>",
	/* 5 */	"<p>＜けんご＞<br />　下に何か出てきたよ？</p>",
	/* 6 */	"<p>＜おじいちゃん＞<br />　この四角を「<font color = red>コンソール</font>」というんじゃ。<br/>　簡単に言うとわしらとパソコンで会話をするところじゃな。<br/>　ここに求めたい円の半径を入力すればパソコンが円の面積を教えてくれるぞい！</p>",
	/* ７ */	"<p>＜おじいちゃん＞<br />　では健吾、パソコンに求めたい円の半径を教えてみるんじゃ。<br/>　「半径(㎝)を整数で入力してください：」の後に半径を入力するんじゃ。<br/>　ピザの半径は31㎝じゃったな。入力したらenterキーを押すんじゃ。</p>",
]

//	/* 2 */	"<p>＜けんご＞</p>"

window.onload=function(){
	var answerId=document.getElementById("state").innerHTML;
	ajaxPostFunc(answerId,"1","ex1-1-1");
	console.log(answerId);
	document.getElementsByClassName("space")[0].innerHTML = comment[0];
	//document.getElementById("clear").style.display ="none";
	var Pbutton = document.getElementById("prev")
	Pbutton.style.display ="none";
	Pbutton.addEventListener("click",prev,false);
	var Nbutton = document.getElementById("next");
	Nbutton.addEventListener("click",next,false);
};


function next(){
	num++;
	var button = document.getElementById("prev")
	button.style.display ="block";
	document.getElementsByClassName("space")[0].innerHTML = comment[num];
	work(num);
	if(!comment[num+1]){
		var button = document.getElementById("next");
		button.style.display ="none";
	}
}

function prev(){
	num--;
	var button = document.getElementById("next")
	button.style.display ="block";
	document.getElementsByClassName("space")[0].innerHTML = comment[num];
	work(num);
	if(num<=0){
		var button = document.getElementById("prev")
		button.style.display ="none";
	}
}

function work(num){
	switch(num){
		case 5:
			createConsole();
			break;
		case 7:
			var con = document.getElementById("console");
			con.removeAttribute('readOnly');
			con.addEventListener("keydown",function(e){if(e.keyCode===13)circle_area()}, false);
	}
}

function createConsole(){
	console.log("createConsoleはうごいてます");
	var con = document.createElement('textarea');
    con.style.width="500px";
    con.style.fontSize="13pt";
    con.rows="6";
    con.id="console";
    con.setAttribute('readOnly','readOnly');
    con.value ='半径(cm)を整数で入力してください：';
    conStatus = '半径(cm)を整数で入力してください：';
    document.getElementById("cont").innerHTML = "";
	document.getElementById("cont").appendChild(con);
	//con.addEventListener("keydown",function(e){if(e.keyCode===13)circle_area()}, false);
}

function circle_area(){
	var r;
	var con = document.getElementById("console");
	var text = con.value;
	var work = text.split(conStatus);
	if(work.length>=2){
		r = work[1];
		if(!(r.match(/[0-9]+/))){
			con.value=con.value+"\n半角の整数で入力してください：";
		}else{
			var result = (parseInt(r))*(parseInt(r))*3.14;
			con.value=con.value+"\n半径"+parseInt(r)+"cmの円の面積は"+result+"㎠です。"+"\n\n半径(cm)を整数で入力してください：";
			doNum++;
			ojiichan(doNum);
		}
	}else{
		con.value=con.value+"\n半径(cm)を整数で入力してください：";
	}
	conStatus = con.value;
}

function ojiichan(n){
	switch(n){
		case 1:
			document.getElementsByClassName("space")[0].innerHTML = "<p>＜おじいちゃん＞<br />　どうじゃ、半径を入力したらすぐに面積が求まったじゃろ。<br>　大きい数字でも一瞬じゃ。他の数字でも試してみるんじゃ。</p>";
			break;
		case 2:
			document.getElementsByClassName("space")[0].innerHTML = "<p>＜おじいちゃん＞<br />　他にも試したい数字があったら気が済むまでやっていいぞい。<br/>　気が済んだら「次に進む!」を押すんじゃ。";
			comment.push("<p>＜おじいちゃん＞<br />　他にも試したい数字があったら気が済むまでやっていいぞい。<br/>　気が済んだら「次に進む!」を押すんじゃ。</p>");
			num++;
			var cookiesave = $.cookie("questioncount");
			$.cookie("ex1",true, { expires: 7 , path: '/'});
			movenext111();
			break;
	}
}

function ajaxPostFunc(param1, param2, param3,param4){
    $.post("post.php", {input1:param1, input2:param2, input3:param3, input4:param4}, function(json){});
}











