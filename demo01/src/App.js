import React, { Component } from "react"
import InputNumber from './InputNumber'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
    this.value = 0
  }
  render() {
    return <div>
      <div>受控InputNumber组件：</div>
      <InputNumber value={this.state.value} min={-10}  max={10} onChange={value=> {
          this.setState({
            value
          })
      }}></InputNumber>
      <div>非受控InputNumber组件：</div>
      <InputNumber defaultValue={this.value} onChange={e=> {
        // this.value = e.target.value
      }}></InputNumber>
    </div>
  }
}

export default App
