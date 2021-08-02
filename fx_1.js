// The look of things art wise, colors and styles fonts and whitespace 11 Jun 2017 17:35

// Bust up lines for multiline canvas text
    var set_FillTextMultiline = {};
  function FillTextMultiline( cctx, da_text, x, y, some_kind )
  {
    // Write lines set out by tabs vertically, command 'doit' does it, otherwise only returns line count

    // If defined, change leading multiplier
    var line_space_k = 2.375;  if( set_FillTextMultiline.linegapmultiplier != undefined )
    { line_space_k = set_FillTextMultiline.linegapmultiplier; }

    // If defined, change line split char
    var split_at = "\t";       if( set_FillTextMultiline.splitchar != undefined )
    { split_at = set_FillTextMultiline.splitchar; }

    var line_height = cctx.measureText( "M" ).width * line_space_k;
    var lines = da_text.split( split_at );

    // Paint each to a canvas
    for (var i = 0; i < lines.length; ++i)
    {
      if( some_kind == "doittrim" )   { cctx.fillText( lines[ i ].trim(), x, y ); }
      if( some_kind == "doitnotrim" ) { cctx.fillText( lines[ i ], x, y ); }
      y = y + line_height;
    }

    // This many lines, ( might be ignored )
    return lines.length;
  }


// Video fades or whatever fx: wideass
    var set_NonLinearMapper_ForFx = {};
  function NonLinearMapper_ForFx( a_effect_name, a_counter )
  {
    // Do visual effect versus counter time given

    // Usual start is no transparency at all
    var max_opaque = "1";

    // If changed object wise, use that for start of transparency setting
    if( set_NonLinearMapper_ForFx.startopacity != undefined )       { max_opaque =  set_NonLinearMapper_ForFx.startopacity; }

    // If effect is named it can change start opacity
    top_num = 0.5;
    if( a_effect_name == "fasttailfade" ) { top_num = max_opaque; }
    if( a_effect_name == "startdimsome" ) { top_num = max_opaque; }

    if( a_counter > 45 ) { return top_num; }
    if( a_counter > 40 ) { return top_num; }
    if( a_counter > 35 ) { return top_num; }
    if( a_counter > 30 ) { return top_num; }
    if( a_counter > 25 ) { return top_num; }
    if( a_counter > 20 ) { return top_num; }
    if( a_counter > 15 ) { return top_num; }
    if( a_counter > 10 ) { return top_num; }
    if( a_counter > 10 ) { return top_num; }

    // Fade number
    var m = top_num / 10 ;

    // Enough of this then
    DeactivateHighlight( 0 );

    // Opacity of course
    return m * a_counter;
  }


// Reverse highlight
    var highlighted_cell = {};
    var column_considering = 0;
  function DeactivateHighlight( act_col )
  {
    // If on turn off

    if( highlighted_cell == null ) { return; }

    column_considering = act_col;

    // Reverse past highlighted if set now
    if( !IsEmpty( highlighted_cell ) )
    {
      var undo_thing = highlighted_cell.now_is;
      undo_thing.style.fontSize = As_Px( 15 );
      undo_thing.style.color = "Blue";
      undo_thing.style.backgroundColor = highlighted_cell.backgroundColor;
      undo_thing.style.border = "1px solid rgb(114, 158, 165)";

      highlighted_cell = {};
    }
  }


// Define which modal to use
    var modal_num_now;
  function Modal_Set_ToThisOne( da_num )
  {
    // Set to numbered one, set handles

    // If these don't exist, it is ok
    modalwrapper_hdl = document.getElementById( "modal_wrapper_" + da_num );
    modalwindow_hdl =  document.getElementById( "modal_window_"  + da_num );

    // Use when num of its needed
    modal_num_now = da_num;
  }


