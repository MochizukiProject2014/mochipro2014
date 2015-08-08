/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "よし！これで挑戦状が解けるぞ〜！！",
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
	message :"がんばるにゃ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"bmiを計算して・・・\nif文を使って条件を分けて・・・。",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "健吾",
    message : "あ〜〜〜難しい！\nこれは全部条件を書かなきゃいけないのかな。\n『それ以外』とか書く方法があれば楽なんだけどな〜。",
    rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "きなこ",
	message :"健吾、いいところに目をつけたにゃ！\n『それ以外』を書く方法があるにゃ！",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame5 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex3-2-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5

];