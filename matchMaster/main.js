title = "Match Master";

description = `
`;

characters = [];

const G = {
    WIDTH: 100,
    LENGTH: 100

};

options = {
    viewSize: {x: G.WIDTH, y: G.LENGTH}
};

let displayedNum = 0;

function update() {
    if (!ticks) {
        displayedNum = floor(rnd(10, 20));
    }
    // if 5 seconds have passed, display "displayNum" for half a second
    if (resetingTimer(ticks, 300, 30) == true) {
        console.log(displayedNum.toString());
        text(displayedNum.toString(), 50, 50);
    }
}

// If called inside of update, returns true every n number of ticks for n ticks 
function resetingTimer(currentTicks, every_n_ticks, for_n_ticks){
    if (((currentTicks % every_n_ticks) >= 0) && (((currentTicks % every_n_ticks) <= for_n_ticks)) ) {
        console.log(every_n_ticks/60, "seconds have passed singal to display text");
        //text(text, x, y);
        return true;
    } else {
        return false;
    }
}