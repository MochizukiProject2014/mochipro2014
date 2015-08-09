/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "ふむふむ・・・\n「コンソール」と「入力」について、大体わかったぞ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "promin",
	animation: function(){
		console.log("frame0実行");
	}
}
var frame1 = {
	speaker : "健吾",
	message :"あとわからないのは・・・、\n『値を３倍して出力する』ってところかな。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "promin",
	animation : function(){
		console.log("frame1実行");
	}
}

var frame2 = {
	speaker : "きなこ",
	message :"フッ・・・、じゃあ次は計算について、\nこのボクが教えてやるにゃ。\n感謝するにゃ。",
	rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "promin", //左向きのプロミン画像なし
	animation : function(){
		console.log("frame2実行");
		button.hide();
		goNext.hide();
	}
}

var frame3 = {
    speaker : "健吾",
    message : "なんだか偉そう・・・。",
    rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "promin", //左向きのプロミン画像なし
    animation : function(){
        console.log("frame3実行");
        button.hide();
		goNext.hide();
    }
}

var frame4 = {
    speaker : "",
    message : "",
    rightChara : "L_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "promin", //左向きのプロミン画像なし
    animation : function(){
        console.log("frame3実行");
        button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex2-3-1.php";
		});
    }
}

var frames = [
	frame0,frame1,frame2,frame3,frame4

];