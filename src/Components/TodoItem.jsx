import { Checkbox, Flex, Spacer } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext';

const TodoItem = ({todo}) => {

  const {dispatch} = useContext(TodoContext);
  return (
    <Flex mt="5px" p="5px 10px">
      <Checkbox size="lg" checked={todo.status} style={{color : todo.status ? "red": "white" }} onChange={()=>{
        dispatch({type: "TOGGLE_TODO", payload: todo.id})}}>{todo.value}</Checkbox>
      <Spacer/>
      <DeleteIcon color="yellow.300" w={25} h={25} cursor="pointer" onClick={()=>{dispatch({type: "REMOVE_TODO", payload: todo.id})}}/>
    </Flex>
  )
}

export default TodoItem;