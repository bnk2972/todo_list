import React, {Component} from 'react'

export default class TodoList extends Component{

    render(){
        return(
            <li style={{ textDecoration: this.props.checked ? 'line-through': 'none',  border: '1px solid white', padding: '10px', backgroundColor: 'rgb(251, 234, 118)' }}>
                <input type="checkbox" checked={this.props.checked ? 'checked': ''} onClick={()=>this.props.finished(this.props.num)} />{this.props.name}&nbsp;
                <button onClick={()=>this.props.delList(this.props.num)} style={{ borderRadius: '50%', float: 'right', backgroundColor: 'rgb(251, 234, 118)', border: '1px solid white', color: 'white' }}>x</button>
            </li>
        )
    }

}