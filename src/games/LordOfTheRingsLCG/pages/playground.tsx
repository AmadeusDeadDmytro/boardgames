import { observer } from 'mobx-react'
import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Prompt } from 'react-router'

import { mainStore } from '../../../store/mainStore'
import { Navbar } from '../../../modules'
import Theme from '../../../styles/theme'
import { useDocumentTitle } from '../../../hooks'
import HeroTemplate from '../cards/heroes/template'
import {
    LogContainer,
    LogButton,
    PlayerDeck,
    GameArea,
    PlayerDeckCountText,
    AdventureDeck,
    AdventureDeckCountText,
    HeroBlock,
    Hero
} from './playgroundStyles'
import * as Helpers from '../helpers/helpers'
import * as Dealer from '../cards/Dealer'
import { CardTypes, ICard } from '../types/cards'

const renderCard = (card: ICard) => {
    console.log(card)
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

const Playground = (): ReactElement => {
    const { settings, game } = mainStore
    const [logWindowActive, setLogWindowActive] = useState(false)
    const [gameState, setGameState] = useState({
        playerDeck: Helpers.preparePlayerDeck(Dealer.PlayerCards),
        heroes: Helpers.prepareHeroes(Dealer.PlayerCards),
        adventureDeck: Helpers.prepareAdventureDeck(
            Dealer.AdventureCards,
            game.preGameSettings.adventure
        ),
    })

    useDocumentTitle('Game...')

    useEffect(() => {
        mainStore.addLog('Игра загружается...')
    }, [])

    useEffect(() => {
        console.log(gameState)
    }, [gameState])

    return (
        <>
            <Prompt
                when={true}
                message="Вы уверены что хотите прервать игру и закрыть страницу?"
            />
            <Navbar theme={settings.theme} />
            <LogButton
                theme={settings.theme}
                onClick={() => setLogWindowActive((prev) => !prev)}
            >
                история
            </LogButton>
            <LogContainer
                theme={settings.theme}
                style={{ right: logWindowActive ? 0 : -420 }}
            >
                {game.log.map((l, idx) => (
                    <div className="log" key={idx}>
                        {l}
                    </div>
                ))}
            </LogContainer>

            <GameArea>
                <AdventureDeck>
                    <AdventureDeckCountText theme={settings.theme}>
                        {gameState.adventureDeck.length}
                    </AdventureDeckCountText>
                </AdventureDeck>
                <HeroBlock>
                    {gameState.heroes.map((hero, index) => {
                        return (
                            <Hero offset={index * 140} >
                                {renderCard(hero)}
                            </Hero>
                        )
                    })}
                </HeroBlock>
                <PlayerDeck>
                    <PlayerDeckCountText theme={settings.theme}>
                        {gameState.playerDeck?.length}
                    </PlayerDeckCountText>
                </PlayerDeck>
            </GameArea>
        </>
    )
}

export default observer(Playground)
