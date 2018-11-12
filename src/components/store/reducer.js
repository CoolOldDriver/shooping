import * as actions from './actionType';
import {fromJS,set,get} from 'immutable';

const defaultState = fromJS({
    namea:"苹果",
    pricea:18,
    numa:0,
    tga:false,
    nameb:"梨子",
    priceb:20,
    numb:0,
    tgb:false
    
})

export default (state=defaultState,action)=>{
   if(action.type===actions.Pingguo){
      
        return state.merge({
                    numa: state.get('numa')+1,
                    tga: action.tga
                })
       


   }
   if(action.type===actions.Lizi){
        // let newState = JSON.parse(JSON.stringify(state));
        // newState.numb=newState.numb+1;
        // newState.tgb=action.tgb;
        return state.merge({
            numb: state.get('numb')+1,
            tgb: action.tgb
        })
        
        // return newState
   } 
   if(action.type===actions.Jianone){
        // let newState = JSON.parse(JSON.stringify(state));
        // if(newState.numa>=1){
        //     newState.numa=newState.numa-1;
        // }else{
        //     newState.tga=false;
        // }
        if(state.get('numa')>=1){
            return state.set('numa',state.get('numa')-1)
        }else{
            return state.set('tga',false)
        }
        // return state.merge({
        //     numa: state.get('numa')-1,
        //     tga: false
        // })
    // return newState
    }
    if(action.type===actions.JianTwoo){
        // let newState = JSON.parse(JSON.stringify(state));
        // alert("aa")
        // if(newState.numb>=1){
        //     newState.numb=newState.numb-1;
        // }else{
        //     newState.tgb=false;
        // }
        if(state.get('numb')>=1){
            return state.set('numb',state.get('numb')-1)
        }else{
            return state.set('tgb',false)
        }
        // return state.merge({
        //     numb: state.get('numb')-1,
        //     tgb: action.tgb
        // })
        // return newState
    }
    if(action.type===actions.JianThree){
        // let newState = JSON.parse(JSON.stringify(state));
        // newState.tgb=false;
        // newState.tga=false;
        // newState.numa=0;
        // newState.numb*=0;
        // return newState;
        return state.merge({
            numa: 0,
            tga: false,
            numb: 0,
            tgb: false
        })
    }
    
    return state
}