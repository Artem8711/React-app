import { Component } from "react";
import defaltImg from "./defaultImg.jpeg";
import styles from "./AnimalSlider.module.css";

class AnimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: defaltImg,
      caption: "Default Image",
    };
    this.id = null;
  }

  loadImg = () => {
    console.log("load");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => this.setState({ imgSrc: data.message }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // this.id = setInterval(this.loadImg, 3000);
    this.loadImg();
  }
  componentDidUpdate() {
    this.id = setTimeout(this.loadImg, 3000);
  }

  componentWillUnmount() {
    // clearInterval(this.id);
    clearTimeout(this.id);
  }

  render() {
    const { imgSrc, caption } = this.state;
    return (
      <figure className={styles.animalContainer}>
        <img src={imgSrc} alt="cat" />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}

export default AnimalSlider;
