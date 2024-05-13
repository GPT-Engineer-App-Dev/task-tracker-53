import React, { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, ListIcon, IconButton, Text, HStack } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Todo App
        </Text>
        <HStack width="100%">
          <Input placeholder="Add a new task..." value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <Button onClick={handleAddTodo} colorScheme="blue">
            Add
          </Button>
        </HStack>
        <List width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} paddingY={2} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{todo}</Text>
              <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
