import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import "../App.css";
import AddTask from './AddTask'
import TodoList from './TodoList'

const TodoApp = () => {
  return (
    <div>
      <Box color="white" w="35%" m="auto" h="750px" className='back' p="0px 15px" rounded="5px">
        <Text as="b" fontSize="4xl">TODO APP</Text>
        <AddTask/>
        <TodoList/>
      </Box>
    </div>
  )
}

export default TodoApp