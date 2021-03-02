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
    tags?: Array<string>
    text?: Array<string>
    image: string
    price: number
    quote?: string
}

export type ItemCardType = {
    type: CardTypes
    name: string
    tags?: Array<string>
    text?: Array<string>
    image: string
    price: number
    quote?: string
}

export type ICard = HeroCardType | EventCardType | ItemCardType

////////////////////////////////////////////////////////////////////// ENUMS

export enum CardTypes {
    HERO = 'Герой',
    EVENT = 'Событие',
    ITEM = 'Предмет'
}

export enum Tags {
    ARMOR = 'Броня',
    DAIL = 'Дэйл',
    EAGLE = 'Орел',
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
    ACTION = 'Действие',
    ACTION_IN_BATTLE = 'Боевое действие'
}

export enum Icons {
    ATTACK = 'Attack',
    SHIELD = 'Shield',
    TACTICS = 'Tactics'
}