import React, { useState } from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 1000px;
  height: 800px;
  background-image: url("/TodoTemplateBlock.png");
  position: relative; 
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

.app-title {
  font-size: 40px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #aaaec9;
}

.styledDate {
    width: 100%;
    display: block;
    color: #aaaec9b3;
    height: 6px;
    font-size: 1rem;
    padding-bottom: 50px;
    margin: 0 auto;
    text-align: center;
    font-style: italic;
  }
`;



// children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링 


function TodoTemplate(props) {
  const { children } = props;

  const [time, setTime] = useState(new Date());


  return (
    <TodoTemplateBlock>
      <div className='app-title'>TO DO LIST</div>
      <div className='styledDate'>
        {'Today  ' + time.toLocaleDateString()}
      </div>
      <div>{children}</div>
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;