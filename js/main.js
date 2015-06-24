var cEditor,lines;
var result2 = new Array();
var user_pattern_array = new Array();
var jsOfAnimes = new Array();
var sampleOfAnimes = new Array();
var rindex = 0;					//scanf文があった場合の、アニメ実行配列にはさむしおり
var animeStartIndex=0;
var scanfname,scanftype;
var codeOfUser;					//ユーザーのコードを保持
var encodeTime =0;					//現在が何回めの実行かを保持。現状使い道は一回目かそうじゃないかだけ。
var consoleStatus = "";			//コンソールの現在の状態を保持
var htmlversion;				//どのhtmlを読み込んでいるかの情報を保持
var syntaxErrorFlag = true,codeFinishFlag = false,scanf_flag=false;	
var syntaxStr ="";				//エラー文の保存用配列
var scopeLevel = 1;				//変数のスコープの管理用
function disTexetarea(){
	cEditor.markText({line: 0 , ch: 0}, {line: 100, ch: 100}, {className: "styled-background-null"});
	cEditor.save();
	if(encodeTime>0)codeArrayInit();
	encodeTime++;
	codeOfUser = document.getElementById('text').value;
	consoleStatus = document.getElementById("console").value;
	if(!codeOfUser.match(/return\x20[0-9]/))createSyntaxError("シンタックスエラー！return0がないよ");
	line_reset();
	var result = parser.parse(codeOfUser);
	var ucode = "";
	var resultlength = result.length;
	for(var deb = 0;deb < resultlength;deb++)ucode += result[deb];
	result2 = ucode.match(/(.+);$/)[1].split(";");
	//arr_check("パーサー結果配列",result2);
	var result2length = result2.length;
	evalfunction(0,result2);
	//arr_check("アニメ配列",jsOfAnimes);
	sign =1;
	if(syntaxErrorFlag){R();}
	else{ANIME_reset();ANIME_error(syntaxStr);}
}

window.onload = function() {
	firstSetting();
	var loading = tm.app.LoadingScene({assets:ASSETS,nextScene:MainScene, }); 
	app.run();
	app.replaceScene(loading); 
	document.getElementById('button').addEventListener('click', disTexetarea, false);
	htmlversion=document.getElementById("ver").getAttribute("version")
	if(htmlversion!="free")document.getElementById('sample').addEventListener('click', doSampleCode, false);
	cEditor = CodeMirror.fromTextArea(document.getElementById("text"), {
		mode: "text/x-csrc", 
		theme: "default",
		indentUnit: 3,
		tabSize: 3,
		lineNumbers: true,
		styleActiveLine: false,
		styleSelectedText: true,
		matchBrackets: true
	});
	cEditor.setSize(600, 200);
	document.getElementById("console").value="";
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="211")document.getElementById("click_data").click();
	//SPEED=0.25;
}

var scanfSetStr ="<b>コンソールに値を入力するにゃ！<BR>";
scanfSetStr+="例えば、scanf(“%d”,&amp;x);なら<BR>"
scanfSetStr+="<font color = red>「値」</font>を入力した後に<font color = red>「enterキー」</font>を押す</font>のにゃ。<BR>"
scanfSetStr+="<BR>"
scanfSetStr+="また、scanf(“%d %d”,&amp;x,&amp;y);なら<BR>"
scanfSetStr+="<font color = red>「値」「enterキー」「値」「enterキー」</font>の順に入力するにゃ。</b>";
/*↓------------------------------------このプログラム内でのみ使う便利関数------------------------------------↓*/
function evalfunction(index,rArr){
	var len = rArr.length;
	for(var i = index ;i < len ;i++){
		//console.log(rArr[i]);
		if(!(rArr[i].match(/(push)|(plural)|(return)/)))user_pattern_array.push(rArr[i]);
		eval(rArr[i]);
		if(rArr[i].match(/^scanf_js.*/)){
			rindex = i;break;
		}
	}
}

function R(){
	//console.log("アニメ配列の長さ："+jsOfAnimes.length+"現在のanimeStartIndex："+animeStartIndex+"現在実行中："+jsOfAnimes[animeStartIndex]);
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			//console.log(jsOfAnimes[animeStartIndex]);
			eval(jsOfAnimes[animeStartIndex]);
			if(jsOfAnimes[animeStartIndex].match(/ANIME_scanf/)){
				sign=1;animeStartIndex++;
				document.getElementById("com").innerHTML= scanfSetStr ;scanf_flag=true;
			}else{animeStartIndex++;document.getElementById("com").innerHTML="";}
		if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}else{if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);}
	}
}

function createSyntaxError(str){
	syntaxErrorFlag = false;
	syntaxStr = str;
}

function arr_check(str,uArr){
	console.log("--------------------"+str+"配列の中身一覧-------------------------");
	var ulen = uArr.length;
	for(var i = 0;i < ulen;i++)console.log(str+"Arr["+i+"] = "+uArr[i]);
	console.log("----------------------------------------------------");
}

