export default function contactContent(currentSelected){
    console.log("printing from inside contactContent");
    console.log(currentSelected);
    document.getElementById('contact-div').classList.add('tab-selected');
}