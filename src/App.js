import { Component } from "react";
import ViewPortParams from "./components/ViewPortParams";
import StopWatch from "./components/StopWatch/stopw";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>
          {isVisible ? "unmount" : "mount"}
        </button>
        {isVisible && <StopWatch />}
      </>
    );
  }
}

export default App;
