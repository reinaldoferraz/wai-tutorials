"use strict";var addclass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t};"fragmention"in window.location||function(){function e(t,n){for(var o,a=t.childNodes,i=0;o=a[i];++i)if(1==o.nodeType&&-1!==(o.innerText||o.textContent||"").replace(/\s+/g," ").indexOf(n))return e(o,n);return t}function t(){location.fragmention=decodeURIComponent((location.href.match(/#(#|%23)(.+)/)||[0,0,""])[2].replace(/\+/g," ")),n&&(n.removeAttribute("fragmention"),n.runtimeStyle&&(n.runtimeStyle.windows=n.runtimeStyle.windows)),location.fragmention&&(n=e(document,location.fragmention),n!==document?(n.scrollIntoView(),n.setAttribute("fragmention",""),n.setAttribute("tabindex","-1"),n.focus(),n.runtimeStyle&&(n.runtimeStyle.windows=n.runtimeStyle.windows)):n=null)}location.fragmention=location.fragmention||"";var n;"addEventListener"in window?(window.addEventListener("hashchange",t),document.addEventListener("DOMContentLoaded",t)):(window.attachEvent("onhashchange",t),document.attachEvent("onreadystatechange",function(){"c"===document.readyState[0]&&t()}))}(),document.addEventListener("DOMContentLoaded",function(){var e=document.createTextNode(" "),t=document.querySelectorAll(".content h2[id], .ap")[0];t.classList?t.classList.add("first"):t.className+=" first";var n=document.querySelectorAll(".content h2[id], .ap"),o=document.createElement("figure");o.innerHTML='<figcaption>Table of Contents</figcaption><div class="figcontent"></div>',o.classList?o.classList.add("toc"):o.className+=" toc";var a,i=document.createElement("ul"),c=document.createElement("li"),r=!1;Array.prototype.forEach.call(n,function(e){console.log(e.localName+": "+e.textContent+" // "+r);var t=c.cloneNode(!0);"h3"===e.localName&&r===!1&&(a=i.cloneNode(!1)),"h2"===e.localName&&r===!0&&(i.querySelectorAll("li:last-child")[0].appendChild(a),r=!1),t.innerHTML='<a class="'+e.getAttribute("class")+'" href="#'+e.getAttribute("id")+'">'+e.innerHTML+"</a>",console.log(t),"h3"===e.localName?(a.appendChild(t),r=!0):i.appendChild(t)}),o.querySelectorAll(".figcontent")[0].innerHTML=i.outerHTML;var l=document.querySelectorAll(".inner > :first-child")[0];l.insertAdjacentHTML("beforebegin",o.outerHTML);var d=document.createElement("a");addclass(d,"permalink"),d.innerHTML="<span>Link to this section of the page</span>";var s=document.querySelectorAll(".content h2[id], h2.ap, h3.ap");Array.prototype.forEach.call(s,function(t){var n=d.cloneNode(!0);n.setAttribute("href","#"+t.id),t.appendChild(e.cloneNode(!0)),t.appendChild(n)})});