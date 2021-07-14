import { AdventureCardsType, Adventures, CardTypes, ICard, PlayerCardsType } from "../types/cards";

//TODO: REMADE THIS
export const preparePlayerDeck = (allCards: PlayerCardsType) => {
    return [
        ...allCards.TacticEventsDeck,
        ...allCards.TacticAllyDeck,
        ...allCards.TacticItemsDeck
    ]
}

//TODO: REMADE THIS
export const prepareAdventureDeck = (allCards: AdventureCardsType, adventure: string) => {
    return allCards.concentration_in_osgiliath.cards
}

//TODO: REMADE THIS
export const prepareHeroes = (allCards: PlayerCardsType) => {
    const result = []
    const heroes = [...allCards.TacticHeroesDeck]
    result.push(heroes[0])
    result.push(heroes[1])
    result.push(heroes[2])
    return result
}
