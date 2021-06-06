import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { ModalProps } from './ModalTypes'
import styled from 'styled-components'
import Themes from '../../styles/theme'
import { VscChromeClose } from 'react-icons/all'
import { mainStore } from '../../store/mainStore'

const Modal = ({ theme, children, title }: ModalProps): ReactElement => {
    const { base } = mainStore

    return (
        <CoreBlock>
            <Container theme={theme}>
                <Title theme={theme}>
                    {title}
                    <Close theme={theme} onClick={() => mainStore.setModal(false)}/>
                </Title>
                <Content theme={theme}>
                    {children}
                </Content>
            </Container>
        </CoreBlock>
    )
}

const Content = styled.div<{ theme: string }>`
    padding: 20px;
`

const Close = styled(VscChromeClose)<{ theme: string }>`
    position: absolute;
    right: 10px;
    color: ${({ theme }) => Themes[theme].dark};
    cursor: pointer;
`

const Title = styled.div<{ theme: string }>`
    color: ${({ theme }) => Themes[theme].dark};
    width: 100%;
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid ${({ theme }) => Themes[theme].secondary};
    padding: 10px 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CoreBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
`

const Container = styled.div<{ theme: string }>`
    min-width: 600px;
    min-height: 600px;
    height: fit-content;
    max-height: 900px;
    overflow-y: auto;
    width: fit-content;
    transition: all .2s linear;
    border: 2px solid ${({ theme }) => Themes[theme].secondary};
    border-radius: 10px;
    background: ${({ theme }) => Themes[theme].medium};
`

export default observer(Modal)