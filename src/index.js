import homeContent from './home.js'
import menuContent from './menu.js';
import contactContent from './contact.js';

const initializeHome = () =>{

    const contentDiv = document.getElementById('content');
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "SummerSalt Bakery";
    contentDiv.appendChild(mainHeader);

    const tabElementDiv = tabMenu();
    contentDiv.appendChild(tabElementDiv);

    updateCurrentTab(currentTabId);
    return;

}

function tabMenu(){
    const tabElementDiv = document.createElement('div');
    tabElementDiv.id = 'tabs-div';

    //Create the element for the three tab sections 
    const homeTab = createTabElement('home-div', 'HOME');
    const menuTab = createTabElement('menu-div','MENU');
    const contactTab = createTabElement('contact-div', 'CONTACT US');

    //adds the 
    tabElementDiv.appendChild(homeTab);
    tabElementDiv.appendChild(menuTab);
    tabElementDiv.appendChild(contactTab);

    return tabElementDiv;
}


function createTabElement(idName, content){
    const tab = document.createElement('div');
    tab.id = idName;
    tab.textContent = content;
    tab.classList.add("tab-element");

    return tab;
}

function updateCurrentTab(newSelectedId){
    console.log("update current tab");

    document.getElementById(currentTabId).rem

    // remove .tab-selected class from the previous selected tab 
    // add .tab-selected class to new selected id.
}

initializeHome();
let currentTabId = "#home-div";

const homeBtn = document.querySelector('#home-div');
homeBtn.addEventListener('click',() => {
    homeContent("menu-div");
});

const menuBtn = document.querySelector('#menu-div');
menuBtn.addEventListener('click',()=>{
    console.log('menu tab clicked');
});

const contactBtn = document.querySelector('#contact-div');
contactBtn.addEventListener('click',()=>{
    console.log('contact tab clicked');
});