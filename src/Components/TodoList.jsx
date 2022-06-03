import { Box } from '@chakra-ui/react';
import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import TodoItem from './TodoItem';

const TodoList = () => {

  const {state} = useContext(TodoContext);
  return (
    <> 
    <Box fontSize="2xl" textAlign="start" p="0px 15px" mt="15px" fontWeight={700}>My Tasks :</Box>
    <div>{state.map(todo=>(
        <TodoItem key={todo.id} todo={todo}/>
    ))}</div>
    </>
  )
}

export default TodoList