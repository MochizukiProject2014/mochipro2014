

/*第２章*/

function hintq2_1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />「int型の変数xを宣言」というのは<br/><font color = red>データ型がint</font>で、<font color = red>変数名をx</font>にして宣言することにゃ。<br/>書き方が分からなかったら辞書の「変数宣言」の項を見るにゃ。</p>";
}

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
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずは<font color = red>int型でxを宣言</font>するにゃ。</b></p>";
}
function hintq2_2_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />scanfは「<font color = red>scanf(\" \",&変数名);</font>」と書くにゃ。<br />\" \"の間に、int型に代入したい場合は<font color = red>%d</font>と書くにゃ。</b></p>";
}

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

/*第２章追加問題*/

function hintq2_1_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />char型でzを宣言するにゃ<br/>書き方が分からなかったら辞書の「変数宣言」の項を見るにゃ。</b></p>";
}

function hintq2_1_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />int型のxとyを同時に宣言するにゃ<br/>同時に宣言する場合は「データ型　変数名,変数名」と書くにゃ<br/>書き方が分からなかったら辞書の「変数宣言」の項を見るにゃ。</b></p>";
}

function hintq2_1_2a_1(){
		document.getElementById("com").innerHTML = "<p><b>ヒント　1/1<br><br />まずdouble型の変数ｙを宣言するにゃ<br/>そのあとにyに3.2を代入するにゃ</b></p>";
}

function hintq2_1_2b_1(){
		document.getElementById("com").innerHTML = "<p><b>ヒント　1/1<br><br />char型の変数に文字を代入する場合、代入する値を<font color = red>'</front>	で囲むにゃ<br/>例：x='y';</b></p>";
}

function hintq2_1_3a(){
 	document.getElementById("com").innerHTML = "<p><b>ヒント　1/1<br><br />char型の変数を初期化する場合は代入する文字を「'」で囲む必要があるにゃ<br/>例；　char a = 'b';</b></p>";
 }

 function hintq2_1_3b(){
 	document.getElementById("com").innerHTML = "<p><b>ヒント　1/1<br><br />同時に初期化する場合「データ型　変数名=値,変数名=値；」という風に書くにゃ</b></p>";
 }
 
 function hintq2_2_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずはdouble型の変数xを宣言するにゃ<b/></p>";
}

function hintq2_2_1a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />scanfでのdouble型の変換指定文字列は「%lf」だにゃ<b/></p>";
}

function hintq2_2_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />scanfでのchar型の変換指定文字列は%cだにゃ<b/></p>";
}

function hintq2_2_2a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずは文字列を入力することのできるデータ型で変数xを宣言するにゃ<b/></p>";
}
function hintq2_2_2a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />キーボードから入力するために使うものは覚えてるかにゃ？忘れてしまったら辞書も参考にするにゃ<b/></p>";
}

function hintq2_2_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />「n」を代入できるデータ型、「3.6」を代入できるデータ型をそれぞれ考えて、適切な型で変数を宣言するにゃ<b/></p>";
}
function hintq2_2_2b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />一つのscanf文で2個の値を入力することもできるにゃ、辞書などを参考に考えてみるにゃ<b/></p>";
}

function hintq2_3_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />xにxかけた値というのはつまりx*xだにゃ、それをxに代入するにゃ</b></p>";
}

function hintq2_3_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />プログラミングも計算の順序は通常の四則演算と一緒だにゃ<br/>だからxに3をかけて2で割るという計算も一つの式で書くことができるにゃ</b></p>";
}

function hintq2_3_2a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br /><br />まずは必要になる変数を宣言するにゃ。<br />どんな型で、なんという名前の変数が必要か考えるにゃ</b></p>";
}

function hintq2_3_2a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />C言語には割った余りを出すことのできる<font color = red>「%」</font>という演算子があるにゃ<br/>たとえば「5%3」と計算したら「2」が答えとして計算されるにゃ</b></p>";
}

function hintq2_3_2b(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br /><br />yには10から3.5が引かれた値が代入されるにゃ。<br />この場合yはどのデータ型にするのが適切か考えるにゃ。</b></p>";
}

function hintq2_4_1a(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />scanfとprintfではdouble型の変換指定文字列が異なるから注意にゃ</b></p>";
}

function hintq2_4_1b(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />char型でxを宣言し、scanfとprintfの変換指定文字列をchar型に合わせた書き方をするにゃ</b></p>";
}

