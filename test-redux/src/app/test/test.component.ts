import { Component, OnInit } from '@angular/core';
import {Store} from './store'

interface Action {
  type: string;
  payload?: any;
}

/*const action: Action = {
  type: 'ADD_TODO',
  payload: { label: 'Eat pizza,', complete: false },
};*/

export interface initialStateInterface {
  data: Array<object>,
  loaded: boolean,
  loading: boolean,
};

export const initialState: initialStateInterface  = {
  data: [{test:'test',test2:'test2'}],
  loaded: false,
  loading: false,
};

/**** TODO: ****/
export function todosReducer(state,action) {
  switch(action.type){
    case 'ADD_TODO':{
      const todo = action.payload;
      //const todos =[...state.data, todo];
      console.log(todo);
      return {todo};
    }
    case 'NOT_TODO':{
      const todo = action.payload;
      //const todos =[...state.data, todo];
      console.log(todo);
      return {todo};
    }
  }
  return state;
}
/***************/
const reducers = {
  todos: todosReducer,
};

const test = {
  name: 'David',
  address: '500 Missouri Ave'
}

//const store = new Store(reducers, initialState);

//const store = new Store(reducers, initialState);
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  store = new Store(reducers, initialState);
  constructor() { }
  
  ngOnInit() {
    //this.store;
    console.log(initialState);
   var obj = {
    type: 'ADD_TODO',
    payload: { label: 'Eat pizza', complete: false },
  }
    var newtest = this.store.dispatch(obj);

    console.log(this.store.value);
    //console.log(newtest);

    //const load = new store.dispatch('ADD_TODO');
    //console.log(load);
    //console.log('AFTER');
  }

  setup(){
    var setUpObj = {
      type: 'NOT_TODO',
      payload: { label: 'No Pizza', complete: true },
    }
    var newtest = this.store.dispatch(setUpObj);

  }
}
