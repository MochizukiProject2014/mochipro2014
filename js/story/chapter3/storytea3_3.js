/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "これでelseの使い方がわかったぞ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
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
	message :"でも、『それ以外』で分けることはできたけど、\n条件が3つ以上ある場合は\nどうすればいいんだろう・・・？",
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
	message :"きなこ〜〜、知ってるんでしょ〜〜！\n一生のお願い！教えて〜〜。",
	rightChara : "L_kengo",
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "きなこ",
    message : "仕方ないにゃ〜。",
    rightChara : "L_kengo_smile",
    leftChara : "R_kinako",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
        button.hide();
		goNext.hide();
    }
}

var frame4 = {
    speaker : "",
    message : "",
    rightChara : "L_kengo_smile",
    leftChara : "R_kinako",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
        button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex3-3-1.php";
		});
    }
}

var frames = [
	frame0,frame1,frame2,frame3,frame4

];