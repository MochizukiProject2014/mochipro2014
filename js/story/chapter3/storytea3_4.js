/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "今度こそ挑戦状に挑戦だ！\n君も協力してくれるよね！",
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
	message :"うっ・・・またお腹が・・・、\nどうやら俺はプレッシャーに弱いみたいだ・・・。\nあとは君に任せたよ・・・！！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "きなこ",
	message :"またなのかにゃ・・・。",
	rightChara : "L_kengo",
	leftChara : "R_kinako_surprised",
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
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../c3-matome.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3

];