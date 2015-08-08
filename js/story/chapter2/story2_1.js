/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : " ",
	message : "時は流れ、5年後。",
	rightChara : "L_kengo",
	leftChara : "oji",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
		leftChara.hide();
		rightChara.hide();
	}
}
var frame1 = {
	speaker : "健吾",
	message :"今日こそはお前をギャフンと言わせてやる！\n怪盗C！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		//leftChara.setAlpha(0.1);
		//rightChara.setAlpha(0.1);
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

var frame2 = {
	speaker : "怪盗C",
	message :"ふふ、こないだも同じこと言ってたにゃ。\n本当に懲りないやつにゃ。\nその根性に敬意を示して、",
	rightChara : "L_kengo",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "怪盗C",
    message : "今日もきみに挑戦状を送りつけてやるにゃ。\nまあ、今回も解くのは無理だろうけどにゃ。",
    rightChara : "L_kengo",
    leftChara : "R_kaitoC",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "怪盗C",
	message :"にゃーっはっはっは！\nでは、さらばにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
		leftChara.tweener
			.clear()
			.wait(1000)
			.moveBy(-800,0,1000);
	}
}

var frame5 = {
	speaker : "健吾",
	message :"ぐぬぬ・・・。\n今回も難問のようだ・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		//rightChara.hide();
		frontChara.hide();
		leftChara.hide();
	}
}

var frame6 = {
	speaker : "健吾",
	message :"・・・うん？きみは？\nああ、今のやりとりを見てたのか。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame6実行")
		rightChara.hide();
		//frontChara.hide();
		leftChara.hide();
	}
}

var frame7 = {
	speaker : "健吾",
	message :"あいつは怪盗C。\nいつも俺に挑戦状を送りつけてくるんだよ。\nこれが難問で、内容はC言語のプログラミング問題なんだ。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行")
		rightChara.hide();
		//frontChara.hide();
		leftChara.hide();
	}
}

var frame8 = {
	speaker : "健吾",
	message :"解けないと俺の家の冷蔵庫からおかずを盗む、\n変な怪盗なんだよ・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行")
		rightChara.hide();
		//frontChara.hide();
		leftChara.hide();
	}
}

var frame9 = {
	speaker : "健吾",
	message :"そうだ、きみ！\nよかったら、俺と一緒に\nこの挑戦状を解いてくれないか？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行")
		rightChara.hide();
		//frontChara.hide();
		leftChara.hide();
	}
}

var frame10 = {
	speaker : "健吾",
	message :"C言語がわからない？\n大丈夫！\n俺の飼っている猫のきなこが手助けしてくれるよ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame10実行")
		rightChara.hide();
		//frontChara.hide();
		leftChara.hide();
	}
}

var frame11 = {
	speaker : "きなこ",
	message :"読んだかにゃ？",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame11実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();

		leftChara.tweener
			.clear()
			.moveBy(-400,0,1)
			.move(300,450,1000);
	}
}

var frame12 = {
	speaker : "健吾",
	message :"あ！きなこ！\nちょうどいいところに！",
	rightChara : "L_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame12実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame13 = {
	speaker : "健吾",
	message :"紹介するね、この三毛猫がきなこ。\nおじいちゃんの飼っていた猫なんだ。",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame13実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame14 = {
	speaker : "健吾",
	message :"きなこ、\n今回も挑戦状を解く手伝いをしてくれない？",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame14実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame15 = {
	speaker : "きなこ",
	message :"それはかまわないけど答えは教えないにゃ。\nヒントだけにゃ。",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame15実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame16 = {
	speaker : "きなこ",
	message :"ヒントだけじゃわからないよ〜、きなこ。",
	rightChara : "F_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame16実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame17 = {
	speaker : "きなこ",
	message :"う〜ん、じゃあボクの友達を紹介するにゃ。",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame17実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var intX = {
	speaker : "きなこ",
	message :"イント・エックス〜〜〜！！！",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("intX実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame18 = {
	speaker : "健吾",
	message :"き、きなこ、なにこれ！？",
	rightChara : "L_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame18実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
		frontChara.tweener
			.clear()
			.moveBy(0,150,1)
			.moveBy(0,-180,100)
			.moveBy(0,30,50);
	}
}

var frame19 = {
	speaker : "きなこ",
	message :"『変数』の x 君にゃ。\nさっきボクが言った「イント・エックス〜」っていう\n呪文のようなものは、『宣言』というにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame19実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
	}
}

var frame20 = {
	speaker : "きなこ",
	message :"『変数』は『宣言』することで呼び出せるにゃ。\nたくさんの『変数』たちが\n健吾の手助けをしてくれるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame20実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
	}
}

var frame21 = {
	speaker : "健吾",
	message :"やったぁ！！\nきなこ、ありがとう！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame21実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
	}
}

var frame22 = {
	speaker : "健吾",
	message :"ところで、手助けって何をしてくれるの？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame22実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
	}
}

var frame23 = {
	speaker : "きなこ",
	message :"それはにゃ・・・",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame23実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
	}
}

var frame24 = {
	speaker : "きなこ",
	message :"健吾たちが覚えておきたい数字や文字を、\nひとつだけホワイトボードに書いて、\n持っておいてくれるにゃ！！！",
	rightChara : "L_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame24実行")
		//rightChara.hide();
		//frontChara.hide
		//leftChara.hide();
	}
}

var frame25 = {
	speaker : "健吾",
	message :"ん・・・？\nそれは・・・すごいのかな・・・？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame25実行")
	}
}

var frame26 = {
	speaker : "きなこ",
	message :"じゃあ二人とも、\n早速この『変数』を『宣言』する練習だにゃ！！",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame26実行")
		goNext.hide();
		button.hide();
	}
}

var frame27 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame26実行")
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex2-1-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,
	frame10,frame11,frame12,frame13,frame14,frame15,frame16,frame17,intX,frame18,frame19,
	frame20,frame21,frame22,frame23,frame24,frame25,frame26,frame27

];