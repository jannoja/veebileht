function myFunction() {
    "use strict";
    /*global document: false */
    var str = "http://www.megabearsfan.net/image.axd/2017/11/CivANewDawn-prerelease_1.jpg",
        result = str.link("https://www.youtube.com/watch?v=oj2t97U7pfs");
    document.getElementById("Video").innerHTML = result;
}