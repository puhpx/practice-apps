import React from 'react';

class Terms extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }

  render () {
    console.log(this.props)
    return (<div>
    {this.props.terms.map((term) => {
      return (<div  key={term._id}>
        {term.term}:
        <span> &nbsp; </span>
        {term.definition}
      </div>)
    })}


    </div>)
  }
}

export default Terms;