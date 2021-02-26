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
    quote?: string
}

export type ICard = HeroCardType

////////////////////////////////////////////////////////////////////// ENUMS

export enum CardTypes {
    HERO = 'Герой',
}

export enum Tags {
    ARMOR = 'Броня',
    GNOME = 'Гном',
    GONDOR = 'Гондор',
    NOBLE = 'Благородный',
    NOLDOR = 'Нолдор',
    Ranger = 'Рейнджер',
    ROHAN = 'Рохан',
    WARRIOR = 'Воин',
    WEAPON = 'Оружие',
    WOOD_ELF = 'Лесной эльф'
}

export enum Actions {
    REACTION = 'Реакция',
    ACTION = 'Действие'
}

export enum Icons {
    ATTACK = 'Attack',
    TACTICS = 'Tactics'
}