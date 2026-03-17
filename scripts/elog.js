/**
 *  Contains the code for search engine through all logs and images interactiveness. 
 */


const searchKeyword = document.querySelector("[data-search-keyword]");
const searchCategory = document.querySelector("[data-search-category]");


let logs = document.getElementsByClassName('log');

var catFillteredLogs =[];
var lengthCounter;

//var ran = 0;
var selectedCat;
searchCategory.addEventListener('change', e => {
    //ran = 1;
    selectedCat = e.target.value;
        //target = document.getElementsByClassName(selectedCat)[0];
        //console.log(target);
    for(var i = 0; i < logs.length; i++) {
        var isVisable = logs[i].className.includes(selectedCat);

        if (!isVisable){
            logs[i] = logs[i].style.display = "none";
        }
        else
        {
            logs[i] = logs[i].style.display = "block";
            //it works for none - as there is empty spaces in class?
        }
    }
    

    //creates seperate list of all logs that are currently displied when category has been selected...
    var j = 0;
    for(var i = 0; i < logs.length; i++){
        if(logs[i].style.display.includes('block')){
            catFillteredLogs[j] = i;
            j++;
            lengthCounter = j; //counts how many div have been selected...
                               //   0   1   2 - index of catFillteredLogs
                               //   1   2   3 - lengthCounter
        }
    }
    // different categorys may have different length - worst is if one category has smaller than previously serched category
    // below, empties the array's items that have the higher index than the length of the currently selected category
    // done this as the keyword search would display always all the divs - this is the fix for this...
    if (catFillteredLogs.length > lengthCounter){
        for(var i = lengthCounter; i<catFillteredLogs.length; i++){
            catFillteredLogs[i] = null;
        }
    }


})

searchKeyword.addEventListener("input", e => {
    // the catFillteredLogs allows for search of only shown logs.
    const selectedKeyword = e.target.value;

    //if the category has not been selected at the start of webpage...
    if (selectedCat == null){
        //... go through all the logs, as all of them are being shown...
        for( var i = 0; i < logs.length; i++) {
        
            var in_text = logs[i].innerHTML;
            var in_text_small = in_text.toLowerCase();
            var isVisable = in_text_small.includes(selectedKeyword.toLowerCase());
    
            if (!isVisable){
                logs[i] = logs[i].style.display = "none";
            }
    
            if(selectedKeyword == ""){
                {
                    logs[i] = logs[i].style.display = "block";
                }
            }
        }
    }
    else{//otherwise, category is selected...
        for( var i = 0; i < catFillteredLogs.length; i++) { // ... so go through only shown logs with selected category.
            
            var in_text = logs[catFillteredLogs[i]].innerHTML;
            var in_text_small = in_text.toLowerCase();
            var isVisable = in_text_small.includes(selectedKeyword.toLowerCase());
    
            if (!isVisable){
                logs[i] = logs[catFillteredLogs[i]].style.display = "none";
            }
    
            if(selectedKeyword == ""){
                {
                    logs[i] = logs[catFillteredLogs[i]].style.display = "block";
                }
            }
        }
    }

})


// Code for zooming on the any image on the webpage and zooming out.
// DOCUMENTATION includes the source of this code.
let Images = document.querySelectorAll(".in-text-img")
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(Images){
    Images.forEach(function(image){
        image.onclick = function() {
            let src = image.getAttribute("src");

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");
            
            let bigImg = document.createElement("img");
            newImgWindow.appendChild(bigImg);
            bigImg.setAttribute("src", src);
        }
    })
}

function closeImg(){
    document.querySelector(".img-window").remove();
}





//DOCUMENTATION

//For drop-down box solution...
//https://stackoverflow.com/questions/47621417/javascript-dropdown-select-get-data

//For search box solution...
//https://www.youtube.com/watch?v=TlP5WIxVirU


//some notes:

//search for tags (category class) in logs based on drop-down and/or keyword
//when Search button is press
// when clicked on the image, the image is biggere and on full screen
// this vid does it: https://www.youtube.com/watch?v=dkLpo4shS6c ...