function arr_init(str,uArr){
	console.log("--------------------"+str+"配列を初期化しました。-------------------------");
	var ulen = uArr.length;
	for(var i = 0;i < ulen;i++)uArr.shift();
}

function check_obj(name){
	console.log("--------------------"+name+"オブジェクトのスターテス-------------------------");
	var len = variables.length;
	for(var i = 0;i<len;i++){
		if(variables[i].name==name){
		console.log("型："+variables[i].data_type);
		console.log("名前："+variables[i].name);
		console.log("値列："+variables[i].value);
			if(variables[i].status=="a"){
				console.log("長さ："+variables[i].length);
				console.log("対応番号："+variables[i].number);
			}
		}
	}
	console.log("----------------------------------------------------");
}

function CheckLength(str){//半角だとtrueを返す
	for(var i = 0;i < str.length;i++){
		var c = str.charCodeAt(i);
		if((c>=0x0&&c<0x81)||(c==0xf8f0)||(c>=0xff61&&c<0xffa0)||(c>=0xf8f1&&c<0xf8f4)){
				return true;
			}
		}
	return false;
}

function line_reset(){
	cEditor.value = codeOfUser;
	cEditor.setValue(cEditor.value)
	cEditor.save();
	sign = 1;
}

function random_number(type){
	var vInt = new Array(0,1,2,3,4,5,6,7,8,9);
	var vDou = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9);
	var vCha = new Array("a","b","c","d","e","f","g","h","i","j");
	var rnd = Math.floor(Math.random()*10);
	if(type == "int"){console.log("random_number内の出力。int型に"+vInt[rnd]+"を代入させます。");
		jsOfAnimes.push("setPrintf("+vInt[rnd]+")");
		return vInt[rnd];
	}else if(type == "double"){console.log("random_number内の出力。double型に"+vDou[rnd]+"を代入させます。");
		jsOfAnimes.push("setPrintf("+vDou[rnd]+")");
		return vDou[rnd];
	}else if(type == "char"){console.log("random_number内の出力。int型に"+vCha[rnd]+"を代入させます。");
		jsOfAnimes.push("setPrintf("+vCha[rnd]+")");
		return vCha[rnd];
	}
}

function regulate_js(data_type,value){
	switch(data_type){
		case "int":
			return String(Math.floor(value));
		break;
		case "double":
			return Number(value).toFixed(6);
		break;
		case "char":
			return value;
		break;
	}
}

function getNewInput(){
if(action_frag == true){
	var previous = consoleStatus;
	var now = document.getElementById("console").value;
	var previousArray = previous.split(/\r\n|\r|\n/);
	var nowArray= now.split(/\r\n|\r|\n/);
	var pstr="";
	var nstr="";
	for(var gi = 0;gi < previousArray.length;gi++)pstr += previousArray[gi];
	for(var gi = 0;gi < nowArray.length;gi++)nstr += nowArray[gi];
	var result = String(nstr.substr((pstr.length)+(nstr.indexOf(pstr))));
	consoleStatus = nstr;
	return result;
	}
}

function codeArrayInit(){
		ANIME_reset();codeOfUser ="";
		consoleStatus="";action_frag = true;
		if_cnt = 0;syntaxErrorFlag = true;
		animeStartIndex=0;scopeLevel = 1;
		for_flag = true;for_cnt = 0;
		uArr_num = 0;rindex=0;
		scanf_flag=false;
		document.getElementById("console").value="";
		codeFinishFlag = false;
		arr_init("result2",result2);
		arr_init("variable",variables);
		arr_init("ifの条件",if_conditions);
		arr_init("if_end_flag",if_end_flag);
		arr_init("for_contexts_array",for_contexts_array);
		arr_init("for_init_array",for_init_array);
		arr_init("for_conditions_array",for_contexts_array);
		arr_init("for_alt_array",for_alt_array);
		arr_init("for_line_array",for_line_array);
		arr_init("アニメ",jsOfAnimes);
		arr_init("ユーザパターンアレイ",user_pattern_array);
		if_conditions.push(true);if_end_flag.push(true);
}

function getVariableExist(name){
	var vlen = variables.length;
	if(/\[.+\]/.test(name))name = name.match(/^([a-z]\w*)\[.+\]/)[1];
	for(i = 0; i < vlen; i++){
		if(variables[i].name == name){
			return true;
		}
	}
	return false;
}

function getVariableType(name){
	var vlen = variables.length;
	if(/\[.+\]/.test(name))name = name.match(/^([a-z]\w*)\[.+\]/)[1];
	var result;
	for(i = 0; i < vlen; i++){
		if(variables[i].name == name){
			result = variables[i].data_type;
			break;
		}
	}
	return result;
}

function getVariableValue(name){
	var vlen = variables.length;
	var result;
	if(/\[.+\]/.test(name)){
		var index = name.match(/[a-z]\w*\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(name)||/:/.test(name))index =calc(index);
		name = name.match(/^([a-z]\w*)\[.+\]/)[1];
	}
	for(i = 0; i < vlen; i++){
		if(variables[i].name == name){
			switch(variables[i].status){
				case "v":	result = variables[i].value;	break;
				case "a":
					var temp = variables[i].value.split(":");
					result = temp[index];
				break;
			}
			break;
		}
	}
	return result;
}

