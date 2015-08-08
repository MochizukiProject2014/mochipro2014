/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "よっし！\nこれで変数のことが大体わかった気がするぞー！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
	}
}
var frame1 = {
	speaker : "きなこ",
	message :"ところで健吾、今回の怪盗Cの挑戦状は\nいったい何だったのにゃ？",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		//leftChara.setAlpha(0.1);
		//rightChara.setAlpha(0.1);
		frontChara.hide();
		setOriginCard(); //逆再生用
	}
}

var frame2 = {
	speaker : "健吾",
	message :"これだよ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		takeCardOut("キーボードから\n入力した値を３倍して、\n出力するようなプログラムを作れ！\nこれができたら、今日のおかず\n「さんまの塩焼き」は諦めてやろう。\n\n怪盗Cより");
	}
}

var frame3 = {
    speaker : "怪盗Cからの挑戦状",
    message : "『キーボードから入力した値を３倍して、\n　出力するようなプログラムを作れ！』",
    rightChara : "L_kengo",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "怪盗Cからの挑戦状",
	message :"『これができたら、今日のおかず\n「さんまの塩焼き」は諦めてやろう。\n　怪盗Cより』",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
	}
}

var frame5 = {
	speaker : "健吾",
	message :"変数は呼び出せるようになったけど、これを使って\n『キーボードから入力した値を３倍して出力する』\nっていうのが、全然見えてこないや・・・。",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
		setOriginCard();
	}
}

var frame6 = {
	speaker : "健吾",
	message :"だいたい、\n「入力」「出力」って何なんだよ〜。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame6実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame7 = {
	speaker : "きなこ",
	message :"安心するにゃ、二人とも。\nじゃあ今度は「入力」について教えるにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行")
		frontChara.hide();
		goNext.hide();
		button.hide();
	}
}

var frame8 = {
	speaker : "健吾",
	message :"おお！\nなんだかわからないけど、すごそう！\n早速やってみよう！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame9 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行");
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex2-2-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9
];