var app = null; //tmlib領域を指す
var promin_array = []; //現存のプロミン（配列を含む）の格納場所
var trainport = []; ///配列プロミンをそれぞれの所属する配列にまとめたものの格納場所
/*
 *  trainport
 *  	格納されるものはtrainオブジェクト
 *  	trainオブジェクトは以下のプロパティを持つ
 *			name : 配列名
 *			size : 配列の大きさ(=車両の数)
 *			value : 配列プロミンが格納された配列
 */
var bars = [];
var DEFAULT_SPEED = 1.3;
var SPEED = DEFAULT_SPEED;
var SPEED_BOARD = null;
var sign = 0;
var SAMPLE = null;
var ERROR = null;
var FRONT = 0;
var RIGHT = 1;
var LEFT = 2;
var WRITE = 3;
var ERACE = 4;
var QUESTION = 5;
var ERACE2 = 6;
var WRITE2 = 7;
var HERE = null;
var Pnum = 0;
var bigCanvas =null;
var texture = null;

/*
 *		画像の設定
 */

//読み込む画像
var ASSETS = {
	//printf表示用の外枠
    "printf_space" : "../img/syutsuryokusozai.png", 
    
    //緑プロミン
    "Gpromin_front" : "../img/Gpromin/Gpromin_front.png", 
    "Gpromin_right1" : "../img/Gpromin/Gpromin_right1.png",
    "Gpromin_left1" : "../img/Gpromin/Gpromin_left1.png",
    "Gpromin_writing1" : "../img/Gpromin/Gpromin_writing1.png",
    "Gpromin_eracing1" : "../img/Gpromin/Gpromin_eracing1.png",
    "Gpromin_question1" : "../img/Gpromin/Gpromin_question1.png",
    "Gpromin_right2" : "../img/Gpromin/Gpromin_right2.png",
    "Gpromin_left2" : "../img/Gpromin/Gpromin_left2.png",
    "Gpromin_writing2" : "../img/Gpromin/Gpromin_writing2.png",
    "Gpromin_eracing2" : "../img/Gpromin/Gpromin_eracing2.png",
    "Gpromin_question2" : "../img/Gpromin/Gpromin_question2.png",
   
    //青プロミン
    "Bpromin_front" : "../img/Bpromin/Bpromin_front.png",  
    "Bpromin_right1" : "../img/Bpromin/Bpromin_right1.png",
    "Bpromin_left1" : "../img/Bpromin/Bpromin_left1.png",
    "Bpromin_writing1" : "../img/Bpromin/Bpromin_writing1.png",
    "Bpromin_eracing1" : "../img/Bpromin/Bpromin_eracing1.png",
    "Bpromin_question1" : "../img/Bpromin/Bpromin_question1.png",
    "Bpromin_left2" : "../img/Bpromin/Bpromin_left2.png",
    "Bpromin_writing2" : "../img/Bpromin/Bpromin_writing2.png",
    "Bpromin_eracing2" : "../img/Bpromin/Bpromin_eracing2.png",
    "Bpromin_question2" : "../img/Bpromin/Bpromin_question2.png",

    //オレンジプロミン
    "Opromin_front" : "../img/Opromin/Opromin_front.png",
    "Opromin_right1" : "../img/Opromin/Opromin_right1.png",
    "Opromin_left1" : "../img/Opromin/Opromin_left1.png",
    "Opromin_writing1" : "../img/Opromin/Opromin_writing1.png",
    "Opromin_eracing1" : "../img/Opromin/Opromin_eracing1.png",
    "Opromin_question1" : "../img/Opromin/Opromin_question1.png",
    "Opromin_right2" : "../img/Opromin/Opromin_right2.png",
    "Opromin_left2" : "../img/Opromin/Opromin_left2.png",
    "Opromin_writing2" : "../img/Opromin/Opromin_writing2.png",
    "Opromin_eracing2" : "../img/Opromin/Opromin_eracing2.png",
    "Opromin_question2" : "../img/Opromin/Opromin_question2.png",

    //ing型配列（青）
    "intArray_front" : "../img/array/intArray/intTrain_front.png",
    "intArray_writing" : "../img/array/intArray/intTrain_writing.png",
    "intArray_eracing" : "../img/array/intArray/intTrain_eracing.png",
    "intArray_lookdown" : "../img/array/intArray/intTrain_lookdown.png",
    "intArray_writing2" : "../img/array/intArray/intTrain_writing2.png",
    "intArray_eracing2" : "../img/array/intArray/intTrain_eracing2.png",

    //double型配列(緑)
    "doubleArray_front" : "../img/array/doubleArray/doubleTrain_front.png",
    "doubleArray_writing" : "../img/array/doubleArray/doubleTrain_writing.png",
    "doubleArray_eracing" : "../img/array/doubleArray/doubleTrain_eracing.png",
    "doubleArray_lookdown" : "../img/array/doubleArray/doubleTrain_lookdown.png",
    "doubleArray_writing2" : "../img/array/doubleArray/doubleTrain_writing2.png",
    "doubleArray_eracing2" : "../img/array/doubleArray/doubleTrain_eracing2.png",


    //char型配列（オレンジ）
    "charArray_front" : "../img/array/charArray/charTrain_front.png",
    "charArray_writing" : "../img/array/charArray/charTrain_writing.png",
    "charArray_eracing" : "../img/array/charArray/charTrain_eracing.png",
    "charArray_lookdown" : "../img/array/charArray/charTrain_lookdown.png",
    "charArray_writing2" : "../img/array/charArray/charTrain_writing2.png",
    "charArray_eracing2" : "../img/array/charArray/charTrain_eracing2.png",

    //二次元配列用金具
    "chain" : "../img/array/kanagu.png",
    
    //健吾
    "kengo" : "../img/character/kengo.png", 
	"kengo_clear" : "../img/character/kengo_clear.png",
	"kengo_failure" : "../img/character/kengo_failure.png",

	//怪盗C
    "kaitoC" : "../img/character/kaitoC.png", 
    "fukidashi" : "../img/fukidashi.png",

    //比較アニメ用trueとfalse
    "true_S" : "../img/bool/true1.png",
    "true_L" : "../img/bool/true2.png",
    "false_S" : "../img/bool/false1.png",
    "false_L" : "../img/bool/false2.png",

};

//int型のプロミン（青）のイメージセット
var IntProminImg = { 
	front:"Bpromin_front",
	right1:"Bpromin_right1",
	left1:"Bpromin_left1",
	erace1:"Bpromin_eracing1",
	write1:"Bpromin_writing1",
	question1:"Bpromin_question1",
	right2:"Bpromin_right2",
	left2:"Bpromin_left2",
	erace2:"Bpromin_eracing2",
	write2:"Bpromin_writing2",
	question2:"Bpromin_question2",
};
//double型のプロミン（みどり）のイメージセット
var DoubleProminImg = { 
	front:"Gpromin_front",
	right1:"Gpromin_right1",
	left1:"Gpromin_left1",
	erace1:"Gpromin_eracing1",
	write1:"Gpromin_writing1",
	question1:"Gpromin_question1",
	right2:"Gpromin_right2",
	left2:"Gpromin_left2",
	erace2:"Gpromin_eracing2",
	write2:"Gpromin_writing2",
	question2:"Gpromin_question2"
};

//char型のプロミン（オレンジ）のイメージセット
var CharProminImg = { 
	front:"Opromin_front",
	right1:"Opromin_right1",
	left1:"Opromin_left1",
	erace1:"Opromin_eracing1",
	write1:"Opromin_writing1",
	question1:"Opromin_question1",
	right2:"Opromin_right2",
	left2:"Opromin_left2",
	erace2:"Opromin_eracing2",
	write2:"Opromin_writing2",
	question2:"Opromin_question2"
};


//ing型配列のイメージセット(未完成)
var IntArrayImg = {
	front:"intArray_front",
	right1:"intArray_front",
	left1:"intArray_front",
	erace1:"intArray_eracing",
	write1:"intArray_writing",
	question1:"intArray_front",
	right2:"intArray_front",
	left2:"intArray_front",
	erace2:"intArray_eracing2",
	write2:"intArray_writing2",
	question2:"intArray_front",
	lookdown:"intArray_lookdown"
}

var DoubleArrayImg = {
	front:"doubleArray_front",
	right1:"doubleArray_front",
	left1:"doubleArray_front",
	erace1:"doubleArray_eracing",
	write1:"doubleArray_writing",
	question1:"doubleArray_front",
	right2:"doubleArray_front",
	left2:"doubleArray_front",
	erace2:"doubleArray_eracing2",
	write2:"doubleArray_writing2",
	question2:"doubleArray_front",
	lookdown:"doubleArray_lookdown"
}

var CharArrayImg = {
	front:"charArray_front",
	right1:"charArray_front",
	left1:"charArray_front",
	erace1:"charArray_eracing",
	write1:"charArray_writing",
	question1:"charArray_front",
	right2:"charArray_front",
	left2:"charArray_front",
	erace2:"charArray_eracing2",
	write2:"charArray_writing2",
	question2:"charArray_front",
	lookdown:"charArray_lookdown"
}

/*
 *		アニメ全般関連
 */

// メインシーン（アニメーションを行うシーン）クラス
tm.define("MainScene", { 
    superClass:"tm.app.Scene",
    init : function() {
        this.superInit();
        this.addChild(SAMPLE); //お手本画面を予め追加しておく（デフォルトは非表示）
        this.addChild(HERE); //お手本画面用の「ここだよ！」をあらかじめ追加しておく(デフォルトは非表示)
        this.addChild(ERROR); 
        this.Label = tm.app.Label(DEFAULT_SPEED/SPEED+"倍速").addChildTo(this);
        this.Label
			.setFillStyle("gray")
			.setFontSize(13)
			.setPosition(app.canvas.centerX,430);
		SPEED_BOARD = this.Label;

    	texture = tm.graphics.Canvas().resize(740,440);//.resize(100 * 12, 100);
	    texture.lineWidth = 1.5; //線の太さ
	    //texture.strokeStyle="dimgray"; //線の色
	    var bar = tm.display.Sprite(texture,740,440);
	    bar.setPosition(370, 220).addChildTo(this);

    	this.update = function(app) {
        	texture.clear();
        	for(var i=0;i<trainport.length;i++){
        		var train = trainport[i]
        		for(var k=0;k<train.value.length-1;k++){
        			var promin1 = trainport[i].value[k];
        			var promin2 = trainport[i].value[k+1];
        			if(promin1 && promin2){
        				texture.strokeStyle="black"; //線の色
        				texture.lineWidth = 1.5; //線の太さ
	        			texture.drawLine(promin1.x,promin1.y+10,promin2.x,promin2.y+10);
	        			if(promin1.twoDarrayFlag && promin2.twoDarrayFlag &&promin1.LIndex===promin2.LIndex){
	        				/*
	        				var img = new Image();
	        				img.src = "../img/array/kanagu.png";
	        				texture.drawImage(img,(promin1.x+promin2.x)/2,(promin1.y+promin2.y)/2);
	        				*/
	        				texture.lineWidth = 5; //線の太さ
	        				texture.strokeStyle="gray"; //線の色
	        				texture.drawLine(promin1.x-15,promin1.y+30,promin2.x-10,promin2.y+30);
		        		}
		        		if(promin1.twoDarrayFlag && promin1.index===0 && promin1.x===promin1.defaultX){
		        			//texture.drawLine(promin1.x-50,promin1.y+30,promin2.x+50,promin2.y+30);
		        		}
	        		}
        		}
        	}

    	};
    	
    	window.setTimeout(function(){
    		//ANIME_sengen_dainyu("int","x",9);
    		//ANIME_sengen("int","y");
    		//ANIME_sengen("int","z");
    		//ANIME_sengen("int","aa");
    		//ANIME_sengen("int","bb");
    		//ANIME_array_sengen_dainyu("int","a",4,["0","1","2","3"],["0","1","2","3"]);
    		//ANIME_twoDarray_sengen("int","a",3,5);
    		//ANIME_twoDarray_sengen_dainyu("int","a",2,2,["1"],["1"]);
    		//ANIME_twoDarray_sengen_dainyu("int","a",2,2,["0","1","2","3"],["0","1","2","3"])
    		//ANIME_compare(["x:+:1:==:2","||","2:+:2:>:3","||","x"/*,"&&","x","&&","y:==:2","x:+:y:==:5"*/],[false,true,true/*,false,true,false*/],true);
    		//ANIME_compare(["x:+:1:==:2","||","2:+:2:>:3","||","x"],[false,true,true],true);
    		//ANIME_compare(["(x>3||y>3&&z"],[true],true)
    	},10000);
    	window.setTimeout(function(){
    		//ANIME_sengen_dainyu("int","x",4);
    		//ANIME_compare(["(x>3||y>3&&z)"],[true],true)
    	},1000)
    },
});

//プロミンクラス
tm.define("MiniPromin",{ 
	superClass: "tm.app.Sprite",
	init:function(dataType,name,value){
		if(dataType==="int"){
			this.superInit("Bpromin_front");
		}else if(dataType==="double"){
			this.superInit("Gpromin_front");
		}else if(dataType==="char"){
			this.superInit("Opromin_front");
		};

		//お手本でプロミンに丸印をつけるための丸印の設定
		var circle = tm.app.Shape(80,80);
		circle.canvas.setStrokeStyle("rgba(220,30,0,0.8)");
		circle.canvas.lineWidth = 10;
		circle.canvas.strokeCircle(40,40,35);
		this.addChild(circle);
		circle.hide(); //デフォルトは非表示
		this.circle = circle;

		//データ型の設定
		this.dataType = dataType;
		
		//変数の値の設定
		this.value = value;

		//変数名の設定
		this.name = name;

		//変数の通し番号の設定
		this.num = Pnum;

		//プロミンのデフォルト（ベンチ時）座標の設定
		if(this.num<5){
			this.defaultX = 50; //プロミンを縦向きに並べる場合のx座標
  		  	this.defaultY = (0.6+this.num)*79; //上記のy座標
  		}else{
  			this.defaultX = 150;
  			this.defaultY = (0.6+this.num-5)*79;
  		}
		this.setPosition(900,600); //プロミンの初期位置設定（画面外）
		// ラベル(プロミンに描画されるvalueとname)の設定 
		this.nameLabel = tm.app.Label(name).addChildTo(this);
		this.nameLabel
			.setFillStyle("rgba(45,45,45,1)")
			.setFontSize(15)
			.setPosition(5,-15);
		this.valueLabel = tm.app.Label(value).addChildTo(this);
		this.valueLabel
			.setFillStyle("rgba(0,0,0,1)")
			.setFontSize(13)
			.setPosition(0,20);
		if(this.value.length>6){
			this.valueLabel.setFontSize(10);
		}
		
		//そのプロミンの型にあわせてイメージセットを登録
		if(this.dataType==="int"){ 
			this.imgSet=IntProminImg;
		}else if(this.dataType==="double"){
			this.imgSet=DoubleProminImg;
		}else if(this.dataType==="char"){
			this.imgSet=CharProminImg;
		}



	},
});

