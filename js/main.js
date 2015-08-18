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
	arr_check("パーサー結果配列",result2);
	var result2length = result2.length;
	evalfunction(0,result2);
	arr_check("アニメ配列",jsOfAnimes);
	sign = 1;
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
	if(!(htmlversion==="free"))document.getElementById('sample').addEventListener('click', doSampleCode, false);
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
	if(htmlversion=="debug")SPEED=0.125;
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
		if(!(rArr[i].match(/(push)|(plural)|(return)/)))user_pattern_array.push(rArr[i]);
		console.log("実行"+i+"個目："+rArr[i]);
		eval(rArr[i]);
		if(rArr[i].match(/^scanf_js.*/)&&for_flag&&action_frag){rindex = i;break;}
		if(rArr[i].match(/^end_of_for.*/)&&action_frag&&for_cnt==0){rindex = i;startContexts(0);break;}
	}
}

function R(){
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			eval(jsOfAnimes[animeStartIndex]);
			//console.log(jsOfAnimes[animeStartIndex]+"を実行中");
			if(jsOfAnimes[animeStartIndex].match(/ANIME_scanf/)){
				sign=1;animeStartIndex++;
				document.getElementById("com").innerHTML= scanfSetStr ;scanf_flag=true;
			}else{
				animeStartIndex++;
				document.getElementById("com").innerHTML="";
			}
		}
		if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
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
			if(variables[i].status=="a")console.log("長さ："+variables[i].length);
			if(variables[i].status=="ma"){
				console.log("長さ１[○][]："+variables[i].length1);
				console.log("長さ２[][○]："+variables[i].length2);
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
		for_flag = true;for_cnt = 0;rindex=0;
		scanf_flag=false;for_rindex = 0
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
	//if(/\[.+\]\[.+\]/.test(name)){name = name.match(/^([a-z]\w*)\[.+\]\[.+\]/)[1];}
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

function getVariableStatus(name){
	var vlen = variables.length;
	if(/\[.+\]/.test(name))name = name.match(/^([a-z]\w*)\[.+\]/)[1];
	var result;
	for(i = 0; i < vlen; i++){
		if(variables[i].name == name){
			result = variables[i].status;
			break;
		}
	}
	return result;
}


function calcArrayIndex(name){
	var vlen = variables.length;
	var result;
	if(/\[.+\]\[.+\]/.test(name)){
		var index1 = name.match(/[a-z]\w*\[(.+)\]\[.+\]/)[1];
		var index2 = name.match(/[a-z]\w*\[.+\]\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index1)||/:/.test(index1))index1 =calc(index1);
		if(/^[a-z]\w*/.test(index2)||/:/.test(index2))index2 =calc(index2);
		result = name.match(/^([a-z]\w*)\[.+\]\[.+\]/)[1] + "["+index1+"]["+index2+"]";
	}else if(/\[.+\]/.test(name)){
		var index = name.match(/[a-z]\w*\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index)||/:/.test(index))index =calc(index);
		result = name.match(/^([a-z]\w*)\[.+\]/)[1] + "["+index+"]";
	}else{
		console.log("システムエラー：引数の形に誤りがあります");
		eval("gabgabaa");
	}
	return result;
}

function getVariableValue(name){
	var vlen = variables.length;
	var existFlag = false;
	var result;
	if(/\[.+\]\[.+\]/.test(name)){
		var index1 = name.match(/[a-z]\w*\[(.+)\]\[.+\]/)[1];
		var index2 = name.match(/[a-z]\w*\[.+\]\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index1)||/:/.test(index1))index1 =calc(index1);
		if(/^[a-z]\w*/.test(index2)||/:/.test(index2))index2 =calc(index2);
		name = name.match(/^([a-z]\w*)\[.+\]\[.+\]/)[1];
		console.log("取得する二重配列"+name+"["+index1+"]"+index2);
	}else if(/\[.+\]/.test(name)){
		var index = name.match(/[a-z]\w*\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index)||/:/.test(index))index =calc(index);
		name = name.match(/^([a-z]\w*)\[.+\]/)[1];
		console.log("マッチしてる？"+name+"["+index+"]");
	}
	for(i = 0; i < vlen; i++){
		if(variables[i].name == name){
			existFlag = true;
			switch(variables[i].status){
				case "v":	result = variables[i].value;	break;
				case "a":
					if(variables[i].length <= index)return createSyntaxError("本来の長さ以上の値を参照しようとしているよ！");
					var temp = variables[i].value.split("@");
					result = temp[index];
				break;
				case "ma":
					if((variables[i].length1-1 < (index1))||(variables[i].length2 < (index2-1)))return createSyntaxError("本来の長さ以上の値を参照しようとしているよ！");
					var temp = variables[i].value.split("^");
					var temp2 = temp[index1].split("@");
					result = temp2[index2];
				break;
			}
			break;
		}
	}
	if(!existFlag)return createSyntaxError("存在しない変数を参照しているところがあるよ！");
	return result;
}

function jstrlen(str) {
	var len = 0;
	var str = escape(str);
   for (var i = 0; i < str.length; i++, len++) {
      if (str.charAt(i) == "%") {
         if (str.charAt(++i) == "u") {
            i += 3;
            len++;
         }
         i++;
      }
   }
   return len;
}

function getArrStr(uArr,flag1){//uArrは文字列化したい配列、flag1は「"」を挟むか
	var ulen = uArr.length;
	var result = '['
	for(var i = 0;i < ulen;i++){
		if(flag1){result += ('"' + uArr[i] + '"');}
		else{result +=uArr[i];}
		if(i<ulen-1){result += ',';}else{result +=']';}
	}
	return result;
}
/*↓------------------------------------コア------------------------------------↓*/
//変数や配列を格納する配列
var variables = [];
//変数のクラス
function Variable(data_type,name,value){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.status="v";
};
function Arr(data_type,name,value,length){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
	this.length = length;			//長さ
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
if(action_frag == true&&for_flag){variable_declare(data_type,name,value);}
else if(!for_flag){add_forcontext('duplication_judge("'+data_type+'","'+name+'","'+value+'");');}
}

