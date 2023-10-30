import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";


const GlobalStyle = createGlobalStyle`

  /* 글로벌(공통) 스타일 */
  body {
    background-image: url("/background.jpg");
  }
`;



function App() {


  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])




  const nextId = useRef(4);
  const handleInsert = (text) => {
    const todo = {
      id: uuidv4(),
      text: text,
      checked: false
    }
    setTodos(todos.concat(todo));
    nextId.current += 1; //nextId.current = nextId.current + 1;

  }

  const handleToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo), [todos])
  }


  // 지우기
  const handleRemove = (id) => { setTodos(todos.filter(todo => todo.id !== id)); }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoTemplate>
    </>
  );
}

export default App;