//配列プロミンクラス
tm.define("ArrayPromin",{ 
	superClass: "tm.app.Sprite",
	init:function(dataType,name,index,value,arrayName){
		if(dataType==="int"){
			this.superInit("intArray_front");
		}else if(dataType==="double"){
			this.superInit("Gpromin_front");
		}else if(dataType==="char"){
			this.superInit("Opromin_front");
		};

		//お手本でプロミンに丸印をつけるための丸印の設定
		var circle = tm.app.Shape(80,80);
		circle.canvas.setStrokeStyle("rgba(220,30,0,0.8)");
		circle.canvas.lineWidth = 10;
		circle.canvas.strokeCircle(40,40,35);
		this.addChild(circle);
		circle.hide(); //デフォルトは非表示
		this.circle = circle;

		//データ型の設定
		this.dataType = dataType;

		//変数の値の設定
		this.value = value;

		//変数名の設定
		this.name = name;

		//変数の通し番号の設定
		this.num = Pnum;

		//配列におけるインデックスの設定
		this.index = index;

		//配列フラグの付加
		this.arrayFlag = true;

		this.arrayName = arrayName;

		var plus = 0;
		if(index>0 && 5>index){
			plus = index*2;
		}

		//プロミンのデフォルト（ベンチ時）座標の設定
		if(this.num<5){
			this.defaultX = 50+plus; //プロミンを縦向きに並べる場合のx座標
  		  	this.defaultY = (0.6+this.num)*79-plus; //上記のy座標
  		}else{
  			this.defaultX = 150+plus;
  			this.defaultY = (0.6+this.num-5)*79-plus;
  		}

  		//プロミンの初期位置設定（画面外）
		this.setPosition(900+(this.index*100),app.canvas.centerY); 
		
		// ラベル(プロミンに描画されるvalueとname)の設定 
		this.nameLabel = tm.app.Label(name).addChildTo(this);
		this.nameLabel
			.setFillStyle("rgba(45,45,45,1)")
			.setFontSize(15)
			.setPosition(5,-15);
		this.valueLabel = tm.app.Label(value).addChildTo(this);
		this.valueLabel
			.setFillStyle("rgba(0,0,0,1)")
			.setFontSize(13)
			.setPosition(0,20);
		if(this.value.length>6){
			this.valueLabel.setFontSize(10);
		}
		
		//そのプロミンの型にあわせてイメージセットを登録
		if(this.dataType==="int"){ 
			this.imgSet=IntArrayImg;
		}else if(this.dataType==="double"){
			this.imgSet=DoubleArrayImg;
		}else if(this.dataType==="char"){
			this.imgSet=CharArrayImg;
		}
	},
});

//二次元配列プロミンクラス
tm.define("twoDArrayPromin",{ 
	superClass: "tm.app.Sprite",
	init:function(dataType,name,index,LIndex,RIndex,value,arrayName){
		if(dataType==="int"){
			this.superInit("intArray_front");
		}else if(dataType==="double"){
			this.superInit("Gpromin_front");
		}else if(dataType==="char"){
			this.superInit("Opromin_front");
		};

		//お手本でプロミンに丸印をつけるための丸印の設定
		var circle = tm.app.Shape(80,80);
		circle.canvas.setStrokeStyle("rgba(220,30,0,0.8)");
		circle.canvas.lineWidth = 10;
		circle.canvas.strokeCircle(40,40,35);
		this.addChild(circle);
		circle.hide(); //デフォルトは非表示
		this.circle = circle;

		//データ型の設定
		this.dataType = dataType;

		//値の設定
		this.value = value;

		//名前の設定("a[hoge][hoge]"など)
		this.name = name;

		//変数の通し番号の設定
		this.num = Pnum;

		//二次元配列における左インデックスの設定(a[0][1]の0)
		this.RIndex = RIndex;

		//二次元配列における左インデックスの設定(a[0][1]の0)
		this.LIndex = LIndex;

		//配列フラグの付加
		this.twoDarrayFlag = true;

		//所属する二次元配列の名前の設定(a[0][0]なら"a")
		this.arrayName = arrayName;

		this.index = index;

		var plus = 0;
		
		if(index>0 && 5>index){
			plus = index*2;
		}

		//プロミンのデフォルト（ベンチ時）座標の設定
		if(this.num<5){
			this.defaultX = 50+plus; //プロミンを縦向きに並べる場合のx座標
  		  	this.defaultY = (0.6+this.num)*79-plus; //上記のy座標
  		}else{
  			this.defaultX = 150+plus;
  			this.defaultY = (0.6+this.num-5)*79-plus;
  		}

  		//プロミンの初期位置設定（画面外）
		this.setPosition(900+(this.index*100),app.canvas.centerY); 
		
		// ラベル(プロミンに描画されるvalueとname)の設定 
		this.nameLabel = tm.app.Label(name).addChildTo(this);
		this.nameLabel
			.setFillStyle("rgba(45,45,45,1)")
			.setFontSize(15)
			.setPosition(5,-15);
		this.valueLabel = tm.app.Label(value).addChildTo(this);
		this.valueLabel
			.setFillStyle("rgba(0,0,0,1)")
			.setFontSize(13)
			.setPosition(0,20);
		if(this.value.length>6){
			this.valueLabel.setFontSize(10);
		}
		
		//そのプロミンの型にあわせてイメージセットを登録
		if(this.dataType==="int"){ 
			this.imgSet=IntArrayImg;
		}else if(this.dataType==="double"){
			this.imgSet=DoubleArrayImg;
		}else if(this.dataType==="char"){
			this.imgSet=CharArrayImg;
		}
	},
});


// 初期設定
function firstSetting(){ 
	app = tm.display.CanvasApp("#world");
    app.resize(740,440); //canvasのサイズは横幅740px、縦幅440px
    //app.fitWindow(); //封印されしメソッド
    app.background="rgba(255,255,255,1)"; //背景色をセット
    SAMPLEsetting(); //お手本画面の設定を行う
    ERRORsetting();
    HEREsetting();
}

// お手本画面の設定
function SAMPLEsetting(){
	SAMPLE = tm.app.Shape(740,440);
    SAMPLE.canvas.clearColor("pink");
    SAMPLE.canvas.setColorStyle("rgba(250,250,250,1)");
    SAMPLE.canvas.fillRect(5,5,745,475);
    SAMPLE.setPosition(app.canvas.centerX,app.canvas.centerY);
    SAMPLE.canvas.setColorStyle("pink");
    SAMPLE.canvas.font = "40px left"; //フォント設定
    SAMPLE.canvas.fillText("おてほん",SAMPLE.canvas.centerX,SAMPLE.canvas.centerY);
    SAMPLE.hide();
    SAMPLE.isHide = 1;
}

function HEREsetting(){
	HERE = tm.app.Shape(740,440);
    HERE.canvas.clearColor("orange");
    HERE.canvas.setColorStyle("rgba(250,250,250,1)");
    HERE.canvas.fillRect(20,20,700,400);
    HERE.setPosition(app.canvas.centerX,app.canvas.centerY);
    HERE.canvas.setColorStyle("orange");
    HERE.canvas.font = "80px left"; //フォント設定
    HERE.canvas.fillText("ここだよ！",HERE.canvas.centerX-150,HERE.canvas.centerY+40);
    HERE.hide();
    HERE.isHide = 1;
}

function ERRORsetting(){
	ERROR = tm.app.Shape(750,200);
    //ERROR.canvas.clearColor("pink");
    ERROR.setPosition(app.canvas.centerX,app.canvas.centerY);
    ERROR.Label = tm.app.Label("ERROR!!").addChildTo(ERROR);
		ERROR.Label
			.setFillStyle("red")
			.setFontSize(25)
			.setPosition(ERROR.Label.centerX,ERROR.Label.centerY);
    ERROR.hide();
}

function ANIME_error(msg){
	ERROR.Label.text=msg;
	ERROR.show();
}

//アニメを一時停止するfunction
function ANIME_stop(){
	app.stop();	
}

// アニメを再開するfunction（使ってない！！！！！！）
function ANIME_start(){
	app.start();
}

// アニメーションを終了し、現在行われていたアニメーションの情報をリセットするfunction
function ANIME_reset(){
	app.currentScene.removeChildren();
	promin_array=[];
	trainport = [];
	Pnum = 0;

	var bar = tm.display.Sprite(texture,740,440);
	bar.setPosition(370, 220).addChildTo(app.currentScene);

	app.currentScene.addChild(SAMPLE);
	app.currentScene.addChild(ERROR);
	app.currentScene.addChild(HERE);
	ERROR.hide();
	SAMPLE.hide();
	SAMPLE.isHide=1;
	HERE.hide();
	HERE.isHide=1;
	//SPEED = DEFAULT_SPEED;
	SPEED_BOARD.setPosition(app.canvas.centerX,430);
	app.currentScene.addChild(SPEED_BOARD);
	sign = 0;
	app.start();

	var type =document.getElementById("ver").getAttribute("type");
	if(type!=="ex"){
		var t = document.getElementById("play");
		if(t.value=="再開"){
			t.value="一時停止";
			//一時停止/再生ボタンの初期化
			options = {
				label: "play",
				icons: {
					primary: "ui-icon-pause"
				}
		};
		$("#play").button( "option", options );
	}

	}
}

// お手本画面のon/offスイッチ
function SAMPLE_switch(){
	if(SAMPLE.isHide===1){
		SAMPLE.show();
		SAMPLE.isHide=0;
	}else{
		SAMPLE.hide();
		SAMPLE.isHide=1;
	}
}

// アニメの一時停止/再開をするfunction
function ANIME_start_or_stop(){
	document.getElementById("play");
	if(play.value==="一時停止"){
		app.stop();
 		play.value="再開";
 		SPEED_BOARD.text="一時停止中";
  	}else{
   		app.start();
   		play.value="一時停止";
   		SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
   	}
}

// アニメーションスピードを変更するfunction (１倍速←→２倍速)
function ANIME_changeSPEED(){
	var select = document.getElementById("f");
    var options =document.getElementById("f").options;
    var value = options.item(select.selectedIndex).value;
	//console.log(value);
	SPEED = DEFAULT_SPEED/value;
	SPEED_BOARD.text="次から"+value+"倍速";
	//console.log("ANIME_changeSPEEDうごいてます");
}

function ANIME_changeSPEED_Ex(num){
	//console.log(num);
	SPEED = DEFAULT_SPEED/num;
	sign=1;
}

//「ここだよ！」って出す関数
function here(){
	if(HERE.isHide===1){
		HERE.show();
		HERE.isHide=0;
	}else{
		HERE.hide();
		HERE.isHide=1;
	}
}

/*
 *  比較のアニメ
 */

