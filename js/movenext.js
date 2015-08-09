
function movenext111(){				//ex1-1-1専用のmovenext
	document.getElementById("movenext").innerHTML='<input type="button" value="次に進む" onclick="location.href=\'./story/story1_2.html\'"></input>';
			
	$(function() {
		$( "input[type=button]" )
		.button()
		.click(function( event ) {
			event.preventDefault();
		});
	});
}


function movenext(){
	console.log("ムーブネクスト実行されてます");
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="211"){
		document.getElementById("movenext").innerHTML='<input type="image" onclick="location.href=\'./story/storytea2_1.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'../chapter2/chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="212"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea2_1_3.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="213"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea2_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="221"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-2-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="222"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea2_3.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="231"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-3-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="232"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea2_4.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="241"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-4-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="242"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea2_5.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="c2"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/story2_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="311"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q3-1-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="312"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q3-1-3.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="313"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea3_1.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="314"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea3_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="321"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea3_3.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="331"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea3_4.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="c3"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/story3_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="411"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q4-1-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="412"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea4_1.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="421"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q4-2-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="422"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea4_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="431"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./c4-matome1.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="c41"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./c4-matome2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="c42"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/story4_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter4.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="511"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/storytea5_1.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter5.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="521"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q5-2-2.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter5.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="522"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./c5-matome.php\'" src="../img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter5.php\'" src="../img/new_button/b001.png"></input>';
	}
	
	if(htmlversion=="c5"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./story/story5_2.html\'" src="../img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter5.php\'" src="../img/new_button/b001.png"></input>';
	}
	
}
		

///////////////////