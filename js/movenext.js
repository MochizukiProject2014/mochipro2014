
function movenext111(){				//ex1-1-1専用のmovenext
	document.getElementById("movenext").innerHTML='<input type="button" value="次に進む" onclick="location.href=\'./FLASH1/story1_2.html\'"></input>';
			
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
		document.getElementById("movenext").innerHTML='<input type="image" onclick="location.href=\'./FLASH2/storytea2_1.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
		console.log("211ムーブネクスト");
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="212"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_1_3.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="213"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="221"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-2-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="222"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_3.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="231"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-3-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="232"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_4.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="241"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q2-4-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="242"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/storytea2_5.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="c2"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH2/story2_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter2.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="311"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q3-1-2.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="312"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./q3-1-3.html\'" src="img/new_button/b002.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="313"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_1.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="314"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="321"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_3.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="331"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/storytea3_4.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="331"){
		document.getElementById("movenext").innerHTML='<input type = "image" onclick="location.href=\'./FLASH3/story3_2.html\'" src="img/new_button/b004.png"></input>&nbsp;<input type = "image" onclick="location.href=\'./chapter3.html\'" src="img/new_button/b001.png"></input>';
	}
	
}
		

///////////////////