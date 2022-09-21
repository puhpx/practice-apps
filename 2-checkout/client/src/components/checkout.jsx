import React from 'react';
import Form1 from './form1.jsx';
import Form2 from './form2.jsx';
import Form3 from './form3.jsx';
import Summary from './summary.jsx';
import $ from 'jquery';

class Checkout extends React.Component {
  constructor (props) {
    super (props);
    const initialState = {
      f1: false,
      f2: false,
      f3: false,
      summary: false,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipcode: ''
    }
    this.state = initialState;
  }

  showMain () {
    this.setState ({
      f1: false,
      f2: false,
      f3: false,
      summary: false
    });
  }

  showForm1 () {
    this.setState ({
      f1: true,
      f2: false,
      f3: false,
      summary: false
    });
  }

  showForm2 () {
    this.setState ({
      f1: false,
      f2: true,
      f3: false,
      summary: false
    });
  }

  showForm3 () {
    this.setState ({
      f1: false,
      f2: false,
      f3: true,
      summary: false
    });
  }

  summary () {
    this.setState ({
      f1: false,
      f2: false,
      f3: false,
      summary: true
    });
  }

  purchase() {
    $.ajax({
      method: "POST",
      url: '/',
      data: JSON.stringify(this.state),
      success: (data) => {
        alert(data),
        this.setState (this.initialState)
        // console.log('State after POST--->', this.state)
      },
      error: (err) => {
        alert(err.responseText)
      },
      contentType: "application/json"
    })
  }

  change (k, v) {
    this.setState ({
      [k]: v
    })
  }

  render () {
    return (<div>
      <button onClick={this.showForm1.bind(this)}>Checkout</button>
      <div>
        <Form1 appState={this.state}
               showMain={this.showMain.bind(this)}
               F2={this.showForm2.bind(this)}
               change={this.change.bind(this)}>
        </Form1>
        <Form2 appState={this.state}
               F1={this.showForm1.bind(this)}
               F3={this.showForm3.bind(this)}
               change={this.change.bind(this)}>
        </Form2>
        <Form3 appState={this.state}
               F2={this.showForm2.bind(this)}
               summary={this.summary.bind(this)}
               change={this.change.bind(this)}>
        </Form3>
        <Summary appState={this.state}
               F3={this.showForm3.bind(this)}
               purchase={this.purchase.bind(this)}>
        </Summary>
      </div>
    </div>)
  }
}

export default Checkout;