import React, {Component} from 'react'
import InputList from './Input_list'
import TodoList from './Todolist'
import Total from './Total'

export default class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            text: '',
            topic: []
        }
    }

    finished = (num) => {
        this.state.topic[num].checked = !this.state.topic[num].checked
        this.setState({
            topic: this.state.topic,
        })
    }

    keyData = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    addList = () => {
        if(this.state.text === ""){
            alert('กรุณากรอกข้อมูล')
            return false
        }

        this.setState({
            topic: this.state.topic.concat({ name: this.state.text, checked: false }),
            text: '',
        })
    }

    delList = (position) => {
        this.state.topic.splice(position, 1)
        this.setState({
            topic: this.state.topic,
        })
    }

    render(){
        var done=0, progress=0
        return(
            <div>
                <InputList addList={this.addList} keyData={this.keyData} />
                <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
                   {
                        this.state.topic.map((index, key) => {
                            index.checked ? done++ : progress++
                            return <TodoList checked={index.checked} num={key} key={key} name={index.name} finished={this.finished} delList={this.delList} /> })
                   }
                </ul>
                <Total total={this.state.topic.length} progress={progress} done={done} />
            </div>
        )
    }

}