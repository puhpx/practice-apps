import React from 'react';

class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onChange (e) {
    this.props.change(e.target.id, e.target.value)
  }

  render (props) {
    return ( (this.props.appState.f3) ? (<div>
      <h3> form3 </h3>
      Credit Card Number:
      <input id={'creditCard'}
             value={this.props.appState.creditCard}
             onChange={this.onChange.bind(this)}/>
      Expiration Date:
      <input id={'expiration'}
             value={this.props.appState.expiration}
             onChange={this.onChange.bind(this)}/>
      cvv:
      <input id={'cvv'}
             value={this.props.appState.cvv}
             onChange={this.onChange.bind(this)}/>
      billingZipcode:
      <input id={'billingZipcode'}
             value={this.props.appState.billingZipcode}
             onChange={this.onChange.bind(this)}/>
      <button onClick={this.props.summary.bind(this)}>Next3(summary)</button>
      <button onClick={this.props.F2.bind(this)}>Back3</button>
    </div>
    ) : ""
  )}
}

export default Form3;