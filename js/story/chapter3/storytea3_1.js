/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "そっか！\nifを使えばいいんだ！\nよ〜し、じゃあさっそく挑戦状に挑戦だ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
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
	speaker : "きなこ",
	message :"ちょっと待つにゃ、健吾。\nこういう場合はどうするにゃ？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame1_5 = {
	speaker : "きなこ",
	message :"『変数xくんが数値-5以上5未満のときは\n　正解と表示する』場合にゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"えーと・・・、-5≦x<5を使う！",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "きなこ",
    message : "・・・残念なお知らせにゃ。\nプログラムでは、この書き方は通用しないにゃ。",
    rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "健吾",
	message :"えーっ！\nじゃあ、どうすればいいの？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
	}
}

var frame5 = {
	speaker : "きなこ",
	message :"安心するにゃ、ちゃーんとやり方があるにゃ。\n心して聞くにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame6 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex3-2-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame1_5,frame2,frame3,frame4,frame5,frame6

];