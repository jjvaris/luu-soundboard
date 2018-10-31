import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>LUUKKU SOUND BOARD</h1>
        </header>
        <SoundButton sound="1.mp3" bgImg="2.png" />
        <SoundButton sound="1.mp3" bgColor="#001f3f">
          HUOMEN VAI TÄNÄÄ
        </SoundButton>
        <SoundButton sound="1.mp3" bgColor="#2ECC40">
          CAMA
        </SoundButton>
        <SoundButton sound="1.mp3" bgImg="1.png" />
        <SoundButton sound="1.mp3" bgColor="#FFDC00">
          KYLLÄ
        </SoundButton>
        <SoundButton sound="1.mp3" bgColor="#F012BE">
          SAATANA
        </SoundButton>
        <SoundButton sound="1.mp3" bgImg="1.png" />
        <SoundButton sound="1.mp3" bgColor="#39CCCC">
          EI VOI OLLA TOTTA
        </SoundButton>
        <SoundButton sound="1.mp3" bgImg="1.png" />
        <SoundButton sound="1.mp3" bgColor="#3D9970">
          PERKELE
        </SoundButton>
        <SoundButton sound="1.mp3" bgColor="#FF4136">
          ON SE SANONKO
        </SoundButton>
        <SoundButton sound="1.mp3" bgImg="1.png" />
        <SoundButton sound="1.mp3" bgColor="#FF851B">
          VOI JUMALAUTA
        </SoundButton>
        <SoundButton sound="1.mp3" bgColor="#B10DC9">
          VOI...
        </SoundButton>
        <SoundButton sound="1.mp3" bgImg="1.png" />
        <SoundButton sound="1.mp3" bgColor="#85144b">
          ELÄ PERKELE!
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
