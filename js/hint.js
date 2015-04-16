


function hintq1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント 1/1<br><br />出力はprintfを使うんじゃ<b/></p>";
}

function hintc1_matome(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />おまじないから全部書いてみるんじゃ。<br/>出力はprintfを使うんじゃ。<br/>おまじないの書き方が思いだせない時は、<br/><font color = red>辞書</font>の『<font color = red>おまじない</font>』の項などを見るのじゃぞ<b/></p>";

}

function hintq2_1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />「int型の変数xを宣言」というのは<br/><font color = red>データ型がint</font>で、<font color = red>変数名をx</font>にして宣言することにゃ。<br/>書き方が分からなかったら辞書の「変数宣言」の項を見るにゃ。</p>";
}
/*function hintq2_1_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br /><font color = red>double型でyとzを同時に宣言</font>するにゃ。<br /><br/>例：int型の変数aとbを同時に宣言する場合<br/><font color = red>　　int a,b;</font></p>";
}*/

function hintq2_1_2_1(){
		document.getElementById("com").innerHTML = "<p><b>ヒント　1/2<br><br />まずは、データ型をint、変数名をxにして宣言するにゃ！</b></p>";
}

function hintq2_1_2_2(){
		document.getElementById("com").innerHTML = "<p><b>ヒント　2/2<br><br />例えば変数xに5を代入するには、「x=5;」と書くにゃ。<br />わからなくなったら<font color = red>辞書</font>の『<font color = red>代入</font>』の項を見るといいにゃ。</b></p>";
}

 function hintq2_1_3(){
 	document.getElementById("com").innerHTML = "<p><b>ヒント　1/1<br><br />「<font color = red>初期化</font>」というのは「<font color = red>宣言</font>」と「<font color = red>代入</font>」を同時にやることにゃ。<br/>書き方が分からなかったら<br/>辞書の「<font color = red>変数</font>」の「<font color = red>初期化</font>」の項を見るにゃ。</b></p>";
 }

function hintq2_2_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずは<font color = red>int型でxを宣言</font>するにゃ。<b/></p>";
}
function hintq2_2_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />scanfは「<font color = red>scanf(\" \",&変数名);</font>」と書くにゃ。<br />\" \"の間に、int型に代入したい場合は<font color = red>%d</font>と書くにゃ。<b/></p>";
}

// function hintq2_2_2(){
// 	var randnum = Math.floor( Math.random() * 3 );
// 	if(randnum % 2 == 0){
// 		document.getElementById("com").innerHTML = "<p>まずはint型でxとyを宣言するにゃ</p>";
// 	}else{
// 		document.getElementById("com").innerHTML = "<p>２つ以上入力したい場合はその数だけint型なら%dと&変数名を書くにゃ、%dの間にはスペースをいれるにゃ</p>";
// 	}
// }

function hintq2_2_2_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずは<font color = red>int型でx</font>を、<font color = red>double型でyを宣言</font>するにゃ。<b/></p>";
}
function hintq2_2_2_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />scanfでdouble型の変数に値を入れる場合、<br/>\" \"の間に%lfと書くにゃ。<br />例：double型の変数yにscanfで値を入れる場合<br/><font color = red>　　scanf(\"%lf\",&y);</font><b/></p>";
}

function hintq2_3_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずは変数xを宣言し、scanfを使って代入するにゃ。</b></p>";
}

function hintq2_3_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />xに5を代入するなら、x=5;と書くにゃ。<br />だったら、xにx+3を代入するなら…？</b></p>";
}

// function hintq2_3_2(){
// 	document.getElementById("com").innerHTML = "<p>×（かける）はC言語では*と書くにゃ</p>";
// }

function hintq2_3_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br /><font color = red>zにx+yを代入</font>するにゃ。</b></p>";
}

function hintq2_4_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />変数の出力は「<font color = red>printf(“　”,変数名);</font>」と書くにゃ。<br/>printfの\" \"の中身は、<br/>intなら％d、doubleなら%fだにゃ。<br/>scanfと違って<font color = red>変数名の前に&はいらない</font>から気をつけるにゃ〜</b></p>";
}

