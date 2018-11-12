import React,{Component} from 'react';
import '../style.css';
import {connect} from 'react-redux';
import {actionCreators} from "./store"

class Left extends Component{
    render(){
        return(
            <div className="left">
                <button onClick={this.props.pingguo}>苹果</button><br/>
                <button onClick={this.props.lizi}>梨子</button><br/>
                {/* <button>香蕉</button><br/> */}
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    numa:state.numa,
    pricea:state.pricea,
    namea:state.namea
})

const mapDispatchToProps=(dispatch)=>({
    pingguo(){
        const action = actionCreators.Pingguoo();
        dispatch(action)
    },
    lizi(){
        const action = actionCreators.Lizii();
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Left)