import React, {Component} from 'react';
import ListFolder from './ListFolder.jsx';
import InputWidget from './inputWidget.jsx';
import CheckMatches from './CheckMatches.jsx';
//import CommentBox from './tutorial1.jsx';
//import {CommentList, CommentForm} from './tutorial2.jsx';
//import {Comment} from './tutorial4.jsx';
//import {CommentList} from './tutorial5.jsx';
//import {Comment, CommentList, CommentForm, CommentBox} from './tutorial6.jsx';


class App extends Component {

    constructor(){
        super();
        this.state = {
            inputText: ''
        }
    }

    handleUserInput(input){
        this.setState({inputText: input})
    }

    render() {

    return (
      <div>
         <h1>Search Bar: React Style</h1>
         <InputWidget input = {this.state.inputText} onUserInput = {this.handleUserInput.bind(this)} />
         
         <CheckMatches searchElem={this.state.inputText} data = {this.props.data}/>
      </div>
    );
  }

}
export default App;