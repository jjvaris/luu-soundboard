import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>LUUKKU SOUNDBOARD</h1>
        </header>
        <SoundButton sound="1.mp3" bgImg="2.png">
          MITÄ HELV...
        </SoundButton>
        <SoundButton sound="2.mp3" bgColor="#001f3f">
          HUOMEN VAI TÄNÄÄ
        </SoundButton>
        <SoundButton sound="3.mp3" bgColor="#2ECC40">
          VOI PERRRHANA
        </SoundButton>
        <SoundButton sound="4.mp3" bgColor="#FFDC00">
          KALJAA
        </SoundButton>
        <SoundButton sound="5.mp3" bgImg="5.png">
          ASIA KUNNOSSA
        </SoundButton>
        <SoundButton sound="6.mp3" bgColor="#FF00FF">
          JUMALISTE
        </SoundButton>
        <SoundButton sound="7.mp3" bgImg="7.jpg">
          SONNI
        </SoundButton>
        <SoundButton sound="3.mp3" bgColor="#2ECC40">
          VOI PERRRHANA
        </SoundButton>
        <SoundButton sound="4.mp3" bgColor="#FFDC00">
          KALJAA
        </SoundButton>
        <SoundButton sound="5.mp3" bgImg="5.png">
          ASIA KUNNOSSA
        </SoundButton>
        <SoundButton sound="1.mp3" bgImg="2.png">
          MITÄ HELV...
        </SoundButton>
        <SoundButton sound="8.mp3" bgColor="#ffcc5c">
          RAI RAI
        </SoundButton>
        <SoundButton sound="3.mp3" bgColor="#2ECC40">
          VOI PERRRHANA
        </SoundButton>
        <SoundButton sound="7.mp3" bgImg="7.jpg">
          SONNI
        </SoundButton>
        <SoundButton sound="5.mp3" bgImg="5.png">
          ASIA KUNNOSSA
        </SoundButton>
        <SoundButton sound="6.mp3" bgColor="#FF00FF">
          JUMALISTE
        </SoundButton>
      </React.Fragment>
    );
  }
}

function SoundButton(props) {
  const audio = new Audio(`assets/${props.sound}`);

  function handleClick() {
    audio.play();
  }

  const styles = {
    backgroundImage: props.bgImg ? `url(assets/${props.bgImg})` : null,
    backgroundColor: props.bgColor ? props.bgColor : null
  };

  return (
    <button style={styles} type="button" onClick={handleClick}>
      {props.children}
    </button>
  );
}

export default App;
