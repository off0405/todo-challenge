import React, { useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdCheckCircle,
  MdCancel,
  MdModeEdit,

} from 'react-icons/md';
import styled, { css } from 'styled-components';



const TodoContainer = styled.div`
  display: flex;
`

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  background: #1c416b6f;
  width: 228px;
  height: 80px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  color: #ffffff;
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

const FixBox = styled.div`
  display: flex;
  svg {
    font-size: 1.5rem;
    margin-left: 10px;
    transition: 0.1s;
    cursor: pointer;
    
    &:hover {
    color: #ff8787;
    }
  }

  .fixBoxinput {
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    width: 100px;
    color: #fff;
  }
`;

const FixedBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #ff8787;
  }
`;

function TodoListItem(props) {
  const { id, text, checked, onToggle, onRemove, handleFixValue } = props;
  const [showBox, setShowBox] = useState(false);
  const [fixText, setFixText] = useState(text)

  const handleFixBtn = () => {
    setShowBox(!showBox)
  }
  const fixValue = (e) => {
    setFixText(e.target.value)
  }
  return (
    <TodoContainer>
      <TodoListItemWrapper>
        <CheckBox checked={checked} onClick={() => { onToggle(id) }}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </CheckBox>

        <Title checked={checked}>
          {showBox
            ?
            <FixBox>
              <input className='fixBoxinput' onChange={fixValue} value={fixText} />
              <MdCheckCircle
                onClick={() => {
                  handleFixValue(id, fixText)
                  handleFixBtn()
                }}
              />
            </FixBox>
            :
            <div className='textbox1'>{text}</div>}
        </Title>


        <FixedBtn
          onClick={() => {
            handleFixBtn()
          }}
        >
          {showBox ? <MdCancel /> : <MdModeEdit />}
        </FixedBtn>


        <Remove onClick={() => { onRemove(id); }}>
          <MdRemoveCircleOutline />
        </Remove>
      </TodoListItemWrapper>
    </TodoContainer >
  );
}

export default TodoListItem;

