window.onload = function (){
	var arr = [
		"快过年了，大家可以商量着去哪玩~",//一月
		"二月春风似剪刀",//二月
		"三月三歌节",//三月
		"愚人节",//四月
		"清明节",//五月
		"毕业季",//六月
		"建党",//七月
		"建军",//八月
		"中秋佳节",//九月
		"国庆",//十月
		"入冬注意保暖",//十一月
		"圣诞节",//十二月
	];
	var oTab = document.getElementById("tab");
	var aLi = oTab.getElementsByTagName("li");
	var oTxt = oTab.getElementsByTagName("div")[0];
	for(var i=0; i<aLi.length; i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function (){
			for(var j=0; j<aLi.length; j++){
				aLi[j].className = "";
			}
			this.className = "active";
			oTxt.innerHTML = "<h4>"+(this.index+1)+"月活动</h4><p>"+arr[this.index]+"</p>";
		};
	}
}
