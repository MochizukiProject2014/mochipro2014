var SCREEN_WIDTH  = 1200;
var SCREEN_HEIGHT = 960;
var MESSAGE_WIDTH = 1200;
var MESSAGE_HEIGH = 300;
var rightChara = null;
var leftChara = null;
var frontChara = null;
var updateCounter = 0;
var currentFrame = 0;
var clickCount = 0;
var background = null;
var frontDefaultX = 600;
var frontDefaultY = 450;
var futa = null;;
var envelope = null;
var futaTop = 200;
var card = null;
var chosenzyo = null;
var chosenMessage = null;
var goNext=null;
var button = null;


var ASSETS = {
	"washitsu" : "../../storyImg/background01.jpg",
    "park" : "../../storyImg/background02.jpg",
    "dokutsu" : "../../storyImg/background05.png",

	"L_kengo" : "../../storyImg/L_kengo.png",
    "L_kengo_smile" : "../../storyImg/L_kengo_smile.png",
    "L_kengo_yaruki" : "../../storyImg/L_kengo_yaruki.png",
    "L_kengo_surprised" : "../../storyImg/L_kengo_surprised.png",
    "L_kengo_hatena" : "../../storyImg/L_kengo_hatena.png",
    "F_kengo" : "../../storyImg/F_kengo.png",
    "F_kengo_hatena" : "../../storyImg/F_kengo_hatena.png",
    "F_kengo_smile" : "../../storyImg/F_kengo_smile.png",
    "F_kengo_surprised" : "../../storyImg/F_kengo_surprised.png",

    "L_kokengo" : "../../storyImg/L_kokengo.png",
    "L_kokengo_smile" : "../../storyImg/L_kokengo_smile.png",
    "L_kokengo_hatena" : "../../storyImg/L_kokengo_hatena.png",

	"oji" : "../../storyImg/R_oji.png",

    "R_kaitoC" : "../../storyImg/R_kaitoC.png",
    "R_kaitoC_smile" : "../../storyImg/R_kaitoC_smile.png",

    "R_kinako" : "../../storyImg/R_kinako.png",
    "R_kinako_smile" : "../../storyImg/R_kinako_smile.png",
    "R_kinako_surprised" : "../../storyImg/R_kinako_surprised.png",
    "F_kinako" : "../../storyImg/F_kinako.png",


    "R_kinako&promin" : "../../storyImg/R_promin&kinako.png",
    "R_kinako&promin_smile" : "../../storyImg/R_promin&kinako_smile.png",

    "promin" : "../../storyImg/promin.png",

    "kaitoC_logo" : "../../storyImg/kaitoC_logo.png",    

}

// main
tm.main(function() {
    // キャンバスアプリケーションを生成
    var app = tm.display.CanvasApp("#world");
    // リサイズ
    app.resize(1200, 960);
    // ウィンドウにフィットさせる
    app.fitWindow();


    app.background="white";
    
    // ローダーで画像を読み込む
    var loading = tm.ui.LoadingScene({
        assets: ASSETS,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    });
    
    // 読み込み完了後に呼ばれるメソッドを登録
    loading.onload = function() {
        // メインシーンに入れ替える
        var scene = MainScene();
        app.replaceScene(scene);
    };
    // ローディングシーンに入れ替える
    app.replaceScene(loading);

    // 実行
    app.run();
});

