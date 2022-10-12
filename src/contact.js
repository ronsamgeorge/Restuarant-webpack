export default function contactContent(){
    console.log("printing from inside contactContent");

    if(document.contains(document.getElementById('content-info-div'))){
        document.getElementById('content-info-div').remove();
    }
    
    
    const contactContent = document.createElement("div");
    contactContent.textContent = "Contact us at";
    contactContent.id = 'content-info-div'

    document.body.appendChild(contactContent);
    return;
}