import React, {Component} from 'react';
import TodoItem from './todoitem';





class List extends Component{
    render(){
      return (// affichage du todos venant du père
        <div className="Liste">
          Todos: [{this.props.todos.length}]
          {this.showTodos(this.props.todos)}

        </div>
      );
    }

    showTodos(todos){//fction qui récupère un todo en param et l'affiche
      return(
        todos.map((todo,idx)=>{
        let str =todo.done? 'à faire':'déjà fait';
          return (
            <TodoItem Item={todo} idx={idx} toggleTodo={this.toggleTodo.bind(this)} />
          )
        })
      )
    }


    toggleTodo(todo,index,){//fction qui récupère le contenu au clic et le charge dans la propriété du père
      //console.log("todo clicked",todo)
      this.props.onTodoToggle(todo,index)//propriété venant du père initialisée ici afin d'être utilisée par ce même père

    }


    //toggleTodo(e){
      //e.preventDefault();
      //console.log("todo clicked")
    //}


  }


  export default List;