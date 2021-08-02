var gFact = {}
gFact.magicNumber = 1303;


// When going
function imLoaded()
{
    // Lets go

    let ar = "This is reference program: PigClock 10-sb5";

    alert('ha ' + gFact.magicNumber.toString() );
    console.log( "IM LOADED has been called" );
    console.log( "sends a incrementing number to console every 4 seconds" );
    console.log( ar );

    setInterval( tictoc, 3700 );
}


// click
function tictoc()
{
    gFact.magicNumber =  gFact.magicNumber + 1;
    console.log( gFact.magicNumber );
}

