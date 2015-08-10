var sample211 = 'ANIME_sengen("int","x");ANIME_sengen("double","y")'
var sample2111 = 'ANIME_sengen("char","z");'
var sample2112 = 'ANIME_sengen("int","x");ANIME_sengen("int","y")'
var sample212 = 'ANIME_sengen("int","x");ANIME_dainyu("x","10")'
var sample2121 = 'ANIME_sengen("double","y");ANIME_dainyu("y","3.200000")'
var sample2122 = 'ANIME_sengen("char","a");ANIME_dainyu("a","s")'
var sample213 = 'ANIME_sengen_dainyu("double","a","5.500000");'
var sample2131 = 'ANIME_sengen_dainyu("char","x","y")'
var sample2132 = 'ANIME_sengen_dainyu("int","x","3");ANIME_sengen_dainyu("int","y","7")'
var sample221 ='ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5")'
var sample2211 = 'ANIME_sengen("double","x");ANIME_scanf();setPrintf("2.3");ANIME_dainyu("x","2.300000")'
var sample2212 = 'ANIME_sengen("char","x");ANIME_scanf();setPrintf("k");ANIME_dainyu("x","k")'
var sample222 = 'ANIME_sengen("int","x");ANIME_sengen("double","y");ANIME_scanf();setPrintf("15 5.5");ANIME_dainyu("x","15");ANIME_dainyu("y","5.500000")'
var sample2221 = 'ANIME_sengen("char","x");ANIME_scanf();setPrintf("k");ANIME_dainyu("x","k")'
var sample2222 = 'ANIME_sengen("char","x");ANIME_sengen("double","y");ANIME_scanf();setPrintf("n 3.6");ANIME_dainyu("x","n");ANIME_dainyu("y","3.600000")'
var sample231 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5");ANIME_enzan_dainyu("x",["x","+","3"],"8")';
var sample2311 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("3");ANIME_dainyu("x","3");ANIME_enzan_dainyu("x",["x","*","x"],"9")'
var sample2312 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("4");ANIME_dainyu("x","4");ANIME_enzan_dainyu("x","x*3/2","6")'
var sample232 = 'ANIME_sengen("int","x");ANIME_sengen("int","y");ANIME_scanf();setPrintf("5 3");ANIME_dainyu("x","5");ANIME_dainyu("y","3");ANIME_sengen("int","z");ANIME_enzan_dainyu("z",["x","+","y"],"8")'
var sample2321 = 'ANIME_sengen("int","x");ANIME_sengen("int","y");ANIME_scanf();setPrintf("10");ANIME_dainyu("x","10");ANIME_enzan_dainyu("y","x%3","1")'
var sample2322 = 'ANIME_sengen("int","x");ANIME_sengen("double","y");ANIME_scanf();setPrintf("10");ANIME_dainyu("x","10");ANIME_enzan_dainyu("y","x-3.5","6.500000")'
var sample241 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5");ANIME_printf(["%d"],["x"]);setPrintf("5");'
var sample2411 = 'ANIME_sengen("double","x");ANIME_scanf();setPrintf("2.1");ANIME_dainyu("x","2.100000");ANIME_printf(["%f"],["x"]);setPrintf("2.100000")'
var sample2412 = 'ANIME_sengen("char","x");ANIME_scanf();setPrintf("a");ANIME_dainyu("x","a");ANIME_printf(["%c"],["x"]);setPrintf("a")'
var sample242 = 'ANIME_sengen("double","x");ANIME_sengen("char","y");ANIME_dainyu("x","3.500000");ANIME_dainyu("y","a");ANIME_printf(["%f"," ","%c"],["x","y"]);setPrintf("3.500000 a")';
var sample2421 = 'ANIME_sengen("char","x");ANIME_sengen("char","y");ANIME_sengen("char","z");ANIME_dainyu("x","k");ANIME_dainyu("y","n");ANIME_dainyu("z","g");ANIME_printf(["%c","","%c","","%c"],["x","y","z"]);setPrintf("kng")'
var sample2422 = 'ANIME_sengen("int","x");ANIME_sengen("int","y");ANIME_dainyu("x","1");ANIME_dainyu("y","3");ANIME_printf(["%d","/n","%d"],["x","y"]);setPrintf("1/n3")'
var sampleMatome2 ='ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5");ANIME_enzan_dainyu("x",["x","*","3"],"15");ANIME_printf(["%d"],["x"]);setPrintf("15")';
var sample311 = 'ANIME_sengen_dainyu("int","x","32");ANIME_printf("xは20より大きいです");setPrintf("xは20より大きいです")';
var sample3111 = 'ANIME_sengen_dainyu("int","x","3");ANIME_printf("xは15より小さいです。");setPrintf("xは15より小さいです。")'
var sample3112 = 'ANIME_sengen_dainyu("int","x","30");ANIME_printf("xは30以上です。");;setPrintf("xは30以上です。")'
var sample312 = 'ANIME_sengen_dainyu("int","x","12");ANIME_sengen_dainyu("int","y","20");ANIME_printf("xはyより小さいです");setPrintf("xはyより小さいです")'
var sample3121 = 'ANIME_sengen_dainyu("int","x","93");ANIME_sengen_dainyu("int","y","56");ANIME_printf("xはyより大きいです。");setPrintf("xはyより大きいです。")'
var sample313 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5");ANIME_printf("xは0ではないです");setPrintf("xは0ではないです")';
var sample3131 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("0");ANIME_dainyu("x","0");ANIME_printf("xは0と等しいです。");setPrintf("xは0と等しいです。")'
var sample3132 = 'ANIME_sengen_dainyu("int","x","3");ANIME_sengen_dainyu("int","y","9");ANIME_printf("xとyは異なります");setPrintf("xとyは異なります")'
var sample314 = 'ANIME_sengen("double","height");ANIME_sengen("double","weight");ANIME_sengen("double","bmi");ANIME_printf("あなたの身長(m)を入力してください。");setPrintf("あなたの身長(m)を入力してください。");ANIME_scanf();setPrintf("1.7");ANIME_dainyu("height","1.700000");ANIME_printf("あなたの体重(kg)を入力してください。");setPrintf("あなたの体重(kg)を入力してください。");ANIME_scanf();setPrintf("65");ANIME_dainyu("weight","65.000000");ANIME_enzan_dainyu("bmi",["weight","/","(","height","*","height",")"],"22.491349");ANIME_printf("あなたは適正です。");setPrintf("あなたは適正です。")';
var sample3141 ='ANIME_sengen_dainyu("int","x","150");ANIME_sengen_dainyu("int","y","165");ANIME_printf(["xは","%d","cm・yは","%d","cmです。"],["x","y"]);setPrintf("xは150cm・yは165cmです。")'
var sample3142 ='ANIME_sengen_dainyu("int","x","100");ANIME_sengen_dainyu("int","y","100");ANIME_printf("xかyに100点はいます。");setPrintf("xかyに100点はいます。")'
var sample321 ='ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5");ANIME_printf("未成年");setPrintf("未成年")'
var sample3211 ='ANIME_sengen("int","x");ANIME_sengen("int","y");ANIME_printf("xの年齢を入力してください。");setPrintf("xの年齢を入力してください。");ANIME_scanf();setPrintf("20");ANIME_dainyu("x","20");ANIME_printf("yの年齢を入力してください。");setPrintf("yの年齢を入力してください。");ANIME_scanf();setPrintf("18");ANIME_dainyu("y","18");ANIME_printf("少なくとも片方は未成年です。");setPrintf("少なくとも片方は未成年です。")'
var sample3212 ='ANIME_sengen("int","x");ANIME_sengen("int","y");ANIME_printf("xの年齢を入力してください。");setPrintf("xの年齢を入力してください。");ANIME_scanf();setPrintf("12");ANIME_dainyu("x","12");ANIME_printf("yの年齢を入力してください。");setPrintf("yの年齢を入力してください。");ANIME_scanf();setPrintf("17");ANIME_dainyu("y","17");ANIME_printf("xもyも未成年です。");setPrintf("xもyも未成年です。")'
var sample331 = 'ANIME_sengen("int","x");ANIME_scanf();setPrintf("5");ANIME_dainyu("x","5");ANIME_printf("不可");setPrintf("不可")';
var sample3311 = 'ANIME_sengen("int","score");ANIME_scanf();setPrintf("75");ANIME_dainyu("score","75");ANIME_printf("合格");setPrintf("合格")'
var sample3312 = 'ANIME_sengen("double","size");ANIME_scanf();setPrintf("25");ANIME_dainyu("size","25.000000");ANIME_printf("Mサイズです。");setPrintf("Mサイズです。")'
var sampleMatome3 = 'ANIME_sengen("double","height");ANIME_sengen("double","weight");ANIME_sengen("double","bmi");ANIME_printf("あなたの身長(m)を入力してください。");setPrintf("あなたの身長(m)を入力してください。");ANIME_scanf();setPrintf("1.7");ANIME_dainyu("height","1.700000");ANIME_printf("あなたの体重(kg)を入力してください。");setPrintf("あなたの体重(kg)を入力してください。");ANIME_scanf();setPrintf("65");ANIME_dainyu("weight","65.000000");ANIME_enzan_dainyu("bmi",["weight","/","(","height","*","height",")"],"22.491349");ANIME_printf("あなたは適正です。");setPrintf("適正")'
var sample411 = 'ANIME_sengen("int","a");ANIME_dainyu("a","1");ANIME_printf("わんわん\n");setPrintf("わんわん/n");'
var sample4111 = 'ANIME_sengen_dainyu("int","x","3");ANIME_printf("xは15より小さいです。");setPrintf("xは15より小さいです。")'
var sample4112 = 'ANIME_sengen_dainyu("int","x","30");ANIME_printf("xは30以上です。");;setPrintf("xは30以上です。")'

