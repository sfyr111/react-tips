import React from 'react'

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      val: 0
    }
  }

  componentDidMount() {
    // this.setState({count: this.state.count + 1})
    // console.log(this.state.count) // 0 state 更新被合并且执行异步
    //
    // this.setState({count: this.state.count + 1})
    // console.log(this.state.count) // 0 state 更新被合并且执行异步
    //
    // setTimeout(() => {
    //   console.log(this.state.count) // 1
    //
    //   this.setState({count: this.state.count + 1})
    //   console.log(this.state.count) // 2 state 更新同步化
    //
    //   this.setState({count: this.state.count + 1})
    //   console.log(this.state.count) // 3 state 更新同步化
    // })

    document.getElementById('button1').addEventListener('click', this.onClickHandler1);

    setTimeout(this.onTimeoutHandler, 1000);

    fetch('https://api.github.com/users').then(this.onAjaxCallback);
  }

  onClickHandler1 = () => {
    console.log('State before (onClickHandler1): ' + JSON.stringify(this.state));
    this.setState({
      count: this.state.count + 1
    });
    console.log('State after (onClickHandler1): ' + JSON.stringify(this.state));
  }

  onClickHandler2 = () => {
    console.log('State before (onClickHandler2): ' + JSON.stringify(this.state));
    this.setState({
      count: this.state.count + 2
    });
    console.log('State after (onClickHandler2): ' + JSON.stringify(this.state));
  }

  onTimeoutHandler = () => {
    console.log('State before (timeout): ' + JSON.stringify(this.state));
    this.setState({
      count: this.state.count + 3
    });
    console.log('State after (timeout): ' + JSON.stringify(this.state));
  }

  onAjaxCallback = (err, res) => {
    console.log('State before (AJAX call): ' + JSON.stringify(this.state));
    this.setState({
      count: this.state.count + 4
    });
    console.log('State after (AJAX call): ' + JSON.stringify(this.state));
  }

  render() {
    console.log('State in render: ' + JSON.stringify(this.state));

    return (
      <div>
        <button
          id="button1"
        >
          'addEventListener'
        </button>

        <button
          id="button2"
          onClick={this.onClickHandler2}>
          'props bind in jsx'
        </button>
      </div>
    );
  }
}

export default TestComponent
