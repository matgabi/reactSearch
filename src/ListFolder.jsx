/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
let index = 0;
let ok = 0;
let matches = [];
class ListFolder extends Component {
    matches=[];
    render() {

        var display = this.props.display;
        var lis = [];
        this.props.data.forEach(function (element) {


                if (element.type == 'folder'){
                    lis.push(<Folder folderName={element.name} key={element.name+ (++index)}/>);
                    matches.push(element);
                }

                else {
                    lis.push(<File fileName={element.name} key={element.name + (++index)}/>);
                    matches.push(element);
                }
            if (element.children)
                lis.push(<ListFolder data={element.children}
                                     searchElem={this.props.searchElem}
                                     display={display}
                                     key={'ul--'+ (++index)}/>);

        }.bind(this));

            return (
                <ul className='folder-container'>
                    {lis}
                </ul>
            )

    }
}

export default ListFolder;
