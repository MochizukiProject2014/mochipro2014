var text;
var cEditor;
var result = new Array();
var result2 = new Array();
var lines;
var jsOfAnimes = new Array();
var sampleOfAnimes = new Array();
var rindex;
var animeStartIndex=0;
var scanfname;
var scanftype;
var codeOfUser;
var encodeTime;
var consoleStatus = "";
var doTheMainfunction =0;
var htmlversion;
var syntaxErrorFlag = true;
var codeFinishFlag = false;
var returnflag=true;
var scanf_flag=false;
var syntaxStr ="";
function disTexetarea(){
	cEditor.markText({line: 0 , ch: 0}, {line: 100, ch: 100}, {className: "styled-background-null"});
	cEditor.save();
	if(encodeTime>0){
		codeArrayInit();animeArrayInit();ANIME_reset();
		consoleStatus="";action_frag = true;if_cnt = 0;syntaxErrorFlag = true;animeStartIndex=0;returnflag=true;
		document.getElementById("console").value="";codeFinishFlag = false
		conditions.push(true);if_end_flag.push(true);
	}
	sampleflag = false;
	encodeTime++;
	rindex = 0;
	text = document.getElementById('text').value;
	codeOfUser = text;
	consoleStatus = document.getElementById("console").value;
	codeOfUser = text;
	if(!text.match(/return\x20[0-9]/))returnflag=false;
	line_reset();
	result = parser.parse(text);
	var ucode = "";
	for(var deb = 0;deb < result.length;deb++)ucode += result[deb];
	result2 = ucode.split(";");
	codeArrayList();
	for(doTheMainfunction =0;doTheMainfunction < result2.length;doTheMainfunction++){
		console.log(result2[doTheMainfunction]);
		eval(result2[doTheMainfunction]);
		if(result2[doTheMainfunction].match(/^scanf_js.*/)){
			rindex = doTheMainfunction;
			break;
		}
	}
	//jsOfAnimes.push('line_reset();');
	animeArrayList();
	sign =1;
	console.log(syntaxErrorFlag+"："+returnflag)
	if(syntaxErrorFlag&&returnflag){
		R();
	}else if(!returnflag){
		eval(ANIME_error("シンタックスエラー！return0がないよ"));
	}else if(!syntaxErrorFlag){
		ANIME_error(syntaxStr);
	}else{
		eval(ANIME_error("シンタックスエラー！"));
	}
};


window.onload = function() {
	firstSetting();
	var loading = tm.app.LoadingScene({assets:ASSETS,nextScene:MainScene, }); 
	app.run();
	app.replaceScene(loading); 
	encodeTime = 0;
	var p = document.getElementById('button');
	p.addEventListener('click', disTexetarea, false);
	/*var p2 = document.getElementById('button2');
	p2.addEventListener('click', newscanfnext, false);*/
	htmlversion = document.getElementById("ver").getAttribute("version");
	document.getElementById('sample').addEventListener('click', doSampleCode, false);
	console.log("q"+document.getElementById("ver").getAttribute("version")+"を読み込みました。");
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
	SPEED=1;
	document.getElementById("console").value="";
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="211"){
	    console.log("画面説明を表示します。");
		document.getElementById("click_data").click();
	}
	/*document.getElementById("console").value="aa";consoleStatus="";document.getElementById("console").value="3 5";console.log(getNewInput())
	var tarray = getNewInput().split(/\x20+/);
	for(var i = 0;i < tarray.length;i++)console.log(tarray[i])*/
};

function CheckLength(str){//半角だとtrueを返す
	for(var i = 0;i < str.length;i++){
		var c = str.charCodeAt(i);
		if((c>=0x0&&c<0x81)||(c==0xf8f0)||(c>=0xff61&&c<0xffa0)||(c>=0xf8f1&&c<0xf8f4)){
				return true;
			}
		}
	return false;
}
function line(line_i){
	cEditor.markText({line: line_i-1, ch: 0}, {line: line_i-1, ch: 100}, {className: "styled-background"});
	cEditor.markText({line: 0 , ch: 0}, {line: line_i -2, ch: 100}, {className: "styled-background-null"});
	sign = 1;
}
function line_2(line_i){
	cEditor.markText({line: line_i-1, ch: 0}, {line: line_i-1, ch: 100}, {className: "styled-background-red"});
	cEditor.markText({line: 0 , ch: 0}, {line: line_i -2, ch: 100}, {className: "styled-background-null"});
}
function line_reset(){
	cEditor.value = text;
	cEditor.setValue(cEditor.value)
	cEditor.save();
	sign = 1;
}
function push_line(line_i){
	jsOfAnimes.push('line(' + line_i + ');');
}
var scanfSetStr ="<b>コンソールに値を入力するにゃ！<BR>";
scanfSetStr+="例えば、scanf(“%d”,&amp;x);なら<BR>"
scanfSetStr+="<font color = red>「値」</font>を入力した後に<font color = red>「enterキー」</font>を押す</font>のにゃ。<BR>"
scanfSetStr+="<BR>"
scanfSetStr+="また、scanf(“%d %d”,&amp;x,&amp;y);なら<BR>"
scanfSetStr+="<font color = red>「値」「enterキー」「値」「enterキー」</font>の順に入力するにゃ。</b>";
function R(){
	//console.log("現在のanimeStartIndex："+animeStartIndex)
	console.log("アニメ配列の長さ："+jsOfAnimes.length+"現在のanimeStartIndex："+animeStartIndex+"現在実行中："+jsOfAnimes[animeStartIndex]);
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			console.log(jsOfAnimes[animeStartIndex]);
			eval(jsOfAnimes[animeStartIndex]);
			if(jsOfAnimes[animeStartIndex].match(/ANIME_scanf/)){
				sign=1;
				animeStartIndex++;
				document.getElementById("com").innerHTML=scanfSetStr;
				scanf_flag=true;
			}
			else{animeStartIndex++;document.getElementById("com").innerHTML="";}
			if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}else{
			if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}
	}
};

