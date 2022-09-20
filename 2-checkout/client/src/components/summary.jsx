import React from 'react';


class Summary extends React.Component {
  constructor(props) {
    super(props)
  }

  purchase (info) {
    this.props.purchase(info);
  }

  render (props) {
    console.log(this.props)
    return ( (this.props.appState.summary) ? (<div>
      <h3> Summary Page </h3>
      <div>
        {Object.keys(this.props.appState).map((key, index) => {
          { if (key !== 'f1' && key !== 'f2' && key !== 'f3' && key !== 'summary') {
            return (
              <li key={index}>
                {key}: {this.props.appState[key]}
              </li>
            )} else {
              return ""
            }
          }
        })}
      </div>
      <button onClick={this.purchase.bind(this)}>Purchase</button>
      <button onClick={this.props.F3.bind(this)}>Back</button>
    </div>
    ) : ""
  )}
}

export default Summary;