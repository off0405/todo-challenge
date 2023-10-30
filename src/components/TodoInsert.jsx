import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import styled from 'styled-components';
import { FcCalendar } from "react-icons/fc";
import Calendar from "react-calendar";


const TodoFormInsertWrapper = styled.form`
  display: flex;
  background: none;
  border: 1px solid #494949;
  margin: 0 auto;
  width: 800px;
  border-radius: 20px;
  transition: 0.2s border; 

  &:hover {
  border:  1px solid #fff;
  

  }
`;

const StyledInput = styled.input`
/* 기본 스타일 초기화 */
  width: 600px;
  background: none;
  outline: none;
  border: none;
  padding-left: 2rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 0  20px 20px 0 ;
  background: none;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background;

  &:hover {
    background: #5a5c5e;
  }

`;



function TodoInsert({ onInsert }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  // Submit 제어 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      alert('내용을 입력하세요');
      return;
    }
    onInsert(value);
    setValue('');

  }



  return (
    <TodoFormInsertWrapper onSubmit={handleSubmit}>
      <StyledInput
        value={value}
        onChange={handleChange}
        type='text'
        placeholder='your to do list'>
      </StyledInput>

      <StyledButton type='submit'>
        <MdAdd />
      </StyledButton>

    </TodoFormInsertWrapper>
  );
}

export default TodoInsert;