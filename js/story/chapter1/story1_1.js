/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "けんご",
	message : "ただいまー！\nおじいちゃん！きなこ！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation: function(){
		console.log("frame0実行");
		frontDefaultX = 450;
		background.image = "washitsu"
		frontChara.hide();
		leftChara.hide();
		rightChara.tweener
			.clear()
			.moveBy(500,0,1)
			.moveBy(-500,0,1000)
	}
}
var frame1 = {
	speaker : "おじいちゃん",
	message :"おかえり健吾。",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako_smile",
	animation : function(){
		console.log("frame1実行");
		//leftChara.setAlpha(0.1);
		//rightChara.setAlpha(0.1);
		//frontChara.hide();
		leftChara.tweener
			.clear()
			.moveBy(-500,0,1)
			.moveBy(500,0,1000)
		frontChara.tweener
			.clear()
			.moveBy(-500,0,1)
			.moveBy(500,0,1000)
	}
}

var frame2 = {
	speaker : "きなこ",
	message :"にゃーん。",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako_smile",
	animation : function(){
		console.log("frame2実行");
	}
}

var frame3 = {
    speaker : "けんご",
    message : "聞いておじいちゃん！\n今日も算数の授業で面白いことを習ったよ！",
    rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako",
    animation : function(){
        console.log("frame3実行");}
}

var frame4 = {
	speaker : "おじいちゃん",
	message :"健吾は本当に算数が好きじゃのう。\nそれで今日は何を習ったんじゃ？",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame4実行");
	}
}

var frame5 = {
	speaker : "けんご",
	message :"えーっとね、円の面積がわかる計算式を習ったよ！\n時計や５００円玉の面積を求めたりして、\nすっごく楽しかったよ！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame5実行");
	}
}

var frame6 = {
	speaker : "おじいちゃん",
	message :"ほほう、じゃあ、\n半径１０ｃｍの円の面積はわかるかの？",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame6実行")
	}
}

var frame7 = {
	speaker : "けんご",
	message :"そんなの簡単だよー！\n半径×半径×円周率だから、\n面積は１０×１０×３.１４で、３１４平方ｃｍ！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame7実行")
	}
}

var frame8 = {
	speaker : "おじいちゃん",
	message :"ほほう、正解じゃ！すごいのう。\nじゃあ、昨日食べたピザの面積はわかるかの？",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame8実行")
	}
}

var frame9 = {
	speaker : "おじいちゃん",
	message :"ちなみに半径は３１ｃｍじゃ！\n問題が解けたら今日もピザを注文してやるぞい。",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame9実行")
	}
}

var frame10 = {
	speaker : "けんご",
	message :"ほんと？わーいやったー！！\n今日もピザだ！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame10実行")
	}
}

var frame11 = {
	speaker : "けんご",
	message :"半径３１ｃｍか・・・、あれ？\nそんな大きい数字、すぐには計算できないよ〜！\nえーと、３１×３１は・・・ひっさんしないと・・・。",
	rightChara : "L_kokengo_hatena",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame11実行")
	}
}

var frame12 = {
	speaker : "おじいちゃん",
	message :"ふぉっふぉっふぉ、健吾にはちょっと難しかったかのう。\nおじいちゃんならどんな数字でも\n計算することができるぞい。",
	rightChara : "L_kokengo_hatena",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame12実行")
	}
}

var frame13 = {
	speaker : "けんご",
	message :"おじいちゃん、こんな難しい計算もすぐにできるの？？\nすごい！！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame13実行")
	}
}

var frame14 = {
	speaker : "おじいちゃん",
	message :"といっても、プログラムを使ってじゃがな。",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame14実行")
	}
}

var frame15 = {
	speaker : "けんご",
	message :"プログラム・・・？？",
	rightChara : "L_kokengo_hatena",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame15実行")
	}
}

var frame16 = {
	speaker : "おじいちゃん",
	message :"そうじゃ、これを見るんじゃ。",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame16実行")
		goNext.hide();
	}
}

var frame17 = {
	speaker : "",
	message :"",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame17実行")
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex1-1-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,
	frame10,frame11,frame12,frame13,frame14,frame15,frame16,frame17
];