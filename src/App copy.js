import React, {Component} from 'react';
import List from './components/list';
import TodoForm from './components/todoform';
import './App.css';




class App extends Component {
 

  constructor(props){
    super(props);
    this.state={
      todos:[]
    };
  }


  oneNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList});
  }




  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>TodoApp</h2> 
        
        </header>
        <TodoForm oneNewTodo={this.oneNewTodo.bind(this)} />
        <List todos={this.state.todos} onTodoToggle={this.toggleTodoState.bind(this)}/>
      </div>
    );
  }

  toggleTodoState(todo,index){//fonction qui modifie une ligne en clicquant dessus. todo et index sont puisées dans onTodoToggle
    let _todo=todo;
    _todo.done=!todo.done;
    let newTodos=this.state.todos;
    newTodos[index]=_todo;
    this.setState({todos: newTodos});
  }
  
}

export default App;
