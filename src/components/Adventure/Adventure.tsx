import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { mainStore } from '../../store/mainStore'
import Themes from '../../styles/theme'
import { AdventureProps } from './AdventureType'

const Adventure = ({ title, theme, disable, onClick }:AdventureProps): ReactElement => {
    const { settings } = mainStore

    return (
        <Container theme={theme} disable={disable} onClick={disable ? null : onClick}>
            <Title>{title}</Title>
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

export default observer(Adventure)