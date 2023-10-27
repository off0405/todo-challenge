import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto; // 넘치면 스크롤
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