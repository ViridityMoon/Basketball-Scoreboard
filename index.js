let homeScore = document.getElementById("score-value-home");
let guestScore = document.getElementById("score-value-guest");

function onePoint (a) {
    let score = parseInt(a.textContent)
    score += 1;
    a.textContent = score
}

function twoPoint (a) {
    let score = parseInt(a.textContent)
    score += 2;
    a.textContent = score
}

function threePoint (a) {
    let score = parseInt(a.textContent)
    score += 3;
    a.textContent = score
}

function clearAll (a, b) {
    a.textContent = 0
    b.textContent = 0
}