export type HeroCardType = {
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

export type EventCardType = {
    type: CardTypes
    name: string
    text?: Array<string>
    image: string
    price: number
}

export type ICard = HeroCardType | EventCardType

////////////////////////////////////////////////////////////////////// ENUMS

export enum CardTypes {
    HERO = 'Герой',
    EVENT = 'Событие'
}

export enum Tags {
    ARMOR = 'Броня',
    DAIL = 'Дэйл',
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
    SHIELD = 'Shield',
    TACTICS = 'Tactics'
}