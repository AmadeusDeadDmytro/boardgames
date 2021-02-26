import Dealer from './cards/Dealer'
import HeroTemplate from './cards/heroes/template'
import { ICard } from './types/cards'
import React from 'react'
import styled from 'styled-components'

const LordOfTheRingLCG = () => {
    const renderCard = (card: ICard) => {
        return (
            <HeroTemplate card={card}/>
        )
    }

    return (
        <GameArea>
            {Dealer.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
        </GameArea>
    )
}

const GameArea = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const CardWrapper = styled.div`
  margin: 5px;
`

export default LordOfTheRingLCG
