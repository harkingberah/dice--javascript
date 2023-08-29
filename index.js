let body = document.querySelector("body")
let screenLoad = body.setAttribute("onload", "dice()")


function dice() {
    let p1 = document.querySelector(".img1")
    let p2 = document.querySelector(".img2")
    let win = document.querySelector(".win")
    let allImages = document.querySelectorAll(".allImages img")
    let onePlayer = Math.floor(Math.random() * allImages.length)
    let playerOne = allImages[onePlayer]
    p1.src = playerOne.src
    let twoPlayer = Math.floor(Math.random() * allImages.length)
    let playerTwo = allImages[twoPlayer]
    p2.src = playerTwo.src
    if (onePlayer > twoPlayer) {
        win.textContent = "Player One Wins";
    } else if (onePlayer < twoPlayer) {
        win.textContent = "Player Two Wins";

    } else {
        win.textContent = "It's a tie";
    }
}