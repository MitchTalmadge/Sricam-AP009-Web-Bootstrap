// JavaScript Document
var rows=document.getElementsByTagName('tr');
for(var i=0;i<rows.length;i++){
rows[i].onmouseover=function(){
this.className+='altrow';
}
rows[i].onmouseout=function(){
this.className=this.className.replace('altrow','');
}
}
 
 
var ua11 = navigator.userAgent.toLowerCase();
var isIE11 = ua11.indexOf('msie') >= 0?true:false;
if(!isIE11)
 {$("#pathIE").hide(); $("#multi-dev").hide();}
 
 if(!dev_had_sd)
 {$("#hide_recordsch").hide();	}
 
if(!dev_had_ap)
{$("#hide_ap").hide();	}