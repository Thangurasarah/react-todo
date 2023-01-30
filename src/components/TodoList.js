import React, {useState} from 'react';

import TodoForm from './TodoForm';

import Todo from './Todo';

function TodoList () {

    const [todos, setTodos]= useState([]);
    
    
    const addTodo = todo => {
    if(!todo.text || /^\$*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);

    console.log(...todos);  
    };
    
  const updatetodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removetodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
    const completetodo = id => {
      let updatedTodo =todos.map(todo =>{
        if(todo.id === id) {
          todo.isComplete =!todo.isComplete;
        }
        return todo;

      });
      setTodos(updatedTodo);
    };
    return (
    <>
        <h1>What' s your plan for today ?</h1>
        <TodoForm  onSubmit ={addTodo}/>
        <todos 
        todos ={todos} 
        removetodo={removetodo}
        updatetodo= {updatetodo}
        completetodo= {completetodo}
         />
        
        </>
  
  );
}

export default TodoList;