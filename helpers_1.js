// I am   helpers   Various helper functions pretty general js   07 Jun 2017 15:17

// Help with text area
function Say_On_TA( cName, toAdd )
{
  var c = document.getElementById( cName );
  if( toAdd == ")clear" ) { c.value = ""; return; }
  if( toAdd == ")hide" )  { c.style.display = "none"; return; }
  if( toAdd == ")show" )  { c.style.display = "inline"; return; }
  var pre = c.value;
  c.value = pre + toAdd + "\r";
}


var current_user = "";
// Check for empty object
  function IsEmpty( obj ) 
  {
    // Return t or f for set aka object ... being empty

    return !Object.keys( obj ).length > 0;
  }


// Styles
  function Set_StyleDisplay( aC, toThis )
  {
    document.getElementById( aC ).style.display = toThis;
  }


// Inner html
  function Set_Html( aC, toThis )
  {
    document.getElementById( aC ).innerHTML = toThis;
  }


// Destretch correction usually a canvas   Added DanK 29 May 2017
  function DeStretcher( aC )
  {
    aC.width = aC.height * ( aC.clientWidth / aC.clientHeight );
  }


// Easy use of pixels usually widths
  function As_Px( a_num )
  {
    // Easy use of widths

    var ans = " " + a_num + "px" + " ";
    return ans;
  }


// Add a function right into all strings to make first char caps
  String.prototype.capitalize = function() 
  {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }


// Usual start for most things
  function GatherMaxnetFacts( kind )
  {
    // Get tables etc

    if( kind == "usual" )
    { Initialize_MN_Variable_Table(); Construct_Master_MN_Variable_Table(); Construct_Master_MN_Module_Table(); }
  }


// For looking by humans directly kw: russianseverywhere
  function DiscardTopJSONLine( in_text, fixup )
  {
     // Looking withut machine target line usually

     var da_lines = in_text.split( "\r\n" );
     var lc = da_lines.length;
     ans = "";
     if( lc < 1 ) { return "\r\nNo contents, sorry\r\n"; }
     for( var ii = 1; ii < lc; ii++ )
     {  if( fixup == "smush" ) { ans = ans + da_lines[ ii ]; } 
        if( fixup == "crlf" )  { ans = ans + da_lines[ ii ] + "\r\n"; } 
     }

     return ans;
  }


// Fatten hr text for some numbers
  function PadXx( as_n )
  {
    // Make two chars
         
    var n = parseInt( as_n, 10 );
         
    if( n > 9 )
    {  return n.toString(); }
         
    // Needs a zero
    return "0" + n.toString();
  }
         
 
// Position wrapped
  function As_Position( a_thing, to_do )
  {
    // Positions for style.{here}

    // Static renders in order as they appear in the document flow
    if( to_do == 's' ) { a_thing.style.position = "static"; }

    // Absolute is positioned relative to its first positioned ancestor
    if( to_do == 'a' ) { a_thing.style.position = "absolute"; }

    // Fixed positioned relative to the browser window
    if( to_do == 'f' ) { a_thing.style.position = "fixed"; }

    // Relative move relative to its normal position
    if( to_do == 'r' ) { a_thing.style.position = "relative"; }

    // Initial sets to its default value
    if( to_do == 'i' ) { a_thing.style.position = "initial"; }

    // Inherit this property from its parent element
    if( to_do == 'h' ) { a_thing.style.position = "inherit"; }
  } 


// Fixup retouched url
  function UrlLeftPart()
  {
     // Get last one used and ready for reuse

     var newer_url = window.location.protocol + "//" + window.location.host + "/"
     return newer_url;
  }