function hintq2_4_2_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />char型というのは<font color = red>半角英数字を一つだけ</font>入れるためのデータ型だにゃ。<br />半角英数字はたとえば、「a」とか、「x」とかのことにゃ。</b></p>";
}

function hintq2_4_2_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />printfの\" \"の中身はchar型なら%cと書くにゃ。<br />ちなみにdouble型は%fだにゃ。</b></p>";
}

function hintc2_matome(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br>怪盗Cからの挑戦状だにゃ!<font color = red>scanfとprintf</font>を使うにゃ。<br />どうすればコンソールに入力した数字を３倍にして出力できるか考えるにゃ。<br />わからなくなった時は<font color = red>辞書</font>で確認するにゃ。</b></p>";
}

function hintq3_1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />「もし～なら」という文を作るには、<font color = red>if文</font>を使うにゃ。<br />if文の書き方は、辞書のif文の項を見るにゃ。</b></p>";
}

function hintq3_1_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />例えば、xが10より大きい条件式は、「<font color = red>x>10</font>」と表すにゃ。</b></p>";
}

function hintq3_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />xがyより小さいという式は、<font color = red>x < y</font>と表すにゃ。<br/>「<font color = red>もし〜なら</font>」という文を作るには、<font color = red>if文</font>を使うにゃ。</b></p>";
}

// function hintq3_2_1(){
// 	document.getElementById("com").innerHTML = "<p>ifの()内には「xが0以上なら」という式を書くにゃ。以上や以下は「>=」や「<=」を使うにゃ</p>";
// }

function hintq3_1_3(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />if文を使って「<font color = red>xが0以外なら</font>」という式を書くにゃ。</br>「<font color = red>以外</font>」は、「<font color = red>!=</font>」を使うにゃ</b></p>";
}

function hintq3_1_4_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/3<br><br />bmiの計算の仕方は<font color = red>体重/（身長×身長）</font>だにゃ</b></p>";
}
function hintq3_1_4_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/3<br><br />bmiの適正な値は<font color = red>18.5以上25.0未満</font>だにゃ</b><br><b>以上と未満の不等号に注意にゃ</b></p>";
}
function hintq3_1_4_3(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  3/3<br><br />もし10以上20未満だったら、</br>10は<font color = red>含まれる</font>けど20は<font color = red>含まれない</font>にゃ。<br>不等号の違いをよく考えてみるのにゃ！</b></p>";
}

function hintq3_2_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br /><font color = red>20歳以上なら成人</font>だにゃ、<font color = red>それ以外は未成年</font>だにゃ</b></p>";
}

function hintq3_3_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />else ifは<font color = red>何回でも使うことができる</font>にゃ</b></p>";
}
function hintq3_3_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br />「<font color = red>もし90点以上なら</font>」良で、<br />「<font color = red>それ以外で60点以上90点未満なら</font>」可、<br />「<font color = red>それ以外で40点以上60点未満なら</font>」再試験で、<br />「<font color = red>それ以外なら</font>」不可だにゃ！<br />ifやelse if、elseを使ってうまく表現するにゃ〜</b></p>";
}

function hintc3_matome1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/3<br><br />必要となる変数を宣言するにゃ！<br />身長・体重・bmiは<font color = red>小数点以下も入出力できるようにする</font>にゃ。</b></p>";
}
function hintc3_matome2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/3<br><br />bmiが<font color = red>18.5以上25.0以下は適正、適正より上は太り気味、適正未満はやせ気味</font>だにゃ。</b></p>";
}
function hintc3_matome3(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  3/3<br><br />「<font color = red>適正体重なら</font>」適正で、「<font color = red>それ以外で25.0以上</font>」は太り気味で、「<font color = red>それ以外は</font>」やせ気味だにゃ</b></p>";
}

function hintq4_1_1(){
	var randnum = Math.floor( Math.random() * 3 );
	if(randnum % 2 == 0){
		document.getElementById("com").innerHTML = "<p>繰り返し同じことをしたいならforを使うにゃ。</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>aが1〜３の間だけ繰り返すにはaに１ずつ足していけばいいにゃ。</p>";
	}
}

