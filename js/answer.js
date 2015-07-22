function answer_check(num){
	console.log(num+"の正誤判定に入ります。");
	var version = Number(num),re;
	var answer_pattern_array = [];
	var flagArr = [];
	var index = 0;
	var apalen = user_pattern_array.length;
	for(var i = 0;i < apalen;i++)console.log(user_pattern_array[i]);
	switch(version){
		case 211:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("double","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2111:
			re = new RegExp(/duplication_judge\("char","z",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2112:
			re = new RegExp(/plural_declaration\("int","(x,y)|(y,x)"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 212:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","10"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2121:
			re = new RegExp(/duplication_judge\("double","y",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("y","3\.2"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2122:
			re = new RegExp(/duplication_judge\("char","a",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("a","s"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 213:
			re = new RegExp(/duplication_judge\("double","a","5\.5"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 221:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,5\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 222:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("double","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/newscanfnext\(x,15\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(y,5\.5\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 231:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x","%d"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","x:\+:3"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 232:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","y",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","z",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,\d\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(y,\d\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("z","x:\+:y"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 241:
			re = new RegExp(/newscanfnext\((\w+),\d\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("(\w+)","%."\)/);answer_pattern_array.push(re);
			flagArr.push(adjustable_check(user_pattern_array,answer_pattern_array));
		break;
		case 242:
			re = new RegExp(/duplication_judge\("double","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("char","y",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("x","%."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("y","%."\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 311:
			re = new RegExp(/if_js\("x > 20"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("xは20より大きいです"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 312:
			re = new RegExp(/duplication_judge\("int","x","12"\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","y","20"\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("x < y"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("xはyより小さいです")/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 313:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x","%d"\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("x != 0"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("xは0ではないです")/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 314:
			re = new RegExp(/plural_duplication\("double","height,weight,bmi"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("bmi","weight:\/:\(:height:\*:height:\)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("(bmi >= 18\.5 && bmi <= 25\.0)|(bmi >= 18\.5 && 25\.0 >= bmi)|(18\.5 <= bmi && bmi <= 25\.0)|(18\.5 <= bmi && 25\.0 >= bmi)|(bmi <= 25\.0 && bmi >= 18\.5)|(bmi <= 25\.0 && 18\.5 <= bmi)|(25\.0 >= bmi && bmi >= 18\.5)|(25\.0 >= bmi && 18\.5 <= bmi)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/あなたは適正です。/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 321:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,\d\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("(x >= 20)|(20 <= x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("あなたは成人です。")/);answer_pattern_array.push(re);
			re = new RegExp(/else_js\(\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("あなたは未成人です。")/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 331:
			re = new RegExp(/duplication_judge\("int","score",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(score,\d\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("(score >= 20)|(20 <= score)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("良")/);answer_pattern_array.push(re);
			re = new RegExp(/else_if_js\("(score < 90 && score >= 60)|(score < 90 && 60 <= score)|(90 > score && score >= 60)|(90 > score && 60 <= score)|(score >= 60 && score < 90)|(score >= 60 && 90 > score)|(60 <= score && 90 > score)|(60 <= score && score < 90)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("可")/);answer_pattern_array.push(re);
			re = new RegExp(/else_if_js\("(score < 60 && score >= 60)|(score < 60 && 40 <= score)|(60 > score && score >= 40)|(60 > score && 40 <= score)|(score >= 40 && score < 60)|(score >= 40 && 60 > score)|(40 <= score && 60 > score)|(40 <= score && score < 60)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("再試験")/);answer_pattern_array.push(re);
			re = new RegExp(/else_js\(\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("不可")/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
		break;
		case 3:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,1,18.49, "やせ気味") != true){ miss_answer("計算と条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,1,25.01,"太り気味") != true){ miss_answer("計算と条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,1, 18.5,"適正") != true){ miss_answer("「18.5以上」は18.5も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code, 1, 25,"適正") != true){ miss_answer("「25.0以下」は25.0も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 411:
			re = new RegExp(/duplication_judge\(.+,"a",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,a,1","a <= 3","a:\+:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("わんわん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 412:
			re = new RegExp(/duplication_judge\(.+,"b",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,b,3","b >= 1","b:-:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("にゃんにゃん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 421:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,1, 2,"終了") != true){ miss_answer("4-2-1不正解！"); return 0;}
			else if( hantei_3(user_code,1,1,4,"終了") != true){ miss_answer("4-2-1不正解！"); return 0;}
			else if( hantei_4(user_code,1, 1, 1, 6, "終了") != true){ miss_answer("4-2-1不正解！"); return 0;}
			else if( hantei_2(user_code, 1, 8,"終了") != true){ miss_answer("4-2-1不正解！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 422:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_3(user_code, 1, 99, 1, "100を超えました。101です。") != true){ miss_answer("4-2-2不正解！"); return 0;}
			else if( hantei_3(user_code,10,20,77,"100を超えました。107です。") != true){ miss_answer("4-2-2不正解！"); return 0;}
			else if( hantei_2(user_code,99, 99, "100を超えました。198です。") != true){ miss_answer("4-2-2不正解！"); return 0;}
			else if( hantei_3(user_code, 12, 34, 56, "100を超えました。102です。") != true){ miss_answer("4-2-2不正解！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 431:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","i",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","k",.+\)/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
			re = new RegExp(/for.+i/);answer_pattern_array.push(re);
			re = new RegExp(/for.+k/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","(i:*:k)|(k:*:i)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("\\\\n"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			temp = getPatternLine(user_pattern_array,answer_pattern_array,temp);flagArr.push(temp);
		break;
		case 4:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_3(user_code,1, 99, 0,"合計は100です") != true){ miss_answer("４章まとめ不正解！"); return 0;}
			else if( hantei_4(user_code,10,20,77,0,"合計は107です") != true){ miss_answer("４章不正解！"); return 0;}
			else if( hantei_3(user_code,99, 99,0, "合計は198です") != true){ miss_answer("４章不正解！"); return 0;}
			else if( hantei_4(user_code, 12, 34, 56, 0, "合計は102です") != true){ miss_answer("４章不正解！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 42:
			var temparr = document.getElementById("console").value.split("\n");
			var str = "*";
			var len = temparr.length;
			for(var i = 0;i < len;i++)if(temparr.indexOf(str)>=0)str+="*";
			if(str.length>2)flagArr.push(true);
			re = new RegExp(/for.+/);answer_pattern_array.push(re);
			re = new RegExp(/for.+/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("\*"\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 511:
			re = new RegExp(/array_declare\("int","a","1@2@3@4@5",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/plural_declaration\("int","i,sum=0"\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\(("false,i,0","i < 5")|("false,i,1","i <= 5"),"i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("sum","sum:\+:a.i."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("sum","%d"\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 512:
			re = new RegExp(/array_declare\("int","a","1@2@3@4@5",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/array_declare\("int","b","undefined",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,0","i < 5","i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("b\[i\]","a\[(4:-:i:-1)|(4:-:1:-i)|(3:-:i)\]"\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,0","i < 5","i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("i,b\[i\]".+\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 521:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,0, 0,"1") != true){ miss_answer("5-2-1不正解！"); return 0;}
			else if( hantei_2(user_code,1, 0,"4") != true){ miss_answer("5-2-1不正解！"); return 0;}
			else if( hantei_2(user_code,2, 0,"7") != true){ miss_answer("5-2-1不正解！"); return 0;}
			else if( hantei_2(user_code,2, 2,"3") != true){ miss_answer("5-2-1不正解！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 522:
			re = new RegExp(/multiarray_declare\("int","data","1@2@3^4@5@6^7@8@9^10@11@12","4","3"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("data\[3\]\[1\]".+\)/);answer_pattern_array.push(re);
		break;
			case 5:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_4(user_code,0, 0, 0, 0,"1") != true){ miss_answer("５章まとめ不正解！"); return 0;}
			else if( hantei_4(user_code,1, 1, 1, 1, "4") != true){ miss_answer("５章まとめ不正解！"); return 0;}
			else if( hantei_4(user_code, 2, 2, 2, 2, "7") != true){ miss_answer("５章まとめ不正解！"); return 0;}
			else if( hantei_4(user_code, 3, 3, 3, 3, "8") != true){ miss_answer("５章まとめ不正解！"); return 0;}
			else { flagArr.push(true); } 
		break;
	}
	var flen = flagArr.length;
	//console.log(flen+"つのtrueが必要です。");
	for(var i = 0;i < flen;i++){
		if(flagArr[i]){
			index++;
			//console.log(index+"個目のtrueです！");
		}
	}
	if(flen == index&&flen!=0){
		console.log("All OK!!!");
		correct_answer();
		//ajaxPostFunc(htmlversion,"1",codeOfUser);
		//movenext();
	}else{
		miss_answer()
		//ajaxPostFunc(htmlversion,"0",codeOfUser);
		console.log("GAME OVER...");
	}
	line_reset();
}

function ajaxPostFunc(param1, param2, param3){
    $.post("post.php", {input1:param1, input2:param2, input3:param3}, function(json){alert("パラメータを3つPOSTしました");});
}

function getPatternLine(uArr,aArr,line){
	var index = 0;
	var ulen = uArr.length;
	var alen = aArr.length;
	var rArr =['-1'];
	for(var i = line;i < ulen;i++){
		//console.log(uArr[i]+"と"+aArr[index]+"のチェック");
		if(uArr[i].match(aArr[index])){
			console.log("！！！マッチしました！！！");
			rArr.push(i);
			i=line-1;index++;
		}
		if(index == alen)break;
		if(i==ulen-1)return 0;
	}
	for(var i = 0;i < alen;i++)aArr.shift();
	return Math.max.apply(null,rArr)+1;
}

function context_check(uArr,aArr,flag){//flagがtrueなら順序を考慮したチェック、falseなら順序関係なしにチェック
	var index = 0;
	var ulen = uArr.length;
	var alen = aArr.length;
	for(var i =0;i < ulen;i++){
		//console.log(uArr[i]+"と"+aArr[index]+"のチェック");
		if(uArr[i].match(aArr[index])){
			console.log("！！！マッチしました！！！");
			if(flag)i=-1;
			index++;
		}
		if(index == alen)break;
	}
	for(var i = 0;i < alen;i++)aArr.shift();
	if(index == alen){console.log("受け取ったアンサーパターンの全マッチを確認しました");return true;}
	else{return false;}
}

function or_check(uArr,aArr,keystr){//どの場合でも正解にしたい時のチェック。！※！一文ずつ入れる事。
	var index = 0;
	var ulen = uArr.length;
	var alen = aArr.length;
	for(var i =0;i < ulen;i++){
		//console.log(uArr[i]+"と"+aArr[index]+"のチェック");
		if(uArr[i].match(keystr)){
			console.log("！！！マッチしました！！！");
			for(var j = 0;j < alen;j++){
				if(uArr[i].match(aArr[j])){
					console.log("！！！マッチしましぞ！！！");
					break;
				}
			}
		}
		if(index == alen)break;
	}
	for(var i = 0;i < alen;i++)aArr.shift();
	if(index == alen){console.log("受け取ったアンサーパターンの全マッチを確認しました");return true;}
	else{return false;}
}

function adjustable_check(uArr,aArr){//正誤判定に変数名が指定されていない場合のチェック
	console.log("adjustable_checkを始めます。");
	var user_variable =[];
	var temp_variable =[];
	var index = 0;
	var ulen = uArr.length;
	var alen = aArr.length;
	for(var i = 0;i < ulen;i++){
		if(uArr[i].match(/duplication_judge\("int","\w+",.+\)/)){
			user_variable.push(uArr[i].match(/duplication_judge\("int","(\w+)",.+\)/)[1]);
		}
	}
	var uvlen = user_variable.length;
	for(var i = 0; i < ulen;i++){
		//console.log(uArr[i]+"と"+aArr[index]+"のチェック");
		if(uArr[i].match(aArr[index])){
			console.log("！！！マッチしました！！！");
			for(var j = 0;j < uvlen;j++){
				console.log(uArr[i].match(aArr[index])[1]+"と"+user_variable[j]+"を比較します。")
				if(uArr[i].match(aArr[index])[1]==user_variable[j]){
					console.log(true);
					temp_variable.push(user_variable[j]);
				}
			}
		}
		if(uArr[i].match(/return/)){
			for(var k = 0;k < uvlen;k++)user_variable.shift();
			var tvlen = temp_variable.length;
			for(var k = 0;k < tvlen;k++)user_variable.push(temp_variable[k]);
			for(var k = 0;k < tvlen;k++)temp_variable.shift();
			uvlen = user_variable.length;
			index++;i=-1;
			//console.log("次のアンサーパターンに写ります。");
		}
		if(index == alen)break;
	}
	for(var i = 0;i < alen;i++)aArr.shift();
	if(index == alen&&user_variable.length>0){console.log("受け取ったアンサーパターンのクリアを確認しました");return true;}
	else{return false;}
}
