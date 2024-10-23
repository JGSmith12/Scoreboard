let homeScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")


function point1H() {
    console.log("button clicked")
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function point2H() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function point3H() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function point1G() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log(guestScore)
}
function point2G() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    console.log(guestScore)
}
function point3G() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    console.log(guestScore)
}