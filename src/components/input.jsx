import React, {Component} from 'react';



 

class Input extends Component{


   
    render(){
      return (
        <div className="form">
            <input type='text' ref={(input) => this.todoTitle = input}/>
            <button onClick={this.onClick.bind(this)}>{this.props.btnText}</button>
        </div>
      );
    }


    onClick(evt){
        evt.preventDefault();
        const txt = this.todoTitle.value;
        this.todoTitle.value='';
        this.props.oneAction({
            title: txt,
            done:false,
            createdAt: new Date()
        });
    }

  }


  export default Input;