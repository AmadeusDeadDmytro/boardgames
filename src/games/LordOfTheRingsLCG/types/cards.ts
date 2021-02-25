export interface HeroCardType {
    type: CardTypes
    name: string
    hazardLevel: number
    willpower: number
    attack: number
    defend: number
    health: number
    image: string
    tags?: Array<Tags>
    text?: Array<string>
}

export type ICard = HeroCardType

////////////////////////////////////////////////////////////////////// ENUMS

export enum CardTypes {
    HERO = 'Герой',
}

export enum Tags {
    ARMOR = 'Броня',
    GONDOR = 'Гондор',
    ROHAN = 'Рохан',
    WARRIOR = 'Воин',
    WEAPON = 'Оружие',
}

export enum Actions {
    REACTION = 'Реакция'
}

export enum Icons {
    TACTICS = 'Tactics'
}