/*↓------------------------------------コア------------------------------------↓*/
//変数や配列を格納する配列
var variables = [];
//ユーザーが使用できる配列と配列オブジェクトを格納する配列
var uArr_num = 0;
//変数のクラス
function Variable(data_type,name,value,scopeLevel){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.scopeLevel = scopeLevel;
	this.status="v";
};
function Arr(data_type,name,value,length,number){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.length = length;			//長さ
	this.number = number;			//対応番号
	this.status="a";
}

function MultiArr(data_type,name,value,length1,length2){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.length1 = length1;			//長さ1
	this.length2 = length2;			//長さ2
	this.status="ma";
}

function duplication_judge(data_type,name,value){
if(action_frag == true&&for_flag){
		variable_declare(data_type,name,value);
}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'duplication_judge("'+data_type+'","'+name+'","'+value+'");');
		for_contexts_array[for_cnt-1]+='duplication_judge("'+data_type+'","'+name+'","'+value+'");';
		
	}
}

function variable_declare(data_type,name,value){
	var vlen = variables.length;
	for(var i = 0;i < vlen ;i++)if(name==variables[i].name)return createSyntaxError("すでに同じ名前の変数があるよ！");
	if(/:/.test(value)||(/^[a-z]\w*/.test(value)&&!/null/.test(value)&&(data_type!="char"))){
		var str = "[";
		if(/:/.test(value)){
			var tempArr = value.split(":");
			var len = tempArr.length;
			value = calc(value);
			for(var i = 0;i < len ;i++){
				str += ('"'+tempArr[i]+'"');
				if(i<len-1){str += ',';}else{str +=']';}
			}
			value = regulate_js(data_type,value);
		}else{
			str='["'+value+'"]';
			value = regulate_js(data_type,getVariableValue(value));
		}
		jsOfAnimes.push('ANIME_sengen_enzan("'+data_type+'","'+name+'",'+str+',"'+value+'");');
	}else if(/[0-9]+/.test(value)||data_type=="char"){
		jsOfAnimes.push('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'")');
	}else{
		value = "?";
		jsOfAnimes.push('ANIME_sengen("'+data_type+'","'+name+'");');
	}
	var v = new Variable(data_type,name,value,scopeLevel);
	variables.push(v);
}

function array_declare(data_type,name,value,length){
if(action_frag == true){
	var alen = variables.length;
	var init_flag = false;
	var calc_flag = false;
	var valuelen = length;
	for(var i =0;i <alen;i++)if(variables[i].name == name)
		return createSyntaxError("すでに同じ名前の変数か配列があるよ！");
	if(value!="undefined"){
		var valuearr = value.split("@");
		valuelen = valuearr.length;
		if(length < valuelen)return createSyntaxError("指定した長さ以上の要素が入っているよ！") ;
		init_flag = true;
		var str = "[";
		for(var i = 0;i < valuelen ;i++)if(/:/.test(valuearr[i]))calc_flag = true;
		if(!calc_flag){
			for(var i = 0;i < valuelen ;i++)if(!type_judge(data_type,valuearr[i]))
			return createSyntaxError("配列に代入する値が変だよ！");
		}
	}else{
		value = "?";
		valuelen=1;
	}
	uArr_num++;
	if(init_flag&&calc_flag){
		var exp = "[";
		for(var i = 0;i < valuelen ;i++){
			exp += ('"'+valuearr[i]+'"');
			if(i<valuelen-1){exp += ',';}else{exp +=']';}
		}
		for(var i = 0;i < valuelen ;i++){
			str += ('"'+calc(valuearr[i])+'"');
			if(i<valuelen-1){str += ',';}else{str +=']';}
		}
		jsOfAnimes.push('ANIME_array_sengen_dainyu("'+data_type+'","'+name+'",'+valuelen+','+exp+','+str+');');
		value = "";
		for(var i = 0;i < valuelen ;i++){
			value += (''+calc(valuearr[i])+'');
			if(i<valuelen-1)value += '@';
		}
	}else if(init_flag){
		for(var i = 0;i < valuelen ;i++){
			str += ('"'+valuearr[i]+'"');
			if(i<valuelen-1){str += ',';}else{str +=']';}
		}
		jsOfAnimes.push('ANIME_array_sengen_dainyu("'+data_type+'","'+name+'",'+valuelen+','+str+','+str+');');
	}else{
		jsOfAnimes.push('ANIME_array_sengen("'+data_type+'","'+name+'","'+length+'");');
	}
	if(valuelen<length)for(var i = valuelen;i < length;i++)value+="@?";
	var v = new Arr(data_type,name,value,length,uArr_num);
	variables.push(v);
	check_obj(name);
}
}

function multiarray_declare(data_type,name,value,length1,length2){
if(action_frag == true){
	var alen = variables.length;
	var init_flag = false;
	var calc_flag = false;
	if(length2=="undefined")return createSyntaxError("２つめの長さは必ず指定してね！") ;
	for(var i =0;i <alen;i++)if(variables[i].name == name)
		return createSyntaxError("すでに同じ名前の変数か配列があるよ！");
	if(value!="undefined"){
		var value1arr = value.split("^");
		var len1 = value1arr.length;
		if(length1 < len1)return createSyntaxError("指定した長さ以上の要素が入っているよ！") ;
		init_flag = true;
		var str = "[";
		for(var j = 0;i < len1;i++){
			var value2arr = value1arr[j].split("@");
			var len2 = value2length;
			if(length2 > len2)return createSyntaxError("指定した長さ以上の要素が入っているよ！") ;
			for(var k = 0;i < len2;k++)if(/:/.test(value2arr[k]))calc_flag = true;
			if(!calc_flag){
				for(var k = 0;i < len2 ;k++)if(!type_judge(data_type,value2arr[k]))
				return createSyntaxError("配列に代入する値が変だよ！");
			}
		}
	}
	if(init_flag&&calc_flag){
		//jsOfAnimes.push();
	}else if(init_flag){
		//jsOfAnimes.push();
	}else{
		//jsOfAnimes.push();
	}
	var v = new Arr(data_type,name,value,uArr_num);
	variables.push(v);
}
}

function substitute(name,value){//変数に数字を代入するメソッド
if(action_frag == true&&for_flag){
	var cvflag = false;//代入する値が計算式、または、一つの変数かか判別するフラグ
	var str;
	var len = variables.length;
	if(/\[.+\]/.test(name)){//もし配列なら、nameとindex(indexが変数の場合数字になおし)を宣言。
		var index = name.match(/[a-z]\w*\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(name)||/:/.test(name))index =calc(index);
		name = name.match(/^([a-z]\w*)\[.+\]/)[1];
	}
	var vtype = getVariableType(name);
	if(value.match(/:/)){//代入する値が計算式の場合
		cvflag = true;
		var fArray = value.split(":");
		value = calc(value);//計算結果
		str = "[";		//animejsに渡すための計算式を作成
		for(var si = 0;si < fArray.length;si++){
			str += ('"'+fArray[si]+'"');
			if(si<fArray.length-1){str += ',';}else{str +=']';}
		}
		if(type_judge(vtype,value))value = regulate_js(vtype,value);
	}else if(value.match(/^[a-z]\w*/)){//代入する値が一つの変数の場合
		var vvalue = getVariableValue(value);
		cvflag = true;
		if(!type_judge(vtype,value))return createSyntaxError("型の会わない変数同士を代入しようとしてるよ！");
		if(vvalue=="?")return createSyntaxError("中身のない変数を代入しようとしてるよ！")
		str = ('["'+value+'"]');
		value = regulate_js(vtype,vvalue);
	}else if(!type_judge(vtype,value)){
		jsOfAnimes.push('ANIME_dainyu_typeMiss("'+name+'")');
		return false;
	}else{
		value = regulate_js(vtype,value);
	}
	for(var i = 0; i < len; i++){
		if(variables[i].name == name){
			switch(variables[i].status){
		case "v":
			if(cvflag){jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",'+str+',"'+value+'")');}
			else{jsOfAnimes.push('ANIME_dainyu("'+name+'","'+value+'")');}
			variables[i].value = value;
		break;
		case "a":
			if(cvflag){jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'['+index+']'+'",'+str+',"'+value+'")');}
			else{jsOfAnimes.push('ANIME_array_dainyu("'+name+'['+index+']'+'","'+value+'")');}
			var str="";
			var tempArr = [];
			for(var i=0;i<len;i++)if(variables[i].name==name)tempArr=variables[i].value.split("@");
			tempArr[index] = value;
			var templen = tempArr.length;
			for(var i = 0;i<templen;i++){
				str+=tempArr[i];
				if(i<templen-1)str += '@';
			}
			for(var i=0;i<len;i++)if(variables[i].name==name)tempArr=variables[i].value = str;
			check_obj(name);
		break;
			}
		}
	}
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'substitute('+name+','+value+');');
		for_contexts_array[for_cnt-1]+='substitute("'+name+'","'+value+'");';
		for(var fi = 0;fi < for_cnt-1;fi++){
			for_contexts_array[fi] += 'for_next;';
		}
	}
}

