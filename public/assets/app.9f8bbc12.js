(()=>{var t={823:()=>{$(document).ready((function(){$("#maximize").click((function(){$("#terminal").attr("style",""),$("#terminal").toggleClass("w-full"),$("#terminal").toggleClass("w-6/12"),$("#terminal").toggleClass("h-full"),$("#terminal").toggleClass("h-3/6"),$("#terminal").hasClass("h-full")?$(this).html("&#10697;"):$(this).html("&#9634;")})),$("#close").click((function(){location.href="logout"})),$("#upload_file").click((function(){$("#upload_input").click()})),$("#upload_input").on("change",(function(t){$("#uploadForm").submit()})),$("#terminal_content_input").on("keyup",(function(t){if("ArrowLeft"==(t=t.originalEvent).key)m=$("#terminal_command_left").html(),r=$("#terminal_command_right").html(),m&&($("#terminal_command_right").html(m[m.length-1]+r),$("#terminal_command_left").html(m.slice(0,-1)));else if("ArrowRight"==t.key)!function(){var t=$("#terminal_command_left").html(),n=$("#terminal_command_right").html();n&&($("#terminal_command_left").html(t+n[0]),$("#terminal_command_right").html(n.slice(1)))}();else if("Backspace"==t.key)!function(){var t=$("#terminal_command_left").html();$("#terminal_command_left").html(t.slice(0,-1))}();else if("Delete"==t.key)!function(){var t=$("#terminal_command_right").html();$("#terminal_command_right").html(t.slice(1))}();else if("Enter"==t.key){var n=$("#terminal_content_static").html(),e=$("#terminal_command_left").text(),l=$("#terminal_command_right").text(),i=$("#terminal_initial").html(),a=$("#terminal_command input[name='_csrf']").val(),o="".concat(e).concat(l);$("#terminal_content_input").attr("disabled",!0),fetch("/execute",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({_csrf:a,command:o,a:1,b:2})}).then((function(t){return t.text()})).then((function(t){var e,l;e=t,(l=document.createElement("div")).innerText=e,t=l.innerHTML,$("#terminal_content_input").attr("disabled",!1),n+="<div class='terminal_initial'>".concat(i,"</div>"),n+="<div class='inline'>".concat(o,"</div>"),n+="<pre>".concat(t,"</pre>"),$("#terminal_content_static").html(n),$("#terminal_command_left").html(""),$("#terminal_command_right").html(""),$("#terminal_content").animate({scrollTop:$("#terminal_content").prop("scrollHeight")},1e3),$("#terminal_content_input").focus()})).catch((function(t){console.log(t)}))}var m,r})),$("#terminal_content_input").on("input",(function(t){t=t.originalEvent;var n=$("#terminal_content_input").val();n&&function(t){var n=$("#terminal_command_left").html();$("#terminal_command_left").html(n+t)}(n[n.length-1]),$("#terminal_content_input").val(""),$("#terminal_content_input").focus()})),$("#terminal_content").click((function(){$("#terminal_content_input").focus()})),setInterval((function(){$("#terminal_content_input").is(":focus")?$("#blink").toggle():$("#blink").hide()}),500),$("#footer").html("&copy; Copyright ".concat((new Date).getFullYear()," Piyush Garg"))}))}},n={};function e(l){var i=n[l];if(void 0!==i)return i.exports;var a=n[l]={exports:{}};return t[l](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";e(823)})()})();