/*function R2(){
	var animeNowIndex;
	console.log("アニメ配列の長さ："+jsOfAnimes.length+"現在のanimeStartIndex："+animeStartIndex);
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			console.log(jsOfAnimes[animeStartIndex]);
			animeNowIndex = animeStartIndex;
			eval(jsOfAnimes[animeStartIndex]);
			animeStartIndex++;
			if((animeStartIndex < jsOfAnimes.length)&&(jsOfAnimes[animeNowIndex].match(/line/)))setTimeout(R2,0);
		}
	}
	if(codeFinishFlag)console.log("おわったよ！！！！１")//fresult();
}*/

var swich=0;
var switchi=0;
function advance(){
	swich = 1;
	while(swich == 1){
		console.log(result[switchi]);
	 	eval(result[switchi]);
	 	document.getElementById('text').select();
	 	switchi++;
		swich = 0;
	}
	variablesList();
};

/*------------------------------------------------------*/
//||text.match(/^.*printf\('\x20*Hello\x20*World!\x20*'\);.*/)
var sampleflag = false;
function doSampleCode(){
	codeArrayInit();animeArrayInit();ANIME_reset();
	consoleStatus="";action_frag = true;if_cnt = 0;syntaxErrorFlag = true;animeStartIndex=0;
	document.getElementById("console").value="";codeFinishFlag = false
	conditions.push(true);if_end_flag.push(true);
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
var inputValueArray = new Array();
function newscanfnext(){
if(scanf_flag){
	//if(scanftype.match(/^::/))scanftype =scanftype.match(/^::(.*)::$/)[1];
	console.log("newscanfnextを実行");
	var inputTypeArray =scanftype.split(/\x20/);
	var nameArray = scanfname.split(":");
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
				if((inputValueArray[si]=="5")&&(nameArray[si]=="x")&&(htmlversion=="221"))TFscanfNumber=true;//221の正誤判定
				if((inputValueArray[si]=="15")&&(nameArray[si]=="x")&&(htmlversion=="222"))TFscanfNumberX=true;//222の正誤判定
				if((inputValueArray[si]=="5.5")&&(nameArray[si]=="y")&&(htmlversion=="222"))TFscanfNumberY=true;//222の正誤判定
				if((nameArray[si]=="x")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="231"))TFscanfInputX=true;//231の正誤判定
				if((nameArray[si]=="x")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="232"))TFscanfInputX=true;//232の正誤判定
				if((nameArray[si]=="y")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="232")){TFscanfInputY=true;}//232の正誤判定
				console.log("出力:"+type_judge(nameArray[si],inputValueArray[si]));
				if(htmlversion=="241"){for(var sn =0;sn <variables.length;sn++){//241の正誤判定
						if((variables[sn].name==nameArray[si])&&(variables[sn].data_type=="int")){scanfInputANY=true;inputArray.push(variables[sn].name);}
				}}
				if((inputValueArray[si]=="3.5")&&(nameArray[si]=="x")&&(htmlversion=="242"))TFscanfNumberX=true;//242の正誤判定
				if((inputValueArray[si]=="a")&&(nameArray[si]=="y")&&(htmlversion=="242"))TFscanfNumberY=true;//242の正誤判定
				}
				if(htmlversion=="c2"){for(var sn =0;sn <variables.length;sn++){//c2の正誤判定
						if((variables[sn].name==nameArray[si])&&(variables[sn].data_type=="int")){scanfInputANY=true;inputArray.push(variables[sn].name);}
				}}
				if((nameArray[si]=="x")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="321"))TFscanfInputX=true;
				if((nameArray[si]=="score")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="331"))TFscanfInputX=true;//331の正誤判定
				if((nameArray[si]=="height")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="q3"))TFscanfInputX=true;//232の正誤判定
				if((nameArray[si]=="weight")&&type_judge(nameArray[si],inputValueArray[si])&&(htmlversion=="q3"))TFscanfInputY=true;//232の正誤判定
				tempnum = regulate_js(nameArray[si],inputValueArray[si])
				substitute(nameArray[si],tempnum);
			}
			for(doTheMainfunction = rindex+1 ;doTheMainfunction < result2.length;doTheMainfunction++){
				console.log(result2[doTheMainfunction]);
				eval(result2[doTheMainfunction]);
				if(result2[doTheMainfunction].match(/^scanf_js.*/)){
					rindex = doTheMainfunction;
					break;
				}
			}animeArrayList();sign =1;
			scanf_flag=false;
			if(syntaxErrorFlag){
				R();
			}else{
			console.log("warning");
				ANIME_error(syntaxStr);
			}
		}
	}
}
/*function scanfnext(){
if(action_frag == true){
	firstPrintf=false;
	var p = getNewInput();
	console.log("scanfnextが押されたよ！"+ (p >= 20));
	if((p=="5")&&(scanfname=="x")&&(htmlversion=="221"))TFscanfNumber=true;//221の正誤判定
	if((p=="15")&&(scanfname=="x")&&(htmlversion=="222"))TFscanfNumberX=true;//222の正誤判定
	if((p=="30")&&(scanfname=="y")&&(htmlversion=="222"))TFscanfNumberY=true;//222の正誤判定
	if((p=="5")&&(scanfname=="x")&&(htmlversion=="223"))TFscanfNumberX=true;//223の正誤判定
	if((p=="5.5")&&(scanfname=="y")&&(htmlversion=="223"))TFscanfNumberY=true;//223の正誤判定
	if((scanfname=="x")&&type_judge(scanfname,p)&&(htmlversion=="231"))TFscanfInputX=true;//231の正誤判定
	if((scanfname=="y")&&type_judge(scanfname,p)&&(htmlversion=="232"))TFscanfInputY=true;//232の正誤判定
	if((scanfname=="x")&&type_judge(scanfname,p)&&(htmlversion=="233"))TFscanfInputX=true;//233の正誤判定
	if((scanfname=="y")&&type_judge(scanfname,p)&&(htmlversion=="233"))TFscanfInputY=true;//233の正誤判定
	if(htmlversion=="241"){
		for(var sn =0;sn <variables.length;sn++){//241の正誤判定
			if((variables[sn].name==scanfname)&&(variables[sn].data_type=="int"))scanfInputANY=true;inputArray.push(variables[sn].name);
		}
	}
	if((scanfname=="x")&&type_judge(scanfname,p)&&(htmlversion=="331"))TFscanfInputX=true;//233の正誤判定
	if(htmlversion=="341"){
		for(var sn =0;sn <variables.length;sn++){//241の正誤判定
			if((variables[sn].name==scanfname)&&(variables[sn].data_type=="int"))scanfInputANY=true;inputArray.push(variables[sn].name);
		}
	}
	//console.log("pはこれ："+p);
	substitute(scanfname,p);
	for(doTheMainfunction = rindex+1 ;doTheMainfunction < result2.length;doTheMainfunction++){
		console.log(result2[doTheMainfunction]);
		eval(result2[doTheMainfunction]);
		if(result2[doTheMainfunction].match(/^scanf_js/)){
			rindex = doTheMainfunction;
			break;
		}
	}
	animeArrayList();
	sign =1;
	R();
	}
}*/
/*--------------------------------------------------------------------------------------------------------------------------*/
//正誤判定削除
/*--------------------------------------------------------------------------------------------------------------------------*/
//変数を格納する配列
var variables = new Array();

