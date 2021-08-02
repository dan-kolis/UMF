// I am   languagelooks   some js and so on for how things look, maybe some lanuage dependant stuff too */

 // Looks of cells by column in maingraph
  var a_style_col1 = "color: Blue; font-size: 15px; font-weight: Bolder; background-color: #d4e3e5;";
  var a_style_col2 = "color: Blue; font-size: 15px; font-weight: Bolder; background-color: #ecc87c;";
  var a_style_col3 = "color: Blue; font-size: 15px; font-weight: Bolder; background-color: #dcb86c;";
  var a_style_col4 = "color: Blue; font-size: 15px; font-weight: Bolder; background-color: #ffffff;";
  var a_style_col4 = "color: Blue; font-size: 15px; font-weight: Bolder; background-color: #ffffff;";
// A program id
  var server_version = "";

  // Fonts too, sort of good around test more then production, well, look first before altering
  var named_font1 = "bold 19px sans-serif";
  var named_font2 = "";
  var named_font3 = "";

  // An important graphical idea
  var font_modulenames = "bold 20px arial";

  // Highlights color when mouseover to some cells
  var highlight_subin_color = "#005500";

  // Changes to cells when things get figured liek read only or r/w
  var style_for_ro_access = "#acc8cc"; 
  var style_for_rw_access = "#5cc85c";
  var style_for_rw_data = "4px solid #4cb84c";


// Apply chnage looks by thing to chnage and what to do
  function DoLookieFx( onow, do_this )
  {
    // Apply a change

    // Cell changes for ro or rw in a table
    if( do_this == "rwaxcol" ) { onow.style.backgroundColor = style_for_rw_access; }
    if( do_this == "roaxcol" ) { onow.style.backgroundColor = style_for_ro_access; }

    // Pickable thing like cell in a table
    if( do_this == "cellpickmedec" ) { onow.style.border = style_for_rw_data; }
  }


// HR line cutter upper
  function Hr_Split( anum, aline )
  {
    // Unpack > 1 lines

    var de = "|"; var p1 = "", p2 = "";
    var cutup = aline.split( de );

    p1 = cutup[ 0 ];
    if( cutup.length > 1 ) { p2 = cutup[ 1 ]; }

    if( anum == 1 )  { return p1; }
    if( anum == 2 )  { return p2; } 

    return "";
  }


// Some langauge localization lookup
  function LLU( mc )
  {
    // Langauge lookup

    if( mc == "vftop" ) { return "Program Version is"; }
    if( mc == "fort1" ) { return "One line Test message"; }
    if( mc == "fort2" ) { return "Two line Test message|LINE TWO"; }
    if( mc == "undfb" ) { return "Misc error for file system operations" ; }
    if( mc == "filer" ) { return "Content erased | Removed as per your direction" ; }
    if( mc == "nofe1" ) { return "Not erased | This is not permitted at this time" ; }
    if( mc == "rmcha" ) { return "Rack membership has changed"; }
    if( mc == "rmch2" ) { return "A module has been added or removed"; }

    // If not found
    ans = "Sorry, code for this message is not known";
    ans = ans + "|" + "Code is: " + mc;
    return ans;
  }


// Logo at top
  function LogoShow( akind )
  {
    // Show a thing

    if( akind == "atx" )     { document.getElementById( 'mastheadimg' ).src = "masthead-atx.png"; }
    if( akind == "factory" ) { document.getElementById( 'mastheadimg' ).src = "factory1.png"; }
  }


// Whatever to set up logo from incoming command
  function SetupCornerLook( rr )
  {
    // Show right thing

    var eval = false;

    if( eval )
    {
      var its = Our_JSON_Top_Looker( rr, "factorynow" );

      // If it exists write to it
      var al =  document.getElementById( "factoryfact" );
      if( al != null) { al.innerHTML = its; }

      if( its == "no" )  { LogoShow( "atx" ); }
      if( its == "yes" ) { LogoShow( "factory" ); }
    }
  }



