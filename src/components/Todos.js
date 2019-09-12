import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component
{
	render()
	{
		return this.props.todo.map((each_todo)=>(
		  	<TodoItem key = {each_todo.id} each_todo = {each_todo} markComplete = 
		  	{this.props.markComplete} delTodo = {this.props.delTodo}/>
	  	));
	}
}

//Proptypes
Todos.propTypes = {
	todo: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}


export default Todos;