function hintq2_4_2a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />一つのprintfで同時にいくつもの変数を出力をすることができるにゃ<br/>必要なだけ変換指定文字列を書いて、その後に出力したい順番に変数を書けばいいにゃ<br/>辞書も参考にするにゃ</b></p>";
}

function hintq2_4_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />改行の仕方はprintfで<font color = red>「\\n」</font>を出力すればできるにゃ</b></p>";
}
/*第３章*/

function hintq3_1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />「もし～なら」という文を作るには、<font color = red>if文</font>を使うにゃ。<br />if文の書き方は、辞書のif文の項を見るにゃ。</b></p>";
}
function hintq3_1_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />例えば、xが10より大きい条件式は、「<font color = red>x>10</font>」と表すにゃ。</b></p>";
}

function hintq3_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />xがyより小さいという式は、<font color = red>x < y</font>と表すにゃ。<br/>「<font color = red>もし〜なら</font>」という文を作るには、<font color = red>if文</font>を使うにゃ。</b></p>";
}

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

/*第３章追加問題*/

function hintq3_1_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />例えば、xが15より大きい条件式は、「<font color = red>x>15</font>」と表すにゃ。<b/></p>";
}
function hintq3_1_1a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />「もし～なら」という文を作るには、<font color = red>if文</font>を使うにゃ。<br />if文の書き方は、辞書のif文の項を見るにゃ。<b/></p>";
}

function hintq3_1_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />例えば、xが30より小さい条件式は、「<font color = red>x<30</font>」と表すにゃ。<b/></p>";
}
function hintq3_1_1b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br />「～以下です」という文を作るには、「<font color = red> <= </font>」を使うにゃ。<b/></p>";
}


function hintq3_1_2a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />xがyより小さいという式は、<font color = red>x < y</font>と表すにゃ。<b/></p>";
}
function hintq3_1_2a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/>「<font color = red>もし～なら</font>」という文を作るには、<font color = red>if文</font>を使うにゃ。<b/></p>";
}

function hintq3_1_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />xがyより大きいという式は、<font color = red>x > y</font>と表すにゃ。<b/></p>";
}
function hintq3_1_2b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/>「<font color = red>～以上です</font>」という文を作るには、「<font color = red> >= </font>」を使うにゃ。<b/></p>";
}


function hintq3_1_3a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />if文を使って「<font color = red>xが0と等しいなら</font>」という式を書くにゃ。<b/></p>";
}
function hintq3_1_3a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/>「<font color = red>～と等しい</font>」は、「<font color = red> == </font>」を使うにゃ<b/></p>";
}

function hintq3_1_3b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />if文を使って「<font color = red>xとyが異なるなら</font>」という式を書くにゃ。<b/></p>";
}
function hintq3_1_3b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/>「<font color = red>～は異なる</font>」は、「<font color = red> != </font>」を使うにゃ。<b/></p>";
}


function hintq3_1_4a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />出力するのは、xが150<font color = red>かつ</font>yが165である場合にゃ。<b/></p>";
}
function hintq3_1_4a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/><font color = red>共に真である</font>場合は、「<font color = red> && </font>」を使うにゃ。<b/></p>";
}

function hintq3_1_4b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />出力するのは、xかyの<font color = red>どちらか片方が</font>100点か、<font color = red>両方が</font>100点の場合にゃ。<b/></p>";
}
function hintq3_1_4b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/><font color = red>少なくとも片方が真</font>の場合は、「<font color = red> || </font>」を使うにゃ。<b/></p>";
}


function hintq3_2_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />この場合は、二人が成人の場合とそれ以外で区別するにゃ。<b/></p>";
}
function hintq3_2_1a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/><font color = red>共に真である</font>場合は、「<font color = red> && </font>」を使うにゃ。<b/></p>";
}

function hintq3_2_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />この場合は、少なくとも片方が成人の場合とそれ以外で区別するにゃ。<b/></p>";
}
function hintq3_2_1b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br><br/><font color = red>少なくとも片方が真</font>の場合は、「<font color = red> || </font>」を使うにゃ。<b/></p>";
}


function hintq3_3_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />else ifは<font color = red>何回でも使うことができる</font>にゃ。</b></p>";
}
function hintq3_3_1a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br />「<font color = red>60点以上100点以下なら</font>」合格で、<br />「<font color = red>それ以外で0点以上60点未満なら</font>」不合格、<br />「<font color = red>それ以外なら</font>」ありえない点数だにゃ。<br />ifやelse if、elseを使ってうまく表現するにゃ～</b></p>";
}

