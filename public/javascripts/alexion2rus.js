let displayVideo = false ;
let userEndedTheVideo = false ;
let userPlayedTheVideo = false ;




const video = document.getElementById("video");

window.addEventListener("load",() => {
    console.log("clicked in the link") ;
    fetch('/videos/3/clickedLink');
})

video.addEventListener("playing",() => {
    if(!userPlayedTheVideo) {
        userPlayedTheVideo = true ;
        console.log("user played the video");
        fetch('/videos/3/openVideo'); 
        
    }
})

video.addEventListener("ended",() => {
    if(!userEndedTheVideo) {
        userEndedTheVideo = true ;
        console.log("user ended the video");
        fetch('/videos/3/endVideo');
        
    }
})

video.addEventListener("loadeddata",() => {
    if(!displayVideo) {
        displayVideo = true ;
        console.log("user see the video");
        fetch('/videos/3/seenPreviewVideo');
    }
})