function hintq4_1_2(){
	var randnum = Math.floor( Math.random() * 3 );
	if(randnum % 2 == 0){
		document.getElementById("com").innerHTML = "<p>繰り返し同じことをしたいならforを使うにゃ。</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>bが３〜１の間だけ繰り返すからbから１ずつ引いていけばいいにゃ。</p>";
	}
}


function hintq4_2_2(){
	document.getElementById("com").innerHTML = "<p>whileの()内に「ansが100になるまで」ループを続けるという条件式を書くにゃ。</p>";
}

function hintq4_3_1(){
	document.getElementById("com").innerHTML = "<p>1の段の計算が終わったら改行して2の段を計算する、という構造にするにゃ</p>";
}

function hintc4_matome(){
	var randnum = Math.floor( Math.random() * 3 );
	if(randnum % 2 == 0){
		document.getElementById("com").innerHTML = "<p>入力する変数と、合計を記録する変数と、何回足したかを記録する変数の3つを宣言するにゃ</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>0以外の場合、その値を合計を記録する変数に足し、何回足したかを記録する変数に1を足すにゃ。0が入力されたらbreakを実行させるにゃ</p>";
	}
}

function hintc4_matome2(){
	var randnum = Math.floor( Math.random() * 7 );
	if(randnum % 6 == 0){
		document.getElementById("com").innerHTML = "<p>行数を指定するループの中に、*を出力するループを作るにゃ</p>";
	}else if(randnum % 6 == 1){
		document.getElementById("com").innerHTML = "<p>まずはint型で4つの変数を宣言するにゃ、うち一つには初期値1を代入するにゃ、初期値を代入した変数で＊の数を制御するにゃ</p>";
	}else if(randnum % 6 == 2){
		document.getElementById("com").innerHTML = "<p>次はscanfで何かに代入するにゃ、これが行数になるにゃ</p>";
	}else if(randnum % 6 == 3){
		document.getElementById("com").innerHTML = "<p>二重ループを作るにゃ、外側のループには何行目かを制御するループを作り、その中に＊を出力するループを作るにゃ</p>";
	}else if(randnum % 6 == 4){
		document.getElementById("com").innerHTML = "<p>外側のループの条件にscanfで使った変数をうまく組み合わせるにゃ</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>内側のループの条件に最初に初期値1を代入した変数をうまく組み合わせるにゃ、このループを抜けたら＊を１個増やせるように変数に代入して改行</p>";
	}
}

function hintq5_1_1(){
	var randnum = Math.floor( Math.random() * 3 );
	if(randnum % 2 == 0){
		document.getElementById("com").innerHTML = "<p>配列の中身を1つずつ順番に足していくにゃ</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>配列の要素は5個あるにゃ</p>";
	}
}

function hintq5_1_2(){
	var randnum = Math.floor( Math.random() * 3 );
	if(randnum % 2 == 0){
		document.getElementById("com").innerHTML = "<p>・bの配列にaの配列を後ろから代入していくにゃ</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>for文の中にa[4-i]と書くことで、aの配列を後ろから順番に呼び出せるにゃ</p>";
	}
}

function hintq5_2_1(){
	var randnum = Math.floor( Math.random() * 3 );
	if(randnum % 2 == 0){
		document.getElementById("com").innerHTML = "<p>要素数が3つ、配列の数が3つの二次元配列を宣言すればいいにゃ</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>二次元配列は、data[配列の数][要素数]でつくることができるにゃ</p>";
	}
}

function hintq5_2_2(){
	document.getElementById("com").innerHTML = "<p>二次元配列を呼び出すときは、配列の番地も要素の番地も最初は0番目にゃ</p>";
}

function hintqc5_matome(){
	var randnum = Math.floor( Math.random() * 4 );
	if(randnum % 3 == 0){
		document.getElementById("com").innerHTML = "<p>まずは配列を宣言するにゃ</p>";
	}else if(randnum % 3 ==1){
		document.getElementById("com").innerHTML = "<p>bに呼び出したい要素の番地を代入させるにゃ</p>";
	}else{
		document.getElementById("com").innerHTML = "<p>a[b]でaの配列からbに入力した番地の要素を呼び出せるにゃ</p>";
	}
}