function hintq3_3_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />elseは（）内の条件式の<font color = red>どれにも当てはまらない</font>場合に実行されるにゃ。</b></p>";
}
function hintq3_3_1b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br />「<font color = red>23.5以上かつ24.5未満なら</font>」Sサイズで、<br />「<font color = red>それ以外で24.5点以上かつ25.5未満なら</font>」Mサイズ、と考えていくにゃ。<br />ifやelse if、elseを使ってうまく表現するにゃ～</b></p>";
}

/*第４章*/
function hintq4_1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />繰り返し同じことをしたいなら<font color = red>for</font>を使うにゃ。</b></p>";
}
function hintq4_1_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />aが1〜３の間だけ繰り返すには<br />aに１ずつ足していけばいいにゃ。</b></p>";
}


function hintq4_1_2_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />繰り返し同じことをしたいなら<font color = red>for</font>を使うにゃ。</b></p>";
}
function hintq4_1_2_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />bが1〜３の間だけ繰り返すには<br />bに１ずつ足していけばいいにゃ。</b></p>";
}

function hintq4_2_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />偶数は2で割って余りが0になる数字にすればいいにゃ。</b></p>";
}
function hintq4_2_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />余りを出すには<font color = red>%</font>を使うにゃ。</b></p>";
}

function hintq4_2_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />whileの()内に「ansが100になるまで」ループを続けるという条件式を書くにゃ。</b></p>";
}

function hintq4_3_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />1の段の計算が終わったら改行して2の段を計算する、という構造にするにゃ</b></p>";
}


function hintc4_matome_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />入力する変数と、合計を記録する変数と、<br />何回足したかを記録する変数の3つを宣言するにゃ</b></p>";
}
function hintc4_matome_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />0以外の場合、その値を合計を記録する変数に足し、<br />何回足したかを記録する変数に1を足すにゃ。<br />0が入力されたらbreakを実行させるにゃ。</b></p>";
}


function hintc4_matome2_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/6<br><br />行数を指定するループの中に、*を出力するループを作るにゃ。</b></p>";
}
function hintc4_matome2_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/6<br /><br />まずはint型で4つの変数を宣言するにゃ。<br />うち一つには初期値1を代入するにゃ。<br />初期値を代入した変数で＊の数を制御するにゃ！</b></p>";
}
function hintc4_matome2_3(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  3/6<br><br />次はscanfで何かに代入するにゃ。<br />これが行数になるにゃ！！</b></p>";
}
function hintc4_matome2_4(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  4/6<br /><br />二重ループを作るにゃ！<br />外側のループには何行目かを制御するループを作り、<br />その中に＊を出力するループを作るにゃ。</b></p>";
}
function hintc4_matome2_5(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  5/6<br><br />外側のループの条件にscanfで使った変数を<br />うまく組み合わせるにゃ。</b></p>";
}
function hintc4_matome2_6(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  6/6<br /><br />内側のループの条件に、最初に初期値1を代入した変数をうまく組み合わせるにゃ！<br />このループを抜けたら＊を１個増やせるように変数に代入して改行するにゃ！</b></p>";
}

/*第４章追加問題*/

function hintq4_1_1a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />宣言されている変数aを使って何回繰り返したかを表示するにゃ</b></p>";
}

function hintq4_1_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />for分の条件式を少し工夫して偶数だけを表示するようにするにゃ。</b></p>";
}
function hintq4_1_1b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />if文を組み合わせて見るのもいいかもにゃ！！</b></p>";
}

function hintq4_1_2a(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />「平均値を入れるということは整数以外が平均値になることもあり得るので、<br />平均値を入れる変数には適切な形で宣言するにゃ</b></p>";
}

function hintq4_1_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />for分の条件式を少し工夫して偶数だけを表示するようにするにゃ。</b></p>";
}
function hintq4_1_2b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />for文を使って4回値を足していき、4回足し算が終わったら平均値を計算して出力するにゃ！！</b></p>";
}

function hintq4_2_1b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />0以外の値が入力されるまで繰り返すので、何回繰り返すかはわからないにゃ。<br />だからループはどうするべきか考えるにゃ。</b></p>";
}
function hintq4_2_1b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />if文を使って0が入力されたらループを抜け出すようにするにゃ！！</b></p>";
}

