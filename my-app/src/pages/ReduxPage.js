import React, { Component } from 'react'
import store from '../store/index'

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    if(this.unsubscribe){
      this.unsubscribe()
    }
  }
  add() {
    store.dispatch({type: 'ADD', payload: 100})
  }
  minus() {
    store.dispatch({type: 'MINUS', payload: 100})
  }
  asyncAdd() {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({type: 'ADD', payload: 100})
        // console.log('getState', getState());
      }, 1000)
    })
  }
  render() { 
    console.log(store)
    const {addReducer, minusReducer} = store.getState()
    return ( 
      <div>
        <h3>ReduxPage</h3>
        <div>
          {/* {store.getState()} */}
          <button onClick={this.add}>增加{addReducer}</button>
          <button onClick={this.asyncAdd}>异步增加</button>
          <button onClick={this.minus}>减少{minusReducer}</button>
        </div>
      </div>
     );
  }
}
 
export default ReduxPage;