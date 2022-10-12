export default function menuContent(currentSelected){
    console.log("printing from inside homeContent");
    console.log(currentSelected);
    document.getElementById('home-div').classList.add('tab-selected');
}