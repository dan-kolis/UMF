// React create classes with variables from rest of world showing.
// Mid Apr 2021, like 29 Apr for example

console.log( "REACT_OneLiner invoked" );

// ============================================================================
// Make a smallish modal
// ============================================================================
class SmallishModal1 extends React.Component{
    constructor(  props  ) {
      super(  props  );
      this.doItCb; 
      this.state = { frameKnt: 0, daTimestamp: new Date(), opacityNow: m.OpacityStart,
      lagKd: 'n'
      };

      // Combine to use these are ready in 'real' memory. pick the ones to copy and use you like
      this.styleWholeThing = Object.assign( {}, m.placeHow1, m.niceBorder, m.placeIt1, m.sizeIt1, m.paddingWhole );

      this.hdlCloseClick = this.hdlCloseClick.bind( this );
      this.tick = this.tick.bind( this );
    }

    // Ready to go
    componentDidMount() {
      let tInt = m.timeInterval;
      if( this.props.Dis == 'golong' ) { this.state. lagKd = 'y' }
      this.timerID = setInterval( () => this.tick(), tInt );
    }
  
    // Done
    componentWillUnmount() {
      clearInterval( this.timerID );
    }
  
    // Each time event
    tick() {
      // Possible visual effect(s)

      // How to stop showing
      let closeIdea; closeIdea = this.props.Lcc;

      // Human feel settings
      let lowThresh = m.OpacityStop;

      // Ignore runout of time sometimes
      if( closeIdea == 'waitforclick ') { lowThresh = -999; }
      { if( this.state.opacityNow < lowThresh )   { this.hdlCloseClick(); return; } }

      // Touch things, insures shows
      this.setState( { daTimestamp: new Date() } );
      this.setState( { frameKnt: this.state.frameKnt + 1 } );

      // For a peek
      let hDebug = false;
      if( hDebug )
      {
        console.log( 'rol55 ' + this.props.Dis );
        console.log( 'rol66 ' + this.state.frameKnt );
        console.log( 'rol77 ' + this.state.lagKd ); }

      // Usually change look but not always
      let kDown = closeIdea != 'waitforclick';
      if( kDown )
      { if( ( this.state.lagKd == 'n' ) || ( this.state.frameKnt > m.holdOff ) )
        {   this.setState( { opacityNow: this.state.opacityNow + m.OpacityIncr } ); }
      }  
    }
  
    // Close button in me
    hdlCloseClick()
    {
      // Just delete this instance of the object
      let toGo;  toGo = this.doItCb;
      if( toGo != undefined )   toGo();
   
      // Ahh fancier. If quits working above is there
      ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode( this ).parentNode );
    }

    // Look changer
    variableStyleLook( itChanges )
    {
      let uzL = 'rgba( 75, 76, 75, ' + itChanges.toString().substring( 0,4 ) + ")";
      let ff = { backgroundColor: uzL };
      return ff;
    }

    // Showtime, bigtime 
    render(){ 
      // Copy callback to an ordinary easy to get at variable
      let uz; uz = this.props.Lcb; this.doItCb = uz;                // If need be bust out lines for debug
      
      // Make style changeable somewhat, usually artsy look effect(s)
      let lookNow = this.variableStyleLook( this.state.opacityNow );
      let styleNow = Object.assign( {}, this.styleWholeThing, lookNow );
     
      return (  
        <div  style = { styleNow }>
        <button style = { m.styleMoreBtn } 
                onClick = { this.handleClick1 }>More</button>
        <div style = { m.styleXclose }  onClick = { this.hdlCloseClick }>[x] Close</div><br />
        <div style = { m.styleTline }>{ this.props.L1 }</div><br />
        { this.props.L2 }<br />
        { this.props.L3 }<br />
        { this.props.Lcc }<br />
        { this.props.Dis }
        </div>
    );
  }
}


// ============================================================================
// Interface in regular dom function space to get at this functionality
// ============================================================================
// A regular function to show a custom thing 16apr21
window.REACToneLiner = function innerSmMo1( whatShows, aSpot, cb )
{
  // Argument is a scalar string

  // Pull out the named pieces for doing whatever visual is desired
  let daL1 = whatShows.L1, daL2 = whatShows.L2, daL3 = whatShows.L3, daMo = whatShows.MO, 
      daCC = whatShows.howclose, disL = whatShows.displayLength;

  // Apply
  ReactDOM.render(  <SmallishModal1 L1 = { daL1 } L2 = { daL2 } L3 = { daL3 } Dis = { disL } Lcb = { cb } Lcc = { daCC }/>, 
    document.getElementById( 'reactsandbox1' ) );
}
