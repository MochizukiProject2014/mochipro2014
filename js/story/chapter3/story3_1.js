/*
 *  メッセージは1行につき最長全角25文字。半角38文字。
 *  自動での改行は行われないので「\n」を入れる
 */

var frame0 = {
	speaker : "健吾",
	message : "どうだ怪盗C!\nついにお前からの挑戦状を解いたぞ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
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
	speaker : "怪盗C",
	message :"やっとかにゃー。\nよくやった、と褒めてやりたいところだがにゃ、",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame1実行");
		frontChara.hide();
	}
}

var frame2 = {
	speaker : "怪盗C",
	message :"あの問題はまだ序の口にゃ。\nここからが本番にゃ。\nはたしてお前に解けるかにゃ？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame2実行");
		frontChara.hide();
	}
}

var frame3 = {
    speaker : "健吾",
    message : "前回は解けたんだ！\n今回もきっと解いてやるさ！",
    rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
    animation : function(){
        console.log("frame3実行");
        frontChara.hide();
        setOriginCard(); //逆再生用
    }
}

var frame4 = {
	speaker : "怪盗C",
	message :"まあ、せいぜいそこの友達とがんばるにゃ。\nでは、この挑戦状を受け取るにゃ。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame4実行");
		frontChara.hide();
		envelope.setScale(0.6);
		envelope.setPosition(340,550);
		envelope.show();
		envelope.tweener
			.clear()
			.wait(1000)
			.moveBy(500,0,300);
	}
}

var frame5 = {
	speaker : "怪盗C",
	message :"にゃーはっはっは！\nでは、さらばにゃ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame5実行")
		frontChara.hide();
		leftChara.tweener
			.clear()
			.wait(700)
			.moveBy(-800,0,500);
	}
}

var frame6 = {
	speaker : "健吾",
	message :"くっ・・・。あれで序の口？\n今回も苦戦しそうだ・・・。",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame6実行")
		setOriginCard();
		frontChara.hide();
		leftChara.hide();
	}
}

var frame7 = {
	speaker : "健吾",
	message :"でも、君がいればきっと今回も解けるはずさ！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame7実行")
		rightChara.hide();
		leftChara.hide();
	}
}

var frame8 = {
	speaker : "健吾",
	message :"・・・って、あれ？\nきなこは？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kaitoC_smile",
	frontChara : "F_kengo_hatena",
	animation : function(){
		console.log("frame8実行")
		rightChara.hide();
		leftChara.hide();
	}
}

var frame9 = {
	speaker : "きなこ",
	message :"はぁはぁ・・・、な、なんにゃ、ここにいるにゃ。",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame9実行")
		frontChara.hide();
		leftChara.tweener
			.moveBy(-1000,0,1)
			.moveBy(1000,0,800);
	}
}

var frame10 = {
	speaker : "健吾",
	message :"どうしたの、きなこ？\n全力疾走した後みたいに息切れてるよ？",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo",
	animation : function(){
		console.log("frame10実行")
		frontChara.hide();
	}
}

var frame11 = {
	speaker : "きなこ",
	message :"な、何でもないにゃ！\nそれよりも、早く挑戦状を解くにゃ！",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame11実行")
		frontChara.hide();
	}
}

var frame12 = {
	speaker : "健吾",
	message :"？？\nじゃあ、今度こそ怪盗Cをギャフンと言わせよう！",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame12実行")
		frontChara.hide();
		setOriginCard();
	}
}

var frame13 = {
	speaker : "健吾",
	message :"今度の挑戦状は・・・なんだ、これは！？",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame13実行")
		frontChara.hide();
		takeCardOut("身長・体重によって\nその人の体型を判定せよ。\nこれができたら、\n今日のおかず「肉じゃが」は\n諦めてやろう\n\n怪盗Cより");
	}
}

var frame14 = {
	speaker : "怪盗Cからの挑戦状",
	message :"『身長・体重によって、その人の体型を判定せよ。\n　これができたら、今日のおかず「肉じゃが」は\n　諦めてやろう　　　怪盗Cより』",
	rightChara : "L_kengo_yaruki",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame14実行")
		//rightChara.hide();
		frontChara.hide();
		//leftChara.hide();
	}
}

var frame15 = {
	speaker : "健吾",
	message :"これって・・・結果は人によるってことか！？\nどうすればいいんだーー！！",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame15実行");
		setOriginCard();
		frontChara.hide();
		button.hide();
		goNext.hide();
	}
}

var frame16 = {
	speaker : "",
	message :"",
	rightChara : "L_kengo_hatena",
	leftChara : "R_kinako",
	frontChara : "F_kengo_smile",
	animation : function(){
		console.log("frame15実行");
		setOriginCard();
		frontChara.hide();
		button.show();
		goNext.show();
		button.addEventListener("pointingend", function(e) {
			document.location.href = "../chapter3.php";
		});
	}
}

var frames = [
	frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,
	frame10,frame11,frame12,frame13,frame14,frame15,frame16

];