/*
jQuery Auto Placeholders
(c) 2012 Filip Stefansson, @filipstefansson
Adds support for the placeholder attribute in older browsers.
*/
var $;$=jQuery;$.fn.autoPlaceholders=function(){var a,b;b=false;if(typeof Modernizr!=="undefined"&&Modernizr!==null){b=Modernizr.input.placeholder?true:false}else{a=document.createElement("input");if("placeholder"in a){b=true}}if(!b){$("input, textarea",this).each(function(){var a;if($(this).attr("placeholder")!=null){a=$(this).attr("placeholder");$(this).val(a).addClass("placeholder");$(this).bind("focus",function(){if($(this).hasClass("placeholder")){return $(this).val("").removeClass("placeholder")}});return $(this).bind("blur",function(){if($(this).val()===""){return $(this).val(a).addClass("placeholder")}})}});return $("form").submit(function(){return $(this).find(":input.placeholder").each(function(){return $(this).val("")})})}}
