/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "なるほど！\nこれで同じことを何回か繰り返せるんだね！",
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
	message :"そうにゃ、これが『繰り返し』にゃ。\nこれで挑戦状のfor文という意味が分かったと思うにゃ。",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"よーし、じゃあこれで挑戦状に・・・。",
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
    message : "ちょっと待つにゃ！",
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
	message :"なに？",
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
	message :"挑戦状を解く前に、繰り返しにはもう一個書き方が\nあるからそれも教えるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
	}
}

var frame6 = {
	speaker : "健吾",
	message :"え〜、でも必要ないんでしょ？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame6実行")
		frontChara.hide();
	}
}

var frame7 = {
	speaker : "きなこ",
	message :"これも覚えなきゃヒントはあげないにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame7実行")
		frontChara.hide();
	}
}

var frame8 = {
	speaker : "健吾",
	message :"わかったよ・・・。\nじゃあよろしく。",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行")
		frontChara.hide();
	}
}

var frame9 = {
	speaker : "きなこ",
	message :"それでいいにゃ。\nじゃあ繰り返しのもう一個の書き方\n『while文』を教えるにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行")
		frontChara.hide();
	}
}

var frame10 = {
	speaker : "健吾",
	message :"while文？？？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame10実行")
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame11 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame10実行")
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex4-2-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,
	frame10,frame11

];