/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "きなこ",
	message : "配列はわかったかにゃ？",
	rightChara : "L_kengo",
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
	speaker : "健吾",
	message :"なんとなくわかったよ！\nこれで挑戦状解ける？",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "きなこ",
	message :"解けるにゃ。",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "健吾",
    message : "よーし、じゃあさっそく・・・。",
    rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "きなこ",
	message :"ちょっと待つにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
	}
}

var frame5 = {
	speaker : "健吾",
	message :"どうしたのきなこ？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行");
		frontChara.hide();
	}
}

var frame6 = {
	speaker : "きなこ",
	message :"挑戦状とは関係ないけど\n『二次元配列』というのも教えるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame6実行");
		frontChara.hide();
	}
}

var frame7 = {
	speaker : "健吾",
	message :"え～、また関係ないこと覚えるの？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行");
		frontChara.hide();
	}
}

var frame8 = {
	speaker : "きなこ",
	message :"そんなこと言わないでほしいにゃ！\n二次元配列も重要だから知っておいてほしいのにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行");
		frontChara.hide();
	}
}

var frame9 = {
	speaker : "健吾",
	message :"わかったよ～。\nどうせ覚えないと挑戦状のヒントくれないんでしょ？",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行");
		frontChara.hide();
	}
}

var frame10 = {
	speaker : "きなこ",
	message :"珍しく察しがいいにゃ！\nもちろんそのつもりにゃ！\nってことで『二次元配列』を教えるにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame10実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame11 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame11実行");
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter5.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10,
	frame11

];