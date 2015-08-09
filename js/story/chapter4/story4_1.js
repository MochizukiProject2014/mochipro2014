/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "どうだ怪盗C！\n今回の挑戦状も解けたぞ！\nいいかげん正体をあらわせ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
		leftChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(500);
		rightChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(500);
	}
}
var frame1 = {
	speaker : "怪盗C",
	message :"ぐぬぬ・・・。ま、まだにゃ！\nまだ終わらんにゃ！\n次の問題にゃ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"まだあるの！？\n・・・でも、今日のおかずは苦手な『ピーマンの肉詰め』\nだから最悪盗られても・・・。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "怪盗C",
    message : "今回は夕飯じゃなく、\n１５時のおやつをいただくにゃ！",
    rightChara : "L_kengo_hatena",
    leftChara : "R_kaitoC",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "健吾",
	message :"そんな！？\nおやつを！？",
	rightChara : "F_kengo_surprised",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
		setOriginCard(); //逆再生用
	}
}

var frame5 = {
	speaker : "怪盗C",
	message :"しかも今回はすでにおやつを盗ってあるにゃ！\n返して欲しければこの挑戦状を解くことにゃ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
		envelope.setScale(0.6);
		envelope.setPosition(340,550);
		envelope.show();
		envelope.tweener
			.clear()
			.wait(1000)
			.moveBy(500,0,300);
	}
}

var frame6 = {
	speaker : "怪盗C",
	message :"にゃーはっはっは！\nでは、さらばにゃ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame6実行")
		frontChara.hide();
		leftChara.tweener
			.wait(500)
			.moveBy(-1000,0,1000);
	}
}

var frame7 = {
	speaker : "健吾",
	message :"どうしよう、このままじゃおやつを盗られちゃうよ！\n助けて、きなこ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_surprised",
	animation : function(){
		console.log("frame7実行")
		rightChara.hide();
		leftChara.hide();
		setOriginCard(); //逆再生用
	}
}

var frame8 = {
	speaker : "健吾",
	message :"・・・って、あれ？\nきなこがいない？\nおーい、きなこー？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame8実行")
		rightChara.hide();
		leftChara.hide();
	}
}

var frame9 = {
	speaker : "きなこ",
	message :"ぜぇ・・・ぜぇ・・・、\nこ、ここにいるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行")
		frontChara.hide();
		leftChara.tweener
			.moveBy(-1000,0,1)
			.moveBy(1000,0,500);
	}
}

var frame10 = {
	speaker : "健吾",
	message :"大丈夫、きなこ？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame10実行")
		frontChara.hide();
	}
}

var frame11 = {
	speaker : "きなこ",
	message :"だ、大丈夫にゃ。それより早く挑戦状を解くにゃ！\n早くおやつを取り返さないと、１５時までにおやつを\n食べられなくなるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame11実行")
		frontChara.hide();
		setOriginCard(); //逆再生用
	}
}

var frame12 = {
	speaker : "健吾",
	message :"そうだった！\nえーと、今回の挑戦状は・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame12実行")
		frontChara.hide();
		takeCardOut("for文を二つ使って、\n＊を一段毎に\n一つずつ増やす\nプログラムを作れ。")
	}
}

var frame13 = {
	speaker : "怪盗C",
	message :"for文を二つ使って、*を一段毎に一つずつ増やす\nプログラムを作れ。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame13実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame14 = {
	speaker : "怪盗C",
	message :"この問題の答えが示す場所に今日のおやつ『エクレア』\nはある。１５時までに解けなかった場合私がおいしく\nいただかせてもらう。怪盗Cより。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame14実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
		chosenMessage.text = "この問題の答えが示す場所に\n今日のおやつ「エクレア」はある。\n15時までに解けなかった場合、\n私がおいしくいただかせてもらう。\n\n怪盗より";
	}
}

var frame15 = {
	speaker : "怪盗C",
	message :"ヒント：この公園内のどこかにある。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame15実行")
		frontChara.hide();
		chosenMessage.text = "ヒント：\nこの公園内のどこかにある。"
	}
}

var frame16 = {
	speaker : "健吾",
	message :"for文？\nfor文ってなーにーーー！！？？",
	rightChara : "F_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame16実行")
		frontChara.hide();
		setOriginCard();
		button.hide();
		goNext.hide();
	}
}

var frame17 = {
	speaker : "",
	message :"",
	rightChara : "F_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame16実行")
		frontChara.hide();
		setOriginCard();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter4.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,
	frame10,frame11,frame12,frame13,frame14,frame15,frame16,frame17

];