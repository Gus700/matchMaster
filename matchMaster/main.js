title = "Match Master";

description = `Click the correct
amount
`;

characters = [
`
gg  gg
gg  gg

gggggg
 g  g
  gg
`,`
rr  rr
rr  rr

rrrrrr
`
];

const G = {
    WIDTH: 150,
    LENGTH: 100

};

options = {
    theme: "shapeDark",
    viewSize: {x: G.WIDTH, y: G.LENGTH}
};

let numToDisplay = 0;
let amountCliked = 0;
let currentlyDisplayingNum = false;
function update() {
    if (!ticks) { 
        numToDisplay = floor(rnd(10, 20));
    }
    currentlyDisplayingNum = false;
    // if 5 seconds have passed, change numToDisplay and reset amountClicked
    if (resetingTimer(ticks, 300, 1) == true) {
        numToDisplay = floor(rnd(5, 15));
        amountCliked = 0;
    }
    // if 5 seconds have passed, display "displayNum" for half a second
    if (resetingTimer(ticks, 300, 30) == true) {
        currentlyDisplayingNum = true;
        text(numToDisplay.toString(), G.WIDTH * 0.5, G.LENGTH * 0.5);
    }
    if (input.isJustPressed && amountCliked < numToDisplay && currentlyDisplayingNum == false){
        amountCliked++;
        char("a", rnd(0, G.WIDTH), rnd(0, G.LENGTH));
    } else if(input.isJustPressed && amountCliked >= numToDisplay && currentlyDisplayingNum == false) {
        char("b", rnd(0, G.WIDTH), rnd(0, G.LENGTH));
    }
}

// If called inside of update, returns true every n number of ticks for n ticks 
function resetingTimer(currentTicks, every_n_ticks, for_n_ticks){
    if (((currentTicks % every_n_ticks) > 0) && (((currentTicks % every_n_ticks) <= for_n_ticks)) ) {
        //console.log(every_n_ticks/60, "seconds have passed singal to display text");
        return true;
    } else {
        return false;
    }
}