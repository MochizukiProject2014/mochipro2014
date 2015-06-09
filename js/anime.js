var app = null;
var promin_array = [];
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

/*///////////////////////////
		画像の設定
///////////////////////////*/

//読み込む画像
var ASSETS = {
	//printf表示用の外枠
    "printf_space" : "img/syutsuryokusozai.png", 
    
    //緑プロミン
    "Gpromin_front" : "img/Gpromin/Gpromin_front.png", 
    "Gpromin_right1" : "img/Gpromin/Gpromin_right1.png",
    "Gpromin_left1" : "img/Gpromin/Gpromin_left1.png",
    "Gpromin_writing1" : "img/Gpromin/Gpromin_writing1.png",
    "Gpromin_eracing1" : "img/Gpromin/Gpromin_eracing1.png",
    "Gpromin_question1" : "img/Gpromin/Gpromin_question1.png",
    "Gpromin_right2" : "img/Gpromin/Gpromin_right2.png",
    "Gpromin_left2" : "img/Gpromin/Gpromin_left2.png",
    "Gpromin_writing2" : "img/Gpromin/Gpromin_writing2.png",
    "Gpromin_eracing2" : "img/Gpromin/Gpromin_eracing2.png",
    "Gpromin_question2" : "img/Gpromin/Gpromin_question2.png",
   
    //青プロミン
    "Bpromin_front" : "img/Bpromin/Bpromin_front.png",  
    "Bpromin_right1" : "img/Bpromin/Bpromin_right1.png",
    "Bpromin_left1" : "img/Bpromin/Bpromin_left1.png",
    "Bpromin_writing1" : "img/Bpromin/Bpromin_writing1.png",
    "Bpromin_eracing1" : "img/Bpromin/Bpromin_eracing1.png",
    "Bpromin_question1" : "img/Bpromin/Bpromin_question1.png",
    "Bpromin_left2" : "img/Bpromin/Bpromin_left2.png",
    "Bpromin_writing2" : "img/Bpromin/Bpromin_writing2.png",
    "Bpromin_eracing2" : "img/Bpromin/Bpromin_eracing2.png",
    "Bpromin_question2" : "img/Bpromin/Bpromin_question2.png",

    //オレンジプロミン
    "Opromin_front" : "img/Opromin/Opromin_front.png",
    "Opromin_right1" : "img/Opromin/Opromin_right1.png",
    "Opromin_left1" : "img/Opromin/Opromin_left1.png",
    "Opromin_writing1" : "img/Opromin/Opromin_writing1.png",
    "Opromin_eracing1" : "img/Opromin/Opromin_eracing1.png",
    "Opromin_question1" : "img/Opromin/Opromin_question1.png",
    "Opromin_right2" : "img/Opromin/Opromin_right2.png",
    "Opromin_left2" : "img/Opromin/Opromin_left2.png",
    "Opromin_writing2" : "img/Opromin/Opromin_writing2.png",
    "Opromin_eracing2" : "img/Opromin/Opromin_eracing2.png",
    "Opromin_question2" : "img/Opromin/Opromin_question2.png",

    //ing型配列（青）
    "intArray_front" : "img/array/intArray/intTrain_front.png",
    "intArray_writing" : "img/array/intArray/intTrain_writing.png",
    "intArray_eracing" : "img/array/intArray/intTrain_eracing.png",
    "intArray_lookdown" : "img/array/intArray/intTrain_lookdown.png",
    "intArray_writing2" : "img/array/intArray/intTrain_writing2.png",
    "intArray_eracing2" : "img/array/intArray/intTrain_eracing2.png",

    //double型配列(緑)
    "doubleHead_left" : "img/array/doubleArray/doubleHead_left.png",
    "doubleHead_right" : "img/array/doubleArray/doubleHead_right.png",
    "doubleHead_ry" : "img/array/doubleArray/doubleHead_ry.png",
    "doubleGetOff_eracing" : "img/array/doubleArray/doubleGetOff_eracing.png",
    "doubleGetOff_writing" : "img/array/doubleArray/doubleGetOff_writing.png",
    "doubleGetOff_left" : "img/array/doubleArray/doubleGetOff_left.png",
    "doubleGetOff_right" : "img/array/doubleArray/doubleGetOff_right.png",

    //char型配列（オレンジ）
    "charHead_left" : "img/array/charArray/charHead_left.png",
    "charHead_right" : "img/array/charArray/charHead_right.png",
    "charHead_ry" : "img/array/charArray/charHead_ry.png",
    "charGetOff_eracing" : "img/array/charArray/charGetOff_eracing.png",
    "charGetOff_writing" : "img/array/charArray/charGetOff_writing.png",
    "charGetOff_left" : "img/array/charArray/charGetOff_left.png",
    "charGetOff_right" : "img/array/charArray/charGetOff_right.png",
    
    //健吾
    "kengo" : "img/character/kengo.png", 
	"kengo_clear" : "img/character/kengo_clear.png",
	"kengo_failure" : "img/character/kengo_failure.png",

	//怪盗C
    "kaitoC" : "img/character/kaitoC.png", 
    "fukidashi" : "img/fukidashi.png",
      
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

/*///////////////////////////
		アニメ全般関連
///////////////////////////*/


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
	init:function(dataType,name,index,value){
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

		var canvas = tm.graphics.Canvas("#world");
		canvas.resize(740,440);
		var pre_promin,pre_prominX,pre_prominY;

		if(this.index!==0){
			for(var i=0;i<promin_array.length;i++){
				if(promin_array[i].name === name && promin_array[i].index === index-1){
					pre_promin = promin_array[i];
					break;
				}
			}
		}

		if(pre_promin){

		}

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
			this.imgSet=DoubleProminImg;
		}else if(this.dataType==="char"){
			this.imgSet=CharProminImg;
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
	Pnum = 0;
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

/*//////////////////////////////
	配列関連の関数 (0 0)
//////////////////////////////*/

function ANIME_array_sengen(dataType,name,size){ 
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
    var arrayIndex = 0;
    var a_SPEED = 1*SPEED;
    if(size>=20){
    	a_SPEED = 0.3*SPEED; //配列の長さが20以上なら３倍速
    }else if(size>=50){
    	a_SPEED = 0.01*SPEED; //配列の長さが50以上なら10倍速
    }

    //eval("var a_"+name+" = [];");
    for(arrayIndex=size-1;arrayIndex>=0;arrayIndex--){
    	var promin = new ArrayPromin(dataType,name+"["+arrayIndex+"]",arrayIndex,"?"); //MiniProminオブジェクトを作成
	    promin_array.push(promin);
	   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
	    movePromin(promin);
	    //eval("a_"+name+"["+arrayIndex+"] = promin");
    }
    Pnum++;


    function movePromin(promin){ //プロミンを動かすfunction
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,1000*SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX,app.canvas.centerY,175*a_SPEED*(promin.index+1))
			.move(promin.defaultX,promin.defaultY,500*SPEED)
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){if(promin.index===size-1){sign = 1;BUTTON_ON();}});
	}
}

