// A set of functions to make a lisp like lookup in memory system, almost LAMBDA 08 Jun 2017 20:20

// Make a property pair come to be  
    var property_map = {};
  function StorePropertyPair( da_index, da_noun, assoc_fact ) 
  {
    // Sure remember them carefully

    // Stupid indexes are better ignored then risk slowish crashes
    if( da_index == undefined ) { return; }

    // Prepare indexes esp consider one not used
    var built_index1 = da_index.trim().toLowerCase();

    // Also unusable
    if( built_index1 == "" ) { return; }

    // Used when a second fact is proported
    var built_index2 = da_index.trim().toLowerCase() + "|" + da_noun.trim().toLowerCase();

    // Missing qualifier is important
    if( da_noun == "" )
    { property_map[ built_index1 ] = assoc_fact; }
    else
    { property_map[ built_index2 ] = assoc_fact; }
  }


// Use property pairs get values
  function GetPropertyPair( da_index, da_noun )
  {
    // Get values

    var answer = "";

    // Prepare ways to look
    var built_index1 = da_index.trim().toLowerCase();
    var built_index2 = da_index.trim().toLowerCase() + "|" + da_noun.trim().toLowerCase();

    // Consider missing a qualifier, works anyway we figure
    if( da_noun == "" )
    { answer = property_map[ built_index1 ]; }
    else
    { answer = property_map[ built_index2 ]; }

    return answer;
  }


// Lookup named things to add rigour to this process
  function LookupLocalMappedIdea( in_name )
  {
    // Map name to be sure its under control

    if( in_name == "timer_start" )      { return "TIMERSTART_"; }
    if( in_name == "session_name" )     { return "VISITNAME_"; }
    if( in_name == "file_remoting" )    { return "FILEHANDLE_"; }
    if( in_name == "a_desc" )           { return "DESC_"; }
    if( in_name == "fav_slot" )         { return "FAVSLOT_" ; }
    if( in_name == "local_thread" )     { return "LTHREAD_" ; }
    if( in_name == "tick_interval" )    { return "TICINT_" ; }
    if( in_name == "main_graph" )       { return "MAING_" ; }

    return "";
  }


// Encapsulate sorta persistent and sorta temporary facts
  function SetStickyFact( tf, fact_name, fact_helper, fact_itself )
  {
    // Very carefull slightly transient fact manager

    // If not in list its nothing
    var pfn = LookupLocalMappedIdea( fact_name );

    // No big thing in case
    if( pfn == "" ) { return "bad"; }

    // For use
    var use_name = pfn + fact_helper.trim();
    // These differ slightly    n is 'n'ow   f is 'f'orever
    if( tf == "n" ) { sessionStorage.setItem( use_name, fact_itself ); return "ok"; }
    if( tf == "f" ) { localStorage.setItem(   use_name, fact_itself ); return "ok"; }

    return "bad";
  }


// Encapsulate sorta persistent and sorta temporary > 1 html files
  function GetStickyFact( tf, fact_name, fact_helper )
  {
    // Fact getter if there there o get that is

    // If not in list its nothing
    var pfn = LookupLocalMappedIdea( fact_name );

    // No big thing in case
    if( pfn == "" ) { return ""; }

    // For use
    var use_name = pfn + fact_helper.trim();

    // These differ slightly    n is 'n'ow   f is 'f'orever
    var ans = "";
    if( tf == "n" ) { ans = sessionStorage.getItem( use_name ); }
    if( tf == "f" ) { ans = localStorage.getItem(   use_name ); }

    // Best efforts done to fetch it, ehres for stinkin answer
    if( ans == null ) { ans = ""; }
    return ans;
  }

