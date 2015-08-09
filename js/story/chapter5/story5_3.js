/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "よし、わかった！\n答えは「1092」だ！\nこの答えが示す場所は・・・どこ？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation: function(){
		console.log("frame0実行");
		leftChara.hide();
		rightChara.hide();
	}
}
var frame1 = {
	speaker : "健吾",
	message :"番地・・・じゃないだろうし、\n建物の名前かな？\nでも、こんな名前の建物知らないしなぁ・・・。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		leftChara.hide();
		rightChara.hide();
	}
}

var frame2 = {
	speaker : "健吾",
	message :"ん？「10・9・2」で読んでみろ？\nえ～と「じゅう・く・に」？\n読み方を変える？",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame2実行");
		leftChara.hide();
		rightChara.hide();
	}
}

var frame2_5 = {
    speaker : "健吾",
    message : "「てん・ないん・つー」、\n「とお・く・に」、\n「とお・く・つ」・・・、",
    rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
    animation : function(){
        console.log("frame3実行");
        leftChara.hide();
		rightChara.hide();
    }
}

var frame3 = {
    speaker : "健吾",
    message : "そうか！わかった！\n「10(どう)・9(く)・2(つ)」で\n洞窟だ！",
    rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
    animation : function(){
        console.log("frame3実行");
        leftChara.hide();
		rightChara.hide();
    }
}

var frame4 = {
	speaker : "健吾",
	message :"じゃあ、さっそく洞窟に向かうよ！",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame4実行");
		leftChara.hide();
		rightChara.hide();
	}
}

var frame5 = {
	speaker : "健吾",
	message :"・・・ってあれ？きなこがいない・・・。\nもしかしたら先に行ったのかな？\nとりあえず僕たちも行こう！",
	rightChara : "F_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo_hatena",
	animation : function(){

		//逆再生用に背景を公園に再度設定
		background.image = "park"

		console.log("frame5実行");
		leftChara.hide();
		rightChara.hide();
	}
}

var frame6 = {
	speaker : "健吾",
	message :"誰もいない・・・。\nここで合ってる・・・よな？",
	rightChara : "F_kengo",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame6実行");

		//背景の変更
		background.image = "dokutsu"

		leftChara.hide();
		rightChara.hide();
		frontChara.tweener
			.clear()
			.fadeOut(1)
			.wait(500)
			.fadeIn(500);
	}
}

var frame7 = {
	speaker : "怪盗C",
	message :"よくここまでたどり着いたにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行");
		frontChara.hide();
	}
}

var frame8 = {
	speaker : "健吾",
	message :"！？\n怪盗C！？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame8実行");
		frontChara.hide();
	}
}

var frame9 = {
	speaker : "怪盗C",
	message :"ここまで君がC言語をできるようになるなんて夢にも\n思わなかったにゃ。\nだいぶお友達の力を借りたようだがにゃ。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行");
		frontChara.hide();
	}
}

var frame10 = {
	speaker : "健吾",
	message :"約束だぞ怪盗C\nお前の正体を教えろ！\nお前はいったい何者なんだ！？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame10実行");
		frontChara.hide();
	}
}

var frame11 = {
	speaker : "怪盗C",
	message :"もちろん教えるにゃ。\n私は・・・、ボクは・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame11実行");
		frontChara.hide();
	}
}

var frame12 = {
	speaker : "健吾",
	message :"！？",
	rightChara : "L_kengo_surprised",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame12実行");
		frontChara.hide();
		leftChara.tweener
			.clear()
			.fadeOut(300)
			.call(function(){
				leftChara.image="R_kinako";
			})
			.fadeIn(300)
	}
}

var frame12_5 = {
	speaker : "健吾",
	message :"きなこ！？\nきなこが怪盗Cだったの！？",
	rightChara : "L_kengo_surprised",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame12実行");
		frontChara.hide();
	}
}

var frame13 = {
	speaker : "きなこ",
	message :"そうにゃ。\n健吾にC言語を教えるために怪盗Cに扮して\n挑戦状を出していたにゃ。",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame13実行");
		frontChara.hide();
	}
}

