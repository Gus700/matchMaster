title = "Match Master";

description = `
`;

characters = [];

const G = {
    WIDTH: 100,
    LENGTH: 100

};

options = {
    theme: "shapeDark",
    viewSize: {x: G.WIDTH, y: G.LENGTH}
};

let numToDisplay = 0;

function update() {
    if (!ticks) {
        numToDisplay = floor(rnd(10, 20));
    }
    // if 5 seconds have passed, change numToDisplay
    if (resetingTimer(ticks, 300, 1) == true) {
        numToDisplay = floor(rnd(5, 15));
    }
    // if 5 seconds have passed, display "displayNum" for half a second
    if (resetingTimer(ticks, 300, 30) == true) {
        text(numToDisplay.toString(), 50, 50);
    }
}

// If called inside of update, returns true every n number of ticks for n ticks 
function resetingTimer(currentTicks, every_n_ticks, for_n_ticks){
    if (((currentTicks % every_n_ticks) >= 0) && (((currentTicks % every_n_ticks) <= for_n_ticks)) ) {
        //console.log(every_n_ticks/60, "seconds have passed singal to display text");
        return true;
    } else {
        return false;
    }
}