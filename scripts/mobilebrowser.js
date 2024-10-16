function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }
  
  if (isMobile()) {
    // Code for mobile devices
    console.log("Mobile device detected"); 
  } else {
    // Code for desktop devices
    console.log("Desktop device detected"); 
    document.getElementById("barcodeLookup").disabled = true;
    //document.getElementById("removeButton").disabled = true;
    //document.getElementById("lookupButton").disabled = true;
  }