function hintq4_2_2a_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />4章の1節の問題１で似たような問題をやったのは覚えてるかにゃ?<br />あれと同じプログラムを今度はwhileを使って作ればいいにゃ。</b></p>";
}
function hintq4_2_2a_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />for文には初期化四季と再初期化式があるけど、while文にはそれがないので、<br />while文の中にそれを書き足してやればいいにゃ</b></p>";
}

function hintq4_2_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />2の段の表を作るということは出力する値は「24681012141618」だにゃ。</b></p>";
}
function hintq4_2_2b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />「2×繰り返した回数」を9回計算すればいいにゃ!</b></p>";
}


function hintq43121(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br /><br />左上から右下に「*」で対角線を引くということは<br />1行目なら1回目、2行目なら2回目に「・」のかわりに「*」を打てばいいにゃ。</b></p>";
}
function hintq4_3_1b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />つまり、「・」で四角形を作るプログラムを書いて、<br />「もし1行目の1回目なら『*』、それ以外なら『・』を出力する」という<br />プログラムを追加すればいいにゃ!</b></p>";
}

/*第５章*/

function hintq5_1_1_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />配列の中身を1つずつ順番に足していくにゃ。</b></p>";
}
function hintq5_1_1_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />配列の要素は5個あるにゃ！！</b></p>";
}


function hintq5121(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />bの配列にaの配列を後ろから代入していくにゃ。</b></p>";
}
function hintq5122(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />for文の中にa[4-i]と書くことで、aの配列を後ろから順番に呼び出せるにゃ</b></p>";
}


function hintq5211(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />要素数が3つ、配列の数が3つの二次元配列を宣言すればいいにゃ。</b></p>";
}
function hintq5212(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />二次元配列は、data[配列の数][要素数]でつくることができるにゃ</b></p>";
}


function hintq5_2_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br>二次元配列を呼び出すときは、配列の番地も要素の番地も最初は0番目にゃ</b></p>";
}


function hintqc5_matome_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/3<br><br />まずは配列を宣言するにゃ！</b></p>";
}
function hintqc5_matome_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/3<br><br />bに呼び出したい要素の番地を代入させるにゃ！</b></p>";
}
function hintqc5_matome_3(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  3/3<br><br />a[b]でaの配列からbに入力した番地の要素を呼び出せるにゃ！</b></p>";
}

/*第5章追加問題*/

function hintq5_1_1a(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />変数名と大きさと初期化する値をよく確認して宣言するにゃ。<br />宣言の仕方がわからない場合は辞書を参考にするにゃ。</b></p>";
}

function hintq5_1_1b(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />配列の1番最初の要素を呼び出すときは、何番目の要素を呼び出せばよかったか覚えてるかにゃ？</b></p>";
}

function hintq5_1_2a(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />宣言されている配列の大きさは5だから5回繰り返すループを使って、<br />0番目、1番目、2番目…と出力していけばいいにゃ。</b></p>";
}

function hintq5_1_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />キーボードから任意の値を入力する、ということはscanfを使うにゃ。</b></p>";
}
function hintq5_1_2b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><br />3回ループさせて、0番目、1番目、2番目の要素に入力していけばいいにゃ!</b></p>";
}

function hintq5_2_1a(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />大きさが[2][3]の配列ということは大きさが[3]の配列を2つ持っている配列ということにゃ、辞書を参考にしていいから理解しながら宣言してみるにゃ。</b></p>";
}

function hintq5_2_1b(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />一つ目のループで配列を選択し、二つ目のループで要素を選択し入力していくイメージにゃ。</b></p>";
}

function hintq5_2_2a(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/1<br><br />一つ目のループで配列を選択し、二つ目のループで要素を選択し出力していくイメージにゃ。</b></p>";
}

function hintq5_2_2b_1(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  1/2<br><br />まずは必要な変数を宣言するにゃ、<br />for文を書くのに必要な変数、二次元配列の要素を指定するための変数、平均値を計算するために必要な変数、が必要にゃ。<br />平均値は小数もあり得るから気を付けるにゃ。。</b></p>";
}
function hintq5_2_2b_2(){
	document.getElementById("com").innerHTML = "<p><b>ヒント  2/2<br /><font size = 2>3回二次元配列を呼び出せばいいにゃ。<br />要素を指定する変数に呼び出したい値を入力して、そのあと数式で入力した変数を利用して配列を呼び出して、平均値を計算するための変数に足酢、これを3回繰り返せばいいにゃ。平均値を計算するための変数にはあらかじめ0を入れておかないと計算できないから注意にゃ!</font></b></p>";
}