function ANIME_compare(expressions,bools,total){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";

		var LOCAL_SPEED = SPEED;
		var between = 500/(expressions.length+1); //between:文字同士の幅
		var exSpace = [];
		var objects = [];

		for(var i=0;i<expressions.length;i++){
			var ex = tm.app.Shape(100,50); 
			//ex.canvas.clearColor("red");
			//ex.setPosition(300+i*120,100);
			ex.setPosition((between+(i*between))+200,100);

			ex.Label = tm.app.Label(expressions[i].replace(/:/g,"")).addChildTo(ex);
			ex.Label
				.setFillStyle("rgba(45,45,45,1)")
				.setFontSize(20)
				.setPosition(ex.canvas.centerX-50,ex.canvas.centerY-25);
			
			if(expressions[i]!=="||" && expressions[i]!=="&&"){
				exSpace.push(ex);
			}

			objects.push(ex);
			ex.text = expressions[i];
			app.currentScene.addChild(ex);
		}
		
		var twn = tm.app.Shape(0,0);
		app.currentScene.addChild(twn);


		if(expressions.length!==1){
			twn.tweener
				.clear()
				.wait(2000*LOCAL_SPEED)
				.call(function(){
					var cnt=0;
					for(var i=0;i<exSpace.length;i++){
						twn.tweener
							.call(function(){
								//exSpace[cnt].setFillStyle("red");
								//exSpace[cnt].canvas.drawLine(exSpace[cnt].Label.left,exSpace[cnt].Label.y+50,exSpace[cnt].right,exSpace[cnt].Label.y+50);
								underLine(exSpace[cnt]);
							})
							.wait(1000*LOCAL_SPEED)
							.call(function(){
								enzan(exSpace[cnt].text,bools[cnt]);
							})
							.wait(3000*LOCAL_SPEED)
							.call(function(){
								if(bools[cnt]){
									true_stamp(exSpace[cnt]);
									true_stamp();
								}else{
									false_stamp(exSpace[cnt])
									false_stamp();
								}
								cnt++;
							})
							.wait(2000*LOCAL_SPEED)
					}
					twn.tweener
						.wait(1000*LOCAL_SPEED)
						.call(function(){
							var result;
							if(total){
								result = tm.app.Sprite("true_L");
							}else{
								result = tm.app.Sprite("false_L");
							}
							result.setPosition(app.canvas.centerX+100,app.canvas.centerY+50);
							app.currentScene.addChild(result);
							objects.push(result);
						})
						.wait(2000*LOCAL_SPEED)
						.call(function(){
							for(var i=0;i<objects.length;i++){
								objects[i].remove();
							}
							sign=1;BUTTON_ON();//1console.log("比較おわり")
						});
				});
		}else{
			//console.log("条件式がひとつの場合")
			twn.tweener
				.clear()
				.wait(1000*LOCAL_SPEED)
				.call(function(){
						twn.tweener
							.clear()
							.call(function(){
								enzan(exSpace[0].text,bools[0]);
							})
							.wait(3000*LOCAL_SPEED)
							.call(function(){
								var result;
								if(total){
									result = tm.app.Sprite("true_L");
								}else{
									result = tm.app.Sprite("false_L");
								}
								result.setPosition(app.canvas.centerX+100,app.canvas.centerY+50);
								app.currentScene.addChild(result);
								objects.push(result);
							})
							.wait(1000*LOCAL_SPEED)
							.call(function(){
								for(var i=0;i<objects.length;i++){
									objects[i].remove();
								}
								sign=1;BUTTON_ON();//console.log("比較おわり")
							});
					//}

				})
		}

	function underLine(obj){
		var line = tm.app.Shape(100,10);
		line.canvas.drawLine(0,0,100,0);
		line.canvas.clearColor("red");
		//line.canvas.lineWidth = 0; 
		line.setPosition(obj.x,obj.y+30);
		line.addChildTo(app.currentScene);
		line.tweener
			.wait(5000*LOCAL_SPEED)
			.call(function(){line.remove();})
	}

	function true_stamp(obj){	
		var true_S = tm.app.Sprite("true_S");
		if(obj){
			//true_S.setRotation(20);
			//true_S.setAlpha(0.9);
			true_S.setPosition(obj.x,obj.y);
			objects.push(true_S);
		}else{
			true_S.setPosition(500,360);
			true_S.tweener
				.wait(1000*LOCAL_SPEED)
				.call(function(){true_S.remove();})
		}
		app.currentScene.addChild(true_S);
	}

	function false_stamp(obj){
		var false_S = tm.app.Sprite("false_S");;
		if(obj){
			//true_S.setRotation(20);
			//true_S.setAlpha(0.9);
			false_S.setPosition(obj.x,obj.y);
			objects.push(false_S);
		}else{
			false_S.setPosition(500,360);
			false_S.tweener
				.wait(1000*LOCAL_SPEED)
				.call(function(){false_S.remove();})
		}
		app.currentScene.addChild(false_S);
	}

	function enzan(ex,result){
		var space = tm.app.Shape(400,200); //printfの表示領域オブジェクトspaceを生成
		space.setPosition(525,260); //初期位置の設定（上部)
		//space.canvas.clearColor("blue");
		app.currentScene.addChild(space); //spaceをカレントシーンにに追加

		space.canvas.setFillStyle("black"); //フォントカラー設定
		space.canvas.font = "20px center"; //フォントサイズ設定

		var expression = String(ex).split(":");
		//console.log(expression)

		var between = 400/(expression.length+1); //between:文字同士の幅

		cnt = 0;
		var P=[]; //Pspaceオブジェクトの配列(プロミンのcopy用の描画スペース)
		var C=[]; //copyオブジェクトの配列

		for(var i=0;i<expression.length;i++){
			var check=0;
			for(var k=0;k<promin_array.length;k++){
				//式に含まれる変数と、promin_arrayのプロミンの名前が一致するものを探す
				if(expression[i]===promin_array[k].name){
					var Pspace = tm.app.Shape(80,80);
					//Pspace.canvas.clearColor("red"); //デバッグ用にPspaceのcanvasを赤にする
					Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-80);
					Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
					Pspace.Label
						.setFillStyle("rgba(0,0,0,1)")
						.setFontSize(20);
					space.addChild(Pspace);
					
					if(promin_array[k].arrayFlag===true){
						var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
					}else if(promin_array[k].twoDarrayFlag===true){
						var copy = new twoDArrayPromin(promin_array[k].dataType, 
							promin_array[k].name,
							promin_array[k].index,
							promin_array[k].LIndex,
							promin_array[k].RIndex,
							promin_array[k].value,
							promin_array[k].arrayName);
					}else{
						var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
					}
					Pspace.addChild(copy);
					copy.setPosition(0,0);
					Pspace.addChild(copy);
					P.push(Pspace);
					C.push(copy);
					check = 1;
					cnt++;
					break;	
				}
			}
			if(check===0){ //テキストをそのまま出力*/
				var Pspace = tm.app.Shape(80,80);
				//Pspace.canvas.clearColor("red");
				Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-80);
				Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
				Pspace.Label
					.setFillStyle("rgba(0,0,0,1)")
					.setFontSize(20);
				space.addChild(Pspace);
				//space.canvas.fillText(expression[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
			}
		}

		if(C.length===1&&expression.length===1){
			//console.log("x=yみたいなパターン");
			C[0].x = C[0].x+40;
			P[0].Label.text="";
			space.tweener
				.clear()
				.wait(3000*LOCAL_SPEED) 
				.call(function(){
					space.canvas.font = "20px center"; //フォントサイズ設定
					space.Label = tm.app.Label("").addChildTo(space);
					space.addChild(space.Label);

					var promin;
					for(var i=0;i<promin_array.length;i++){
						if(name===promin_array[i].name){ 
							promin = promin_array[i];
							break;
						}
					}
				})
				.wait(1000*LOCAL_SPEED)
				.call(function(){space.removeChildren();});
		}else if(cnt>0){
			space.tweener
				.clear()
				.wait(2000*LOCAL_SPEED)
				.call(function(){
					for(var i=0;i<P.length;i++){
						P[i].Label.text = C[i].value;
						C[i].hide();
					}
				})
				.wait(1000*LOCAL_SPEED) 
				.call(function(){
					var promin;
					for(var i=0;i<promin_array.length;i++){
						if(name===promin_array[i].name){
							promin = promin_array[i];
							break;
						}
					}
				})
				.wait(1000*LOCAL_SPEED)
				.call(function(){space.removeChildren();});
		}else{
			space.tweener
				.wait(2000*LOCAL_SPEED)
				.call(function(){
					for(var i=0;i<P.length;i++){
						P[i].Label.text = C[i].value;
						C[i].hide();
					}
				})
				.wait(1000*LOCAL_SPEED) 
				.call(function(){
					var promin;
					for(var i=0;i<promin_array.length;i++){
						if(name===promin_array[i].name){
							promin = promin_array[i];
							break;
						}
					}
				})
				.wait(1000*LOCAL_SPEED)
				.call(function(){space.removeChildren();});
		}
	}
}


/*
 *  二次元配列関連の関数
 */

function ANIME_twoDarray_sengen(dataType,name,size1,size2){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	var LOCAL_SPEED = SPEED;
	var LIndex = 0;
	var RIndex = 0;
    var aspe = 1*LOCAL_SPEED;
    if(size1*size2>=20){
    	aspe = 0.3*LOCAL_SPEED; //配列の長さが20以上なら３倍速
    }else if(size1*size2>=50){
    	aspe = 0.01*LOCAL_SPEED; //配列の長さが50以上なら10倍速
    }

    //プロミン車両をまとめておく、列車オブジェクト
    var train = { 
    	name : name, 
    	value : [],
    	size : size1*size2
    }

    var trainIndex = size1*size2-1;
    
    for(LIndex=size1-1;LIndex>=0;LIndex--){
	    for(RIndex=size2-1;RIndex>=0;RIndex--){
	    	//配列プロミンオブジェクトを生成
	    	var promin = new twoDArrayPromin(dataType,name+"["+LIndex+"]"+"["+RIndex+"]",trainIndex,LIndex,RIndex,"?",name); //MiniProminオブジェクトを作成
		    //生成したオブジェクトをpromin_arrayに追加
		    promin_array.push(promin);
		    //生成したオブジェクトをtrainオブジェクトのvalueプロパティ（配列）に追加
		    train.value[trainIndex] = promin;
		    trainIndex--;
		   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
		    movePromin(promin);
	    }
	}
	
    trainport.push(train);
    Pnum++;

    function movePromin(promin){ //プロミンを動かすfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,1000*LOCAL_SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*LOCAL_SPEED)
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX,app.canvas.centerY,175*aspe*(promin.index+1))
			.move(promin.defaultX,promin.defaultY,500*LOCAL_SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(500*LOCAL_SPEED)
			.call(function(){if(promin.index===(size1*size2)-1){sign = 1;BUTTON_ON();/*console.log("おわり")*/}});
	}
}


function ANIME_twoDarray_sengen_dainyu(dataType,name,size1,size2,ex,values){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
    //配列走査用の変数arrayIndexを0で初期化
    var arrayIndex = 0;
    var LOCAL_SPEED = SPEED;

    //宣言される配列の大きさが大きいときの対策として、本アニメーション用のLOCAL_SPEED値を設定
    var aspe = 1*LOCAL_SPEED;
    if(size1*size2>=20){
    	aspe = 0.3*LOCAL_SPEED; //配列の長さが20以上なら３倍速
    }else if(size1*size2>=50){
    	aspe = 0.01*LOCAL_SPEED; //配列の長さが50以上なら10倍速
    }

    //プロミン車両をまとめておく、列車オブジェクト
    var train = { 
    	name : name, 
    	value : [],
    	size : size1*size2
    }

    var trainIndex = size1*size2-1;
    
    for(LIndex=size1-1;LIndex>=0;LIndex--){
	    for(RIndex=size2-1;RIndex>=0;RIndex--){
	    	//配列プロミンオブジェクトを生成
	    	var promin = new twoDArrayPromin(dataType,name+"["+LIndex+"]"+"["+RIndex+"]",trainIndex,LIndex,RIndex,"?",name); //MiniProminオブジェクトを作成
		    //生成したオブジェクトをpromin_arrayに追加
		    promin_array.push(promin);
		    //生成したオブジェクトをtrainオブジェクトのvalueプロパティ（配列）に追加
		    train.value[trainIndex] = promin;

		    promin.value = values[trainIndex];
		    trainIndex--;
		   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
		    movePromin(promin);
	    }
	}

    trainport.push(train);
    Pnum++;

    function movePromin(promin){ //プロミンを動かすアニメーションfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,250*LOCAL_SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(250*LOCAL_SPEED)
			.call(function(){
				for(var i=0;i<promin.index;i++){
					promin.tweener
						.wait(2700*LOCAL_SPEED)
						.moveBy(-100,0,250*LOCAL_SPEED);
						//.wait(1000*LOCAL_SPEED);	
				}
				promin.tweener
					.wait(250*LOCAL_SPEED)
					.call(function(){
						if(values[promin.index]){ //初期化式が設定されているならば
							var space = tm.app.Shape(400,200);
							promin.space = space;
							space.setPosition(510,410);
							//space.canvas.clearColor("skyblue");
							app.currentScene.addChild(space);
							promin.image=promin.imgSet.lookdown;
							promin.nameLabel.setPosition(5,-15);
							
							equalLabel = tm.app.Label("=").addChildTo(space);
							equalLabel
								.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
								.setFillStyle("rgba(0,0,0,1)")
								.setFontSize(25);

							var expression = String(ex[promin.index]).split(":");

							var between = 400/(expression.length+1);
							cnt = 0;
							var P=[]; //Pspaceオブジェクトの配列(プロミンのcopy用の描画スペース)
							var C=[]; //copyオブジェクトの配列

							for(var i=0;i<expression.length;i++){
								var check=0;
								for(var k=0;k<promin_array.length;k++){
									//式に含まれる変数と、promin_arrayのプロミンの名前が一致するものを探す
									if(expression[i]===promin_array[k].name){
										var Pspace = tm.app.Shape(80,80);
										//Pspace.canvas.clearColor("red"); //デバッグ用にPspaceのcanvasを赤にする
										Pspace.setPosition((between+(i*between))-200,space.canvas.centerY-120);
										Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
										Pspace.Label
											.setFillStyle("rgba(0,0,0,1)")
											.setFontSize(20);
										space.addChild(Pspace);
										
										if(promin_array[k].arrayFlag===true){
											var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
										}else if(promin_array[k].twoDarrayFlag===true){
											var copy = new twoDArrayPromin(promin_array[k].dataType, 
												promin_array[k].name,
												promin_array[k].index,
												promin_array[k].LIndex,
												promin_array[k].RIndex,
												promin_array[k].value,
												promin_array[k].arrayName);
										}else{
											var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
										}
										Pspace.addChild(copy);
										copy.setPosition(0,0);
										Pspace.addChild(copy);
										P.push(Pspace);
										C.push(copy);
										check = 1;
										cnt++;
										break;
									}
								}
								if(check===0){ //テキストをそのまま出力*/
									var Pspace = tm.app.Shape(80,80);
									//Pspace.canvas.clearColor("red");
									Pspace.setPosition((between+(i*between))-200,space.canvas.centerY-120);
									Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
									Pspace.Label
										.setFillStyle("rgba(0,0,0,1)")
										.setFontSize(20);
									space.addChild(Pspace);
									//space.canvas.fillText(expression[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
								}
							}	

							if(C.length===1&&expression.length===1){ //x=yみたいなパターン
									//console.log("x=yみたいなパターン");
									C[0].x = C[0].x+40;
									P[0].Label.text="";
									space.tweener
										.clear()
										.wait(1000*LOCAL_SPEED) 
										.call(function(){
											/*
											space.canvas.font = "20px center"; //フォントサイズ設定
											space.Label = tm.app.Label(values[promin.index]).addChildTo(space);
											space.addChild(space.Label);*/
										})
										.wait(6500*LOCAL_SPEED)
										.call(function(){space.removeChildren();})
										.wait(1500*LOCAL_SPEED)
										.call(function(){
											app.currentScene.removeChild(space);
										});
							}else if(cnt>0){ //演算に変数が2つ以上使われるパターン
								space.tweener
									.clear()
									.wait(500*LOCAL_SPEED)
									.call(function(){
									for(var i=0;i<P.length;i++){
											P[i].Label.text = C[i].value;
											C[i].hide();
										}
									})
									.wait(500*LOCAL_SPEED) 
									.call(function(){
										space.removeChildren();
											equalLabel = tm.app.Label("=").addChildTo(space);
											equalLabel
												.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
												.setFillStyle("rgba(0,0,0,1)")
												.setFontSize(25);
										space.canvas.font = "20px center"; //フォントサイズ設定

										space.Label = tm.app.Label(values[promin.index]).addChildTo(space);
											space.Label
												.setFillStyle("rgba(0,0,0,1)")
												.setPosition(space.Label.centerX,space.Label.centerY-20)
												.setFontSize(30);
										space.addChild(space.Label);
									})
									.wait(4500*LOCAL_SPEED)
									.call(function(){
										space.removeChildren();
									})
									.wait(1500*LOCAL_SPEED)
									.call(function(){
										app.currentScene.removeChild(space);
									});
							}else{ //演算に使われる値がリテラルのみのパターン
								space.tweener
									.call(function(){
										for(var i=0;i<P.length;i++){
											P[i].Label.text = C[i].value;
											C[i].hide();
										}
									})
									.wait(1000*LOCAL_SPEED) 
									.call(function(){
										if(expression.length>1){
											space.removeChildren();
												equalLabel = tm.app.Label("=").addChildTo(space);
												equalLabel
													.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
													.setFillStyle("rgba(0,0,0,1)")
													.setFontSize(25);
										}
										space.canvas.font = "20px center"; //フォントサイズ設定
										
										if(expression.length>1){
											space.Label = tm.app.Label(values[promin.index]).addChildTo(space);
												space.Label
													.setFillStyle("rgba(0,0,0,1)")
													.setPosition(space.Label.centerX,space.Label.centerY-20)
													.setFontSize(30);
											space.addChild(space.Label);
										}
									})
									.wait(6500*LOCAL_SPEED)
									.call(function(){/*if(expression.length>1)space.removeChildren();*/})
									.wait(2500*LOCAL_SPEED)
									.call(function(){
										space.removeChildren();
										app.currentScene.removeChild(space);
								});
							}
						}
					})

					//消すモーション
					.wait(1000*LOCAL_SPEED)
					.call(function(){
						if(values[promin.index]){
							promin.valueLabel.text="";
							turn(promin,ERACE);
						}
					})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE2);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE2);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE);})
					.wait(100*LOCAL_SPEED)

					//書くモーション
					.call(function(){if(values[promin.index])turn(promin,WRITE);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,WRITE2);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,WRITE);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,WRITE2);})
					.call(function(){
						if(values[promin.index]){
							promin.valueLabel.text=values[promin.index];
						}
					})
					.wait(100*LOCAL_SPEED)
					.call(function(){
						turn(promin,FRONT);
						/*app.currentScene.removeChild(promin.Label);*/
					})

					.wait(500*LOCAL_SPEED)
					.call(function(){
						app.currentScene.removeChild(promin.space);
						turn(promin,LEFT);
					})
					//.move(app.canvas.centerX,app.canvas.centerY,175*aspe*(promin.index+1))
					.call(function(){
						if(promin.index===(size1*size2)-1){
							promin.tweener
								.move(promin.defaultX,promin.defaultY,500*LOCAL_SPEED)
								.call(function(){turn(promin,FRONT);})
								.wait(250*LOCAL_SPEED)
								.call(function(){sign = 1;BUTTON_ON();});
						}else if(promin.index===(size1*size2)-2){
							promin.tweener
								.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*1/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*1/3,250*LOCAL_SPEED)
								.wait(2700*LOCAL_SPEED)
								//.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*2/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*2/3,250*LOCAL_SPEED)
								//.wait(2700*LOCAL_SPEED)
								.move(promin.defaultX,promin.defaultY,375*LOCAL_SPEED)
								.call(function(){turn(promin,FRONT);})
								.wait(250*LOCAL_SPEED);
						}else{
							promin.tweener
								.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*1/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*1/3,250*LOCAL_SPEED)
								.wait(2700*LOCAL_SPEED)
								.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*2/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*2/3,250*LOCAL_SPEED)
								.wait(2700*LOCAL_SPEED)
								.move(promin.defaultX,promin.defaultY,250*LOCAL_SPEED)
								.call(function(){turn(promin,FRONT);})
								.wait(250*LOCAL_SPEED);
						}
					})
					
				});
	}
}

