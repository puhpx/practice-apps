import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/create.jsx';
import Terms from './components/terms.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }


  render () {
    return (<div>
      <h1> Glossary </h1>
      <Create   />
      <Terms    />

    </div>)
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

