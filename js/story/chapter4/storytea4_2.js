/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "while文も覚えたし、いよいよ挑戦状だね！",
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
	message :"と、いきたいところだけど、\n挑戦状のここをみるにゃ。",
	rightChara : "L_kengo",
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
	message :"for文を二つ使って・・・？\nここがどうかしたの？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		chosenzyo.show();
		readCard("for文を二つ使って、\n＊を一段毎に一つずつ増やす\nプログラムを作れ。")
	}
}

var frame3 = {
    speaker : "きなこ",
    message : "この『for文を二つ使って』というのは普通に二つ\n使えばいいというものではないにゃ！",
    rightChara : "L_kengo",
    leftChara : "R_kinako",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
        setOriginCard();
    }
}

var frame4 = {
	speaker : "健吾",
	message :"そうなの？",
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
	message :"そうにゃ、挑戦状を見るにどうやら怪盗Cが\n『二つ使って』というのは『二重ループ』を使えと\n言っているようだにゃ。",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
	}
}

var frame6 = {
	speaker : "健吾",
	message :"二重ループ？\nなんか難しそう・・・。",
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
	message :"その通りにゃ！\n二重ループは難しいにゃ！\nだからボクが二重ループについて説明してあげるにゃ！",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行")
		frontChara.hide();
	}
}

var frame8 = {
	speaker : "健吾",
	message :"わーい！\nさすがきなこ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行")
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame9 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行")
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex4-3-1.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9

];