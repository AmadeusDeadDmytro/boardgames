import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { mainStore } from '../../store/mainStore'
import Themes from '../../styles/theme'
import { GameModeProps } from './GameModeTypes'

const GameMode = ({ title, description, theme }:GameModeProps): ReactElement => {
    const { settings } = mainStore

    return (
        <Container theme={theme}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}

const Container = styled.div`
	border: 1px solid ${({ theme }) => Themes[theme].dark};
	padding: 20px;
	box-sizing: border-box;
	cursor: pointer;
	transition: all .1s linear;

	&:hover {
		border: 1px solid ${({ theme }) => Themes[theme].primary};
		color: ${({ theme }) => Themes[theme].primary};
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