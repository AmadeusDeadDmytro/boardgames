import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { GameCardProps } from './GameCardType'
import styled from 'styled-components'
import Themes from '../../styles/theme'

const GameCard = ({ image, onClick, theme }: GameCardProps): ReactElement => (
    <Container image={image} onClick={onClick} theme={theme}/>
)

const Container = styled.div<{ image: string, theme: string }>`
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    opacity: 0.4;
    width: 400px;
    height: 400px;
    transition: all .2s linear;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0);
  
    &:hover {
      opacity: 1;
      transition: all .2s linear;
      border: 2px solid ${({ theme }) => Themes[theme].primary};
    }
`

export default observer(GameCard)