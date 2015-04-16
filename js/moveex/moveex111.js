function movenextex(){
	document.getElementById("movenext").innerHTML='<input type="button" value="次に進む！" onclick="location.href=\'./FLASH1/story1_2.html\'"></input>&nbsp;<input type="button" value="問題選択画面へ" onclick="location.href=\'./chapter1.html\'"></input>';
			
	$(function() {
		$( "input[type=button]" )
		.button()
		.click(function( event ) {
			event.preventDefault();
		});
	});
	
	$.removeCookie("questioncount");
	$.cookie("questioncount",1);

}