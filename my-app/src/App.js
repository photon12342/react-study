import React from 'react';
// import MyRCFieldForm from './pages/MyRCFieldForm';
// import MyRcForm from './pages/MyRcForm';
import ReduxPage from './pages/ReduxPage';
// import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyRCFieldForm/> */}
        {/* <MyRcForm/> */}
        <ReduxPage/>
      </header>
    </div>
  );
}

// const array1 = [1,2,3,4]
// const reducer = (accumulator, currentValue) => accumulator + currentValue

// console.log(array1.reduce(reducer))
// console.log(array1.reduce(reducer, 5))

// function f1(arg){
//   console.log('f1', arg)
//   return arg
// }
// function f2(arg){
//   console.log('f2', arg)
//   return arg
// }
// function f3(arg){
//   console.log('f3', arg)
//   return arg
// }
// let res = compose(f1, f2, f3)('omg')
// function compose(...funcs) {
//   if(funcs.length === 0) {
//     return args => args
//   }
//   if(funcs.length === 1) {
//     return funcs[0]
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }
// console.log('res', res)
export default App;
