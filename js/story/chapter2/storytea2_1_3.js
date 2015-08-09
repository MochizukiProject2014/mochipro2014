/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "これでホワイトボードに値が書けるようになったね！\nよーし、次に進むぞー！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
		//leftChara.hide();
		//rightChara.hide();
	}
}
var frame1 = {
	speaker : "きなこ",
	message :"ちょっと待つにゃ！\n値を書き込むことに関して、\nまだ覚えなきゃいけないことがあるにゃ。",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		//leftChara.setAlpha(0.1);
		//rightChara.setAlpha(0.1);
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"そうなの？\nうーん・・・挑戦状への道のりは長いなあ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame3 = {
	speaker : "きなこ",
	message :"プログラムは奥が深いのにゃ。\nじゃあこれから教えていくにゃ〜。",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame4 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex2-1-3.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4
];