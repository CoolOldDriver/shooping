import React,{Component,Fragment} from 'react';
import '../style.css';
import {actionCreators} from "./store"
import {connect} from 'react-redux';
class Right extends Component{
    render(){
        // console.log(this.props.lista)
        return(
            <Fragment>
                <div className="right">
                    <button onClick={this.props.clear}>清空所有</button>
                    <span>总共：{this.props.numa*this.props.pricea+this.props.numb*this.props.pricea}</span>
                    {
                        this.props.tga?
                                <div className="con">
                                    <h3>{this.props.namea}</h3>
                                    <p>价格：<span>{this.props.pricea}</span></p>
                                    <p>数量:<span>{this.props.numa}</span></p>
                                    <button onClick={this.props.pingguojian}>删除</button>
                                </div>:"" 
                    }
                    {
                        this.props.tgb?
                                <div className="con">
                                    <h3>{this.props.nameb}</h3>
                                    <p>价格：<span>{this.props.priceb}</span></p>
                                    <p>数量:<span>{this.props.numb}</span></p>
                                    <button onClick={this.props.lizijian}>删除</button>
                                </div>:"" 
                    }
                </div>
                
                
                    
            </Fragment>
        )
    }
}

const mapStateToProps =(state)=>({
    numa:state.getIn(['conponent','numa']),
    namea:state.getIn(['conponent','namea']),
    pricea:state.getIn(['conponent','pricea']),
    tga:state.getIn(['conponent','tga']),
    numb:state.getIn(['conponent','numb']),
    nameb:state.getIn(['conponent','nameb']),
    priceb:state.getIn(['conponent','priceb']),
    tgb:state.getIn(['conponent','tgb'])
})

const mapDispatchToProps=(dispatch)=>({
    pingguojian(){
        const action = actionCreators.Pingguojiann();
        dispatch(action)
    },
    lizijian(){
        const actions = actionCreators.Lizijiann();
        dispatch(actions)
    },
    clear(){
        const action = actionCreators.Clear();
        dispatch(action)
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Right)