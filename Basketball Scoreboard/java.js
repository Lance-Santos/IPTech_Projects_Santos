var scoreHome = document.getElementById('scoreHandler');
var scoreGuest = document.getElementById('scoreHandlerGuest');
var leadingTeam = document.getElementById('leadingTeam');

scoreTempHome = 0;
scoreTempGuest = 0;

// Home Team
function addHomeOne() {
    console.log('Added 1 point to home team');
    scoreTempHome += 1;
    scoreHome.textContent = scoreTempHome;
    console.log(scoreHome);
    calcLead();
}
function addHomeTwo() {
    console.log('Added 2 points to home team');
    scoreTempHome += 2;
    scoreHome.textContent = scoreTempHome;
    console.log(scoreHome);
    calcLead();
}
function addHomeThree() {
    console.log('Added 3 points to home team');
    scoreTempHome += 3;
    scoreHome.textContent = scoreTempHome;
    console.log(scoreHome);
    calcLead();
}
//Guest Team
function addGuestOne() {
    console.log('Added 1 point to guest team');
    scoreTempGuest += 1;
    scoreGuest.textContent = scoreTempGuest;
    console.log(scoreHome);
    calcLead();
}
function addGuestTwo() {
    console.log('Added 2 points to guest team');
    scoreTempGuest += 2;
    scoreGuest.textContent = scoreTempGuest;
    console.log(scoreHome);
    calcLead();
}
function addGuestThree() {
    console.log('Added 3 points to guest team');
    scoreTempGuest += 3;
    scoreGuest.textContent = scoreTempGuest;
    console.log(scoreHome);
    calcLead();
}
function calcLead() {
    console.log("This is working");   
    if (parseInt(scoreHome.textContent) > parseInt(scoreGuest.textContent)){
        console.log("Home is leading")
        leadingTeam.textContent = "Home";
    }
    else if(parseInt(scoreHome.textContent) == parseInt(scoreGuest.textContent)){
        console.log("Tie!");
        leadingTeam.textContent = "Tie";

    }
    else {
        console.log('Guest is leading')
        leadingTeam.textContent = "Guest";

    }
}

