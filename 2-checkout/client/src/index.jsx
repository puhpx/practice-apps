import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./components/checkout.jsx";

class App extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (<div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <Checkout />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