function variable_declare(data_type,name,value){
	var vlen = variables.length;
	for(var i = 0;i < vlen ;i++)if(name==variables[i].name)return createSyntaxError("すでに同じ名前の変数があるよ！");
	if(/:/.test(value)||(/^[a-z]\w*/.test(value)&&!/null/.test(value)&&data_type!="char")){
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
		}else if(/\[.\]/.test(value)&&getVariableExist(value)){
			str = '["'+calcArrayIndex(value)+'"]';
			value = getVariableValue(value);
		}else{
			str='["'+value+'"]';
			value = regulate_js(data_type,getVariableValue(value));
		}
		jsOfAnimes.push('ANIME_sengen_enzan("'+data_type+'","'+name+'",'+str+',"'+value+'");');
	}else if(/^[a-z]\w*/.test(value)&&!/null/.test(value)&&data_type=="char"){
		var str = "[";
		if(getVariableExist(value)){
			str='["'+value+'"]';
			value = getVariableValue(value);
			jsOfAnimes.push('ANIME_sengen_enzan("'+data_type+'","'+name+'",'+str+',"'+value+'");');
		}else{
			if(jstrlen(value)>1)return createSyntaxError("char型の変数には文字１つしかいれられないよ！");
			jsOfAnimes.push('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'")');
		}
	}else if(/[0-9]+/.test(value)&&data_type!="char"){
		jsOfAnimes.push('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+regulate_js(data_type,
value)+'")');
	}else{
		value = "?";
		jsOfAnimes.push('ANIME_sengen("'+data_type+'","'+name+'");');
	}
	var v = new Variable(data_type,name,value);
	variables.push(v);
}

function array_declare(data_type,name,value,length){
if(action_frag == true&&for_flag){
	var alen = variables.length;
	var init_flag = false;
	var calc_flag = false;
	var valuelen = length;
	if(data_type=="char")length--;
	for(var i =0;i <alen;i++)if(variables[i].name == name)
		return createSyntaxError("すでに同じ名前の変数か配列があるよ！");
	if(value=="undefined"&&length=="undefined")return createSyntaxError("初期化しないときは長さを指定してね！");
	if(value!="undefined"){
		var valuearr = value.split("@");
		valuelen = valuearr.length;
		if(length < valuelen)return createSyntaxError("指定した長さ以上の要素が入っているよ！") ;
		init_flag = true;
		var str = "[";
		for(var i = 0;i < valuelen ;i++)if(/:/.test(valuearr[i]))calc_flag = true;
		if(!calc_flag){
			for(var i = 0;i < valuelen ;i++)if(data_type!="char"&&!type_judge(data_type,valuearr[i]))
			return createSyntaxError("配列に代入する値が変だよ！");
		}
	}else{
		value = "?";
		valuelen=1;
	}
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
		jsOfAnimes.push('ANIME_array_sengen_dainyu("'+data_type+'","'+name+'",'+length+','+exp+','+str+');');
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
		jsOfAnimes.push('ANIME_array_sengen_dainyu("'+data_type+'","'+name+'",'+length+','+str+','+str+');');
	}else{
		jsOfAnimes.push('ANIME_array_sengen("'+data_type+'","'+name+'","'+length+'");');
	}
	if(valuelen<length)for(var i = valuelen;i < length;i++)value+="@?";
	var v = new Arr(data_type,name,value,length);
	variables.push(v);
}else if(!for_flag){add_forcontext('array_declare("'+data_type+'","'+name+'","'+value+','+length+'");');}
}

function multiarray_declare(data_type,name,value,length1,length2){
if(action_frag){
	/*int a[2][3] = {{1,2,3},{4,5,6}};基本形：multiarray_declare("int","a","1@2@3^4@5@6","2","3");
	①int a[3][5] → 全て不定値・・・・・・・・・・・・・・・・・・・・・・・・・おっけー
	②int a[2][2] = {{},{}} → 全て0という値・・・・・・・・・・・・・・・・・おっけー
	④int a[3][5] = {{1,2},{1,2}} → 初期化しきれてないところは0という値・・・おっけー
	⑤int hoge[2][2] = {{1,2}}; → {1,2},{?,?}・・・・・・・・・・・・・・・おっけー*/
	if(value=="undefined"&&length1=="undefined"&&length2=="undefined")//int a[][];の場合の対処
		return createSyntaxError("二次元配列の宣言の仕方が間違ってるよ！") ;
	var alen = variables.length;
	var init_flag = false;
	var calc_flag = false;
	var animeEx = "[";
	var animeValue = "[";
	var objValue = "";
	var addStr = "?";
	if(length2=="undefined"||length1=="undefined")return createSyntaxError("配列の長さは両方決めてね！") ;//配列の長さは絶対指定;
	for(var i =0;i <alen;i++)if(variables[i].name == name)return createSyntaxError("すでに同じ名前の変数か配列があるよ！");
	if(value!="undefined"){//初期化されている時
		addStr = "0";
		var altvalue="";
		if(value==""){//{{}...}の時
			for(var i = 0;i < length1-1;i++)value+="^";
		}
		var value1arr = value.split("^");
		var len1 = value1arr.length;
		var len2 = length2;
		if(data_type=="char")len2=len2-1;
		arr_check("^",value1arr);
		for(var i = 0;i< len1;i++){
			var value2arr = value1arr[i].split("@");
			arr_check("@",value2arr);
			var value2arrlen = value2arr.length;
			for(var j=0;j<value2arrlen;j++){
				altvalue += value2arr[j];
				if(value2arr[j]=="")altvalue+=addStr;
				if(j<value2arrlen-1){altvalue += '@';}
			}
			if(len2>value2arrlen)for(var k = value2arrlen ;k < len2 ;k++)altvalue+=("@"+addStr);
			if(i<len1-1){altvalue += '^';}
		}
		value = altvalue;
		value1arr = value.split("^");//配列(大)の方
		len1 = value1arr.length;//要するに[][]の左の方の長さ
		if(length1=="undefined")length1 = len1;
		if(length1 < len1)return createSyntaxError("指定した長さ以上の要素が入っているよ！") ;//左の値が指定より多い対処
		init_flag = true;
		for(var i = 0;i < len1;i++){
			value2arr = value1arr[i].split("@");//配列(小)の方
			len2 = value2arr.length;//要するに[][]の左の方の長さ
			if((length2 < len2&&data_type!="char")||(length2-1 < len2&&data_type=="char"))
				return createSyntaxError("指定した長さ以上の要素が入っているよ！") ;//右の値が指定より多い対処
			for(var k = 0;k < len2;k++) {
				if(/:/.test(value2arr[k]))calc_flag = true;
				if(value2arr[k]!="?"&&data_type!="char"){
					animeEx+='"'+value2arr[k]+'"';
					animeValue+='"'+calc(value2arr[k])+'"';
					objValue += calc(value2arr[k]);
				}else if(data_type=="char"){
					animeEx+='"'+value2arr[k]+'"';
					animeValue+='"'+value2arr[k]+'"';
					objValue += value2arr[k];
				}else{
					animeEx+='null';;
					animeValue+='null';
					objValue += value2arr[k];
				}
				if(k<len2-1){animeEx += ',';animeValue += ',';objValue += '@';}
			}
			if(i<len1-1){animeEx += ',';animeValue += ',';objValue += '^';}
			else{animeEx += ']';animeValue += ']';}
		}
	jsOfAnimes.push('ANIME_twoDarray_sengen_dainyu("'+data_type+'","'+name+'",'+len1+','+len2+','+animeEx+','+animeValue+")");
	}else{//初期化なしの場合
		for(var i = 0;i < length1;i++){
			for(var j = 0;j < length2;j++){
				objValue += "?";
				if(j<length2-1){objValue += '@';}
			}
			if(i<length1-1){objValue += '^';}
		}
		jsOfAnimes.push('ANIME_twoDarray_sengen("'+data_type+'","'+name+'",'+length1+','+length2+")");
	}
	var v = new MultiArr(data_type,name,objValue,len1,len2);
	variables.push(v);
}
}