/*
 *	配列関連の関数
 */


function ANIME_array_sengen(dataType,name,size){ 
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
    var LOCAL_SPEED = SPEED;
    var arrayIndex = 0;
    var aspe = 1*LOCAL_SPEED;
    if(size>=20){
    	aspe = 0.3*LOCAL_SPEED; //配列の長さが20以上なら３倍速
    }else if(size>=50){
    	aspe = 0.01*LOCAL_SPEED; //配列の長さが50以上なら10倍速
    }

    //プロミン車両をまとめておく、列車オブジェクト
    var train = { 
    	name : name, 
    	value : [],
    	size : size
    }

    for(arrayIndex=size-1;arrayIndex>=0;arrayIndex--){
    	//配列プロミンオブジェクトを生成
    	var promin = new ArrayPromin(dataType,name+"["+arrayIndex+"]",arrayIndex,"?",name); //MiniProminオブジェクトを作成
	    //生成したオブジェクトをpromin_arrayに追加
	    promin_array.push(promin);
	    //生成したオブジェクトをtrainオブジェクトのvalueプロパティ（配列）に追加
	    train.value[arrayIndex] = promin;
	   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
	    movePromin(promin);
    }

    trainport.push(train);
    Pnum++;

    function movePromin(promin){ //プロミンを動かすfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,1000*LOCAL_SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*LOCAL_SPEED)
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX,app.canvas.centerY,175*aspe*(promin.index+1))
			.move(promin.defaultX,promin.defaultY,500*LOCAL_SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(500*LOCAL_SPEED)
			.call(function(){if(promin.index===size-1){sign = 1;BUTTON_ON();}});
	}
}

function ANIME_array_sengen_dainyu(dataType,name,size,ex,values){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
    //配列走査用の変数arrayIndexを0で初期化
    var LOCAL_SPEED = SPEED;
    var arrayIndex = 0;

    //宣言される配列の大きさが大きいときの対策として、本アニメーション用のLOCAL_SPEED値を設定
    var aspe = 1*LOCAL_SPEED;
    if(size>=20){
    	aspe = 0.3*LOCAL_SPEED; //配列の長さが20以上なら３倍速
    }else if(size>=50){
    	aspe = 0.01*LOCAL_SPEED; //配列の長さが50以上なら10倍速
    }

    //プロミン車両をまとめておく、列車オブジェクト
    var train = { 
    	name : name, 
    	value : [],
    	size : size
    }

    for(arrayIndex=size-1;arrayIndex>=0;arrayIndex--){
    	//配列プロミンオブジェクトを生成
    	var promin = new ArrayPromin(dataType,name+"["+arrayIndex+"]",arrayIndex,"?",name);
	    //生成したオブジェクトをpromin_arrayに追加
	    promin_array.push(promin);
	    //生成したオブジェクトをtrainオブジェクトのvalueプロパティ（配列）に追加
	    train.value[arrayIndex] = promin;
	    //生成したプロミンをカレントシーンに追加
	   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
	    promin.value = values[arrayIndex];
	    //アニメーションのfuncを呼ぶ
	    movePromin(promin);
    }

    trainport.push(train);
    Pnum++;

    function movePromin(promin){ //プロミンを動かすアニメーションfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,250*LOCAL_SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(250*LOCAL_SPEED)
			.call(function(){
				for(var i=0;i<promin.index;i++){
					promin.tweener
						.wait(2700*LOCAL_SPEED)
						.moveBy(-100,0,250*LOCAL_SPEED);
						//.wait(1000*LOCAL_SPEED);	
				}
				promin.tweener
					.wait(250*LOCAL_SPEED)
					.call(function(){
						if(values[promin.index]){ //初期化式が設定されているならば
							var space = tm.app.Shape(400,200);
							promin.space = space;
							space.setPosition(510,410);
							//space.canvas.clearColor("skyblue");
							app.currentScene.addChild(space);
							promin.image=promin.imgSet.lookdown;
							promin.nameLabel.setPosition(5,-15);
							
							equalLabel = tm.app.Label("=").addChildTo(space);
							equalLabel
								.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
								.setFillStyle("rgba(0,0,0,1)")
								.setFontSize(25);

							var expression = String(ex[promin.index]).split(":");

							var between = 400/(expression.length+1);
							cnt = 0;
							var P=[]; //Pspaceオブジェクトの配列(プロミンのcopy用の描画スペース)
							var C=[]; //copyオブジェクトの配列

							for(var i=0;i<expression.length;i++){
								var check=0;
								for(var k=0;k<promin_array.length;k++){
									//式に含まれる変数と、promin_arrayのプロミンの名前が一致するものを探す
									if(expression[i]===promin_array[k].name){
										var Pspace = tm.app.Shape(80,80);
										//Pspace.canvas.clearColor("red"); //デバッグ用にPspaceのcanvasを赤にする
										Pspace.setPosition((between+(i*between))-200,space.canvas.centerY-120);
										Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
										Pspace.Label
											.setFillStyle("rgba(0,0,0,1)")
											.setFontSize(20);
										space.addChild(Pspace);
										
										if(promin_array[k].arrayFlag===true){
											var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
										}else if(promin_array[k].twoDarrayFlag===true){
											var copy = new twoDArrayPromin(promin_array[k].dataType, 
												promin_array[k].name,
												promin_array[k].index,
												promin_array[k].LIndex,
												promin_array[k].RIndex,
												promin_array[k].value,
												promin_array[k].arrayName);
										}else{
											var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
										}
										Pspace.addChild(copy);
										copy.setPosition(0,0);
										Pspace.addChild(copy);
										P.push(Pspace);
										C.push(copy);
										check = 1;
										cnt++;
										break;
									}
								}
								if(check===0){ //テキストをそのまま出力*/
									var Pspace = tm.app.Shape(80,80);
									//Pspace.canvas.clearColor("red");
									Pspace.setPosition((between+(i*between))-200,space.canvas.centerY-120);
									Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
									Pspace.Label
										.setFillStyle("rgba(0,0,0,1)")
										.setFontSize(20);
									space.addChild(Pspace);
									//space.canvas.fillText(expression[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
								}
							}	

							if(C.length===1&&expression.length===1){ //x=yみたいなパターン
									//console.log("x=yみたいなパターン");
									C[0].x = C[0].x+40;
									P[0].Label.text="";
									space.tweener
										.clear()
										.wait(1000*LOCAL_SPEED) 
										.call(function(){
											/*
											space.canvas.font = "20px center"; //フォントサイズ設定
											space.Label = tm.app.Label(values[promin.index]).addChildTo(space);
											space.addChild(space.Label);*/
										})
										.wait(6500*LOCAL_SPEED)
										.call(function(){space.removeChildren();})
										.wait(1500*LOCAL_SPEED)
										.call(function(){
											app.currentScene.removeChild(space);
										});
							}else if(cnt>0){ //演算に変数が2つ以上使われるパターン
								space.tweener
									.clear()
									.wait(500*LOCAL_SPEED)
									.call(function(){
									for(var i=0;i<P.length;i++){
											P[i].Label.text = C[i].value;
											C[i].hide();
										}
									})
									.wait(500*LOCAL_SPEED) 
									.call(function(){
										space.removeChildren();
											equalLabel = tm.app.Label("=").addChildTo(space);
											equalLabel
												.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
												.setFillStyle("rgba(0,0,0,1)")
												.setFontSize(25);
										space.canvas.font = "20px center"; //フォントサイズ設定

										space.Label = tm.app.Label(values[promin.index]).addChildTo(space);
											space.Label
												.setFillStyle("rgba(0,0,0,1)")
												.setPosition(space.Label.centerX,space.Label.centerY-20)
												.setFontSize(30);
										space.addChild(space.Label);
									})
									.wait(4500*LOCAL_SPEED)
									.call(function(){
										space.removeChildren();
									})
									.wait(1500*LOCAL_SPEED)
									.call(function(){
										app.currentScene.removeChild(space);
									});
							}else{ //演算に使われる値がリテラルのみのパターン
								space.tweener
									.call(function(){
										for(var i=0;i<P.length;i++){
											P[i].Label.text = C[i].value;
											C[i].hide();
										}
									})
									.wait(1000*LOCAL_SPEED) 
									.call(function(){
										if(expression.length>1){
											space.removeChildren();
												equalLabel = tm.app.Label("=").addChildTo(space);
												equalLabel
													.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
													.setFillStyle("rgba(0,0,0,1)")
													.setFontSize(25);
										}
										space.canvas.font = "20px center"; //フォントサイズ設定
										
										if(expression.length>1){
											space.Label = tm.app.Label(values[promin.index]).addChildTo(space);
												space.Label
													.setFillStyle("rgba(0,0,0,1)")
													.setPosition(space.Label.centerX,space.Label.centerY-20)
													.setFontSize(30);
											space.addChild(space.Label);
										}
									})
									.wait(6500*LOCAL_SPEED)
									.call(function(){/*if(expression.length>1)space.removeChildren();*/})
									.wait(2500*LOCAL_SPEED)
									.call(function(){
										space.removeChildren();
										app.currentScene.removeChild(space);
									});
							}
						}
					})

					//消すモーション
					.wait(1000*LOCAL_SPEED)
					.call(function(){
						if(values[promin.index]){
							promin.valueLabel.text="";
							turn(promin,ERACE);
						}
					})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE2);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE2);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,ERACE);})
					.wait(100*LOCAL_SPEED)

					//書くモーション
					.call(function(){if(values[promin.index])turn(promin,WRITE);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,WRITE2);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,WRITE);})
					.wait(100*LOCAL_SPEED)
					.call(function(){if(values[promin.index])turn(promin,WRITE2);})
					.call(function(){
						if(values[promin.index]){
							promin.valueLabel.text=values[promin.index];
						}
					})
					.wait(100*LOCAL_SPEED)
					.call(function(){
						turn(promin,FRONT);
						/*app.currentScene.removeChild(promin.Label);*/
					})

					.wait(500*LOCAL_SPEED)
					.call(function(){
						app.currentScene.removeChild(promin.space);
						turn(promin,LEFT);
					})
					//.move(app.canvas.centerX,app.canvas.centerY,175*aspe*(promin.index+1))
					.call(function(){
						if(promin.index===size-1){
							promin.tweener
								.move(promin.defaultX,promin.defaultY,500*LOCAL_SPEED)
								.call(function(){turn(promin,FRONT);})
								.wait(250*LOCAL_SPEED)
								.call(function(){sign = 1;BUTTON_ON();});
						}else if(promin.index===size-2){
							promin.tweener
								.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*1/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*1/3,250*LOCAL_SPEED)
								.wait(2700*LOCAL_SPEED)
								//.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*2/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*2/3,250*LOCAL_SPEED)
								//.wait(2700*LOCAL_SPEED)
								.move(promin.defaultX,promin.defaultY,375*LOCAL_SPEED)
								.call(function(){turn(promin,FRONT);})
								.wait(250*LOCAL_SPEED);
						}else{
							promin.tweener
								.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*1/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*1/3,250*LOCAL_SPEED)
								.wait(2700*LOCAL_SPEED)
								.move(app.canvas.centerX-(app.canvas.centerX-promin.defaultX)*2/3,app.canvas.centerY-(app.canvas.centerY-promin.defaultY)*2/3,250*LOCAL_SPEED)
								.wait(2700*LOCAL_SPEED)
								.move(promin.defaultX,promin.defaultY,250*LOCAL_SPEED)
								.call(function(){turn(promin,FRONT);})
								.wait(250*LOCAL_SPEED);
						}
					})
					
				});
	}
}

