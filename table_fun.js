// table_fun.js
// 09 Oct 2020 10:XX

var tableName; var jj = 0;
var header = ""; var aCount = 0;

var tfsl = false;

// Insert something
function insertTableLine( someLine, someHandling )
{
  // Make an insert line for a table

  // Maybe not show a column
  let wid = someLine.length;
  if( someHandling == 'nsk' ) { wid = wid - 1; }

  let buildLine = "<tr>";
  for( let i = 0; i < wid; i++)
  { buildLine = buildLine + '<td>' + someLine[ i ] + '</td>'; }

  return buildLine + '</tr>';
}


// Remove a line item in the server DB
function removeThing( aRemoveKw, aTable, nToCut )
{
  // Lookup id number set aside
  let idSendable = idHash[ 'memos' ][ nToCut - 1 ];
  alert( '1315A ' + aRemoveKw + ' ' + aTable + ' ' + idSendable );

  $.post( aRemoveKw,
       { id: idSendable, table: aTable, num: nToCut },
       function( data, status, jqXHR ) 
				{ let dn = 1;
       	});
}


// Cut out content in a named table in this HTML DOC
function removeTableContent( daTable )
{
  // Remove data part

	$( daTable ).find( "tr:gt(0)" ).remove();
}


// Tel em stuff about the table
function showInModalArrangingAccess()
{
  // Happy talk

  let lMsg = msgAboutServerIo;

  SayMoLines( lMsg, "" );
	var uzeP = '#' + wThingCountableShow + '2';
}


// Get table from server but wipe whats in there first 08oct20
function getTableWipeAdd( kwToSend, meHereTableIdent, paramsGo )
{
  // Get and use server for filling a table, but remove contents there now first

  // Nice just to tty no other outputting
  showInModalArrangingAccess();

	// This ia a pseodo table name maybe if so none of our business
  let targetIsPseudo = false;
	if( isItParenMarked( meHereTableIdent ) )	{ targetIsPseudo = true ; }

  // Dont confuse the tableX   usual and hunk there aligned but not nessessarily
  // the same 1:1 all the time, we see this number for where the click hunk wise occured
  let appStuff = false;
  if( hunkClickerNow != undefined )
  { if( allHunks[ hunkClickerNow ].appendstuff ) { appStuff = true; } }

  // We spec to work with this one now, empty needs it, getXXX will take care of itself
  selectTable( meHereTableIdent );										// Should be ok with pseudo table

  // It's been decided, to erase or not. If its a real target table for me, that is
	if( !targetIsPseudo ) {
  	let erIt = !appStuff;
  	if( erIt ) emptyTable(); }
	
  // Fill it up from server
  // So  kwToSend   is the magic word going out, and   meHereTableIdent   to remember it

  getTableJustAdd( kwToSend, meHereTableIdent, paramsGo )
  
  // Made something show
  if( !targetIsPseudo )
  {	if( meHereTableIdent != "" )	{ $( '#' + meHereTableIdent ).show(); } }
}


// Post for payload to server Packaged more 13sep20
function sendToServerPostPkg( aKwUrl, daPayload, maybMore1 )
{
	// Sendable

  let a1 = "";
  if( maybMore1 != undefined )          a1 = maybMore1;

  // KW goes right into stack as a URL
  let postUrl = aKwUrl;

  // We use common code as this is not the only place a thing can be saved
  let itsSendable = saveTableHunkCombine( aKwUrl, a1, daPayload );

  $.ajax({
  url: postUrl,
  data: itsSendable,  
  cache: false,
  type: "POST",
  contentType: 'application/json',
  success: function( response ) {
  },
  error: function( xhrBadness ) {
   	// console.log( "Did not get server message out kw is: " + aKwUrl );
  }
});

  return 'ok';
}


// Post for payoad to server Low level 20jan20
function sendToServerPostLl( kwToUse, daPayload )
{
	// Sendable

	$.ajax({
    url: kwToUse,
    data: JSON.stringify( daPayload ),  
    cache: false,
    type: "POST",
    success: function( response ) {
    },
    error: function( xhrBadness ) {
			let fullerM = kwToUse;
    	// console.log( "Did not get server message out kw is: " + fullerM );
    }
  });

  return 'ok';
}