function substitute(name,value){//変数に数字を代入するメソッド
if(action_frag == true&&for_flag){
	var cvflag = false;//代入する値が計算式、または、一つの変数かか判別するフラグ
	var str;
	var len = variables.length;
	if(/\[.+\]\[.+\]/.test(name)){//二重配列ならnameとindex1と2(indexが変数なら数字に直す)を。なぜか条件に!(value.match(/:/)があったけどx[i][1] = 4+5;がバグるんで消す
		var index1 = name.match(/[a-z]\w*\[(.+)\]\[.+\]/)[1];
		var index2 = name.match(/[a-z]\w*\[.+\]\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index1)||/:/.test(index1))index1 =calc(index1);
		if(/^[a-z]\w*/.test(index2)||/:/.test(index2))index2 =calc(index2);
		name = name.match(/^([a-z]\w*)\[.+\]\[.+\]/)[1];
		console.log("二重配列！"+name+"、"+index1+"、"+index2);
	}else if(/\[.+\]/.test(name)&&!(value.match(/:/))){//もし配列なら、nameとindex(indexが変数の場合数字になおし)を宣言。
		var index = name.match(/[a-z]\w*\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index)||/:/.test(index))index =calc(index);
		name = name.match(/^([a-z]\w*)\[.+\]/)[1];
	}
	var vtype = getVariableType(name);
	if(vtype=="char"){
		var strlen  = jstrlen(value);
		switch(getVariableStatus(name)){
			case "v":if(strlen>1)return createSyntaxError("char型の変数には文字１つしかいれられないよ！");
			break;
			case "a":
				for(var i = 0;i < len;i++){
					if(variables[i]==name){
						if(variables.length>=strlen+1)return createSyntaxError("配列の長さを超えた文字列を代入してるよ！");
					}
				}
				value +='\0';
			break;
			case "ma":
				for(var i = 0;i < len;i++){
					if(variables[i]==name){
						if(variables.length2>=strlen+1)return createSyntaxError("配列の長さを超えた文字列を代入してるよ！");
					}
				}
			break;
		}
	}else{
		if(/\[.+\]/.test(value)&&!(value.match(/:/))){
			var valueindex = value.match(/[a-z]\w*\[(.+)\]/)[1];
			valueindex = calc(valueindex);
			value = getVariableValue(value);
		}else if(value.match(/:/)){//代入する値が計算式の場合
			cvflag = true;
			str = getArrStr(value.split(":"),true);//'"'+value.replace(/:/g,"")+'"';
			var fArray = value.split(":");
			value = calc(value);//計算結果
			if(!syntaxErrorFlag){line_reset();return 0;}
			if(type_judge(vtype,value))value = regulate_js(vtype,value);
			console.log("代入する値が計算式ですた。"+value);
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
	}
	var vstatus = getVariableStatus(name);
	for(var i = 0;i< len;i++){
	if(variables[i].name==name){
	switch(vstatus){
		case "v":
			if(cvflag){jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",'+str+',"'+value+'")');}
			else{jsOfAnimes.push('ANIME_dainyu("'+name+'","'+value+'")');}
			variables[i].value = value;
		break;
		case "a":
			var tempArr = [];
			for(var i=0;i<len;i++){
				if(variables[i].name==name){
					if(variables[i].length<index)return createSyntaxError("配列の長さ以上のインデックスに代入しようとしてるよ！");
					tempArr=variables[i].value.split("@");
				}
			}
			if(cvflag){jsOfAnimes.push('ANIME_array_enzan_dainyu("'+name+'['+index+']'+'",'+str+',"'+value+'")');}
			else{jsOfAnimes.push('ANIME_array_dainyu("'+name+'['+index+']'+'","'+value+'")');}
			tempArr[index] = value;
			var templen = tempArr.length;
			var str="";
			for(var i = 0;i<templen;i++){
				str+=tempArr[i];
				if(i<templen-1)str += '@';
			}
			for(var i=0;i<len;i++)if(variables[i].name==name)tempArr=variables[i].value = str;
			break;
			case "ma":
				console.log("二重配列のあれ" +value);
				var tempArr = [];
				var temp2Arr = [];
				var arrStr="";//変数の値パラメータを上書きする用の文字列
				var len1;//配列の長さ[○][]
				var len2;//配列の長さ[][○]
				for(var i=0;i<len;i++){
					if(variables[i].name==name){
						if((variables[i].length1 < index1-1)||(variables[i].length2 < index2-1))
							return createSyntaxError("配列の長さ以上のインデックスに代入しようとしてるよ！");
						tempArr=variables[i].value.split("^");
						len1 = variables[i].length1;len2 =variables[i].length2;
					}
				}
			if(cvflag){jsOfAnimes.push('ANIME_array_enzan_dainyu("'+name+'['+index1+']['+index2+']'+'",'+str+',"'+value+'")');}
			else{jsOfAnimes.push('ANIME_array_dainyu("'+name+'['+index1+']['+index2+']'+'","'+value+'")');}
				for(var i = 0;i < len1;i++){
					temp2Arr = tempArr[i].split("@");
					for(var j = 0;j < len2;j++){
						if((index1==i)&&(index2==j)){arrStr+=value;}
						else{arrStr+=temp2Arr[j];}
						if(j<len2-1)arrStr += '@';
					}
					if(i<len1-1)arrStr += '^';
				}
				for(var i=0;i<len;i++)if(variables[i].name==name)variables[i].value = arrStr;
			break;
		}
	}
	}
	}else if(!for_flag){add_forcontext('substitute("'+name+'","'+value+'");')}
	
}

function push_line(line_i){
	if(action_frag	&&for_flag){jsOfAnimes.push('line(' + line_i + ');');}
	else if(!for_flag){add_forcontext('push_line("'+line_i+'");' );}
}

function return_js(value){
	jsOfAnimes.push("ANIME_finish()");
	codeFinishFlag = true;
}
function ANIME_finish(){
	line_reset();
	if(htmlversion=="debug"||htmlversion=="free"){}
	else{answer_check(htmlversion);}
}

