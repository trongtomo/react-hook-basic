import React, { useEffect, useState } from "react";

class Countdown extends React.Component {
  state = {
    count: 20,
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
  componentWillUnmount() {
    if (this.timer) {
      this.props.onTimeup();
      clearInterval(this.timer);
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
// class # hook, class 1 cau dk, hook phai kiem tra thay doi thuong xuyen ** bien count
const NewCountDown = (props) => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) {
      props.onTimeup();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>Tuan blowjob {count} time</div>;
};
export { NewCountDown, Countdown };
