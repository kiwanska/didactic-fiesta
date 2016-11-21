import React, { Component } from 'react';
import Random from './Random';
import './style.css';

class App extends Component {
 
  state = {
    scrollY: 0,
    background: `#${Math.random().toString(16).substr(-6)}`,
    random: Math.floor(Math.random()*10),
    quotes: [
      `Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.`,
      "It's a waste of time to think that if you colored a painting red what might have happened if you painted it black.",
      "There's a long life ahead of you and it's going to be beautiful, as long as you keep loving and hugging each other.",
      "A dream you dream alone is only a dream. A dream you dream together is reality.",
      "Marriage is a gamble, let's be honest.",
      "I thought art was a verb, rather than a noun.",
      "Words are power. And a book is full of words. Be careful what power you get from it. But know that you do.",
      "Dancing is a very healthy thing to do for our body.",
      "When you go to war, both sides lose totally.",
      "When you are totally depressed, you should try giggling. Just make yourself laugh. Force yourself to laugh."
    ]
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
    document.querySelector('body').style.backgroundColor = this.state.background;
  }

  onScroll = (event) => this.setState({
    scrollY: window.scrollY
  });
  
  render() {

    const { quotes, random } = this.state;
    const text = quotes[random];

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