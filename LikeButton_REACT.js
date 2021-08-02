'use strict';

const e = React.createElement;

class LikeButton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this a lot on 08 Mar 2021. a KMart revolution you know';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#putHere');
ReactDOM.render(e(LikeButton1), domContainer);