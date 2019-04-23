function showCityInfo(e, city) {
    let tabContent, tabLinks;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display="none";
    }
    
    tabLinks = document.getElementsByClassName("tab-links");
    for (let i = 0; i < tabLinks; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", ""); 
    }
    
    document.getElementById(city).style.display="block";
    e.currentTarget.className += " active";
}