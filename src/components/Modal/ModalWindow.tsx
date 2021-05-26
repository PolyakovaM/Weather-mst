import React, { ReactNode } from 'react'

import { ModalWindowDiv, ModalWindowContent } from './ModalStyles';

type TModalWindow = {
  active: boolean,
  setActive: (active: boolean) => void,
  children: ReactNode
}

export const ModalWindow = ({active, setActive, children} : TModalWindow) => {
  return (
    <ModalWindowDiv
      buttonActive={active} 
      onClick={() => setActive(false)}
    >
      <ModalWindowContent 
        modalWindowActive={active} 
        onClick={e => e.stopPropagation()}
      >
        {children}
      </ModalWindowContent>
    </ModalWindowDiv>
  )
}