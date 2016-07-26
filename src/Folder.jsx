/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React, {Component} from 'react';

class Folder extends Component{
    render(){
        return(
            <li className="folder-item">{this.props.folderName}</li>
        );
    }
}

export default Folder;