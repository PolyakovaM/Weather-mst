import React, { useState } from 'react'

import { ModalWindow } from './ModalWindow';
import { ModalButton, ModalDiv } from './ModalStyles';

export const ButtonToOpen = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <ModalDiv>
      <ModalButton onClick={() => setModalActive(true)}>Открыть модальное окно</ModalButton>
      <ModalWindow 
        active={modalActive} 
        setActive={setModalActive} 
      >
        <div>МОДАЛЬНОЕ ОКНО 1</div>
        <div>МОДАЛЬНОЕ ОКНО 2</div>
        <div>МОДАЛЬНОЕ ОКНО 3</div>
      </ModalWindow>
    </ModalDiv>
  )
}
