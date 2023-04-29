import React, { Component } from 'react'
import './TodoApp.css'

export class TodoApp extends Component {
  state = {
    input:"",
    items:[]
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  storeItem = event => {
    event.preventDefault();
    const {input} = this.state;

    this.setState({
      items:[...this.state.items,input],   // (...)spread operator
      input: ""
    });

  };

  deleteItem = key =>{
    console.log(key);
    // const allItem = this.state.items;
    // allItem.splice(key,1);

    this.setState({
      items:this.state.items.filter((data, index) => index !== key)
    });
  };

  render() {
    const { input ,items} = this.state;
    console.log(items);
    
    return (
      <div className='todo-container'>


        <form className='input-section' onSubmit={this.storeItem}>
            <h1>Todo App</h1>
            <input type="text" onChange={this.handleChange} 
            value={input}
            placeholder='Enter Items'/>
        </form>

        <ul>
            {items.map((data,index)=>(
              <li key={index}>
                {data}
                <i className="fa-solid fa-trash-can" onClick={()=> this.deleteItem(index)} >
                </i></li>
            ))}
        </ul>
      </div>
    )
  }
}

export default TodoApp
