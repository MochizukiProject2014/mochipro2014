/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "けんご",
	message : "すごーい！\n本当にあんな難しい計算を、\nこんなに簡単に解けるなんて！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako_smile",
	animation: function(){
		console.log("frame0実行");
		frontDefaultX = 450;
		frontChara.setPosition(frontDefaultX,frontDefaultY);
		background.image = "washitsu"
		rightChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(1000);
		leftChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(1000);
		frontChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(1000);
	}
}
var frame1 = {
	speaker : "けんご",
	message :"これって僕でも書けるようになるかなあ？",
	rightChara : "L_kokengo_hatena",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame1実行");
	}
}

var frame2 = {
	speaker : "おじいちゃん",
	message :"健吾もきっと、算数をたくさん勉強すれば、\nこんなプログラムを書けるようになるぞい。",
	rightChara : "L_kokengo_hatena",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame2実行");
	}
}

var frame3 = {
    speaker : "けんご",
    message : "ほんと！？\nじゃあこれからも頑張って算数を勉強するね！",
    rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako_smile",
    animation : function(){
        console.log("frame3実行");}
}

var frame4 = {
	speaker : "けんご",
	message :"じゃあ、問題も解けたし、\n早くピザ注文しようよ！",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako_smile",
	animation : function(){
		console.log("frame4実行");
	}
}

var frame5 = {
	speaker : "おじいちゃん",
	message :"何を言っとるんじゃ。\nこれはわしの書いたプログラムじゃから、\n今日のピザは無しじゃ。",
	rightChara : "L_kokengo_smile",
	leftChara : "oji",
	frontChara : "R_kinako_smile",
	animation : function(){
		console.log("frame5実行");
	}
}

var frame6 = {
	speaker : "けんご",
	message :"えーー！\nそんなーーー！",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame6実行");
		button.hide();
		goNext.hide();
	}
}

var frame7 = {
	speaker : "",
	message :"",
	rightChara : "L_kokengo",
	leftChara : "oji",
	frontChara : "R_kinako",
	animation : function(){
		console.log("frame6実行")
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../../login/top.php";
		});
	}
}


var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7
];