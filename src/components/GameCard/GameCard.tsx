import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { GameCardProps } from './GameCardType'
import styled from 'styled-components'

const GameCard = ({ image, onClick }: GameCardProps): ReactElement => (
    <Container image={image} onClick={onClick}>
            fds
    </Container>
)

const Container = styled.div<{ image: string }>`
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    opacity: 0.4;
    width: 400px;
    height: 400px;
    transition: all .2s linear;
    cursor: pointer;
  
    &:hover {
      opacity: 1;
      transition: all .2s linear;
    }
`

export default observer(GameCard)