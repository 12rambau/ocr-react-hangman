import React, { Component } from 'react'
import './App.css';
import {DICO} from './Dico'
import Letters, {TEST_LETTERS} from './Letter'
import Letter from './Letter';


class App extends Component {

  state = {
    word: this.selectWord(),
    letters: TEST_LETTERS,
    nbTest: 0,
    testedLettes: []
  }

  selectWord(){
    return DICO[Math.floor(Math.random()*DICO.length)]
  }

  render() {
    const { word, letters, nbTest, testedLettes } = this.state
    return (
      <div className="pendue">
        <div className="word">
        {word}
        </div>
        <div className="hidden_word">
          {letters.map(({value, feedback}, index) => (
            <Letter
              value={value}
              feedback={feedback}
              key={index}
            />
          ))}
        </div>

      </div>
    )
  }
}

export default App;
