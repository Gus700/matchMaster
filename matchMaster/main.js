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
    isCapturing: true,
    isCapturingGameCanvasOnly: true,
    captureCanvasScale: 2,
    viewSize: {x: G.WIDTH, y: G.LENGTH}
};
let roundsRemaining = 10;
let numToDisplay = 0;
let amountCliked = 0;
let currentlyDisplayingNum = false;
function update() {
    if (!ticks) {
        this.c = [
			"red",
			"light_cyan",
			"green",
			"light_red",
			"blue",
			"light_green",
			"yellow",
			"light_blue",
			"purple",
			"light_yellow",
			"cyan",
			"light_purple",
			"black"
		];
        numToDisplay = floor(rnd(5, 15));
        roundsRemaining = 11;
        amountCliked = 0;
    }
    //end if out of rounds
    if(!roundsRemaining){
        end();
    }
    //display rounds remaining
    color("black")
    text("Rounds left:", G.WIDTH/2 -35, 5);
    text(roundsRemaining.toString(),G.WIDTH/2 -35, 15);
    
    currentlyDisplayingNum = false;
    // if 5 seconds have passed, change numToDisplay and reset amountClicked
    if (resetingTimer(ticks, 300, 1) == true) {
        //add score based on clicks and decrement rounds remaining
        if(amountCliked == numToDisplay){
            addScore(numToDisplay+5);
        } else if(amountCliked < numToDisplay) {
            addScore(amountCliked);
        } else {
            addScore(numToDisplay - amountCliked);
        }
        numToDisplay = floor(rnd(5, 15));
        amountCliked = 0;
        roundsRemaining--;
    }
    // if 5 seconds have passed, display "displayNum" for half a second
    if (resetingTimer(ticks, 300, 30) == true) {
        currentlyDisplayingNum = true;
        
        text(numToDisplay.toString(), G.WIDTH * 0.5, G.LENGTH * 0.5,{scale:{x:2,y:2}});
    }
    if(input.isJustPressed && currentlyDisplayingNum == false){
        amountCliked++;
    if ( amountCliked < numToDisplay){
        
        let x, y = 0;
        x = rnd(15, G.WIDTH-15);
        y=rnd(15, G.LENGTH-5);
        color(this.c[rndi(0,this.c.length)]);
        //moar particles >:(
        particle(x,y,amountCliked*numToDisplay);
        color("green");
        char("a", x, y);
        play("tone",{volume:10,freq:amountCliked*111+amountCliked*22+amountCliked});
    } else if(amountCliked == numToDisplay){
        
        let x, y = 0;
        x = rnd(15, G.WIDTH-15);
        y=rnd(15, G.LENGTH-5);
        color(this.c[rndi(0,this.c.length)]);
        //moar particles >:(
        particle(x,y,amountCliked*numToDisplay);
        color("green");
        char("a", x, y);
        play("tone",{volume:10,freq:amountCliked*111+amountCliked*22+amountCliked});
    } else if(amountCliked > numToDisplay) {
        
        char("b", rnd(0, G.WIDTH), rnd(0, G.LENGTH));
        play("tone",{volume:10,note:"C1"});
        play("tone",{volume:10,note:"C#1"});
        play("tone",{volume:10,note:"Cb1"});
    }
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