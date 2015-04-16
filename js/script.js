 $(function() {
$( "#menu" ).menu();
});


$(function(){
	$(".title-box").accordion({
	collapsible: true
	});
});

// $(function(){
//     $(".dic-text").accordion({
//     heightStyle: "content"
//     });
// });

$(function() {
$( "input[type=button]" )
.button()
.click(function( event ) {
event.preventDefault();
});
});

$(function() {
    $('.tab li').click(function() {
        var index = $('.tab li').index(this);
        $('.content li').css('display','none');
        $('.content li').eq(index).css('display','block');
        $('.tab li').removeClass('select');
        $(this).addClass('select')
    });
});


/*$(function() {
$( ".anime-box" ).tabs();
});*/

$(function() {
 $( "#play" ).button({
text: false,
icons: {
primary: "ui-icon-pause"
}
})
.click(function() {
var options;
if ( $( this ).text() === "play" ) {
options = {
label: "pause",
icons: {
primary: "ui-icon-play"
}
};
} else {
options = {
label: "play",
icons: {
primary: "ui-icon-pause"
}
};
}
$( this ).button( "option", options );
});
$( "#stop" ).button({
text: false,
icons: {
primary: "ui-icon-stop"
}
})
.click(function() {
$( "#play" ).button( "option", {
label: "play",
icons: {
primary: "ui-icon-play"
}
});
});
$( "#fast" ).button({
text: false,
icons: {
primary: "ui-icon-seek-next"
}
});
});

$(function() {
    $( "#dialog-message" ).dialog({
    width: 800, 
      modal: true,
      buttons: {
        OK: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  });
  
function tabplay(){
$(function() {
 	var index1 = 0;
 		//コンテンツを一度すべて非表示にし、
	$('.content li').css('display','none');
		//クリックされたタブと同じ順番のコンテンツを表示します。
	$('.content li').eq(index1).css('display','block');
		//一度タブについているクラスselectを消し、
	$('.tab li').removeClass('select');
		//クリックされたタブのみにクラスselectをつけます。
	$(this).addClass('select');
	});
}

$(function() {
 $( "#f" ).selectmenu({
change: function( event, data ) {
ANIME_changeSPEED();
}
});
 });


/*$(function () {
    $(document).keydown(function(event){
        // クリックされたキーコードを取得する
        var keyCode = event.keyCode;
        // バックスペースキーを制御する
        if(keyCode == 8){
            console.log("Backspace");
            return false;
        }
	});
});*/

function click_emu(){
	var elem = document.getElementById("click_data");
	if(elem!=null){
		if( document.all ){
			elem.fireEvent( "onclick" );
		}
	}else{
		var evnt = document.createEvent( "MouseEvents" );
		evnt.initEvent( "click", false, true );
		elem.dispatchEvent( evnt );
	}
}

$(function() {
    var topBtn = $('#page-top');   
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
