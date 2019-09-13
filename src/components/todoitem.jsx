import React, {Component} from 'react';





class TodoItem extends Component{
    render(){
      const todo=this.props.Item;
      const idx=this.props.idx;  
      let str =todo.done? 'à faire':'déjà fait';

      return (           // affichage du todos venant du père
        <div key="todo-{todo.title}">
            {todo.title} 
            <button onClick={() => this.props.toggleTodo(todo,idx)}>{str}</button>
        </div>
      );
    }

  }


  export default TodoItem;