// シーンを定義
tm.define("MainScene", {
    superClass: "tm.app.Scene",
    
    init: function() {
        this.superInit();

        //背景画像を設置（和室）
        background = tm.display.Sprite("park").addChildTo(this);
        this.bg = background;//tm.display.Sprite("park").addChildTo(this);
        this.bg.origin.set(0, 0.078);

        //右キャラクター
        rightChara = tm.display.Sprite("L_kengo");
        rightChara.setPosition(900,450);
        //rightChara.setScale(1,1) //キャラクター画像の大きさ（x倍,y倍)
        rightChara.addChildTo(this);

        //左キャラクター
        leftChara = tm.display.Sprite("R_kinako");
        leftChara.setPosition(300,450);
        //rightChara.setScale(1,1) //キャラクター画像の大きさ（x倍,y倍)
        leftChara.addChildTo(this);

        //中央キャラクター
        frontChara = tm.display.Sprite(frames[0].frontChara);
        frontChara.setPosition(frontDefaultX,frontDefaultY);
        rightChara.setScale(1,1) //キャラクター画像の大きさ（x倍,y倍)
        frontChara.addChildTo(this);

        //メッセージボックスを設置
        var messageBox = tm.display.RoundRectangleShape(1200,200,{
        	fillStyle: "lightGray",//"#337733",
            strokeStyle: "black",//"#003300",
            lineWidth: 3      
        }).addChildTo(this)
        messageBox.setPosition(SCREEN_WIDTH/2, 835);
        //messageBox.alpha= 0.5; //半透明にする

        //スピーカーボックスを設置(メッセージの話者名を入れる）
        var speakerBox = tm.display.RoundRectangleShape(400,70,{
        	fillStyle: "lightgreen",
            strokeStyle: "#003300",
            lineWidth: 3      
        }).addChildTo(this)
        speakerBox.setPosition(200,700);
		speakerBox.alpha= 0.6; //半透明にする

        //点滅する三角形
        var nextTriangle = tm.display.Shape(50,50);
        nextTriangle.canvas.setFillStyle("black");
        nextTriangle.canvas.fillTriangle(0,0,50,0,25,43);
        nextTriangle.canvas.lineWidth=3;
        //nextTriangle.canvas.setStrokeStyle("white");
        //nextTriangle.canvas.strokeTriangle(0,0,50,0,25,43);
        nextTriangle.setPosition(1140,885);
        nextTriangle.addChildTo(this);

        var preTriangle = tm.display.Shape(50,50);
        preTriangle.canvas.setFillStyle("black");
        preTriangle.canvas.fillTriangle(25,0,0,43,50,43);
        preTriangle.canvas.lineWidth=3;
        //nextTriangle.canvas.setStrokeStyle("white");
        //nextTriangle.canvas.strokeTriangle(0,0,50,0,25,43);
        preTriangle.setPosition(1140,785);
        preTriangle.addChildTo(this);
        preTriangle.hide();

        //話者
        var speaker = tm.display.Label(frames[0].speaker);
		speaker.setSize(200,50);
        speaker.setPosition(200,700);
        speaker.setFillStyle("black");
        speaker.setFontSize(45);
        speaker.addChildTo(this);

		//メッセージ
        var message = tm.display.Label(frames[0].message.charAt(0));
        message.setSize(1100,290);
        message.setPosition(27.5,760);
        message.setAlign("left").setBaseline("top");
        message.setFillStyle("black");
        message.setFontSize(40);
        message.addChildTo(this);
        playMessage();
        playFrame();

        //挑戦状の封筒
        envelope = tm.display.Shape(300,300);
        envelope.canvas.setFillStyle("white");
        envelope.canvas.fillRect(0,100,300,200);
        envelope.canvas.lineWidth=10;
        envelope.canvas.setStrokeStyle("black");
        envelope.canvas.strokeRect(5,95,290,200);
        envelope.setPosition(600,400); //中央にセット
        //envelope.setPosition(1500,400); //右側で待機
        envelope.addChildTo(this);
        envelope.setScale(0.8);
        envelope.hide(); //デフォルトは非表示

        card = tm.display.Shape(300,200);
        card.canvas.clearColor("white");
        card.canvas.lineWidth=10;
        card.canvas.strokeRect(0,0,300,200);
        card.addChildTo(envelope);
        card.setPosition(0,50);

        //封筒の前面
        var envelopeParts = tm.display.Shape(300,200);
        envelopeParts.canvas.setFillStyle("white"); //塗りつぶしカラーの設定
        envelopeParts.canvas.fillRect(0,20,300,200); 
        envelopeParts.canvas.fillTriangle(0,0,0,200,600,300);
        envelopeParts.canvas.fillTriangle(300,0,300,300,-250,300);
        envelopeParts.canvas.setStrokeStyle("black");
        envelopeParts.canvas.lineWidth=5;
        envelopeParts.canvas.drawLine(0,0,40,20)
        envelopeParts.canvas.drawLine(300,0,264,20)
        envelopeParts.canvas.drawLine(40,20,265,20);
        envelopeParts.canvas.lineWidth=10;
        envelopeParts.canvas.drawLine(0,0,0,200);
        envelopeParts.canvas.drawLine(0,200,300,200);
        envelopeParts.canvas.drawLine(300,200,300,0);
        envelopeParts.addChildTo(envelope);
        envelopeParts.addChildTo(envelope);
        envelopeParts.setPosition(0,50);

        //封筒のフタ（？）の描画
        futa = tm.display.Shape(300,210);
        //futa.canvas.clearColor("blue"); //デバッグ用にcanvas全体を青に設定
        futa.addChildTo(this);
        futa.canvas.setFillStyle("white");
        futa.canvas.fillTriangle(0,100,300,100,150,futaTop);
        futa.canvas.setStrokeStyle("black");
        futa.canvas.lineWidth=5;
        futa.canvas.strokeTriangle(0,100,300,100,150,futaTop);
        futa.addChildTo(envelope);
        futa.setPosition(0,-50);
        //openEnvelope()
        //closeEnvelope()

        //挑戦状
        chosenzyo = tm.display.Shape(550,450);
        chosenzyo.canvas.clearColor("white");
        //chosenzyo.setPosition(envelope.x,envelope.y);
        chosenzyo.setPosition(600,-700);
        chosenzyo.setAlpha(1);
        chosenzyo.canvas.lineWidth=30;
        chosenzyo.canvas.strokeRect(0,0,550,450);
        chosenzyo.addChildTo(this);
        chosenzyo.hide();

        var logo = tm.display.Sprite("kaitoC_logo");
        logo.setAlpha(0.2);
        logo.addChildTo(chosenzyo);

        //挑戦状メッセージ
        chosenMessage = tm.display.Label("てすと");
        chosenMessage.setSize(550,450);
        chosenMessage.setFontFamily("'ＭＳ Ｐ明朝','MS PMincho','ヒラギノ明朝 ProN W3','Hiragino Mincho ProN'");
        //chosenMessage.setPosition(chosenzyo.x,chosenzyo.y);
        chosenMessage.setAlign("left").setBaseline("top");
        chosenMessage.setFillStyle("black");
        chosenMessage.setFontSize(35);
        chosenMessage.setHeight(10);
        chosenMessage.addChildTo(chosenzyo)
        chosenMessage.setPosition(-240,-150);

        goNext = tm.display.Shape(1200, 935);
        goNext.canvas.clearColor("black");
        goNext.setPosition(600,465);
        goNext.setAlpha(0.6);
        goNext.addChildTo(this);

        button = tm.app.GlossyButton(400,200,"blue", "次へ進む！");
        button.addChildTo(this);
        button.position.set(600,450);
        //button.setAlpha(1)
        goNext.hide();
        button.hide();


        //グローバルメニュー用の背景(?)
        var grobalMenu = tm.display.Shape(2000,150);
        grobalMenu.canvas.clearColor("white");
        grobalMenu.setAlpha(0.45);
        grobalMenu.canvas.lineWidth=5;
        grobalMenu.canvas.strokeRect(0,0,2000,150);
        grobalMenu.addChildTo(this);
        grobalMenu.setPosition(600,0);

        //グローバルメニュー（TOP)
        var LINK_top = tm.app.LabelButton("TOP");
        LINK_top.setFillStyle("black");
        LINK_top.setFontSize(30);
        LINK_top.setPosition(50,40)
        LINK_top.addEventListener("pointingend", function(e) {
            document.location.href = document.getElementById("top").innerHTML;
        });
        LINK_top.addChildTo(this);

        //グローバルメニュー用の">"1こめ
        var menuBar1 = tm.app.Label(">");
        menuBar1.setAlpha(0.7);
        menuBar1.setFillStyle("#454545");
        menuBar1.setFontSize(30);
        menuBar1.setPosition(100,37);
        menuBar1.addChildTo(this);

        //グローバルメニュー（MENU)
        var LINK_menu = tm.app.LabelButton("MENU");
        LINK_menu.setFillStyle("black");
        LINK_menu.setFontSize(30);
        LINK_menu.setPosition(160,40)
        LINK_menu.addEventListener("pointingend", function(e) {
            document.location.href = document.getElementById("menu").innerHTML;
        });
        LINK_menu.addChildTo(this);

        //グローバルメニュー（章メニュー) 
        if(document.getElementById("chapterTitle") && document.getElementById("chapterMenu")){
            //グローバルメニュー用の">"2こめ
            var menuBar2 = tm.app.Label(">");
            menuBar2.setAlpha(0.7);
            menuBar2.setFillStyle("#454545");
            menuBar2.setFontSize(30);
            menuBar2.setPosition(225,37);
            menuBar2.addChildTo(this);

            var LINK_chapterMenu = tm.app.LabelButton(document.getElementById("chapterTitle").innerHTML);
            LINK_chapterMenu.setFillStyle("black");
            LINK_chapterMenu.setFontSize(30);
            LINK_chapterMenu.setPosition(320,40)
            LINK_chapterMenu.addEventListener("pointingend", function(e) {
                document.location.href = document.getElementById("chapterMenu").innerHTML;
            });
            LINK_chapterMenu.addChildTo(this);
        }       


        //画面内をクリックされたときの動き
        this.addEventListener("pointingend", function(e) {           
            //console.log("x="+e.pointing.x+" ,y="+e.pointing.y);
            //▼をクリックしたら次のフレームへ
            //if(e.pointing.x>600 && currentFrame<=frames.length-1){
            if(currentFrame<=frames.length-1&& e.pointing.x>1090 && e.pointing.x<1180&& e.pointing.y>850 && e.pointing.y<920){
                //全文表示してなかったら全文表示する（フレームはすすめない）
                if(message.text !== frames[currentFrame].message){
                    clearInterval(ID);
                    message.text = frames[currentFrame].message;
                //全文表示されてたらフレーム進める
                }else if(currentFrame<frames.length-1){
                    currentFrame++;
                    setOrigin()
                    playFrame();
                    clearInterval(ID);
                    playMessage();
                }
                preTriangle.show();
                if(currentFrame>=frames.length-1){
                    nextTriangle.hide();
                }

            //▲をクリックしたら前のフレームへ
            }else if(currentFrame>0&& e.pointing.x>1090 && e.pointing.x<1180 && e.pointing.y>740 && e.pointing.y<830){
                currentFrame--;
                setOrigin();
                playFrame();
                clearInterval(ID);
                //playMessage();
                message.text = frames[currentFrame].message;
                nextTriangle.show();
                if(currentFrame<=0){
                    preTriangle.hide();
                }
            }

            //初期状態に戻す(フレーム移動前に使用)
            function setOrigin(){
                rightChara.setPosition(900,450);
                rightChara.setScale(1,1);
                rightChara.show();
                rightChara.tweener.clear();
                rightChara.setAlpha(1);

                leftChara.setPosition(300,450);
                leftChara.setScale(1,1);
                leftChara.show();
                leftChara.tweener.clear();
                leftChara.setAlpha(1);

                frontChara.setPosition(frontDefaultX,450);
                frontChara.setScale(1,1);
                frontChara.show();
                frontChara.tweener.clear();
                frontChara.setAlpha(1);

                //nextTriangle.hide();
            }
        });

        //メッセージを１文字ずつ表示する
        function playMessage(){
                var num = 1;
                ID=setInterval(function(){
                //console.log("とまらん");
                    message.text = message.text+frames[currentFrame].message.charAt(num);
                    num++;
                    //全文表示し終わったらループを止め、点滅する三角形を表示する
                    if(num==frames[currentFrame].message.length){
                        clearInterval(ID);
                        nextTriangle.show();
                    }
                },50);
        }

        //フレームの情報を流し込んで実行する
        function playFrame(){
            message.text=frames[currentFrame].message;
            message.text = frames[currentFrame].message.charAt(0);
            speaker.text=frames[currentFrame].speaker;
            rightChara.image=frames[currentFrame].rightChara;
            leftChara.image=frames[currentFrame].leftChara;
            frontChara.image=frames[currentFrame].frontChara;
            frames[currentFrame].animation();
        }

        function changeBackGround(img){
            if(img==="dokutsu"){
                this.dokutsu = tm.display.Sprite("washitu").addChildTo(this);
                this.dokutsu.origin.set(0, 0.078);
            }
        }

        //メインシーン更新処理
        this.update = function(app) {
           /*updateCounter++;

            //三角形の点滅処理
            if(updateCounter<20){
                nextTriangle.setAlpha(1);
            }else{
                nextTriangle.setAlpha(0);
            }
            if(updateCounter===40){
                updateCounter=0;
            }*/
        };

    },
});

