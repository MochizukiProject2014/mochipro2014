function answer_check(num){
	console.log(num+"の正誤判定に入ります。");
	var version = Number(num),re;
	var answer_pattern_array = [];
	var flagArr = [];
	var tempFlagArr = [];
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
		case 2131:
			re = new RegExp(/duplication_judge\("char","x","y"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2132:
			re = new RegExp(/plural_declaration\("int","x=3,y=7"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 221:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,5\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2211:
			re = new RegExp(/duplication_judge\("double","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,2\.3\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2212:
			re = new RegExp(/duplication_judge\("char","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,k\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 222:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("double","y",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,15\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(y,5\.5\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2221:
			re = new RegExp(/duplication_judge\("char","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,k\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 2222:
			re = new RegExp(/duplication_judge\("char","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("double","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/newscanfnext\(x,n\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(y,3\.6\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 231:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x","%d"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","(x:\+:3)|(3:\+:x)"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2311:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x","%d"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","x:\+:x"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2312:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x","%d"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","x:\+:3:\/:2"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 232:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","y",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(x,\d\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(y,\d\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/duplication_judge\("int","z",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("z","x:\+:y"\)/);answer_pattern_array.push(re);
			tempFlagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/.+/);answer_pattern_array.push(re);//reオブジェクトが１つだけだとなぜかバグるので応急措置
			re = new RegExp(/duplication_judge\("int","z","x:\+:y"\)/);answer_pattern_array.push(re);
			tempFlagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			console.log("０："+tempFlagArr[0]+"、１："+tempFlagArr[1]);//デバック用出力
			flagArr.push(tempFlagArr[0]||tempFlagArr[1]);
		break;
		case 2321:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/newscanfnext\(x,10\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("y","x:%:3"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2322:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("doublef","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/newscanfnext\(x,10\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("y","x:-:3\.5"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 241:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code,1, "1") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,10,"10") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 100, "100") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 2411:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code, 1, "1") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 2, "2") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,2.5,"2.5") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 0.005, "0.005") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 

		break;
		case 2412:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code, "a", "a") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, "b", "b") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 

		break;
		case 242:
			re = new RegExp(/duplication_judge\("double","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("char","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/printf_js\("x","%."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("y","%."\)/);answer_pattern_array.push(re);
			tempFlagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/.+/);answer_pattern_array.push(re);//reオブジェクトが１つだけだとなぜかバグるので応急措置
			re = new RegExp(/printf_js\("(x,y)|(y,x)","%."\)/);answer_pattern_array.push(re);
			tempFlagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			flagArr.push(tempFlagArr[0]||tempFlagArr[1]);
		break;
		case 2421:
			re = new RegExp(/duplication_judge\("char","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("char","y",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("char","z",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/substitute\("x","k"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("y","n"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("z","g"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/printf_js\("x,y,z".+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2422:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","y",.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/substitute\("x","1"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("y","3"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			re = new RegExp(/printf_js\("x,y".+\/n.+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 2:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code,1, "3") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,2,"6") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,3,"9") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 311:
			re = new RegExp(/if_js\("(x > 20)||(20 < x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\(.+xは20より大きいです.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 3111:
			re = new RegExp(/if_js\("(x < 15)|(15 > x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\(".+xは15より小さいです.+"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 3112:
			re = new RegExp(/if_js\("(x <= 15)|(15 >= x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("xは30以上です。"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 312:
			re = new RegExp(/if_js\("(x < y)||(y > x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\(.+xはyより小さいです.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 3121:
			re = new RegExp(/if_js\("(x > y)|(y < x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("xはyより大きいです"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 3122:
			re = new RegExp(/if_js\("(y >= x)|(x =< y)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("xはy以下です。"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 313:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x","%d"\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("(x.*!=.*0)|(0.*!=.*x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\(.+xは0ではないです.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 3131:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code,0,"xは0と等しいです。") != true){ miss_answer("不正解！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3132:
			re = new RegExp(/if_js\("(x != y)|(y != x)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs("xとyは異なります")/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_if\(\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 314:
		/*
			re = new RegExp(/plural_duplication\("double","height,weight,bmi"\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("bmi","weight:\/:\(:height:\*:height:\)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("(bmi >= 18\.5 && bmi < 25\.0)|(bmi >= 18\.5 && 25\.0 > bmi)|(18\.5 <= bmi && bmi < 25\.0)|(18\.5 <= bmi && 25\.0 > bmi)|(bmi < 25\.0 && bmi >= 18\.5)|(bmi < 25\.0 && 18\.5 <= bmi)|(25\.0 > bmi && bmi >= 18\.5)|(25\.0 > bmi && 18\.5 <= bmi)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/あなたは適正です。/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		*/
			var user_code = parser_judge.parse(codeOfUser);
			if( hantei_2(user_code,1.75, 56.65625,"あなたは適正です。") != true){ miss_answer("「18.5以上」は18.5も含まれるよ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code, 1.75, 76.5625,"あなたは適正です。") == true){ miss_answer("「25.0未満」は25.0も含まれないよ！@@条件式を確認してみよう！"); return 0;}
			else if( codeOfUser.indexOf("&&") == -1 ){ miss_answer("条件式に && を使ってみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3141:
			re = new RegExp(/duplication_judge\("int","x","150"\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","y","165"\)/);answer_pattern_array.push(re);
			re = new RegExp(/if_js\("(x == 150 && y == 165)|(150 == x && y == 165)|(x == 150 && 165 == y)|(150 == x && 165 == y)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("x,y","x.+yは.+です。"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 3142:
			re = new RegExp(/if_js\("(x == 100 || y == 100)|(100 == x || y == 100)|(x == 100 || 100 == y)|(100 == x || 100 == y)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("xかyに100点はいます。"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
		break;
		case 321:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code,19, "未成年") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,20,"成人") != true){ miss_answer("条件式を確認してみよう！"); return 0;}
			else if( hantei_1(user_code,21,"成人") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
			re = new RegExp(/.+/);answer_pattern_array.push(re);//reオブジェクトが１つだけだとなぜかバグるので応急措置
			re = new RegExp(/else_js.+"\)/);answer_pattern_array.push(re);
			tempFlagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 3211:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,21,21, "xもyも成人です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code,21,20,"少なくとも片方は未成年です。") != true){ miss_answer("条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,20, 20,"xもyも成人です。") != true){ miss_answer("成人は20歳「以上」だ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code, 19, 19,"少なくとも片方は未成年です。") != true){ miss_answer("成人は20歳「以上」だ！@@条件式を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3212:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,21,21, "xもyも成人です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code,21,20,"少なくとも片方は未成年です。") != true){ miss_answer("条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,20, 20,"xもyも成人です。") != true){ miss_answer("成人は20歳「以上」だ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code, 19, 19,"少なくとも片方は未成年です。") != true){ miss_answer("成人は20歳「以上」だ！@@条件式を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3212:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,21,21, "少なくともどちらか片方は成人です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code,21,20,"少なくともどちらか片方は成人です。") != true){ miss_answer("条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,20, 20,"少なくともどちらか片方は成人です。") != true){ miss_answer("成人は20歳「以上」だ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code, 19, 19,"xもyも未成年です。") != true){ miss_answer("成人は20歳「以上」だ！@@条件式を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 331:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code,90, "良") != true){ miss_answer("90点以上は90点も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_1(user_code,60,"可") != true){ miss_answer("60点以上は60点も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_1(user_code,40,"再試験") != true){ miss_answer("40点以上は40点も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_1(user_code, 39, "不可") != true){ miss_answer("39点以下は「不可」になぞ！@@条件式を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3311:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code,100, "合格") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,60,"合格") != true){ miss_answer("60点以上は60点も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_1(user_code,59,"不合格") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 0, "不合格") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3312:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_1(user_code, 23.5, "Sサイズです。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 24.4, "Sサイズです。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,24.5,"Mサイズです。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 25.4, "Mサイズです。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code,25.5,"Lサイズです。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 26.5, "Lサイズです。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 3:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,1,18.49, "やせ気味") != true){ miss_answer("計算と条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,1,25.01,"太り気味") != true){ miss_answer("計算と条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code,1.75, 56.65625,"適正") != true){ miss_answer("「18.5以上」は18.5も含まれるぞ！@@条件式を確認してみよう！"); return 0;}
			else if( hantei_2(user_code, 1.75, 76.5625,"太り気味") != true){ miss_answer("「25.0未満」は25.0も含まれないぞ！@@条件式を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 411:
			//forが3回まわってるか判断する中谷さんが作ってるプログラムを使う
			re = new RegExp(/duplication_judge\(.+,"i",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\(("false,i,1","i <= 3")|("false,i,0","i < 3")|,"i:\+:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("わんわん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 4111:
			re = new RegExp(/duplication_judge\(.+,"a",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,a,1","a <= 3","a:\+:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("わんわん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("a","現在%.回繰り返しました.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 4112:
			re = new RegExp(/for_js\(".+\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,true));
			var temparr = document.getElementById("console").value.split("\n");
			var array = ["2","4","6","8","10"];
			var len = temparr.length;
			var index = 0;
			for(var i = 0;i < len;i++){
				if(temparr.indexOf(array[index])>=0){index++;i=0;}
				if(index>=5)flagArr.push(true);
			}
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 412:
		/*
			re = new RegExp(/duplication_judge\(.+,"i",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,3","i >= 1","i:-:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("にゃんにゃん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
			*/
			var user_code = for_cnt_parser.parse(codeOfUser);
			var user_code2 = parser_judge.parse(codeOfUser);
			if(hantei_for_eval_s(user_code, 3,1) != 3){ miss_answer("条件式を見直してみよう！"); return 0;}
			else if(hantei_for_eval_s(user_code, 2,1) != 2){ miss_answer("条件式を見直してみよう！"); return 0;}
			else if( hantei_1(user_code2,1,"にゃんにゃん") != true){ miss_answer("出力される文字を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 4121:
			re = new RegExp(/duplication_judge\(.+,"b",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,b,.+","b >= .+","b:-:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("にゃんにゃん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\(",+あと%.回繰り返します.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 4122:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_4(user_code,1,2,3,4, "平均値は2.5です") != true){ miss_answer("計算を確認してみよう！"); return 0;}
			else if(hantei_4(user_code,5,6,7,8, "平均値は6.5です") != true){ miss_answer("計算を確認してみよう！"); return 0;}
			else if(hantei_4(user_code,11,22,33,44, "平均値は27.5です") != true){ miss_answer("計算を確認してみよう！"); return 0;}
			else if(hantei_4(user_code,4,8,12,16, "平均値は10です") != true){ miss_answer("計算を確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 421:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,1, 2,"終了") != true){ miss_answer("コードを見直してみよう！"); return 0;}
		else if( hantei_3(user_code,1,2,4,"終了") != true){ miss_answer("コードを見直してみよう！"); return 0;}
		else if( hantei_4(user_code,1, 3, 5, 6, "終了") != true){ miss_answer("コードを見直してみよう！"); return 0;}
		else if( hantei_2(user_code, 2, 8,"終了") != true){ miss_answer("コードを見直してみよう！"); return 0;}			else { flagArr.push(true); } 
		break;
		case 4211:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_3(user_code,1, 99, 100, "無限ループです") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if(hantei_3(user_code,1, 100, 101, "100より大きい値が入力されました") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_4(user_code,97,98,99,101,"100より大きい値が入力されました") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_4(user_code,1, 2, 100, 999, "100より大きい値が入力されました") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 4212:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_4(user_code,1, 2, 3, 0, "6") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_4(user_code,10, 20, 30, 0,"60") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_1(user_code, 0 ,"0") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code, 1, 0,"1") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 422:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_6(user_code, 1,2,3,4,5,6, "無限ループです") != true){ miss_answer("条件式を見直してみよう！"); return 0;}
			if(hantei_3(user_code, 1, 99, 1, "100を超えました。") != true){ miss_answer("条件式を見直してみよう！"); return 0;}
			else if( hantei_3(user_code,10,20,77,"100を超えました。") != true){ miss_answer("条件式を見直してみよう！"); return 0;}
			else if( hantei_2(user_code,99, 99, "100を超えました。") != true){ miss_answer("条件式を見直してみよう！"); return 0;}
			else if( hantei_3(user_code, 12, 34, 56, "100を超えました。") != true){ miss_answer("条件式を見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 4221:
			re = new RegExp(/duplication_judge\(.+,"a",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("while","i <= 3","i:\+:1",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("わんわん.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
		break;
		case 4222:
			re = new RegExp(/for_js\("while","a >= 9",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\(.*%.*"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			var temp = getPatternLine(user_pattern_array,answer_pattern_array,0);flagArr.push(temp);
			var temparr = document.getElementById("console").value.split("\n");
			var array = ["2","4","6","8","10","12","14","16","18"];
			var len = temparr.length;
			var index = 0;
			for(var i = 0;i < len;i++){
				if(temparr.indexOf(array[index])>=0){index++;i=0;}
				if(index>=9)flagArr.push(true);
			}
		break;
		case 431:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","i",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","k",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,7","i<(=8)|(9)","i:\+:1".+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,k,1","k<(=9)|(10)","k:\+:1".+\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","(i:\*:k)|(k:\*:i)"\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\(".+"\)/);answer_pattern_array.push(re);
			re = new RegExp(/end_of_for/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 4311:
			var tenpa = ["","0","1","2","3","4","5","6","7","8","9"];
			var tempb = "0\n01\n012\n0123\n01234\n012345\n0123456\n01234567\n012345678\n0123456789";
			var temparr = tempb.split("\n");
			var index = 0;
			for(var i = 0;i < 10;i++){
				tenpa[0]+=tenpa[i+1];
				if(RegExp(tenpa[0]).test(temparr[i]))index++;
			}
			if(index>=10)flagArr.push(true);
		break;
		case 4312:
			re = new RegExp(/for_js.+/);answer_pattern_array.push(re);
			re = new RegExp(/for_js.+/);answer_pattern_array.push(re);
			temp = getPatternLine(user_pattern_array,answer_pattern_array,temp);flagArr.push(temp);
			var temparr = document.getElementById("console").value.split("\n");
			var array = ["*・・・・","・*・・・","・・*・・","・・・*・","・・・・*"];
			var len = temparr.length;
			var index = 0;
			for(var i = 0;i < len;i++){
				if(temparr.indexOf(array[index])>=0){index++;i=0;}
				if(index>=4)flagArr.push(true);
			}
		break;
		case 41:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_3(user_code,1, 99, 0,"合計は100です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_4(user_code,10,20,77,0,"合計は107です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_3(user_code,99, 99,0, "合計は198です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_4(user_code, 12, 34, 56, 0, "合計は102です。") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 42:
			var dedicateNum = -1;
			for(var i = 0;i < apalen;i++){
				if(/newscanfnext\([a-z].*,([0-9])\)/.test(user_pattern_array[i]))dedicateNum = user_pattern_array[i].match(/newscanfnext\([a-z].*,([0-9])\)/)[1]
			}
			var temparr = document.getElementById("console").value.split("\n");
			var str = "*";
			var len = temparr.length;
			for(var i = 0;i < len;i++)if(temparr.indexOf(str)>=0)str+="*";
			if(str.length>1&&str.length-1==dedicateNum)flagArr.push(true);
			re = new RegExp(/for.+/);answer_pattern_array.push(re);
			re = new RegExp(/for.+/);answer_pattern_array.push(re);
			re = new RegExp(/printf_djs\("\*"\)/);answer_pattern_array.push(re);
			tempFlagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
		break;
		case 511:
			re = new RegExp(/array_declare\("int","a","1@2@3@4@5",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/plural_declaration\("int","i,sum=0"\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\(("false,i,0","i < 5")||("false,i,1","i <= 5"),"i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("sum","sum:\+:a.i."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("sum","%d"\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 5111:
			re = new RegExp(/array_declare\("int","a","3@6@9",3\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 5112:
			re = new RegExp(/array_declare\("int","a","5@4@3@2@1",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("a\[0\]",.+\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 512:
			re = new RegExp(/array_declare\("int","a","1@2@3@4@5",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/array_declare\("int","b","undefined",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,0","i<5","i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("b\[i\]","a\[(4:-:i)\]"\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,0","i<5","i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("i,b\[i\]".+\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 5121:
			re = new RegExp(/array_declare\("int","a","2@4@6@8@10",5\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","i",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,0","i < 5","i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("a\[i\]".+\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 5122:
			re = new RegExp(/array_declare\("int","x",".+",3\)/);answer_pattern_array.push(re);
			re = new RegExp(/duplication_judge\("int","i",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/for_js\("false,i,0","i < 3","i:\+:1","."\)/);answer_pattern_array.push(re);
			re = new RegExp(/scanf_js\("x\[i\]".+\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 521:
			re = new RegExp(/.+/);answer_pattern_array.push(re);//reオブジェクトが１つだけだとなぜかバグるので応急措置
			re = new RegExp(/multiarray_declare\("int",".+",".+@.+@.+..+@.+@.+","2","3"\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 5211:
			re = new RegExp(/multiarray_declare\("int","x","\d+@\d+@\d+^d+@\d+@\d+",3\)/);answer_pattern_array.push(re);
			var temp = context_check(result2,answer_pattern_array,true);flagArr.push(temp);
		break;
		case 522:
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_2(user_code,0, 0,"1") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code,1, 0,"4") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code,2, 0,"7") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( hantei_2(user_code,2, 2,"9") != true){ miss_answer("コードを見直してみよう！"); return 0;}
			else if( codeOfUser.indexOf("[3][3]") == -1 ){ miss_answer("配列の大きさを確認してみよう！"); return 0;}
			else { flagArr.push(true); } 
		break;
		case 5:
			re = new RegExp(/array_declare\("int","a","1@0@7@8@3@4@6@5@9@2",10\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(b,1\)/);answer_pattern_array.push(re);
			re = new RegExp(/newscanfnext\(b,9\)/);answer_pattern_array.push(re);
			re = new RegExp(/printf_js\("a.b.",".*%.*"\)/);answer_pattern_array.push(re);
			flagArr.push(context_check(user_pattern_array,answer_pattern_array,false));
			/*
			var user_code = parser_judge.parse(codeOfUser);
			if(hantei_4(user_code,0, 0, 0, 0,"1\n") == true ){
				if( hantei_4(user_code,1, 1, 1, 1, "4\n") != true){
					miss_answer("コードを見直してみよう！"); return 0;
				}else if( hantei_4(user_code, 2, 2, 2, 2, "7\n") != true){
					miss_answer("コードを見直してみよう！"); return 0;
				}else if( hantei_4(user_code, 3, 3, 3, 3, "8\n") != true){
					miss_answer("コードを見直してみよう！"); return 0;
				}else {
					flagArr.push(true);
				} 
			}else if(hantei_4(user_code,0, 0, 0, 0,"1") == true ){
				if( hantei_4(user_code,1, 1, 1, 1, "4") != true){
					miss_answer("コードを見直してみよう！"); return 0;
				}else if( hantei_4(user_code, 2, 2, 2, 2, "7") != true){
					miss_answer("コードを見直してみよう！"); return 0;
				}else if( hantei_4(user_code, 3, 3, 3, 3, "8") != true){
					miss_answer("コードを見直してみよう！"); return 0;
				}else {
					flagArr.push(true);
				} 
			}else {miss_answer("コードを見直してみよう！"); return 0;}
			*/
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
	if((flen == index&&flen!=0)||getVariableExist("SystemCodeTrueAnswerPattern")){
		console.log("All OK!!!");
		correct_answer();
		ajaxPostFunc(document.getElementById("state").innerHTML,"1",codeOfUser);
		movenext();
	}else{
		miss_answer()
		ajaxPostFunc(document.getElementById("state").innerHTML,"0",codeOfUser);
		console.log("GAME OVER...");
	}
	line_reset();
}

function ajaxPostFunc(param1, param2, param3){
    $.post("post.php", {input1:param1, input2:param2, input3:param3}, function(json){});
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
		console.log(uArr[i]+"と"+aArr[index]+"のチェック");
		if(uArr[i].match(aArr[index])){
			console.log("！！！マッチしました！！！");
			if(!flag)i=-1;
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
