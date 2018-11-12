import { combineReducers} from 'redux-immutable'
import {reducer as ComponentRedecuer} from '../components/store/'

const reducer= combineReducers({
    conponent:ComponentRedecuer
})
export default reducer;

// import * as actions from './actionType'; 
// import {fromJS} from 'immutable';

// const defaultState = {
//     namea:"苹果",
//     pricea:18,
//     numa:0,
//     tga:false,
//     nameb:"梨子",
//     priceb:20,
//     numb:0,
//     tgb:false
    
// }

// export default (state=defaultState,action)=>{
//    if(action.type===actions.Pingguo){
//        let newState = JSON.parse(JSON.stringify(state));
//         newState.numa=newState.numa+1;
//         newState.tga=action.tga;

       
//        return newState

//    }
//    if(action.type===actions.Lizi){
//         let newState = JSON.parse(JSON.stringify(state));
//         newState.numb=newState.numb+1;
//         newState.tgb=action.tgb;

        
//         return newState
//    } 
//    if(action.type===actions.Jianone){
//         let newState = JSON.parse(JSON.stringify(state));
//         if(newState.numa>=1){
//             newState.numa=newState.numa-1;
//         }else{
//             newState.tga=false;
//         }
//     return newState
//     }
//     if(action.type===actions.JianTwoo){
//         let newState = JSON.parse(JSON.stringify(state));
//         // alert("aa")
//         if(newState.numb>=1){
//             newState.numb=newState.numb-1;
//         }else{
//             newState.tgb=false;
//         }
//         return newState
//     }
//     if(action.type===actions.JianThree){
//         let newState = JSON.parse(JSON.stringify(state));
//         newState.tgb=false;
//         newState.tga=false;
//         newState.numa=0;
//         newState.numb*=0;
//         return newState;
//     }
    
//     return state
// }