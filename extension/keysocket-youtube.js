function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('.ytp-button-next'); 
        simulateClick(nextButton);
    } else if(key === PLAY) {
        if(!simulateClick(document.querySelector('.ytp-button-play'))) {
            simulateClick(document.querySelector('.ytp-button-pause'));
        } 
    } else if(key === PREV) {
        var backButton = document.querySelector('.ytp-button-prev');
        simulateClick(backButton);
    }
}
