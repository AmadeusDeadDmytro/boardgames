import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { mainStore } from '../../store/mainStore'
import Themes from '../../styles/theme'
import { GameModeProps } from './GameModeTypes'

const GameMode = ({ title, description, theme, disable, onClick }:GameModeProps): ReactElement => {
    const { settings } = mainStore

    return (
        <Container theme={theme} disable={disable} onClick={onClick}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}

const Container = styled.div<{ theme: string, disable: boolean }>`
	border: 1px solid ${({ theme, disable }) => disable ? Themes[theme].disable : Themes[theme].dark};
	padding: 20px;
	box-sizing: border-box;
	cursor: ${({ disable }) => disable ? 'initial' : 'pointer'};
	transition: all .1s linear;
	margin-bottom: 20px;
	color: ${({ theme, disable }) => disable ? Themes[theme].disable : Themes[theme].dark};

	&:hover {
		border: 1px solid ${({ theme, disable }) => disable ? Themes[theme].disable : Themes[theme].primary};
		color: ${({ theme, disable }) => disable ? Themes[theme].disable : Themes[theme].primary};
		transition: all .1s linear;
	}
`

const Title = styled.div`
	font-weight: 600;
	font-size: 20px;
`

const Description = styled.div`
	font-style: italic;
`

export default observer(GameMode)