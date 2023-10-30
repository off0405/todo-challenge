import React, { useState } from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 1000px;
  /* background-image: url("/TodoTemplateBlock.png"); */
  background-color: rgba(255, 255, 255, 0.05);
  position: relative; 
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 8px;  /* 스크롤바의 너비 */
    height: 800px;

  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #aaaec9; /* 스크롤바의 색상 */
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    height: 400px;
    background: rgba(255, 255, 255, 0.1);  /*스크롤바 뒷 배경 색상*/
  }
  


.app-title {
  font-size: 40px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #aaaec9;
}


.line-style {
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
  padding-top: 20px;
}

.styledDate {
    display: block;
    color: #aaaec9b3;
    height: 6px;
    font-size: 1rem;
    padding-bottom: 40px;
    text-align: center;
    font-style: italic;
  }

  .tasks-left {
    color: #fff;
  }

  `;



// children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링 


function TodoTemplate(props) {
  const { children, todos } = props;
  const [time, setTime] = useState(new Date());


  // 남은 할일 
  const renderComplete = () => {
    return todos.reduce((accumulator, current) => {
      if (current.checked === false)
        return accumulator + 1;
      return accumulator;
    }, 0);

  }

  return (
    <TodoTemplateBlock>
      <div className='app-title'>TO DO LIST</div>
      <div className='line-style'>
        <div className='styledDate'>
          {'Today  ' + time.toLocaleDateString()}
        </div>

        <div className="tasks-left">할 일 {renderComplete()}개</div>

      </div>
      <div>{children}</div>

    </TodoTemplateBlock>
  );
}

export default TodoTemplate;