var frame14 = {
	speaker : "健吾",
	message :"何のために・・・？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame14実行");
		frontChara.hide();
	}
}

var frame15 = {
	speaker : "きなこ",
	message :"健吾のおじいさんとの約束にゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行");
		frontChara.hide();
	}
}

var frame16 = {
	speaker : "きなこ",
	message :"昔あの人から『自分が死んだら、もう健吾にC言語を教えて\nやれない。だから代わりにお前が教えてやってくれ。」\nと頼まれていたにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame16実行");
		frontChara.hide();
	}
}

var frame17 = {
	speaker : "健吾",
	message :"おじいちゃん・・・。",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame17実行");
		frontChara.hide();
	}
}

var frame18 = {
	speaker : "きなこ",
	message :"これで約束は守れたにゃ。\nボクはもう・・・、お役ごめんにゃ。",
	rightChara : "L_kengo",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame18実行");
		frontChara.hide();
	}
}

var frame19 = {
	speaker : "健吾",
	message :"そんな・・・、\nボクはまだきなことC言語勉強したいよ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame19実行");
		frontChara.hide();
	}
}

var frame20 = {
	speaker : "きなこ",
	message :"けんご・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame20実行");
		frontChara.hide();
	}
}

var frame21 = {
	speaker : "健吾",
	message :"ここまでやってきて、ようやくプログラミングの楽しさが\nわかってきたんだ！\nだからこれからも僕に挑戦状を出してよ！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame21実行");
		frontChara.hide();
	}
}

var frame22 = {
	speaker : "きなこ",
	message :"・・・わかったにゃ。\nこれからも挑戦状を出してあげるにゃ。",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame22実行");
		frontChara.hide();
	}
}

var frame22_5 = {
	speaker : "きなこ",
	message :"ただし、解けなかったら夕飯のおかずはもらうにゃ！\n覚悟はいいにゃ！？",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame22実行");
		frontChara.hide();
	}
}

var frame23 = {
	speaker : "健吾",
	message :"もちろん！\n望むところだ、きなこ！\nいや・・・、怪盗C！！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame23実行");
		frontChara.hide();
	}
}

var frame24 = {
	speaker : "健吾",
	message :"・・・ん？ちょっと待って、きなこ。\n僕にC言語教えるだけなら、\n夕飯のおかず盗む必要無いよね？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame24実行");
		frontChara.hide();
	}
}

var frame25 = {
	speaker : "きなこ",
	message :"(ぎくっ！！)\nそ、そんなことないにゃ！\n健吾をその気にさせるには必要だったにゃ！",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame25実行");
		frontChara.hide();
	}
}

var frame26 = {
	speaker : "健吾",
	message :"そんなこと言って、\n実はおかず食べたかっただけなんじゃないの～？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame26実行");
		frontChara.hide();
	}
}

var frame27 = {
	speaker : "きなこ",
	message :"(ぎくぎくっ！！)\nそ、そんなわけないにゃ！\nあ、ボク用事を思い出したにゃ！先に家に帰るにゃ！",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame27実行");
		frontChara.hide();
		leftChara.tweener
			.clear()
			.wait(1000)
			.moveBy(-1000,0,1000)
	}
}

var frame28 = {
	speaker : "健吾",
	message :"あ、こら待て！\n僕のおかず返せ～！！",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame28実行");
		frontChara.hide();
		leftChara.hide();
		rightChara.tweener
			.clear()
			.wait(500)
			.moveBy(-2000,0,1500)
		button.hide();
		goNext.hide();
	}
}

var frame29 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_smile",
	leftChara : "R_kinako_surprised",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame28実行");
		frontChara.hide();
		leftChara.hide();
		rightChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter5.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame2_5,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10,
	frame11,frame12,frame12_5,frame13,frame14,frame15,frame16,frame17,frame18,frame19,frame20,
	frame21,frame22,frame22_5,frame23,frame24,frame25,frame26,frame27,frame28,frame29

];