var Exsample311 ='line(1);line(2);line(3);ANIME_sengen_dainyu("int","x","3");line(4);line(5);ANIME_printf("xは5より小さいです");setPrintf("xは5より小さいです");line(6);line(7);line(8)';
var Exsample312 ='line(1);line(2);line(3);ANIME_sengen("int","x");line(4);ANIME_scanf_ex();setPrintf(5);ANIME_dainyu("x","5");line(5);line(6);ANIME_printf("xは０か５です");setPrintf("xは０か５です");line(7);line(8);line(9);line(10);line(11);line(12)';
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー実はこれより上は使ってませんーーーーーーーーーーーーーーーーーーーーーーーーーーー

/*
var ex_111 = new Array();
ex_111.push("setIntr(\"<b>これがプログラムじゃ。じゃあさっそく、動かしてみるぞい</b>\");;baON()");

ex_111.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"r\");;line(4);;ANIME_sengen(\"double\",\"S\");;line(5);;ANIME_scanf_ex();;setPrintf(\"31\\n\");;ANIME_dainyu(\"r\",31);;line(6);;ANIME_enzan_dainyu(\"S\", [\"r\" , \"*\", \"r\", \"*\", \"3.14\"],\"3017.540000\");;line(7);;ANIME_printf([\"面積は\", \"%d\", \"平方cmです\"] , [\"S\"]);;setPrintf(\"面積は3017.540000平方cmです\\n\");;biON();;setIntr(\"<b>どうじゃ？ちゃんと面積が求まったじゃろう。</b>\")");

ex_111.push("setIntr(\"<b>他の数字を入れてもちゃんと求められるぞい。<br />もし自分で好きな数字を入れてみたかったら、もういちど実行してみるんじゃ</b>\");;bRestart();;return_js()");
//ここで「もう一度説明を聞く」「プログラムを実行してみる」の２つのボタンを出現させる？←ただのメモ書き・提案なので無視して下さい
var　ex_111 = new Array();
ex_111.push("setIntr(\"これがプログラムじゃ。じゃあさっそく、動かしてみるぞい\")");
ex_111.push("line(3);ANIME_sengen(\"int\",\"r\");line(4);ANIME_sengen(\"int\",\"S\");ANIME_sengen(\"int\",\"L\")");
ex_111.push("line(5);ANIME_scanf_ex();setIntr(\"ここでわしが、右の白い四角に、キーボードから半角で31と入れてみるぞい。\");setPrintf(\"31\\n\")");
ex_111.push("ANIME_dainyu(\"r\",31);;line(6);;ANIME_enzan_dainyu(\"S\", [\"r\" , \"*\", \"r\", \"*\", \"3.14\"],3017.540000);line(7);ANIME_printf([\"面積は\", \"%d\", \"平方cmです\"] , [\"S\"]);setPrintf(\"面積は3017.540000平方cmです\\n\");line(8);ANIME_enzan_dainyu(\"L\",[\"r\" , \"*\", \"2\", \"*\", \"3.14\"],194.680000);line(9);ANIME_printf([\"円周は\", \"%d\", \"cmです\"] , [\"S\"]);setPrintf(\"円周は194.680000です\\n\")");
ex_111.push("setIntr(\"どうじゃ？ちゃんと面積と周の長さが求まったじゃろう。\")");
ex_111.push("setIntr(\"他の数字を入れてもちゃんと求められるぞい。もし自分で好きな数字を入れてみたかったら、もういちど実行してみるんじゃ\");return_js()");*/


