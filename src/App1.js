import { render } from '@testing-library/react'
import React, { Component } from 'react'

class App extends Component {

  state = {
    result: 0
  }

  adder = event => {
    let num = parseInt(event.target.value)
    this.setState({ result: this.state.result + num })
  }

  reset = () => {
    this.setState({ result: 0})
  }

  render() {
    return (

      <>
        <h1>Result: {this.state.result}</h1>
        <button onClick={this.adder} value={1}>+1</button>
        <button onClick={this.adder} value={2}>+2</button>
        <button onClick={this.adder} value={3}>+3</button>
        <button onClick={this.adder} value={4}>+4</button>
        <button onClick={this.adder} value={5}>+5</button>
        <button onClick={this.reset}>Reset</button>
      </>
    )
  }
}

export default App