function push_line(line_i){
	if(action_frag	&&for_flag){
		jsOfAnimes.push('line(' + line_i + ');');
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'push_line('+line_i+');');
		for_contexts_array[for_cnt-1]+='push_line("'+line_i+'");';
	}
}

function return_js(value){
	jsOfAnimes.push("ANIME_finish()");
	codeFinishFlag = true;
}
function ANIME_finish(){
	line_reset();
	if(htmlversion!="free"){answer_check(htmlversion);}
}

var if_conditions = new Array();if_conditions.push(true);
var action_frag = true;
var if_cnt = 0;
var if_end_flag = new Array();if_end_flag.push(true);
function if_js(condition){
	if(for_flag){
	if_cnt++;scopeLevel++;
	if_conditions.push(assess(condition));
	console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]);
	if(if_conditions[if_cnt]&&if_conditions[if_cnt-1]){
		console.log("if_js内の出力：実行しようぜ！");
		if_end_flag.push(true);
		action_frag=true;
		console.log("END第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}else{
		console.log("if_js内の出力：実行しないぜ！");
		action_frag=false;
		if_conditions[if_cnt]=false;
		//if_end_flag.push(true);
		if_end_flag.push(false);
		console.log(if_end_flag.length);
		console.log("END第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'if_js("'+condition+'");');
		for_contexts_array[for_cnt-1]+='if_js("'+condition+'");';
		
	}
}

function else_if_js(condition){
	if(for_flag){
	if_conditions[if_cnt]=assess(condition);
	console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	if(!(if_end_flag[if_cnt])&&if_conditions[if_cnt]&&if_conditions[if_cnt-1]){
	console.log("else_if_js内の出力：実行しようぜ！");
		if_end_flag[if_cnt]=true;
		action_frag=true;
		console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}else{
	console.log("else_if_js内の出力：実行しないぜ！");
		action_frag=false;
		if_conditions[if_cnt]=false;
		//if_end_flag[if_cnt]=false;
		console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'else_if_js("'+condition+'");');
		for_contexts_array[for_cnt-1]+='else_if_js("'+condition+'");';
		
	}
}

function else_js(){
	if(for_flag){
	if_conditions[if_cnt] = true;
	console.log("else_js内での出力：第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]);
	if(!(if_end_flag[if_cnt])&&if_conditions[if_cnt-1]){
		if_end_flag[if_cnt]=true;
		action_frag=true
	}else{
		action_frag=false;
		if_end_flag[if_cnt]=true;
	}
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'else_js();');
		for_contexts_array[for_cnt-1]+='else_js();';
		
	}
}

function end_of_if(){
	if(for_flag){
	if_cnt=if_cnt-1;
	variable_scope_kill(scopeLevel);
	scopeLevel=scopeLevel-1;
	if_end_flag.splice((if_end_flag.length-1),1);
	if_conditions.splice((if_conditions.length-1),1);
	console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]);
	if(if_conditions[if_cnt]&&if_conditions[if_cnt-1]){
		action_frag=true;
	}else if(if_cnt==0){
		action_frag=true;
	}else{
		action_frag=false;
	}
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'end_of_if();');
		for_contexts_array[for_cnt-1]+='end_of_if();';
		
	}
}

