// React create classes with variables from rest of world showing.
// Mid Apr 2021, like 28 Apr for example

console.log( "REACT_TableOptions invoked" );

// ============================================================================
// Make a smallish modal
// ============================================================================
class SmallishModal3 extends React.Component
{
  constructor(  props  ) 
  {
    super(  props  );
    this.doItCb; this.localExeForDone;
    this.state = { frameknt: 0, opacityNow: m.OpacityStart, myChangeClose: 'tbd' };
   
    // Can talk to rest of memory, reset it
    REACT_IO.tableoptions = {}; REACT_IO.tableoptions = {};

    // Combine to use these are ready in 'real' memory. pick the ones to copy and use you like
    this.placeNow = m.placeIt3;
    this.styleWholeThing = Object.assign( {}, m.placeHow1, m.pickBorder, this.placeNow, m.sizeIt3, m.paddingWhole );
    this.hdlCloseClick = this.hdlCloseClick.bind( this );
    this.tick = this.tick.bind( this );
    this.clickHtu = this.clickHtu.bind( this );
    this.clickTan = this.clickTan.bind( this );
    this.clickAne = this.clickAne.bind( this );
    this.clickTtd = this.clickTtd.bind( this );
    this.clickTte = this.clickTte.bind( this );
    this.clickRes = this.clickRes.bind( this );
  }

  // Ready to go
  componentDidMount() {
    let tInt = m.timeInterval;
    this.timerID = setInterval(
      () => this.tick(), tInt             // A timer named tick is going
    );
  }
  
  // Done
  componentWillUnmount() {
    clearInterval( this.timerID );
  }

  // Each time event
  tick() 
  {
    // Possible visual effect(s)

    // How to stop showing, the self fade idea is done here too
    let closeIdea; closeIdea = this.props.Lcc;
    if( this.state.myChangeClose != 'tbd' ) closeIdea = this.state.myChangeClose;

    // Human feel settings
    let lowThresh = m.OpacityStop;

    // Ignore runout of time sometimes
    if( closeIdea == 'waitforclick ') { lowThresh = -999; }
    { if( this.state.opacityNow < lowThresh )   { this.hdlCloseClick(); return; } }

    // Touch things, insures shows
    this.setState( { frameKnt: this.state.frameKnt + 1 } );

    // Usually change look ( transparency really ) but not always
    let countdown = true;
    if( closeIdea == 'waitforclick' ) countdown = false;
    if( closeIdea == 'selfdecide' )   countdown = false;
    if( closeIdea == 'isayclose' )    countdown = true;
    if( countdown ) { this.setState( { opacityNow: this.state.opacityNow + m.OpacityIncr } ); }
  }
  
  // Close button in me
  hdlCloseClick()
  {
    // Just ignore this instance of the object if its not really there
    let toGo;  toGo = this.doItCb;
    if( toGo != undefined )   toGo();
   
    // Sometimes as we leave there is an exe to call
    if( this.localExeForDone != undefined )  this.localExeForDone();

    // Ahh fancier. If quits working lookup about it, messy story maybe
    ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode( this ).parentNode );
  }

  // Look changer
  variableStyleLook( itChanges )
  {
    let uzL = 'rgba( 75, 76, 75, ' + itChanges.toString().substring( 0,4 ) + ")";
    let ff = { backgroundColor: uzL };
    return ff;
  }

  clickHtu(){
    REACT_IO.tableoptions.picked = 'clickseeurl';
    REACT_IO.tableoptions.forHumans = 'Click to get at via URL'; 
    REACT_IO.tableoptions.lineHint = 'Hops to the WWW under your click';

    this.setState( { myChangeClose: 'isayclose' } );
    this.localExeForDone = popUpHeadsUp;
  }

  clickTan(){ this.doMainIdea( 'clicktonumber', 'Click to number line items', 'Your clicks renumber fields' ) };
  clickAne(){ this.doMainIdea( 'addnoteseasy', 'Click to add notes to things', 'Add notes to line items' ) };
  clickTtd(){ this.doMainIdea( 'clickgone', 'Click to delete line items', 'Remove line items with a click' ) };
  clickTte(){ this.doMainIdea( 'clicktoexplain', 'Click to get explanations', 'Click for lookups' ) };
  clickRes(){ this.doMainIdea( 'softreset', 'UI Reset', 'A mild reset of the User interface' ) };

  // Some idea is clicked, deligate what to do, shut down modal, start up hint one too
  doMainIdea( littleCode, sayMsg, helperIdea )
  {
    REACT_IO.tableoptions.picked = littleCode;
    REACT_IO.tableoptions.forHumans = sayMsg; 
    REACT_IO.tableoptions.lineHint = helperIdea; 
    
    this.setState( { myChangeClose: 'isayclose' } );
    this.localExeForDone = popUpHeadsUp; 
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
      <button onClick={this.clickHtu} className="dingledorfer">Hop to URL</button>
      <button onClick={this.clickTan} className="dingledorfer">Touch and number</button>
      <button onClick={this.clickAne} className="dingledorfer">Add notes easily</button>
      <button onClick={this.clickTtd} className="dingledorfer">Touch to delete</button>
      <button onClick={this.clickTte} className="dingledorfer">Touch to explain</button>
      <button onClick={this.clickRes} className="dingledorfer">RESET UI</button>
      </div>
    );
  }
}


// ============================================================================
// Interface in regular dom function space to get at this functionality
// ============================================================================
// A regular function to show a custom thing 18apr21
window.REACTtableOptions = function innerSmMo3( whatShows, aSpot, cb )
{
  // Argument is a scalar string

  // Pull out the named pieces for doing whatever visual is desired
  let daL1 = whatShows.L1, daB1 = whatShows.B1, daB2 = whatShows.B2, daMo = whatShows.MO, 
      daCC = whatShows.howclose;
  // Apply
  ReactDOM.render(  <SmallishModal3 L1 = { daL1 } B1 = { daB1 } B2 = { daB2 } Lcb = { cb } Lcc = { daCC }/>, 
    document.getElementById( 'reactsandbox3' ) );
}