var if_conditions = new Array();if_conditions.push(true);
var action_frag = true;
var if_cnt = 0;
var if_end_flag = new Array();if_end_flag.push(true);
function if_js(condition){
	if(for_flag){
	if_cnt++;scopeLevel++;
	if_conditions.push(assess(condition));
	//console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]);
	if(if_conditions[if_cnt]&&if_conditions[if_cnt-1]){
		if_end_flag.push(true);
		action_frag=true;
		//console.log("END第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}else{
		action_frag=false;
		if_conditions[if_cnt]=false;
		if_end_flag.push(false);
		//console.log(if_end_flag.length);
		//console.log("END第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}
	}else if(!for_flag){add_forcontext('if_js("'+condition+'");');}
}

function else_if_js(condition){
	if(for_flag){
	if_conditions[if_cnt]=assess(condition);
		//console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	if(!(if_end_flag[if_cnt])&&if_conditions[if_cnt]&&if_conditions[if_cnt-1]){
		//console.log("else_if_js内の出力：実行しようぜ！");
		if_end_flag[if_cnt]=true;
		action_frag=true;
		//console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}else{
	//console.log("else_if_js内の出力：実行しないぜ！");
		action_frag=false;
		if_conditions[if_cnt]=false;
		//if_end_flag[if_cnt]=false;
		//console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}
	}else if(!for_flag){add_forcontext('else_if_js("'+condition+'");');}
}

function else_js(){
	if(for_flag){
	if_conditions[if_cnt] = true;
	//console.log("else_js内での出力：第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]);
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
	scopeLevel=scopeLevel-1;
	if_end_flag.splice((if_end_flag.length-1),1);
	if_conditions.splice((if_conditions.length-1),1);
	//console.log("第"+if_cnt+"階層のif条件結果："+if_conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+if_conditions[if_cnt-1]);
	if(if_conditions[if_cnt]&&if_conditions[if_cnt-1]){
		action_frag=true;
	}else if(if_cnt==0){
		action_frag=true;
	}else{
		action_frag=false;
	}
	}else if(!for_flag){add_forcontext('end_of_if();');}
}

function assess(condition){
	/*if(/true/.test(condition)){return true;}
	if(/false/.test(condition)){return false;}
	if(/undefined/.test(condition)){return 0;}*/
	console.log(condition+"のassessを開始するよ！");
	var tempStr = condition;
	var animeExp = [];
	var animeRes = [];
	var count = 0;
	var flag = false;
	var animeStr = '';
	for(var i = 0;i < tempStr.length;i++){//()付きで優先順位をつけているかチェック。つけているならtrue。つけてないならfalse
		if(/\(/.test(tempStr.charAt(i))){count++;}
		else if(/\)/.test(tempStr.charAt(i))){count++;}
		else if(count!=0&&/\||&/.test(tempStr.charAt(i))){i++;flag = true;}
	}
	var from = 0;
	if(flag){animeExp.push(condition);animeStr=tempStr;}
	else{
		for(var i = 0;i < tempStr.length;i++){
			if(/\||&/.test(tempStr.charAt(i))){
				animeExp.push(tempStr.slice(from,i));
				animeExp.push((tempStr.charAt(i)+tempStr.charAt(i+1)));i++;from=i+1;
			}else if(i == tempStr.length-1){animeExp.push(tempStr.slice(from,i+1));}
		}
		var animelen = animeExp.length;
		var animeExpStr = getArrStr(animeExp,true);
		for(var j = 0;j < animeExpStr.length;j++){
			if(/>|<|=/.test(animeExpStr.charAt(j))&&/>|<|=/.test(animeExpStr.charAt(j+1))){
				animeStr+=(":"+animeExpStr.charAt(j) + animeExpStr.charAt(j+1) +":");
				j++;
			}else if(/>|</.test(animeExpStr.charAt(j))){
				animeStr+=(":"+animeExpStr.charAt(j)+":");
			}else{
				animeStr += animeExpStr.charAt(j)
			}
		}
		
	}
	for(var i = 0;i < animelen;i+=2)animeRes.push(evalue(animeExp[i]));
	result = evalue(condition);
	jsOfAnimes.push('ANIME_compare('+animeStr+','+getArrStr(animeRes,false)+','+result+')');
	return result;
}

function evalue(condition){
	//console.log(condition+"のevalueを開始するよ！");
	if(/true/.test(condition)){return true;}
	if(/false/.test(condition)){return false;}
	if(/undefined/.test(condition)){return 0;}
	var result = false;
	var reg;
	var numOfVariable;
	var changeVariables;
	var variableExist = false;
	var errorFlag = false;
	var tempStr = condition;
	reg = new RegExp("[a-z][a-zA-Z0-9]*","g");
	if(reg.test(condition)){
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
var for_rindex = 0;								//evalcontext関数内のontext配列のしおり
var for_context_finish =true;					//forブロックの実行が全部終わったかどうか
var for_now_cnt = 0;							//現在どの階層のforcontextブロックを実行しているか
var for_index_array = [];						//ブロックごとにどこまで実行したか
function for_js(init,cond,alt,line_num){
if(action_frag == true){
	if(init!="while"){
		var altArr = alt.split(":");
		var alt = 'substitute("'+altArr[0]+'","'+altArr[0]+":"+altArr[1]+":"+altArr[2]+'")';
	}else{
		var alt = "";
	}
	for_contexts_array.push("");
	for_init_array.push(init);
	scopeLevel++;
	for_line_array.push('line('+line_num+')');
	for_flag = false;
	for_cnt++;
	for_index_array.push(0);
	if(for_cnt>=3)createSyntaxError("ごめんね、このアプリでは三重ループ以降は対応してないよ。");
	if(for_cnt>=1)for(var fi = 0;fi < for_cnt-1;fi++)for_contexts_array[0] += 'for_next;';
	for_conditions_array.push(cond);
	for_alt_array.push(alt);
	}
}

function end_of_for(){
if(action_frag == true){
	for_cnt=for_cnt - 1;
	scopeLevel-=1;
	}
}

function startContexts(cnt){
	var fcalength = for_contexts_array.length;
	for(var fi = 0;fi < fcalength;fi++)console.log(fi+"階層の文群："+for_contexts_array[fi]+"の"+cnt+"を実行します。");
	for_flag=true;
	jsOfAnimes.push(for_line_array[for_now_cnt]);
	if(for_init_array[cnt]!="while"){
		var forArray = for_init_array[cnt].split(",");
		if(forArray[0]=="true"){return createSyntaxError("for文のカッコの中では変数を宣言できないよ！");}
		else if(forArray[0]=="false"){substitute(forArray[1],forArray[2]);}
	}
	for_index_array.push(0);
	for_index_array[for_now_cnt]=0;
	foreval()
}

var breakflag = false;
function foreval(){
	if(/.+/.test(for_contexts_array[0]))tempArr=for_contexts_array[0].match(/(.*);$/)[1].split(";");//実行する階層のパーサ配列
	var len = tempArr.length;
	var limit = 0;
	for_context_finish =false;
	var firstdone = true;
	//var doflag = assess(for_conditions_array[0]);
	while(assess(for_conditions_array[0])&&limit<15){//forの条件がfalseになるまで順次実行
		firstdone = false;
		for(var i = for_index_array[0];i < len ;i++){
			if(tempArr[i].match(/for_next/)){
					console.log("二重ループです。");
					for_now_cnt++;
					doubleroop = true;
					console.log("ダブルループ群："+for_contexts_array[1]+"を実行します。");
					jsOfAnimes.push(for_line_array[0]);
					fordeval();console.log("戻ってきた"+breakflag+"0階層："+for_index_array[0]+"、1階層"+for_index_array[1]);
					if(breakflag||for_context_finish)break;
					for_index_array[0]++;
			}else{
				console.log(for_now_cnt+"："+tempArr[i]+"を実行中だぞ！、変化式："+for_alt_array[0]+"、"+len+"中"+for_index_array[0]+"まで実行、終了条件："+for_conditions_array[0]+"："+evalue(for_conditions_array[0]))
				if(syntaxErrorFlag){eval(tempArr[i]);}else{breakflag=true;ANIME_reset();ANIME_error(syntaxStr);}//実行
				for_index_array[0]++;
				if(!(tempArr[i].match(/(push)|(plural)|(return)/)))user_pattern_array.push(tempArr[i]);
				if(tempArr[i].match(/^scanf_js./)&&action_frag){console.log("scanfの実行です。");breakflag = true;break;}
				if(tempArr[i].match(/^break_js./)&&action_frag){for_index_array[0]=len;break;}
			}
		}//for文の終了
		console.log("ここまではきてる"+breakflag+"："+for_context_finish+"："+for_alt_array[0]+"："+for_index_array[0]+"："+evalue(for_conditions_array[0]));
		if(breakflag||for_context_finish)break;
		jsOfAnimes.push(for_line_array[0]);
		eval(for_alt_array[0]);
		if(for_now_cnt==0&&for_index_array[0]>=len-1&&!evalue(for_conditions_array[0])){
			assess(for_conditions_array[0]);
			forallfinish();//もし今のfor群の全てを実行し終えたら
			break;
			console.log("ここ？２");
		}else if(for_now_cnt!=0&&!doflag){
			//for_now_cnt-=1;
			console.log("ここ？");
			return 0;
		}
		limit++;
		for_index_array[0]=0;//forの文郡を順次実行したら、文郡を最初からもう一度実行。
		if(limit >=15)return createSyntaxError("繰り返しの回数が多すぎるよ！");
		if(for_context_finish){console.log("？");return 0;}
		
	}//while文の終了
	if(firstdone){
		forallfinish();
	}
	console.log("ここ？3"+evalue(for_conditions_array[0]));
}

function fordeval(){
	var tempArr = for_contexts_array[1].match(/(.*);$/)[1].split(";");//実行する階層のパーサ配列
	console.log("for_now_cnt="+for_now_cnt+"："+for_conditions_array[1] + "： "+ for_index_array[1]);
	if(for_index_array[1]==0){
		console.log('substitute('+for_init_array[1].split(",")[1]+','+for_init_array[1].split(",")[2]+')を実行します。')
		jsOfAnimes.push(for_line_array[1]);
		substitute(for_init_array[1].split(",")[1],for_init_array[1].split(",")[2]);
	}
	var len = tempArr.length
	var forlimit = 0;
	for_context_finish =false;
	while(assess(for_conditions_array[1])&&forlimit<15){
		for(var i = for_index_array[1];i < len ;i++){
			if(tempArr[i].match(/for_next/)){return createSyntaxError("二重以上のループがくまれてるよ！")}
			else{
				console.log(for_now_cnt+"："+tempArr[i]+"を実行中だぞ！、変化式："+for_alt_array[1]+"、"+len+"中"+for_index_array[1]+"まで実行、終了条件："+for_conditions_array[1]+"："+evalue(for_conditions_array[1]));
				if(syntaxErrorFlag){eval(tempArr[i]);}else{breakflag=true;ANIME_reset();ANIME_error(syntaxStr);}
				for_index_array[1]++;
				if(!(tempArr[i].match(/(push)|(plural)|(return)/)))user_pattern_array.push(tempArr[i]);
				if(tempArr[i].match(/^scanf_js./)&&action_frag){return createSyntaxError("ごめんね！このアプリでは二重ループ内でscanfはできないよ！");console.log("scanfの実行です。2");breakflag = true;break;}
				if(tempArr[i].match(/^break_js./)&&action_frag){for_index_array[1]=len;break;}
			}
		}
		if(breakflag)break;
		jsOfAnimes.push(for_line_array[1]);
		eval(for_alt_array[1]);
		var endflag = evalue(for_conditions_array[1]);
		if(for_index_array[1]>=len-1&&!endflag){
			doubleroop = false;
			for_now_cnt = 0;
			console.log("階層："+for_now_cnt+"実行"+for_contexts_array[1].match(/(.*);$/)[1].split(";").length+"中"+for_index_array[1]+"まで、"+evalue(for_conditions_array[1]))
			for_index_array[1]=0;
			for_index_array[0]++;
			return 0;
		}else if(for_now_cnt!=0&&!endflag){return 0;}
		forlimit++;
		for_index_array[1]=0;
		if(forlimit >=15)return createSyntaxError("繰り返しの回数が多すぎるよ！");
	}
}
/*--------------------------------------------------------ここから------------------------------------------*/
var doubleroop = false;
function for_eval(){
	//console.log(for_now_cnt+"階層の"+for_index_array[for_now_cnt]+"から実行するよ!続行条件："+evalue(for_conditions_array[for_now_cnt])+"現在のインデックス"+for_index_array[0]+"二重ループ目"+for_index_array[1]);
	var tempArr = [];
	if(/.+/.test(for_contexts_array[0]))tempArr=for_contexts_array[0].match(/(.*);$/)[1].split(";");//実行する階層のパーサ配列
	var len = tempArr.length
	var forlimit = 0;
	for_context_finish =false;
	var firstdone = true;
	console.log("ここ！"+(for_conditions_array[for_now_cnt])+"＝"+evalue(for_conditions_array[for_now_cnt]))
	while(evalue(for_conditions_array[for_now_cnt])&&forlimit<15){
		firstdone = false;
		for(var i = for_index_array[for_now_cnt];i < len ;i++){
			if(tempArr[i].match(/for_next/)){
					console.log("次の回想があるみたいですね！>");
					for_now_cnt++;
					doubleroop = true;
					startContexts(1);
					console.log("戻ってきた"+breakflag);
					if(breakflag||for_context_finish)break;
					for_index_array[for_now_cnt]++;
			}else{
console.log(for_now_cnt+"："+tempArr[i]+"を実行中だぞ！、変化式："+for_alt_array[for_now_cnt]+"、"+len+"中"+for_index_array[for_now_cnt]+"まで実行、終了条件："+for_conditions_array[for_now_cnt]+"："+evalue(for_conditions_array[for_now_cnt]));
				if(syntaxErrorFlag){eval(tempArr[i]);}
				else{breakflag=true;ANIME_reset();ANIME_error(syntaxStr);}
				for_index_array[for_now_cnt]++;
				if(!(tempArr[i].match(/(push)|(plural)|(return)/)))user_pattern_array.push(tempArr[i]);
				if(tempArr[i].match(/^scanf_js./)&&action_frag){console.log("およよ？");for_rindex = i;breakflag = true;break;}
				if(tempArr[i].match(/^break_js./)&&action_frag){for_index_array[for_now_cnt]=len;break;}
			}
		}
		console.log("ここまではきてる"+breakflag+"："+for_context_finish+"："+for_alt_array[for_now_cnt]);
		if(breakflag||for_context_finish)break;
		jsOfAnimes.push(for_line_array[for_now_cnt]);
		eval(for_alt_array[for_now_cnt]);
		if(for_now_cnt==0&&for_index_array[for_now_cnt]>=len-1&&!(assess(for_conditions_array[for_now_cnt]))){
			for_context_finish =true;//もし今のfor群の全てを実行し終えたら
			arr_init("",for_contexts_array);arr_init("",for_index_array);
			arr_init("",for_conditions_array);arr_init("",for_alt_array);
			arr_init("",for_line_array);arr_init("",for_init_array);
			for_rindex = 0;
			for_context_finish =true;
			evalfunction(rindex+1,result2);
			break;
		}else if(for_now_cnt!=0&&!(assess(for_conditions_array[for_now_cnt]))){
			//for_now_cnt-=1;
			return 0;
		}
		forlimit++;
		for_index_array[for_now_cnt]=0;
		if(forlimit >=15)return createSyntaxError("for文の回数が多すぎるよ！");
	}
	if(firstdone){
		for_context_finish =true;
		arr_init("",for_contexts_array);arr_init("",for_index_array);
		arr_init("",for_conditions_array);arr_init("",for_alt_array);
		arr_init("",for_line_array);arr_init("",for_init_array);
		for_rindex = 0;
		for_context_finish =true;
		evalfunction(rindex+1,result2);
	}
	if(for_context_finish)return 0;
}

function for_deval(){
	console.log("ダブルループ！");
	var tempArr = for_contexts_array[for_now_cnt].match(/(.*);$/)[1].split(";");//実行する階層のパーサ配列
	arr_check("",tempArr);
	var len = tempArr.length
	var forlimit = 0;
	for_context_finish =false;
	console.log("ここ？"+(for_conditions_array[for_now_cnt]))
	while(evalue(for_conditions_array[for_now_cnt])&&forlimit<15){
		for(var i = for_index_array[for_now_cnt];i < len ;i++){
			if(tempArr[i].match(/for_next/)){
				return createSyntaxError("二重以上のループがくまれてるよ！")
			}else{
console.log(for_now_cnt+"："+tempArr[i]+"を実行中だぞ！、変化式："+for_alt_array[for_now_cnt]+"、"+len+"中"+for_index_array[for_now_cnt]+"まで実行、終了条件："+for_conditions_array[for_now_cnt]+"："+evalue(for_conditions_array[for_now_cnt]));
				eval(tempArr[i]);
				for_index_array[1]++;
				if(!(tempArr[i].match(/(push)|(plural)|(return)/)))user_pattern_array.push(tempArr[i]);
				if(tempArr[i].match(/^scanf_js./)&&action_frag){console.log("およよ？");for_rindex = i;breakflag = true;break;}
				if(tempArr[i].match(/^break_js./)&&action_frag){for_index_array[for_now_cnt]=len;break;}
			}
		}
		if(breakflag)break;
		jsOfAnimes.push(for_line_array[for_now_cnt]);
		eval(for_alt_array[for_now_cnt]);
		var endflag = assess(for_conditions_array[for_now_cnt]);
		if(for_index_array[for_now_cnt]>=len-1&&!endflag){
			doubleroop = false;
			console.log("おわったっぽい？");
			for_now_cnt-=1;
			/*jsOfAnimes.push(for_line_array[for_now_cnt]);
			eval(for_alt_array[for_now_cnt]);*/
			console.log("階層："+for_now_cnt+"実行"+for_contexts_array[for_now_cnt].match(/(.*);$/)[1].split(";").length+"中"+for_index_array[for_now_cnt]+"まで、"+evalue(for_conditions_array[for_now_cnt]))
			var downforFin = for_index_array[for_now_cnt]>=for_contexts_array[for_now_cnt].match(/(.*);$/)[1].split(";").length-1
			if(for_now_cnt==0&&downforFin&&!(assess(for_conditions_array[for_now_cnt]))){
				for_context_finish =true;//もし今のfor群の全てを実行し終えたら
				arr_init("",for_contexts_array);arr_init("",for_index_array);
				arr_init("",for_conditions_array);arr_init("",for_alt_array);
				arr_init("",for_line_array);arr_init("",for_init_array);
				for_rindex = 0;
				for_context_finish =true;
				evalfunction(rindex+1,result2);
			break;
			}
			console.log(/scanf/.test(for_contexts_array[for_now_cnt+1])+"；"+!downforFin)
			return 0;
		}else if(for_now_cnt!=0&&!endflag){
			return 0;
		}
		forlimit++;
		for_index_array[for_now_cnt]=0;
		if(forlimit >=15)return createSyntaxError("for文の回数が多すぎるよ！");
	}
	//eval(tyottomate);
}
/*------------------------ここまで多分使ってないけど消してバグ怒ったら怖いから残す--------------------------------------*/

function forallfinish(){
	for_context_finish =true;//もし今のfor群の全てを実行し終えたら
	arr_init("",for_contexts_array);arr_init("",for_index_array);
	arr_init("",for_conditions_array);arr_init("",for_alt_array);
	arr_init("",for_line_array);arr_init("",for_init_array);
	for_rindex = 0;
	for_context_finish =false;
	evalfunction(rindex+1,result2);
}

function add_forcontext(str){
	//console.log(str+"をfor実行群に追加します。");
	for_contexts_array[for_cnt-1]+=str;
}

function break_js(){
	if(action_frag == true&&for_flag){
		for_conditions_array[for_now_cnt] = "false";
	}else if(!for_flag){add_forcontext('break_js();');}

}

function plural_declaration(type,variable){
if(action_frag == true&&for_flag){
	//console.log('plural_declaration("'+type+'","'+variable+'")');
	user_pattern_array.push('plural_declaration("'+type+'","'+variable+'")');
	//variable = variable.replace(/\x20/g,"");
	var v = variable.split(",");
	for(var i=0; i < v.length; i++){
		if(v[i].indexOf("=", 0) == -1){
			user_pattern_array.push('duplication_judge("'+type+'","'+v[i]+'", '+null+' )');
			duplication_judge(type,v[i], null );
		}else{
			var x = v[i].split("=");
			user_pattern_array.push('duplication_judge("'+type+'","'+x[0]+'","'+x[1]+'")');
			duplication_judge(type,x[0],x[1]);
		}
	}
}else if(!for_flag){
		console.log(for_cnt+"階層目のfor文の中にあります。以下の文をこの階層のfor_contexts_arrayに追加します"+'plural_declaration("'+type+'","'+value+'");');
		for_contexts_array[for_cnt-1]+='plural_declaration("'+type+'","'+value+'");';
		
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
			if(!syntaxErrorFlag){line_reset();return 0;}
			if(variable_value){
				fstr += variable_value;
				if(variable_value=="?")return createSyntaxError("値の入っていない変数が演算式の中にあるよ！");
				if(getVariableType(fArray[i])=="char")return createSyntaxError("char型は計算できないよ！");
			}else{console.log(fArray[i]+"："+variable_value+"存在しないよ！！！");return createSyntaxError("存在しない変数を指定してる所があるよ！");}
		}else{
			fstr += fArray[i];
		}
	}
	return String(eval(fstr));
}}

function type_judge(data_type,value){
if(action_frag == true){
	var value_type;
	//console.log(data_type+"、"+value+"、"+getVariableExist(value));
	if(getVariableExist(value)&&value.match(/^[a-z]\w*/))value_type = getVariableType(value);
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
			case "int":		if(typeArray[i]!="%d")return createSyntaxError("型と入力指定文字があってないよ！");break;
			case "double":	if(typeArray[i]!="%lf")return createSyntaxError("型と入力指定文字があってないよ！");break;
			case "char":	if(typeArray[i]!="%c")return createSyntaxError("型と入力指定文字があってないよ！");break;
		}
	}
	scanfname = name;
	scanftype = type;
	jsOfAnimes.push("ANIME_scanf()");
	}else if(!for_flag){add_forcontext('scanf_js("'+name+'","'+type+'");');}
}
var inputValueArray = [];
function newscanfnext(){
if(scanf_flag){
	var nameArray = scanfname.split(",");
	var typeArray = new Array();
	var tempArr = getNewInput().split(/\x20+/);
	for(var i = 0;i < tempArr.length;i++){
		inputValueArray.push(tempArr[i]);
	}
	var namelen = nameArray.length;
	var inputFinishFlag =false;
	for(var si = 0;si < inputValueArray.length;si++)if(!CheckLength(inputValueArray[si]))
		return createSyntaxError("入力は半角だけだよ！もう一回実行してね！");
	if(inputValueArray.length==namelen)inputFinishFlag=true;
	if(inputFinishFlag){
		document.getElementById("com").innerHTML="";
		for(var i = 0;i < namelen;i++){
			//substitute(nameArray[i],regulate_js(getVariableType(nameArray[i]),inputValueArray[i]));
			//console.log('newscanfnext('+nameArray[i]+','+inputValueArray[i]+')')
			substitute(nameArray[i],inputValueArray[i]);
			user_pattern_array.push('newscanfnext('+nameArray[i]+','+inputValueArray[i]+')');
		}
		arr_init("入力を完了しました",inputValueArray);
	}else{return 0;}
	if(!for_context_finish){breakflag=false;
		foreval();
		//if(doubleroop){for_deval();}else{for_eval();}
	}
	else{evalfunction(rindex+1,result2);}
	arr_check("アニメ配列",jsOfAnimes);
	sign =1;
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
	for(var i = 0;i < valueArray.length;i++)if(valueArray[i].match(/^%[a-z]/))
		inputTypeArray.push(valueArray[i]);
	if(inputTypeArray.length!=nameArray.length)return createSyntaxError("変数の数と変換指定文字列の数があってないよ！");
	if(!(/:/.test(nameArray[i]))){
		for(var i = 0;i < inputTypeArray.length;i++){
			switch(getVariableType(nameArray[i])){
				case "int":		if(inputTypeArray[i]!="%d")typeMissErrorFlag = true;	break;
				case "double":	if(inputTypeArray[i]!="%f")typeMissErrorFlag = true;	break;
				case "char":	if(inputTypeArray[i]!="%c")typeMissErrorFlag = true;	break;
			}
		}
	}
	var variableNumCounter = 0,pstr = "";
	for(var i = 0;i<valuelen;i++){
		if(valueArray[i].match(/^%[a-z]/)){
			if(/:/.test(nameArray[variableNumCounter])){pstr += calc(nameArray[variableNumCounter]);}
			else{pstr += getVariableValue(nameArray[variableNumCounter]);}
			variableNumCounter++;
			if(!syntaxErrorFlag){line_reset();return 0;}
		}else{
			pstr += valueArray[i];
		}
	}
	var methodstr;
	if(typeMissErrorFlag){methodstr = "ANIME_printf_typeMiss("}
	else{methodstr = "ANIME_printf("}
	methodstr += (getArrStr(valueArray,true)+',[');
	for(var pi = 0;pi < nameArray.length;pi++){
		if(/\[.\]/.test(nameArray[pi])){methodstr += '"'+calcArrayIndex(nameArray[pi])+'"';}
		else{methodstr += ('"' + nameArray[pi] + '"');}
		if(pi<nameArray.length-1){methodstr += ',';
		}else{methodstr +=']';}
	}methodstr += ');';
	jsOfAnimes.push(methodstr);
	jsOfAnimes.push('setPrintf("'+pstr+'");');
	}else if(!for_flag){add_forcontext('printf_js("'+name+'","'+value+'");');}
}