// Open modal usual stuff
  function OpenModal( e )
  {
    // Get modal for changes going, remember the thing clicked on doesn't know how to edit itself

    // Find values of interest, what is showing now, and Xhr Variable name
    var a_ptr = this.id;

    // Better to do nothing then leave a lurking error and stop the execution thread
    if( typeof a_ptr == "undefined" ) { return ; }

    // If not known dont make it worse
    if( a_ptr == "undefined" ) { return; }
    var xhr_var_name = GetPropertyPair( a_ptr, "xhrvariable" );

    change_var_msg_code = ""; if( xhr_var_name != "" ) { change_var_msg_code = xhr_var_name; }
    // Select modal input box indicated by type, so the fields shape is how it knows which modal to use
    var a_edt_idea = GetPropertyPair( a_ptr, "edithow" );

    // Sometimes we almost show a thing, then don't
    if( a_edt_idea == "skip" ) { return; }

    // Serious things use the number hard coded, its mix/match on purpose
    var uz = 1;
    if( a_edt_idea == "txt" )      { uz = 1; }
    if( a_edt_idea == "yesno" )    { uz = 2; }
    if( a_edt_idea == "noyes" )    { uz = 2; }
    if( a_edt_idea == "onoff" )    { uz = 2; }
    if( a_edt_idea == "offon" )    { uz = 2; }
    if( a_edt_idea == "flattext" ) { uz = 3; }

    Modal_Set_ToThisOne( uz );

    // Display, center
    modalwrapper_hdl.className = "overlay";
    modalwindow_hdl.style.marginTop =  ( (-modalwindow_hdl.offsetHeight)/2 ) + "px";
    modalwindow_hdl.style.marginLeft = ( (-modalwindow_hdl.offsetWidth)/2  ) + "px";

    // Make focus, whatever is easiest for human
    if( modal_num_now == 1 ) { document.getElementById( "modalentryfield1" ).focus(); }
    e.preventDefault ? e.preventDefault():e.returnValue = false;
  }


// Clears the modal wip value
  function ClearModal( mnum, kind )
  {
    // Wipe input values so far to empty of selected modal

    if( mnum == 1 )
    {
      document.getElementById( 'modalentryfield1' ).value = "";
      if( kind == "focusit" ) { document.getElementById( "modalentryfield1" ).focus(); }
    }

    if( mnum == 3 )
    {
      document.getElementById( "modaltext3" ).value = "";
      document.getElementById( "modallinecount3" ).innerHTML = "";
    }
  }


// Closes the containerish thing for numbered modal
  function CloseModal()
  {
    // Close Modal

    // Sometimes this doesn't exist, no problem
    if( modalwrapper_hdl == null ) { return; }

    // Numbered at open of it is ok to figure which one
    modalwrapper_hdl.className = "";
  }


// Open modal 2 usual stuff
  function OpenFlash( e )
  {
    // Do things to make model 2 show

    flashwrapper_hdl.className = "flashyoverlay";
    document.getElementById( "modalentryfield2" ).focus()
    e.preventDefault ? e.preventDefault():e.returnValue=false;
  }


// Model open pre figured
    var flash_width_small =  300 ;
    var flash_width_medium = 500 ;
    var flash_width_large  = 700 ;
  function Flash_WithEffect_NoFollowup( a_kind, other_spec )
  {
    // Flash without op sys hook

    // Static show
    if( a_kind == "bland" ) { flashwrapper_hdl.className = "flashyoverlay"; }

    // Fader 1
    if( a_kind == "withlongishfade" )
    {
       ShowFlash( "cornerlookie", flash_width_medium, other_spec );
    }

    // Fader 2
    if( a_kind == "withquickerfade" )
    {
       ShowFlash( "cornerquickie", flash_width_medium, other_spec );
    }

    // Fader 3
    if( a_kind == "withspeedyfade" )
    {
       ShowFlash( "cornerlookie", flash_width_medium, other_spec );
    }
  }


// Modal 2 positioner
  function Flash_Positioner( hor, ver )
  {
    // Place

    // Just for reference don't know  much about these
    // style.marginleft style.margintop style.left style.top style.margintop

    // Set
    flashwindow_hdl.style.left = As_Px( hor );
    flashwindow_hdl.style.top =  As_Px( ver );
  }


// Set human readable for flash
  function Flash_SetMessage( msg_top, msg_detail, other_instructions, popup_type )
  {
    // Ready display with text(s)

    // Set them to be seen
    if(popup_type != "div mastheadfat")
    {
      document.getElementById( 'flash_msgtop' ).innerHTML = msg_top + ":";
    }
    document.getElementById( 'flash_msgmiddle' ).innerHTML = msg_detail;
  }


// Command button close
  function CloseFlash()
  {
    // Human poke usually to close flash earlier

    Flash_TurnOffTotally( "off" );
  }


// Command button hold
  function HoldFlash()
  {
    // Human poke to leave flash showing

    Flash_TurnOffTotally( "hold" );
  }


