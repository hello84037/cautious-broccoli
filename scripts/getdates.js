   document.addEventListener("DOMContentLoaded", () => {   
    
    document.getElementById("year").innerHTML = new Date().getFullYear();

    document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
   });