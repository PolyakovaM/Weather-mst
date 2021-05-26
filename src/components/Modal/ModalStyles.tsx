import styled from 'styled-components/macro'

type TButtonActiveTypes = {
  buttonActive: boolean
}

type TModalWindowActiveType = {
  modalWindowActive: boolean
}

export const ModalDiv = styled.div`
  margin-top: 20px;
`

export const ModalButton = styled.button``

export const ModalWindowDiv = styled.div<TButtonActiveTypes>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  opacity: ${({ buttonActive }) => buttonActive ? 1 : 0};
  pointer-events: ${({ buttonActive }) => buttonActive ? 'all' : 'none'}
`

export const ModalWindowContent = styled.div<TModalWindowActiveType>`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  width: 50vw;
  transform: ${({ modalWindowActive }) => modalWindowActive ? 'scale(1)' : 'scale(0.5)'};
  transition: .4s all;
`