// Pass routine message to server side, for logs or stuff like that 17jan20
function routineMessageToServer( m1, m2, m3 )
{
  // Get a message passed to server for loggins or whatever

  // As a convienence the caller can have some arguments, just plop them together
  let fullerM = m1;
  if( m2 != undefined ) 	fullerM = fullerM + " " + m2;
  if( m3 != undefined ) 	fullerM = fullerM + " " + m3;

  // To be displayed   "Somewhere else"
  let mLeft = "CLIENT SAID: "; 
  fullerM = mLeft + fullerM; let varA = fullerM;

	$.ajax({
    url: "hriusualmessage",
    data: { 
        "msg": varA 
    },
    cache: false,
    type: "POST",
    success: function( response ) {
    },
    error: function( xhrBadness ) {
    	// console.log( "Did not get server message out: " + fullerM );
    }
  });
}


// We are given a renaming and whats up list from server 22aug20
function hunkyRenaming( aKw, aList, ar3, ar4 )
{

  // Do change to local world from a directive

	// Must be filled in enough or don't do at all
  let aL = aList.length;

  for( let qq = 0; qq < tableCount; qq++ )
  {
    // These are of interest, there are more in there like who made it
    let uz = aList[ qq ];
    
		let huNu 	= "", tabGetNa = "", aTitl = "";

		if( aKw == 'tf1' )
		{ huNu 	= uz.hunknum;
    	tabGetNa = uz.askname;
    	aTitl = uz.hunktitle; }

    // Into shared mem for looking at
    AbsorbUiThing( 'hnafhu2', qq, aTitl );
    AbsorbUiThing( 'hngtnc', qq, tabGetNa );

		// I think this is obsolete though commented out on 22_aug_20_20
    //DoTableFactUpdate('hrfs');
  }
}


// Get well formatted generalized table content descriptor and show it 03oct20
function getTableJustAdd( whatToGet, bestTableName, paramsToAddIn )
{
  // Get and use it using date table helper package, we are given KW to ask for
  
  // Handle params carefully, this should be JSON ready to use, or undefined
  let pToSend;
  if( paramsToAddIn ) { pToSend = paramsToAddIn; }

  // Be sure we are going to add into the right table
  if( bestTableName != undefined ) 	tableName = bestTableName;
  selectTable( tableName );
 
  // Some thing to param it out
  let sendPar = JSON.stringify( paramsToAddIn) ;

  // Having a known param term utterly changes what does what here !
  let whereFrom = "";
  if( paramsToAddIn == ')humanwannatablecontenthunker' )
  {
    pToSend = whatToGet;                                      // param aka data is what to get
    whatToGet = "getonetablehunkbyfilename";                  // Express needs to know to let this in
    pToSend = { entityname: pToSend, unitcount: 1 };
    whereFrom = ')ipnet';
  }
  
  if( paramsToAddIn == ')humanwannatablehunkerlocal' )
	{
    whereFrom = ')prettylocal';
	}

  // Our friend ajax here
  if( whereFrom == ')ipnet' )
  {
    $.ajax(
    {
      data: pToSend,
      url: whatToGet,

      // Callback for things answered
      success: function( result ) 
      {
        // Facts to human watching, debug etc
        console.log( "greyland", 'success' )
        HumanInfoGetterShower( result, bestTableName ); 

        // Put answer in someplace its supposed to go
        serverGaveThisTableContent( result )

        // Not fancy shaped is no big deal but we don't process it further	
        if( ( header == undefined ) || ( tableStuff == undefined ) ) { return; }
      },

      // Callback for completed
      complete: function( ef )
      { console.log( "greyland", 'compplete' )},

      // Callback for bad stuff
      error: function( ee )
      { console.log( "greyland", 'error' )}
    });
  }  

	// Our friend ajax here
  if( whereFrom == ')prettylocal' )
	{
    let d = 0;
    
    let getNum = numberPlaceFigurer( ')fixtloc', NumStr( whatToGet ) );

    localDbReadNumberedFact( getNum );
    setTimeout( localHunkTableGot, 1200 );
	}

}
var idHash = {}, howToDo = '';


