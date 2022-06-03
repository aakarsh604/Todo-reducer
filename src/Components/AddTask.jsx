import React, { useContext, useState } from 'react';
import {Flex, Button, Input } from "@chakra-ui/react";
import { TodoContext } from '../Context/TodoContext';

const AddTask = () => {
  const [task, settask] = useState('');
  const {dispatch} = useContext(TodoContext);

  const handleAdd = () => {
    if ( task ){
      dispatch({type : "ADD_TODO" , payload : {
        id: Date.now(),
        value : task,
        status : false,
       }})
    }
    settask("");
  }

  return (
    <div>
        <Flex w="100%" m="auto" mt="20px">
          <Input value={task} type="text" placeholder="Add task..📝" onChange={(e)=>settask(e.target.value)} size="lg"/>
          <Button size="lg" bg="blue.500" fontSize="3xl" _hover={{bg: "blue.300"}} color="white" onClick={handleAdd}>+</Button>
        </Flex>
    </div>
  )
}

export default AddTask; 