function assess(condition){
	var result = false;
	var reg;
	var numOfVariable;
	var changeVariables;
	var variableExist = false;
	var errorFlag = false;
	reg = new RegExp("[a-z][a-zA-Z0-9]*","g");
	var tempStr = condition;
	if(condition.match(reg)){
		numOfVariable = condition.match(reg).length;
		changeVariables = condition.match(reg);
		for(var ai = 0;ai < numOfVariable;ai++){
			errorFlag =false;
			for(var aii = 0;aii < variables.length;aii++){
				if(changeVariables[ai] == variables[aii].name){
					tempStr = tempStr.replace(changeVariables[ai],variables[aii].value);
					errorFlag = true;
				}
			}
		if(!errorFlag)return createSyntaxError("条件式に定義されてない変数が入っているよ！");
		}
	}
	result = (eval(tempStr));
	return result;
}

var for_flag = true;
var for_contexts_array = new Array();			//for文の中にある文を蓄積するための配列
var for_cnt = 0;								//for文の階層を数える変数
var for_init_array = new Array();				//for文の初期化に関わる事を蓄積するための配列
var for_conditions_array =new Array();			//for文の終了条件を蓄積するための配列
var for_alt_array = new Array();				//for文の変化式を蓄積するための配列
var for_line_array = new Array();				//for文の行情報を蓄積するための配列
function for_js(init,cond,altv,altc,line_num){
if(action_frag == true){
	var alt = 'substitute("'+altv+'","'+altc+'")';
	for_contexts_array.push("");
	for_init_array.push(init);
	scopeLevel++;
	for_line_array.push('line('+line_num+')');
	//jsOfAnimes.push('line(' + line_num + ');');
	push_line(line_num);
	for_flag = false;
	for_cnt++;
	console.log("現在、for文の第"+for_cnt+"階層目(for_cnt)、"+for_contexts_array.length+"である。(fca.length)")
	for_conditions_array.push(cond);
	for_alt_array.push(alt);
	}
}

function end_of_for(){
if(action_frag == true){
	for_cnt-=1;
	if(for_cnt==0)evalContexts(0);
	scopeLevel-=1;
	}
}

