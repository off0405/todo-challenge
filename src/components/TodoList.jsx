import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  overflow-x: auto; // 넘치면 스크롤
`



function TodoList(props) {
  console.log(props);
  const { id, todos, onToggle, onRemove } = props;
  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return <TodoListItem id={todo.id} text={todo.text} checked={todo.checked} onToggle={onToggle} onRemove={onRemove} />
      })}
    </TodoListWrapper>
  );
}

export default TodoList;