function ANIME_array_dainyu(name,value){ 
	//nameは代入対象の変数の要素名(a[0]など)、valueは代入値
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	var LOCAL_SPEED = SPEED;

	var promin = null;
	var target_index = null;
	var train = null;

	//まずはpromin_arrayから代入対象となるプロミンを探す
	for(var i=0;i<promin_array.length;i++){
		if(name===promin_array[i].name){
			//prominには代入対象のプロミンが代入される
			promin = promin_array[i];
			target_index = promin_array[i].index;
			break;
		}
	
	}
	//trainportから、prominが所属しているtrainを探す
	for(var i=0;i<trainport.length;i++){
		if(promin.arrayName===trainport[i].name){
			//trainには代入対象のプロミンが所属している列車オブジェクトが代入される
			train = trainport[i];
			break;
		}
	}

	var space = tm.app.Shape(400,200);
	promin.space = space;
	space.setPosition(510,410);
	//space.canvas.clearColor("skyblue");
	app.currentScene.addChild(space);

	equalLabel = tm.app.Label("= "+value).addChildTo(space);
	equalLabel
		.setPosition(space.canvas.centerX-350,space.canvas.centerY-120)
		.setFillStyle("rgba(0,0,0,1)")
		.setFontSize(25);

	space.hide();


	var time = 200;

	var cnt = 0;
	//trainに所属するプロミンを動かす
	for(var i=0;i<train.value.length;i++){
		if(i===target_index){
			var t = train.value[i];
			train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX,app.canvas.centerY,4*time*LOCAL_SPEED)
				.wait(1000*LOCAL_SPEED)

				.call(function(){
					space.show();
					promin.valueLabel.text="";
					turn(promin,ERACE);
				})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE);})
				.wait(150*LOCAL_SPEED)

				.call(function(){turn(promin,FRONT);})
				.wait(250*LOCAL_SPEED)

				//書くモーション
				.call(function(){turn(promin,WRITE);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,WRITE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,WRITE);})
				.wait(150*LOCAL_SPEED)
				.call(function(){
					promin.value = value;
					promin.valueLabel.text = value;
				})
				.call(function(){turn(promin,WRITE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,WRITE);})
				.wait(250*LOCAL_SPEED)
				.call(function(){
					turn(promin,FRONT);
					//space.hide();
					app.currentScene.removeChild(space);
				})
				.wait(500*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,4*time*LOCAL_SPEED)
				.wait(1000*LOCAL_SPEED)
				.call(function(){
					cnt++;
					//if(train.value[0].x===train.value[0].defaultX && train.value[0].y===train.value[0].defaultY){
					//if(!(train.value[0].tweener.isPlaying)){
					if(cnt===target_index+1){
						sign = 1;BUTTON_ON();//console.log("おわた")
					}
				});
		}else if(i<target_index){
			var t = train.value[i].index;
			train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX,app.canvas.centerY,4*time*LOCAL_SPEED)
				.move(app.canvas.centerX+100*(target_index-i),app.canvas.centerY,(target_index-i)*time*LOCAL_SPEED)
				.wait(3450*LOCAL_SPEED)
				.move(app.canvas.centerX,app.canvas.centerY,(target_index-i)*time*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,4*time*LOCAL_SPEED)
				.wait(1000*LOCAL_SPEED)
				.call(function(){
					cnt++;
					//if(train.value[0].x===train.value[0].defaultX && train.value[0].y===train.value[0].defaultY){
					if(cnt===target_index+1){
						sign = 1;BUTTON_ON();//console.log("おわり")
					}
				})
		}else if(i>target_index && target_index+3>i){
			//代入対象のインデックス+1のインデックスをもつ配列プロミン
			if(i===target_index+1){
				train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX-(app.canvas.centerX-train.value[i].defaultX)*1/3,app.canvas.centerY-(app.canvas.centerY-train.value[i].defaultY)*1/3,time*4*LOCAL_SPEED*2/3)//2.7*time*LOCAL_SPEED)
				.wait(3450*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,3.7*time*LOCAL_SPEED)
	
			//代入対象のインデックス+1のインデックスをもつ配列プロミン
			}else if(i===target_index+2){
				train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX-(app.canvas.centerX-train.value[i].defaultX)*2/3,app.canvas.centerY-(app.canvas.centerY-train.value[i].defaultY)*2/3,time*4*LOCAL_SPEED*1/3)//1.7*time*LOCAL_SPEED)
				.wait(3450*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,2.3*time*LOCAL_SPEED)
			}
		}
	}
}

function ANIME_array_enzan_dainyu(name,expression,result){ 
	//nameは代入対象の変数の要素名(a[0]など)、valueは代入値
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	
	var LOCAL_SPEED = SPEED;
	var promin = null;
	var target_index = null;
	var train = null;

	//まずはpromin_arrayから代入対象となるプロミンを探す
	for(var i=0;i<promin_array.length;i++){
		if(name===promin_array[i].name){
			//prominには代入対象のプロミンが代入される
			promin = promin_array[i];
			target_index = promin_array[i].index;
			break;
		}
	}

	//trainportから、prominが所属しているtrainを探す
	for(var i=0;i<trainport.length;i++){
		if(promin.arrayName===trainport[i].name){
			//trainには代入対象のプロミンが所属している列車オブジェクトが代入される
			train = trainport[i];
			break;
		}
	}

	var space = tm.app.Shape(400,200);
	space.setPosition(510,410);
	//space.canvas.clearColor("skyblue");
	app.currentScene.addChild(space);
	//space.hide();

	var cnt = 0;
	var time = 200;

	//trainに所属するプロミンを動かす
	for(var i=0;i<train.value.length;i++){

		if(i===target_index){
			train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX,app.canvas.centerY,4*time*LOCAL_SPEED)
				.wait(1000*LOCAL_SPEED)
				.call(function(){
					equalLabel = tm.app.Label("=").addChildTo(space);
					equalLabel
						.setPosition(space.canvas.centerX-350,space.canvas.centerY-130)
						.setFillStyle("rgba(0,0,0,1)")
						.setFontSize(25);


					counter = 0;
					//var expression = String(ex).split(":");
					var between = 400/(expression.length+1);
					var P=[]; //Pspaceオブジェクトの配列(プロミンのcopy用の描画スペース)
					var C=[]; //copyオブジェクトの配列

					for(var j=0;j<expression.length;j++){
						var check=0;
						for(var k=0;k<promin_array.length;k++){
							//式に含まれる変数と、promin_arrayのプロミンの名前が一致するものを探す
							if(expression[j]===promin_array[k].name){
								var Pspace = tm.app.Shape(80,80);
								//Pspace.canvas.clearColor("red"); //デバッグ用にPspaceのcanvasを赤にする
								Pspace.setPosition((between+(j*between))-150,space.canvas.centerY-130);
								Pspace.Label = tm.app.Label(expression[j]).addChildTo(Pspace);
								Pspace.Label
									.setFillStyle("rgba(0,0,0,1)")
									.setFontSize(20);
								space.addChild(Pspace);
								
								if(promin_array[k].arrayFlag===true){
									var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
								}else if(promin_array[k].twoDarrayFlag===true){
									var copy = new twoDArrayPromin(promin_array[k].dataType, 
										promin_array[k].name,
										promin_array[k].index,
										promin_array[k].LIndex,
										promin_array[k].RIndex,
										promin_array[k].value,
										promin_array[k].arrayName);
								}else{
									var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
								}
								Pspace.addChild(copy);
								copy.setPosition(0,0);
								Pspace.addChild(copy);
								P.push(Pspace);
								C.push(copy);
								check = 1;
								counter++;
								break;	
							}
						}
						if(check===0){ //テキストをそのまま出力
							var Pspace = tm.app.Shape(80,80);
							//Pspace.canvas.clearColor("red");
							Pspace.setPosition((between+(j*between))-150,space.canvas.centerY-130);
							Pspace.Label = tm.app.Label(expression[j]).addChildTo(Pspace);
							Pspace.Label
								.setFillStyle("rgba(0,0,0,1)")
								.setFontSize(20);
							space.addChild(Pspace);
						}
					}

					if(C.length===1&&expression.length===1){
						//x=yみたいなパターン
						C[0].x = C[0].x-80;
						P[0].Label.text="";
						space.tweener
							.clear()
							.wait(1000*LOCAL_SPEED) 
							.call(function(){
								space.canvas.font = "20px center"; //フォントサイズ設定
								space.Label = tm.app.Label("").addChildTo(space);
								space.addChild(space.Label);

								var promin;
								for(var j=0;j<promin_array.length;j++){
									if(name===promin_array[j].name){ 
										promin = promin_array[j];
										break;
									}
								}

							})
							.wait(6500*LOCAL_SPEED)
							.call(function(){space.removeChildren();});
					}else if(counter>0){
						space.tweener
							.clear()
							.wait(1000*LOCAL_SPEED)
							.call(function(){
								for(var j=0;j<P.length;j++){
									P[j].Label.text = C[j].value;
									C[j].hide();
								}
							})
							.wait(1000*LOCAL_SPEED) 
							.call(function(){
								space.removeChildren();

								equalLabel = tm.app.Label("=").addChildTo(space);
								equalLabel
									.setPosition(space.canvas.centerX-350,space.canvas.centerY-130)
									.setFillStyle("rgba(0,0,0,1)")
									.setFontSize(25);

								space.canvas.font = "20px center"; //フォントサイズ設定
								space.Label = tm.app.Label(result).addChildTo(space);
									space.Label
										.setFillStyle("rgba(0,0,0,1)")
										.setPosition(space.canvas.centerX-150,space.canvas.centerY-130)
										.setFontSize(30);
								space.addChild(space.Label);

								var promin;
								for(var j=0;j<promin_array.length;j++){
									if(name===promin_array[j].name){
										promin = promin_array[j];
										break;
									}
								}
							})
							.wait(6500*LOCAL_SPEED)
							.call(function(){space.removeChildren();})
					}else{
						space.tweener
							.wait(1000*LOCAL_SPEED)
							.call(function(){
								for(var j=0;j<P.length;j++){
									P[j].Label.text = C[j].value;
									C[j].hide();
								}
							})
							.wait(1000*LOCAL_SPEED) 
							.call(function(){
								space.removeChildren();

								equalLabel = tm.app.Label("=").addChildTo(space);
								equalLabel
									.setPosition(space.canvas.centerX-350,space.canvas.centerY-130)
									.setFillStyle("rgba(0,0,0,1)")
									.setFontSize(25);

								space.canvas.font = "20px center"; //フォントサイズ設定
								space.Label = tm.app.Label(result).addChildTo(space);
									space.Label
										.setFillStyle("rgba(0,0,0,1)")
										.setPosition(space.canvas.centerX-150,space.canvas.centerY-130)
										.setFontSize(30);
								space.addChild(space.Label);

								var promin;
								for(var j=0;j<promin_array.length;j++){
									if(name===promin_array[j].name){
										promin = promin_array[j];
										break;
									}
								}
							})
							.wait(6500*LOCAL_SPEED)
							.call(function(){space.removeChildren();})
							.wait(2500*LOCAL_SPEED)
					}
				})

				.wait(2500*LOCAL_SPEED)
				.call(function(){
					space.show();
					promin.valueLabel.text="";
					turn(promin,ERACE);
				})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,ERACE);})
				.wait(150*LOCAL_SPEED)

				.call(function(){turn(promin,FRONT);})
				.wait(250*LOCAL_SPEED)

				//書くモーション
				.call(function(){turn(promin,WRITE);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,WRITE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,WRITE);})
				.wait(150*LOCAL_SPEED)
				.call(function(){
					promin.value = result;
					promin.valueLabel.text = result;
				})
				.call(function(){turn(promin,WRITE2);})
				.wait(150*LOCAL_SPEED)
				.call(function(){turn(promin,WRITE);})
				.wait(250*LOCAL_SPEED)
				.call(function(){
					turn(promin,FRONT);
					app.currentScene.removeChild(space);
				})
				.wait(900*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,4*time*LOCAL_SPEED)
				.wait(1000*LOCAL_SPEED)
				.call(function(){
					cnt++;
					//if(train.value[0].x === train.value[0].defaultX && train.value[0].y === train.value[0].defaultY){
					if(cnt===target_index+1){
						sign = 1;BUTTON_ON();
						//console.log("配列への演算代入おわり")
					}
				});
		}else if(i<target_index){
			var t = train.value[i];
			train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX,app.canvas.centerY,4*time*LOCAL_SPEED)
				.move(app.canvas.centerX+100*(target_index-i),app.canvas.centerY,(target_index-i)*time*LOCAL_SPEED)
				.wait(6350*LOCAL_SPEED)
				.move(app.canvas.centerX,app.canvas.centerY,(target_index-i)*time*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,4*time*LOCAL_SPEED)
				.wait(1000*LOCAL_SPEED)
				.call(function(){
					cnt++;
					//if(train.value[0].x === train.value[0].defaultX && train.value[0].y === train.value[0].defaultY){
					if(cnt===target_index+1){
						sign = 1;BUTTON_ON();
						//console.log("配列への演算代入おわり")
					}
				})
		}else if(i>target_index && target_index+3>i){
			//代入対象のインデックス+1のインデックスをもつ配列プロミン
			if(i===target_index+1){
				train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX-(app.canvas.centerX-train.value[i].defaultX)*1/3,app.canvas.centerY-(app.canvas.centerY-train.value[i].defaultY)*1/3,time*4*LOCAL_SPEED*2/3)//2.7*time*LOCAL_SPEED)
				.wait(6350*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,3.7*time*LOCAL_SPEED);

			//代入対象のインデックス+2のインデックスをもつ配列プロミン
			}else if(i===target_index+2){
				train.value[i].tweener
				.clear()
				.wait(i*time*LOCAL_SPEED)
				.move(app.canvas.centerX-(app.canvas.centerX-train.value[i].defaultX)*2/3,app.canvas.centerY-(app.canvas.centerY-train.value[i].defaultY)*2/3,time*4*LOCAL_SPEED*1/3)//1.7*time*LOCAL_SPEED)
				.wait(6350*LOCAL_SPEED)
				.move(train.value[i].defaultX,train.value[i].defaultY,2.3*time*LOCAL_SPEED);

			}
		}
	}
}

