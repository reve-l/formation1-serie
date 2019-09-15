import React, {Component} from 'react';


class TodoItem extends Component{
    render(){

      //variables du père récupérées dans les constantes
      const todo=this.props.Item;
      const idx=this.props.idx;  
      let str =todo.done? 'à faire':'déjà fait';

      return (           // affichage du todos venant du père
        <div key="todo-{todo.title}">
            <input type="checkbox" value={idx} onClick={(e)=>this.props.addToList(idx,e.target.checked)}/>
            {todo.title} 
            <button onClick={() => this.props.toggleTodo(todo,idx)}>{str}</button>
        </div>
      );
    }

  }

  //TodoItem.protoTypes = {   //délimite la liste des propriétés qu'attend ce composant
                          // elles sont obligatoires ou pas?
    //item: React.PropTypes.object.isRequired,
    //idx: React.PropTypes.number,
    //addToList: React.PropTypes.func,
    //toggleTodo: React.PropTypes.func
  //};

  export default TodoItem;