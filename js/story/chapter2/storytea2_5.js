/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "やっと一通りできるようになったぞー！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "promin",
	animation: function(){
		console.log("frame0実行");
	}
}
var frame1 = {
	speaker : "きなこ",
	message :"よーし、\nじゃあ怪盗Cからの挑戦状を解いてみるにゃ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "promin", //プロミンの左向き画像なし
	animation : function(){
		console.log("frame1実行");
	}
}

var frame2 = {
	speaker : "健吾",
	message :"望む所だ！！\nあっ・・・急にお腹が痛くなってきた・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako_smile",
	frontChara : "promin", //プロミンの左向き画像なし
	animation : function(){
		console.log("frame2実行");
	}
}

var frame3 = {
    speaker : "きなこ",
    message : "ええーーー！！！",
    rightChara : "L_kengo_yaruki",
    leftChara : "R_kinako_surprised",
    frontChara : "promin",
    animation : function(){
        console.log("frame3実行");
    }
}

var frame4 = {
	speaker : "健吾",
	message :"こんな挑戦状、\nすぐに解くことができるのに・・・！",
	rightChara : "L_kengo_yaruki",
    leftChara : "R_kinako_surprised",
    frontChara : "promin",
	animation : function(){
		console.log("frame4実行");
	}
}

var frame5 = {
	speaker : "健吾",
	message :"よし、あとは君に任せたよ！",
	rightChara : "F_kengo",
	leftChara : "R_kinako_surprised",
    frontChara : "promin",
	animation : function(){
		console.log("frame5実行");
		button.hide();
		goNext.hide();
	}
}

var frame6 = {
	speaker : "きなこ",
	message :"やれやれにゃ・・・。",
	rightChara : "F_kengo",
	leftChara : "F_kinako",
	frontChara : "promin", //左向きプロミン画像なし
	animation : function(){
		console.log("frame6実行");
		button.hide();
		goNext.hide();
	}
}

var frame7 = {
	speaker : "",
	message :"",
	rightChara : "F_kengo",
	leftChara : "F_kinako",
	frontChara : "promin", //左向きプロミン画像なし
	animation : function(){
		console.log("frame6実行");
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../c2-matome.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7

];