/*
 *	変数関連の関数 (0 0)←プロミン
 */

//プロミンの方向転換
function turn(promin,d){
	if(d===LEFT){
		promin.image=promin.imgSet.left1;
		if(promin.arrayFlag===true){promin.nameLabel.setPosition(5,-22);}
		else{promin.nameLabel.setPosition(5,-15);}
		//promin.valueLabel.show();
	}else if(d===FRONT){
		promin.image=promin.imgSet.front;
		if(promin.arrayFlag===true){
			promin.nameLabel.setPosition(5,-22);
		}else{
			promin.nameLabel.setPosition(5,-15);
		}
		promin.valueLabel.show();
	}else if(d===RIGHT){
		promin.image=promin.imgSet.right1;
		promin.nameLabel.setPosition(-5,-15);
		promin.valueLabel.show();
	}else if(d===WRITE){
		promin.image=promin.imgSet.write1;
		promin.nameLabel.setPosition(5,-15);
		promin.valueLabel.show();
	}else if(d===ERACE){
		promin.image=promin.imgSet.erace1;
		promin.nameLabel.setPosition(5,-15);
		promin.valueLabel.show();
	}else if(d===QUESTION){
		promin.image=promin.imgSet.question1;
		promin.nameLabel.setPosition(15,-15);
		promin.valueLabel.hide();
	}else if(d===ERACE2){
		promin.image=promin.imgSet.erace2;
		promin.nameLabel.setPosition(5,-15);
		promin.valueLabel.show();
	}else if(d===WRITE2){
		promin.image=promin.imgSet.write2;
		promin.nameLabel.setPosition(5,-15);
		promin.valueLabel.show();
	}
}

// 変数宣言のfunction (初期化は行わず、値は不定値を表す"?"になる)
function ANIME_sengen(dataType,name){ 
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
    
    var promin = new MiniPromin(dataType,name,"?"); //MiniProminオブジェクトを作成
    Pnum++;
    promin_array.push(promin);
   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加

    movePromin(promin);

    function movePromin(promin){ //プロミンを動かすfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX,app.canvas.centerY,1000*SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){turn(promin,LEFT);})
			.move(promin.defaultX,promin.defaultY,500*SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){sign = 1;BUTTON_ON();});
	}
}

// 代入のfunction
function ANIME_dainyu(target_name,new_value){ 
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	var equal = tm.app.Shape(300,50);

	for(var i=0;i<promin_array.length;i++){
		if(promin_array[i].name === target_name){ //指定された名前のプロミンを検索
			dainyu_move(promin_array[i],new_value); //アニメーションのfunction呼び出し
			break;
		}
	}

	function dainyu_move(promin,new_value){ //代入のアニメーション
		promin.tweener
			.clear()
			.call(function(){turn(promin,RIGHT);})
			.move(app.canvas.centerX,app.canvas.centerY,500*SPEED) //move( x, y, duration, fn ) 
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){
				//equal.canvas.clearColor("red");
				equal.canvas.font = "30px center";
				equal.canvas.fillText("=",80,equal.canvas.centerY);
				equal.canvas.fillText(new_value,150,equal.canvas.centerY);
				equal.setPosition(500,110);
				equal.setPosition(550,app.canvas.centerY);
				app.currentScene.addChild(equal);
			})
			.wait(1000*SPEED)
			.call(function(){turn(promin,RIGHT);})
			.wait(1000*SPEED)
			.call(function(){turn(promin,FRONT);})
			
			//消すモーション
			.wait(500*SPEED)
			.call(function(){
				promin.valueLabel.text="";
				turn(promin,ERACE);
			})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)

			.call(function(){turn(promin,FRONT);})
			.wait(250*SPEED)

			//書くモーション
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){changePromin(promin,new_value)})
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(250*SPEED)
			

			.call(function(){turn(promin,FRONT);})
			.wait(1000*SPEED)
			.call(function(){
				turn(promin,LEFT);
				app.currentScene.removeChild(equal);
			})
			.move(promin.defaultX,promin.defaultY,500*SPEED)
			.call(function(){turn(promin,FRONT);})
			.call(function(){promin_array[i].value = new_value}) //プロミンの値を書き換える
			.wait(500*SPEED)
			.call(function(){sign=1;BUTTON_ON();});

		function changePromin(promin,new_value){ //代入のアニメーション中で、プロミンの値が書き替わる部分
	    	if(new_value!=null && new_value!=Infinity && new_value!="NaN"){
		    	promin.value = new_value;
		    }else{
		    	promin.value = "?";
		    }
		    promin.valueLabel.text = promin.value;
	    	if(promin.value.length>6){
				promin.valueLabel.setFontSize(10);
			}else{
				promin.valueLabel.setFontSize(15);
			}
		}	
	}
}

// printfのアニメーション
function ANIME_printf(contents,variables){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";

	var printf_space = tm.app.Sprite("printf_space"); //printfに使う背景の画像でスプライトオブジェクトを作成
	printf_space.setSize(500,200); //ちょっと画像が小さかったので拡大

	var space = tm.app.Shape(500,200); //printfの表示領域オブジェクトspaceを生成
	space.setPosition(475,110); //初期位置の設定（上部)
	//space.canvas.clearColor("rgba(100,100,100,1)"); //テスト用にspaceの背景色をグレーにする
	
	space.addChild(printf_space); //Shapeオブジェクトspaceに、画像スプライトのprint_spaceを追加
	app.currentScene.addChild(space); //spaceをカレントシーンにに追加

	space.canvas.setFillStyle("black"); //フォントカラー設定
	space.canvas.font = "20px center"; //フォントサイズ設定
	var between = 500/(contents.length+1); //between:文字同士の幅
	cnt = 0;
	var P=[];
	var C=[];

	for(var i=0;i<contents.length;i++){
		if(contents[i]==="%d"||contents[i]==="%f"||contents[i]==="%c"||contents[i]==="%s"){
			for(var k=0;k<promin_array.length;k++){
				if(variables[cnt]===promin_array[k].name){
					var Pspace = tm.app.Shape(80,80);
					//Pspace.canvas.clearColor("red");
					Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-85);
					Pspace.Label = tm.app.Label(contents[i])
						.addChildTo(Pspace);
					if(contents[i]==="%d"){
						Pspace.Label.setFillStyle("blue");
					}else if(contents[i]==="%f"){
						Pspace.Label.setFillStyle("green");
					}else if(contents[i]==="%c"){
						Pspace.Label.setFillStyle("orange");
					}
					
					//Pspace.Label.text = contents[i];
					Pspace.Label.setFontSize(20);
					space.addChild(Pspace);
					
					if(promin_array[k].arrayFlag===true){
						var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
					}else if(promin_array[k].twoDarrayFlag===true){
						var copy = new twoDArrayPromin(promin_array[k].dataType, 
							promin_array[k].name,
							promin_array[k].index,
							promin_array[k].LIndex,
							promin_array[k].RIndex,
							promin_array[k].value,
							promin_array[k].arrayName);
					}else{
						var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
					}

					//var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
					Pspace.addChild(copy);
					copy.setPosition(0,-5);
					copy.hide();
					Pspace.addChild(copy);

					P.push(Pspace);
					C.push(copy);
					cnt++;
					break;	
				}else if(true){

				}
			}
		}
		/*else if(contents[i]==="%f"){  //double型とか？浮動小数点型のデータ型用

		}else if(contents[i]==="%c"){ //char型(文字型)を一文字として出力する場合

		}else if(contents[i]==="%s"){ //文字列を出力する

		}*/else{ //テキストをそのまま出力
			space.canvas.fillText(contents[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
		}
	}
	if(cnt>0){
		space.tweener
			.wait(1500*SPEED)
			.call(function(){
				for(var i=0;i<P.length;i++){
					C[i].show();
				};
			})
			.wait(1500*SPEED)
			.call(function(){
				for(var i=0;i<P.length;i++){
					//Pspace.Label.setFillStyle("black");
					P[i].Label.text = C[i].value;
					C[i].hide();
				}
			})
			.wait(1500*SPEED) 
			.moveBy(0,700,1000*SPEED) //下（コンソール）のほうへ移動
			.call(function(){sign=1;BUTTON_ON();})
			.call(function(){app.currentScene.removeChild(this)}); //もうこのオブジェクトは使わないのでカレントシーンのchildから削除
	}else{
		space.tweener
			.wait(1000*SPEED) 
			.moveBy(0,700,1000*SPEED) //下（コンソール）のほうへ移動
			.call(function(){sign=1;BUTTON_ON();})
			.call(function(){app.currentScene.removeChild(this)}); //もうこのオブジェクトは使わないのでカレントシーンのchildから削除
	}
}

function ANIME_scanf(){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";

	//var yajirushi = tm.app.Sprite("yajirushi1");
	var msg = tm.app.Shape(800,100);
	//msg.addChild(yajirushi);
	msg.setPosition(400,420);
	//yajirushi.setposition(msg.centerX,meg.centerY);
	//msg.canvas.clearColor("skyblue");

	msg.canvas.setFillStyle("blue");
	msg.canvas.font = "29px center"; //フォントサイズ設定
	msg.canvas.fillText("↓コンソールに値を入力してenterを押してね！",10,msg.canvas.centerY);
	app.currentScene.addChild(msg);
	msg.tweener
		.wait(3000*SPEED)
		.call(function(){
			app.currentScene.removeChild(msg);
			//sign=1;
		});
}

//お手本用
function ANIME_scanf_ex(){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";

	//var yajirushi = tm.app.Sprite("yajirushi1");
	var msg = tm.app.Shape(800,100);
	//msg.addChild(yajirushi);
	msg.setPosition(400,420);
	//yajirushi.setposition(msg.centerX,meg.centerY);
	//msg.canvas.clearColor("skyblue");

	msg.canvas.setFillStyle("blue");
	msg.canvas.font = "29px center"; //フォントサイズ設定
	msg.canvas.fillText("↓コンソールに数字を入力してenterを押したにゃ。",10,msg.canvas.centerY);
	app.currentScene.addChild(msg);
	msg.tweener
		.wait(3000*SPEED)
		.call(function(){app.currentScene.removeChild(msg);});
}

//演算の結果を変数に代入するfunction  (x=x*3とか)
function ANIME_enzan_dainyu(name,expression,result){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";

	var space = tm.app.Shape(400,200); //printfの表示領域オブジェクトspaceを生成
	space.setPosition(525,110); //初期位置の設定（上部)
	//space.canvas.clearColor("blue");
	app.currentScene.addChild(space); //spaceをカレントシーンにに追加
	var between = 400/(expression.length+1); //between:文字同士の幅

	space.canvas.setFillStyle("black"); //フォントカラー設定
	space.canvas.font = "20px center"; //フォントサイズ設定
	
	cnt = 0;
	var P=[]; //Pspaceオブジェクトの配列(プロミンのcopy用の描画スペース)
	var C=[]; //copyオブジェクトの配列

	for(var i=0;i<expression.length;i++){
		var check=0;
		for(var k=0;k<promin_array.length;k++){
			//式に含まれる変数と、promin_arrayのプロミンの名前が一致するものを探す
			if(expression[i]===promin_array[k].name){
				var Pspace = tm.app.Shape(80,80);
				//Pspace.canvas.clearColor("red"); //デバッグ用にPspaceのcanvasを赤にする
				Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-80);
				Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
				Pspace.Label
					.setFillStyle("rgba(0,0,0,1)")
					.setFontSize(20);
				space.addChild(Pspace);
				
				if(promin_array[k].arrayFlag===true){
					var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
				}else if(promin_array[k].twoDarrayFlag===true){
					var copy = new twoDArrayPromin(promin_array[k].dataType, 
						promin_array[k].name,
						promin_array[k].index,
						promin_array[k].LIndex,
						promin_array[k].RIndex,
						promin_array[k].value,
						promin_array[k].arrayName);
				}else{
					var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
				}
				Pspace.addChild(copy);
				copy.setPosition(0,0);
				Pspace.addChild(copy);
				P.push(Pspace);
				C.push(copy);
				check = 1;
				cnt++;
				break;	
			}
		}
		if(check===0){ //テキストをそのまま出力*/
			var Pspace = tm.app.Shape(80,80);
			//Pspace.canvas.clearColor("red");
			Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-80);
			Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
			Pspace.Label
				.setFillStyle("rgba(0,0,0,1)")
				.setFontSize(20);
			space.addChild(Pspace);
			//space.canvas.fillText(expression[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
		}
	}

	if(C.length===1&&expression.length===1){
		//console.log("x=yみたいなパターン");
		C[0].x = C[0].x+40;
		P[0].Label.text="";
		space.tweener
			.clear()
			.wait(1000*SPEED) 
			.call(function(){
				space.canvas.font = "20px center"; //フォントサイズ設定
				space.Label = tm.app.Label("").addChildTo(space);
				space.addChild(space.Label);

				var promin;
				for(var i=0;i<promin_array.length;i++){
					if(name===promin_array[i].name){ 
						promin = promin_array[i];
						break;
					}
				}
				MYdainyu_move(promin,result);

			})
			.wait(6500*SPEED)
			.call(function(){space.removeChildren();})
			.wait(1500*SPEED)
			.call(function(){
				sign=1;
				app.currentScene.removeChild(space);
				BUTTON_ON();
			});
	}else if(cnt>0){
		space.tweener
			.clear()
			.wait(1000*SPEED)
			.call(function(){
				for(var i=0;i<P.length;i++){
					P[i].Label.text = C[i].value;
					C[i].hide();
				}
			})
			.wait(1000*SPEED) 
			.call(function(){
				space.removeChildren();
				space.canvas.font = "20px center"; //フォントサイズ設定
				space.Label = tm.app.Label(result).addChildTo(space);
					space.Label
						.setFillStyle("rgba(0,0,0,1)")
						.setPosition(space.Label.centerX,space.Label.centerY+20)
						.setFontSize(30);
				space.addChild(space.Label);

				var promin;
				for(var i=0;i<promin_array.length;i++){
					if(name===promin_array[i].name){
						promin = promin_array[i];
						break;
					}
				}
				MYdainyu_move(promin,result);
			})
			.wait(6500*SPEED)
			.call(function(){space.removeChildren();})
			.wait(1500*SPEED)
			.call(function(){
				sign=1;
				//console.log("演算代入終了");
				app.currentScene.removeChild(space);
				BUTTON_ON();
			});
	}else{
		space.tweener
			.wait(1000*SPEED)
			.call(function(){
				for(var i=0;i<P.length;i++){
					P[i].Label.text = C[i].value;
					C[i].hide();
				}
			})
			.wait(1000*SPEED) 
			.call(function(){
				space.removeChildren();
				space.canvas.font = "20px center"; //フォントサイズ設定
				space.Label = tm.app.Label(result).addChildTo(space);
					space.Label
						.setFillStyle("rgba(0,0,0,1)")
						.setPosition(space.Label.centerX,space.Label.centerY+20)
						.setFontSize(30);
				space.addChild(space.Label);

				var promin;
				for(var i=0;i<promin_array.length;i++){
					if(name===promin_array[i].name){
						promin = promin_array[i];
						break;
					}
				}
				MYdainyu_move(promin,result);
			})
			.wait(6500*SPEED)
			.call(function(){space.removeChildren();})
			.wait(2500*SPEED)
			.call(function(){
				sign=1;
				//console.log("演算代入終了");
				app.currentScene.removeChild(space);
				BUTTON_ON();
			});
	}

	function MYdainyu_move(promin,new_value){ //代入のアニメーション
		promin.tweener
			.clear()
			.wait(500*SPEED)
			.call(function(){turn(promin,RIGHT);})
			.move(270,space.canvas.centerY+30,500*SPEED) //move( x, y, duration, fn )
			.call(function(){
				turn(promin,FRONT);
				space.equal = tm.app.Label("=").addChildTo(space);
				space.equal
					.setFillStyle("rgba(0,0,0,1)")
					.setPosition(-125,space.Label.centerY)
					.setFontSize(30);
				space.addChild(space.Label);
			})
			.wait(1000*SPEED)
			.call(function(){
				turn(promin,RIGHT);
			})
			.wait(1000*SPEED)
			.call(function(){
				//space.equal.text="←";
				turn(promin,FRONT);
			})

			//消すモーション
			.wait(1000*SPEED)
			.call(function(){
				promin.valueLabel.text="";
				turn(promin,ERACE);
			})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)


			.call(function(){turn(promin,FRONT);})
			.wait(250*SPEED)

			//書くモーション
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){MYchangePromin(promin,new_value)})
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(250*SPEED)

			.call(function(){turn(promin,FRONT);})
			.wait(1000*SPEED)
			.call(function(){turn(promin,LEFT);})
			.move(promin.defaultX,promin.defaultY,500*SPEED)
			.call(function(){turn(promin,FRONT);})
			.call(function(){promin.value = new_value}); //プロミンの値を書き換える;
				
			function MYchangePromin(promin,new_value){ //代入のアニメーション中で、プロミンの値が書き替わる部分
	    		if(new_value!=null && new_value!=Infinity && new_value!="NaN"){
		    		promin.value = new_value;
		    	}else{
		    		promin.value = "?";
		    	}
	    		promin.valueLabel.text = promin.value;
	    		if(promin.value.length>6){
					promin.valueLabel.setFontSize(10);
				}else{
					promin.valueLabel.setFontSize(15);
				}
			}	
	}
}

