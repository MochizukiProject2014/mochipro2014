/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "よし・・・！解けた！\n今回も君のおかげで解くことができたよ！",
	rightChara : "F_kengo",
	leftChara : "F_kinako",
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
	speaker : "健吾",
	message :"君とあの時会っていなかったら、\n俺は今もおかずを盗まれ続ける生活だった・・・。\n本当にありがとう！",
	rightChara : "F_kengo",
	leftChara : "F_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();

	}
}

var frame2 = {
	speaker : "きなこ",
	message :"よくやったにゃ、二人とも。\n確実にC言語が身に付き始めてるにゃ。",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame2_5 = {
	speaker : "きなこ",
	message :"・・・。\nしかし、またおかずが無くなってしまったにゃ・・・。",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2_5実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "きなこ",
    message : "・・・うん？なんじゃ？\nそんな疑うような目で見て・・・。\nはっ！？まさかボクの正体に気がついて・・・。",
    rightChara : "L_kengo",
    leftChara : "F_kinako",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "健吾",
	message :"どうかした？",
	rightChara : "L_kengo_hatena",
	leftChara : "F_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
	}
}

var frame5 = {
	speaker : "きなこ",
	message :"い、いや、なんでもないにゃ。\n・・・いいか、健吾には絶対に秘密だにゃ、絶対にゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "F_kinako",
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
	leftChara : "F_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter3.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame2_5,frame3,frame4,frame5,frame6
];