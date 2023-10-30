import styled, { createGlobalStyle } from "styled-components";
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

const Clear = styled.div`
  color: #fff;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 50px;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 50px;
  transition: 0.3s;
  

  &:hover {
    background-color: #aaaec9;
    border: 1px solid #aaaec9;
  }
  
`



function App() {


  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  // Edit
  const [editTodo, setEditTodo] = useState({});
  const handleChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value
    })
  }

  const handleEdit = () => {
    setTodos(todos.map((todo) => todo.id === editTodo.id ? editTodo : todo));
  }

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

  // 전체삭제
  const clear = (id) => { setTodos(todos.filter(todo => todo.id === id)); }
  console.log(clear);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate todos={todos}>
        <TodoInsert onInsert={handleInsert} />
        <TodoList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
          editChange={handleChange}
          handleEdit={handleEdit}

        />
        <Clear onClick={clear}>CLEAR</Clear>

      </TodoTemplate>
    </>
  );
}

export default App;