// 変数宣言と初期化（右辺がリテラル）を同時に行うfunction  (int x=3とか) 
function ANIME_sengen_dainyu(dataType,name,value){ 
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	var equal = tm.app.Shape(300,50);

	var promin = new MiniPromin(dataType,name,"?"); //MiniProminオブジェクトを作成	
	Pnum++;
    promin_array.push(promin);
   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加

    movePromin(promin);

    function movePromin(promin){ //プロミンを動かすfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX,app.canvas.centerY,1000*SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){
				//equal.canvas.clearColor("red");
				equal.canvas.font = "30px center";
				//equal.canvas.setColorStyle("black");
				equal.canvas.fillText("=",80,equal.canvas.centerY);
				equal.canvas.fillText(value,150,equal.canvas.centerY);
				equal.setPosition(500,110);
				equal.setPosition(550,app.canvas.centerY);
				app.currentScene.addChild(equal);
			})
			.wait(1000*SPEED)
			.call(function(){turn(promin,RIGHT);})
			.wait(1000*SPEED)
			.call(function(){turn(promin,FRONT);})
			
			//消すモーション
			.wait(250*SPEED)
			.call(function(){
				promin.valueLabel.text="";
				turn(promin,ERACE);
			})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)

			.call(function(){turn(promin,FRONT);})
			.wait(250*SPEED)

			//書くモーション
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){changePromin(promin,value)})
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(250*SPEED)

			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){
				turn(promin,LEFT);
				app.currentScene.removeChild(equal);
			})
			.move(promin.defaultX,promin.defaultY,500*SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){sign = 1;BUTTON_ON();});

		function changePromin(promin,new_value){ //代入のアニメーション中で、プロミンの値が書き替わる部分
	    	if(new_value!==null && new_value!==Infinity && new_value!="NaN"){
		    	promin.value = new_value;
		    }else{
		    	promin.value = "?";
		    }
		    promin.valueLabel.text = promin.value;
	    	if(promin.value.length>6){
				promin.valueLabel.setFontSize(10);
			}else{
				promin.valueLabel.setFontSize(15);
			}
		}	

	}
}

// 変数宣言と初期化（右辺が計算式もしくは変数の場合）を同時に行うfunction （int x=y+1とか）
function ANIME_sengen_enzan(dataType,name,expression,result){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";

	var space = tm.app.Shape(500,200); //printfの表示領域オブジェクトspaceを生成
	space.setPosition(525,110); //初期位置の設定（上部)
	//space.canvas.clearColor("blue");
	app.currentScene.addChild(space); //spaceをカレントシーンにに追加
	var between = 500/(expression.length+1); //between:文字同士の幅

	space.canvas.setFillStyle("black"); //フォントカラー設定
	space.canvas.font = "20px center"; //フォントサイズ設定
	
	cnt = 0;
	var P=[];
	var C=[];

	for(var i=0;i<expression.length;i++){
		var check=0;
		for(var k=0;k<promin_array.length;k++){
			if(expression[i]===promin_array[k].name){
				var Pspace = tm.app.Shape(80,80);
				//Pspace.canvas.clearColor("red");
				Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-80);
				Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
				Pspace.Label
					.setFillStyle("rgba(0,0,0,1)")
					.setFontSize(20);
				space.addChild(Pspace);
				
				if(promin_array[k].arrayFlag===true){
					var copy = new ArrayPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].index,promin_array[k].value);
				}else if(promin_array[k].twoDarrayFlag===true){
					var copy = new twoDArrayPromin(promin_array[k].dataType, 
						promin_array[k].name,
						promin_array[k].index,
						promin_array[k].LIndex,
						promin_array[k].RIndex,
						promin_array[k].value,
						promin_array[k].arrayName);
				}else{
					var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
				}

				Pspace.addChild(copy);
				copy.setPosition(0,0);
				Pspace.addChild(copy);
				P.push(Pspace);
				C.push(copy);
				check = 1;
				cnt++;
				break;	
			}
		}
		if(check===0){ //テキストをそのまま出力*/
			var Pspace = tm.app.Shape(80,80);
			//Pspace.canvas.clearColor("red");
			Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-80);
			Pspace.Label = tm.app.Label(expression[i]).addChildTo(Pspace);
			Pspace.Label
				.setFillStyle("rgba(0,0,0,1)")
				.setFontSize(20);
			space.addChild(Pspace);
			//space.canvas.fillText(expression[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
		}
	}

	if(C.length===1&&expression.length===1){
		//console.log("int x=yパターン");
		C[0].x = C[0].x+40;
		C[0].y = C[0].y-30;
		P[0].Label.text="";
		space.tweener
			.clear()
			.wait(1000*SPEED) 
			.call(function(){
				//space.removeChildren();
				space.canvas.font = "20px center"; //フォントサイズ設定
				//space.canvas.fillText(result,space.canvas.centerX,space.canvas.centerY);
				space.Label = tm.app.Label("").addChildTo(space);
				space.addChild(space.Label);
			})
			.call(function(){
				var promin = new MiniPromin(dataType,name,"?");
				Pnum++;
				promin_array.push(promin);
				movePromin(promin);
			})
			.wait(5500*SPEED)
			.call(function(){space.removeChildren();})
			.wait(1000*SPEED)
			.call(function(){
				sign=1;
				app.currentScene.removeChild(space);
				BUTTON_ON();
			});
	}else{
		space.tweener
		.wait(2000*SPEED)
		.call(function(){
			for(var i=0;i<P.length;i++){
				P[i].Label.text = C[i].value;
				C[i].hide();
			}
		})
		.wait(1000*SPEED) 
		.call(function(){
			space.removeChildren();
			space.canvas.font = "20px center"; //フォントサイズ設定
			//space.canvas.fillText(result,space.canvas.centerX,space.canvas.centerY);
			space.Label = tm.app.Label(result).addChildTo(space);
				space.Label
					.setFillStyle("rgba(0,0,0,1)")
					.setFontSize(30);
			space.addChild(space.Label);
		})
		.call(function(){
			var promin = new MiniPromin(dataType,name,"?");
			Pnum++;
			promin_array.push(promin);
			movePromin(promin);
		})
		.wait(5500*SPEED)
		.call(function(){space.removeChildren();})
		.wait(1000*SPEED)
		.call(function(){
			sign=1;
			app.currentScene.removeChild(space);
			BUTTON_ON();
		});
	}

	function movePromin(promin){ //プロミンを動かすfunction
			app.currentScene.addChild(promin);
			promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(280,space.canvas.centerY,1000*SPEED) //move( x, y, duration, fn )
			.call(function(){
				turn(promin,FRONT);
				space.equal = tm.app.Label("=").addChildTo(space);
				space.equal
					.setFillStyle("rgba(0,0,0,1)")
					.setPosition(-125,space.Label.centerY)
					.setFontSize(30);
				space.addChild(space.Label);
			})
			.wait(1000*SPEED)
			.call(function(){
				turn(promin,RIGHT);
			})
			.wait(1000*SPEED)
			.call(function(){
				//space.equal.text="←";
				turn(promin,FRONT);
			})
			
			//消すモーション
			.wait(250*SPEED)
			.call(function(){
				promin.valueLabel.text="";
				turn(promin,ERACE);
			})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,ERACE);})
			.wait(150*SPEED)

			.call(function(){turn(promin,FRONT);})
			.wait(250*SPEED)

			//書くモーション
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(150*SPEED)
			.call(function(){
				if(result!==null){	
					promin.valueLabel.text = result;
					promin.value = result;
				}else{
					promin.valueLabel.text = "?";
					promin.value = "?";
				}
				if(promin.value.length>6){
					promin.valueLabel.setFontSize(10);
				}else{
					promin.valueLabel.setFontSize(15);
				}
			})
			.call(function(){turn(promin,WRITE2);})
			.wait(150*SPEED)
			.call(function(){turn(promin,WRITE);})
			.wait(250*SPEED)

			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){turn(promin,LEFT);})
			.move(promin.defaultX,promin.defaultY,500*SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED);
	}
}

function ANIME_remove_promin(name){
	for(var i=0;i<promin_array.length;i++){
		if(promin_array[i].name===name){
			//アニメのカレントシーン上でプロミンを削除する
			app.currentScene.removeChild(promin_array[i]);
			//promin_arrayのi番目を削除し、順番を詰める
			promin_array.splice(i, 1);
			break;
		}
	}
	sign=1;
}


/*
 *	正誤判定関連
 */

