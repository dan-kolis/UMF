// React create classes with variables from rest of world showing.
// Mid Apr 2021, like 17 Apr for example

console.log( "REACT_TableOptions invoked" );

// ============================================================================
// Make a smallish modal
// ============================================================================
class SmallishModal3 extends React.Component{
    constructor(  props  ) {
      super(  props  );
      this.doItCb; this.state = { frameKnt: 0 };
      this.state = { daTimestamp: new Date() };
      this.state = { opacityNow: m.OpacityStart };

      // Combine to use these are ready in 'real' memory. pick the ones to copy and use you like
      this.placeNow = m.placeIt3;
      this.styleWholeThing = Object.assign( {}, m.placeHow1, m.pickBorder, this.placeNow, m.sizeIt3, m.paddingWhole );

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

      // Usually cchange look but not always
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
    z0render(){ 
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
        <button className="btn btn-default">{this.props.B1}</button><br />
        <button className="btn btn-default">{this.props.B2}</button><br />
        thing a<br />
        thing b<br />
        </div>
    );
  }

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
      <button className="dingledorfer">Hop to URL</button>
      <button className="dingledorfer">Touch and number</button>
      <button className="dingledorfer">Add notes easily</button>
      <button className="dingledorfer">Touch to delete</button>
      <button className="dingledorfer">Touch to explain</button>
      </div>
    );
  }



}


// ============================================================================
// Interface in regular dom function space to get at this functionality
// ============================================================================
// A regular function to show a custom thing 18apr21
window.REACTsmallishModal_3 = function innerSmMo3( whatShows, aSpot, cb )
{
  // Argument is a scalar string

  // Pull out the named pieces for doing whatever visual is desired
  let daL1 = whatShows.L1, daB1 = whatShows.B1, daB2 = whatShows.B2, daMo = whatShows.MO, 
      daCC = whatShows.howclose;
  // Apply
  ReactDOM.render(  <SmallishModal3 L1 = { daL1 } B1 = { daB1 } B2 = { daB2 } Lcb = { cb } Lcc = { daCC }/>, 
    document.getElementById( 'reactsandbox3' ) );
}
