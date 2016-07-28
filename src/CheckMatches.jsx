/**
 * Created by gabrielmatasariu on 7/26/2016.
 */
import React, {Component} from 'react';
import ListFolder from './ListFolder.jsx';

var matches = [];
class CheckMatches extends Component {

    constructor(){
        super();
        this.state = {forcedRerender: false};
    }

    rerenderTree(){
   
        this.setState({forcedRerender: !this.state.forcedRerender});

    }

    findMatches(data) {

        data.forEach(function (element) {

            if (element.name.indexOf(this.props.searchElem) != -1) {
                matches.push(element);
            }
            else if (element.children)
                this.findMatches(element.children);
        }.bind(this));
    }

    render() {
        matches = [];
        this.findMatches(this.props.data);

        return (
            <ListFolder rerenderTree={this.rerenderTree.bind(this)} data={matches} />
        );
    }

}

export default CheckMatches;