function evalContexts(cnt){
	console.log("evalcontext実行開始");
	console.log("条件："+for_conditions_array[cnt]+"、変化式："+for_alt_array[cnt]+"、文群："+for_contexts_array[cnt])
	var forcontextarraylength = for_contexts_array.length;
	for(var fi = 0;fi < forcontextarraylength;fi++)console.log(fi+"階層の文群："+for_contexts_array[fi]+"の"+cnt+"を実行します。");
	var context = for_contexts_array[cnt].match(/(.*);$/)[1];
	var forArray = for_init_array[cnt].split(",");
	for_flag=true;
	if(forArray[0]=="true"){
		return createSyntaxError("for文のカッコの中では変数を宣言できないよ！");
	}else if(forArray[0]=="false"){
		substitute(forArray[1],forArray[2]);
	}
	var contexts = context.split(";");
	var temoi =0;
	while(assess(for_conditions_array[cnt])&&temoi<50){
		for(var eci = 0;eci < contexts.length;eci++){
			if(contexts[eci].match(/for_next/)){
				console.log("次の階層があるみたいですね！");
					evalContexts(cnt+1);
			}else{
				console.log("第"+cnt+"階層の「"+contexts[eci]+"」を実行します。");
				eval(contexts[eci]);
			}
		}
		jsOfAnimes.push(for_line_array[cnt]);
		eval(for_alt_array[cnt]);
	variable_scope_kill(scopeLevel);
		temoi++;
	}
	if(temoi >=50){
		return createSyntaxError("for文の回数が多すぎるよ！");
	}
	console.log(cnt+"層の実行終了。");
	console.log("evalcontext実行完了");
}

function plural_declaration(type,variable){
if(action_frag == true&&for_flag){
	console.log(variable);
	//variable = variable.replace(/\x20/g,"");
	var v = variable.split(",");
	for(var i=0; i < v.length; i++){
		console.log(v[i]);
		if(v[i].indexOf("=", 0) == -1){
			console.log("ただの宣言！");
			user_pattern_array.push('duplication_judge("'+type+'","'+v[i]+'", '+null+' )');
			duplication_judge(type,v[i], null );
		}else{
			console.log("式の宣言！");
			var x = v[i].split("=");
			if(x[1].indexOf(":", 0) == -1){
				user_pattern_array.push('duplication_judge("'+type+'","'+x[0]+'","'+x[1]+'")');
				duplication_judge(type , x[0] , x[1] );
			}else{
				y = x[1].replace(/:/g,"");
				duplication_judge(type , x[0] , y );
				substitute(x[0] , calc(x[1]));
			}
		}
	}
}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'plural_declaration("'+type+'","'+value+'");');
		for_contexts_array[for_cnt-1]+='plural_declaration("'+type+'","'+value+'");';
		
	}
}

function variable_scope_kill(level){
	for(var vk = 0;vk < variables.length;vk++){
		if(level==variables[vk].scopeLevel){
			jsOfAnimes.push('ANIME_remove_promin("'+variables[vk].name+'")');
			variables.splice(vk,1);vk = -1;
		}
	}
}
function calc(formula){//演算処理を行う関数
if(action_frag == true){
	var nullflag = false;				//変数が演算の中にあり、値がnullだった場合のフラグ
	var fArray = formula.split(":");	//与えられた式を「:」で分けたものが入っている
	var fstr ="";						//計算式を作成すし、最後にevalで評価するための文字列
	for(var i = 0; i < fArray.length; i++){
		if(fArray[i].match(/^[a-z]\w*/)){//式の中に英数字があったら変数か入力ミスをチェック
			var variable_value = getVariableValue(fArray[i]);
			if(variable_value){
				fstr += variable_value;
				if(variable_value=="?")return createSyntaxError("値の入っていない変数が演算式の中にあるよ！");
				if(getVariableType(fArray[i])=="char")return createSyntaxError("char型は計算できないよ！");
			}else{return createSyntaxError("存在しない変数を指定してる所があるよ！");}
		}else{
			fstr += fArray[i];
		}
	}
	return String(eval(fstr));
}}

function type_judge(data_type,value){
if(action_frag == true){
	var value_type;
	if(value.match(/^[a-z]\w*/))value_type = getVariableType(value);
	switch(data_type){
		case "int":
			if(value_type){if(value_type=="int"||value_type=="double")return true;}
			else if(value.match(/^[0-9]+/)){return true;}
		break;
		case "double":
			if(value_type){if(value_type=="int"||value_type=="double")return true;}
			else if(value.match(/(^[0-9]+\.[0-9]+)|(^[0-9]+)/)){return true;}
		break;
		case "char":
			if(value_type){if(value_type=="char")return true;}
			else if(value.match(/[a-z]+/)){return true;}
		break;
	}
	return false;
}}

function scanf_js(name,type){
if(action_frag == true&&for_flag){
	var nameArray = name.split(",");
	var typeArray = type.split(/\x20/);
	for(var si = 0;si < typeArray.length;si++){
		if(/.*(%[a-z]+).*/.test(typeArray[si]))typeArray[si] = typeArray[si].match(/.*(%[a-z]+).*/)[1];
	}
	if(nameArray.length!=typeArray.length)return createSyntaxError("型と入力指定文字の数があってないよ！");
	for(var i =0;i < nameArray.length;i++)if(!getVariableExist(nameArray[i]))
		return createSyntaxError("scanf内で存在しない変数を指定しているよ！");
	for(var i = 0;i < typeArray.length;i++){
		switch(getVariableType(nameArray[i])){
			case "int":		if(typeArray[i]!="%d")return createSyntaxError("型と入力指定文字があってないよ！");		break;
			case "double":	if(typeArray[i]!="%lf")return createSyntaxError("型と入力指定文字があってないよ！");	break;
			case "char":	if(typeArray[i]!="%c")return createSyntaxError("型と入力指定文字があってないよ！");		break;
		}
	}
	scanfname = name;
	scanftype = type;
	jsOfAnimes.push("ANIME_scanf()");
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'scanf_js("'+name+'","'+type+'");');
		for_contexts_array[for_cnt-1]+='scanf_js("'+name+'","'+type+'")';
		
	}
}

