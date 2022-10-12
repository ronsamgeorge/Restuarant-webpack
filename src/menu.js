export default function menuContent(){

    //checks if content available on the page, if yes it removes it and updates content
    if(document.contains(document.getElementById('content-info-div'))){
        document.getElementById('content-info-div').remove();
    }
    
    
    const menuContent = document.createElement("div");
    menuContent.textContent = "Check out our menu";
    menuContent.id = 'content-info-div'

    document.body.appendChild(menuContent);
    return;
}