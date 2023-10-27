import React, { useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  background: #495057;

  .input {
    width: 100%;
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }

    .button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
  }
`

const TodoInsert = styled.form`

`

function ToDoEdit(props) {
  const { selectedTodo, onUpdate } = props;
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e) => {
    setValue('')
    e.preventDefault();
  }

  return (
    <Background>
      <TodoInsert onSubmit={onSubmit}>
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          type='text'
          placeholder='your to do list' />

        <button type='submit'>수정하기</button>

      </TodoInsert>
    </Background>
  );
}

export default ToDoEdit;