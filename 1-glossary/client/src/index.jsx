import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Create from './components/create.jsx';
import Terms from './components/terms.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      terms: [
        {_id: '1', term: 'test1', definition: 'test1'},
        {_id: '2', term: 'test2', definition: 'test2'}
      ]
    }
  }

  create(term, definition) {
    console.log(`new glossary "${term}: ${definition}" is created`)
    $.ajax({
      type: "POST",
      url: "/glossary",
      data: JSON.stringify({term: term, definition: definition}),
      success: (data) => {
        this.setState ({
          terms: data
        })
      },
      error: (err) => {
        console.log('POST Request err')
      },
      contentType: "application/json"
    })
  }

  search(term) {
    console.log(`Term "${term}" was searched`)
    $.ajax({
      type: "POST",
      url: "/search",
      data: JSON.stringify({term: term}),
      success: (data) => {
        this.setState ({
          terms: data
        })
      },
      error: (err) => {
        console.log('Search POST Request err')
      },
      contentType: "application/json"
    })
  }

  delete(term, definition) {
    console.log('delete called')
    $.ajax({
      type: "DELETE",
      url: "/glossary",
      data: JSON.stringify({term: term, definition: definition}),
      success: (data) => {
        this.setState ({
          terms: data
        })
      },
      error: (err) => {
        console.log('DELETE Request err')
      },
      contentType: "application/json"
    })
  }

  render () {
    return (<div>
      <h1> Glossary </h1>
      <Create createTerm={this.create.bind(this)}
              searchTerm={this.search.bind(this)}/>
      <Terms terms={this.state.terms}
             deleteTerm={this.delete.bind(this)}/>

    </div>)
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

