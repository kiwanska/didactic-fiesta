import React, { Component } from 'react';

class Letter extends Component {
  
  state = {
    translate: {
      x: this.getRandom(),
      y: this.getRandom()
    }
  }

  getRandom() {
    return Math.floor(Math.random()*100)-50;
  }

  getStyle() { 
    const { x, y } = this.state.translate;
    const { delta } = this.props;
    return {
      transform: `translate(${x * delta}vw, ${y * delta}vh)`
    }
  }

  render(){
    const { children } = this.props;
    return <span style={this.getStyle()}>{children}</span>
  }
}

export default Letter;