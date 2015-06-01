//グローバル変数をなるべくさける
//lengthによる配列オブジェクトへのアクセスを無くす。
var cEditor,lines;
var result = new Array();
var result2 = new Array();
var user_pattern_array = new Array();
var user_history = new Array();
var jsOfAnimes = new Array();
var sampleOfAnimes = new Array();
var rindex = 0;					//scanf文があった場合の、アニメ実行配列にはさむしおり
var animeStartIndex=0;
var scanfname, scanftype;
var codeOfUser;					//ユーザーのコードを保持
var encodeTime;					//現在が何回めの実行かを保持。現状使い道は一回目かそうじゃないかだけ。
var consoleStatus = "";			//コンソールの現在の状態を保持
var doTheMainfunction =0;		//アニメメソッドを格納している配列のしおり
var htmlversion;				//どのhtmlを読み込んでいるかの情報を保持
var syntaxErrorFlag = true,codeFinishFlag = false,returnflag=true,scanf_flag=false;	
var syntaxStr ="";				//エラー文の保存用配列
var scopeLevel = 1;				//変数のスコープの管理用

function disTexetarea(){
	cEditor.markText({line: 0 , ch: 0}, {line: 100, ch: 100}, {className: "styled-background-null"});
	cEditor.save();
	if(encodeTime>0){
		codeArrayInit();ANIME_reset();
		consoleStatus="";action_frag = true;if_cnt = 0;syntaxErrorFlag = true;animeStartIndex=0;returnflag=true;
		document.getElementById("console").value="";codeFinishFlag = false
		if_conditions.push(true);if_end_flag.push(true);
		for_flag = true;for_cnt = 0;
	}
	encodeTime++;
	codeOfUser = document.getElementById('text').value;
	consoleStatus = document.getElementById("console").value;
	if(!codeOfUser.match(/return\x20[0-9]/))returnflag=false;
	line_reset();
	result = parser.parse(codeOfUser);
	var ucode = "";
	var resultlength = result.length;
	for(var deb = 0;deb < resultlength;deb++)ucode += result[deb];
	result2 = ucode.match(/(.+);$/)[1].split(";");
	arr_check("パーサー結果配列",result2);
	var result2length = result2.length;
	for(doTheMainfunction =0;doTheMainfunction < result2length;doTheMainfunction++){
		console.log(result2[doTheMainfunction]);
		if(!result2[doTheMainfunction].match(/push_line/))user_pattern_array.push(result2[doTheMainfunction]);
		eval(result2[doTheMainfunction]);
		if(result2[doTheMainfunction].match(/^scanf_js.*/)){
			rindex = doTheMainfunction;
			break;
		}
	}
	jsOfAnimes.push('line_reset();');
	arr_check("アニメ配列",jsOfAnimes);
	sign =1;
	if(syntaxErrorFlag&&returnflag){
		R();
	}else if(!returnflag){
		eval(ANIME_error("シンタックスエラー！return0がないよ"));
	}else if(!syntaxErrorFlag){
		ANIME_reset();
		ANIME_error(syntaxStr);
	}else{
		eval(ANIME_error("シンタックスエラー！"));
	}
}

window.onload = function() {
	firstSetting();
	var loading = tm.app.LoadingScene({assets:ASSETS,nextScene:MainScene, }); 
	app.run();
	app.replaceScene(loading); 
	encodeTime = 0;
	var p = document.getElementById('button');
	p.addEventListener('click', disTexetarea, false);
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
	//if(document.getElementById("ver").getAttribute("mode")=="develop")
	SPEED=0.5;
	document.getElementById("console").value="";
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="211"){
	    console.log("画面説明を表示します。");
		document.getElementById("click_data").click();
	}
}

var scanfSetStr ="<b>コンソールに値を入力するにゃ！<BR>";
scanfSetStr+="例えば、scanf(“%d”,&amp;x);なら<BR>"
scanfSetStr+="<font color = red>「値」</font>を入力した後に<font color = red>「enterキー」</font>を押す</font>のにゃ。<BR>"
scanfSetStr+="<BR>"
scanfSetStr+="また、scanf(“%d %d”,&amp;x,&amp;y);なら<BR>"
scanfSetStr+="<font color = red>「値」「enterキー」「値」「enterキー」</font>の順に入力するにゃ。</b>";

