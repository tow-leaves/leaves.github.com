var jq=jQuery.noConflict();
var weather=function(){
	var tmp=0;
	var SWther={w:[{}],add:{}};
	var SWther={};
	this.getWeather=function(city,type){
		jq.getScript("http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=2&city="+city+"&dfc=3",function(){if(type=='js'){echo(city);}})
		;}

function dis_img(weather){
    var style_img="http://mj.588cy.com/img/s_13.png";
	if(weather.indexOf("多云")!==-1||weather.indexOf("晴")!==-1){style_img="http://mj.588cy.com/img/s_1.png";}
	else if(weather.indexOf("多云")!==-1&&weather.indexOf("阴")!==-1){style_img="http://mj.588cy.com/img/s_2.png";}
	else if(weather.indexOf("阴")!==-1&&weather.indexOf("雨")!==-1){style_img="http://mj.588cy.com/img/s_3.png";}
	else if(weather.indexOf("晴")!==-1&&weather.indexOf("雨")!==-1){style_img="http://mj.588cy.com/img/s_12.png";}
	else if(weather.indexOf("晴")!==-1&&weather.indexOf("雾")!==-1){style_img="http://mj.588cy.com/img/s_12.png";}
    else if(weather.indexOf("晴")!==-1){style_img="http://mj.588cy.com/img/s_13.png";}
	else if(weather.indexOf("多云")!==-1){style_img="http://mj.588cy.com/img/s_2.png";}
	else if(weather.indexOf("阵雨")!==-1){style_img="http://mj.588cy.com/img/s_3.png";}
	else if(weather.indexOf("小雨")!==-1){style_img="http://mj.588cy.com/img/s_3.png";}
	else if(weather.indexOf("中雨")!==-1){style_img="http://mj.588cy.com/img/s_4.png";}
	else if(weather.indexOf("大雨")!==-1){style_img="http://mj.588cy.com/img/s_5.png";}
	else if(weather.indexOf("暴雨")!==-1){style_img="http://mj.588cy.com/img/s_5.png";}
	else if(weather.indexOf("冰雹")!==-1){style_img="http://mj.588cy.com/img/s_6.png";}
	else if(weather.indexOf("雷阵雨")!==-1){style_img="http://mj.588cy.com/img/s_7.png";}
	else if(weather.indexOf("小雪")!==-1){style_img="http://mj.588cy.com/img/s_8.png";}
	else if(weather.indexOf("中雪")!==-1){style_img="http://mj.588cy.com/img/s_9.png";}
	else if(weather.indexOf("大雪")!==-1){style_img="http://mj.588cy.com/img/s_10.png";}
	else if(weather.indexOf("暴雪")!==-1){style_img="http://mj.588cy.com/img/s_10.png";}
	else if(weather.indexOf("扬沙")!==-1){style_img="http://mj.588cy.com/img/s_11.png";}
	else if(weather.indexOf("沙尘")!==-1){style_img="http://mj.588cy.com/img/s_11.png";}
	else if(weather.indexOf("雾")!==-1){style_img="http://mj.588cy.com/img/s_12.png";}
	else{style_img="http://mj.588cy.com/img/s_2.png";}
    return style_img;};
	
function echo(city){
	jq('#city').html(city);
	jq('#weather').html(window.SWther.w[city][0].s1);
	jq('#temperature').html(window.SWther.w[city][0].t1+'&deg;');
	jq('#wind').html(window.SWther.w[city][0].p1);
	jq('#direction').html(window.SWther.w[city][0].d1);
	jq('#T_weather').html(window.SWther.w[city][0].s1);
	
	var T_weather_img=dis_img(window.SWther.w[city][0].s1);
	jq('#T_weather_img').html("<img src='"+T_weather_img+"' title='"+window.SWther.w[city][0].s1+"' alt='"+window.SWther.w[city][0].s1+"' />");
	jq('#T_temperature').html(window.SWther.w[city][0].t1+'~'+window.SWther.w[city][0].t2+'&deg;');
	jq('#T_wind').html(window.SWther.w[city][0].p1);
	jq('#T_direction').html(window.SWther.w[city][0].d1);
	jq('#M_weather').html(window.SWther.w[city][1].s1);
	
	var M_weather_img=dis_img(window.SWther.w[city][1].s1);
	jq('#M_weather_img').html("<img src='"+M_weather_img+"' title='"+window.SWther.w[city][1].s1+"' alt='"+window.SWther.w[city][1].s1+"' />");
	jq('#M_temperature').html(window.SWther.w[city][1].t1+'~'+window.SWther.w[city][1].t2+'&deg;');
	jq('#M_wind').html(window.SWther.w[city][1].p1);
	jq('#M_direction').html(window.SWther.w[city][1].d1);
	jq('#L_weather').html(window.SWther.w[city][2].s1);
	
	var L_weather_img=dis_img(window.SWther.w[city][2].s1);
	jq('#L_weather_img').html("<img src='"+L_weather_img+"' title='"+window.SWther.w[city][2].s1+"' alt='"+window.SWther.w[city][2].s1+"' />");
	jq('#L_temperature').html(window.SWther.w[city][2].t1+'~'+window.SWther.w[city][2].t2+'&deg;');
	jq('#L_wind').html(window.SWther.w[city][2].p1);jq('#L_direction').html(window.SWther.w[city][2].d1);
	}
	}
	//weather结束了
	function jintian(){
		weather_.getWeather(city,'js');
		};
//创建天气预报核心对象
var weather_=new weather();
var city = "";
jq(document).ready(function(){
jq.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
city=remote_ip_info.city;
jintian();
jq(".city").html(remote_ip_info.city);
})
});
jq(document).ready(function(){
setInterval(showTime, 1000);                                
function timer(obj,txt){obj.text(txt);}        
function showTime(){                                
var today = new Date();
var weekday=new Array(7)
weekday[0]="周一"
weekday[1]="周二"
weekday[2]="周三"
weekday[3]="周四"
weekday[4]="周五"
weekday[5]="周六"
weekday[6]="周日"
var td=today.getDate();
var d=weekday[today.getDay()];        
timer(jq("#T_Day"),td);        
timer(jq("#T_Date"),d);
}})