import React,{Component} from 'react';
import Left from './components/left'
import Right from './components/right';
import {Provider} from 'react-redux';
import store from './store'
class Todolist extends Component{
    render(){
        return(
            <Provider store={store}>
              <div>
               <Left />
               <Right />
            </div>
               
            </Provider>
        )
    }
}

export default Todolist