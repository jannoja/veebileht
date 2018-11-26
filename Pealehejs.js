function myFunction() {
    "use strict";
    /*global document: false */
    var str = "http://www.megabearsfan.net/image.axd/2017/11/CivANewDawn-prerelease_1.jpg",
        result = str.link("http://www.megabearsfan.net/image.axd/2017/11/CivANewDawn-prerelease_1.jpg");
    document.getElementById("Pilt").innerHTML = result;
}