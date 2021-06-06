import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Theme from '../../styles/theme'
import { mainStore } from '../../store/mainStore'
import { ButtonProps } from './ButtonTypes'
import { AiOutlineLoading } from 'react-icons/all'

const ButtonComponent = ({ children, onClick, className, loading }: ButtonProps): ReactElement => {
    const { settings } = mainStore

    return (
        <SButton theme={settings.theme} onClick={onClick} className={className}>
            {loading
                ? (
                    <div className="flex-center">
                        <AiOutlineLoading className="loading absolute-center"/>
                        <span className="invisible">{children}</span>
                    </div>
                )
                : children
            }
        </SButton>
    )
}

export const SButton = styled.button<{ theme: string }>`
  outline: none;
  box-shadow: none;
  background: ${({ theme }) => Theme[theme].secondary};
  color: ${({ theme }) => Theme[theme].primary};
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme ? Theme[theme].primary : ''};
  transition: all .2s linear;
  font-size: 16px;

  &:hover {
    border: 2px solid ${({ theme }) => theme ? Theme[theme].secondary : ''};
    color: ${({ theme }) => Theme[theme].secondary};
    background: ${({ theme }) => Theme[theme].primary};
    transition: all .2s linear;
  }
`

export const SIcon = styled.img`

`


export default observer(ButtonComponent)