import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

function mapStatetoProps(state){
  return {
    books: state.books
  }
}
// Anything returner from this functions will end up as props on the BookList
// container
function mapDispatchToProps(dispatch){
  // whenever select book is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// propote Booklist from a component from a container - it needs to know
// about this is a new dispatch method, selectBook. Make it avaliable as a prop. 
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);
