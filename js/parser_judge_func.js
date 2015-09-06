//入力数１
function hantei_1(code,scan0,seikai){
	var scan_data = new Array;
	scan_data[0] = scan0;
	var scan_i = 0;
	var r_c = hantei_eval(code,scan_data,scan_i);
	console.log( "正解：" + seikai + "　結果：" + r_c );
	r_c = r_c.replace(/\s+/g, ""); //判定時に前後の空白文字を無視するため、空白文字を置換して削除
	if(r_c  == seikai){ return true;}
}

//入力数２
function hantei_2(code,scan0,scan1,seikai){
	var scan_data = new Array;
	scan_data[0] = scan0;
	scan_data[1] = scan1;
	var scan_i = 0;
	var r_c = hantei_eval(code,scan_data,scan_i);
	console.log( "正解：" + seikai + "　結果：" + r_c );
	if(r_c  == seikai){ return true;}
}

//入力数３
function hantei_3(code,scan0, scan1, scan2, seikai){
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
function hantei_4(code,scan0, scan1, scan2, scan3, seikai){
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

//入力数６
function hantei_6(code,scan0, scan1, scan2, scan3, scan4, scan5, seikai){
	var scan_data = new Array;
	scan_data[0] = scan0;
	scan_data[1] = scan1;
	scan_data[2] = scan2;
	scan_data[3] = scan3;
	scan_data[4] = scan4;
	scan_data[5] = scan5;
	var scan_i = 0;
	var r_c = hantei_eval(code,scan_data,scan_i);
	console.log( "正解：" + seikai + "　結果：" + r_c );
	if(r_c  == seikai){ return true;}
}

//C→jsに変換して実行
function hantei_eval(code, scan_data,scan_i){
	var break_cnt=0;
	var loop_frg=0;
	var eval_i;
	var re_eval
	for( eval_i=0;  eval_i < code.length; eval_i++){
		if(code[eval_i].match(";\,") != 0){
			code[eval_i] = String(code[eval_i]).replace(/[;][,]/g,";");
		}
		eval(code[eval_i]); 
	}
	return re_eval;
}

//条件：scanfがない
function hantei_for_eval(code,result_num){
	var scan_data = new Array;
	var scan_i=0;
	var break_cnt=0;
	var loop_frg=0;
	var eval_i;
	var re_eval
	var for_cnt = new Array; //for_cnr[1]=for文一回目のカウント
	var for_cnt_i = 0; //for文の個数
	for( eval_i=0;  eval_i < code.length; eval_i++){
		if(code[eval_i].match(";\,") != 0){
			code[eval_i] = String(code[eval_i]).replace(/[;][,]/g,";");
		}
		eval(code[eval_i]); 
	}
	console.log(result_num + "回目のfor文は" + for_cnt[result_num] +"回回りました");
	return for_cnt[result_num];
}

//条件：scanfが一つ
function hantei_for_eval_s(code,scan0,result_num){
	var scan_data = new Array;
	scan_data[0] = scan0;
	var scan_i=0;
	var break_cnt=0;
	var loop_frg=0;
	var eval_i;
	var re_eval
	var for_cnt = new Array; //for_cnr[1]=for文一回目のカウント
	var for_cnt_i = 0; //for文の個数
	for( eval_i=0;  eval_i < code.length; eval_i++){
		if(code[eval_i].match(";\,") != 0){
			code[eval_i] = String(code[eval_i]).replace(/[;][,]/g,";");
		}
		eval(code[eval_i]); 
	}
	console.log(result_num + "回目のfor文は" + for_cnt[result_num] +"回回りました");
	return for_cnt[result_num];
}