//変数のクラス
function Variable(data_type,name,value){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
};

function debugArrayList(){
	console.log("配列全部を出力するよ！")
	variablesList();codeArrayList();animeArrayList();
	console.log("--------------------条件配列の中身一覧-------------------------");
	for(var joa = 0;joa < result2.length;joa++)console.log(conditions[joa]);
	console.log("----------------------------------------------------");
	console.log("--------------------ifフラグ配列の中身一覧-------------------------");
	for(var joa = 0;joa < result2.length;joa++)console.log(if_end_flag[joa]);
	console.log("----------------------------------------------------");
}

function variablesList(){
console.log("---------------------------変数配列の中身一覧-------------------------");
	for(var deb = 0;deb < variables.length;deb++){
		console.log((deb+1)+"つ目："+variables[deb].name+"、型："+variables[deb].data_type+"、値："+variables[deb].value)
	}
	console.log("----------------------------------------------------");
}

function codeArrayList(){
console.log("--------------------パーサで書き換えたjsメソッド配列の中身一覧-------------------------");
	for(var joa = 0;joa < result2.length;joa++)console.log(result2[joa]);
	console.log("----------------------------------------------------");
}
function animeArrayList(){
console.log("---------------------------アニメ配列の中身一覧-------------------------");
	for(var joa = 0;joa < jsOfAnimes.length;joa++)console.log(jsOfAnimes[joa]);
	console.log("----------------------------------------------------");
}

function codeArrayInit(){
	if(result){
	console.log("result配列とvariables配列を初期化します。");
		var rl = result.length;
		var rl2 = result2.length;
		var vs = variables.length;
		var c = conditions.length;
		var ief = if_end_flag.length;
		var il = inputValueArray.length;
		for(var st = 0;st < rl;st++)result.splice(0,1);
		for(var st2 = 0;st2 < rl2;st2++)result2.splice(0,1);
		for(var st2 = 0;st2 < vs;st2++)variables.shift();
		for(var st2 = 0;st2 < c;st2++)conditions.shift();
		for(var st2 = 0;st2 < ief;st2++)if_end_flag.shift();
		for(var st = 0;st < il;st++)inputValueArray.shift();
		
	}
}

function animeArrayInit(){
	console.log("result配列を初期化します。");
	if(jsOfAnimes){
		var al = jsOfAnimes.length;
		for(var st = 0;st < al;st++){
			jsOfAnimes.shift();
		}
	}
}

