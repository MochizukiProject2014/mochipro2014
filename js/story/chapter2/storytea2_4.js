/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "よーし！\n怪盗Cの挑戦状に近づいてきた気がするぞ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo_hatena",
	animation: function(){
		console.log("frame0実行");
		frontChara.hide();
	}
}
var frame1 = {
	speaker : "健吾",
	message :"挑戦状を見返してみようっと。\n『コンソールから入力した値を３倍して、\n出力するようなプログラム』・・・。",
	rightChara : "L_kengo",
	leftChara : "R_kinako&promin_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"あと挑戦状に書いてあるわからない単語は・・・\n『出力』だけだー！\nきなこ！よろしく！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako&promin",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame3 = {
    speaker : "きなこ",
    message : "はいはい・・・。",
    rightChara : "L_kengo",
    leftChara : "R_kinako&promin_smile",
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
    rightChara : "L_kengo",
    leftChara : "R_kinako&promin_smile",
    frontChara : "F_kengo",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
        button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../ex2-4-1.php";
		});
    }
}

var frames = [
	frame0,frame1,frame2,frame3,frame4

];