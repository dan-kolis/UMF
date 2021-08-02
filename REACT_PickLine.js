// React create classes with variables from rest of world showing.
// Mid Apr 2021, like 26 Apr for example

console.log( "REACT_Pickline invoked" );

// ============================================================================
// Make a smallish modal
// ============================================================================
class SmallishModal6 extends React.Component{
    constructor(  props  ) {
      super(  props  );
      this.doItCb; 
      this.state = { frameKnt: 0, daTimestamp: new Date(), opacityNow: m.OpacityStart, selectedValue: 'tbd',
                     myChangeClose: 'tbd' };

      // Combine to use these are ready in 'real' memory. pick the ones to copy and use you like
      this.styleWholeThing = Object.assign( {}, m.placeHow1, m.niceBorder, m.placeIt6, m.sizeIt6, m.paddingWhole );

      // Iframe fill
      this.styleIf = { width: '100%', height: '100%' };

      // Binds for local vars
      this.BTNclickClose =          this.BTNclickClose.bind( this );
      this.tick =                   this.tick.bind( this );
      this.SELchanged =             this.SELchanged.bind( this );
      this.BTNclickedGetSelected =  this.BTNclickedGetSelected.bind( this ); 
      this.BTNclickedGetLast =      this.BTNclickedGetLast.bind( this );  
      this.closeAndCallCb =         this.closeAndCallCb.bind( this );
    }

    // Human moved to a item in a select control
    SELchanged( event ) {
      this.setState( { selectedValue: event.target.value } );
    }
  
    // Button clicked 'Get selected'
    BTNclickedGetSelected()
    {
      // Say what happened back to 'real' code

      this.setState( { myChangeClose: 'isayclose' } );            // Modal close behavoir

      let ii = parseInt( this.state.selectedValue, 10 );
      let aResp = currentIdbKeys[ ii ];
      reactModalsaysGetThisHunk( ')getselected', ii, aResp );     // Every fact I know is given
    }

    // Button clicked 'Get last'
    BTNclickedGetLast()
    {
      // Say what happened actionable

      this.setState( { myChangeClose: 'isayclose' } );            // Modal close behavoir
      reactModalsaysGetThisHunk( ')getlast', -1, '' );            // All I know is do this named thing
    }    
    
    // Done but call a callback if I have one
    closeAndCallCb()
    {
      // Start Im done callback function if specified

      let toGo;  toGo = this.doItCb;
      if( toGo != undefined )   toGo();
   
      // Just delete my instance
      ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode( this ).parentNode );
    }

    // Close button, other closes too
    BTNclickClose()
    {
      // Stop existing

      // Just delete my instance
      ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode( this ).parentNode );
    }

    // Ready to go
    componentDidMount() 
    {
      // Start timer
      let tInt = m.timeInterval;
      this.timerID = setInterval(
        () => this.tick(), tInt
      );
    }
  
    // Done totally with this control
    componentWillUnmount() {
      clearInterval( this.timerID );
    }
  
  // Each time event this fires
  tick() 
  {
    // Possible visual effect(s)

    // How to show, this gets changed by stuff and is startable from construction arg
    let closeIdea; closeIdea = this.props.Lcc;
    if( this.state.myChangeClose != 'tbd' ) closeIdea = this.state.myChangeClose;

    // When fading stop showing at some value
    let lowThresh = m.OpacityStop;

    // Sometimes ignore countdown, but stop too when its done its job
    if( closeIdea == 'waitforclick ') { lowThresh = -999; }
    if( this.state.opacityNow < lowThresh )   { this.closeAndCallCb(); return; }

    // Touch things, insures shows
    this.setState( { frameKnt: this.state.frameKnt + 1 } );

    // Change look 'mode'
    let countdown = true;
    if( closeIdea == 'waitforclick' ) countdown = false;
    if( closeIdea == 'selfdecide' )   countdown = false;
    if( closeIdea == 'isayclose' )    countdown = true;
  
    // Down the number goes while display fades
    if( countdown ) { this.setState( { opacityNow: this.state.opacityNow + m.OpacityIncr } ); }
  }

  // Look changer
  variableStyleLook( itChanges )
  {
    let uzL = 'rgba( 75, 76, 75, ' + itChanges.toString().substring( 0,4 ) + ")";
    let ff = { backgroundColor: uzL };
    return ff;
  }

  render() {
     // Copy callback to an ordinary easy to get at variable
     let uz; uz = this.props.FunCb; this.doItCb = uz;
     
     // Just looking
     // console.log( 'pickline cb: ' + uz );
    
    // Make style changeable somewhat, usually artsy look effect(s)
    let lookNow = this.variableStyleLook( this.state.opacityNow );
    let styleNow = Object.assign( {}, this.styleWholeThing, lookNow );

    let greetingMsg = "Get a stored table";
      
    let ki = 'modalquickie';
    let lineline0 = parseKey( currentIdbKeys[ 0 ], ki );
    let lineline1 = parseKey( currentIdbKeys[ 1 ], ki );
    let lineline2 = parseKey( currentIdbKeys[ 2 ], ki );
    let lineline3 = parseKey( currentIdbKeys[ 3 ], ki );
    let lineline4 = parseKey( currentIdbKeys[ 4 ], ki );
    let lineline5 = parseKey( currentIdbKeys[ 5 ], ki );

    return (
      <div style = { styleNow }>
      <button style = { m.styleMoreBtn } 
              onClick = { this.handleClick1 }>More</button>
      <div style = { m.styleXclose }  onClick = { this.BTNclickClose }>[x] Close</div><br />
      <div style = { m.styleTline }>{ greetingMsg }</div><br />
      <label>
      <h2 style = { m.h2Ordinary } >Table Content by title:</h2><br />
      <select selectedValue = { this.state.value } onChange = { this.SELchanged } style = { m.biggerSelect }>
        <option value="0">{ lineline0 }</option>
        <option value="1">{ lineline1 }</option>
        <option value="2">{ lineline2 }</option>
        <option value="3">{ lineline3 }</option>
      </select>
      </label><br />
      <h2 style = { m.h2Ordinary } > Commands:</h2><br />
      <button style = { m.busyButton } onClick = { this.BTNclickedGetSelected }>Get Selected</button>
      <button style = { m.busyButton } onClick = { this.BTNclickedGetLast }    >Get Last used</button>
      </div>
    );
  }
}


// ============================================================================
// Interface in regular dom function space to get at this functionality
// ============================================================================
// A regular function to show a custom thing 16apr21
window.REACTpickLine = function innerSmMo6( whatShows, cb )
{
  // Pull out the named pieces for doing whatever visual is desired

  let daL1 = whatShows.L1, daL2 = whatShows.L2, daMo = whatShows.MO, 
      daCC = whatShows.howclose;

      // Apply, note callback the name of a function
  ReactDOM.render(  <SmallishModal6 L1 = { daL1 } L2 = { daL2 } FunCb = { cb } 
    Lcc = { daCC }/>, 
    document.getElementById( 'reactsandbox6' ) );
}
