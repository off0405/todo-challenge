import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import styled, { css } from 'styled-components';




const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #fff;
  & + & {
    border-top: 1px solid #dee2e6;
  }
`
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: ${props => props.checked && '#3d666d'};
  }
  `

const Title = styled.div`
  margin-left: 0.5rem;
  flex: 1; 

  /* 체크되었을 때 보여줄 스타일 */
  /* 조건부 스타일링 시 여러개의 css를 설정할 때는 아래와 같이 사용 */
  ${props => props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
      `
  }
`

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`



function TodoListItem(props) {
  const { id, text, checked, onToggle, onRemove } = props;

  return (
    <TodoListItemWrapper>
      <CheckBox checked={checked} onClick={() => { onToggle(id) }}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>



      <Title checked={checked}>{text}</Title>

      <Remove onClick={() => { onRemove(id) }}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;