// Table in from server end game 04oct20
function serverGaveThisTableContent( rawIn )
{
  // Put it in

  console.log( 'serverGaveThisTableContent: ' );
  console.log( rawIn );

  let inThing = rawIn;

  // The header names things to do, including the usual target table by name
  header =      inThing[ 'header' ];
  tableStuff =  inThing[ 'tablepayload' ];

  console.log( 'then more: ', header );

  // More to figure out, more to take apart
  let mCom = header.majorcommand;
  let a1 = header.arg1; let a2 = header.arg2; let a3 = header.arg3; let a4 = header.arg4;
  console.log( "greyland0 ", mCom, a1,a2,a3,a4);
  
  // The flow here is decoded from kw sent to me
  if( mCom == 'id3factsthanks')												{ howToDo = 'id3'; }
  if( mCom == 'tablefill1')														{ howToDo = 'tf1'; }
  if( mCom == 'getonetablehunkbyfilenameresponse' )		{ howToDo = 'gh1'; }      
  if( mCom == 'savehunk1' )                           { howToDo = 'gh1'; }

  // An interesting thing server said sometimes
  tableName = header.arg1;

  // Usually, not knowing a kw means some things are to be ignored
  if( howToDo != 'tf1' ) { tableName = ""; }

  // This is complete enough to process, so do it
  if( howToDo == 'id3') { hunkyRenaming( howToDo, a2, a3, a4 ); }
  if( howToDo == 'gh1') { hunkyRenaming( howToDo, tableStuff, a3, a4 ); }
    
  // console.log('biggestfan4', tableName);
  jj = 0;
  DoIncrementally();
}


// Real time table filler, can do other showy stuff too 31Aug20
function DoIncrementally() 
{
  // Put new stuff into table using the fancy package we like, each things a row

  // Line break special use or something
  let cL = '\r\n'; cL = " ";

  // Settable for debug help
  let toTty = false; toTty = true;

  // What we will turn into a table this many lines
  aCount = tableStuff.length;

  // Info
  if( toTty )   { console.log( 'DoIncrementally at its top now', aCount ); }

  // Last pass detection, this metho retriggers itself until it does all the lines ( this boole figures it )
  didRun = false;

  // Peel off each array and put into table, so when there are none more its close up activity time
  if( aCount > 0 ) 
  {	didRun = true;
    // Extract a line to be shown, we want the first don't care what the key name is
    if( toTty ) console.log( tableStuff );
    
    let daRow = tableStuff.pop();
 
    // The table content real update, but regards the dataTable add in helper
    if( daRow != undefined )
    { addRowToTable( daRow ); }

    // We can right into real time display of facts
    let updateModal = false;
    if( updateModal ) 
    {
      let nSubset = jj % 20; let seeThing = "";																	// Once in a while
      if( nSubset == 0 ) {
        seeThing = jj.toString(); seeThing = jj.toString() + "   " + daRow;			// Lookie
        localDbAddNumberedTableFact( entryIdDbTgShow, seeThing );
      }
    }
  }
 
  // Either ran or didn't. No   didrun   means last table line is in table
  if( !didRun ) 
  {
    // Fixups are required unfortunately 03feb20
    // alterAlignTableColumns('table3', [2, 4, 5], 'center');
    // alterWidthTableColumns('table3', [ 1 ], '42px');

    // Variations in behavior of filled tables are easy to select, like so
    let look1 = { data: tableStuff, "autoWidth": false };
    let look2 = { data: tableStuff, "autoWidth": true };

    // Close out access to it locally, we are neat about this stuff
    // this also does a gentle rewrite 30jun20
    doneTable();

    // If it was picked by human intent, its role for that is over
    hunkTaNumToAccess = 0;

    // Sayable
    sayDelayedSome( 'tfc' );
    return;
  }

  // Did run, pre for next and redo myself
  jj++;																																	// Counting things done is useful

  // Looks better when touched early on during writing
  if( jj == 2 ) { touchTable(); }

  // Recall myself fast 
  setTimeout( DoIncrementally, 1 );
}


