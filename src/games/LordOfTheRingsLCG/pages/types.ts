import { AdventureCardsType, ICard, PlayerCardsType } from "../types/cards";

export interface GAME_STATE {
    playerDeck: (allCards: PlayerCardsType) => ICard[],
    heroes: (allCards: PlayerCardsType) => ICard[],
    adventureDeck: (allCards: AdventureCardsType) => ICard[] | any[]
}