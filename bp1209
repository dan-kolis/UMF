// Defining the big picture from showable and speakable orthag objects26
// 01 May 2021

var systemShape = [];
var everythingDb;

// IMPORTANT Its unlikely the intentionally hard coded table 1 to N will ever be
// changed but its not quite crazy to do so, this makes the program part easy to modify
const conTableNa = 'table';
const hashTableNa = "#" + conTableNa;

// Ways to init tables each as a chrono figured out number 01May21
function OrganizeTables( n )
{
  // The little overhead to have different ones of these is worth it for
  // generality. Probably leave as is, but be happy to add numbers

  if( n == 1 )  { OrganizeTables_Orig() }
  if( n == 2 )  { OrganizeTables_HC_8() }
}


// Organize tables with DataTable inits 21apr21
function OrganizeTables_HC_8()
{
  // This is required to hook each table to the edit package, its not too
  // clear if its also a instance creator, independent of the edit package
    
  // Each table is described here and gotten for config of all sorts
  DefineSystemShape();
  
  console.log( 'Run Organize Tables HC_8 motif' );

  $(document).ready( function () 
  {
    console.log( 'DOM second check, believe ready for anything now' );

    let aCount = 0;
    systemShape.forEach( function( daFacts )
    {
      // Get vars for a tables 'ideas', and set it up in   DataTables   helper code
      aCount = aCount + 1;
      let tNameNow = 'table' + daFacts[ 0 ]; let tNum = parseInt( daFacts[ 0 ], 10 );
      let table = $('#' + tNameNow ).DataTable( 
      {
        "bSort": true,                          // Sort by column
        "order": [],                            // Sort order { I THINK } [] makes it start with no change
        "bDeferRender": true,                   // Delay formatting screen until needed for speed up
        "select": true,                         // More kinds of picking are enabled
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false
      }  );

        // Edit switched on for each cell
        table.MakeCellsEditable( { "onUpdate": humanEditTableCellTry, "paging": false } );
        
        // Save a reference to every table numbered bt its hunk number for Datatables specific functions
        tblDATATABLES[ tNum ] = table;

        // Prepare catch for clicks
        DOMsetupTableTouchingEvents( tNum );
    });
  });
}      
var tblDATATABLES = []; for( let iT = 0; iT < 90; iT++ ){ tblDATATABLES.push( '' ); }



// Troubleshooting help, two console line items 19apr21
function consoleSayablePair( daTitle, daFact )
{
    // Show it
    console.log( daTitle + ": " );
    console.log( daFact );
}


// Table names for soft coded use in jQuery usually
function JQtableN( aNjq )
{
  // Make jquery table left part by number

  return conTableNa + aNjq.toString();
}


// Setup tables for a purpose
function OrganizeTables_Orig()
{
  // Get each tablename and hook it up to whatever it should be hooked to

  // Each table is described here and gotten for config of all sorts
    DefineSystemShape();                                                // Leaves a local var defined

  // Prepare database
  everythingDb = new Nedb();

  alert('Orig table first touch');

  systemShape.forEach( function( daFacts )
  {
    let tNameNow = 'table' + daFacts[ 0 ]; 
    let table = $('#' + tNameNow ).DataTable();
    table.MakeCellsEditable({
      "onUpdate": humanEditTableCellTry, "paging": false
    });
  });
}


// Shape of transactions with server 01may21
function DefineSystemShape( aKind )
{
  // We like to know the big picture back from worldview sets
  // Define big ideas of all sorts for many things all over not just this.
  // Each table is described here and gotten for config of all sorts
  // Its completely rational to use only SOME of the line items, and over rule
  // other aspects for a particular sort of system. No reason to take these
  // assignments too seriously

  let nplan = 1;
  // By position:   number
  //                basic name
  //                width count in orthagonals
  //                most basic prepared view
  //                table number origin 1
  systemShape.push( [ nplan, 'memo',        6,  'memo_html'   ,    1    ] ); nplan++;
  systemShape.push( [ nplan, 'timing',      6,  ''            ,    2    ] ); nplan++;
  systemShape.push( [ nplan, 'incoming',    6,  ''            ,    3    ] ); nplan++;
  systemShape.push( [ nplan, 'people',      6,  'people_html' ,    4    ] ); nplan++;
  systemShape.push( [ nplan, 'labels',      6,  ''            ,    5    ] ); nplan++;
  systemShape.push( [ nplan, 'plans',       6,  ''            ,    6    ] ); nplan++;
  systemShape.push( [ nplan, 'materials',   6,  'memo_html'   ,    7    ] ); nplan++;
  systemShape.push( [ nplan, 'tbd',         6,  ''            ,    8    ] ); nplan++;
}


// Pick a table for almost any work 26jul20
function selectTable( namedTable )
{
  // Speeds up stuff probably to do it this way:   select    addto   done

  if( ( namedTable == undefined ) || ( namedTable == "" ) ) { return; }

  let myT = namedTable;
  if( Number.isInteger( namedTable ) ) myT = namedTable.toString();

  // Could be a full name or if its a number we know what they want
  if( myT.length < 3 )    { myT = "table" + namedTable; }

  // If there only a few of these maybe this is ok
  let didPsu = false;
  if( myT == ")localplacemat" )
  { allPlacemats = []; selectedTable = myT; didPsu = true; }

  // No more to do for pseudo tables
  if( didPsu ) return;

  // This one has two ways the datatable wrapper and real op sys thing
  selectedTable = $( '#' + myT ).DataTable();
  realTable = document.getElementById( myT );

  // Since we made a reference two ways we want to be sure we 
  // pull the right number
  let nT = GetEndNum( myT );

  // Table starts at zero not one
  nT = nT + ( -1 );
  if( nT < 0 )  { nT = 0; }
  objAboutSelectedTable = systemShape[ nT ];
}
var selectedTable, realTable, objAboutSelectedTable;


