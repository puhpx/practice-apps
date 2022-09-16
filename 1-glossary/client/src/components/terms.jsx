import React from 'react';

class Terms extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
    this.delete = this.delete.bind(this)
  }

  delete (term, definition) {
    this.props.deleteTerm(term, definition);
  }

  render () {
    console.log(this.props)
    return (<div>
    {this.props.terms.map((term) => {
      return (<div  key={term._id}>
        <span style={{fontWeight: 'bold'}} >
        {term.term}:  </span>
        <span> &nbsp; </span>
        {term.definition}
        <span> &nbsp; </span>
        <button onClick={this.delete.bind(this, term.term, term.definition)}>
        Delete </button>
        <div>
          <span> &nbsp; </span>
        </div>
      </div>)
    })}
    </div>)
  }
}

export default Terms;