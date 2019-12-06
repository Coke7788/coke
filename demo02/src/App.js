import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./App.css"
function confirm(text) {
  return new Promise(function(resolve, reject) {
    ReactDOM.render(
      <>
        <div className="model">
          <div>
            <div>{text}</div>
            <div>
              <button
                onClick={e => {
                  resolve(true)
                }}
              >确定</button>
              <button onClick={e => {
                  reject(false)
                }}>取消</button>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("confirm")
    )
  }).then(res => {
    ReactDOM.render('',document.getElementById("confirm"))
    return res
  }).catch(res => {
    ReactDOM.render('',document.getElementById("confirm"))
    return res
  })
}
class App extends Component {
  render() {
    return <div>hello word </div>
  }
  async componentDidMount() {
    let res = await confirm(1111)
    if (res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
}

export default App
