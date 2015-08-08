/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "（もぐもぐ・・・）\n怪盗Cの正体・・・？\n一体何者なんだ・・・？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
	}
}
var frame1 = {
	speaker : "きなこ",
	message :"・・・・・。\nとりあえず、その問題とやらを見てみるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
		setOriginCard(); //逆再生用
	}
}

var frame2 = {
	speaker : "健吾",
	message :"うん。\nどれどれ・・・。",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		takeCardOut("配列から、\n入力した番地の要素を出力できる\nプログラムを作れ。\nそして「0、5、8、6」を\n入力しろ。");
	}
}

var frame3 = {
    speaker : "怪盗C",
    message : "『配列から、入力した番地の要素を出力できる\nプログラムを作れ。\nそして、「0、5、8、6」を入力しろ。",
    rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
    }
}

var frame4 = {
	speaker : "怪盗C",
	message :"私はこの街にある、\nこの問題の答えの場所にいる。』",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
		chosenMessage.text="私はこの街にある、\nこの問題の答えの場所にいる。\n\n怪盗Cより";
	}
}

var frame5 = {
	speaker : "健吾",
	message :"むむむ・・・。\n今までで一番の問題だ・・・。\nだけど僕らなら、きっと解けるはずさ！",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行");
		frontChara.hide();
		setOriginCard(); //逆再生用
	}
}

var frame6 = {
	speaker : "きなこ",
	message :"健吾はほとんど解いていないような\n気がするんだけどにゃ・・・。",
	rightChara : "F_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame6実行");
		frontChara.hide();
	}
}

var frame7 = {
	speaker : "健吾",
	message :"じゃあ、きなこ。\n今回もお手伝いよろしく！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行");
		frontChara.hide();
	}
}

var frame8 = {
	speaker : "きなこ",
	message :"はいはい・・・\nわかってるにゃ。",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行");
		frontChara.hide();
	}
}

var frame9 = {
	speaker : "きなこ",
	message :"・・・さて、ボクのお仕事にゃ。",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame10 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame10実行");
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter5.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10

];