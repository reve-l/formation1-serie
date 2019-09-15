import React, {Component} from 'react';
import List from './components/list';
import Input from './components/input';
import './App.css';




class App extends Component {
 

  constructor(props){
    super(props);
    this.state={
      todos:[]
    };
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>TodoApp</h2> 
        </header>
        {this.renderInput()}
        {this.renderSearchInput()}
        <List todos={this.state.todos} onTodoToggle={this.toggleTodoState.bind(this)}/>
      </div>
    );
  }

  
  renderInput(){
    return( <Input btnText={"créer le todo"} oneAction={this.oneNewTodo.bind(this)} />
    );
  }

  renderSearchInput(){
    return( <Input btnText={"recherche"} oneAction={this.oneSearch.bind(this)} />
    );
  }



  oneNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList});
  }

  oneSearch(){
    console.log("recherche...");
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
