import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Theme from '../../styles/theme'
import { mainStore } from '../../store/mainStore'
import { ButtonProps } from './ButtonTypes'

const ButtonComponent = ({ children, onClick, className }: ButtonProps): ReactElement => {
    const { settings } = mainStore

    return (
        <Button theme={settings.theme} onClick={onClick} className={className}>
            {children}
        </Button>
    )
}

export const Button = styled.button<{ theme: string }>`
  outline: none;
  box-shadow: none;
  background: ${({ theme }) => Theme[theme].secondary};
  color: ${({ theme }) => Theme[theme].primary};  
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme ? Theme[theme].primary : ''};
  transition: all .2s linear;

  &:hover {
    border: 2px solid ${({ theme }) => theme ? Theme[theme].secondary : ''};
    color: ${({ theme }) => Theme[theme].secondary};  
    background: ${({ theme }) => Theme[theme].primary};
    transition: all .2s linear;
  }
`


export default observer(ButtonComponent)