function newscanfnext(){
if(scanf_flag){
	var nameArray = scanfname.split(",");
	var typeArray = new Array();
	var inputValueArray = getNewInput().split(/\x20+/);
	var namelen = nameArray.length;
	var inputFinishFlag =false;
	for(var si = 0;si < inputValueArray.length;si++)if(!CheckLength(inputValueArray[si]))
		return createSyntaxError("入力は半角だけだよ！もう一回実行してね！");
	if(inputValueArray.length==namelen)inputFinishFlag=true;
	if(inputFinishFlag){
		document.getElementById("com").innerHTML="";
		for(var i = 0;i < namelen;i++){
			substitute(nameArray[i],regulate_js(getVariableType(nameArray[i]),inputValueArray[i]));
			user_pattern_array.push('newscanfnext('+nameArray[i]+','+inputValueArray[i]+')');
		}
	}
	evalfunction(rindex+1,result2);
	arr_check("アニメ配列",jsOfAnimes);sign =1;
	scanf_flag=false;
	if(syntaxErrorFlag){R();}
	else{ANIME_reset();ANIME_error(syntaxStr);}
}
}

function printf_js(name,value){
if(action_frag == true&&for_flag){
	if(value.match(/^:@:.*:@:$/))value =value.match(/^:@:(.*):@:$/)[1];
	var typeMissErrorFlag = false;
	var nameArray = name.split(",");
	var valueArray = value.split(":@:");
	var inputTypeArray =new Array();
	var namelen = nameArray.length;
	var valuelen = valueArray.length;
	for(var i = 0;i < namelen;i++)if(nameArray[i].match(":"))
		return createSyntaxError("このアプリではprintf文内で計算はできないよ！！ごめんね！");
	for(var i = 0;i < valueArray.length;i++)if(valueArray[i].match(/^%[a-z]/))
		inputTypeArray.push(valueArray[i]);
	if(inputTypeArray.length!=nameArray.length)return createSyntaxError("変数の数と変換指定文字列の数があってないよ！");
	for(var i = 0;i < inputTypeArray.length;i++){
		switch(getVariableType(nameArray[i])){
			case "int":		if(inputTypeArray[i]!="%d")typeMissErrorFlag = true;	break;
			case "double":	if(inputTypeArray[i]!="%f")typeMissErrorFlag = true;	break;
			case "char":	if(inputTypeArray[i]!="%c")typeMissErrorFlag = true;	break;
		}
	}
	var variableNumCounter = 0,pstr = "";
	for(var i = 0;i<valuelen;i++){
		if(valueArray[i].match(/^%[a-z]/)){
			pstr += getVariableValue(nameArray[variableNumCounter]);
			variableNumCounter++;
		}else{
			pstr += valueArray[i];
		}
	}
	var methodstr;
	if(typeMissErrorFlag){methodstr = "ANIME_printf_typeMiss(["}
	else{methodstr = "ANIME_printf(["}
	for(var i = 0;i < valuelen;i++){
		methodstr += ('"' + valueArray[i] + '"');
		if(i<valuelen-1){methodstr += ',';}
		else{methodstr +=']';}
	}methodstr += ',[';
	for(var pi = 0;pi < nameArray.length;pi++){
		methodstr += ('"' + nameArray[pi] + '"');
		if(pi<nameArray.length-1){methodstr += ',';
		}else{methodstr +=']';}
	}methodstr += ');';
	jsOfAnimes.push(methodstr);
	jsOfAnimes.push('setPrintf("'+pstr+'");');
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'printf_js("'+name+'","'+value+'");');
		for_contexts_array[for_cnt-1]+='printf_js("'+name+'","'+value+'");';
		
	}
}

function printf_djs(dstr){
var tempArray= dstr.split(/\r\n|\r|\n/);//改行で区切り
var tempstr ="";
for(var pi = 0;pi<tempArray.length;pi++)tempstr += tempArray[pi];
dstr = tempstr;
if(action_frag == true&&for_flag){
	jsOfAnimes.push('ANIME_printf("'+dstr+'");');
	jsOfAnimes.push('setPrintf("'+dstr+'");');
	consoleStatus = document.getElementById("console").value;
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'printf_djs('+dstr+');');
		for_contexts_array[for_cnt-1]+='printf_djs("'+dstr+'");';
		for(var fi = 0;fi < for_cnt-1;fi++){
			for_contexts_array[fi] += 'for_next;';
		}
	}
}