//ユーザが問題に正解したときに実行するアニメーション
function correct_answer(){
	var msg = tm.app.Shape(750,440); //メッセージ用canvasの生成（750×440ならtmlib領域と同じサイズ）
	var charaNum = parseInt(Math.random()*2);//random()*Nなら0からN未満までのランダムな数値

	fukidashi = tm.app.Sprite("fukidashi");
	fukidashi.setScale(0.6,0.6);
	fukidashi.Label = tm.app.Label("てすと").addChildTo(fukidashi);
	fukidashi.Label
		.setFillStyle("rgba(45,45,45,1)")
		.setFontSize(25)
		.setPosition(fukidashi.centerX,-5);

		//フキダシのコメントは最大１１文字！！

	switch(charaNum){ //printfに使う背景の画像でスプライトオブジェクトを作成
		case 0:
			var character = tm.app.Sprite("kengo_clear");
			character.setPosition(msg.canvas.centerX-160,msg.canvas.centerY-40);
			switch(parseInt(Math.random()*5)){
				case 0:
					fukidashi.Label.text = "やるじゃん！";
					break;
				case 1:
					fukidashi.Label.text = "今晩のおかずは何かな♪";
					break;
				case 2:
					fukidashi.Label.text = "やったぜ！";
					break;
				case 3:
					fukidashi.Label.text = "よっしゃ！";
					break;
				case 4:
					fukidashi.Label.text = "次、いってみよう！";
					break;
			}
			break;
		case 1:
			var character = tm.app.Sprite("kaitoC");
			character.setPosition(msg.canvas.centerX-150,msg.canvas.centerY);
			switch(parseInt(Math.random()*5)){
				case 0:
					fukidashi.Label.text = "ぐぬぬ・・・";
					break;
				case 1:
					fukidashi.Label.text = "なかなかやるにゃ";
					break;
				case 2:
					fukidashi.Label.text = "こ、こんなのお遊びにゃ";
					break;
				case 3:
					fukidashi.Label.text = "次はこうはいかないにゃ";
					break;
				case 4:
					fukidashi.Label.text = "つ、つぎが本番にゃ！";
					break;
			}
		break;

	}
	
	msg.addChild(fukidashi);
	fukidashi.setPosition(50,50);

	msg.addChild(character);

	msg.canvas.setFillStyle("blue"); //フォントカラー設定
	msg.canvas.font = "20px center"; //フォントサイズ設定
	msg.canvas.fillText("次へいってみよう！",500,20);
	///character.setSize((character.height)*0.5,(character.width)*0.9); //ちょっと画像が小さかったので拡大
	character.setScale(0.5,0.5); //キャラクターの画像が大きいのでそれぞれ何倍にするかを設定
	character.tweener
		.wait(400*SPEED)
		.moveBy(0,-30,140)
		.moveBy(0,30,140)
		.moveBy(0,-30,140)
		.moveBy(0,30,140);
	//character.setPosition(msg.canvas.centerX-150,msg.canvas.centerY);
	//msg.canvas.clearColor("blue"); //テスト用に背景色をつける
	msg.canvas.setFillStyle("red"); //フォントカラー設定
	msg.canvas.font = "50px center"; //フォントサイズ設定
	msg.canvas.fillText("正解！おめでとう！",250,msg.canvas.centerY-45); //メッセージcanvasに文字描画
	app.currentScene.addChild(msg); //tmlib領域にメッセージのcanvasを追加
	msg.setPosition(app.canvas.centerX,app.canvas.centerY); //メッセージcanvasのtmlib領域上での座標指定
	/*
	msg.tweener
		.wait(3000*SPEED)
		.call(function(){
			app.currentScene.removeChild(msg);
		});
	*/
}

//ユーザが不正解のコードを実行し、コードを表現するアニメーションを見終わったあと実行する
function miss_answer(text){ 
	var msg = tm.app.Shape(750,440); //メッセージ用canvasの生成（750×440ならtmlib領域と同じサイズ）

	fukidashi = tm.app.Sprite("fukidashi");
	fukidashi.setScale(0.6,0.6);
	fukidashi.Label = tm.app.Label("不正解・・・").addChildTo(fukidashi);
	fukidashi.Label
		.setFillStyle("rgba(45,45,45,1)")
		.setFontSize(25)
		.setPosition(fukidashi.centerX,-5);
	msg.addChild(fukidashi);
	fukidashi.setPosition(50,50);

	var character = tm.app.Sprite("kengo_failure");
	character.setPosition(msg.canvas.centerX-160,msg.canvas.centerY-80);
	msg.addChild(character);
	character.setScale(0.5,0.5); //キャラクターの画像が大きいのでそれぞれ何倍にするかを設定
	character.tweener
		.wait(500*SPEED)
		.moveBy(0,10,300);

	if(text){
		msg.canvas.setFillStyle("red"); //フォントカラー設定
		msg.canvas.font = "25px center"; //フォントサイズ設定
		array = text.split('@@');
		for(var i=0;i<array.length;i++){
			msg.canvas.fillText(array[i],250,msg.canvas.centerY-100+(i*30)); //メッセージcanvasに文字描画
		}
	}

	app.currentScene.addChild(msg); //tmlib領域にメッセージのcanvasを追加
	msg.setPosition(app.canvas.centerX,app.canvas.centerY); //メッセージcanvasのtmlib領域上での座標指定
}

/*
 *	お手本関連
 */

//例題のアニメ終了に実行するアニメーション
function example_end(){ 
	var msg = tm.app.Shape(750,440); //メッセージ用canvasの生成（750×440ならtmlib領域と同じサイズ）
	msg.canvas.setFillStyle("blue"); //フォントカラー設定
	msg.canvas.font = "20px center"; //フォントサイズ設定
	msg.canvas.setFillStyle("red"); //フォントカラー設定
	msg.canvas.font = "30px center"; //フォントサイズ設定
	msg.canvas.fillText("お手本はおわり！問題へ進もう！",250,msg.canvas.centerY); //メッセージcanvasに文字描画
	app.currentScene.addChild(msg); //tmlib領域にメッセージのcanvasを追加
	msg.setPosition(app.canvas.centerX,app.canvas.centerY); //メッセージcanvasのtmlib領域上での座標指定
}

function example_end2(){ 
	var msg = tm.app.Shape(750,440); //メッセージ用canvasの生成（750×440ならtmlib領域と同じサイズ）
	msg.canvas.setFillStyle("blue"); //フォントカラー設定
	msg.canvas.font = "20px center"; //フォントサイズ設定
	msg.canvas.setFillStyle("red"); //フォントカラー設定
	msg.canvas.font = "30px center"; //フォントサイズ設定
	msg.canvas.fillText("お手本はおわり！次のお手本へ進もう！",250,msg.canvas.centerY); //メッセージcanvasに文字描画
	app.currentScene.addChild(msg); //tmlib領域にメッセージのcanvasを追加
	msg.setPosition(app.canvas.centerX,app.canvas.centerY); //メッセージcanvasのtmlib領域上での座標指定
}

function BUTTON_ON(){
	var type =document.getElementById("ver").getAttribute("type");
	if(type==="ex"){
		document.getElementById("button").disabled = "";
	}
}

function OnCheckPromin(name){
	var promin=null;
	for(var i=0;i<promin_array.length;i++){
		if(promin_array[i].name == name){
			promin = promin_array[i];
			break;
		}
	}
	if(promin!==null){
		promin.circle.show();
	}
}

function OffCheckPromin(name){
	var promin=null;
	for(var i=0;i<promin_array.length;i++){
		if(promin_array[i].name == name){
			promin = promin_array[i];
			break;
		}
	}
	if(promin!==null){
		promin.circle.hide();
	}
}

/*
	エラー関連のアニメーション
 */

function ANIME_sengen_twice(n){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	
	var promin=null;
	for(var i=0;i<promin_array.length;i++){
		if(promin_array[i].name===n){
			a(promin_array[i]);
			break;
		}
	}

	if(promin!=null)sign=1;BUTTON_ON();

	function a(promin){
		turn(promin,QUESTION);
	}
}

function ANIME_printf_typeMiss(contents,variables){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	
	var printf_space = tm.app.Sprite("printf_space"); //printfに使う背景の画像でスプライトオブジェクトを作成
	printf_space.setSize(500,200); //ちょっと画像が小さかったので拡大

	var space = tm.app.Shape(500,200); //printfの表示領域オブジェクトspaceを生成
	space.setPosition(475,110); //初期位置の設定（上部)
	//space.canvas.clearColor("rgba(100,100,100,1)"); //テスト用にspaceの背景色をグレーにする
	
	space.addChild(printf_space); //Shapeオブジェクトspaceに、画像スプライトのprint_spaceを追加
	app.currentScene.addChild(space); //spaceをカレントシーンにに追加

	space.canvas.setFillStyle("black"); //フォントカラー設定
	space.canvas.font = "20px center"; //フォントサイズ設定
	var between = 500/(contents.length+1); //between:文字同士の幅
	cnt = 0;
	var P=[];
	var C=[];

	for(var i=0;i<contents.length;i++){
		if(contents[i]==="%d"||contents[i]==="%f"||contents[i]==="%c"||contents[i]==="%s"){//整数型を10進数で表示(int型)
			for(var k=0;k<promin_array.length;k++){
				if(variables[cnt]===promin_array[k].name){
					var Pspace = tm.app.Shape(80,80);
					//Pspace.canvas.clearColor("red");
					Pspace.setPosition((between+(i*between))-250,space.canvas.centerY-85);
					Pspace.Label = tm.app.Label(contents[i])
						.addChildTo(Pspace);
					if(contents[i]==="%d"){
						Pspace.Label.setFillStyle("blue");
					}else if(contents[i]==="%f"){
						Pspace.Label.setFillStyle("green");
					}else if(contents[i]==="%c"){
						Pspace.Label.setFillStyle("orange");
					}
					
					//Pspace.Label.text = contents[i];
					Pspace.Label.setFontSize(20);
					space.addChild(Pspace);
					
					var copy = new MiniPromin(promin_array[k].dataType,promin_array[k].name,promin_array[k].value);
					Pspace.addChild(copy);
					copy.setPosition(0,-5);
					copy.hide();
					Pspace.addChild(copy);

					P.push(Pspace); //copy(コピーしたプロミン)を入れるための領域Pspaceを配列Pに格納
					C.push(copy); //コピーしたプロミンをCという配列に格納
					//CとPの大きさはprintf中の変数の出現回数と最終的なcntの大きさに等しい

					cnt++;
					break;	
				}
			}
		}/*else if(contents[i]==="%f"){  //double型とか？浮動小数点型のデータ型用

		}else if(contents[i]==="%c"){ //char型(文字型)を一文字として出力する場合

		}else if(contents[i]==="%s"){ //文字列を出力する

		}*/else{ //テキストをそのまま出力
			space.canvas.fillText(contents[i],between+(i*between),space.canvas.centerY+20); //テキスト描画
		}
	}
	if(cnt>0){
		space.tweener
			.wait(1500*SPEED)
			.call(function(){
				for(var i=0;i<P.length;i++){
					//printf中の変換文字列とプロミンのデータ型が対応していれば、変換文字列をプロミンの画像に変更
					if((P[i].Label.text==="%d"&&C[i].dataType==="int")||(P[i].Label.text==="%f"&&C[i].dataType==="double")||(P[i].Label.text==="%c"&&C[i].dataType==="char")){
						C[i].show();
					}
				};
			})
			.wait(1500*SPEED)
			.call(function(){
				for(var i=0;i<P.length;i++){ 
					//printf中の変換文字列とプロミンのデータ型が対応していれば、Labelを変換文字列からプロミンの値へ変更
					if((P[i].Label.text==="%d"&&C[i].dataType==="int")||(P[i].Label.text==="%f"&&C[i].dataType==="double")||(P[i].Label.text==="%c"&&C[i].dataType==="char")){
						P[i].Label.text = C[i].value;
						C[i].hide();
					}else{
						P[i].tweener
							.clear()
							.wait(500)
							.fadeOut(300)
							.fadeIn(300)
							.fadeOut(300)
							.fadeIn(300)
							.fadeOut(300)
							.fadeIn(300)
							.fadeOut(300)
							.fadeIn(300);
					}
					//Pspace.Label.setFillStyle("black");
				}
			})
			.wait(3000*SPEED) ;
			//.moveBy(0,700,1000*SPEED) //下（コンソール）のほうへ移動
			//.call(function(){sign=1;});
			//.call(function(){app.currentScene.removeChild(space)}); //もうこのオブジェクトは使わないのでカレントシーンのchildから削除
	}else{
		space.tweener
			.wait(2000*SPEED) 
			.moveBy(0,700,1000*SPEED) //下（コンソール）のほうへ移動
			//.call(function(){sign=1;})
			.call(function(){app.currentScene.removeChild(this)}); //もうこのオブジェクトは使わないのでカレントシーンのchildから削除
	} //printfの変換指定文字列が変数の型と合致しないときのエラーアニメ
}

function ANIME_dainyu_typeMiss(target_name){ 
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	
	for(var i=0;i<promin_array.length;i++){
		if(promin_array[i].name === target_name){ //指定された名前のプロミンを検索
			move(promin_array[i]); //アニメーションのfunction呼び出し
			break;
		}
	}

	function move(promin){ //代入のアニメーション
		promin.tweener
			.clear()
			.call(function(){turn(promin,RIGHT);})
			.move(app.canvas.centerX,app.canvas.centerY,500*SPEED) //move( x, y, duration, fn ) 
			.call(function(){turn(promin,FRONT);})
			.wait(1000*SPEED)
			.call(function(){
				turn(promin,QUESTION);
			});	
	}//代入先の変数と代入したい値が合致しないときのエラーアニメ
}

function ANIME_sengen_dainyu_typeMiss(dataType,name){ //dainyu_typeMissの初期化対応版
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
	
	var promin = new MiniPromin(dataType,name,"?"); //MiniProminオブジェクトを作成
	Pnum++;
    promin_array.push(promin);
   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
    movePromin(promin);

    function movePromin(promin){ //プロミンを動かすfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX,app.canvas.centerY,1000*SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){
				turn(promin,QUESTION);
			});
	}
}
