import React from "react";

class Countdown extends React.Component {
  state = {
    count: 10,
  };

  //chay khi render(), moi lan render chay thi chay ham setstate chu ko chay lai ca function
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        this.props.onTimeup();
        clearInterval(this.timer);
      }
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

const newCountDown = () => {
  return <div>New Count</div>;
};
export { newCountDown, Countdown };