// On clicks, can close things if it thinks this is good to do vch
  function VastClickHandler( e )
  {
    // Think about clicks

    // If its a usual visual thing ( not a button, for example ), do this
    if( e.target.tagName == "DIV" )
    {
      // Close modal ( whichever ones popular now )
      CloseModal( modal_num_now );
    }
  }


// Can for instance, close on esc key
  function VastKeyHandler( e )
  {
    // Key clicks may have special meanings like cancel or enter

    // For escape
    if( e.keyCode == 27 ) { CloseModal(); }

    // For enter take entry
    if( e.keyCode == 13 )
    {
      ProcessModalButton( modal_num_now, "thenclose" );
    }
  }


// Toast to fixed spot by named place
  function ToastToPlace( a_named_place )
  {
    // To a spot we know by a name

    if( a_named_place == "inlogotop" )
    {
      SetToastPosition( 880, 80 );
    }
  }


// Toast visual event timer fx: wideass
  function Toast_TickTocker()
  {
    // Click for things humans see directly here

    toastnow_hdl = document.getElementById( "toastarea" );

    // Nothing to do its off
    if( toast_kounter == 0 ) { return; }

    // Counts down right ? sure
    toast_kounter--;

    // This turns it off 'all the way'
    if( toast_kounter == 1 )
    {
      toast_kounter = 0;
      clearInterval( toast_tt_handle );

      toastnow_hdl.style.opacity =  0;
      SetToastPosition( 1, 1 );
      return;
    }
    
    // Usual visual effect conting down
    var opac_now = NonLinearMapper_ForFx( "fasttailfade", toast_kounter );

    toastnow_hdl.style.opacity =  opac_now;
  }


// Flash visual event timer 
  function Flash_TickTocker()
  {
    // Click for things humans see directly here
    
    // Nothing to do its off
    if( flash_kounter == 0 ) { return; }

    // We are controlling the look of it named thing
    var ima_thing = "flash_window" ;

    // Counts down right ? sure
    flash_kounter--;

    // This turns it off 'all the way'
    if( flash_kounter == 1 ){ Flash_TurnOffTotally( "off" ); }
 
    // Usual visual effect conting down
    var opac_now = NonLinearMapper_ForFx( "fasttailfade", flash_kounter );
    flashwindow_hdl.style.opacity = opac_now;
  }


// Flash cease entirely
  function Flash_TurnOffTotally( kind )
  {
    // Make invisible, turn off timers etc

    flash_kounter = 0;
    clearInterval( flash_tt_handle );

    flashwindow_hdl.style.opacity = 0;
    flashwrapper_hdl.className = "";

    // Change sometimes
    if( kind == "hold" )
    { flashwindow_hdl.style.opacity = 1; flashwrapper_hdl.className =  "flashyoverlay"; }
  }


// Make toast show
  function Show_Toast_Now( a_kind )
  {
    // Make toast visible

    // Settings
    var highest_num = 100;
    if( a_kind == "toastlong" )   { highest_num = 90; }
    if( a_kind == "toastmedium" ) { highest_num = 90/2; }
    if( a_kind == "toastfast" )   { highest_num = 90/3; }

    var hdl = document.getElementById( "toastarea" );
    hdl.style.display = "block";

    // If running now do this
    if( toast_kounter > 0 )
    {
      toast_kounter =  highest_num;
      return;
    }

    // Time decrements from this, its 'in percent'
    toast_kounter = highest_num;

    // Start timer interval to run in mSec ticks
    var usual_ms_interval = 25 ;
    toast_tt_handle = setInterval( Toast_TickTocker, usual_ms_interval );
  }


// Manage flash 
  function ShowFlash( a_kind, flash_width, other_spec )
  {
    // Make flash be visible, etc

    if( a_kind == "cornerlookie" )
    {
       // Time decrements from this, its 'in percent'
       flash_kounter = 250 ;
    }

    if( a_kind == "cornerquickie" )
    {
       // Time decrements from this, its 'in percent'
       flash_kounter = 170 / 2 ;
    }

    // Shows
    flashwrapper_hdl.className = "flashyoverlay";
    if(other_spec != "div mastheadfat")
    {
      flashwindow_hdl.style.width = As_Px( flash_width );
    }

    // Start timer interval to run in mSec ticks
    var k = 5 / 8; 
    var usual_ms_interval = 25 * k ;
    flash_tt_handle = setInterval( Flash_TickTocker, usual_ms_interval );
  }


// Slighty different version flash
