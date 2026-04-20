document.addEventListener('visibilitychange', function(){
    if(document.visibilityState === "visible"){
        document.title = "Active Tab";
    }
    else{
        document.title = "Inactive Tab";
    }
});