// Out specific Login
  function ToLogin()
  {
     // To a login page of some sort

     // Go
     var actual_page = "loginout.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }


// Out specific Welcome
  function ToWelcome()
  {
     // To a Welcome

     // Go
     var actual_page = "welcome.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }


// Out specific maingraph
  function ToMaingraph(user_in)
  {
     // To a www stuff
    current_user = user_in
     // Go
     var actual_page = "maingraph.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }
  
   function GetUser()
 {
   return current_user;
 }


// Out specific reports
  function ToReports()
  {
     // To a www stuff

     // Go
     var actual_page = "reports.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }


// Out specific settings
  function ToSettings()
  {
     // To a www for system setting

     // Go
     var actual_page = "settings.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }


// Out specific
  function ToAccounts()
  {
     // To a dynamic www for accounts

     // Go
     var actual_page = "accounts.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }


// Out specific
  function ToPasswords()
  {
     // To a dynamic www for accounts

     // Go
     var actual_page = "passwords.html";
     Xhr_JustJump( UrlLeftPart() + actual_page );
  }


// A visible effect 
  function TemporalFlashyEffect( thingid, effecttodo )
  {
    // Do a thing to see on a Idable thing here
    
    if( effecttodo == "justclear" )
    {
      document.getElementById( thingid ).value = "";
    }
  }


// Add to files displayed
  function FilesLatelyAdder( aname )
  {
     // Add in if unique

     // Cleaner name, if empty thats it
     var cleanername = aname.trim() ;
     if( cleanername == "" ) { return ; }

     // In there already ? do nothing
     var aspot = fileswelike.indexOf( cleanername ) ;
     if( aspot != -1 ) { return ; }     

     // Add and reset to first element
     fileswelike.push( cleanername ) ;
     fileswelikeindex = 0 ;
  }


// Format numbers for show
  function PadInteger( anum, asize ) 
  {
    // Return like 3 to 003 etc

    var ans = "000000000" + anum ;
    return ans.substr( ans.length - asize );
  }


// Remove elements in a select list
  function RemoveSelectContents( someid )
  {
    var elSel = document.getElementById( someid ) ;
    var i;
    for ( i = elSel.length - 1 ; i >= 0 ; i-- ) 
    {
      elSel.remove( i );
    }
  }


// A test to see if it fired
  function AlertTest()
  {
    // See it do a thing
  
    alert( 'fired' );
  }

  function AlertTest( a_msg )
  {
    // See it do a thing
  
    alert( a_msg );
  }


// Better then the built in one in JS for safety, I say 
  function TwoPart_JSON_Parser( in_thing )
  {
     // Ultra safe JSON puller aparter, makes left and right part with evil removed
  
     // To be figured
     var my_lp = "", my_rp = "", take_place = "l";

     var its_size = in_thing.length; var ch = ""; 
     var s_col_count = 0;
     // Too small is trouble
     if( its_size > 7 )
     {
       // Consider each
       for( var ii = 1; ii <= its_size; ii++ )
       {
         // Me me
         ch = in_thing.charAt( ii - 1 );
         
         // Surpress out of range
         if( ch.charCodeAt < 32 ) { ch = "?"; }
         if( ch.charCodeAt < 127 ) { ch = "?"; }

         // Left or right separator
         if( ch == ":" ) { take_place = "r"; }

         // Remove quotes and spec char I use elsewhere
         if( ( ch == "|" ) || ( ch == "\"" ) || ( ch == ":" ) || ( ch == "{" ) || ( ch == "}" ))
          { 
            if(ch == ":" && s_col_count < 1)
            {
              ch = "";
              s_col_count += 1;
            }
            else if( ch != ":")
            {
              ch = "";
            }
          }

         // Collect results
         if( take_place == "l" ) { my_lp = my_lp + ch; }
         if( take_place == "r" ) { my_rp = my_rp + ch; } 
       }
     }

     my_lp = my_lp.trim(); my_rp = my_rp.trim();
/*     if( ( my_lp.length < 1 ) || ( my_rp.length < 1 ) )
     {  my_lp = "" ; my_rp = ""; }
*/
     // Left and right parts the answer, both very pretty cleaned up
     return { lp:my_lp, rp:my_rp }
  }


// Return a comma delim piece of a string
  function FindCommaPiece( look_in, comma_spot )
  {
    // Scan and return comma delim piece

    var ans = ""; 

    look_in = look_in + ","; var mp = 0;

    var from_piece = look_in;
    while( comma_spot > 1 )
    {
      var a_spot = look_in.indexOf( ',', mp );
      if( a_spot < 0 ) { return ""; }
      from_piece = look_in.substr( a_spot + 1 );
      if ( a_spot > ( -1 ) )
      { mp = a_spot + 1; comma_spot--; }   
    }

    var v_end = from_piece.indexOf( ",");
    if( v_end > 0 ) { ans = from_piece.substr( 0, v_end );}

    return ans.trim();
  }


// Add options to list pull down
  function AddToListPd( list_id, say_this )
  {
    // Add a line

    var x = document.getElementById( list_id );
    var op = document.createElement( "option" );
    op = document.createElement( "option" ); 
    op.text = say_this; 
    op.value = say_this;
    x.add( op ) ;
    //x.selectedIdex = -1;
  }


// Controllable timestamp, different looks can be make with   aKind   spec
function NeatTimeStamp( aKind )
{
  if( aKind == undefined ) { aKind = 1; }

  date = new Date;
  ms = date.getMilliseconds();
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array( 'January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September',
                      'October', 'November', 'December');
  d = date.getDate(); day = date.getDay();
  days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  h = date.getHours();
  if( h<10 ) { h = "0" + h; }
  m = date.getMinutes(); if( m<10 ) { m = "0" + m; }
  s = date.getSeconds(); if( s<10 ) { s = "0" + s; }

  // Simplest one
  if( aKind == 1 )
  {  var result = '' + days[ day ]+ ' ' + months[ month ] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s; }

  // Two lines Date and year first, then time
  if( aKind > 2 )
  {  var result = {}; result[ 0 ] = '' + days[ day ]+ ' ' + months[ month ] + ' ' + d + ' ' + year;
     result[ 1 ] = h + ':' + m + ':' + s;
  }

  // More time ms
  if( aKind == 3 )
  {
    result[ 2 ] = result[ 1 ] = h + ':' + m + ':' + s + ":" + ms;
  }
  return result;

}


// Return number for ndof string numebr or 0 if unsure
function GetEndNum( iTi )
{ 
	// Get number for dribble45   returns   45

  if( iTi === undefined ) { return 0; }

	let iT = iTi.trim();
  for ( var kk = 0; kk < iT.length; kk++ ) 
  { 
   	let rP = iT.substr( kk );
   	let tN = parseInt( rP, 10 );
   	if( !isNaN( rP ) ) { return tN; }
	}
		
  return 0;
}


// Look for thing is text string
function isThisInThere( itsThis, itsThere )
{
  // Look for a thing

	if( itsThis === undefined ) 	{ return false; }
  if( itsThere === undefined ) 	{ return false; }

  let oThis = itsThis.toLowerCase(), oThere = itsThere.toLowerCase();

  let aSpot = oThere.search( oThis )
  if( aSpot > ( -1 ) ) { return true; }

  return false;
}





