import React, { Component } from "react"
import PropTypes from "prop-types"
class InputNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerValue: 0
    }
  }
  static propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
  }
  static defaultValueProps = {
    value: 0,
    onChange: () => {}
  }
  get isControl() {
    return "value" in this.props
  }
  get value() {
    return this.isControl ? this.props.value : this.state.innerValue
  }
  changeNumber(val) {
    const reg = /^\+|-?[0-9][0-9]*$/
    if (!reg.test(val)) {
      return
    }
    let value = val
    if(this.props.min) {
        value = (value < this.props.min? this.props.min : value)
    }
    if(this.props.max) {
        value = (value > this.props.max? this.props.max : value)
    }
    if (!this.isControl) {
      this.setState({
        innerValue: parseInt(value)
      })
    }
    this.props.onChange(parseInt(value))
  }
  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.refs.input.value--
            this.changeNumber(this.refs.input.value)
          }}
        >
          -
        </button>
        <input
          value={this.value}
          ref="input"
          onChange={e => {
            let value = parseInt(e.target.value !== "" ? e.target.value : 0)
            this.changeNumber(value)
          }}
        ></input>
        <button
          onClick={e => {
            this.refs.input.value++
            this.changeNumber(this.refs.input.value)
          }}
        >
          +
        </button>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
}
export default InputNumber