function setPrintf(value){
	if(String(value).match(/null/))value = value.replace(/null/g,"?");
	document.getElementById("console").value += (value)+"\n";
	consoleStatus = document.getElementById("console").value;
	sign = 1;
}

/*↓------------------------------------その他------------------------------------↓*/
function doSampleCode(){
	codeArrayInit();ANIME_reset();
	consoleStatus="";action_frag = true;if_cnt = 0;syntaxErrorFlag = true;animeStartIndex=0;
	document.getElementById("console").value="";codeFinishFlag = false
	if_conditions.push(true);if_end_flag.push(true);
	encodeTime++;
	var samplecode;
	if(htmlversion=="111")samplecode = sample111;
	if(htmlversion=="q1")samplecode = sampleMatome1;
	if(htmlversion=="211")samplecode = sample211;
	if(htmlversion=="212")samplecode = sample212;
	if(htmlversion=="213")samplecode = sample213;
	if(htmlversion=="221")samplecode = sample221;
	if(htmlversion=="222")samplecode = sample222;
	if(htmlversion=="231")samplecode = sample231;
	if(htmlversion=="232")samplecode = sample232;
	if(htmlversion=="241")samplecode = sample241;
	if(htmlversion=="242")samplecode = sample242;
	if(htmlversion=="c2")samplecode = sampleMatome2;
	if(htmlversion=="311")samplecode = sample211;
	if(htmlversion=="312")samplecode = sample312;
	if(htmlversion=="313")samplecode = sample313;
	if(htmlversion=="314")samplecode = sample314;
	if(htmlversion=="321")samplecode = sample321;
	if(htmlversion=="331")samplecode = sample331;
	if(htmlversion=="q3")samplecode = sampleMatome3;
	var samplecode1 = samplecode.split(";");
	for(var si = 0;si < samplecode1.length;si++){
			sampleOfAnimes.push(samplecode1[si]);
		}
		console.log(sampleOfAnimes.length);
		sign = 1;
		sampleR();
}
var sampleAnimeIndex = 0;
function sampleR(){
	//console.log("現在のanimeStartIndex："+animeStartIndex)
	console.log("サンプル実行中…現在のIndex："+sampleAnimeIndex+"現在実行中："+sampleOfAnimes[sampleAnimeIndex]);
	if(sampleAnimeIndex<sampleOfAnimes.length){
		if(sign===1){
			sign=0;
			eval(sampleOfAnimes[sampleAnimeIndex]);
			if(sampleOfAnimes[sampleAnimeIndex].match(/ANIME_scanf/)){
				sign=1;
				sampleAnimeIndex++;
			}
			else{sampleAnimeIndex++;}
			if(sampleAnimeIndex<sampleOfAnimes.length)setTimeout(sampleR,0);
		}else{
			if(sampleAnimeIndex<sampleOfAnimes.length)setTimeout(sampleR,0);
		}
	}
}
function sample_scanf_js(name,type){
if(action_frag == true){
	var nameArray = name.split(":");
	var typeArray = type.split(/\x20/);
	if(!(nameArray.length==typeArray.length))syntaxErrorFlag = false;
	scanfname = name;
	scanftype = type;
	var vtype;
	for(var si = 0;si < variables.length;si++){
		if(variables[si].name==scanfname)vtype = variables[si].data_type;
	}
	jsOfAnimes.push("ANIME_scanf()");
	var generatedValue = String(random_number(vtype));
	substitute(name,generatedValue);
}
}
function alertScanf(){
	alert("コンソールに文字を代入してください。");
	sign = 1;
}
/*↓------------------------------------なかやさんゾーン------------------------------------↓*/
function line(line_i){
line_reset();
	cEditor.markText({line: line_i-1, ch: 0}, {line: line_i-1, ch: 100}, {className: "styled-background"});
	cEditor.markText({line: 0 , ch: 0}, {line: line_i -2, ch: 100}, {className: "styled-background-null"});
	sign = 1;
}
function line_2(line_i){
	cEditor.markText({line: line_i-1, ch: 0}, {line: line_i-1, ch: 100}, {className: "styled-background-red"});
	cEditor.markText({line: 0 , ch: 0}, {line: line_i -2, ch: 100}, {className: "styled-background-null"});
}
function hantei_c3(code,scan1,scan2,seikai){
 var scan_data = new Array;
 scan_data[0] = scan1;
 scan_data[1] = scan2;
 var scan_i = 0;
 var r_c = hantei_eval(code,scan_data,scan_i);
 console.log( "正解：" + seikai + "　結果：" + r_c );
 if(r_c  == seikai){ return true;}
}
function hantei_331(code,scan,seikai){
 var scan_data = new Array;
 scan_data[0] = scan;
 var scan_i = 0;
 var r_c = hantei_eval(code,scan_data,scan_i);
 console.log( "正解：" + seikai + "　結果：" + r_c );
 if(r_c  == seikai){ return true;}
}
function hantei_eval(code, scan_data,scan_i){
 for(var k=0; k < code.length; k++){
 var re_eval
  eval(code[k]); 
 }
 return re_eval;
}