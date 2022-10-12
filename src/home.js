

export default function homeContent(){

    //checks if content available on the page, if yes it removes it and updates content
    if(document.contains(document.getElementById('content-info-div'))){
        document.getElementById('content-info-div').remove();
    }
    
    
    const homeContent = document.createElement("div");
    homeContent.textContent = "Welcome to the home of Summer Salt";
    homeContent.id = 'content-info-div'

    document.body.appendChild(homeContent);
    return;

}