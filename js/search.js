//Search

function displaySearch(result) {
    "use strict";
    
    var displayResult = document.getElementById("displayResult");
    
    displayResult.style.display = "block";
    displayResult.innerHTML = result;
}

function doSearch() {
    "use strict";
    
    var searchField = document.getElementById("searchField").value;
    var result = "Nothing found!";
    
    for (var i = 0; i < db.length; i++) {
        if (db[i].artist.toUpperCase() === searchField.toUpperCase()) {
            result = db[i].id + " - " + db[i].title + " - " + db[i].artist + " - $" + db[i].price + " - " + db[i].relDate;
        }
    }
    
    displaySearch(result);
        
}

function search() {
    "use strict";
    
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", doSearch, false);
}

window.addEventListener("load", search, false);