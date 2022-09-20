import React from 'react';

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onChange (e) {
    this.props.change(e.target.id, e.target.value)
  }

  render (props) {
    return ( (this.props.appState.f2) ? (<div>
      <h3> form2 </h3>
      Address Line 1:
      <input id={'address1'}
             value={this.props.appState.address1}
             onChange={this.onChange.bind(this)}/>
      Address Line 2:
      <input id={'address2'}
             value={this.props.appState.address2}
             onChange={this.onChange.bind(this)}/>
      City:
      <input id={'city'}
             value={this.props.appState.city}
             onChange={this.onChange.bind(this)}/>
      State:
      <input id={'state'}
             value={this.props.appState.state}
             onChange={this.onChange.bind(this)}/>
      Zipcode:
      <input id={'zipcode'}
             value={this.props.appState.zipcode}
             onChange={this.onChange.bind(this)}/>
      Phone Number:
      <input id={'phone'}
             value={this.props.appState.phone}
             onChange={this.onChange.bind(this)}/>
      <button onClick={this.props.F3.bind(this)}>Next2</button>
      <button onClick={this.props.F1.bind(this)}>Back2</button>
    </div>
    ) : ""
  )}
}

export default Form2;