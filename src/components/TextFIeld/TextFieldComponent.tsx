import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Theme from '../../styles/theme'
import { mainStore } from '../../store/mainStore'
import { TextFieldProps } from './TextFieldTypes'

const TextFieldComponent = ({ onChange, label, type, width }: TextFieldProps): ReactElement => {
    const { settings } = mainStore

    return (
        <>
            {label && <Label theme={settings.theme}>{label}</Label>}
            <Input theme={settings.theme} onChange={onChange} type={type} width={width}/>
        </>
    )
}

export const Label = styled.span`
    color: ${({ theme }) => Theme[theme].primary}; 
    margin-top: 3px;
    display: block;
`

export const Input = styled.input<{ theme: string, width: number }>`
    border: none;
    outline: none;
    box-shadow: none;
    background: ${({ theme }) => Theme[theme].secondary};
    color: ${({ theme }) => Theme[theme].primary};  
    padding: 2px;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme ? Theme[theme].primary : ''};
    transition: all .2s linear;
    height: 40px;
    width: ${({ width }) => width ? width + 'px' : '100px'};
    min-width: 100px;
    font-size: 14px;
    display: block;
    transition: all .2s linear;

    &:focus {
        box-shadow: 0px 0px 6px 0px ${({ theme }) => theme ? Theme[theme].primary : ''};
        transition: all .2s linear;
    }
`


export default observer(TextFieldComponent)