

const initializeFunction = () =>{

    const contentDiv = document.getElementById('content');
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "SummerSalt Bakery";
    contentDiv.appendChild(mainHeader);

    const tabElementDiv = tabMenu();
    contentDiv.appendChild(tabElementDiv);
    return;

}

function tabMenu(){
    const tabElementDiv = document.createElement('div');
    tabElementDiv.id = 'tabs-div';

    //Create the element for the three tab sections 
    const homeTab = tabElement('home-div', 'HOME');
    const menuTab = tabElement('menu-div','MENU');
    const contactTab = tabElement('contact-div', 'CONTACT US');

    //adds the 
    tabElementDiv.appendChild(homeTab);
    tabElementDiv.appendChild(menuTab);
    tabElementDiv.appendChild(contactTab);

    return tabElementDiv;
}


function tabElement(idName, content){
    const tab = document.createElement('div');
    tab.id = idName;
    tab.textContent = content;
    tab.classList.add("tab-element");

    return tab;
}

initializeFunction();

const homeBtn = document.querySelector('#home-div');
homeBtn.addEventListener('click',()=>{
    console.log('home tab clicked');
});

const menuBtn = document.querySelector('#menu-div');
menuBtn.addEventListener('click',()=>{
    console.log('menu tab clicked');
});

const contactBtn = document.querySelector('#contact-div');
contactBtn.addEventListener('click',()=>{
    console.log('contact tab clicked');
});