var conditions = new Array();conditions.push(true);
var action_frag = true;
var if_cnt = 0;
var if_end_flag = new Array();if_end_flag.push(true);

function if_js(condition){
	if_cnt++;
	conditions.push(assess(condition));
	if((condition.match(/\x20*x\x20*>\x20*20\x20*/)||condition.match(/\x20*20\x20*<\x20*x\x20*/))&&(htmlversion=="311")){
		ifCondition=true;//311の正誤判定
	}
	if((condition.match(/\x20*x\x20*<\x20*y\x20*/)||condition.match(/\x20*y\x20*>\x20*x\x20*/))&&(htmlversion=="312")){
		ifCondition=true;//312の正誤判定
	}
	if((condition.match(/\x20*x\x20*\!=\x20*0\x20*/)||condition.match(/\x20*0\x20*\!=\x20*x\x20*/))&&(htmlversion=="313")){
		ifCondition=true;//313の正誤判定
	}
	if((condition.match(/bmi\x20*>=\x20*18\.5\x20*&&\x20*bmi\x20*<\x20*25/)||
		condition.match(/bmi\x20*>=\x20*18\.5\x20*&&\x20*25\x20*>\x20*bmi/)||
		condition.match(/18\.5\x20*<=\x20*bmi\x20*&&\x20*bmi\x20*<\x20*25/)||
		condition.match(/18\.5\x20*<=\x20*bmi\x20*&&\x20*25\x20*>\x20*bmi/))
		&&(htmlversion=="314")){
		ifCondition=true;//314の正誤判定
	}
	if((condition.match(/\x20*x\x20*\>=\x20*20\x20*/))||(condition.match(/\x20*20\x20*\<=\x20*x\x20*/))&&(htmlversion=="321")||
		((condition.match(/\x20*x\x20*\<=\x20*19\x20*/)||condition.match(/\x20*19\x20*\>=\x20*x\x20*/))&&(htmlversion=="321"))||
		((condition.match(/\x20*x\x20*\<\x20*20\x20*/)||condition.match(/\x20*20\x20*\>\x20*x\x20*/))&&(htmlversion=="321"))){
		ifCondition=true;//321の正誤判定
	}
	if((condition.match(/\x20*score\x20*\>=\x20*90\x20*/))||(condition.match(/\x20*90\x20*\<=\x20*score\x20*/))&&(htmlversion=="331")){
		ifCondition=true;//331の正誤判定
	}
	console.log("第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]);
	if(conditions[if_cnt]&&conditions[if_cnt-1]){
		console.log("if_js内の出力：実行しようぜ！");
		if_end_flag.push(true);
		//console.log(if_end_flag.length);
		action_frag=true;
		console.log("END第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}else{
		console.log("if_js内の出力：実行しないぜ！");
		action_frag=false;
		conditions[if_cnt]=false;
		//if_end_flag.push(true);
		if_end_flag.push(false);
		console.log(if_end_flag.length);
		console.log("END第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}
}

function else_if_js(condition){
	if((condition.match(/score\x20*<\x20*90\x20*&&\x20*score\x20*>=\x20*60/)||condition.match(/score\x20*<\x20*90\x20*&&\x20*60\x20*<=\x20*score/)||
		condition.match(/90\x20*>\x20*scorex20*&&\x20*score\x20*>=\x20*60/)||condition.match(/90\x20*>\x20*scorex20*&&\x20*60\x20*<=\x20*score/))
		&&(htmlversion=="331")){
		elseCondition=true;//331の正誤判定
	}
	if((condition.match(/score\x20*<\x20*60\x20*&&\x20*score\x20*>=\x20*40/)||condition.match(/score\x20*<\x20*60\x20*&&\x20*40\x20*<=\x20*score/)||
		condition.match(/40\x20*>\x20*scorex20*&&\x20*score\x20*>=\x20*40/)||condition.match(/60\x20*>\x20*scorex20*&&\x20*40\x20*<=\x20*score/))
		&&(htmlversion=="331")){
		elseCondition2=true;//331の正誤判定
	}
	if((condition.match(/\x20*bmi\x20*\>\x20*25\x20*/))||(condition.match(/\x20*25\x20*\<\x20*bmi\x20*/))&&(htmlversion=="c3")){
		ifCondition=true;//331の正誤判定
	}
	if((condition.match(/bmi\x20*\>\x20*25/)||(condition.match(/25\x20*\<\x20*bmi/)))&&(htmlversion=="q3"))ifCondition=true;//q3の正誤判定
	conditions[if_cnt]=assess(condition);
	console.log("第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	if(!(if_end_flag[if_cnt])&&conditions[if_cnt]&&conditions[if_cnt-1]){
	console.log("else_if_js内の出力：実行しようぜ！");
		if_end_flag[if_cnt]=true;
		action_frag=true;
		console.log("第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}else{
	console.log("else_if_js内の出力：実行しないぜ！");
		action_frag=false;
		conditions[if_cnt]=false;
		//if_end_flag[if_cnt]=false;
		console.log("第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"、"+if_end_flag[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]+"、"+if_end_flag[if_cnt-1]);
	}
}

function else_js(){
	conditions[if_cnt] = true;
	console.log("else_js内での出力：第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]);
	if(!(if_end_flag[if_cnt])&&conditions[if_cnt-1]){
		if_end_flag[if_cnt]=true;
		action_frag=true
	}else{
		action_frag=false;
		if_end_flag[if_cnt]=true;
	}
}
function if_js_end(){console.log("if_js_end呼ばれてるんですが…")}

function end_of_if(){
	if_cnt=if_cnt-1;
	if_end_flag.splice((if_end_flag.length-1),1);
	conditions.splice((conditions.length-1),1);
	console.log("第"+if_cnt+"階層のif条件結果："+conditions[if_cnt]+"第"+(if_cnt-1)+"階層のif条件結果："+conditions[if_cnt-1]);
	if(conditions[if_cnt]&&conditions[if_cnt-1]){
		action_frag=true;
	}else if(if_cnt==0){
		action_frag=true;
	}else{
		action_frag=false;
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
	console.log("assess内の出力："+tempStr+"のなかに変数の可能性有り！！")
	numOfVariable = condition.match(reg).length;console.log(numOfVariable);
	changeVariables = condition.match(reg);console.log(changeVariables);
	for(var ai = 0;ai < numOfVariable;ai++){
		errorFlag =false;
		for(var aii = 0;aii < variables.length;aii++){
			if(changeVariables[ai] == variables[aii].name){
				tempStr = tempStr.replace(changeVariables[ai],variables[aii].value);
				errorFlag = true;
			}
		}
		if(!errorFlag){
			console.log("アウト♡");
			syntaxErrorFlag = false;
			syntaxStr = "条件式に定義されてない変数が入っているよ！";
			return null;
		}
	}
	}else{console.log("assess内の出力；変数の可能性無し")}
	result = (eval(tempStr));
	return result;
}

function calc(formula){//演算処理を行う関数
if(action_frag == true){
	var nullflag = false;
	//console.log("calcがよびだされました。"+calcflag);
	console.log("あああああああああああああああああああああああ");
	var nullflag = false;
	var fArray = formula.split(":");
	var fstr ="";
	var errorFlag = true;
	for(var i = 0; i < fArray.length; i++){
		if(fArray[i].match(/^[a-z].*/)){//指揮の中に英数字があったら…変数か？入力ミスか？
		console.log("既存の変数かチェエクしています。:"+fArray[i]);
		errorFlag = false;
			for(var j = 0; j < variables.length; j++){
				if(variables[j].name == fArray[i]){//変数の場合
					errorFlag = true;
					fstr += variables[j].value;//console.log(variables[j].name+"は、"+variables[j].value+"だよ！");
					if(!(variables[j].value))nullflag = true;
					}else{//変数じゃなくて、英数字だった場合
					}
				}
				if(!errorFlag){
					console.log("アウト♡");
					syntaxErrorFlag = false;
					syntaxStr = "演算の中に文字列が入っているよ！";
					return null;
				}
			}else{
				fstr += fArray[i];
			}
		}
	//return String(eval(fstr));
	console.log(fstr);
	if(nullflag){
		return null
	}else{
		return String(eval(fstr));
	}
	}
}


//宣言を行う関数
function duplication_judge(data_type,name,value){
if(action_frag == true){
	if(value == null){
		if(variables[0] == null){
			variable_declare(data_type,name,value);//console.log(name+"の宣言を最初に受け付けました。");
		} else {
			for(i = 0; i < variables.length; i++){
			//console.log(name+"と、"+variables[i].name+"を確認");
				if(variables[i].name == name){
					console.log("重複確認");
					jsOfAnimes.push('ANIME_sengen_twice("'+name+'");');
					return false;
				}
			}
			variable_declare(data_type,name,value);
		}
	}else {//初期化されてる場合
		console.log("duplication_judge内の出力：value："+value);
		var fArrayStr;
		if(value.match(":")){console.log("初期化の際に演算処理を受け付けました")
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
				jsOfAnimes.push('ANIME_sengen_twice("'+name+'");');
				return false;
			}
		}
		variable_declare_init(data_type,name,value,fArrayStr);
		}
	}
	}
};

function regulate_js(name,value){
	console.log("regulate_js内の出力。name："+name+"、value ："+value);
	var vType;
	for(var ri = 0;ri < variables.length;ri++){
		if(variables[ri].name==name)vType = variables[ri].data_type;
	}
	console.log(vType);
	if(vType=="int"){
		console.log("regulate_js内の出力。変数"+name+"はint型なので、"+Math.floor(value)+"を返します。")
		if(!type_judge(name,String(Math.floor(value)))){
			return null;
		};
		return String(Math.floor(value));
	}else if(vType=="double"){
		console.log("regulate_js内の出力。変数"+name+"はdouble型なので、"+Number(value).toFixed(6)+"を返します。")
		return Number(value).toFixed(6);
	}else if(vType=="char"){
		return value;
	}else{
		return value;
	}
}

function plural_declaration(type,variable){
if(action_frag == true){
	console.log(variable);
	//variable = variable.replace(/\x20/g,"");
	var v = variable.split(",");
	console.log(v[0]);
	for(var i=0; i < v.length; i++){
		console.log(v[i]);
		if(v[i].indexOf("=", 0) == -1){
			console.log("ただの宣言！");
			duplication_judge(type , v[i] , null );
		}else{
			console.log("式の宣言！");
			var x = v[i].split("=");
			if(x[1].indexOf(":", 0) == -1){
				duplication_judge(type , x[0] , x[1] );
			}else{
				y = x[1].replace(/:/g,"");
				duplication_judge(type , x[0] , y );
				console.log("plural_decrlaration内の出力。y："+y);
				animeArrayList();
				console.log("plural_decrlaration内の出力。calc(x[1])："+calc(x[1]));
				substitute(x[0] , calc(x[1]));
			}
		}
	}
}
}

function variable_declare(data_type,name,value){//配列を変数に代入させる関数
if(action_frag == true){
	var v = new Variable(data_type,name,value);
	jsOfAnimes.push('ANIME_sengen("'+data_type+'","'+name+'");');
	variables.push(v);
	}
};

function variable_declare_init(data_type,name,value,exp){//配列を変数に代入させる関数
if(action_frag == true){
	console.log("VDI内の出力：datatype："+data_type+"、name："+name+"、value："+value+"、exp："+exp);
	if(data_type=="int"){
		console.log("variable_declare_init内の出力。変数"+name+"はint型なので、"+Math.floor(value)+"を返します。")
		value = Math.floor(value);
	}else if(data_type=="double"){
		console.log("rvariable_declare_init内の出力。変数"+name+"はdouble型なので、"+Number(value).toFixed(6)+"を返します。")
		value = Number(value).toFixed(6);
	}
	var v = new Variable(data_type,name,value);
	if((name=="x")&&(htmlversion=="242"))TFscanfInputX=true;//242の正誤判定
	if((name=="y")&&(htmlversion=="242"))TFscanfInputY=true;//242の正誤判定
	//console.log('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'");');
	if(exp){
		jsOfAnimes.push('ANIME_sengen_enzan("'+data_type+'","'+name+'",'+exp+',"'+value+'");');
	}else{
		jsOfAnimes.push('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'");');//ANIME_sengen_dainyuはリテラル(数字だけ)
		}
	variables.push(v);
	}
};

//regulateの場所

var calcflag = false;

function substitute(name,value){//変数に数字を代入するメソッド
if(action_frag == true){
	var vtype;
	for(var si = 0;si < variables.length;si++){
		if(variables[si].name==name)vtype = variables[si].data_type;
	}
	console.log(vtype+"の、"+name+"に、"+value+"を代入するよ！！");
	if(value=="?"||!value){
		jsOfAnimes.push('ANIME_dainyu_typeMiss("'+name+'")');
		return false;
	}
	var vflag = false;
	console.log("value："+value);
	if(value.match(/^[a-z].*/)){
		for(var si = 0;si < variables.length;si++){
			if(variables[si].name==value){
					vflag = true;
				}
		}
	}
	if(value.match(/:/)){
		calcflag = true;
		var formula = value;
		value =calc(value);
		console.log("formula"+formula);
		var fArray = formula.split(":");
		var fArrayStr = "[";
		for(var si = 0;si < fArray.length;si++){
			fArrayStr += ('"'+fArray[si]+'"');
			if(si<fArray.length-1){
				fArrayStr += ',';
			}else{
				fArrayStr +=']';
			}
		}
		console.log(fArray);
	}else if(vflag){
		var variablevalue;
		for(var si = 0;si <variables.length;si++){
			if(variables[si].name == value)variablevalue = variables[si].value;
		}
	}else if(value.match(/^[a-z][0-9a-zA-Z]*/)){
		console.log("変数かな？");
		var vvalue;
		for(var si = 0;si <variables.length;si++){
			if(variables[si].name == value)vvalue = variables[si].value;
		}
		if(vvalue==null&&vtype=="char"){
			console.log("これcharに文字列代入してんじゃね？");
		}else{
			value = vvalue;
		}
		console.log(value);
	}else if(value.match(/^[0-9]*/)){
		console.log("整数かな？");
	}else if(!(type_judge(name,value))){
		console.log(name+","+value);
		console.log("代入される型と数字が会ってません。");
		return false;
	}else{
	console.log("substitute内、valueの型エラー");
	return false;
	}
	console.log("substitute内の出力。vflag："+vflag+"、calcflag："+calcflag);
	//if(calcflag)var evalue = String(eval(value));
	var evalue = value;
	console.log("evalue："+evalue+"、value："+value);
	var i;
	for(i = 0; i < variables.length; i++){
		if(variables[i].name == name){
			if(calcflag){
				if(evalue){
					evalue = regulate_js(name,evalue);
					if(type_judge(name,evalue))variables[i].value = evalue;console.log(" おっやるか？");
				}else{
					variables[i].value = null;
					evalue = "?";
				}
				console.log("ああえいふぉ"+evalue);
				console.log(fArrayStr);
				console.log('ANIME_enzan_dainyu("'+name+'",'+fArrayStr+',"'+evalue+'")');
				jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",'+fArrayStr+',"'+evalue+'")');
				calcflag=false;
			}else if(vflag){
				console.log("substitute内の出力。name："+name+"、value："+value+"、variablevalue："+variablevalue);
				if(!variablevalue){
					jsOfAnimes.push('ANIME_dainyu_typeMiss("'+name+'")');
				}else{
					if(type_judge(name,variablevalue))variables[i].value = regulate_js(name,variablevalue);
					console.log('ANIME_enzan_dainyu("'+name+'",["'+value+'"],"'+regulate_js(name,variablevalue)+'")');
					jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",["'+value+'"],"'+regulate_js(name,variablevalue)+'")');
					vflag=false;
				}
			}else {
				console.log("変数や数式ではありませんでした。substitute内の出力。value："+value+"、value："+value);
				console.log(regulate_js(name,value));
				if(type_judge(name,value))variables[i].value = regulate_js(name,value);
				jsOfAnimes.push('ANIME_dainyu("'+name+'","'+regulate_js(name,value)+'")');
				if((name=="x")&&(htmlversion=="242"))TFscanfInputX=true;//242の正誤判定
				if((name=="y")&&(htmlversion=="242"))TFscanfInputY=true;//242の正誤判定
				if((value=="12")&&(name=="x")&&(htmlversion=="312"))TFscanfNumberX=true;//312の正誤判定
				if((value=="20")&&(name=="y")&&(htmlversion=="312"))TFscanfNumberY=true;//312の正誤判定
			}
		}
	}
	}
}

function scanf_js(name,type){
if(action_frag == true){
	var nameArray = name.split(":");
	var typeArray = type.split(/\x20/);
	for(var si = 0;si < typeArray.length;si++)typeArray[si] = typeArray[si].match(/.*(%[a-z][a-z]?).*/)[1];
	for(var si = 0;si < typeArray.length;si++)console.log("typeArray["+si+"] is "+typeArray[si])
	for(var si = 0;si < nameArray.length;si++)console.log("nameArray["+si+"] is "+nameArray[si])
	var variableExistFlag = false;
	var ExistFlagArray = new Array();
	if(!(nameArray.length==typeArray.length))syntaxErrorFlag = false;
	for(var si =0;si < nameArray.length;si++){
	variableExistFlag = false;
		for(var si2 = 0;si2 < variables.length;si2++){
			if(nameArray[si]==variables[si2].name)variableExistFlag = true;
		}
		console.log(nameArray[si]+"がそんざいするか？："+variableExistFlag)
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
	for(var si = 0;si < ExistFlagArray.length;si++)if(!ExistFlagArray[si])syntaxErrorFlag = false;
	console.log("で、結局これエラーなの？："+syntaxErrorFlag);
	console.log(inputValueArray.length);
	if(inputValueArray.length!=0){
		var il = inputValueArray.length;
		for(var st = 0;st < il;st++)inputValueArray.shift();
	}
	scanfname = name;
	scanftype = type;
	jsOfAnimes.push("ANIME_scanf()");
	}
}

function alertScanf(){
	alert("コンソールに文字を代入してください。");
	sign = 1;
}

function printf_js(name,value){
if(action_frag == true){
	var errorflag;
	if(value.match(/^::.*::$/)){
		value =value.match(/^::(.*)::$/)[1];
		console.log("※注意：変数の出力から始まるため、パーサで与えられているはずの「：：」を除去しています。")
	}
	var pstr = "";
	var nameArray = name.split(":");
	var valueArray = value.split("::");
	var inputTypeArray =new Array();
	for(var pi2 = 0;pi2 < nameArray.length;pi2++)console.log("nameArray："+nameArray[pi2]);
	for(var pi = 0;pi < valueArray.length;pi++)console.log("valueArray："+valueArray[pi]);
	for(var pi = 0;pi < valueArray.length;pi++){
		if(valueArray[pi].match(/^%[a-z]/))inputTypeArray.push(valueArray[pi]);
	}
	for(var pi2 = 0;pi2 < nameArray.length;pi2++){
		errorflag = false;;
		for(var pi = 0;pi < variables.length;pi++){
			if(nameArray[pi2]==variables[pi].name){
				errorflag = true;
			}
		}
		if(!errorflag){
		console.log("変数"+nameArray[pi2]+"は存在していません。");
			syntaxErrorFlag = false;
			syntaxStr= "存在しない変数を指定してるよ！";
			}
	}
	for(var pi = 0;pi < inputTypeArray.length;pi++){
		for(var pi2 = 0;pi2 <variables.length;pi2++){
			if(variables[pi2].name == nameArray[pi]){//console.log(inputTypeArray[pi]+nameArray[pi]+variables[pi2].data_type);
				if(((variables[pi2].data_type=="int")&&!(inputTypeArray[pi]=="%d"))||
					((variables[pi2].data_type=="double")&&!(inputTypeArray[pi]=="%f"))||
					((variables[pi2].data_type=="char")&&!(inputTypeArray[pi]=="%c")))syntaxErrorFlag = false;
			}
		}
	}
	for(var pi = 0; pi < inputArray.length;pi++){//241の正誤判定
		for(var pi2 = 0;pi2 < nameArray.length;pi2++){
			if((inputArray[pi]==nameArray[pi2])&&(htmlversion=="241"))printfOutputANY=true;
	}}
	for(var pi = 0;pi < nameArray.length;pi++){
		if((nameArray[pi]=="x")&&(htmlversion=="242"))TFprintfX=true;//242の正誤判定
		if((nameArray[pi]=="y")&&(htmlversion=="242"))TFprintfY=true;//242の正誤判定
	}
	for(var pi = 0; pi < inputArray.length;pi++){//q2の正誤判定
		for(var pi2 = 0;pi2 < nameArray.length;pi2++){
			console.log(inputArray[pi]+"："+nameArray[pi2])
			if((inputArray[pi]==nameArray[pi2])&&(htmlversion=="c2"))printfOutputANY=true;
	}}
	var variableNumCounter = 0;
	for(var pi = 0;pi<valueArray.length;pi++){
		if(valueArray[pi].match(/^%[a-z]/)){
			for(var pi2 = 0;pi2 < variables.length;pi2++){
				if(variables[pi2].name == nameArray[variableNumCounter]){
					pstr += variables[pi2].value;
				}
			}
			variableNumCounter++;
		}else{
			pstr += valueArray[pi];
		}
	}
	var methodstr;
	if(errorflag){
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
	}
}

function printf_djs(dstr){
var tempArray= dstr.split(/\r\n|\r|\n/);
var tempstr ="";
for(var pi = 0;pi<tempArray.length;pi++)tempstr += tempArray[pi];
dstr = tempstr;
if(action_frag == true){
	jsOfAnimes.push('ANIME_printf("'+dstr+'");');
	jsOfAnimes.push('setPrintf("'+dstr+'");');
	if((if_cnt>=1)&&(htmlversion=="311")&&(dstr=="xは20より大きいです"))TextInIf = true;//311の正誤判定
	if((if_cnt>=1)&&(htmlversion=="312")&&(dstr=="xはyより小さいです"))TextInIf = true;//311の正誤判定
	if((if_cnt>=1)&&(htmlversion=="313")&&(dstr=="xは0ではないです"))TextInIf = true;//322の正誤判定
	if((if_cnt>=1)&&(htmlversion=="322")&&(dstr=="xは0ではないです"))TextInIf = true;//322の正誤判定
	consoleStatus = document.getElementById("console").value;
	}
}

function setPrintf(value){
console.log(action_frag);
	console.log("setPrintfStrは："+value);
	if(String(value).match(/null/))value = value.replace(/null/g,"?");
	document.getElementById("console").value += (value)+"\n";
	consoleStatus = document.getElementById("console").value;
	sign = 1;
}

function return_js(value){
	console.log("return受領。終わりだよ")
	jsOfAnimes.push("ANIME_finish()");
	codeFinishFlag = true;
	//doTheMainfunction = result2.length-1;
}
function ANIME_finish(){
	if(!sampleflag)tf_judge();
}
function type_judge(name,value){
if(action_frag == true){
	var i;
	for(i = 0; i <= variables.length; i++){
		if(variables[i].name == name){
			var data_type = variables[i].data_type;
			break;
		}
	}
	if(data_type == "int"){
	//【変数に文字が代入された場合…ミスか変数かを判断する】
		if(value.match(/^[a-z].*/)){
			for(i = 0; i < variables.length; i++){
				//【変数に変数が代入された場合】
				if(variables[i].name == value){
					if(variables[i].data_type == "int" || variables[i].data_type == "double"){
						value = variables[i].value;
						/* 変数→中身の数値に表示を切り替えるアニメ */return true;
					} else {/* doubleかint型じゃなければintに文字型を代入してしまった場合のアニメ */
					}
				/*【変数に文字列が代入された場合】*/
				} else {/* 既存の変数にはないと判断し、intに文字を代入してしまった場合のアニメ*/
				}
				if(i==variables.length)return false;
			}
		} else if(value.match(/^[0-9]+/)){/*代入するvalueが数値だった場合はそのまま代入する*/
			return true;
		}else{
			return false;
		}
	}
	if(data_type == "double"){
	//【変数に文字が代入された場合…ミスか変数かを判断する】
		if(value.match(/^[a-z].*/)){
			for(i = 0; i < variables.length; i++){
				//【変数に変数が代入された場合】
				if(variables[i].name == value){
					if(variables[i].data_type == "int" || variables[i].data_type == "double"){
						value = variables[i].value;
						/* 変数→中身の数値に表示を切り替えるアニメ */return true;
					} else {/* doubleかint型じゃなければdoubleに文字型を代入してしまった場合のアニメ */
					}
				/*【変数に文字列が代入された場合】*/
				} else {/* 既存の変数にはないと判断し、doubleに文字を代入してしまった場合のアニメ*/
				}
				if(i==variables.length)return false;
			}
		} else if(value.match(/^[0-9]+\.[0-9]+|^[0-9]/)){/*代入するvalueが数値だった場合はそのまま代入する*/
			return true;
		}else{
			return false;
		}
	}
	if(data_type == "char"){
	//【変数に文字が代入された場合…ミスか変数かを判断する】
		if(value.match(/^[a-z].*/)){
			for(i = 0; i < variables.length; i++){
				//【変数に変数が代入された場合】
				if(variables[i].name == value){
					if(variables[i].data_type == "char"){
						value = variables[i].value;
						/* 変数→中身の数値に表示を切り替えるアニメ */return true;
					}else if(variables[i].data_type == "int" || variables[i].data_type == "double"){
					 return false;
					}
				}
			}/*変数のなかには無かった！*/
		}
		return true;
		}
	}
	
};
