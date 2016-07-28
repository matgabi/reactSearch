/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React,{Component} from 'react';




class InputWidget extends Component{

    handleUserInput(){
        this.props.onUserInput(this.refs.Input.value);
    }

   render(){
       return(
          <div className = "widget">
              <input placeholder="Filter"
                     type="text"
                     ref = "Input"
                     value={this.props.input}
                     onChange={this.handleUserInput.bind(this)}
              />
              <p>
                   {
                      this.props.input.length ? 'Searching for:' + this.props.input : '' }
              </p>
          </div>

       );
   }

}

export default InputWidget;