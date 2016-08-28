/*//测试一
function getElementsByClassName(node,classname){
			if(node.getElementsByClassName){
				//使用现有方法
				return node.getElementsByClassName(classname);
			}else{
				var results=new Array();
				var elems=node.getElementsByTagName("*");
				for(var i=0; i<elems.length; i++){
					if(elems[i].className.indexOf(classname)!=1){
						results[results.length]=elems[i];
					}
				}
				return results;
			}
		}*/
/*//测试二
var paras=document.getElementsByTagName('p');
for(var i=0; i<paras.length; i++){
	var title_text=paras[i].getAttribute('title');
	if(title_text) alert(title_text);
}*/
//测试三
var paras=document.getElementsByTagName('p');
for(var i=0; i<paras.length; i++){
	var title_text=paras[i].getAttribute('title');
	if(title_text){
		paras[i].setAttribute('title','brand new title text');
		alert(paras[i].getAttribute('title'));
	}
}