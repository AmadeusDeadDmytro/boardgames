import {
    TacticEventsDeck,
    TacticHeroesDeck,
    TacticItemsDeck,
    TacticAllyDeck,
    LeadershipHeroDeck,
    LeadershipEventDeck,
    LeadershipItemDeck,
    LeadershipAllyDeck, SpiritHeroDeck,
} from './cards/Dealer'
import HeroTemplate from './cards/heroes/template'
import EventTemplate from './cards/events/template'
import ItemTemplate from './cards/items/template'
import AllyTemplate from './cards/allies/template'
import { CardTypes, ICard } from './types/cards'
import React from 'react'
import styled from 'styled-components'

const LordOfTheRingLCG = () => {
    const renderCard = (card: ICard) => {
        switch (card.type) {
            case CardTypes.ALLY:
                // @ts-ignore
                return <AllyTemplate card={card}/>
            case CardTypes.HERO:
                // @ts-ignore
                return <HeroTemplate card={card}/>
            case CardTypes.EVENT:
                // @ts-ignore
                return <EventTemplate card={card}/>
            case CardTypes.ITEM:
                // @ts-ignore
                return <ItemTemplate card={card}/>
            default:
                return null
        }
    }

    return (
        <GameArea>
            {TacticHeroesDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            {LeadershipHeroDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            {SpiritHeroDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            <div style={{width: '100%'}}></div>
            {TacticEventsDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            {LeadershipEventDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            <div style={{width: '100%'}}></div>
            {TacticItemsDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            {LeadershipItemDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            <div style={{width: '100%'}}></div>
            {TacticAllyDeck.map((card, index) => {
                return <CardWrapper key={index}>{renderCard(card)}</CardWrapper>
            })}
            {LeadershipAllyDeck.map((card, index) => {
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
