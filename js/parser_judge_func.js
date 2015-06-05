//入力数２
function hantei(code,scan0,scan1,seikai){
	var scan_data = new Array;
	scan_data[0] = scan0;
	scan_data[1] = scan1;
	var scan_i = 0;
	var r_c = hantei_eval(code,scan_data,scan_i);
	console.log( "正解：" + seikai + "　結果：" + r_c );
	if(r_c  == seikai){ return true;}
}

//入力数３
function hantei(code,scan0, scan1, scan2, seikai){
	var scan_data = new Array;
	scan_data[0] = scan0;
	scan_data[1] = scan1;
	scan_data[2] = scan2;
	var scan_i = 0;
	var r_c = hantei_eval(code,scan_data,scan_i);
	console.log( "正解：" + seikai + "　結果：" + r_c );
	if(r_c  == seikai){ return true;}
}

//入力数４
function hantei(code,scan0, scan1, scan2, scan3, seikai){
	var scan_data = new Array;
	scan_data[0] = scan0;
	scan_data[1] = scan1;
	scan_data[2] = scan2;
	scan_data[3] = scan3;
	var scan_i = 0;
	var r_c = hantei_eval(code,scan_data,scan_i);
	console.log( "正解：" + seikai + "　結果：" + r_c );
	if(r_c  == seikai){ return true;}
}

//C→jsに変換して実行
function hantei_eval(code, scan_data,scan_i){
	for(var k=0; k < code.length; k++){
		var re_eval
		eval(code[k]); 
	}
	return re_eval;
}