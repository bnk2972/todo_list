import React, {Component} from 'react'

export default class Footer extends Component{

    render(){
        return(
            <div style={{padding: '10px', borderTop: '1px solid white'}}>
                Total : {this.props.total}, Done : {this.props.done}, Progress : {this.props.progress}
            </div>
        )
    }

}