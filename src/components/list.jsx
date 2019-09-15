import React, {Component} from 'react';
import TodoItem from './todoitem';





class List extends Component{

    constructor(props){
      super();
      this.state={
        selectedTodos:[]
      };

      this.processTodos = this.processTodos.bind(this);
      this.addToList = this.addToList.bind(this);
      this.toggleTodo = this.toggleTodo.bind(this);

    }

    render(){
      const afficher = this.state.selectedTodos.length > 0; // afficher recoit le nbre de todo selectionné
      return (// affichage du todos venant du père
        <div className="Liste">

          {afficher ? <button onClick={this.processTodos}>traiter</button> : null} 
          selected todos [{this.state.selectedTodos.length}]
          Todos: [{this.props.todos.length}]
          {this.showTodos(this.props.todos)}

        </div>
      );
    }



    processTodos(){
      //console.log("les todos à traiter",this.state.selectedTodos);
      let list = this.state.selectedTodos;
      list.forEach( item => item.done = !item.done ); //pour chaque elmnt dans list inverser les états
      this.setState({selectedTodos:list});
    }



    addToList(index,doAdd){
      //console.log(index,doAdd);
      let _todo = this.props.todos[index];                             //on crée une variable todo qui contient le todo qui nous concerne
      if(doAdd ){
          if(this.state.selectedTodos.indexOf(_todo) === -1){    //on s'assure q la val doAdd est à true et q l'élémt
                                                                      // q l'on veut ajouter n'est pas déjà dans la liste
              this.setState({
                selectedTodos:this.state.selectedTodos.concat(this.props.todos[index])
              });
          }
      }
      else{
        let _list = this.state.selectedTodos; //copier la liste des todos selectionnés dans une variable list
        _list.splice(index,1);   //la fontion splice récupère le 1er élément à partir duquel on veut commencer--
        this.setState({         //--les opérations et le nbre d'élément que l'on veut enlever aplliquer à _list
          selectedTodos: _list
        });
      }
    } 

    showTodos(todos){//fction qui récupère un todo en param et l'affiche
      return(
        todos.map((todo,idx)=>{
        let str =todo.done? 'à faire':'déjà fait';
          return (
            <TodoItem 
            key={todo.title+''+idx} 
            Item={todo} idx={idx} 
            addToList={this.addToList}
            toggleTodo={this.toggleTodo} />
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