function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得所有缩略词
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length < 1) return false;
	var defs = new Array();
	//遍历缩略词
	for(var i=0; i<abbreviations.length; i++){
		if(abbreviations[i].childNodes.length < 1) continue;
		var definition = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	//遍历定义
	for(key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把他们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length < 1) return false;
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}

function displayCitations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得所有引用
	var quotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for(var i=0; i<quotes.length; i++){
		//如果没有cite属性，继续循环
		if(!quotes[i].getAttribute("cite")) continue;
		//保存cite属性
		var url = quotes[i].getAttribute("cite");
		//取得引用中的所有元素节点
		var quotesChild = quotes[i].getElementsByTagName("*");
		//如果没有元素节点，继续循环
		if(quotesChild.length < 1) continue;
		//取得引用中的最后一个元素节点
		var elem = quotesChild[quotesChild.length-1];
		//创建标记
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		//把标记添加到引用中的最后一个元素节点
		elem.appendChild(superscript);
	}
}

function displayAccesskeys(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得文档所有的链接
	var links = document.getElementsByTagName("a");
	//创建一个数组，保存访问键
	var akeys = new Array();
	//遍历链接
	for(var i=0; i<links.length; i++){
		//如果没有accesskey属性，继续循环
		if(!links[i].getAttribute("accesskey")) continue;
		//取得accesskey的值
		var key = links[i].getAttribute("accesskey");
		//取得链接文本
		var text = links[i].lastChild.nodeValue;
		//添加到数组
		akeys[key] = text;
	}
	//创建列表
	var list = document.createElement("ul");
	//遍历访问键
	for(key in akeys){
		var text = akeys[key];
		//创建放到列表项中的字符串
		var str = key+"："+text;
		//创建列表项
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	//创建标题
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(list);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);

//判断是否有class属性并添加
function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

//改变h1后元素属性
function styleElementSiblings(tag,theclass){
	if(!document.getElementsByTagName) return false;
	var elems=document.getElementsByTagName(tag);
	var elem;
	for(var i=0; i<elems.length; i++){
		elem = getNextElement(elems[i].nextSibling);
		addClass(elem,theclass);
	}
}
function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
addLoadEvent(function(){
	styleElementSiblings("h1","intro");
});

//表格斑马线
function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd,rows;
	for(var i=0; i<tables.length; i++){
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for(var j=0; j<rows.length; j++){
			if(odd == true){
				odd = false;
			}else{
				addClass(rows[j],"odd");
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);

//响应事件
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for(var i=0; i<rows.length; i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}
addLoadEvent(highlightRows);