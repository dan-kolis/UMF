// Two React create classes with variables from rest of world showing. RT ticker going too
// Mid Apr 2021

var someFact = "Pigs have wings";

// More states fun this one is about swine the animals ...
class MyFancyComponentPig extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date(), hog: 472 };
  }

  componentDidMount() {
    console.log( 'Pigs did mount called' );
  }

  componentWillUnmount() {
    console.log( "Unmounting the clock pigs" );
  }

  render() {
    console.log('Rendering Pig things...')
    return <div><h2>Something four legged</h2><br />Next line <b>{someFact}</b> Porky
    Soon more to grok<br /> at {this.state.date.toLocaleTimeString()}
    <br />{this.state.hog} Is another variable involving pigs bacon sometimes, etc on the farm squeelers
    And {this.state.hog} is a number for the Hogsin the crowd
    </div>
  }
}

/*  ReactDOM.render(
    <MyFancyComponentPig />,
    document.getElementById( 'coldpork' )
  );
*/


class Klock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, Ontario</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
<Klock />,
  document.getElementById( 'coldpork' )
);







