import React, {Component} from 'react';
//import ListFolder from './ListFolder.jsx';
import InputWidget from './inputWidget.jsx';
import CheckMatches from './CheckMatches.jsx';

import $ from 'jquery';

//import CommentBox from './tutorial1.jsx';
//import {CommentList, CommentForm} from './tutorial2.jsx';
//import {Comment} from './tutorial4.jsx';
//import {CommentList} from './tutorial5.jsx';
//import {Comment, CommentList, CommentForm, CommentBox} from './tutorial6.jsx';


class App extends Component {

    constructor(){
        super();
        this.state = {
            inputText: '',
            data: []
        }
    }

    componentDidMount(){
        debugger;
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,

            success: function(data){
                this.setState({data: data});
            }.bind(this),

            error: function (xhr,status,err) {
                console.log(err.toString(),status,xhr);
            }.bind(this)
        });
    }

    handleUserInput(input){
        this.setState({inputText: input})
    }

    render() {

    return (
      <div>
         <h1>Search Bar: React Style</h1>
         <InputWidget input = {this.state.inputText} onUserInput = {this.handleUserInput.bind(this)} />
         <div className="display">
             <ul>
                 <CheckMatches searchElem={this.state.inputText} data = {this.state.data}/>
             </ul>
         </div>
      </div>
    );
  }

}
export default App;