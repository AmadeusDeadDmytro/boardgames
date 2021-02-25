import Dealer from './cards/Dealer'
import HeroTemplate from './cards/heroes/template'
import { ICard } from './types/cards'
import React from 'react'
import styled from 'styled-components'

const LordOfTheRingLCG = () => {
    const renderCard = (card: ICard, type: string) => {
        return (
            <HeroTemplate name={card.name} tags={card.tags} text={card.text} />
        )
    }

    return (
        <GameArea>
            {Dealer.map((card, index) => {
                return <div key={index}>{renderCard(card.card, card.type)}</div>
            })}
        </GameArea>
    )
}

const GameArea = styled.div`
    padding: 20px;
`

export default LordOfTheRingLCG