function R(){
	//console.log("アニメ配列の長さ："+jsOfAnimes.length+"現在のanimeStartIndex："+animeStartIndex+"現在実行中："+jsOfAnimes[animeStartIndex]);
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			//console.log(jsOfAnimes[animeStartIndex]);
			eval(jsOfAnimes[animeStartIndex]);
			if(jsOfAnimes[animeStartIndex].match(/ANIME_scanf/)){
				sign=1;
				animeStartIndex++;
				document.getElementById("com").innerHTML=scanfSetStr;
				scanf_flag=true;
			}else{animeStartIndex++;document.getElementById("com").innerHTML="";}
			if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}else{
			if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}
	}
};

/*↓------------------------------------このプログラム内でのみ使う便利関数------------------------------------↓*/
function getVariableType(name){
	var vlen = variables.length;
	var result
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
	var result
	for(i = 0; i < vlen; i++){
		if(variables[i].name == name){
			result = variables[i].value;
			break;
		}
	}
	return result;
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

function check_arrayObj(num){
	console.log("--------------------第"+num+"番配列のスターテス-------------------------");
	var len = arrays.length;
	for(var i = 0;i<len;i++){
		if(arrays[i].number==num){
			console.log("型："+arrays[i].data_type);
			console.log("名前："+arrays[i].name);
			console.log("値列："+arrays[i].value);
			console.log("長さ："+arrays[i].length);
			console.log("対応番号："+arrays[i].number);
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

function getNewInput(){
if(action_frag == true){
	console.log("getNewInputを実行");
	var previous = consoleStatus;
	var now = document.getElementById("console").value;
	var previousArray = previous.split(/\r\n|\r|\n/);
	var nowArray= now.split(/\r\n|\r|\n/);
	var pstr="";
	var nstr="";
	for(var gi = 0;gi < previousArray.length;gi++)pstr += previousArray[gi];
	for(var gi = 0;gi < nowArray.length;gi++)nstr += nowArray[gi];
	//console.log("pstr："+pstr);console.log("nstr："+nstr);console.log(pstr.length);console.log(nstr.indexOf(pstr));
	var result = String(nstr.substr((pstr.length)+(nstr.indexOf(pstr))));
	consoleStatus = nstr;
	console.log("現状のコンソールステータス："+consoleStatus+"、result："+result);
	return result;
	}
}

function codeArrayInit(){
	if(result){
	console.log("様々な配列の初期化を開始しますします。");
		arr_init("result",result);
		arr_init("result2",result2);
		arr_init("variable",variables);
		arr_init("ifの条件",if_conditions);
		arr_init("if_end_flag",if_end_flag);
		arr_init("inputValueArray",inputValueArray);
		arr_init("for_contexts_array",for_contexts_array);
		arr_init("for_init_array",for_init_array);
		arr_init("for_conditions_array",for_contexts_array);
		arr_init("for_alt_array",for_alt_array);
		arr_init("for_line_array",for_line_array);
		arr_init("アニメ",jsOfAnimes);
	}
}

/*↓------------------------------------コア------------------------------------↓*/
//変数を格納する配列
var variables = [];
//ユーザーが使用できる配列と配列オブジェクトを格納する配列
var arrays = [];
var uArr_1 = [];
var uArr_2 = []
var uArr_3 = [];
var uArr_4 = [];
var uArr_5 = [];
var uArr_num = 0;
//変数のクラス
function Variable(data_type,name,value,scopeLevel){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.scopeLevel = scopeLevel;
};
function Arr(data_type,name,value,length,number){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.length = length;			//長さ
	this.number = number;			//対応番号
}

function array_declare(data_type,name,value,length){
if(action_frag == true){
	var alen = arrays.length;
	var init_flag = true;
	var valuelen = length;
	for(var i =0;i <alen;i++){
		if(arrays[i].name == name){createSyntaxError("すでに同じ名前の配列があるよ！");return false;}
	}
	if(!(value=="undefined")){
		var valuearr = value.split(":");
		valuelen = valuearr.length;
		init_flag=false;
		for(var i = 0;i < valuelen ;i++){
			if(!type_judge(data_type,valuearr[i])){createSyntaxError("配列に代入する値が変だよ！");return false}
		}
	}
	uArr_num++;
	console.log("uArr_num："+uArr_num);
	var v = new Arr(data_type,name,value,valuelen,uArr_num);
	if(init_flag){
		jsOfAnimes.push('ANIME_array_sengen("'+data_type+'","'+name+'","'+valuelen+'");');
		arrays.push(v);
	}else{
		var tempArr = value.split(":");
		var len=tempArr.length;
		switch(uArr_num){
			case 1: uArr_1 = value.split(":");
			break;
			case 2: uArr_2 = value.split(":");
			break;
			case 3: uArr_3 = value.split(":");
			break;
			case 4: uArr_4 = value.split(":");
			break;
			case 5: uArr_5 = value.split(":");
			break;
		}
		var str = "[";	
		for(var i = 0;i < len ;i++){
			str += (''+tempArr[i]+'');
			if(i<len-1){str += ',';}else{str +=']';}
		}
		jsOfAnimes.push('ANIME_array_sengen_dainyu("'+data_type+'","'+name+'","'+valuelen+'",'+str+');');
		arrays.push(v);
	}
}
}

function arr_substitute(name,index,value){
	var len=arrays.length;
	var str="";
	var tempArr = [];
	for(var i=0;i<len;i++){
		if(arrays[i].name==name)tempArr=arrays[i].value.split(":");
	}
	tempArr[index] = value;
	var templen = tempArr.length;
	for(var i = 0;i<templen;i++){
		str+=tempArr[i];
		if(i<templen-1)str += ':';
	}
	for(var i=0;i<len;i++){
		if(arrays[i].name==name)tempArr=arrays[i].value = str;
	}
}

function substitute(name,value){//変数に数字を代入するメソッド
if(action_frag == true&&for_flag){
	var cvflag = false;//代入する値が計算式、または、一つの変数かか判別するフラグ
	var str;
	var vtype = getVariableType(name);
	var vvalue = getVariableValue(value);
	if(value.match(/:/)){//代入する値が計算式の場合
		cvflag = true;
		var fArray = value.split(":");
		value = calc(value);		//計算結果
		str = "[";		//計算式
		for(var si = 0;si < fArray.length;si++){
			str += ('"'+fArray[si]+'"');
			if(si<fArray.length-1){str += ',';}
			else{str +=']';}
		}
		if(type_judge(vtype,value))value = regulate_js(vtype,value);
	}else if(value.match(/^[a-z]\w*/)){//代入する値が一つの変数の場合
		cvflag = true;
		if(!type_judge(vtype,value)){createSyntaxError("型の会わない変数同士を代入しようとしてるよ！");return false;}
		if(vvalue=="?"){createSyntaxError("中身のない変数を代入しようとしてるよ！");return false;}
		str = ('["'+value+'"]');
		value = regulate_js(vtype,vvalue);
	}else if(!type_judge(vtype,value)){
		console.log("substitute内、valueの型エラー");
		jsOfAnimes.push('ANIME_dainyu_typeMiss("'+name+'")');
		return false;
	}else{
		value = regulate_js(vtype,value);
	}
	for(var i = 0; i < variables.length; i++){
		if(variables[i].name == name){
			if(cvflag){
				jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",'+str+',"'+value+'")');
			}else{
				console.log("変数や数式ではありませんでした。substitute内の出力。value："+value+"、value："+value);
				jsOfAnimes.push('ANIME_dainyu("'+name+'","'+value+'")');
			}
			variables[i].value = value;
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

var inputValueArray = new Array();
function newscanfnext(){
if(scanf_flag){
	//if(scanftype.match(/^::/))scanftype =scanftype.match(/^::(.*)::$/)[1];
	var inputTypeArray =scanftype.split(/\x20/);
	var nameArray = scanfname.split(",");
	var typeArray = new Array();
	var tempInputValueArray = getNewInput().split(/\x20+/);
	var len = inputTypeArray.length;
	var tempnum;
	var inputFinishFlag =false;
	for(var ni = 0;ni < tempInputValueArray.length;ni++)inputValueArray.push(tempInputValueArray[ni]);
	for(var si = 0;si < inputTypeArray.length;si++)inputTypeArray[si] = inputTypeArray[si].match(/.*(%[a-z][a-z]?).*/)[1];
	for(var si = 0;si < inputTypeArray.length;si++)console.log("inputTypeArray["+si+"] is "+inputTypeArray[si])
	for(var si = 0;si < nameArray.length;si++)console.log("nameArray["+si+"] is "+nameArray[si])
	for(var si = 0;si < inputValueArray.length;si++)console.log("inputValueArray["+si+"] is "+inputValueArray[si]);
	for(var si = 0;si < tempInputValueArray.length;si++)if(!CheckLength(tempInputValueArray[si])){
		syntaxStr="入力は半角だけだよ！もう一回実行してね！";
		syntaxErrorFlag=false;
		}
	if(inputValueArray.length==len)inputFinishFlag=true;
	if(inputFinishFlag){
		document.getElementById("com").innerHTML="";
		for(var si = 0;si < inputTypeArray.length;si++){
			for(var si2 = 0;si2 <variables.length;si2++){
				if(variables[si2].name == nameArray[si]){
				console.log(inputTypeArray[si]+"："+nameArray[si]+"："+variables[si2].data_type+"："+inputValueArray[si]);
				/*console.log(((variables[si2].data_type=="int")&&!(inputTypeArray[si]=="%d")));
				console.log(((variables[si2].data_type=="double")&&!(inputTypeArray[si]=="%lf")));
				console.log(((variables[si2].data_type=="char")&&!(inputTypeArray[si]=="%c")));*/
						if(((variables[si2].data_type=="int")&&!(inputTypeArray[si]=="%d"))||
						((variables[si2].data_type=="double")&&!(inputTypeArray[si]=="%lf"))||
						((variables[si2].data_type=="char")&&!(inputTypeArray[si]=="%c"))){
								syntaxErrorFlag = false;
								syntaxStr = "型と入力指定文字があってないよ！";
							}
					}
				}
			}
			tempnum = regulate_js(getVariableType(nameArray[si]),inputValueArray[si])
			substitute(nameArray[si],tempnum);
			user_pattern_array.push('newscanfnext('+nameArray[si]+','+inputValueArray[si]+')');
		}
		for(doTheMainfunction = rindex+1 ;doTheMainfunction < result2.length;doTheMainfunction++){
			console.log(result2[doTheMainfunction]);
			user_pattern_array.push(result2[doTheMainfunction]);
			eval(result2[doTheMainfunction]);
			if(result2[doTheMainfunction].match(/^scanf_js.*/)){
				rindex = doTheMainfunction;
				break;
			}
		}
		arr_check("アニメ配列",jsOfAnimes);sign =1;
		scanf_flag=false;
		if(syntaxErrorFlag){
				R();
		}else{
			console.log("warning");
			ANIME_error(syntaxStr);
		}
	}
}
function return_js(value){
	console.log("return受領。終わりだよ")
	jsOfAnimes.push("ANIME_finish()");
	codeFinishFlag = true;
}
function ANIME_finish(){
	answer_check(htmlversion);
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
		//console.log(if_end_flag.length);
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
	//console.log("assess内の出力："+tempStr+"のなかに変数の可能性有り！！")
	numOfVariable = condition.match(reg).length;//console.log(numOfVariable);
	changeVariables = condition.match(reg);//console.log(changeVariables);
	for(var ai = 0;ai < numOfVariable;ai++){
		errorFlag =false;
		for(var aii = 0;aii < variables.length;aii++){
			if(changeVariables[ai] == variables[aii].name){
				tempStr = tempStr.replace(changeVariables[ai],variables[aii].value);
				errorFlag = true;
			}
		}
		if(!errorFlag){
			//console.log("アウト♡");
			syntaxErrorFlag = false;
			syntaxStr = "条件式に定義されてない変数が入っているよ！";
			return null;
		}
	}
	}else{
		//console.log("assess内の出力；変数の可能性無し")
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
		syntaxErrorFlag = false;
		syntaxStr = "for文のカッコの中では変数を宣言できないよ！";
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
		syntaxErrorFlag = false;
		syntaxStr = "for文の回数が多すぎるよ！";
	}
	console.log(cnt+"層の実行終了。");
	console.log("evalcontext実行完了");
}


//宣言を行う関数
function duplication_judge(data_type,name,value){
if(action_frag == true&&for_flag){
	user_history.push('duplication_judge("'+data_type+'","'+name+'","'+value+'")');
	if(value == null||value=="null"){
		if(variables[0] == null){
			variable_declare(data_type,name,value);//console.log(name+"の宣言を最初に受け付けました。");
		} else {
			for(i = 0; i < variables.length; i++){
			//console.log(name+"と、"+variables[i].name+"を確認");
				if(variables[i].name == name){
					console.log("重複確認");
				syntaxErrorFlag = false;
				syntaxStr = "同じ名前の変数を既に宣言してるよ！";
					return false;
				}
			}
			variable_declare(data_type,name,value);
		}
	}else {//初期化されてる場合
		var fArrayStr = "";
		if(value.match(":")||(value.match(/[a-z][a-zA-Z0-9]*/)&&(data_type=="int"||data_type=="double"))){console.log("初期化の際に演算処理を受け付けました")
			var fArray = value.split(":");
			value = calc(value);
			fArrayStr = "[";
			for(var si = 0;si < fArray.length;si++){
				fArrayStr += ('"'+fArray[si]+'"');
				if(si<fArray.length-1){
					fArrayStr += ',';
				}else{
					fArrayStr +=']';
				}
			}
		}
		if(variables[0] == null){
		variable_declare_init(data_type,name,value,fArrayStr);//console.log(name+"の宣言を最初に受け付けました。");
		} else {
			for(i = 0; i < variables.length; i++){
			//console.log(name+"と、"+variables[i].name+"を確認");
			if(variables[i].name == name){
				console.log("重複確認");
				syntaxErrorFlag = false;
				syntaxStr = "同じ名前の変数を既に宣言してるよ！";
				return false;
			}
		}
		variable_declare_init(data_type,name,value,fArrayStr);
		}
	}
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'duplication_judge("'+data_type+'","'+name+'","'+value+'");');
		for_contexts_array[for_cnt-1]+='duplication_judge("'+data_type+'","'+name+'","'+value+'");';
		
	}
}

function variable_declare(data_type,name,value){//配列を変数に代入させる関数
if(action_frag == true){
	var v = new Variable(data_type,name,"?",scopeLevel);
	jsOfAnimes.push('ANIME_sengen("'+data_type+'","'+name+'");');
	variables.push(v);
	}
}


function variable_declare_init(data_type,name,value,exp){//配列を変数に代入させる関数
if(action_frag == true){
	if(data_type=="int"){
		if(!value){
			value = "?"
		}else{
			value = Math.floor(value);
		}
	}else if(data_type=="double"){
		if(!value){
			value = "?"
		}else{
			value = Number(value).toFixed(6);
		}
	}
	var v = new Variable(data_type,name,value,scopeLevel);
	user_pattern_array.push('substitute("'+name+'","'+value+'")');
	//console.log('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'");');
	if(exp){
		jsOfAnimes.push('ANIME_sengen_enzan("'+data_type+'","'+name+'",'+exp+',"'+value+'");');
	}else{
		jsOfAnimes.push('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'");');//ANIME_sengen_dainyuはリテラル(数字だけ)
		}
	variables.push(v);
	}
};

function regulate_js(data_type,value){
	//console.log("regulate_js内の出力。name："+name+"、value ："+value);
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

function variable_declare(data_type,name,value){//配列を変数に代入させる関数
if(action_frag == true){
	var v = new Variable(data_type,name,"?",scopeLevel);
	jsOfAnimes.push('ANIME_sengen("'+data_type+'","'+name+'");');
	variables.push(v);
	}
};

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
				if(variable_value=="?"){
					createSyntaxError("値の入っていない変数が演算式の中にあるよ！");
					return null;
				}
			}else{
				createSyntaxError("存在しない変数を指定してる所があるよ！");
				return null;
			}
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
	while(type.match(/^\x20(.*)/)){
		type = type.match(/^\x20(.*)/)[1];
	}
	while(type.match(/(.*)\x20$/)){
		type = type.match(/(.*)\x20$/)[1];
	}
	console.log(type);
	var nameArray = name.split(",");
	var typeArray = type.split(/\x20/);
	for(var si = 0;si < typeArray.length;si++){
		if(typeArray[si].match(/.*(%[a-z][a-z]?).*/))typeArray[si] = typeArray[si].match(/.*(%[a-z][a-z]?).*/)[1];
	}
	for(var si = 0;si < typeArray.length;si++)console.log("typeArray["+si+"] is "+typeArray[si])
	for(var si = 0;si < nameArray.length;si++)console.log("nameArray["+si+"] is "+nameArray[si])
	var variableExistFlag = false;
	var ExistFlagArray = new Array();
	if(!(nameArray.length==typeArray.length)){
		syntaxErrorFlag = false;
		syntaxStr = "型と入力指定文字の数があってないよ！";
		return 0;
	}
	for(var si =0;si < nameArray.length;si++){
	variableExistFlag = false;
		for(var si2 = 0;si2 < variables.length;si2++){
			if(nameArray[si]==variables[si2].name)variableExistFlag = true;
		}
		ExistFlagArray.push(variableExistFlag);
	}
	for(var si = 0;si < typeArray.length;si++){
		for(var si2 = 0;si2 <variables.length;si2++){
			if(variables[si2].name == nameArray[si]){
				console.log(typeArray[si]+"："+nameArray[si]+"："+variables[si2].data_type);
				console.log(((variables[si2].data_type=="int")&&!(typeArray[si]=="%d")));
				console.log(((variables[si2].data_type=="double")&&!(typeArray[si]=="%lf")));
				console.log(((variables[si2].data_type=="char")&&!(typeArray[si]=="%c")));
				if(((variables[si2].data_type=="int")&&!(typeArray[si]=="%d"))||
				((variables[si2].data_type=="double")&&!(typeArray[si]=="%lf"))||
				((variables[si2].data_type=="char")&&!(typeArray[si]=="%c"))){
					syntaxErrorFlag = false;
					syntaxStr = "型と入力指定文字があってないよ！";
					}
				}
			}
		}
	for(var si = 0;si < ExistFlagArray.length;si++){
		if(!ExistFlagArray[si]){
			syntaxErrorFlag = false;
			syntaxStr = "scanf内で存在しない変数を指定しているよ！"
		}
	}
	console.log("コンパイルチェック："+syntaxErrorFlag);
	console.log(inputValueArray.length);
	if(inputValueArray.length!=0){
		var il = inputValueArray.length;
		for(var st = 0;st < il;st++)inputValueArray.shift();
	}
	scanfname = name;
	scanftype = type;
	jsOfAnimes.push("ANIME_scanf()");
	}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'scanf_js("'+name+'","'+type+'");');
		for_contexts_array[for_cnt-1]+='scanf_js("'+name+'","'+type+'")';
		
	}
}



function printf_js(name,value){
if(action_frag == true&&for_flag){
	var errorflag;
	var typeMissErrorFlag = false;
	if(value.match(/^:@:.*:@:$/)){
		value =value.match(/^:@:(.*):@:$/)[1];
		console.log("※注意：変数の出力から始まるため、パーサで与えられているはずの「：：」を除去しています。"+value)
	}
	var pstr = "";
	var nameArray = name.split(",");
	var valueArray = value.split(":@: :@:");
	var namelen = nameArray.length;
	var valuelen = valueArray.length;
	var inputTypeArray =new Array();
	for(var pi2 = 0;pi2 < nameArray.length;pi2++){
		console.log("nameArray："+nameArray[pi2]);
			if(nameArray[pi2].match(":")){
				syntaxErrorFlag = false;
				syntaxStr = "このアプリではprintf文内で計算はできないよ！！ごめんね！";
			}
		}
	var inputCounter = 0;
	if(namelen>1){
		for(var i = 0;i < namelen;i++)user_pattern_array.push('printf_js("'+nameArray[i]+'","'+valueArray[i]+'")');
	}
	for(var pi = 0;pi < valueArray.length;pi++)console.log("valueArray："+valueArray[pi]);
	for(var pi = 0;pi < valueArray.length;pi++){
		if(valueArray[pi].match(/^%[a-z]/)){inputTypeArray.push(valueArray[pi]);
		inputCounter++;}
	}
	if(!(inputCounter==nameArray.length)){
		syntaxErrorFlag =false;
		syntaxStr = "変数の数と変換指定文字列の数があってないよ！";
		return 0;
	}
	console.log(inputCounter);
	for(var pi = 0;pi < inputTypeArray.length;pi++){
		for(var pi2 = 0;pi2 <variables.length;pi2++){
			if(variables[pi2].name == nameArray[pi]){//console.log(inputTypeArray[pi]+nameArray[pi]+variables[pi2].data_type);
				if(((variables[pi2].data_type=="int")&&!(inputTypeArray[pi]=="%d"))||
					((variables[pi2].data_type=="double")&&!(inputTypeArray[pi]=="%f"))||
					((variables[pi2].data_type=="char")&&!(inputTypeArray[pi]=="%c")))typeMissErrorFlag = true;
			}
		}
	}
	var variableNumCounter = 0;
	var whetherCharFlag = false;
	for(var pi = 0;pi<valueArray.length;pi++){
		if(valueArray[pi].match(/^%[a-z]/)){
			whetherCharFlag = false;
			/*if(nameArray[variableNumCounter].match(":")){
				console.log(calc(nameArray[variableNumCounter]));
			}*/
			for(var pi2 = 0;pi2 < variables.length;pi2++){
				if(variables[pi2].name == nameArray[variableNumCounter]){
					if(variables[pi2].data_type=="char")whetherCharFlag = true;
				}
			}
			if(whetherCharFlag){
				for(var pi2 = 0;pi2 < variables.length;pi2++){
					if(variables[pi2].name == nameArray[variableNumCounter]){
						pstr += variables[pi2].value;
					}
				}
			}else{
				pstr += calc(nameArray[variableNumCounter]);
			}
			variableNumCounter++;
		}else{
			pstr += valueArray[pi];
		}
	}
	
	var methodstr;
	if(typeMissErrorFlag){
		methodstr = "ANIME_printf_typeMiss(["
	}else{
		methodstr = "ANIME_printf(["
	}
	for(var pi = 0;pi < valueArray.length;pi++){
		methodstr += ('"' + valueArray[pi] + '"');
		if(pi<valueArray.length-1){
			methodstr += ',';
		}else{
			methodstr +=']';
		}
	}methodstr += ',[';
	for(var pi = 0;pi < nameArray.length;pi++){
		methodstr += ('"' + nameArray[pi] + '"');
		if(pi<nameArray.length-1){
			methodstr += ',';
		}else{
			methodstr +=']';
		}
	}methodstr += ');';
	console.log("methodstr："+methodstr);
	console.log("pstr："+pstr);
	jsOfAnimes.push(methodstr);
	if(!errorflag)jsOfAnimes.push('setPrintf("'+pstr+'");');
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
function answer_check(num){
	console.log(num+"のanswe_checkに入ります。");
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
		case 212:
			re = new RegExp(/duplication_judge\("int","x",.+\)/);answer_pattern_array.push(re);
			re = new RegExp(/substitute\("x","10"\)/);answer_pattern_array.push(re);
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
			re = new RegExp(/plural_duplication\("double","height,weight,bmi")/);answer_pattern_array.push(re);
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
	}
	var flen = flagArr.length;
	console.log(flen+"つのtrueが必要です。");
	for(var i = 0;i < flen;i++){
		if(flagArr[i]){
			index++;
			console.log(index+"個目のtrueです！");
		}
	}
	if(flen == index&&flen!=0){
		console.log("All OK!!!");
		correct_answer();movenext();
	}else{
		miss_answer()
		console.log("GAME OVER...");
	}
	line_reset();
}

function context_check(uArr,aArr,flag){//flagがtrueなら順序を考慮したチェック、falseなら順序関係なしにチェック
	if(flag){console.log("順序を考慮したチェックを始めます。");}
	else{console.log("順序を考慮しないチェックを始めます。")}
	var index = 0;
	var ulen = uArr.length;
	var alen = aArr.length;
	for(var i =0;i < ulen;i++){
		console.log(uArr[i]+"と"+aArr[index]+"のチェック");
		if(uArr[i].match(aArr[index])){
			console.log("！！！マッチしました！！！");
			if(flag)i=-1;
			index++;
		}
		if(index == alen)break;
	}
	for(var i = 0;i < alen;i++)aArr.shift();
	if(index == alen){console.log("受け取ったアンサーパターンのクリアを確認しました");return true;}
	else{console.log("は？wwwwwwwwwwwwwwww");return false;}
}

function or_check(uArr,aArr,keystr){//どの場合でも正解にしたい時のチェック。！※！一文ずつ入れる事。
	var index = 0;
	var ulen = uArr.length;
	var alen = aArr.length;
	for(var i =0;i < ulen;i++){
		console.log(uArr[i]+"と"+aArr[index]+"のチェック");
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
	if(index == alen){console.log("受け取ったアンサーパターンのクリアを確認しました");return true;}
	else{console.log("は？wwwwwwwwwwwwwwww");return false;}
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
		console.log(uArr[i]+"と"+aArr[index]+"のチェック");
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
			console.log("次のアンサーパターンに写ります。");
		}
		if(index == alen)break;
	}
	for(var i = 0;i < alen;i++)aArr.shift();
	if(index == alen&&user_variable.length>0){console.log("受け取ったアンサーパターンのクリアを確認しました");return true;}
	else{console.log("は？wwwwwwwwwwwwwwww");return false;}
}


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
			console.log(samplecode1[si]);
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
//code=コード、scan_data[]=scanfで入力するデータ、re_eval=入力の結果
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
