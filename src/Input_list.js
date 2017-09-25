import React, {Component} from 'react'

export default class InputList extends Component{

    render(){
        return(
            <div style={{padding: '10px'}}>
                <input style={{ width: '84%' }} type="text" ref="topic" onKeyPress={ (e)=>{  this.props.keyData(e) 
                                                                    if(e.key === 'Enter'){
                                                                        this.props.addList()
                                                                        this.refs.topic.value = ""
                                                                    }
                                                                 } } onChange={ (e)=>this.props.keyData(e) }/>
                <button style={{ width: '15%' }} type="button" onClick={ ()=>{ this.props.addList()
                                                      this.refs.topic.value = "" } }>Add</button>
            </div>
        )
    }

}  