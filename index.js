const  display = document.getElementById("display-message");

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function feedCatButton() {
    display.textContent = "Thank you, I love you ❤️";
}

async function noFeedCatButton() {
    
    display.textContent = "I hate you 😡";
    await sleep(1000);
    document.getElementById("display-img").src = "https://c.tenor.com/So_wSVwEzmYAAAAC/cat-died.gif";
}