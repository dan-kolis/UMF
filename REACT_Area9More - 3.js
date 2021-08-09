// React create classes with variables from rest of world showing.
// Mid Q4 2021, like Sep 2021 for example for this one added

console.log( "REACT_Area9More invoked" );

// ============================================================================
// Make a smallish modal
// ============================================================================
class SmallishModal8 extends React.Component
{
  constructor(  props  ) 
  {
    super(  props  );
    this.doItCb; this.localExeForDone;
    this.state = { frameknt: 0, opacityNow: m.OpacityStart, myChangeClose: 'tbd' };
   
    // Can talk to rest of memory, reset it
    REACT_IO.Area9More = {}; REACT_IO.Area9More = {};

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

    console.log('booga hdlCloseClick '+ this.doItCb);
    // Just ignore this instance of the object if its not really there
    let toGo;  toGo = this.doItCb;
    if( toGo != undefined )   toGo();
    
    console.log('booga running something ' + this.localExeForDone );
    
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
    REACT_IO.Area9More.picked = 'clickseeurl';
    REACT_IO.Area9More.forHumans = 'Click to get at via URL'; 
    REACT_IO.Area9More.lineHint = 'Hops to the WWW under your click';

    this.setState( { myChangeClose: 'isayclose' } );
    this.localExeForDone = popUpHeadsUp;
  }

  clickTan(){ this.doMainIdea( 'clicktonumber', 'Click to number line items', 'Your clicks renumber fields' ) };
  clickAne(){ this.doMainIdea( 'addnoteseasy', 'Click to add notes to things', 'Add notes to line items' ) };
  clickTtd(){ this.doMainIdea( 'clickgone', 'Click to delete line items', 'Remove line items with a click' ) };
  clickTte(){ this.doMainIdea( 'clicktoexplain', 'Click to get explanations', 'Click for lookups' ) };
  clickRes(){ this.doMainIdea( ')justclose' ) };

  // Some idea is clicked, deligate what to do, shut down modal, start up hint one too
  doMainIdea( littleCode, sayMsg, helperIdea )
  {
    console.log('booga dmi '+ littleCode )
    if( littleCode == ')justclose' ) { this.hdlCloseClick(); return; }

    console.log('booga cmi continuing');
    REACT_IO.Area9More.picked = littleCode;
    REACT_IO.Area9More.forHumans = sayMsg; 
    REACT_IO.Area9More.lineHint = helperIdea; 
    
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
      <button onClick={this.clickHtu} className="dingledorfer">Rats and mice</button>
      <button onClick={this.clickTan} className="dingledorfer">Toast and kittens</button>
      <button onClick={this.clickAne} className="dingledorfer">Hands and feet</button>
      <button onClick={this.clickTtd} className="dingledorfer">Greasy tacos</button>
      <button onClick={this.clickTte} className="dingledorfer">Fun at work</button>
      <button onClick={this.clickRes} className="dingledorfer">RESET SOMETHING</button>
      </div>
    );
  }
}


// ============================================================================
// Interface in regular dom function space to get at this functionality
// ============================================================================
// A regular function to show a custom thing 18apr21
window.REACTArea9More = function innerSmMo3( whatShows, aSpot, cb )
{
  // Argument is a scalar string

  // Pull out the named pieces for doing whatever visual is desired
  let daL1 = whatShows.L1, daB1 = whatShows.B1, daB2 = whatShows.B2, daMo = whatShows.MO, 
      daCC = whatShows.howclose;
  // Apply
  ReactDOM.render(  <SmallishModal8 L1 = { daL1 } B1 = { daB1 } B2 = { daB2 } Lcb = { cb } Lcc = { daCC }/>, 
    document.getElementById( 'reactsandbox3' ) );
}
