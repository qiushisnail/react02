import React, { Component } from './kreact';
import ReactDOM from './kreact-dom';
import './index.css';

function Comp(props) {
  return <h2>函数组件，{props.name}</h2>
}

class Comp2 extends Component {
  render() {
    return (
      <h2>class组件</h2>
    )
  }
}
const users = [{ name: 'jerry', id: '1' }]
const jsx = (
  <div id='demo' className='box' style='color:green;'>
    <span>hi</span>
    <Comp name='kaikeba'></Comp>
    <Comp2></Comp2>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
)
ReactDOM.render(jsx, document.getElementById('root'));


