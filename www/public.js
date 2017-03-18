
//ÍøÒ³½ûÖ¹ÓÒ¼ü²Ëµ¥¼°½ûÖ¹È«Ñ¡´úÂë
//document.oncontextmenu=new Function("event.returnValue=false;");
//document.onselectstart=new Function("event.returnValue=false;");

var dev_had_sd = true ;
var dev_had_ap = false;

function setDocTitle(name)
{
	top.document.title = name;
}

//½ûÖ¹F5Ë¢ÐÂ
var check=function(e){
   e=e||window.event;
   //alert(e.which||e.keyCode);
   if((e.which||e.keyCode)==116){
    if(e.preventDefault){
    e.preventDefault();}
    else{event.keyCode = 0;
     e.returnValue=false;} 
   } 
}
if(document.addEventListener){
   document.addEventListener("keydown",check,false);
}
else{
   document.attachEvent("onkeydown",check);
}


var language=top.language;
//alert(language);
if (language=='')
	document.write('<script src="english/string.js"><\/script>');
else if(language==0)
	document.write('<script src="english/string.js"><\/script>');
else if(language==1)
	document.write('<script src="spanish/string.js"><\/script>');
else if(language==2)
	document.write('<script src="deutsch/string.js"><\/script>');	
else if(language==3)
	document.write('<script src="french/string.js"><\/script>');
else if(language==4)
	document.write('<script src="italian/string.js"><\/script>');
else if(language==5)
	document.write('<script src="Polski/string.js"><\/script>');
else if(language==6)
	document.write('<script src="Korean/string.js"><\/script>');		
else if(language==7)
	document.write('<script src="simple_chinese/string.js"><\/script>');
else if(language==8)
	document.write('<script src="traditional_chinese/string.js"><\/script>');  
else if (language==9)
    document.write('<script src="swedish/string.js"><\/script>');
else
	document.write('<script src="english/string.js"><\/script>');
	
function reboot()
{
	var url;
	if (confirm(str_sure_reboot))
	{
		top.reboot_seconds = 30;
		url='reboot.cgi?next_url=reboot.htm';
		url+='&loginuse='+top.cookieuser+'&loginpas='+encodeURIComponent(top.cookiepass);
		//$.getScript(url);
		location=url;
	}
}
function restore_factory()
{
	var url;
	if (confirm(str_sure_restore))
	{
		top.reboot_seconds = 30;
		url='restore_factory.cgi?next_url=rebootme.htm';
		url+='&loginuse='+top.cookieuser+'&loginpas='+encodeURIComponent(top.cookiepass);
		//$.getScript(url);
		location=url;
	}
}
function gobackpage()
{
	//alert(top.goback_page);
	location=top.goback_page;
}

	
//var obj_nav = '<div class="logo-img"><img name="logo1" src="images/logo.jpg" width="170px" height="25" alt=""></div>' +
var obj_nav = '<dl class="left-nav">' +
        '<dt><script>document.write(str_cate_1);</script></dt>' +
		'<dd><a id="dd-status" href="status.htm" target="CfgIFrame"><script>document.write(str_dev_info);</script></a></dd>' +
		'<dd><a id="dd-alias" href="alias.htm" target="CfgIFrame"><script>document.write(str_alias_config);</script></a></dd>' +
		'<dd><a id="dd-datetime" href="datetime.htm" target="CfgIFrame"><script>document.write(str_datetime_config);</script></a></dd>' +
		'<dd id="pathIE"><a id="dd-recordpath" href="recordpath.htm" target="CfgIFrame"><script>document.write(str_record_path);</script></a></dd>' +
		'<dt><script>document.write(str_alarm_config);</script></dt>' +
		'<dd><a id="dd-alarm" href="alarm.htm" target="CfgIFrame"><script>document.write(str_alarm_config);</script></a></dd>' +
		'<dd><a id="dd-mail" href="mail.htm" target="CfgIFrame"><script>document.write(str_mail_config);</script></a></dd>' +
        '<dd><a id="dd-ftp" href="ftp.htm" target="CfgIFrame"><script>document.write(str_ftp_config);</script></a></dd>' +
		'<dd><a id="dd-log" href="log.htm" target="CfgIFrame"><script>document.write(str_log);</script></a></dd>' +
		'<dt><script>document.write(str_cate_4);</script></dt>' +
		'<dd><a id="dd-ip" href="ip.htm" target="CfgIFrame"><script>document.write(str_network_config);</script></a></dd>' +
		/*'<dd><a id="dd-ap" href="ap.htm" target="CfgIFrame"><script>document.write(str_wifi_mode_x);</script></a></dd>' +*/
		'<dd><a id="dd-wireless" href="wireless.htm" target="CfgIFrame"><script>document.write(str_wireless_config);</script></a></dd>' +
		'<dd><a id="dd-ddns" href="ddns.htm" target="CfgIFrame"><script>document.write(str_ddns_config);</script></a></dd>' +
		'<dt><script>document.write(str_cate_5);</script></dt>' +
		'<dd><a id="dd-ptz" href="ptz.htm" target="CfgIFrame"><script>document.write(str_ptz_config);</script></a></dd>' +
		'<dt><script>document.write(str_cate_6);</script></dt>' +
		'<dd id="multi-dev"><a id="dd-multidev" href="multidev.htm" target="CfgIFrame"><script>document.write(str_multidevice_config);</script></a></dd>' +
        '<dd><a id="dd-user" href="user.htm" target="CfgIFrame"><script>document.write(str_users_config);</script></a></dd>' +		
		'<dd><a id="dd-upgrade" href="upgrade.htm" target="CfgIFrame"><script>document.write(str_weihu);</script></a></dd>' +
		'<dd><a id="dd233" href="#" onclick="javascript:gobackpage();"><script>document.write(str_goback);</script></a></dd>' +
		'</dl>';
	
function removeSelfClass(){
	$("#dd-status", parent.document).removeClass("selected");
	$("#dd-alias", parent.document).removeClass("selected");
	$("#dd-datetime", parent.document).removeClass("selected");
	//$("#dd-media", parent.document).removeClass("selected");
	$("#dd-recordpath", parent.document).removeClass("selected");
	
	$("#dd-alarm", parent.document).removeClass("selected");
	$("#dd-mail", parent.document).removeClass("selected");
	$("#dd-ftp", parent.document).removeClass("selected");
	$("#dd-log", parent.document).removeClass("selected");
	
	$("#dd-ip", parent.document).removeClass("selected");
	$("#dd-ap", parent.document).removeClass("selected");
	$("#dd-wireless", parent.document).removeClass("selected");
	$("#dd-ddns", parent.document).removeClass("selected");
	
	
	$("#dd-ptz", parent.document).removeClass("selected");
	
	$("#dd-multidev", parent.document).removeClass("selected");
	$("#dd-user", parent.document).removeClass("selected");
	$("#dd-upgrade", parent.document).removeClass("selected");

}