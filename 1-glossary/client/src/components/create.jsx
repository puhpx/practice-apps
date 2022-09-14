import React from 'react';

class Create extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      term: '',
      definition: ''
    }
  }

  onChangeT (e) {
    console.log('--->', e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  onChangeD (e) {
    console.log('--->', e.target.value);
    this.setState({
      definition: e.target.value
    });
  }

  create(props){
    this.props.createTerm(this.state.term, this.state.definition)
  }

  render () {
    return (<div>
      <h4>Add a new glossary term</h4>
      Term:
      <input value={this.state.term}
      onChange={this.onChangeT.bind(this)}/>
      <span> &nbsp; &nbsp; </span>
      Definition:
      <input value={this.state.definition}
      onChange={this.onChangeD.bind(this)}/>
      <span> &nbsp; &nbsp; </span>
      <button onClick={this.create.bind(this)}>Add Term
      </button>
    </div>)
  }
}

export default Create;