//---------------------------------------------

var ex_211 = new Array();
ex_211.push("setIntr(\"<b>まずはプログラムを動かしてみるにゃ。<br>このプログラムでは色々な種類の変数を呼んでみるにゃ。</br>右上の四角い部分をよく見るにゃ！</b>\");;here();;sign=1;;baON()");

ex_211.push("baOFF();;here();;sign=1;;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_sengen(\"double\",\"y\");;line(5);;ANIME_sengen(\"char\",\"z\");;line(6);;ANIME_sengen(\"int\",\"kengo\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_211.push("line_reset();;line(3);;setIntr(\"<b>上のプログラムの部分をみるにゃ！</br>青く塗られている部分は<font size=&quot;3&quot; color=#0000ff>イント・エックス！</font>……って読むにゃ。</b>\")");
ex_211.push("OnCheckPromin(\"x\");;sign=1;;setIntr(\"<b>int x;と書くと、「x」という名前の<font size=&quot;3&quot; color=#0000ff>青</font>い変数を呼べるにゃ。</br>右上に表示されている、○で囲まれた青い変数が、</br>int x;と書くことによって呼ばれた変数にゃ。</b>\")");
ex_211.push("setIntr(\"<b>intというのは変数の<font size=&quot;3&quot; color=#ff0000>データ型</font>を表しているにゃ。</br>データ型っていうのは、変数がホワイトボードに書ける</br>値の種類のことだにゃ。</br>intは整数という意味だと覚えてほしいにゃ。</b>\")");
ex_211.push("setIntr(\"<b>変数を呼ぶことを<font size=&quot;3&quot; color=#ff0000>宣言</font>と言うにゃ。</br>宣言するときは、<font size=&quot;3&quot; color=#ff0000>「データ型 [半角スペース] 変数名 ;」</font></br>と書くのが決まりにゃ。</b>\")");
ex_211.push("setIntr(\"<b>この変数はデータ型が「int」、名前が「x」だから、</br>「int x;」と書くにゃ。</br><font size=&quot;3&quot; color=#0000ff>int型の変数x</font>と呼んで、意味は<font size=&quot;3&quot; color=#0000ff>「整数型のx」</font>って</br>意味になるにゃ。</b>\")");
ex_211.push("setIntr(\"<b>int型は、持っているホワイトボードに</br>整数をひとつだけ書き込むことができるにゃ。</b>\")");
ex_211.push("setIntr(\"<b>呼んだばかりの変数は、持っているホワイトボードに</br>「？」とだけ書いてあるにゃ。</b>\")");
ex_211.push("OffCheckPromin(\"x\");;sign=1;;setIntr(\"<b>データ型が違うとホワイトボードに書ける値の種類も違うにゃ。</b>\")");
ex_211.push("line(4);;OnCheckPromin(\"y\");;sign=1;;setIntr(\"<b>たとえばこれは、<font size=&quot;3&quot; color=#32cd32>ダブル・ワイ！<br />double型の変数y</font>を呼んでるにゃ。</b>\")");
ex_211.push("setIntr(\"<b>doubleは実数という意味だにゃ。<br />つまり小数のある数字が書けるってことにゃ。</b>\")");
ex_211.push("setIntr(\"<b>double型のホワイトボードには2.5とか、3.3のような、</br>小数点のある数字を書くことができるにゃ。</b>\")");
ex_211.push("OffCheckPromin(\"y\");;sign=1;;line(5);;OnCheckPromin(\"z\");;sign=1;;setIntr(\"<b>次に<font size=&quot;3&quot; color=#ffa500>キャラ・ゼット！！<br />char型の変数z</font>にゃ。<br />charは文字って意味だにゃ。</b>\")");
ex_211.push("setIntr(\"<b>char型は半角の英字を１文字書けるにゃ。<br />「a」は書けるけど「ab」や「abc」は書けないにゃ。</b>\")");
ex_211.push("OffCheckPromin(\"z\");;sign=1;;line(6);;OnCheckPromin(\"kengo\");;sign=1;;line(6);;setIntr(\"<b>この他にも、<font size=&quot;3&quot; color=#ff0000>好きな名前の変数を呼べる</font>にゃ。<br />ここでは int kengo; で、</br>int型の変数kengoという名前の変数を呼んでるにゃ。<br />書いてないけど、例えば double kinako; で、</br>double型のkinakoも呼ぶことができるにゃ。</b>\")");
ex_211.push("setIntr(\"<b>名前をつけるときは一人一人違う名前を</br>つけなければいけないにゃ。<br />もしわからなくなったら辞書の『変数』の項を見るにゃ。</b>\")");
ex_211.push("setIntr(\"<b>型によってホワイトボードに書けるものが違う、</br>っていう話は、また後で説明するから、</br>今は<font size=&quot;3&quot; color=#ff0000>データ型によって違う色の変数が呼べる</font>こと、</br><font size=&quot;3&quot; color=#ff0000>好きな名前を付けられる</font>ことを覚えてほしいにゃ！</b>\")");
ex_211.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</br>今度はプログラムにも注目して見てみるにゃ。</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_211.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_sengen(\"double\",\"y\");;line(5);;ANIME_sengen(\"char\",\"z\");;line(6);;ANIME_sengen(\"int\",\"kengo\");;setIntr(\"<b>なんとなくでもわかったら、次は自分で書いてみるにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_212 = new Array();
ex_212.push("setIntr(\"<b>まずはプログラムを動かしてみるにゃ。</br>このプログラムはint型の変数xと変数yに</br>５と書き込むプログラムだにゃ。</br>右上のアニメの部分を見るにゃ。</b>\");;baON()");

ex_212.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;ANIME_sengen(\"int\",\"y\");;line(4);;ANIME_dainyu(\"x\",5);;line(5);;ANIME_enzan_dainyu(\"y\",[\"x\"],\"5\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_212.push("line_reset();;setIntr(\"<b>xくんに「5」という数を書いてもらう事にするにゃ。<br />上のプログラムに注目にゃ。</b>\")");
ex_212.push("line(3);;setIntr(\"<b>まず一つ、今回は<font size=&quot;3&quot; color=#ff0000>複数宣言</font>を覚えてもらうにゃ。<br />int x,y;と書いてあるのが複数宣言にゃ。</b>\")");
ex_212.push("setIntr(\"<b>前回までは１行づつ変数を宣言していたけど、この書き方なら<br />１行だけで変数を何個も呼び出すことができるのにゃ！</b>\")");
ex_212.push("setIntr(\"<b>書き方はとっても単純にゃ。<br />「データ型 [半角スペース] 変数名<font size=&quot;3&quot; color=#ff0000> , </font>変数名 ... ;」と書くだけにゃ！</br>変数名は「,」で区切れば何個でも書くことができるにゃ！</b>\")");
ex_212.push("setIntr(\"<b>た　だ　し！注意してほしいことがあるにゃ。<br /> <font size=&quot;3&quot; color=#ff0000>データ型の違う変数は同時に宣言できない</font>にゃ！</b>\")");
ex_212.push("setIntr(\"<b>例えば、int x, y double a, b;　とは書けないにゃ。<br />int x, y<font size=&quot;3&quot; color=#ff0000>;</br></font> double a,b<font size=&quot;3&quot; color=#ff0000>;</font></br>と書く必要があるにゃ！</b>\")");
ex_212.push("setIntr(\"<b>それじゃあ改めて、xくんに「5」という数を書いてもらう<br />方法を教えるにゃ！</b>\")");
ex_212.push("OnCheckPromin(\"x\");;sign=1;;line(4);;setIntr(\"<b>xくんに「5」という数を書いてもらうには、</br>「x = 5」と書くにゃ。<br />これを<font size=&quot;3&quot; color=#ff0000>「xに5を代入する」</font>と言うにゃ。</b>\")");
ex_212.push("OffCheckPromin(\"x\");;sign=1;;line(5);;OnCheckPromin(\"y\");;sign=1;;setIntr(\"<b>「y=x」と書く事もできるにゃ！<br />これは、yにxの持つ値を代入するということにゃ。<br />つまり、ここでは「y=5」と同じ意味にゃ。</b>\")");
ex_212.push("setIntr(\"<b>なんでかって？<br />さっき「x = 5」でxに5を代入したことを<br />思い出してほしいにゃ！これでyとxは同じ数になるにゃ。</b>\")");
ex_212.push("OffCheckPromin(\"y\");;sign=1;;setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</br>変数の動きをよく見るのにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_212.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;ANIME_sengen(\"int\",\"y\");;line(4);;ANIME_dainyu(\"x\",5);;line(5);;ANIME_enzan_dainyu(\"y\",[\"x\"],\"5\");;setIntr(\"<b>なんとなくでもわかったら、次は自分で書いてみるにゃ！</b>\");;bRestart();;return_js()");
//---------------------------------------------
var ex_213 = new Array();
ex_213.push("setIntr(\"<b>まずはプログラムを動かしてみるにゃ。</br>変数に小数のある数字を代入してみたいと思うにゃ。</b>\");;baON()");

ex_213.push("baOFF();;line(3);;ANIME_sengen_dainyu(\"int\",\"a\",3);;line(4);;ANIME_sengen_dainyu(\"double\",\"b\",\"3.500000\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_213.push("line_reset();;setIntr(\"<b>さっき教えたみたいに、次は小数のある数字を代入してみるにゃ。</b>\")");
ex_213.push("setIntr(\"<b>その前にひとつ大事なことを教えるにゃ！</br>実は、変数は宣言と代入を一度に行う事が出来るにゃ。<br />それを<font size=&quot;3&quot; color=#ff0000>「初期化」</font>というにゃ！</br>今回は、int型の変数aを3.5で初期化しているにゃ。</b>\")");
ex_213.push("line(3);;setIntr(\"<b>問題の通り、変数を3.5で初期化したいから、<br />int a = 3.5;と書いてみるにゃ。</b>\")");
ex_213.push("setIntr(\"<b>int a;と、</br>a=3.5;を同時にやっている感じにゃ。</b>\")");
ex_213.push("OnCheckPromin(\"a\");;sign=1;;setIntr(\"<b>…あれ？さっき、3.5じゃなくて3が入ってしまったにゃ？</b>\")");
ex_213.push("setIntr(\"<b>そうなのにゃ、int型には<font size=&quot;3&quot; color=#0000ff>整数</font>しか入らないから、</br>実数を代入すると小数点以下は切り捨てちゃうのにゃ！</b>\")");
ex_213.push("OffCheckPromin(\"a\");;sign=1;;line(4);;OnCheckPromin(\"b\");;sign=1;;setIntr(\"<b>だからint型じゃなくて、double型の変数を初期化して代入</br>してみるにゃ！前にも言ったと思うけど、<br />double型は<font size=&quot;3&quot; color=#32cd32>少数のある数字</font>が書けるにゃ。</b>\")");
ex_213.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_213.push("baOFF();;line(3);;ANIME_sengen_dainyu(\"int\",\"a\",3);;line(4);;ANIME_sengen_dainyu(\"double\",\"b\",\"3.500000\");;setIntr(\"<b>bくんには、3.500000って数字が入ったにゃ。<br />これで正解にゃあ〜！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_221 = new Array();
ex_221.push("setIntr(\"<b>まずはプログラムを動かしてみるにゃ。</br>今回は今までとは違ったやり方で変数に数字を代入してみるにゃ！</b>\");;baON()");

ex_221.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"10\\n\");;ANIME_dainyu(\"x\", 10);;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_221.push("line_reset();;setIntr(\"<b>まずコンソールの説明をするにゃ！<br />画面の右下にある白い四角がコンソールだにゃ。</b>\")");
ex_221.push("setIntr(\"<b>ここは、「入力」とか、「出力」を行うところだにゃ。<br />今回は「入力」について教えるにゃ！</b>\")");
ex_221.push("setIntr(\"<b>「入力」っていうのは、<font size=&quot;3&quot; color=#FF0000>プログラムを実行しているとき</font>に</br>変数に値を<font size=&quot;3&quot; color=#FF0000>代入</font>することだにゃ。</b>\")");
ex_221.push("line(4);;setIntr(\"<b>scanfというのが「入力」を行うプログラムにゃ！</br>どの変数に代入するかは、「( )」の中に書かれているにゃ。</b>\")");
ex_221.push("setIntr(\"<b>とりあえず、さっきはボクがテキトーに数字を入力してみたにゃ。</br>プログラム実行中に<font size=&quot;3&quot; color=#FF0000>数字を打ち込んでからenter</font>を押してみたにゃ！</b>\")");
ex_221.push("OnCheckPromin(\"x\");;sign=1;;setIntr(\"<b>xにボクが打ち込んだ「10」が代入されているにゃ！</b>\")");
ex_221.push("OffCheckPromin(\"x\");;sign=1;;setIntr(\"<b>「”%d”」っていうのは型を表しているにゃ。<br /><font size=&quot;3&quot; color=#0000ff>int型</font>の場合は<font size=&quot;3&quot; color=#0000ff>「%d」</font>を用いるのにゃ。</b>\")");
ex_221.push("setIntr(\"<b>型が違うと、%dじゃない文字を書かなければいけないにゃ。<br />他の型は、辞書の『scanf文』の項を見てほしいにゃ。</b>\")");
ex_221.push("setIntr(\"<b>あと、「”%d”」っていうのは、</br><font size=&quot;3&quot; color=#FF0000>絶対に「” ”」で囲まなければいけないにゃ！</font><br />絶対に忘れないで欲しいにゃ。</b>\")");
ex_221.push("setIntr(\"<b>次にどの変数に代入するのか決めるのにゃ。<br /><font size=&quot;3&quot; color=#FF0000>「&x」</font>っていうのがそれにゃ。</br>代入したい変数の前に<font size=&quot;3&quot; color=#FF0000>「&」</font>をつけるにゃ。</b>\")");
ex_221.push("setIntr(\"<b>長々と説明してしまったけれど、ここはちょっと難しいから、<br />「scanf」と「&x」のところだけ覚えてもらえれば良いにゃ。</b>\")");
ex_221.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_221.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"10\\n\");;ANIME_dainyu(\"x\", 10);;setIntr(\"<b>あとは辞書を見て書き写して、使っているうちに覚えるといいにゃ！</br>次の問題で実際に入力をやってみるにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_231 = new Array();
ex_231.push("setIntr(\"<b>まずはプログラムを動かしてみるにゃ。</br>このプログラムはxに代入された数を３倍するプログラムにゃ。</b>\");;baON()");

ex_231.push("baOFF();;line(3);;ANIME_sengen_dainyu(\"int\",\"x\",5);;line(4);;ANIME_enzan_dainyu(\"x\", [\"x\" , \"*\", \"3\"],15);;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_231.push("line_reset();;line(3);;setIntr(\"<b>まずはxを初期化して5を書き込むにゃ。</b>\")");
ex_231.push("line(4);;setIntr(\"<b>次にxを3倍してxに代入するにゃ。</b>\")");
ex_231.push("setIntr(\"<b><font size=&quot;3&quot; color=#FF0000>『*』</font>は普段算数や数学で使っている<font size=&quot;3&quot; color=#FF0000>『×』</font>と同じ意味にゃ！<br />つまりかけ算ができるのにゃ！</b>\")");
ex_231.push("setIntr(\"<b>右辺のxはそれまでのxを指すにゃ。<br />だから、x = 5×3 になって、左辺のxは15、</br>つまりこれ以降、xは15になるにゃ。</b>\")");
ex_231.push("setIntr(\"<b>『*』の部分を<font size=&quot;3&quot; color=#FF0000>演算子</font>というにゃ。<br />演算子は他にもあって、</b>\")");
ex_231.push("setIntr(\"<b><font size=&quot;3&quot; color=#FF0000>『+』</font>で足し算、<br /><font size=&quot;3&quot; color=#FF0000>『-』</font>で引き算、</br><font size=&quot;3&quot; color=#FF0000>『/』</font>で割り算を計算できることができるにゃ！<br /></b>\")");
ex_231.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_231.push("baOFF();;line(3);;ANIME_sengen_dainyu(\"int\",\"x\",5);;line(4);;ANIME_enzan_dainyu(\"x\", [\"x\" , \"*\", \"3\"],15);;setIntr(\"<b>簡単だにゃ？じゃあやってみるのにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_241 = new Array();
ex_241.push("setIntr(\"<b>まずはプログラムを動かしてみるにゃ。</br>このプログラムはxの持つ値を「出力」するプログラムだにゃ。</br>画面右下のコンソールに注目して見てみるにゃ！</b>\");;baON()");

ex_241.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_dainyu(\"x\",3);;line(5);;ANIME_printf([\"xは\",\"%d\",\"です\"],[\"x\"]);;setPrintf(\"xは3です\\n\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_241.push("line_reset();;setIntr(\"<b>いよいよ「出力」の説明をするにゃ！</b>\")");
ex_241.push("setIntr(\"<b>出力っていうのは<font size=&quot;3&quot; color=#FF0000>入力の逆</font>って考えるといいにゃ。<br />入力はコンソールからプログラムに対して</br>値を渡すことだったにゃ、覚えてるにゃ？</b>\")");
ex_241.push("setIntr(\"<b>出力は<font size=&quot;3&quot; color=#FF0000>プログラムの方からコンソールに表示</font>することだにゃ。</b>\")");
ex_241.push("line(5);;setIntr(\"<b>printfっていうのが出力をやってくれるプログラムだにゃ！<br />scanfに似てると思わんかにゃ？<br />でもちょっと違うにゃ！</b>\")");
ex_241.push("setIntr(\"<b>scanfとの違いその① <br />%dなどの<font size=&quot;3&quot; color=#FF0000>周りに好きな文字が書ける</font>にゃ！</b>\")");
ex_241.push("setIntr(\"<b>scanfとの違いその②<br /> <font size=&quot;3&quot; color=#FF0000>変数の前の&がないこと</font>だにゃ！<br />\")");
ex_241.push("setIntr(\"<b>コンソールを見てほしいにゃ！<br />printfで書いた「xは%dです」の、%dの部分が</br>xくんの持つ値になって表示されたと思うにゃ。</b>\")");
ex_241.push("setIntr(\"<b>他にも、scanfではdouble型の入力に%lfを使っていたけれど、<br />printfでは%fだったりと、ちょっとずつ違う点もあるにゃ。<br />覚えるまでは、辞書の『printf』の項を何度も見て書いてみるにゃ。</b>\")");
ex_241.push("setIntr(\"<b>%dに注意して、もう一度みてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_241.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_dainyu(\"x\",3);;line(5);;ANIME_printf([\"xは\",\"%d\",\"です\"],[\"x\"]);;setPrintf(\"xは3です\\n\");;setIntr(\"<b>これが出力だにゃ！<br />じゃあ実際に書いてみるのにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_311 = new Array();
ex_311.push("setIntr(\"<b>うう〜む、この挑戦状を解くにはif文を書く必要があるにゃ！<br />まずはプログラムを動かしてif文を見せるにゃ</b>\");;baON()");

ex_311.push("baOFF();;line(3);;ANIME_sengen_dainyu(\"int\",\"x\",3);;line(4);;ANIME_compare([\"x<5\"],[\"true\"],true);;line(5);;ANIME_printf(\"xは5より小さいです\");;setPrintf(\"xは5より小さいです\\n\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_311.push("line_p(4, 6);;setIntr(\"<b>４行目から６行目を見てほしいにゃ。これがif文だにゃ。</b>\")");
ex_311.push("setIntr(\'<b>今までのプログラムと違って、１行じゃなくて</br>複数行で一つの意味になるにゃ 。<br />『( )』で囲まれた『x < 5』の部分を<font size=&quot;3&quot; color=#FF0000>条件式</font>、<br />『{ }』で囲まれた『printf(\"xは5より小さいです\");』</br>の部分を<font size=&quot;3&quot; color=#FF0000>文</font>というにゃ。</b>\')");
ex_311.push("line_reset();;line(4);;setIntr(\"<b>ifっていうのは『もし…』っていう意味にゃ。<br />この部分をわかりやすくすると、</br>『もし、変数xが5より小さかったら』という意味になるにゃ。</b>\")");
ex_311.push("setIntr(\"<b>『<』この記号は算数の授業で習ったかにゃ？<br />同じように『>』もここで使う事が出来るにゃ。<br /><font size=&quot;3&quot; color=#FF0000>条件式が満たされたときに、文が実行される</font>にゃ。</b>\")");
ex_311.push("setIntr(\"<b>このプログラムではxが3を持っているにゃ。<br />条件式にあてはめると『3 < 5』だから、条件は満たされるにゃ。<br />だからそのあとの文が実行されたにゃ。</b>\")");
ex_311.push("setIntr(\"<b>ここがもしxの中身が6だったら、条件式に当てはめると、</br>『6 < 5』だから、条件は満たされないにゃ。<br />そうすると、この部分は実行されないにゃ。</b>\")");
ex_311.push("line(5);;setIntr(\"<b>それと、今回のprintfの文は今までprintfとは</br>ちょっと違うのことに気付いたかにゃ？</br>今回は変数の持ってる値を出力してないのにゃ！<br />こういうふうに、printfでは変数を使わない文字も</br>出力することができるのにゃ。</b>\")");
ex_311.push("line(6);;setIntr(\"<b>最後に、これがすごーく重要にゃ！<br />さっき言ったように、『{ }』で囲まれた部分が文となるにゃ。<br />この『}』がないと、どこまでが文かわからないのにゃ。</b>\")");
ex_311.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_311.push("baOFF();;line(3);;ANIME_sengen_dainyu(\"int\",\"x\",3);;line(4);;ANIME_compare([\"x<5\"],[\"true\"],true);;line(5);;ANIME_printf(\"xは5より小さいです\");;setPrintf(\"xは5より小さいです\\n\");;setIntr(\"<b>{ }に気をつけて、if文の問題を解いてみるにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_312 = new Array();
ex_312.push("setIntr(\"<b>これ『入力された値が<font size=&quot;3&quot; color=#FF0000>-５以上５未満</font>のときは正解と表示する』</br>プログラムだにゃ。</br>まずは動かしてみるにゃ</b>\");;baON()");

ex_312.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"3\\n\");;ANIME_dainyu(\"x\",3);;line(5);;ANIME_compare([\"-5 <= x && x <= 5\"],[\"true\"],true);;line(6);;ANIME_printf(\"正解\");;setPrintf(\"正解\\n\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_312.push("line_reset();;setIntr(\"<b>最初に教えたif文と違う部分を説明するにゃ。</b>\")");
ex_312.push("line(5);;setIntr(\"<b>まず、『<=』について。</br>これはさっき健吾が言ってた『≦』と同じだにゃ。</b>\")");
ex_312.push("setIntr(\"<b>『≧』も同じように『>=』と書くことが出来るにゃ。<br />このとき、<font size=&quot;3&quot; color=#FF0000>イコールは不等号の右側につける</font>にゃ。<br />逆だと駄目だから気をつけるのにゃ！</b>\")");
ex_312.push("setIntr(\"<b>次に『&&』について説明するにゃ。<br />さっき、「-5 ≦ x ≦ 5 」という書き方は</br>プログラムでは通用しないと言ったにゃ。<br />プログラムでは、<font size=&quot;3&quot; color=#FF0000>「-5<=x」と「x<=5」を</br>分けて書かなくてはならない</font>にゃ！</b>\")");
ex_312.push("setIntr(\"<b>でも、if(-5 <= x x <= 5)と書いても駄目にゃ。<br />そこで、<font size=&quot;3&quot; color=#FF0000>「&&」で条件式を繋ぐ</font>のにゃ！<br />これだと、『-5 <= x』『x <= 5』を繋いでいるから、<br />健吾の言ってた『-5 ≦ x ≦ 5』と同じ意味になるのにゃ！</b>\")");
ex_312.push("setIntr(\"<b>x=3は『-5 <= x』にも『x <= 5』にも</br>当てはまるから”正解”にゃ！</br>じゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_312.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"3\\n\");;ANIME_dainyu(\"x\",3);;line(5);;ANIME_compare([\"-5 <= x && x <= 5\"],[\"true\"],true);;line(6);;ANIME_printf(\"正解\");;setPrintf(\"正解\\n\");;setIntr(\"<b>それじゃあ問題を解いてみるにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_321 = new Array();
ex_321.push("setIntr(\"<b>このプログラムは入力された値が５以下か、</br>５よりも大きいか判定するプログラムだにゃ。</br>まずは動かしてみるにゃ</b>\");;baON()");

ex_321.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"6\\n\");;ANIME_dainyu(\"x\",6);;line(5);;ANIME_compare([\"x <= 5\"],[\"false\"],false);;line(8);;ANIME_printf(\"xは５より上です\");;setPrintf(\"xは５より上です\\n\");;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_321.push("line_reset();;line_p(5, 6);;setIntr(\"<b>今回は6と入力してみたにゃ。<br />ifの条件式は『x <= 5』だから、この中の文は実行されないにゃ。</b>\")");
ex_321.push("line_reset();;line_p(7, 9);;setIntr(\"<b>今回説明するのはこれにゃ！<br /><font size=&quot;3&quot; color=#FF0000>else</font>！英語でいうと、『それ以外』って意味だにゃ。</b>\")");
ex_321.push("setIntr(\"<b>elseには条件式はいらないにゃ。<br />この中の文は、<font size=&quot;3&quot; color=#FF0000>上のifの条件式が満たされない場合に実行される</font>にゃ。</b>\")");
ex_321.push("setIntr(\"<b>上のifの条件式は『x <= 5』で満たされていないから、</br>elseの中の文だけ実行されるにゃ。</b>\")");
ex_321.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_321.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"6\\n\");;ANIME_dainyu(\"x\",6);;line(5);;ANIME_compare([\"x <= 5\"],[\"false\"],false);;line(8);;ANIME_printf(\"xは５より上です\");;setPrintf(\"xは５より上です\\n\");;setIntr(\"<b>elseの中の文が実行されたにゃ！<br />こういうふうにelseを使って、次の問題をやってみるにゃ！</b>\");;bRestart();;return_js()");

//---------------------------------------------
var ex_331 = new Array();
ex_331.push("setIntr(\"<b>今回みせるお手本は、</br>「入力された数を３で割ったあまりを表示するプログラム」にゃ！<br />難しく見えるかもしれないけど、実はとっても簡単にゃ。</b>\");;baON()");

ex_331.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"4\\n\");;ANIME_dainyu(\"x\",4);;line(5);;ANIME_compare([\"x%3 == 0\"],[\"false\"],false);;line(7);;ANIME_compare([\"x%3 == 1\"],[\"true\"],true);;line(8);;ANIME_printf(\"xを3で割った余りは1です\");;setPrintf(\"xを3で割った余りは1です\\n\");;line(12);;biON();;setIntr(\"<b>それじゃあボクの作ったプログラムを説明していくにゃ。</b>\")");

ex_331.push("line_reset();;line(5);;setIntr(\"<b>まず先に<font size=&quot;3&quot; color=#FF0000>『%』</font><font size=&quot;3&quot; color=#FF0000>『==』</font>の説明をしたいと思うにゃ。</b>\")");
ex_331.push("setIntr(\"<b>まずは『%』の説明をするにゃ！<br />これは、<font size=&quot;3&quot; color=#FF0000>割り算のあまり</font>を求めることの出来る演算子にゃ！</b>\")");
ex_331.push("setIntr(\"<b>演算子は前に教えたと思うにゃ。<br />忘れていたら辞書の『数式』の項を見てほしいにゃ。</b>\")");
ex_331.push("setIntr(\"<b>次に『==』の説明をするにゃ！<br />これは普段算数や数学で使っている『等しい』と同じ意味だにゃ。</b>\")");
ex_331.push("setIntr(\"<b>一つのイコールじゃ駄目なのかって？<br />それはプログラムだと『代入』の意味になっちゃうにゃ。<br />プログラムで『等しい』というのは『==』だということを</br>覚えてほしいにゃ。</b>\")");
ex_331.push("line(7);;setIntr(\"<b>次にこの行に注目にゃ！<br />elseとifがどっちも使われているのがわかると思うにゃ。</b>\")");
ex_331.push("setIntr(\"<b>こうすることで「それ以外」の文を複数書くことができるにゃ。<br />見た目の通り、else文とif文を混ぜたものだと思ってくれていいにゃ。</b>\")");
ex_331.push("setIntr(\"<b>気をつけてほしいのは、一度、条件式の条件を満たしたら、<br />それ以降のelse if文・else文は実行されないということにゃ。</b>\")");
ex_331.push("setIntr(\"<b>ここではxに4を入力しているから、『x%3 == 1』は、</br>『4を3で割った余りが1』となるにゃ。</b>\")");
ex_331.push("setIntr(\"<b>else ifで書かれた条件式が成り立つから、<br />『xを3で割った余りは1です』と出力されるはずにゃ。<br />ここの条件が満たされたから、その後のelseの文は実行されないにゃ。</b>\")");
ex_331.push("setIntr(\"<b>それじゃあもう一度動かしてみるにゃ！</b>\");;line_reset();;codeArrayInit();;sign=1;;baON()");

ex_331.push("baOFF();;line(3);;ANIME_sengen(\"int\",\"x\");;line(4);;ANIME_scanf_ex();;setPrintf(\"4\\n\");;ANIME_dainyu(\"x\",4);;line(5);;ANIME_compare([\"x%3 == 0\"],[\"false\"],false);;line(7);;ANIME_compare([\"x%3 == 1\"],[\"true\"],true);;line(8);;ANIME_printf(\"xを3で割った余りは1です\");;setPrintf(\"xを3で割った余りは1です\\n\");;line(12);;setIntr(\"<b>それじゃあ問題を解いてみるにゃ！</b>\");;bRestart();;return_js()");

