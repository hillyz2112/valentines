let message = [
    "hey pleasee...???",
    "benerannn??",
    "yakin bangett???",
    "think againnn",
    "pleaseeeee",
    "jahat banget...",
    "really...??"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".button-no");
    const yesButton = document.querySelector(".button-yes");

    noButton.textContent = message[messageIndex];

    messageIndex = (messageIndex + 1) % message.length;

    let currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize = (currentSize * 1.3) + "px";
}

function handleYesClick() {
    window.location.href = "./yes_page.html";
}