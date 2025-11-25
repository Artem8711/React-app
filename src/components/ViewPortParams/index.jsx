/* import { Component } from "react";

class ViewPortParams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }
  resizeHandler = () => {
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        Widht:{x},Height{y}
      </div>
    );
  }
}

export default ViewPortParams; */
