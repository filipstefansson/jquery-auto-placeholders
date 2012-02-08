/*
jQuery Auto Placeholders
(c) 2012 Filip Stefansson, @filipstefansson
Adds support for the placeholder attribute in older browsers.
*/
var $;$=jQuery;$.fn.autoPlaceholders=function(){var a,b;b=!1;if(typeof Modernizr!="undefined"&&Modernizr!==null)b=Modernizr.input.placeholder?!0:!1;else{a=document.createElement("input");"placeholder"in a&&(b=!0)}if(!b)return $("input, textarea",this).each(function(){var a;if($(this).attr("placeholder")!=null){a=$(this).attr("placeholder");$(this).val(a).addClass("placeholder");$(this).bind("focus",function(){if($(this).val()===a)return $(this).val("").removeClass("placeholder")});return $(this).bind("blur",function(){if($(this).val()==="")return $(this).val(a).addClass("placeholder")})}})};