function closeEnvelope(){
    var futaClose = setInterval(function(){
        if(futaTop >= 200){
            clearInterval(futaClose);
        }else{
            futaTop += 20;
            futa.canvas.clear();
            //futa.canvas.clearColor("blue");
            futa.canvas.fillTriangle(0,100,300,100,150,futaTop);
            futa.canvas.strokeTriangle(0,100,300,100,150,futaTop);
        }
    },20)
}
        

function openEnvelope(){
    var futaOpen = setInterval(function(){
        if(futaTop <= 0){
            clearInterval(futaOpen);
        }else{
            futaTop -= 20;
            futa.canvas.clear();
            //futa.canvas.clearColor("blue");
            futa.canvas.fillTriangle(0,100,300,100,150,futaTop);
            futa.canvas.strokeTriangle(0,100,300,100,150,futaTop);
        }
    },20)
}

function takeCardOut(msg){
    setOriginCard()
    envelope.show();
    chosenzyo.show();
    chosenzyo.setPosition(600,-1200);
    card.setPosition(0,50);
    envelope.tweener
        .clear()
        .move(1200,400,1)
        .move(600,400,300)
        .call(function(){
            openEnvelope()
            card.tweener
                .clear()
                .wait(300)
                .move(0,-1200,300)
                .wait(500)
                .call(function(){
                    readCard(msg);
                })
        })
}

function readCard(message){
    chosenMessage.text = message;
    chosenzyo.tweener
        .clear()
        .move(600,400,300)
}

function setOriginCard(){
    futaTop=200;
    futa.canvas.clear();
    futa.canvas.fillTriangle(0,100,300,100,150,futaTop);
    futa.canvas.strokeTriangle(0,100,300,100,150,futaTop);
    envelope.tweener.clear()
    card.tweener.clear()
    chosenzyo.tweener.clear();
    envelope.hide();
    chosenzyo.hide();
    envelope.setScale(1);
    card.setScale(1);
    chosenzyo.setScale(1);
    card.setPosition(0,50);
    envelope.setPosition(600,400); //中央にセット
    chosenzyo.setPosition(600,400);
}