function ANIME_array_sengen_dainyu(dataType,name,size,values){
	SPEED_BOARD.text=(DEFAULT_SPEED/SPEED)+"倍速";
    var arrayIndex = 0;
    var a_SPEED = 1*SPEED;
    if(size>=20){
    	a_SPEED = 0.3*SPEED; //配列の長さが20以上なら３倍速
    }else if(size>=50){
    	a_SPEED = 0.01*SPEED; //配列の長さが50以上なら10倍速
    }

    //eval("var a_"+name+" = [];");
    for(arrayIndex=size-1;arrayIndex>=0;arrayIndex--){
    	var promin = new ArrayPromin(dataType,name+"["+arrayIndex+"]",arrayIndex,"?");
	    promin_array.push(promin);
	   	app.currentScene.addChild(promin); //currentScene(MainScene)に作成したオブジェクトを追加
	    movePromin(promin);
    }

    Pnum++;

    function movePromin(promin){ //プロミンを動かすfunction
    	promin.Label = tm.app.Label("= "+values[promin.index]).addChildTo(app.currentScene);
		promin.Label
			.setFillStyle("rgba(0,0,0,1)")
			.setFontSize(25)
			.setPosition(app.canvas.centerX,app.canvas.centerY+100)
			.hide();
		/*
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,1000*SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(500*SPEED)
			.call(function(){
				for(var i=0;i<promin.index;i++){
					promin.tweener
						.wait(3500*SPEED)
						.moveBy(-100,0,500*SPEED);
						//.wait(1000*SPEED);	
				}
				promin.tweener
					.wait(500*SPEED)
					.call(function(){
						promin.Label.show();
						promin.image=promin.imgSet.lookdown;
						promin.nameLabel.setPosition(5,-15);
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

					//書くモーション
					.call(function(){turn(promin,WRITE);})
					.wait(150*SPEED)
					.call(function(){turn(promin,WRITE2);})
					.wait(150*SPEED)
					.call(function(){
						promin.valueLabel.text=values[promin.index];
					})
					.call(function(){turn(promin,WRITE);})
					.wait(150*SPEED)
					.call(function(){turn(promin,WRITE2);})
					.wait(150*SPEED)
					.call(function(){
						turn(promin,FRONT);
						app.currentScene.removeChild(promin.Label);
					})

					.wait(500*SPEED)
					.call(function(){turn(promin,LEFT);})
					//.move(app.canvas.centerX,app.canvas.centerY,175*a_SPEED*(promin.index+1))
					.move(promin.defaultX,promin.defaultY,500*SPEED)
					.call(function(){turn(promin,FRONT);})
					.wait(500*SPEED)
					.call(function(){if(promin.index===size-1){sign = 1;BUTTON_ON();}});
				});
		*/
		promin.tweener
			.clear()
			.call(function(){turn(promin,LEFT);})
			.move(app.canvas.centerX+(promin.index*100),app.canvas.centerY,250*SPEED) //move( x, y, duration, fn )
			.call(function(){turn(promin,FRONT);})
			.wait(250*SPEED)
			.call(function(){
				for(var i=0;i<promin.index;i++){
					promin.tweener
						.wait(1950*SPEED)
						.moveBy(-100,0,250*SPEED);
						//.wait(1000*SPEED);	
				}
				promin.tweener
					.wait(250*SPEED)
					.call(function(){
						promin.Label.show();
						promin.image=promin.imgSet.lookdown;
						promin.nameLabel.setPosition(5,-15);
					})

					//消すモーション
					.wait(500*SPEED)
					.call(function(){
						promin.valueLabel.text="";
						turn(promin,ERACE);
					})
					.wait(75*SPEED)
					.call(function(){turn(promin,ERACE2);})
					.wait(75*SPEED)
					.call(function(){turn(promin,ERACE);})
					.wait(75*SPEED)
					.call(function(){turn(promin,ERACE2);})
					.wait(75*SPEED)
					.call(function(){turn(promin,ERACE);})
					.wait(75*SPEED)

					//書くモーション
					.call(function(){turn(promin,WRITE);})
					.wait(75*SPEED)
					.call(function(){turn(promin,WRITE2);})
					.wait(75*SPEED)
					.call(function(){turn(promin,WRITE);})
					.wait(75*SPEED)
					.call(function(){turn(promin,WRITE2);})
					.call(function(){
						promin.valueLabel.text=values[promin.index];
					})
					.wait(75*SPEED)
					.call(function(){
						turn(promin,FRONT);
						app.currentScene.removeChild(promin.Label);
					})

					.wait(500*SPEED)
					.call(function(){turn(promin,LEFT);})
					//.move(app.canvas.centerX,app.canvas.centerY,175*a_SPEED*(promin.index+1))
					.move(promin.defaultX,promin.defaultY,250*SPEED)
					.call(function(){turn(promin,FRONT);})
					.wait(250*SPEED)
					.call(function(){if(promin.index===size-1){sign = 1;BUTTON_ON();}});
				});
	}
}	


/*//////////////////////////////
	変数関連の関数 (0 0)←プロミン
//////////////////////////////*/

//プロミンの方今転換
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

					P.push(Pspace);
					C.push(copy);
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
			.call(function(){promin_array.value = new_value}); //プロミンの値を書き換える;
				
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


/*//////////////////////////
	正誤判定関連
//////////////////////////*/

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

/*///////////////////////////
	お手本関連
///////////////////////////*/

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

/*//////////////////////////////
	エラー関連のアニメーション
///////////////////////////////*/

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
