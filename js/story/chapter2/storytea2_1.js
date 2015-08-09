/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "すごい！\nこれで変数を呼び出せるようになったね！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
		//leftChara.hide();
		//rightChara.hide();
	}
}
var frame1 = {
	speaker : "健吾",
	message :"でも、さっき言ってた\n『覚えておきたい数字や文字を、１つだけ\n　ホワイトボードに書いておいてくれる』ってやつは？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
		goNext.hide();
		button.hide();
	}
}

var frame2 = {
	speaker : "きなこ",
	message :"それはこれから教えるにゃ！\nよーく見ておくんだにゃ！",
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

var frame3 = {
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
			document.location.href = "../ex2-1-2.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3
];