// Buid table in memory without stopping app
var didRun;
function makeTable1( daName, aTitle )
{
  let uz = daName; if( aTitle != undefined ) uz = aTitle; 
  makeHeading2( uz );

  var x = document.createElement( "TABLE" );

  x.setAttribute( "id", daName );
  document.body.appendChild( x );

  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById( daName ).appendChild(y);


  // Might be for reference 'or something' ok
  //var z = document.createElement( "TD" );
  //var t1 = document.createTextNode( "a" );
  //var t2 = document.createTextNode( "b" );
  //var t3 = document.createTextNode( "c" );
  //z.appendChild( t1 ); z.appendChild( t2 ); z.appendChild( t3 );
  //document.getElementById( "myTr" ).appendChild( z );
}


// Headings touchup
function makeHeading2( daText )
{
  var hdr = document.createElement( "header" ),
  h2 = document.createElement( "h2" );
  h2.textContent = daText;
  hdr.appendChild( h2 );
  document.body.appendChild( hdr );
}


// Server is used to talking about tables, this uses it 'anyway' for a db intact
function getDbLikeItsATableAlmost( aKw, cb )
{
  // Ajax get of a thing

  let ttyLook = 2;

  $.ajax({
    url: aKw,
    success: function( result ) 
    {
      // The header names things to do, including the usual target table by name
      header = result[ 'header' ];
      tableStuff = result[ 'tablepayload' ];

      // Server recommends a destination table usually. Its not going to a table now
      let name1 = header.arg1;

      // Each thing is a list element
      cb( 1, tableStuff );
    }
  });
}


// Change cells width by column
function alterWidthTableColumns( tn, wl, toThis )
{
  // Apply worklist of cells to align

  var uzTab = document.getElementById( tn );
  for (var i = 0, row; row = uzTab.rows[ i ]; i++ ) {
    for( var j = 0, col; col = row.cells[ j ]; j++ ) {
      let ap = document.getElementById( tn ).rows[ i ].cells;
      if( wl.includes( j ) ) ap[ j ].style.width = toThis;
}}}


// Change cells style by column
function alterAlignTableColumns( tn, wl, doThis )
{
  // Apply worklist of cells to align
	var uzTab = document.getElementById( tn );
	for (var i = 0, row; row = uzTab.rows[ i ]; i++ ) {
  	for( var j = 0, col; col = row.cells[ j ]; j++ ) {
   		let ap = document.getElementById( tn ).rows[ i ].cells;
   		if( wl.includes( j ) ) ap[ j ].align = doThis;
}}}

// Change cells style by row
function alterAlignTableRows( tn, wl, doThis )
{
  // Apply worklist of cells to align

	var uzTab = document.getElementById( tn, wl );
	for (var i = 0, row; row = uzTab.rows[ i ]; i++ ) {
  	for( var j = 0, col; col = row.cells[ j ]; j++ ) {
   		let ap = document.getElementById( tn ).rows[ i ].cells;
   		if( wl.includes( i ) ) ap[ j ].align = doThis;
}}}


// More info for human
function HumanInfoGetterShower( usualXmitshape, recTableName )
{
  // Take apart a little sometimes show

  let  aHdr =   usualXmitshape[ 'header' ];
  let  tStuff = usualXmitshape[ 'tablepayload' ];

  // if some  answer from server  / cloud is shaped badly, no more working with this pass
  if( ( aHdr == undefined ) || ( tStuff == undefined ) ) { return; }

  // Server can recommend a destination table
  let goodTaName = aHdr.arg1;
  
  // But *if* local call says another table use it instead
  // hey, its recommended
  if( recTableName != undefined )   { goodTaName = recTableName; }

   // Handle each array element which is a table row
   let  liCnt = tStuff.length;

   let goodTaNameUP = goodTaName.toUpperCase();

   // Tell them 05jul20
   let mHum = goodTaNameUP + " " + liCnt.toString() + " " + "Entries";
   mHum = mHum + " " + "Inbound now";

   mHum = goodTaNameUP + " has " + liCnt.toString() + " " + "Entries";
   mHum = mHum + " " + "Inbound";

   mHum = liCnt.toString() + " Entries Inbound"; 

   SayMoLines( mHum );
}

















