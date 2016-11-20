import React, { Component } from 'react';
import Random from './Random';
import './style.css';

class App extends Component {
 
  state = {
    scrollY: 0,
    random: Math.floor(Math.random()*2),
    quotes: [
      "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.",
      "It's a waste of time to think that if you colored a painting red what might have happened if you painted it black."
    ]
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
  }
 
  onScroll = (event) => this.setState({
    scrollY: window.scrollY
  });
  
  render() {

    const text = this.state.quotes[this.state.random];

    return (
            <Random 
              text={text} 
              scrollY={this.state.scrollY} 
              finish={5000}
            />
    )
  }
}

export default App;