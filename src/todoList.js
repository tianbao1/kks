import React, { Component } from 'react';
//import store from './store'
import {connect} from 'react-redux'
class todoList extends Component {
    // constructor(props) {
    //     super(props);
    //     //this.state = store.getState()
    //    // this.handleCg = this.handleCg.bind(this)
        
    // }
    render() { 
        return (
            <div>
                <input type="text" value={this.props.val || ''} onChange={this.props.handleCg} />
                <button onClick={this.props.add}>添加</button>
                <ul>
                    {
                        this.props.list.map((item,index) => {
                            return (
                                <li key={item} onClick={() => { this.props.del(index)}}>{ item}</li>
                           )
                       }) 
                    }
                   
                </ul>
            </div>
         );
    }
    // handleCg(e) {
    //     console.log(e.target.value)
    // }
}
const stateProps = (state) => {
    return {
        val: state.val,
        list:state.list
    }
}
const dispatchProps = (dispatch) => {
    return {
        handleCg(e) {
           // console.log(e.target.value)
            let action = {
                type: 'cg',
                val:e.target.value
            }
            dispatch(action)
        },
        add() {
            let action = {
                type: 'add'
            }
            dispatch(action)
        },
        del(index) {
            console.log(index)
            let action = {
                type: 'del',
                index:index
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateProps,dispatchProps)(todoList);