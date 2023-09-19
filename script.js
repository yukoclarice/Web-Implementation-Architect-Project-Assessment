const FILTER = document.getElementById("filter-btn");
const ITEMS = document.getElementById("nav-items-result-container");
const FILTER_ITEMS = document.getElementById("nav-items-result-container-filter");
const MAP = document.getElementById("nav-items-result-container-map");

const LIST_VIEW = document.getElementById("list-view");
const MAP_VIEW = document.getElementById("map-view");
    

// FILTER.addEventListener("click", function(){
//     if (ITEMS.style.display === "flex") {
//         ITEMS.style.display = "none";
//         FILTER_ITEMS.style.display = "flex"
//       } else {
//         ITEMS.style.display = "flex";
//         FILTER_ITEMS.style.display = "none"
//       }
// });

LIST_VIEW.onclick = function() {

        ITEMS.style.display = "flex";
        MAP.style.display = "none"
        FILTER_ITEMS.style.display = "none"
        LIST_VIEW.style.backgroundColor = "#204D62";
        LIST_VIEW.style.color = "white";
        MAP_VIEW.style.backgroundColor = "white";
        MAP_VIEW.style.color = "black";
      
}

MAP_VIEW.onclick = function() {
        ITEMS.style.display = "none";
        MAP.style.display = "flex"
        FILTER_ITEMS.style.display = "none"
        LIST_VIEW.style.backgroundColor = "white";
        LIST_VIEW.style.color = "black";
        MAP_VIEW.style.backgroundColor = "#204D62";
        MAP_VIEW.style.color = "white";
      
}

FILTER.onclick = function() {
    if (ITEMS.style.display === "flex" || MAP.style.display === "flex" || ITEMS.style.display === '') {
        ITEMS.style.display = "none";
        FILTER_ITEMS.style.display = "flex"
      }else{
        ITEMS.style.display = "flex";
        FILTER_ITEMS.style.display = "none"
      }
}

function closeFilterButton() {
   

    if(MAP.style.display === "flex"){
        FILTER_ITEMS.style.display = "none"
    }else{
        FILTER_ITEMS.style.display = "none"
        ITEMS.style.display = "flex";
    }
}