import React from 'react'
import styled from 'styled-components'
import { PlayerCards, AdventureCards } from './cards/Dealer'
import HeroTemplate from './cards/heroes/template'
import EventTemplate from './cards/events/template'
import ItemTemplate from './cards/items/template'
import AllyTemplate from './cards/allies/template'
import TargetTemplate from './cards/target/template'
import DangerTemplate from './cards/danger/template'
import LocationTemplate from './cards/location/template'
import EnemyTemplate from './cards/enemy/template'
import { CardTypes, ICard } from './types/cards'

const LordOfTheRingLCG = () => {
    const renderCard = (card: ICard) => {
        switch (card.type) {
        case CardTypes.ALLY:
            // @ts-ignore
            return <AllyTemplate card={card} />
        case CardTypes.HERO:
            // @ts-ignore
            return <HeroTemplate card={card} />
        case CardTypes.EVENT:
            // @ts-ignore
            return <EventTemplate card={card} />
        case CardTypes.ITEM:
            // @ts-ignore
            return <ItemTemplate card={card} />
        case CardTypes.TARGET:
            // @ts-ignore
            return <TargetTemplate card={card} />
        case CardTypes.DANGER:
            // @ts-ignore
            return <DangerTemplate card={card} />
        case CardTypes.LOCATION:
            // @ts-ignore
            return <LocationTemplate card={card} />
        case CardTypes.ENEMY:
            // @ts-ignore
            return <EnemyTemplate card={card} />
        default:
            return null
        }
    }

    return (
        <GameArea>
            {Object.keys(PlayerCards).map((key) => PlayerCards[key].map((card, index) => <CardWrapper key={index}>{renderCard(card)}</CardWrapper>))}
            <div style={{ width: '100%', padding: 40 }}>---------------------------------------------------------------------------------------------------------------------------------------------</div>
            {Object.keys(AdventureCards).map((key) => AdventureCards[key].cards.map((card, index) => <CardWrapper
                key={index}>{renderCard(card)}</CardWrapper>))}
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
