(()=>{function e(e,t){const n=document.createElement("div");return n.id=e,n.textContent=t,n.classList.add("tab-element"),n}(()=>{const t=document.getElementById("content"),n=document.createElement("h1");n.textContent="SummerSalt Bakery",t.appendChild(n);const c=function(){const t=document.createElement("div");t.id="tabs-div";const n=e("home-div","HOME"),c=e("menu-div","MENU"),d=e("contact-div","CONTACT US");return t.appendChild(n),t.appendChild(c),t.appendChild(d),t}();t.appendChild(c)})(),document.querySelector("#home-div").addEventListener("click",(()=>{console.log("home tab clicked")})),document.querySelector("#menu-div").addEventListener("click",(()=>{console.log("menu tab clicked")})),document.querySelector("#contact-div").addEventListener("click",(()=>{console.log("contact tab clicked")}))})();