// This makes it easier to not have a mistake between tables, etc
function doneTable()
{
  // Now other stuff knows this is not known 30un20

  touchTable();

  // No table is of interest now, these are all the same target you know
  selectedTable = undefined;
  realTable = undefined;
  objAboutSelectedTable = undefined;
}


// Touch table reshows it usually
function touchTable()
{
  // Redisplay renew reshow re-show rewrite re-write table

  if( realTable != undefined )
  {
    realTable.click();
  } 
}


// Remove contents
function emptyTable()
{
  // Make it gone

  if( selectedTable == undefined ) { return; }
  if( selectedTable == "" ) { return; }

  // Wipe content 05jul20
  { selectedTable.clear().draw( true ); } 
}


function unusedCode()
{
  // The DataTable control is tricky until this is all stable having
  // spare parts for testing is good

  if( false )
  {
    let bT=  ['h','j','k','l','m','n'];
    // selectedTable.row.add( bT ).draw( true );  
    // selectedTable.row.add( bT ).draw( true );
    // selectedTable.cell( 1, 1 ).data( 'z and z 1 1' ).draw()
  }
}


// Cell count is a important number for a current table 20jul20
function whatsTheCellWidthThisTable( maybTaNu )
{
  // Give back expected width of table we are using now
  // OR ! width of table if given as a number if not
  // the current one impimp

  let ans = 0;
  let tabNumNow = 0;
  //seriouslyToNum()

  if( objAboutSelectedTable == undefined ) return ans;

  // Each can change a top of text column sometimes called a 'header'
  let plannedCellCount = objAboutSelectedTable[ 2 ];
  return plannedCellCount;

  return ans;

}


// Change top line in current table 28mar21
function replaceHEADERSInTablWeLike( newerHdrTxt )
{
  // Change a thing

  // Careful
  if( newerHdrTxt == undefined ) return;
  if( objAboutSelectedTable == undefined ) return;

  // Each can change a top of text column sometimes called a 'header'
  let plannedCellCount = whatsTheCellWidthThisTable();
  for( let i = 0; i < plannedCellCount; i++ )
  {
      // Change column headers skip if there isn't onw to change
      let line_top = selectedTable.columns( i );
      if( line_top.header().length > 0 )
      { let head_item = line_top.header();
        $(head_item).html( newerHdrTxt[ i ] ); }
  }
}

// Add to selected table 01sep20
function addRowToTable( theRow )
{
  // Give me a [ 'thing', 'like', 'this' ]

  // Debug
  let aTty = false;

  // Hmmm
  let aLookN = jj;

  // Filler
  let iMt = '';

    // Sometimes there is no real HTML table ( yet ) thse are pseudo specials
    // the variable has a completely different shape, wow
  if( selectedTable == ")localplacemat" )
  {
        allPlacemats.push( theRow );
    return;
  }

  // We have been left facts about the table we love now
  let plannedCellCount = objAboutSelectedTable[ 2 ];
  let cellCountToAbsorb = theRow.length

  let tLen = 2000, elip = " ...";

  // We dont want to blow up the table so we are careful like no nothins
  for( let ii = 0; ii < cellCountToAbsorb; ii++  )
  {
    if( theRow[ ii ] == undefined )
    { theRow[ ii ] = ""; }

    // 01sep20
    let aL =  theRow[ ii ].length;
    if( aL > tLen ) { 
              theRow[ ii ] = theRow[ ii ].substring( 0, tLen ); 
              theRow[ ii ] = theRow[ ii ] + elip;
    }
  }

  // Be sure put in vector ( actually JS array ) is long enough or longer
  if( plannedCellCount > cellCountToAbsorb )
  for( let ii = cellCountToAbsorb; ii < plannedCellCount; ii++ )
  {
    theRow.push( iMt );
  }

  // Memory fussy
  for( mm = plannedCellCount; mm < ( cellCountToAbsorb + 1 ); mm++ )
  {
    theRow[ mm ] = "";
  }

  // Contoversional maybe 30aug20
  let cWidthNow = true;
  if( cWidthNow )
  {
    theRow.length = plannedCellCount;
  }

  // In it goes 01aug20
  let bV = false; bv = true;
  selectedTable.row.add( theRow ).draw( bV );

    // Debug
  if( aTty ) { console.log( 'addrowtotable last line now' ); }
}     


// Jquery set up tables on starts
//$(document).ready(function () 
//{
//    var table = $('#myTable').DataTable();
//    table.MakeCellsEditable({
//        "onUpdate": myCallbackFunction
//    });
//    table = $('#basetablememo').DataTable();
//    table.MakeCellsEditable({
//        "onUpdate": myCallbackFunction
//    });
//});


// When table edits kick in from a human
function myCallbackFunction( updatedCell, updatedRow, oldValue ) 
{
  console.log("The new value for the cell is: " + updatedCell.data());
  console.log("The old value for that cell was: " + oldValue);
  console.log("The values for each cell in that row are: " + updatedRow.data());
}


// No idea what this is about
function z5765757H()
{
  // We hide things 'just so' until there more to see
  //let n = 1;
    //systemShape.forEach( function( daFacts )
  //{
  //  // A box around each table
  //  let tN2 = 'table' + n + 'box'; 
  //  $( '#' + tN2         ).hide();
  //  $( '#' + 'table' + n ).hide();
  //  n++;
    //});
}

