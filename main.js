!function(){"use strict";(new class{constructor(){this.content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum et odio tristique aliquet. Nulla facilisi. Nullam ac massa felis. Sed id fringilla magna. Sed eleifend tellus eget eros eleifend, nec ullamcorper mauris vestibulum. Quisque sagittis tempor libero, sit amet tincidunt odio fringilla sed. Fusce consectetur tellus eget libero dictum, id luctus lacus varius. Maecenas condimentum, velit sed sodales ultricies, est elit commodo ipsum, non sodales elit arcu eget justo."}addCollapse(){const e=document.querySelector(".collapse"),t=document.createElement("button");t.classList.add("btn-collapse"),t.textContent="Collapse",e.appendChild(t);const s=document.createElement("p");s.textContent=this.content,s.classList.add("tooltip-content"),e.appendChild(s),t.addEventListener("click",(()=>{s.classList.toggle("active")}))}}).addCollapse(),(new class{constructor(){}addCallback(){const e=document.querySelector(".callback"),t=document.createElement("button");t.classList.add("btn-callback"),e.appendChild(t);const s=document.createElement("div");s.classList.add("tooltip-help"),e.appendChild(s);const l=document.createElement("div");l.classList.add("write-us"),l.textContent="Напишите нам!",s.appendChild(l);const c=document.createElement("button");c.classList.add("exit"),c.textContent="✖",s.appendChild(c);const i=document.createElement("input");i.classList.add("window-help"),s.appendChild(i);const n=document.createElement("button");n.classList.add("send"),n.textContent="Отправить!",s.appendChild(n),t.addEventListener("click",(()=>{s.classList.toggle("active"),t.classList.toggle("inactive")})),c.addEventListener("click",(()=>{s.classList.toggle("active"),t.classList.toggle("inactive")}))}}).addCallback()}();