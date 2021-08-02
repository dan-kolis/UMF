// React create classes with variables from rest of world showing.
// Mid Apr 2021, like 29 Apr for example

console.log( "REACT_ProgressShow invoked" );

// ============================================================================
// Make a smallish modal
// ============================================================================
class SmallishModal7 extends React.Component{
    constructor(  props  ) {
      super(  props  );
      this.doItCb; this.state = { frameKnt: 0 };
      this.state = { daTimestamp: new Date() };
      this.state = { opacityNow: m.OpacityStart };

      // Placement has a little flexibility
      let pickedPlace = m.placeIt1;
      if( this.props.WhereGo == 'top-right' ) pickedPlace = m.placeIt4;

      // Combine to use these are ready in 'real' memory. pick the ones to copy and use you like
      this.styleWholeThing = Object.assign( {}, m.placeHow1, m.boreBorder, pickedPlace, m.sizeIt4, m.paddingWhole );

      this.hdlCloseClick = this.hdlCloseClick.bind( this );
      this.tick = this.tick.bind( this );
    }

    // Ready to go
    componentDidMount() {
      let tInt = m.timeInterval;
      this.timerID = setInterval(
        () => this.tick(), tInt
      );
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

      // Usually change look but not always
      if( closeIdea != 'waitforclick' )
        {   this.setState( { opacityNow: this.state.opacityNow + m.OpacityIncr } ); }
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
                onClick = { this.hClick1 }>More</button>
                <h2 style = { m.h2Ordinary }>SLIDER</h2>
        <div style = { m.styleXclose }  onClick = { this.hdlCloseClick }>[x] Close</div><br />
        <div style = { m.styleTline }> Copying that file into a table</div><br />
        <br />
        { this.props.L2 }<br />
        </div>
    );
  }
}


// ============================================================================
// Interface in regular dom function space to get at this functionality
// ============================================================================
// A regular function to show a custom thing 16apr21
window.REACTprogressShow = function innerSmMo7( whatShows, aSpot, cb )
{
  // Argument is a scalar string

  // Pull out the named pieces for doing whatever visual is desired
  let daL1 = whatShows.L1, daL2 = whatShows.L2, daL3 = whatShows.L3, daMo = whatShows.MO,
      daCC = whatShows.howclose, daAS = aSpot;
  // Apply
  ReactDOM.render(  <SmallishModal7 L1 = { daL1 } L2 = { daL2 } L3 = { daL3 } 
                     Lcb = { cb } Lcc = { daCC } WhereGo = { daAS } />,
    document.getElementById( 'reactsandbox7' ) );
}
