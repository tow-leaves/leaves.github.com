function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function preparePic(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var pic=document.createElement("img");
	pic.setAttribute("id","pic");
	pic.setAttribute("src","image/logo.jpg");
	pic.setAttribute("alt","my image gallery");
	pic.setAttribute("height","400");
	pic.setAttribute("width","1024");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var text=document.createTextNode("Choose an image.");
	description.appendChild(text);
	var gallery=document.getElementById("imagegallery");
	insertAfter(pic,gallery);
	insertAfter(description,pic);
}

function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick=function(){
			return showPic(this) ? false : true;
		}
	}
}
function showPic(whichpic){
	if(!document.getElementById("pic")) return false;
	var source=whichpic.getAttribute("href");
	var pic=document.getElementById("pic");
	if(pic.nodeName != "IMG") return false;
	pic.setAttribute("src",source);
	if(document.getElementById("description")){
		if(whichpic.getAttribute("title")){
			var text=whichpic.getAttribute("title")
		}else{
			var text = "";
		}
		var description=document.getElementById("description");
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue=text;
		}
	}
	return true;
}

addLoadEvent(preparePic);
addLoadEvent(prepareGallery);