function printf_djs(dstr){
	if(action_frag == true&&for_flag){
		var tempstr = dstr.replace(/\/n/g,"\\n");
		jsOfAnimes.push('ANIME_printf("'+tempstr+'");');
		jsOfAnimes.push('setPrintf("'+dstr+'");');
		consoleStatus = document.getElementById("console").value;
	}else if(!for_flag){add_forcontext('printf_djs("'+dstr+'");');}
}

function setPrintf(value){
	var setStrArr = value.split("/n");
	var len = setStrArr.length;
	for(var i = 0;i < len;i++){
		if(String(setStrArr[i]).match(/null/))setStrArr[i] = setStrArr[i].replace(/null/g,"?");
		document.getElementById("console").value += (setStrArr[i]);
		consoleStatus = document.getElementById("console").value;
		if(len-i>1)document.getElementById("console").value += "\n";
	}
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
	if(htmlversion=="1")samplecode = sampleMatome1;
	if(htmlversion=="211")samplecode = sample211;
	if(htmlversion=="2111")samplecode = sample2111;
	if(htmlversion=="2112")samplecode = sample2112;
	if(htmlversion=="212")samplecode = sample212;
	if(htmlversion=="2121")samplecode = sample2121;
	if(htmlversion=="2122")samplecode = sample2122;
	if(htmlversion=="213")samplecode = sample213;
	if(htmlversion=="2131")samplecode = sample2131;
	if(htmlversion=="2132")samplecode = sample2132;
	if(htmlversion=="221")samplecode = sample221;
	if(htmlversion=="2211")samplecode = sample2211;
	if(htmlversion=="2212")samplecode = sample2212;
	if(htmlversion=="222")samplecode = sample222;
	if(htmlversion=="2221")samplecode = sample2221;
	if(htmlversion=="2222")samplecode = sample2222;
	if(htmlversion=="231")samplecode = sample231;
	if(htmlversion=="2311")samplecode = sample2311;
	if(htmlversion=="2312")samplecode = sample2312;
	if(htmlversion=="232")samplecode = sample232;
	if(htmlversion=="2321")samplecode = sample2321;
	if(htmlversion=="2322")samplecode = sample2322;
	if(htmlversion=="241")samplecode = sample241;
	if(htmlversion=="2411")samplecode = sample2411;
	if(htmlversion=="2412")samplecode = sample2412;
	if(htmlversion=="242")samplecode = sample242;
	if(htmlversion=="2421")samplecode = sample2421;
	if(htmlversion=="2422")samplecode = sample2422;
	if(htmlversion=="2")samplecode = sampleMatome2;
	if(htmlversion=="311")samplecode = sample311;
	if(htmlversion=="3111")samplecode = sample3111;
	if(htmlversion=="3112")samplecode = sample3112;
	if(htmlversion=="312")samplecode = sample312;
	if(htmlversion=="3121")samplecode = sample3121;
	if(htmlversion=="3122")samplecode = sample3122;
	if(htmlversion=="313")samplecode = sample313;
	if(htmlversion=="3131")samplecode = sample3131;
	if(htmlversion=="3132")samplecode = sample3132;
	if(htmlversion=="314")samplecode = sample314;
	if(htmlversion=="3141")samplecode = sample3141;
	if(htmlversion=="3142")samplecode = sample3142;
	if(htmlversion=="321")samplecode = sample321;
	if(htmlversion=="3211")samplecode = sample3211;
	if(htmlversion=="3212")samplecode = sample3212;
	if(htmlversion=="331")samplecode = sample331;
	if(htmlversion=="3311")samplecode = sample3311;
	if(htmlversion=="3312")samplecode = sample3312;
	if(htmlversion=="3")samplecode = sampleMatome3;
	if(htmlversion=="411")samplecode = sample411;
	if(htmlversion=="4111")samplecode = sample4111;
	if(htmlversion=="4112")samplecode = sample4112;
	if(htmlversion=="412")samplecode = sample412;
	if(htmlversion=="4121")samplecode = sample4121;
	if(htmlversion=="4122")samplecode = sample4122;
	if(htmlversion=="421")samplecode = sample421;
	if(htmlversion=="4211")samplecode = sample4211;
	if(htmlversion=="4212")samplecode = sample4212;
	if(htmlversion=="422")samplecode = sample422;
	if(htmlversion=="4221")samplecode = sample4221;
	if(htmlversion=="4222")samplecode = sample4222;
	if(htmlversion=="431")samplecode = sample431;
	if(htmlversion=="4311")samplecode = sample4311;
	if(htmlversion=="4312")samplecode = sample4312;
	if(htmlversion=="41")samplecode = sampleMatome41;
	if(htmlversion=="42")samplecode = sampleMatome42;
	if(htmlversion=="511")samplecode = sample511;
	if(htmlversion=="5111")samplecode = sample5111;
	if(htmlversion=="5112")samplecode = sample5112;
	if(htmlversion=="512")samplecode = sample512;
	if(htmlversion=="5121")samplecode = sample5121;
	if(htmlversion=="5122")samplecode = sample5122;
	if(htmlversion=="521")samplecode = sample521;
	if(htmlversion=="5211")samplecode = sample5211;
	if(htmlversion=="5212")samplecode = sample5212;
	if(htmlversion=="522")samplecode = sample522;
	if(htmlversion=="5221")samplecode = sample5221;
	if(htmlversion=="5222")samplecode = sample5222;
	if(htmlversion=="5")samplecode = sampleMatome5;
	if(htmlversion=="debug"){console.log("デバックモードでのサンプル実行を開始します");samplecode = sample4211;}
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
function valuein_check(data_type,name,value){
	var len = variables.length;
	if(/\[.+\]\[.+\]/.test(name)){//もし二重配列なら、nameとindex1と2(indexが変数の場合数字になおし)を宣言。
		var index1 = name.match(/[a-z]\w*\[(.+)\]\[.+\]/)[1];
		var index2 = name.match(/[a-z]\w*\[.+\]\[(.+)\]/)[1];
		var maxlen1 = index1;
		var maxlen2 = index2;
		if(/^[a-z]\w*/.test(index1)||/:/.test(index1))index1 =calc(index1);
		if(/^[a-z]\w*/.test(index2)||/:/.test(index2))index2 =calc(index2);
		name = name.match(/^([a-z]\w*)\[.+\]\[.+\]/)[1];
		for(var i = 0;i < len;i++){
			if(variables[i].name == name){
				maxlen1 = variables[i].length1;
				maxlen2 = variables[i].length2;
			}//maxlenとindexが同じ→まだ変数が存在していない→宣言時に呼ばれている
		}
	}else if(/\[.+\]/.test(name)){//もし配列なら、nameとindex(indexが変数の場合数字になおし)を宣言。
		var index1 = name.match(/[a-z]\w*\[(.+)\]/)[1];
		if(/^[a-z]\w*/.test(index)||/:/.test(index))index1 =calc(index);
		name = name.match(/^([a-z]\w*)\[.+\]/)[1];
		for(var i = 0;i < len;i++){
			if(variables[i].name == name)maxlen1 = variables[i].length1;
		}
	}
//ここまででnameには変数名のみ、index1には配列の場合のインデックス(数字)、index2には二重配列の場合のインデックス(数字)が入っている。maxlenにはそれぞれの最大の長さが格納されている。
	if(data_type=="char"){
		var strlen  = jstrlen(value);
		console.log(strlen);
		switch(getVariableStatus(name)){
			case "v":
				if(strlen>1)return createSyntaxError("char型の変数には文字１つしかいれられないよ！");
			break;
			case "a":
				if(maxlen1>=strlen+1)return createSyntaxError("配列の長さを超えた文字列を代入してるよ！");
			break;
			case "ma":
				if(maxlen2>=strlen+1)return createSyntaxError("配列の長さを超えた文字列を代入してるよ！");
			break;
		}
	}else{
		if(value.match(/:/)){//代入する値が計算式の場合
			cvflag = true;
			str = '"'+value.replace(/:/g,"")+'"';
			var fArray = value.split(":");
			value = calc(value);//計算結果
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
	}
}
function change_speed(num){SPEED = num;}
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