/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "・・・解けた。\nやった、解けた！\nありがとう、君のおかげだよ！",
	rightChara : "F_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation: function(){
		console.log("frame0実行");
		leftChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(500);
		rightChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(500);
		frontChara.tweener
			.clear()
			.fadeOut(1)
			.fadeIn(500);
	}
}
var frame1 = {
	speaker : "きなこ",
	message :"やったにゃ、健吾！\nすごいにゃ、二人とも！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "promin",
	animation : function(){
		console.log("frame1実行");
	}
}

var frame2 = {
	speaker : "健吾",
	message :"これであいつをギャフンを言わせることができるよ！\nそれに、もしまた挑戦状が来ても、\n君と僕なら解くことができるはずさ！",
	rightChara : "F_kengo_smile",
	leftChara : "F_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame2実行");
	}
}

var frame3 = {
    speaker : "健吾",
    message : "・・・だからこれからも力を貸してくれるかい？",
    rightChara : "F_kengo",
	leftChara : "F_kinako",
	frontChara : "promin",
    animation : function(){
        console.log("frame3実行");
        button.hide();
        goNext.hide();
    }
}

var frame4 = {
	speaker : "健吾",
	message :"・・・うん、ありがとう！\nこれからもよろしくね！",
	rightChara : "F_kengo_smile",
	leftChara : "F_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame4実行");
		button.hide();
        goNext.hide();
	}
}

var frame5 = {
	speaker : "",
	message :"",
	rightChara : "F_kengo_smile",
	leftChara : "F_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame4実行");
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter2.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5

];