(()=>{var t={823:()=>{$(document).ready((function(){function t(t){var n=document.createElement("div");return n.innerText=t,n.innerHTML}$("#maximize").click((function(){$("#terminal").attr("style",""),$("#terminal").toggleClass("w-full"),$("#terminal").toggleClass("w-6/12"),$("#terminal").toggleClass("h-full"),$("#terminal").toggleClass("h-3/6"),$("#terminal").hasClass("h-full")?$(this).html("&#10697;"):$(this).html("&#9634;")})),$("#close").click((function(){location.href="logout"})),$("#upload_file").click((function(){$("#upload_input").click()})),$("#upload_input").on("change",(function(t){$("#uploadForm").submit()})),$("#terminal_content_input").on("keydown",(function(n){if("ArrowLeft"==(n=n.originalEvent).key)c=$("#terminal_command_left").text(),m=$("#terminal_command_right").text(),c&&($("#terminal_command_right").text(c[c.length-1]+m),$("#terminal_command_left").text(c.slice(0,-1)));else if("ArrowRight"==n.key)!function(){var t=$("#terminal_command_left").text(),n=$("#terminal_command_right").text();n&&($("#terminal_command_left").text(t+n[0]),$("#terminal_command_right").text(n.slice(1)))}();else if("Backspace"==n.key)!function(){var t=$("#terminal_command_left").text();$("#terminal_command_left").text(t.slice(0,-1))}();else if("Delete"==n.key)!function(){var t=$("#terminal_command_right").text();$("#terminal_command_right").text(t.slice(1))}();else if("Enter"==n.key){var e=$("#terminal_content_static").html(),i=$("#terminal_command_left").text(),a=$("#terminal_command_right").text(),l=$("#terminal_initial").html(),o=$("#terminal_command input[name='_csrf']").val(),r="".concat(i).concat(a);$("#terminal_content_input").attr("disabled",!0),fetch("/execute",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({_csrf:o,command:r,a:1,b:2})}).then((function(t){return t.text()})).then((function(n){n=t(n),"exit"==(r=t(r)).trim().toLowerCase()?$("#close").click():""==r.trim().toLowerCase()?(e+="<div class='terminal_initial'>".concat(l,"</div>"),e+="<div class='inline'>".concat(r,"</div>"),e+="<pre></pre>"):(e+="<div class='terminal_initial'>".concat(l,"</div>"),e+="<div class='inline'>".concat(r,"</div>"),e+="<pre>".concat(n,"</pre>")),$("#terminal_content_input").attr("disabled",!1),$("#terminal_content_static").html(e),"clear"==r.trim().toLowerCase()&&$("#terminal_content_static").html(""),$("#terminal_command_left").html(""),$("#terminal_command_right").html(""),$("#terminal_content").animate({scrollTop:$("#terminal_content").prop("scrollHeight")},1e3),$("#terminal_content_input").focus()})).catch((function(t){console.log(t)}))}var c,m})),$("#terminal_content_input").on("input",(function(t){t=t.originalEvent;var n=$("#terminal_content_input").val();n&&function(t){var n=$("#terminal_command_left").text();$("#terminal_command_left").text(n+t)}(n[n.length-1]),$("#terminal_content_input").val(""),$("#terminal_content_input").focus()})),$("#terminal_content").click((function(){$("#terminal_content_input").focus()})),setInterval((function(){$("#terminal_content_input").is(":focus")?$("#blink").toggle():$("#blink").hide()}),500),$("#footer").html("&copy; Copyright ".concat((new Date).getFullYear()," Piyush Garg"))}))}},n={};function e(i){var a=n[i];if(void 0!==a)return a.exports;var l=n[i]={exports:{}};return t[i](l,l.exports,e),l.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";e(823)})()})();