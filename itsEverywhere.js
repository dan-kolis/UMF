/// its_everywhere.js
/// 06 Aug 2020 Code used in both browsers and servers


// Prep sendable table content for html consuming 20jan20
function messageSendFixerUpper( kindOfUnpack, arg1tN, arg2, arg3, arg4, somePl )
{
  // Fixed shape comm to html for table showing content

  // If unsure normalize it
  let df = 'na';
  if( arg1tN == "" ) arg1tN = df;
  if( arg2 == "" ) arg2     = df;
  if( arg3 == "" ) arg3     = df;
  if( arg4 == "" ) arg4     = df;

  // Make a JSON sendable thing with a generalized shape to allow HTML client creation of $
  let header = { majorcommand: kindOfUnpack,    arg1: arg1tN,
                                                arg2: arg2,
                                                arg3: arg3,
                                                arg4: arg4 };

 // The actionable content to show is supposed to be ready, so
  let tablepayload = somePl;
  if( somePl == undefined )     { tablepayload = ""; }

  let whatToSend = { header, tablepayload };   // Hook up what to do why etc metadata

  return whatToSend;
}


// String to number 19jul20
function seriouslyToNum( x )
{
  let parsed = parseInt( x, 10 );

  if( isNaN( parsed ) ) { return 0; }

  return parsed;
}


// String to number 19jul20
function seriouslyToNum( x )
{
  let parsed = parseInt( x, 10 );

  if( isNaN( parsed ) ) { return 0; }

  return parsed;
}



