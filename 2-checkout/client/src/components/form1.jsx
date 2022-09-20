import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange (e) {
    this.props.change(e.target.id, e.target.value)
  }

  render (props) {
    return ( (this.props.appState.f1) ? (<div>
      <h3> form1 </h3>
      Name:
      <input id={'name'}
             value={this.props.appState.name}
             onChange={this.onChange.bind(this)}/>
      Email:
      <input id={'email'}
             value={this.props.appState.email}
             onChange={this.onChange.bind(this)}/>
      Password:
      <input id={'password'}
             type="password"
             value={this.props.appState.password}
             onChange={this.onChange.bind(this)}/>
      <button onClick={this.props.F2.bind(this)}>Next1</button>
      <button onClick={this.props.showMain.bind(this)}>Back1</button>
    </div>
    ) : ""
  )}
}

export default Form1;